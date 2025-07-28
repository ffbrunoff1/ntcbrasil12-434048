import React from 'react';
import { motion } from 'framer-motion';
import { HardHat, ClipboardList, Lightbulb, CheckCircle } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <ClipboardList className="h-10 w-10 text-brand-blue" />,
      title: 'Planejamento e Gestão de Obras',
      description:
        'Desenvolvemos cronogramas detalhados e estratégias de gestão para garantir que cada projeto seja executado com máxima eficiência, dentro do prazo e do orçamento.',
      imageUrl:
        'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/service-planning.jpg',
    },
    {
      icon: <HardHat className="h-10 w-10 text-brand-blue" />,
      title: 'Execução com Qualidade Superior',
      description:
        'Nossa equipe de campo é altamente qualificada para executar todas as fases da construção, utilizando materiais de primeira linha e seguindo os mais rigorosos padrões de qualidade.',
      imageUrl:
        'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/service-execution.jpg',
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-brand-blue" />,
      title: 'Inovação e Tecnologia Construtiva',
      description:
        'Incorporamos as mais recentes tecnologias e métodos construtivos para otimizar processos, aumentar a segurança e entregar soluções mais sustentáveis e inovadoras.',
      imageUrl:
        'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/service-innovation.jpg',
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-brand-blue" />,
      title: 'Consultoria e Viabilidade de Projetos',
      description:
        'Oferecemos análises completas de viabilidade técnica e econômica, ajudando nossos clientes a tomar as melhores decisões antes mesmo do início da obra.',
      imageUrl:
        'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/service-consulting.jpg',
    },
  ];

  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-brand-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4">
            Nossos Serviços de Excelência
          </h2>
          <p className="text-lg text-brand-gray max-w-3xl mx-auto">
            Oferecemos um portfólio completo de serviços para atender todas as
            necessidades do seu projeto de construção, do início ao fim.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-slate-50 rounded-2xl overflow-hidden shadow-subtle hover:shadow-medium transition-shadow duration-300 flex flex-col"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
            >
              <img
                src={service.imageUrl}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-brand-gray flex-grow">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
