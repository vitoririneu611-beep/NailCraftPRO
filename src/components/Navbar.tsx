import { CheckoutButton } from './CheckoutButton';
import { PRODUCT_PRICE } from '../config/checkout';

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#E9DDD6] bg-[#FCF9F7]/92 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#inicio"
          className="shrink-0 whitespace-nowrap font-serif text-xl font-semibold tracking-tight text-[#2C1E1E] sm:text-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8A3F4B]"
        >
          NailCraft Pro Academy
        </a>

        <nav
          aria-label="Navegación principal"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#5E4B49]"
        >
          <a
            href="#aprender"
            className="shrink-0 whitespace-nowrap transition-colors duration-150 hover:text-[#2C1E1E] hover:underline hover:underline-offset-4"
          >
            Qué aprenderás
          </a>
          <a
            href="#incluye"
            className="shrink-0 whitespace-nowrap transition-colors duration-150 hover:text-[#2C1E1E] hover:underline hover:underline-offset-4"
          >
            Qué incluye
          </a>
          <a
            href="#oferta"
            className="shrink-0 whitespace-nowrap transition-colors duration-150 hover:text-[#2C1E1E] hover:underline hover:underline-offset-4"
          >
            Oferta
          </a>
        </nav>

        <div className="shrink-0">
          <CheckoutButton
            label={`Comprar · ${PRODUCT_PRICE}`}
            size="sm"
            showArrow={false}
            className="whitespace-nowrap shrink-0"
          />
        </div>
      </div>
    </header>
  );
}
