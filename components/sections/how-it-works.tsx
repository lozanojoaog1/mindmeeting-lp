"use client";

import { motion } from 'framer-motion';
import { Video, Brain, FileText, Workflow, Server, Zap, Link, Shield, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../ui/section-heading';

const steps = [
  {
    title: "Conecte em 2 Cliques",
    description: "Integração instantânea com Zoom, Teams ou Google Meet. Sem downloads, sem configurações complexas.",
    icon: Video,
  },
  {
    title: "Seu Assistente Trabalha",
    description: "Durante a reunião, ele captura e organiza todas as informações importantes, sem interferir no seu trabalho.",
    icon: Brain,
  },
  {
    title: "Receba o Resumo",
    description: "Logo após a reunião, tenha em mãos um resumo claro com todas as decisões e próximos passos.",
    icon: FileText,
  },
  {
    title: "Acompanhamento Total",
    description: "Cada tarefa é distribuída automaticamente e acompanhada até sua conclusão. Nada é esquecido.",
    icon: Workflow,
  },
];

const features = [
  {
    title: "Setup Profissional",
    description: "Nossa equipe configura tudo em até 1 hora",
    icon: Link,
  },
  {
    title: "Ganhe Tempo Real",
    description: "32 horas livres todo mês para focar no que importa",
    icon: Zap,
  },
  {
    title: "100% Seguro",
    description: "Seus dados protegidos com criptografia de ponta a ponta",
    icon: Shield,
  },
  {
    title: "Sem Riscos",
    description: "90 dias de garantia total de satisfação",
    icon: Server,
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <SectionHeading
          title="Como Funciona"
          subtitle="Um processo simples e eficiente, projetado para diferentes tipos de reuniões e equipes"
        />

        <div className="mt-16 relative">
          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-blue-600" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 -translate-y-1/2 z-20">
                    <ArrowRight className="w-8 h-8 text-blue-300" />
                  </div>
                )}
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
              Seja para reuniões de projeto, comerciais ou executivas, nosso assistente se adapta ao seu contexto.
              Veja abaixo como diferentes equipes estão economizando tempo com o MindMeeting.
            </p>
          </motion.div>

          {/* Features */}
          <div className="mt-24 bg-gradient-to-b from-blue-50/50 to-white rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-center mb-8">Por Que Nossos Clientes Amam</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="bg-white p-4 rounded-xl shadow-sm mb-4">
                    <feature.icon className="w-8 h-8 text-blue-600 mx-auto" />
                  </div>
                  <h4 className="font-medium mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-gray-600 mb-8">
              Pronto para transformar suas reuniões em resultados?
            </p>
            <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all inline-flex items-center space-x-2">
              <span>Comece seu Teste Grátis</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
