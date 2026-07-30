'use client';

import { useState } from 'react';
import { APP_URL, CREDIT_COSTS, FREE_TRIAL_CREDITS_LABEL } from '@/lib/constants';

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
            Simples e previsível.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-gray-500">
            Comece grátis ou escolha o plano mensal para alto volume.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {/* Free trial */}
          <div className="bento-card flex flex-col">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-600">Teste grátis</span>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="text-5xl font-bold">R$ 0</span>
            </div>
            <p className="mt-1 text-sm text-gray-400">{FREE_TRIAL_CREDITS_LABEL} créditos · sem cartão</p>
            <ul className="mt-6 flex-1 space-y-2">
              {['Acesso imediato ao painel', 'API Key em minutos', 'Swagger docs incluído', 'Sem validade no trial'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-emerald-500">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6 w-full">
              Testar grátis — {FREE_TRIAL_CREDITS_LABEL} créditos
            </a>
          </div>

          {/* Monthly plan — featured */}
          <div className="bento-card relative flex flex-col border-violet-200 ring-2 ring-violet-500/20">
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-violet-100/60 blur-2xl" />
            <span className="inline-flex w-fit rounded-full bg-violet-500 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
              Mais popular
            </span>
            <span className="mt-3 text-[11px] font-semibold uppercase tracking-wider text-violet-600">Plano mensal</span>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-5xl font-bold">R$ 197</span>
              <span className="text-gray-400">/ mês</span>
            </div>
            <p className="mt-1 text-sm font-medium text-gray-700">70.000 créditos por mês</p>
            <p className="text-xs text-gray-400">≈ R$ 0,0028 por busca web simples</p>
            <ul className="mt-6 flex-1 space-y-2">
              {[
                '70k créditos renovados todo mês',
                'Ideal para produção e automações',
                'Suporte prioritário',
                'Cancele quando quiser',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-violet-500">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6 w-full bg-violet-600 hover:bg-violet-700">
              Assinar plano mensal
            </a>
          </div>

          {/* Pay as you go */}
          <div className="bento-card flex flex-col">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">Avulso</span>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="text-5xl font-bold">R$ 5</span>
              <span className="text-gray-400">/ 500 créditos</span>
            </div>
            <p className="mt-1 text-sm text-gray-400">≈ R$ 0,01 por busca web simples</p>
            <ul className="mt-6 flex-1 space-y-2">
              {['Pague só pelo que usar', 'Sem mensalidade', 'Créditos sem validade', 'Compre pelo painel'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-gray-400">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary mt-6 w-full">
              Comprar créditos
            </a>
          </div>
        </div>

        {/* Calculator */}
        <div className="bento-card mt-4 lg:p-8">
          <h3 className="font-semibold">Calcule seu custo avulso</h3>
          <p className="text-xs text-gray-400">Para compras pontuais de créditos avulsos.</p>

          <div className="mt-5 grid gap-6 lg:grid-cols-2">
            <div>
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
                <span>500</span>
                <span>50.000</span>
              </div>
              <div className="mt-5 rounded-2xl border border-violet-100 bg-violet-50/40 p-5 text-center">
                <div className="text-xs text-gray-400">Total avulso</div>
                <div className="text-3xl font-bold">{formatCurrency(total)}</div>
                <div className="text-xs text-gray-400">≈ {credits.toLocaleString('pt-BR')} buscas simples</div>
              </div>
            </div>

            <div className="grid gap-1.5 sm:grid-cols-1">
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
