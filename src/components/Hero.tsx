import { API_DOCS_URL, API_SEARCH_URL, APP_URL, FREE_TRIAL_CREDITS_LABEL } from '@/lib/constants';

const FLOATING_CARDS = [
  {
    title: 'Busca SERP',
    subtitle: 'POST /search',
    tag: '1 crédito',
    color: 'bg-violet-500',
    position: 'left-[8%] top-[18%]',
    delay: 'animate-float',
  },
  {
    title: '200 OK',
    subtitle: '128ms · Redis cache',
    tag: '✓',
    color: 'bg-emerald-500',
    position: 'right-[6%] top-[22%]',
    delay: 'animate-float-delayed',
  },
  {
    title: '10x mais barato',
    subtitle: 'vs Serper.dev',
    tag: 'R$ 0,01',
    color: 'bg-indigo-500',
    position: 'left-[12%] bottom-[20%]',
    delay: 'animate-float-delayed',
  },
  {
    title: 'Fallbacks',
    subtitle: 'DuckDuckGo + OSM',
    tag: 'auto',
    color: 'bg-blue-500',
    position: 'right-[10%] bottom-[18%]',
    delay: 'animate-float',
  },
];

export default function Hero() {
  return (
    <section className="px-4 pb-8 pt-6 md:px-6">
      <div className="hero-container relative mx-auto max-w-6xl overflow-hidden px-6 pb-16 pt-14 md:px-12 md:pt-16">
        {/* Glow behind globe */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[420px] bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(99,102,241,0.12),transparent)]" />

        <div className="relative text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gray-900 px-4 py-1.5 text-xs font-medium text-white">
            <span className="rounded bg-violet-500 px-1.5 py-0.5 text-[10px] font-bold">GRÁTIS</span>
            {FREE_TRIAL_CREDITS_LABEL} créditos de teste
          </div>

          <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight md:text-5xl lg:text-[3.5rem]">
            API de busca Google
            <br />
            <span className="gradient-text">e dados web, em reais</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-gray-500 md:text-base">
            SERP API self-hosted, alternativa ao Serper.dev. Endpoints compatíveis, fallbacks
            inteligentes e preço acessível para devs, agências, automações e IA.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Testar grátis — {FREE_TRIAL_CREDITS_LABEL} créditos
            </a>
            <a href={API_DOCS_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Ver documentação
            </a>
          </div>
        </div>

        {/* Globe + floating cards */}
        <div className="relative mx-auto mt-14 h-[340px] max-w-2xl md:h-[380px]">
          {/* Wireframe globe */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative h-52 w-52 md:h-60 md:w-60">
              <div className="absolute inset-0 rounded-full border border-indigo-200/60 bg-gradient-to-br from-indigo-50/80 to-violet-50/40" />
              <div className="absolute inset-3 rounded-full border border-indigo-100/80" />
              <div className="absolute inset-6 rounded-full border border-dashed border-indigo-200/50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-2xl border border-gray-200 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-sm">
                  <div className="font-mono text-[10px] text-gray-400">POST /api/v1/search</div>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-medium text-emerald-700">200 OK</span>
                    <span className="text-[10px] text-gray-400">128ms</span>
                  </div>
                </div>
              </div>
              {/* Meridian lines */}
              <svg className="absolute inset-0 h-full w-full text-indigo-200/40" viewBox="0 0 100 100">
                <ellipse cx="50" cy="50" rx="48" ry="20" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <ellipse cx="50" cy="50" rx="48" ry="35" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <line x1="50" y1="2" x2="50" y2="98" stroke="currentColor" strokeWidth="0.5" />
                <line x1="2" y1="50" x2="98" y2="50" stroke="currentColor" strokeWidth="0.5" />
              </svg>
            </div>
          </div>

          {/* Floating cards */}
          {FLOATING_CARDS.map((card) => (
            <div
              key={card.title}
              className={`absolute hidden w-44 rounded-2xl border border-gray-100 bg-white p-3 shadow-[0_8px_30px_rgba(0,0,0,0.08)] md:block ${card.position} ${card.delay}`}
            >
              <div className="flex items-start gap-2.5">
                <div className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${card.color} text-xs font-bold text-white`}>
                  {card.tag.length <= 3 ? card.tag : '🔍'}
                </div>
                <div className="min-w-0">
                  <div className="truncate text-xs font-semibold">{card.title}</div>
                  <div className="truncate text-[10px] text-gray-400">{card.subtitle}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Code snippet below globe */}
        <div className="relative mx-auto mt-4 max-w-2xl">
          <div className="overflow-hidden rounded-2xl border border-gray-100 bg-gray-50/80">
            <div className="flex items-center gap-2 border-b border-gray-100 px-4 py-2.5">
              <div className="flex gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-red-300" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-300" />
              </div>
              <span className="font-mono text-[11px] text-gray-400">terminal</span>
            </div>
            <pre className="overflow-x-auto p-4 text-left text-[11px] leading-relaxed md:text-xs">
              <code className="font-mono text-gray-600">
                <span className="text-violet-600">$</span> curl -X POST &quot;{API_SEARCH_URL}&quot; \{'\n'}
                {'  '}-H &quot;X-API-Key: sk_sua_chave&quot; \{'\n'}
                {'  '}-d &apos;{'{'}&quot;q&quot;: &quot;editais abertos lajeado&quot;, &quot;gl&quot;: &quot;br&quot;{'}'}&apos;
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
