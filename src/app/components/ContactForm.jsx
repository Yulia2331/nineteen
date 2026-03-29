'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ContactForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: '', agree: true});
  const [status, setStatus] = useState('');
  const [error, setError] = useState("");
  const [pherror, setPhError] = useState(false);

  const handleChange = (e) => {
    // setPhError(false)
    //  const { name, value, type, checked } = e.target;
    // setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
    setPhError(false)
    setFormData({...formData, name: e.target.value})
  };

   const [isChecked, setIsChecked] = useState(false);

  const handleChangeCheck = (event) => {
    setIsChecked(!isChecked);
  };
  // console.log(formData);
// https://back.19bees.ru/wp-json/myplugin/v1/submit-form
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(isChecked == false || formData.name.length < 11){
      if(isChecked == false & formData.name.length < 11){
      setError('Нельзя отправить пустую форму')
      setPhError(true)
      } else if(isChecked == false){
      setError('Подтвердите свое согласие с условиями использования данных')
      } else {
      setError('Введите номер телефона')
      setPhError(true)
      }
    }
else{
      setError('')
      setPhError(false)
    setStatus('Отправка...');

    try {
      const response = await fetch('https://back.19bees.ru/wp-json/myplugin/v1/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Добавьте nonce для безопасности, если нужно
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Спасибо! Мы получили вашу заявку.');
        setFormData({ name: ''}); // Очистка формы
        router.push('/thanks');
      } else {
        setStatus('Ошибка отправки');
      }
    } catch (error) {
      setStatus('Ошибка сети');
    }
}
  };

  return (
    <div className="bg-[url('/img/cases-item-bg.png')] bg-size-[150%_70%] bg-bottom bg-no-repeat p-8">
      <h3 className="text-2xl sm:text-[32px] mb-5">Обсудить задачу</h3>
                <span className="text-[16px] before:h-2 before:w-2 before:rounded-full before:bg-green flex items-center gap-2">Мы в онлайне:</span>
                <div className="flex items-center gap-7 mt-3 mb-12">
                  <a href="https://t.me/Allakoala9" className="flex items-center gap-1">
                    <img src="/img/icon/tg.svg" alt="" />
                    <span className="text-[16px]">Telegram</span>
                  </a>
                   <a href="https://max.ru/u/f9LHodD0cOL1TBKpIYV2yvfq7IPI0UFN4TRvrHlzh88Y3BU8ff3tQ3Sybic" className="flex items-center gap-1">
                    <img src="/img/icon/max.svg" alt="" />
                    <span className="text-[16px]">Max</span>
                  </a>
                </div>
                <h4 className="text-lg sm:text-2xl">Оставьте номер телефона <br /> и мы вам перезвоним</h4>
     <form onSubmit={handleSubmit} className="mt-5">
          <label htmlFor="" className="text-[16px] block mb-3">Телефон</label>
          <input name="name" maxLength={12} value={formData.name.replace(/[^+\d.]/g, '')} onChange={handleChange} placeholder="" type="text" className={`text-[16px] bg-white rounded-[10px] w-full p-4 outline-darck-op  ${pherror ? 'border border-red-500' : ''}`}/>
          <div className="max-w-80 mt-3 checkbox">
            <input id="agree" name="agree" value="value" checked={isChecked} onChange={handleChangeCheck} className='hidden' type="checkbox" />
            <label htmlFor="agree" className={`text-xs leading-3.5 block relative pl-6 cursor-pointer
            before:absolute before:left-0 before:h-4 before:w-4 before:border before:border-fuchsia-500 before:rounded-xs
            after:absolute after:left-1 after:top-1 after:h-2 after:w-2 after:bg-fuchsia-500  after:rounded-xs 
            ${isChecked ? '' : 'after:hidden'}
  `}>Отправляя данную форму, Вы даете <a href="/docs/soglasie-polzovatelya-na-obrabotku-personalnyh-dannyh" target='_blank' className='text-fuchsia-700 hover:text-fuchsia-500'>Согласие Пользователя на обработку персональных данных</a> и <a href="/docs/privacy-policy" target='_blank' className='text-fuchsia-700 hover:text-fuchsia-500'>соглашаетесь с Политикой обработки персональных данных</a></label>
            </div>
          <button type="submit" className="cursor-pointer rounded-[60px] bg-darck flex items-center justify-center gap-2 text-sm sm:text-xl md:text-2xl tracking-[-0.5] text-white p-4 whitespace-nowrap w-full mt-6">Отправить</button>
          <p className='text-center mt-3 bg-clip-text text-transparent bg-linear-to-l from-text-grad-1 from-5.56% via-text-grad-2 via-41.24% to-text-grad-3 to-84.31% text-lg max-w-80 leading-5'>{status}</p>
          <p className='text-center mt-3 text-lg text-red-500 max-w-80 leading-5'>{error}</p>
      </form>
      </div>
  );
}

