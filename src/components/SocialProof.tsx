const TECHS = ['Next.js', 'Python', 'Node.js', 'Go', 'PHP', 'Ruby', 'cURL', 'n8n'];

export default function SocialProof() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-[11px] font-medium uppercase tracking-widest text-gray-400">
          Integra com qualquer stack
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {TECHS.map((tech) => (
            <span
              key={tech}
              className="text-sm font-semibold text-gray-300 transition-colors hover:text-gray-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
