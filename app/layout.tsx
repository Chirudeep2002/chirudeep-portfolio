import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {

  title:
    "Chirudeep Bandapalli | AI Engineer & Software Developer",

  description:
    "Portfolio of Chirudeep Bandapalli showcasing AI systems, software engineering, machine learning, analytics, and full-stack development projects.",

  keywords: [
    "Chirudeep",
    "AI Engineer",
    "Software Engineer",
    "Machine Learning",
    "Data Science",
    "Next.js Portfolio",
    "Full Stack Developer",
    "Python Developer",
    "Analytics",
  ],

  authors: [
    {
      name: "Chirudeep Bandapalli",
    },
  ],

  creator:
    "Chirudeep Bandapalli",

  openGraph: {

    title:
      "Chirudeep Bandapalli Portfolio",

    description:
      "AI Engineer, Software Developer, and Data Science Enthusiast building intelligent systems and scalable applications.",

    url:
      "https://chirudeep-system.vercel.app/",

    siteName:
      "CHIRU.SYSTEM",

    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Chirudeep Portfolio",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {

    card: "summary_large_image",

    title:
      "Chirudeep Bandapalli Portfolio",

    description:
      "AI Engineer & Software Developer Portfolio",

    images: ["/preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html lang="en">

      <body>
        {children}
      </body>

    </html>
  );
}