import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const logoUrl =
    'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1753491823556_0.png';

  const navLinks = [
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <Facebook />, href: '#', name: 'Facebook' },
    { icon: <Instagram />, href: '#', name: 'Instagram' },
    { icon: <Linkedin />, href: '#', name: 'LinkedIn' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    document.querySelector(href).scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <motion.footer
      className="bg-brand-dark text-brand-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo e Descrição */}
          <div className="md:col-span-1">
            <a
              href="#hero"
              onClick={e => scrollToSection(e, '#hero')}
              className="inline-block mb-6"
            >
              <img
                src={logoUrl}
                alt="NTC Brasil Logo"
                className="h-14 w-auto"
              />
            </a>
            <p className="text-slate-400 max-w-xs">
              Construindo o futuro com excelência, inovação e um compromisso
              inabalável com a qualidade.
            </p>
          </div>

          {/* Links de Navegação */}
          <div>
            <h3 className="text-lg font-bold text-brand-white mb-6">
              Navegação
            </h3>
            <ul className="space-y-4">
              {navLinks.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={e => scrollToSection(e, link.href)}
                    className="text-slate-400 hover:text-brand-blue-light transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato e Redes Sociais */}
          <div>
            <h3 className="text-lg font-bold text-brand-white mb-6">
              Siga-nos
            </h3>
            <p className="text-slate-400 mb-6">
              Conecte-se conosco nas redes sociais para ficar por dentro das
              novidades e projetos.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(social => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="bg-slate-700/50 hover:bg-brand-blue text-brand-white p-3 rounded-full transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-700 text-center text-slate-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} NTC Brasil. Todos os direitos
            reservados.
          </p>
          <p className="mt-2">
            Sua obra merece o melhor, conte com a NTC Brasil!
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
