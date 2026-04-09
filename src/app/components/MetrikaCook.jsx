// components/CookieConsent.js
'use client';
import { useState, useEffect } from 'react';
import { usePathname, useSearchParams } from "next/navigation";
import Script from 'next/script';
import { useRouter } from "next/navigation";
const base = "https://19bees.ru";
export default function CookieConsent() {
  const [consent, setConsent] = useState(false);
  const [noconsent, setNoconsent] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Проверка существующего согласия
    const storedConsent = localStorage.getItem('cookieConsent');
    const storedNoconsent = localStorage.getItem('cookieNoconsent');
    if (storedConsent === 'true') {
      setConsent(true);
      setNoconsent(false);
      setIsOpen(true);
    } 
    if (storedNoconsent === 'true') {
      setConsent(false);
      setNoconsent(true);
      setIsOpen(true);
    } 

  }, []);
  const noAcceptCookies = () => {
    localStorage.setItem('cookieNoconsent', 'true');
    localStorage.setItem('cookieConsent', 'false');
    setNoconsent(true);
    setConsent(false);
    setIsOpen(true);
   
  };
  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
     localStorage.setItem('cookieNoconsent', 'false');
    setConsent(true);
    setNoconsent(false);
    setIsOpen(true);
  };
  const pathName = usePathname();
    const searchParams = useSearchParams();
   
    useEffect(() => {
      const params = searchParams.toString();
      const url = base + pathName + (params && "?" + params);
      // console.log(url);
   if(consent){
      ym(108091925, "hit", url);
   }
 
    }, [pathName, searchParams]);

  return (
    <>
      {consent && (
        <Script id="ga-script" strategy="afterInteractive">
          {`
           (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
 
        ym(108091925, "init", {
          defer: true,
          clickmap:true,
          webvisor:true,
          trackLinks:true,
          accurateTrackBounce:true,
        });    
          `}
        </Script>
      )}
      {!isOpen && (
        <div className={`cookie-banner fixed bottom-0 right-0 w-full md:w-1/2 lg:w-1/3 h-auto p-6 sm:p-8 z-100 backdrop-blur-2xl bg-white-op-70 rounded-lg`}>
          <p className='text-xs'>Мы используем обязательные технические cookie для корректной работы сайта, а также иные категории cookie, включая функциональные, аналитические и маркетинговые, для улучшения работы сайта и анализа взаимодействия посетителей. Вы можете принять все cookie или отклонить. Обработка персональных данных осуществляется в соответствии с <a href="/docs/privacy-policy" target='_blank' className='text-fuchsia-700 hover:text-fuchsia-500'>Политикой обработки персональных данных.</a> </p>
          <div className="flex gap-2 mt-4 ">
          <button className='cursor-pointer rounded-lg bg-darck flex items-center justify-center text-sm tracking-tight text-white px-3 py-2 whitespace-nowrap uppercase
          hover:bg-linear-to-r active:bg-linear-to-tr active:contrast-150
    hover:from-text-grad-2 hover:from-41.24% active:from-text-grad-2 active:from-41.24%
    hover:to-text-grad-3 hover:to-84.31% active:to-text-grad-3 active:to-84.31% transition-all duration-[.6s]' onClick={acceptCookies}>Принять</button>
     <button className='cursor-pointer rounded-lg bg-darck flex items-center justify-center text-sm tracking-tight text-white px-3 py-2 whitespace-nowrap uppercase 
          hover:bg-linear-to-r active:bg-linear-to-tr active:contrast-150
    hover:from-text-grad-2 hover:from-41.24% active:from-text-grad-2 active:from-41.24%
    hover:to-text-grad-3 hover:to-84.31% active:to-text-grad-3 active:to-84.31% transition-all duration-[.6s]' onClick={noAcceptCookies}>Отклонить</button>
    </div>
        </div>
      )}
      {isOpen && (
        <div onClick={() => setIsOpen(false)} className="fixed bottom-0 left-0 z-100 cursor-pointer p-2 backdrop-blur-2xl bg-white-op-70 rounded-lg">
          <p>Политика обработки персональных данных</p>
        </div>
        )}
    </>
  );
}