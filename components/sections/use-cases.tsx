"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { SectionHeading } from '../ui/section-heading';

const useCases = [
  {
    title: "Reuniões de Projetos",
    description: "Ideal para equipes que precisam documentar decisões e distribuir tarefas com clareza",
    benefits: [
      "Documentação automática das decisões tomadas",
      "Distribuição imediata de tarefas para cada responsável",
      "Acompanhamento centralizado do progresso"
    ],
    metrics: {
      timePerMeeting: "25min economizados",
      taskCompletion: "92% de conclusão",
      setupTime: "Setup profissional em 1h"
    },
    example: {
      company: "Construtora Real",
      situation: "10 reuniões semanais de projeto",
      result: "Recuperou 4 horas por semana em documentação"
    }
  },
  {
    title: "Reuniões Comerciais",
    description: "Perfeito para equipes de vendas que precisam registrar compromissos e próximos passos",
    benefits: [
      "Registro automático de compromissos assumidos",
      "Lembretes personalizados de follow-up",
      "Histórico completo de interações"
    ],
    metrics: {
      followupRate: "95% de follow-ups realizados",
      responseTime: "2h mais rápido",
      setupTime: "Setup profissional em 1h"
    },
    example: {
      company: "Vendas Plus",
      situation: "20 reuniões com clientes por semana",
      result: "Aumento de 27% em follow-ups realizados"
    }
  },
  {
    title: "Reuniões Executivas",
    description: "Essencial para lideranças que precisam garantir que decisões importantes sejam implementadas",
    benefits: [
      "Captura precisa de decisões estratégicas",
      "Acompanhamento de delegações",
      "Relatórios de progresso semanais"
    ],
    metrics: {
      decisionTracking: "98% implementadas",
      timeRecovered: "6h por semana",
      setupTime: "Setup profissional em 1h"
    },
    example: {
      company: "LogTech",
      situation: "5 reuniões estratégicas mensais",
      result: "Implementação 87% mais efetiva das decisões"
    }
  }
];

export function UseCases() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container px-4 mx-auto">
        <SectionHeading
          title="Como Podemos Ajudar Sua Equipe"
          subtitle="Casos reais de clientes que transformaram suas reuniões"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-4">{useCase.title}</h3>
              <p className="text-gray-600 mb-6">{useCase.description}</p>

              {/* Benefícios */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Benefícios Principais:</h4>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Métricas */}
              <div className="bg-blue-50 p-4 rounded-xl mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Resultados Típicos:</h4>
                <div className="space-y-2">
                  {Object.entries(useCase.metrics).map(([key, value], idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Exemplo Real */}
              <div className="bg-gray-50 p-4 rounded-xl">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Caso Real:</h4>
                <p className="text-sm text-gray-600 mb-2">
                  <strong>{useCase.example.company}</strong>
                </p>
                <p className="text-sm text-gray-600 mb-2">{useCase.example.situation}</p>
                <p className="text-sm text-blue-600 font-medium">{useCase.example.result}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-gray-600 mb-8">
            Veja como podemos adaptar nossa solução para sua realidade
          </p>
          <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all inline-flex items-center justify-center space-x-2">
            <span>Agende uma Conversa</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
