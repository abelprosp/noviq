import { WHATSAPP_URL } from '@/lib/constants';

export default function TopBanner() {
  return (
    <div className="bg-gray-900 py-2.5 text-center text-xs text-white">
      <span>Comece grátis com </span>
      <span className="font-semibold text-violet-300">2.500 créditos de teste</span>
      <span> — </span>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-2 transition-colors hover:text-violet-300"
      >
        Contratar via WhatsApp
      </a>
    </div>
  );
}
