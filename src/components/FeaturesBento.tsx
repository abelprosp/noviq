import { APP_URL } from '@/lib/constants';

const COMPARISONS = [
  { before: 'APIs caras em dólar', after: 'R$ 5 / 500 créditos' },
  { before: 'Bloqueios do Google', after: 'Fallbacks automáticos' },
  { before: 'Múltiplas APIs', after: 'Uma REST API' },
  { before: 'Suporte robotizado', after: 'WhatsApp humano' },
];

export default function FeaturesBento() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="section-label">✦ Diferenciais</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-[2.5rem] md:leading-tight">
            Chega de pagar caro
            <br />
            <span className="text-gray-400">por dados que deveriam ser simples.</span>
          </h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {/* Card 1 — Comparison UI mockup */}
          <div className="bento-card md:row-span-2">
            <div className="mb-6 rounded-2xl border border-gray-100 bg-gray-50 p-4">
              <div className="space-y-2">
                {COMPARISONS.map((item) => (
                  <div key={item.before} className="flex items-center justify-between rounded-xl bg-white px-3 py-2.5 shadow-sm">
                    <span className="text-xs text-gray-400 line-through">{item.before}</span>
                    <span className="rounded-full bg-violet-50 px-2.5 py-0.5 text-[11px] font-semibold text-violet-600">
                      {item.after}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <h3 className="text-lg font-semibold">Preço em reais, sem surpresa</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-500">
              10x mais barato que Serper. Sem cartão, sem mensalidade, sem validade nos créditos.
            </p>
          </div>

          {/* Card 2 — Steps mockup */}
          <div className="bento-card">
            <div className="mb-5 flex items-center gap-3">
              {['01', '02', '03'].map((step, i) => (
                <div key={step} className="flex items-center gap-2">
                  <div className={`flex h-9 w-9 items-center justify-center rounded-xl text-xs font-bold ${i === 0 ? 'bg-violet-500 text-white' : 'bg-gray-100 text-gray-400'}`}>
                    {step}
                  </div>
                  {i < 2 && <div className="h-px w-6 bg-gray-200" />}
                </div>
              ))}
            </div>
            <h3 className="text-lg font-semibold">3 passos até produção</h3>
            <p className="mt-2 text-sm text-gray-500">
              Cadastro → API Key → primeira busca. Compatível com Serper.dev.
            </p>
            <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex rounded-xl bg-violet-500 px-4 py-2 text-xs font-medium text-white hover:bg-violet-600">
              Testar grátis
            </a>
          </div>

          {/* Card 3 — Profile/support style */}
          <div className="bento-card">
            <div className="mb-5 flex items-center gap-3 rounded-2xl border border-gray-100 bg-gray-50 p-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-lg">💬</div>
              <div>
                <div className="text-sm font-semibold">Suporte humano</div>
                <div className="text-xs text-gray-400">WhatsApp · resposta em minutos</div>
              </div>
              <span className="ml-auto rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-medium text-emerald-700">Online</span>
            </div>
            <h3 className="text-lg font-semibold">Sem bot, sem fila</h3>
            <p className="mt-2 text-sm text-gray-500">
              Fale direto com quem desenvolve a API. Suporte via WhatsApp (51) 99550-1677.
            </p>
          </div>

          {/* Card 4 — Wide: Fallbacks with glow */}
          <div className="bento-card md:col-span-2">
            <div className="grid items-center gap-6 md:grid-cols-2">
              <div>
                <div className="relative mb-6 flex h-24 items-center justify-center">
                  <div className="absolute h-20 w-20 rounded-full bg-violet-400/20 blur-xl" />
                  <div className="relative flex gap-3">
                    {['Google', 'DDG', 'OSM'].map((src, i) => (
                      <div
                        key={src}
                        className={`rounded-xl border px-3 py-2 text-xs font-medium ${i === 0 ? 'border-violet-200 bg-violet-50 text-violet-700' : 'border-gray-200 bg-white text-gray-500'}`}
                      >
                        {src}
                      </div>
                    ))}
                  </div>
                </div>
                <h3 className="text-lg font-semibold">Fallbacks automáticos</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Quando o Google bloqueia, DuckDuckGo e OpenStreetMap entram automaticamente.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4">
                <div className="flex flex-wrap gap-2">
                  {['Self-hosted', 'Swagger /docs', 'Cache Redis', 'Serper compatível', 'JWT + API Key'].map((tag) => (
                    <span key={tag} className="rounded-full border border-gray-200 bg-white px-3 py-1 text-[11px] font-medium text-gray-600">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
