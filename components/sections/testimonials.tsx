"use client";

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { SectionHeading } from '../ui/section-heading';

const testimonials = [
  {
    name: "Ana Silva",
    role: "CEO, TechCorp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    content: "O MindMeeting revolucionou nossas reuniões. Economizamos mais de 40 horas por mês em documentação e a qualidade das nossas decisões melhorou significativamente.",
    rating: 5
  },
  {
    name: "Dr. Carlos Santos",
    role: "Diretor Clínico, Hospital Central",
    image: "https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?w=400&h=400&fit=crop",
    content: "Como médico, posso focar 100% no paciente sabendo que o MindMeeting está documentando tudo com precisão. A IA especializada em saúde é impressionante.",
    rating: 5
  },
  {
    name: "Mariana Costa",
    role: "Head de Vendas, Sales360",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    content: "O ROI foi imediato. Nossa equipe comercial economiza horas em documentação e o acompanhamento de leads melhorou drasticamente.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="O que Nossos Clientes Dizem"
          subtitle="Empresas que já transformaram suas reuniões com o MindMeeting"
          centered
        />

        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic w-full text-center mx-auto">
                &ldquo;{testimonial.content}&rdquo;
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
