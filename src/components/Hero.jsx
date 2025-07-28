import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const heroImageUrl =
    'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/construction-hero-image.jpg';

  const scrollToContact = e => {
    e.preventDefault();
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative bg-brand-white pt-32 pb-20 md:pt-48 md:pb-32"
    >
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white_0%,transparent_100%)]"></div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center md:text-left">
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold text-brand-dark leading-tight mb-6"
              variants={itemVariants}
            >
              Construindo o futuro com{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-blue-dark">
                excelência e inovação.
              </span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-brand-gray max-w-xl mx-auto md:mx-0 mb-8"
              variants={itemVariants}
            >
              Na NTC Brasil, transformamos projetos em realidade com soluções
              inteligentes, qualidade superior e compromisso com os prazos.
            </motion.p>
            <motion.div variants={itemVariants}>
              <a
                href="#contact"
                onClick={scrollToContact}
                className="inline-flex items-center justify-center bg-brand-blue text-brand-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-blue-dark transition-all duration-300 transform hover:scale-105 shadow-medium"
              >
                Transforme seu Projeto
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </motion.div>
          </div>
          <motion.div
            className="relative"
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="absolute -inset-2 bg-gradient-to-br from-brand-blue-light to-brand-blue-dark rounded-2xl opacity-50 blur-xl"></div>
            <img
              src={heroImageUrl}
              alt="Equipe de construção analisando planta de um projeto"
              className="relative w-full h-auto rounded-2xl shadow-medium object-cover"
              style={{ maxHeight: '500px' }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
