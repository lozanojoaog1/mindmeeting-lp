"use client";

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <motion.div 
      className={cn("space-y-2 text-center max-w-4xl mx-auto mb-4 sm:mb-6", className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 px-4">{title}</h2>
      {subtitle && (
        <p className="text-base md:text-lg text-gray-600 max-w-[90%] mx-auto px-4">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
