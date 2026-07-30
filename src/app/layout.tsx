import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SITE_URL } from '@/lib/constants';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'NoviqSearch — API de busca Google e dados web em reais',
  description:
    'SERP API self-hosted, alternativa ao Serper.dev. Endpoints compatíveis, fallbacks inteligentes e preço acessível para devs, agências, automações e IA.',
  openGraph: {
    title: 'NoviqSearch — API de busca Google em reais',
    description: 'Comece grátis com 2.700 créditos de teste. Plano mensal de 70k créditos por R$ 197.',
    url: SITE_URL,
    siteName: 'NoviqSearch',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
