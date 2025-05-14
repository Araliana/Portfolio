import type { Metadata } from "next";
import { Roboto, Poppins, Raleway } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "hi there!",
  description: "Sharren Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${poppins.variable} ${raleway.variable} index-page`}
      >
        {children}
      </body>
    </html>
  );
}
