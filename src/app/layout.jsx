import { Montserrat } from "next/font/google";
import "./globals.css";

const geistMontserrat = Montserrat({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
   title: "Nineteen bees",
  description: "Экосистема системного маркетинга",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
<link href="https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&display=swap" rel="stylesheet"></link>
      </head>
      <body
         className={`${geistMontserrat.variable} antialiased relative h-full`}
      >
        {children}
      </body>
    </html>
  );
}
