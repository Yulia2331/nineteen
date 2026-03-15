'use client'
import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Отправка...');

    try {
      const response = await fetch('wp-json/myplugin/v1/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Добавьте nonce для безопасности, если нужно
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Успешно!');
        setFormData({ name: '', email: '' }); // Очистка формы
      } else {
        setStatus('Ошибка отправки');
      }
    } catch (error) {
      setStatus('Ошибка сети');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Имя" />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <button type="submit">Отправить</button>
      <p>{status}</p>
    </form>
  );
}

