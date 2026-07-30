import { WHATSAPP_PHONE, WHATSAPP_URL } from '@/lib/constants';
import Logo from '@/components/Logo';

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden rounded-t-[2.5rem] bg-[#0a0a12] pb-8 pt-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_0%,rgba(99,102,241,0.15),transparent)]" />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
          Pronto para buscar melhor?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-gray-400">
          Chame no WhatsApp, receba sua API Key e faça sua primeira busca em minutos.
        </p>

        {/* Phone mockup with floating cards */}
        <div className="relative mx-auto mt-14 h-[420px] max-w-lg">
          {/* Floating cards behind phone */}
          <div className="absolute -left-4 top-16 hidden w-40 rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm md:block">
            <div className="text-[10px] text-gray-500">Busca SERP</div>
            <div className="mt-1 text-xs font-semibold text-white">1 crédito</div>
            <div className="mt-2 h-1.5 w-full rounded-full bg-white/10">
              <div className="h-full w-3/4 rounded-full bg-violet-500" />
            </div>
          </div>
          <div className="absolute -right-4 top-24 hidden w-40 rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm md:block">
            <div className="text-[10px] text-gray-500">Deep Research</div>
            <div className="mt-1 text-xs font-semibold text-white">25 créditos</div>
            <div className="mt-2 flex gap-1">
              {[1, 2, 3].map((n) => (
                <div key={n} className="h-6 flex-1 rounded bg-white/10" />
              ))}
            </div>
          </div>

          {/* Phone frame */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2">
            <div className="relative w-[260px] rounded-[2.5rem] border-[6px] border-gray-800 bg-gray-900 p-2 shadow-2xl shadow-violet-900/30">
              <div className="absolute left-1/2 top-3 h-5 w-20 -translate-x-1/2 rounded-full bg-gray-800" />
              <div className="overflow-hidden rounded-[2rem] bg-white">
                <div className="bg-violet-600 px-4 pb-3 pt-8">
                  <Logo height={22} />
                  <div className="mt-1 text-[10px] text-violet-200">API Dashboard</div>
                </div>
                <div className="space-y-2 p-3">
                  <div className="rounded-xl bg-gray-50 p-2.5">
                    <div className="text-[10px] text-gray-400">Créditos restantes</div>
                    <div className="text-lg font-bold text-gray-900">2.500</div>
                  </div>
                  <div className="rounded-xl bg-emerald-50 p-2.5">
                    <div className="text-[10px] text-emerald-600">Última busca</div>
                    <div className="font-mono text-[10px] text-gray-600">POST /search · 128ms</div>
                  </div>
                  <div className="rounded-xl bg-violet-50 p-2.5 text-center">
                    <div className="text-[10px] font-medium text-violet-600">✓ 200 OK · 1 crédito</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="relative mt-4 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-gray-900 transition-all hover:bg-gray-100 hover:shadow-2xl"
        >
          <svg className="h-4 w-4 text-green-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Falar no WhatsApp — {WHATSAPP_PHONE}
        </a>

        {/* Footer inside dark section */}
        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 sm:flex-row">
          <Logo height={28} />
          <p className="text-xs text-gray-500">{WHATSAPP_PHONE}</p>
        </div>
      </div>
    </section>
  );
}
