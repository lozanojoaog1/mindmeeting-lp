"use client";

import { motion } from 'framer-motion';
import { Video, FileText, Workflow, Settings, Check } from 'lucide-react';
import { SectionHeading } from '../ui/section-heading';

// Plataformas suportadas com seus detalhes
const platforms = [
  {
    name: "Google Meet",
    icon: "/icons/meet.svg",
    features: [
      "Documentação automática pós-reunião",
      "Entrega direta no Google Drive",
      "Templates personalizáveis",
      "Setup em até 1 hora"
    ]
  },
  {
    name: "Microsoft Teams",
    icon: "/icons/teams.svg",
    features: [
      "Documentação automática pós-reunião",
      "Entrega direta no Google Drive",
      "Templates personalizáveis",
      "Setup em até 1 hora"
    ]
  },
  {
    name: "Zoom",
    icon: "/icons/zoom.svg",
    features: [
      "Documentação automática pós-reunião",
      "Entrega direta no Google Drive",
      "Templates personalizáveis",
      "Setup em até 1 hora"
    ]
  }
];

// Integrações empresariais disponíveis
const enterpriseIntegrations = [
  {
    category: "CRM",
    description: "Conecte suas reuniões diretamente ao seu CRM",
    examples: ["Pipedrive", "HubSpot", "Salesforce"],
    icon: Workflow
  },
  {
    category: "Produtividade",
    description: "Integre com suas ferramentas de gestão",
    examples: ["Trello", "Asana", "Monday"],
    icon: Settings
  },
  {
    category: "Personalizado",
    description: "Desenvolvemos integrações específicas",
    examples: ["Sistemas internos", "ERPs", "Ferramentas próprias"],
    icon: FileText
  }
];

export function IntegrationsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 mx-auto">
        <SectionHeading
          title="Integração Simples e Direta"
          subtitle="Compatível com suas ferramentas, sem complicação"
        />

        {/* Plataformas de Video */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-center mb-12">
            Plataformas Suportadas
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {platforms.map((platform) => (
              <motion.div
                key={platform.name}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Video className="w-6 h-6 text-blue-600" />
                  <h4 className="font-semibold">{platform.name}</h4>
                </div>
                
                <ul className="space-y-3">
                  {platform.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Integrações Empresariais */}
        <div className="mt-24">
          <h3 className="text-xl font-semibold text-center mb-12">
            Integrações Empresariais
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {enterpriseIntegrations.map((integration) => (
              <motion.div
                key={integration.category}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <integration.icon className="w-6 h-6 text-blue-600" />
                  <h4 className="font-semibold">{integration.category}</h4>
                </div>
                
                <p className="text-sm text-gray-600 mb-4">
                  {integration.description}
                </p>

                <div className="space-y-2">
                  {integration.examples.map((example, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      <span className="text-sm text-gray-600">{example}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Notas e Processo */}
        <motion.div
          className="mt-16 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-4">
            Processo Simples e Transparente
          </h3>
          
          <p className="text-gray-600 mb-6">
            Nossa equipe cuida de todo o processo de integração, garantindo uma implementação suave e eficiente.
          </p>

          <div className="bg-blue-50 p-6 rounded-xl">
            <h4 className="font-medium text-gray-900 mb-3 text-center">
              Notas Importantes:
            </h4>
            <ul className="text-sm text-gray-600 space-y-2 max-w-lg mx-auto">
              <li className="flex items-center justify-center gap-2">
                <Check className="w-5 h-5 text-green-500 shrink-0" />
                <span>Setup realizado por nossa equipe em até 1 hora</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <Check className="w-5 h-5 text-green-500 shrink-0" />
                <span>Documentos entregues diretamente no seu Google Drive</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <Check className="w-5 h-5 text-green-500 shrink-0" />
                <span>Templates personalizados conforme sua necessidade</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <Check className="w-5 h-5 text-green-500 shrink-0" />
                <span>Integrações empresariais sob demanda</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Transição para ROI Calculator */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 max-w-2xl mx-auto">
            Com integrações otimizadas e setup profissional, sua equipe economiza tempo valioso.
            Calcule abaixo quanto sua empresa pode economizar com o MindMeeting.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
