'use client';

import { useState } from 'react';
import { CREDIT_COSTS, WHATSAPP_URL } from '@/lib/constants';

const MIN_CREDITS = 500;
const MAX_CREDITS = 50000;
const STEP = 500;
const PRICE_PER_500 = 5;

function formatCurrency(value: number) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export default function Pricing() {
  const [credits, setCredits] = useState(MIN_CREDITS);
  const total = (credits / 500) * PRICE_PER_500;

  return (
    <section id="precos" className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="section-label">✦ Preços</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-[2.5rem]">
            Um preço. Sem letras miúdas.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-gray-500">
            Você paga só pelo que usar. Sem mensalidade, sem cartão, sem surpresa.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-5">
          <div className="bento-card relative overflow-hidden lg:col-span-2">
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-violet-100/60 blur-2xl" />
            <span className="text-[11px] font-semibold uppercase tracking-wider text-violet-600">Plano Único</span>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="text-5xl font-bold">R$ 5</span>
              <span className="text-gray-400">/ 500 créditos</span>
            </div>
            <p className="mt-1 text-sm text-gray-400">≈ R$ 0,01 por busca web simples.</p>
            <ul className="mt-6 space-y-2">
              {['500 créditos ≈ 500 buscas', '1.000 = R$ 10 · 5.000 = R$ 50', 'Sem validade, sem mensalidade', 'Suporte humano via WhatsApp'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-violet-500">✓</span>{item}
                </li>
              ))}
            </ul>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6 w-full">
              Contratar via WhatsApp
            </a>
          </div>

          <div className="bento-card lg:col-span-3">
            <h3 className="font-semibold">Calcule seu custo</h3>
            <p className="text-xs text-gray-400">Arraste para ajustar a quantidade de créditos.</p>

            <div className="mt-5">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Créditos</span>
                <span className="font-mono font-semibold text-violet-600">{credits.toLocaleString('pt-BR')}</span>
              </div>
              <input
                type="range"
                min={MIN_CREDITS}
                max={MAX_CREDITS}
                step={STEP}
                value={credits}
                onChange={(e) => setCredits(Number(e.target.value))}
                className="mt-2 w-full cursor-pointer accent-violet-600"
              />
              <div className="flex justify-between text-[10px] text-gray-300">
                <span>500</span><span>50.000</span>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-violet-100 bg-violet-50/40 p-5 text-center">
              <div className="text-xs text-gray-400">Total</div>
              <div className="text-3xl font-bold">{formatCurrency(total)}</div>
              <div className="text-xs text-gray-400">≈ {credits.toLocaleString('pt-BR')} buscas simples</div>
            </div>

            <div className="mt-5 grid gap-1.5 sm:grid-cols-2">
              {CREDIT_COSTS.map((item) => (
                <div key={item.label} className="flex items-center justify-between rounded-lg bg-gray-50 px-3 py-2 text-[11px]">
                  <span className="text-gray-500">{item.label}</span>
                  <span className="shrink-0 rounded-full bg-violet-100 px-2 py-0.5 font-semibold text-violet-600">
                    {item.credits}c
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
