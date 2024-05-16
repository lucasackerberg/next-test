import { Hammersmith_One } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";

const hammersmith = Hammersmith_One({ 
  subsets: ["latin"], 
  weight: "400" 
});

export const metadata = {
  title: "The Squirrel Enjoyer",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={hammersmith.className}><Navbar></Navbar>{children}</body>
    </html>
  );
}
