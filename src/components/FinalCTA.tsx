import { APP_URL, FREE_TRIAL_CREDITS_LABEL, WHATSAPP_PHONE } from '@/lib/constants';
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
          Crie sua conta grátis, receba {FREE_TRIAL_CREDITS_LABEL} créditos e faça sua primeira busca em minutos.
        </p>

        {/* Phone mockup with floating cards */}
        <div className="relative mx-auto mt-14 h-[420px] max-w-lg">
          <div className="absolute -left-4 top-16 hidden w-40 rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm md:block">
            <div className="text-[10px] text-gray-500">Plano mensal</div>
            <div className="mt-1 text-xs font-semibold text-white">70k créditos</div>
            <div className="mt-2 h-1.5 w-full rounded-full bg-white/10">
              <div className="h-full w-3/4 rounded-full bg-violet-500" />
            </div>
          </div>
          <div className="absolute -right-4 top-24 hidden w-40 rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm md:block">
            <div className="text-[10px] text-gray-500">Teste grátis</div>
            <div className="mt-1 text-xs font-semibold text-white">{FREE_TRIAL_CREDITS_LABEL} créditos</div>
            <div className="mt-2 flex gap-1">
              {[1, 2, 3].map((n) => (
                <div key={n} className="h-6 flex-1 rounded bg-white/10" />
              ))}
            </div>
          </div>

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
                    <div className="text-lg font-bold text-gray-900">{FREE_TRIAL_CREDITS_LABEL}</div>
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
          href={APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="relative mt-4 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-gray-900 transition-all hover:bg-gray-100 hover:shadow-2xl"
        >
          Testar grátis — {FREE_TRIAL_CREDITS_LABEL} créditos
        </a>

        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 sm:flex-row">
          <Logo height={28} />
          <p className="text-xs text-gray-500">{WHATSAPP_PHONE}</p>
        </div>
      </div>
    </section>
  );
}
