import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/sections/Header";
import { Footer } from "@/sections/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Plumber Point",
  description: "Developed by Ahsanul Haque",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
