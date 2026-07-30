import { ADVANCED_ENDPOINTS, ENDPOINTS } from '@/lib/constants';

export default function Endpoints() {
  return (
    <section id="endpoints" className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="section-label">✦ Endpoints</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-[2.5rem]">
            Tudo que você precisa em uma única API
          </h2>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-5">
          {/* Left — endpoint list mockup like Job Alerts */}
          <div className="bento-card lg:col-span-2">
            <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-400">Busca & Dados</div>
            <div className="space-y-2">
              {ENDPOINTS.map((ep, i) => (
                <div
                  key={ep.path}
                  className={`flex items-center justify-between rounded-xl px-3 py-2.5 ${i === 0 ? 'border border-violet-100 bg-violet-50/50' : 'bg-gray-50'}`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="rounded-md bg-white px-1.5 py-0.5 font-mono text-[10px] font-bold text-violet-600 shadow-sm">
                      {ep.method}
                    </span>
                    <div>
                      <div className="text-xs font-semibold">{ep.label}</div>
                      <div className="font-mono text-[10px] text-gray-400">{ep.path}</div>
                    </div>
                  </div>
                  {i === 0 && (
                    <span className="rounded-full bg-violet-500 px-2.5 py-1 text-[10px] font-medium text-white">
                      Popular
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right — advanced endpoints grid */}
          <div className="bento-card lg:col-span-3">
            <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-400">APIs avançadas</div>
            <div className="grid gap-2 sm:grid-cols-2">
              {ADVANCED_ENDPOINTS.map((ep) => (
                <div key={ep.path} className="rounded-xl border border-gray-100 bg-gray-50 p-3 transition-colors hover:border-violet-100 hover:bg-violet-50/30">
                  <div className="flex items-center gap-2">
                    <span className="rounded-md bg-white px-1.5 py-0.5 font-mono text-[10px] font-bold text-gray-500 shadow-sm">
                      {ep.method}
                    </span>
                    <span className="font-mono text-[11px] text-gray-400">{ep.path}</span>
                  </div>
                  <div className="mt-1.5 text-xs font-semibold">{ep.label}</div>
                  <div className="text-[10px] text-gray-400">{ep.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
