import { APP_URL, FREE_TRIAL_CREDITS_LABEL } from '@/lib/constants';

export default function TopBanner() {
  return (
    <div className="bg-gray-900 py-2.5 text-center text-xs text-white">
      <span>Teste grátis com </span>
      <span className="font-semibold text-violet-300">{FREE_TRIAL_CREDITS_LABEL} créditos</span>
      <span> — </span>
      <a
        href={APP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-2 transition-colors hover:text-violet-300"
      >
        Criar conta grátis
      </a>
    </div>
  );
}
