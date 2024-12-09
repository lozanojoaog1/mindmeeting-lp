"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Brain, LineChart, Check } from 'lucide-react';

const HeroSection = () => {
  const [timeWasted, setTimeWasted] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeWasted(prev => (prev + 1) % 33);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

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
          initial="initial"
          animate="animate"
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight"
            variants={fadeIn}
          >
            Transforme Reuniões em{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
              Resultados Extraordinários
            </span>
          </motion.h1>

          <motion.p 
            className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600"
            variants={fadeIn}
          >
            IA especializada que documenta, analisa e extrai insights valiosos das suas reuniões. 
            Economize <span className="font-semibold text-blue-600">32h/mês</span> e multiplique o ROI das suas decisões.
          </motion.p>

          <motion.div 
            className="bg-white p-6 rounded-lg shadow-lg max-w-xl mx-auto"
            variants={fadeIn}
          >
            <div className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
              Neste momento, empresas estão perdendo:
            </div>
            <div className="text-3xl md:text-4xl font-bold text-blue-600">
              {timeWasted} horas em documentação manual
            </div>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 pt-4"
            variants={fadeIn}
          >
            <motion.button 
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Comece Agora - Trial Gratuito
            </motion.button>
            <motion.button 
              className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Ver Demonstração
            </motion.button>
          </motion.div>

          <motion.div 
            className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
            variants={fadeIn}
          >
            <div className="text-center">
              <div className="font-bold text-2xl text-gray-900">98%</div>
              <div className="text-gray-600">Precisão</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-2xl text-gray-900">32h</div>
              <div className="text-gray-600">Economia Mensal</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-2xl text-gray-900">12x</div>
              <div className="text-gray-600">ROI Médio</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
