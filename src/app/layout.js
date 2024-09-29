import { Navbar } from "@/components";
import "./globals.css";

export const metadata = {
  title: "Priyanshu",
  description: "Hello! This is My Protfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body id='style-2'>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
