import React, { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import forward from "../public/Forward.png";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "emailjs-com";
import "react-toastify/dist/ReactToastify.css";

interface PopupFormProps {
    isOpen: boolean;
    onClose: () => void;
}

const PopupForm: FC<PopupFormProps> = ({ isOpen, onClose }) => {
  const template = process.env.NEXT_PUBLIC_TEMPLATE;
  const service = process.env.NEXT_PUBLIC_SERVICE;
  const key = process.env.NEXT_PUBLIC_KEY;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    // } else if (formData.name.trim().length < 8) {
    //   errors.name = "Name must be at least 8 characters";
    // }

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (formData.phone.trim().length !== 10) {
      errors.phone = "Phone number must be of 10 digits";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
    }

    if (!formData.message.trim()) {
      errors.message = "Description is required";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    emailjs.send(
      service!,
      template!,
      formData,
      key
    ).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        setFormErrors({});
        setIsSubmitted(true);
        toast.success("Form Submitted Successfully!");
      },
      (err) => {
        console.log("FAILED...", err);
        toast.error("Form Submission Failed!");
      }
    );
  };

  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
      <div className="bg-black border-2 border-[#9E0506] rounded-lg p-8 w-full max-w-md">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Image src={forward} alt="forward" />
          <h2 className="text-white text-3xl font-bold">Get a Quote</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 bg-gray-800 text-white rounded"
            required
          />
          {formErrors.name && <p className="error-message text-red-500">{formErrors.name}</p>}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 bg-gray-800 text-white rounded"
            required
          />
          {formErrors.email && <p className="error-message text-red-500">{formErrors.email}</p>}
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 bg-gray-800 text-white rounded"
            required
          />
          {formErrors.phone && <p className="error-message text-red-500">{formErrors.phone}</p>}
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 bg-gray-800 text-white rounded h-32"
            required
          ></textarea>
          {formErrors.message && <p className="error-message text-red-500">{formErrors.message}</p>}
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-[linear-gradient(93deg,#E60404_0.45%,#800202_74.27%,#850202_99.52%,#820202_99.53%)] text-white px-6 py-2 rounded hover:opacity-90 transition-opacity"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700 transition-colors"
            >
              Close
            </button>
          </div>
        </form>
      </div>
      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
  );
};

export default PopupForm;
