import React from 'react';
import { motion } from 'framer-motion';
import { Building, Target, ShieldCheck } from 'lucide-react';

export default function About() {
  const aboutImageUrl =
    'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/construction-about-us.jpg';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  const features = [
    {
      icon: <Target className="h-8 w-8 text-brand-blue" />,
      title: 'Nossa Missão',
      description:
        'Entregar projetos de construção que superem as expectativas, combinando engenharia de ponta, gestão eficiente e um profundo respeito pelo meio ambiente e pela segurança.',
    },
    {
      icon: <Building className="h-8 w-8 text-brand-blue" />,
      title: 'Nossa Visão',
      description:
        'Ser a referência no mercado de construção civil, reconhecida pela inovação, confiabilidade e pela criação de valor duradouro para nossos clientes, colaboradores e para a sociedade.',
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-brand-blue" />,
      title: 'Nossos Valores',
      description:
        'Compromisso com a qualidade, integridade em todas as ações, foco no cliente, segurança inegociável e busca contínua por inovação e sustentabilidade em cada obra.',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4">
            Sobre a NTC Brasil
          </h2>
          <p className="text-lg text-brand-gray max-w-3xl mx-auto">
            Fundada sobre os pilares da confiança e da competência, a NTC Brasil
            se dedica a construir mais do que edifícios: construímos relações
            duradouras e o futuro das cidades.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <img
              src={aboutImageUrl}
              alt="Engenheiros em uma obra da NTC Brasil"
              className="rounded-2xl shadow-medium w-full h-auto object-cover"
            />
          </motion.div>
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h3 className="text-2xl font-bold text-brand-dark">
              A base do nosso sucesso
            </h3>
            <p className="text-brand-gray">
              Com anos de experiência no setor da construção, nossa equipe de
              especialistas combina conhecimento técnico com uma paixão por
              inovação. Cada projeto é uma oportunidade para demonstrar nosso
              compromisso com a excelência, desde o planejamento inicial até a
              entrega final.
            </p>
            <p className="text-brand-gray">
              Acreditamos que a comunicação transparente e a parceria com nossos
              clientes são fundamentais para o sucesso de qualquer
              empreendimento.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-brand-white p-8 rounded-xl shadow-subtle text-center flex flex-col items-center"
              variants={itemVariants}
            >
              <div className="bg-brand-blue/10 p-4 rounded-full mb-6">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-brand-dark mb-3">
                {feature.title}
              </h4>
              <p className="text-brand-gray">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
