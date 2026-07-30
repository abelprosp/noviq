import { API_DOCS_URL, APP_URL, FREE_TRIAL_CREDITS_LABEL, NAV_LINKS } from '@/lib/constants';
import Logo from '@/components/Logo';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#f5f5f7]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="flex items-center">
          <Logo height={34} priority />
        </a>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-gray-500 transition-colors hover:text-gray-900"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={API_DOCS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-[13px] text-gray-500 transition-colors hover:text-gray-900 sm:block"
          >
            Docs
          </a>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !rounded-xl !px-4 !py-2 text-[13px]"
          >
            Testar grátis
          </a>
        </div>
      </div>
    </header>
  );
}
