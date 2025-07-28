import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logoUrl =
    'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1753491823556_0.png';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Nossos Serviços', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    document.querySelector(href).scrollIntoView({
      behavior: 'smooth',
    });
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-white/80 backdrop-blur-lg shadow-subtle'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#hero"
          onClick={e => scrollToSection(e, '#hero')}
          className="flex items-center"
        >
          <img src={logoUrl} alt="NTC Brasil Logo" className="h-12 w-auto" />
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={e => scrollToSection(e, link.href)}
              className="text-brand-dark hover:text-brand-blue-dark transition-colors duration-300 font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          onClick={e => scrollToSection(e, '#contact')}
          className="hidden md:inline-block bg-brand-blue text-brand-white px-6 py-2 rounded-full font-bold hover:bg-brand-blue-dark transition-all duration-300 transform hover:scale-105"
        >
          Fale Conosco
        </a>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-brand-dark"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-brand-white shadow-lg absolute top-full left-0 w-full"
        >
          <nav className="flex flex-col items-center space-y-6 py-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={e => scrollToSection(e, link.href)}
                className="text-brand-dark text-lg hover:text-brand-blue-dark transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={e => scrollToSection(e, '#contact')}
              className="bg-brand-blue text-brand-white px-8 py-3 rounded-full font-bold hover:bg-brand-blue-dark transition-all duration-300 transform hover:scale-105"
            >
              Fale Conosco
            </a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
