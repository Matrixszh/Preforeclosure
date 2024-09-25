import type { Metadata } from "next";
import logo from "../public/logo.png"
import "./globals.css";
import { Playfair_Display } from "next/font/google";
import Head from "next/head";
import Header from "@/components/Header";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});
// const playfair = Playfair_Display({ subsets: ['latin'] });


export const metadata: Metadata = {
  title: "Preforeclosure Queens",
  description: "Nita has been doing direct-to-seller since 2017 and has done numerous deals that include mainly preforeclosures and probates. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">

      <body className={`${poppins.className} `}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
