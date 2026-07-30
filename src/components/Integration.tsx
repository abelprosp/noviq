'use client';

import { useState } from 'react';
import { CODE_EXAMPLES } from '@/lib/constants';

const TABS = [
  { id: 'curl', label: 'cURL' },
  { id: 'javascript', label: 'JavaScript' },
  { id: 'python', label: 'Python' },
] as const;

type TabId = (typeof TABS)[number]['id'];

const FEATURES = [
  'Endpoints compatíveis com Serper.dev',
  'Documentação Swagger em /docs',
  'Cache Redis para respostas <200ms',
  'Fallbacks quando o Google bloqueia',
];

export default function Integration() {
  const [activeTab, setActiveTab] = useState<TabId>('curl');

  return (
    <section id="como-funciona" className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="bento-card grid items-start gap-10 lg:grid-cols-2 lg:p-8">
          <div>
            <span className="section-label">✦ Integração</span>
            <h2 className="mt-4 text-2xl font-bold tracking-tight md:text-3xl">
              Uma requisição.
              <br />
              Qualquer linguagem.
            </h2>
            <p className="mt-3 text-sm text-gray-500">
              Autenticação via header X-API-Key ou JWT. Resposta JSON em milissegundos, com cache Redis embutido.
            </p>
            <ul className="mt-6 space-y-2.5">
              {FEATURES.map((feat) => (
                <li key={feat} className="flex items-center gap-2.5 text-sm text-gray-600">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-100 text-[10px] text-violet-600">✓</span>
                  {feat}
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-100 bg-gray-50">
            <div className="flex border-b border-gray-100 bg-white">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 px-4 py-2.5 text-xs font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'border-b-2 border-violet-500 text-violet-600'
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <pre className="overflow-x-auto p-4 text-[11px] leading-relaxed md:text-xs">
              <code className="font-mono text-gray-600">{CODE_EXAMPLES[activeTab]}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
