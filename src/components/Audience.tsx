import { AUDIENCES } from '@/lib/constants';

export default function Audience() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="section-label">✦ Para quem é</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight">Quem já está usando</h2>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {AUDIENCES.map((item) => (
            <div key={item.title} className="bento-card !p-5">
              <span className="text-2xl">{item.icon}</span>
              <h3 className="mt-3 text-sm font-semibold">{item.title}</h3>
              <p className="mt-1 text-xs text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
