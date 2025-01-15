"use client";
import React, { useEffect } from "react";

const AppointmentForm = () => {
  useEffect(() => {
    // Load the form embed script when the component mounts
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script on component unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full h-auto my-10">
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/oW5Jz73IkW4656Arekrk"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          borderRadius: "3px",
        }}
        id="inline-oW5Jz73IkW4656Arekrk" 
  data-layout="{'id':'INLINE'}"
  data-trigger-type="alwaysShow"
  data-trigger-value=""
  data-activation-type="alwaysActivated"
  data-activation-value=""
  data-deactivation-type="neverDeactivate"
  data-deactivation-value=""
  data-form-name="Portfolio Website Form"
  data-height="528"
  data-layout-iframe-id="inline-oW5Jz73IkW4656Arekrk"
  data-form-id="oW5Jz73IkW4656Arekrk"
  title="Portfolio Website Form"
      ></iframe>
    </div>
  );
};

export default AppointmentForm;

