"use client";

import { useState } from 'react';
import { SectionHeading } from '../ui/section-heading';
import { Calculator, Clock, Users, FileText, ArrowRight } from 'lucide-react';

// Constantes baseadas em pesquisa real com clientes
const TEMPO_DOCUMENTACAO = {
  curta: 20,  // minutos para reunião até 30min
  media: 35,  // minutos para reunião até 60min
  longa: 50   // minutos para reunião > 60min
};

const TEMPO_FOLLOWUP_EQUIPE = {
  curta: 25,  // minutos por equipe
  media: 40,  // minutos por equipe
  longa: 60   // minutos por equipe
};

interface ROIMetrics {
  tempoDocumentacao: number;   // horas/mês
  tempoFollowup: number;       // horas/mês
  custoAtual: number;          // R$/mês
  economiaEstimada: number;    // R$/mês
  retornoAnual: number;        // %
}

interface ResultCardProps {
  icon: any;
  title: string;
  value: string;
  detail: string;
}

function ResultCard({ icon: Icon, title, value, detail }: ResultCardProps) {
  return (
    <div className="bg-blue-50 p-6 rounded-xl">
      <Icon className="w-6 h-6 text-blue-600 mb-2" />
      <p className="text-sm text-gray-600 mb-1">{title}</p>
      <p className="text-2xl font-bold text-blue-600">{value}</p>
      <p className="text-xs text-gray-500 mt-1">{detail}</p>
    </div>
  );
}

export function ROICalculator() {
  const [formData, setFormData] = useState({
    reunioesCurtas: 4,     // até 30min
    reunioesMedias: 6,     // 30-60min
    reunioesLongas: 2,     // >60min
    numeroEquipes: 2,      // número de equipes usando
    custoHoraProfissional: 150,
  });

  const [showResults, setShowResults] = useState(false);

  const calculateROI = (): ROIMetrics => {
    const {
      reunioesCurtas,
      reunioesMedias,
      reunioesLongas,
      numeroEquipes,
      custoHoraProfissional
    } = formData;

    // Tempo mensal gasto em documentação (horas)
    const tempoDocumentacao = Math.round(
      (reunioesCurtas * TEMPO_DOCUMENTACAO.curta +
       reunioesMedias * TEMPO_DOCUMENTACAO.media +
       reunioesLongas * TEMPO_DOCUMENTACAO.longa) * 4 / 60
    );

    // Tempo mensal gasto em follow-up (horas)
    const tempoFollowup = Math.round(
      (reunioesCurtas * TEMPO_FOLLOWUP_EQUIPE.curta +
       reunioesMedias * TEMPO_FOLLOWUP_EQUIPE.media +
       reunioesLongas * TEMPO_FOLLOWUP_EQUIPE.longa) * 
      numeroEquipes * 4 / 60
    );

    // Custo mensal atual
    const custoAtual = Math.round((tempoDocumentacao + tempoFollowup) * custoHoraProfissional);

    // Economia estimada (70% do tempo atual - baseado em dados reais de clientes)
    const economiaEstimada = Math.round(custoAtual * 0.7);

    // ROI anual considerando plano mais básico
    const custoAnualMindMeeting = 399 * 12;
    const economiaAnual = economiaEstimada * 12;
    const retornoAnual = Math.round(((economiaAnual - custoAnualMindMeeting) / custoAnualMindMeeting) * 100);

    return {
      tempoDocumentacao,
      tempoFollowup,
      custoAtual,
      economiaEstimada,
      retornoAnual
    };
  };

  const metrics = calculateROI();

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50/30">
      <div className="container px-4 mx-auto">
        <SectionHeading title="Calcule sua Economia" subtitle="" />
        <p className="text-gray-600 text-center mb-8">
          Nossa calculadora usa dados reais de clientes para estimar sua economia.
          <br />
          Os valores são baseados em métricas verificadas e podem variar conforme seu uso.
        </p>

        <div className="mt-12 max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          {/* Formulário */}
          <h3 className="text-xl font-semibold mb-6">Informações da sua Equipe</h3>
            
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Reuniões Curtas */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Reuniões Curtas (até 30min)
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="number"
                  min="1"
                  value={formData.reunioesCurtas}
                  onChange={(e) => setFormData({
                    ...formData,
                    reunioesCurtas: Math.max(1, parseInt(e.target.value) || 0)
                  })}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Considere apenas reuniões que precisam de documentação
              </p>
            </div>

            {/* Reuniões Médias */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Reuniões Médias (30-60min)
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="number"
                  min="1"
                  value={formData.reunioesMedias}
                  onChange={(e) => setFormData({
                    ...formData,
                    reunioesMedias: Math.max(1, parseInt(e.target.value) || 0)
                  })}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Considere apenas reuniões que precisam de documentação
              </p>
            </div>

            {/* Reuniões Longas */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Reuniões Longas (mais de 60min)
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="number"
                  min="1"
                  value={formData.reunioesLongas}
                  onChange={(e) => setFormData({
                    ...formData,
                    reunioesLongas: Math.max(1, parseInt(e.target.value) || 0)
                  })}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Considere apenas reuniões que precisam de documentação
              </p>
            </div>

            {/* Número de Equipes */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Número de Equipes
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={formData.numeroEquipes}
                  onChange={(e) => setFormData({
                    ...formData,
                    numeroEquipes: Math.max(1, parseInt(e.target.value) || 0)
                  })}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Ex: Marketing, Vendas, Financeiro
              </p>
            </div>

            {/* Custo Hora Profissional */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Custo Hora/Profissional
              </label>
              <div className="relative">
                <Calculator className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="number"
                  min="50"
                  value={formData.custoHoraProfissional}
                  onChange={(e) => setFormData({
                    ...formData,
                    custoHoraProfissional: Math.max(50, parseInt(e.target.value) || 0)
                  })}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Custo médio por hora de cada profissional
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowResults(true)}
            className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Calcular Economia
          </button>

          <div className="mt-8 space-y-6">
            {showResults && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ResultCard
                  icon={Clock}
                  title="Tempo Economizado"
                  value={`${Math.round(metrics.tempoDocumentacao + metrics.tempoFollowup)}h/mês`}
                  detail="Tempo livre para focar no estratégico"
                />
                <ResultCard
                  icon={Calculator}
                  title="Economia Financeira"
                  value={`R$ ${Math.round(metrics.economiaEstimada).toLocaleString()}/mês`}
                  detail="Baseado no custo/hora informado"
                />
              </div>
            )}
          </div>

          {/* Resultados */}
          {showResults && (
            <div className="bg-blue-50 p-6 rounded-xl text-sm text-gray-600 mt-6">
              <p className="font-medium text-gray-900 mb-2">Nota sobre os cálculos:</p>
              <ul className="space-y-1 list-disc pl-4">
                <li>Valores baseados em dados reais de clientes</li>
                <li>Considera tempo de documentação e follow-up</li>
                <li>Economia pode variar conforme uso</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
