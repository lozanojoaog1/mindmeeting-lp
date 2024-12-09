"use client";

import { motion } from 'framer-motion';
import { Clock, Brain, LineChart, Zap, Users, Shield } from 'lucide-react';
import { SectionHeading } from '../ui/section-heading';

const benefits = [
  {
    icon: Clock,
    title: "Economia de Tempo",
    description: "Reduza 32 horas mensais em documentação manual e foque no que realmente importa."
  },
  {
    icon: Brain,
    title: "IA Especializada",
    description: "Algoritmos treinados especificamente para seu setor de atuação."
  },
  {
    icon: LineChart,
    title: "ROI Comprovado",
    description: "Retorno médio de 2.236% sobre o investimento em apenas 90 dias."
  },
  {
    icon: Zap,
    title: "Automação Total",
    description: "Integração perfeita com suas ferramentas atuais, sem mudanças de processo."
  },
  {
    icon: Users,
    title: "Colaboração Eficiente",
    description: "Compartilhe insights e decisões com toda equipe automaticamente."
  },
  {
    icon: Shield,
    title: "Garantia de Resultado",
    description: "30 dias de garantia de satisfação e ROI garantido em 90 dias."
  }
];

export function Benefits() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Por que Escolher o MindMeeting?"
          subtitle="Transforme documentação manual em resultados extraordinários com IA"
          centered
        />
        
        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-blue-50 p-3 rounded-lg">
                <benefit.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 w-full text-center">
                {benefit.title}
              </h3>
              <p className="text-gray-600 w-full text-center mx-auto">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
