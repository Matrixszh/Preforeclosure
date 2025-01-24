import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});
// const playfair = Playfair_Display({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL("https://preforeclosuresqueen.com"),
  title: "Preforeclosures Queen",
  description:
    "Nita has been doing direct-to-seller since 2017 and has done numerous deals that include mainly preforeclosures and probates. Currently, she is partnering with people nationwide and has a door knocking team in Illinois.",
  openGraph: {
    title: "Preforeclosures Queen",
    description:
      "Nita has been doing direct-to-seller since 2017 and has done numerous deals that include mainly preforeclosures and probates. Currently, she is partnering with people nationwide and has a door knocking team in Illinois.",
    images: [
      {
        url: "https://preforeclosuresqueen.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Preforeclosures Queen",
      },
    ],
    type: "website",
    url: "https://preforeclosuresqueen.com/logo.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Preforeclosures Queen",
    description:
      "Nita has been doing direct-to-seller since 2017 and has done numerous deals that include mainly preforeclosures and probates. Currently, she is partnering with people nationwide and has a door knocking team in Illinois.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.className} `}>
        <Header />
        {children}
      </body>
    </html>
  );
}
