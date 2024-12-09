"use client";

import { Check, Info, ArrowRight, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/section-heading';

const plans = [
  {
    name: "Essential",
    description: "Ideal para times que buscam documentação inteligente e economia de tempo",
    price: "399",
    period: "por mês",
    features: [
      "Setup profissional em 1 hora",
      "20 reuniões por mês",
      "Documentação automática",
      "Distribuição de tarefas",
      "1 integração (Meet, Teams ou Zoom)",
      "Economia de até 20h/mês",
      "95% de precisão garantida",
      "Suporte por email (8h às 18h)"
    ],
    metrics: {
      setupTime: "1 hora",
      support: "8h às 18h",
      storage: "6 meses"
    },
    cta: "Começar Agora",
    highlight: false
  },
  {
    name: "Business Plus",
    description: "Para equipes que precisam de mais recursos e maior produtividade",
    price: "899",
    period: "por mês",
    features: [
      "Tudo do Essential, mais:",
      "40 reuniões por mês",
      "Templates personalizados",
      "Múltiplas integrações",
      "Economia de até 32h/mês",
      "ROI médio de 236%",
      "Dashboard de resultados",
      "Suporte prioritário 24/7"
    ],
    metrics: {
      setupTime: "1 hora",
      support: "24/7",
      storage: "12 meses"
    },
    cta: "Testar Grátis",
    highlight: true
  },
  {
    name: "Enterprise",
    description: "Solução completa para grandes empresas com necessidades específicas",
    price: "Personalizado",
    period: "por mês",
    features: [
      "Tudo do Business Plus, mais:",
      "Reuniões ilimitadas",
      "Integrações customizadas",
      "API dedicada",
      "SLA garantido",
      "Treinamento personalizado",
      "Gerente de sucesso dedicado",
      "Suporte enterprise 24/7"
    ],
    metrics: {
      setupTime: "1 hora",
      support: "24/7 Premium",
      storage: "Ilimitado"
    },
    cta: "Fale Conosco",
    highlight: false
  }
];

const guarantees = [
  {
    title: "90 Dias de Garantia",
    description: "Se não estiver satisfeito, devolvemos seu investimento"
  },
  {
    title: "Sem Fidelidade",
    description: "Cancele quando quiser, sem multa ou burocracia"
  },
  {
    title: "Suporte Garantido",
    description: "Tempo de resposta menor que 1 hora"
  }
];

export function Pricing() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
      <div className="container">
        <SectionHeading
          title="Escolha o plano ideal para sua equipe"
          subtitle="Comece a economizar tempo e aumentar a produtividade hoje mesmo"
        />

        {/* Garantias */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-6 sm:mb-10">
          <div className="flex items-center gap-2 justify-center">
            <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
            <span className="text-sm text-gray-600">Setup em 1 hora</span>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
            <span className="text-sm text-gray-600">95% de precisão</span>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
            <span className="text-sm text-gray-600">Garantia de 90 dias</span>
          </div>
        </div>

        {/* Planos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative p-6 sm:p-8 bg-white rounded-xl shadow-sm ${
                plan.highlight
                  ? "ring-2 ring-blue-500 shadow-lg"
                  : "hover:shadow-lg"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full whitespace-nowrap">
                    Mais Popular
                  </span>
                </div>
              )}

              <div>
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-1 mb-6">
                  {plan.price === "Personalizado" ? (
                    <span className="text-2xl font-bold">{plan.price}</span>
                  ) : (
                    <>
                      <span className="text-sm">R$</span>
                      <span className="text-3xl font-bold">{plan.price}</span>
                    </>
                  )}
                  <span className="text-sm text-gray-500">{plan.period}</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-6 sm:mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Metrics */}
                <div className="space-y-2 mb-6 sm:mb-8 p-4 bg-gray-50 rounded-lg text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Setup</span>
                    <span className="font-medium">{plan.metrics.setupTime}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Suporte</span>
                    <span className="font-medium">{plan.metrics.support}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Retenção</span>
                    <span className="font-medium">{plan.metrics.storage}</span>
                  </div>
                </div>

                {/* CTA */}
                <button className={`w-full py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 smooth-transition ${
                  plan.highlight
                    ? "bg-blue-500 text-white hover:bg-blue-600"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}>
                  <span>{plan.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Garantia de Satisfação */}
        <motion.div
          className="mt-8 sm:mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 max-w-2xl mx-auto px-4">
            Todos os planos incluem garantia de satisfação de 90 dias.
            Se não estiver completamente satisfeito, devolvemos seu investimento.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
