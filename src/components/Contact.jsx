import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Loader,
  Check,
  AlertTriangle,
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(null);

    try {
      const response = await fetch('/.netlify/functions/send-contact-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || 'Ocorreu uma falha ao enviar a mensagem.'
        );
      }

      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      setSubmitError(error.message);
      setTimeout(() => setSubmitError(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-brand-blue" />,
      text: '+55 44 99104-0774',
      href: 'tel:+5544991040774',
    },
    {
      icon: <Mail className="h-6 w-6 text-brand-blue" />,
      text: 'ffbrunoff@yahoo.com.br',
      href: 'mailto:ffbrunoff@yahoo.com.br',
    },
    {
      icon: <MapPin className="h-6 w-6 text-brand-blue" />,
      text: 'Rua Padre Lebret, 801, G05, Bloco 03',
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4">
            Vamos Construir Juntos
          </h2>
          <p className="text-lg text-brand-gray max-w-3xl mx-auto">
            Entre em contato conosco e descubra como podemos transformar seu
            projeto!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 bg-brand-white p-8 md:p-12 rounded-2xl shadow-medium">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h3 className="text-2xl font-bold text-brand-dark mb-6">
              Informações de Contato
            </h3>
            <p className="text-brand-gray mb-8">
              Estamos sempre disponíveis para discutir novas ideias e projetos.
              Utilize o formulário ou entre em contato diretamente através dos
              nossos canais.
            </p>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="bg-brand-blue/10 p-3 rounded-full">
                    {item.icon}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-brand-gray hover:text-brand-blue transition-colors"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-brand-gray">{item.text}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-brand-gray mb-2"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-100 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-blue focus:outline-none transition-shadow"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-brand-gray mb-2"
                >
                  Seu Melhor E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-100 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-blue focus:outline-none transition-shadow"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-brand-gray mb-2"
                >
                  Sua Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-100 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-blue focus:outline-none transition-shadow"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center bg-brand-blue text-brand-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-blue-dark transition-all duration-300 transform hover:scale-105 disabled:bg-brand-blue/70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <Loader className="animate-spin mr-2" />
                  ) : (
                    <Send className="mr-2 h-5 w-5" />
                  )}
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
              </div>
              {submitSuccess && (
                <div className="flex items-center text-green-600 bg-green-100 p-3 rounded-lg">
                  <Check className="mr-2" /> Mensagem enviada com sucesso!
                </div>
              )}
              {submitError && (
                <div className="flex items-center text-red-600 bg-red-100 p-3 rounded-lg">
                  <AlertTriangle className="mr-2" /> Erro: {submitError}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
