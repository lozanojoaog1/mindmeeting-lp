import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MindMeeting - Documentação e Análise Inteligente de Reuniões',
  description: 'Transforme suas reuniões em resultados extraordinários com IA especializada que documenta, analisa e extrai insights valiosos.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
