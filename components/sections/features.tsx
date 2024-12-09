"use client";

import { motion } from 'framer-motion';
import { Brain, Clock, Link, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../ui/section-heading';

const features = [
  {
    title: "Documentação Inteligente",
    description: "Captura precisa de decisões, tarefas e prazos durante suas reuniões, sem interrupções",
    benefit: "Foque na reunião enquanto cuidamos dos registros",
    icon: Brain,
    metrics: [
      { label: "Precisão", value: "95%" },
      { label: "Economia", value: "4h/sem" }
    ]
  },
  {
    title: "Distribuição Automática",
    description: "Cada participante recebe suas atribuições e prazos logo após a reunião",
    benefit: "Acompanhamento simplificado das ações definidas",
    icon: Clock,
    metrics: [
      { label: "Entrega", value: "Imediata" },
      { label: "Conclusão", value: "92%" }
    ]
  },
  {
    title: "Integração Completa",
    description: "Funciona perfeitamente com suas ferramentas atuais de videoconferência e produtividade",
    benefit: "Setup profissional em 1 hora pela nossa equipe",
    icon: Link,
    metrics: [
      { label: "Setup", value: "1 hora" },
      { label: "Suporte", value: "24/7" }
    ]
  },
];

const benefits = [
  {
    title: "Tempo para o Estratégico",
    description: "Nossos clientes recuperam em média 32 horas por mês que eram gastas com documentação manual",
    metrics: [
      { label: "Economia Mensal", value: "32h" },
      { label: "Satisfação", value: "95%" },
    ]
  },
  {
    title: "Resultados Garantidos",
    description: "Aumento significativo na conclusão de tarefas e implementação de decisões",
    metrics: [
      { label: "Conclusão", value: "92%" },
      { label: "ROI Médio", value: "236%" },
    ]
  },
  {
    title: "Compatibilidade Total",
    description: "Integração perfeita com suas ferramentas atuais, sem mudanças na sua rotina",
    metrics: [
      { label: "Plataformas", value: "3+" },
      { label: "Setup", value: "1h" },
    ]
  }
];

export function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <SectionHeading
          title="Recursos Poderosos, Simples de Usar"
          subtitle="Tecnologia avançada que se integra naturalmente ao seu dia a dia"
        />

        {/* Features Principais */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <p className="text-sm text-blue-600 font-medium mb-6">{feature.benefit}</p>
              
              <div className="grid grid-cols-2 gap-4">
                {feature.metrics.map((metric, idx) => (
                  <div key={idx} className="bg-gray-50 p-3 rounded-lg text-center">
                    <p className="text-lg font-bold text-blue-600">{metric.value}</p>
                    <p className="text-xs text-gray-600">{metric.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-gray-600">
            Nossas integrações tornam tudo isso possível sem mudar sua rotina.
            Veja como nos conectamos com suas ferramentas favoritas.
          </p>
        </motion.div>

        {/* Benefícios com Métricas e Testimonials */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
              <p className="text-gray-600 mb-6">{benefit.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {benefit.metrics.map((metric, idx) => (
                  <div key={idx} className="bg-blue-50 p-4 rounded-xl">
                    <p className="text-2xl font-bold text-blue-600">{metric.value}</p>
                    <p className="text-sm text-gray-600">{metric.label}</p>
                  </div>
                ))}
              </div>

              {/* <div className="bg-gray-50 p-6 rounded-xl">
                <p className="text-gray-600 italic mb-4">"{benefit.testimonial.quote}"</p>
                <p className="font-medium">{benefit.testimonial.author}</p>
                <p className="text-sm text-gray-500">{benefit.testimonial.role}</p>
                <p className="text-sm text-gray-500">{benefit.testimonial.company}</p>
              </div> */}
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-gray-600 mb-8">
            Agende uma demonstração e veja como podemos otimizar suas reuniões
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all inline-flex items-center justify-center space-x-2">
              <span>Agende uma Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all inline-flex items-center justify-center space-x-2">
              <span>Fale com Especialista</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
