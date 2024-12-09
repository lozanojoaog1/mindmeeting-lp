"use client";

import { ReactNode } from 'react';
import { ScrollIndicator } from './scroll-indicator';

interface SectionWrapperProps {
  children: ReactNode;
  showScroll?: boolean;
  className?: string;
}

export function SectionWrapper({ children, showScroll = true, className = "" }: SectionWrapperProps) {
  return (
    <div className={className}>
      {children}
      {showScroll && (
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 -mt-6 sm:-mt-8">
            <ScrollIndicator />
          </div>
        </div>
      )}
    </div>
  );
}
