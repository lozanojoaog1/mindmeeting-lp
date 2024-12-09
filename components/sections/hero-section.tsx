"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, LineChart, Shield, ArrowRight } from 'lucide-react';
import { GradientText } from '../ui/gradient-text';
import { StatCard } from '../ui/stat-card';

const stats = [
  { value: "98%", label: "Precisão" },
  { value: "32h", label: "Economia Mensal" },
  { value: "2.236%", label: "ROI Médio" }
];

export function HeroSection() {
  const [timeWasted, setTimeWasted] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeWasted(prev => (prev + 1) % 33);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-gradient-to-b from-blue-50 to-white min-h-screen">
      {/* Background Patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-violet-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28">
        <motion.div 
          className="text-center space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-4"
          >
            <Brain className="w-4 h-4 mr-2" />
            Seu assistente pessoal para reuniões produtivas
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Transforme Cada Reunião em{' '}
            <GradientText>Resultados Reais</GradientText>
          </motion.h1>

          <motion.p 
            className="max-w-2xl mx-auto text-xl text-gray-600 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Automatize a documentação das suas reuniões e garanta que cada decisão importante 
            se transforme em ação concreta. Ideal para equipes que precisam de resultados, não apenas registros.
          </motion.p>

          <motion.div className="mt-4 text-lg text-gray-600">
            <span className="inline-flex items-center bg-green-50 px-3 py-1 rounded-full text-green-700 font-medium mr-3">
              <span className="mr-2">✓</span> 32h economizadas por mês
            </span>
            <span className="inline-flex items-center bg-green-50 px-3 py-1 rounded-full text-green-700 font-medium">
              <span className="mr-2">✓</span> Setup em até 1 hora
            </span>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button 
              className="group px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Teste Grátis por 14 Dias</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button 
              className="group px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Agende uma Demo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          <motion.div 
            className="mt-16 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-2">
                <p className="text-4xl font-bold text-blue-600">1h</p>
                <p className="text-sm text-gray-600">Setup pela Nossa Equipe</p>
              </div>
              <div className="text-center space-y-2">
                <p className="text-4xl font-bold text-blue-600">32h</p>
                <p className="text-sm text-gray-600">Economia Mensal</p>
              </div>
              <div className="text-center space-y-2">
                <p className="text-4xl font-bold text-blue-600">95%</p>
                <p className="text-sm text-gray-600">Precisão na Documentação</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
              <Shield className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-blue-600 font-medium">Comece agora, pague apenas se gostar. 90 dias de garantia.</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
