"use client";

import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { SectionHeading } from '../ui/section-heading';
import { ArrowRight } from 'lucide-react';

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "Como funciona a implementação?",
    answer: "Nossa equipe realiza todo o processo de setup, que leva aproximadamente 1 hora. Configuramos sua conta, integramos com suas ferramentas (Zoom, Teams ou Meet) e oferecemos treinamento personalizado para sua equipe. Você não precisa se preocupar com aspectos técnicos."
  },
  {
    question: "Em quanto tempo verei resultados?",
    answer: "Os resultados são imediatos. Logo após a primeira reunião, você já terá documentação automática e distribuição de tarefas. Em média, nossas equipes economizam 32 horas por mês em trabalho manual de documentação e follow-up."
  },
  {
    question: "Como garantem a economia de tempo prometida?",
    answer: "Nossa economia de tempo é baseada em três pilares: 1) Documentação automática durante a reunião, 2) Distribuição imediata de tarefas, e 3) Acompanhamento automatizado. Medimos e validamos essa economia com mais de 100 clientes ativos."
  },
  {
    question: "Preciso mudar minha forma de trabalho?",
    answer: "Não. Continue conduzindo suas reuniões normalmente. Nossa ferramenta trabalha em segundo plano, capturando e organizando as informações importantes sem interferir no fluxo natural da reunião."
  },
  {
    question: "Como vocês garantem 95% de precisão?",
    answer: "Nossa precisão é garantida por um processo em três etapas: 1) Captura em tempo real com IA avançada, 2) Validação automática pós-reunião, e 3) Revisão rápida opcional pelo organizador. Cada documento passa por verificações de qualidade."
  },
  {
    question: "Que tipo de suporte vocês oferecem?",
    answer: "Fornecemos suporte completo: 1) Setup profissional em 1 hora, 2) Treinamento personalizado para sua equipe, 3) Suporte prioritário por chat, e-mail ou telefone, e 4) Acompanhamento dedicado nos primeiros 30 dias."
  },
  {
    question: "Como vocês protegem nossas informações?",
    answer: "Sua segurança é nossa prioridade: 1) Criptografia de ponta a ponta, 2) Servidores certificados ISO 27001, 3) Controle total sobre acessos, e 4) Conformidade com LGPD/GDPR. Todos os dados são armazenados com máxima segurança."
  },
  {
    question: "Qual o investimento necessário?",
    answer: "Oferecemos planos flexíveis que se adaptam ao seu uso. Com ROI médio de 236%, o investimento se paga em semanas. Veja abaixo nossos planos e escolha o que melhor atende sua necessidade."
  }
];

export function FAQ() {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <SectionHeading
          title="Perguntas Frequentes"
          subtitle="Respostas claras para suas principais dúvidas"
        />

        <div className="mt-16 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none p-6 bg-white rounded-xl border border-gray-100 hover:border-blue-100 transition-all">
                  <h3 className="text-lg font-semibold pr-8">{faq.question}</h3>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="p-6 pt-0">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </details>
            </motion.div>
          ))}
        </div>

        {/* Transição para Pricing */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pronto para transformar suas reuniões em resultados?
            Escolha o plano ideal para sua equipe e comece hoje mesmo.
          </p>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-gray-600 mb-8">
            Ainda tem dúvidas? Nossa equipe está pronta para ajudar
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all inline-flex items-center justify-center space-x-2">
              <span>Fale com um Especialista</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center justify-center"
            >
              Veja nossa documentação completa
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
