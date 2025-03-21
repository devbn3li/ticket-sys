import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import "./globals.css";

const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  icons: [
    {
      url: "/favicon-32x32.png",
      rel: "icon",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`${inconsolata.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
