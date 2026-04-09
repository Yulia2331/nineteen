import { Montserrat } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Script from 'next/script'
// import Metrika from "./components/Metrika";
import MetrikaCook from "./components/MetrikaCook";


const geistMontserrat = Montserrat({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
   title: "Nineteen bees",
  description: "Развитие бизнеса в сети",
};
export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="ru">
      <head>
    <link href="https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&display=swap" rel="stylesheet"></link>
    <meta name="yandex-verification" content="0fba6f8db94a0183" />

<meta name="google-site-verification" content="JhD-oS14MDNXEQwnl8RPBZEfNgg2qevXmxPpBmMeJd0" />
      </head>
      <body
         className={` antialiased relative h-full `}
      >
      
        {children}
  <Suspense>
       
          <MetrikaCook></MetrikaCook>
        </Suspense>
      <Script
          src="//code.jivosite.com/widget/FTzZayM3Pd"
          strategy="lazyOnload" // Загружает чат после загрузки основной страницы
        />
      </body>
    </html>
  );
}
