'use client';

import { useState } from 'react';
import { APP_URL, FAQ_ITEMS, FREE_TRIAL_CREDITS_LABEL, WHATSAPP_URL } from '@/lib/constants';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <span className="section-label">✦ FAQ</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-[2.5rem] md:leading-tight">
              Perguntas
              <br />
              frequentes
            </h2>
            <p className="mt-4 text-sm text-gray-500">
              Não encontrou sua resposta? Fale conosco.
            </p>
            <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6">
              Testar grátis — {FREE_TRIAL_CREDITS_LABEL} créditos
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary mt-3"
            >
              Suporte via WhatsApp
            </a>
          </div>

          <div className="lg:col-span-3">
            <div className="divide-y divide-gray-100 rounded-3xl border border-gray-100 bg-white">
              {FAQ_ITEMS.map((item, index) => (
                <div key={item.q}>
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left"
                  >
                    <span className="pr-4 text-sm font-medium">{item.q}</span>
                    <span className="shrink-0 text-lg text-gray-300">{openIndex === index ? '−' : '+'}</span>
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-5">
                      <p className="text-sm leading-relaxed text-gray-500">{item.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
