import { Navbar } from "@/components";
import "./globals.css";

export const metadata = {
  title: "Priyanshu",
  description: "Hello! This is My Protfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
