import { motion } from 'motion/react';
import { CheckoutButton } from './CheckoutButton';
import { SocialProofTrigger } from './SocialProofTrigger';
import type { VerifiedPurchaseStats } from '../hooks/useVerifiedPurchaseStats';

interface FinalOfferSectionProps {
  purchaseStats: VerifiedPurchaseStats | null;
}

export function FinalOfferSection({ purchaseStats }: FinalOfferSectionProps) {
  return (
    <section
      id="oferta"
      className="border-t border-[#E6D5CD] bg-gradient-to-b from-[#F4E6E0] to-[#EFE0D9] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl border border-[#C59B5F]/35 bg-[#FCF9F7] px-6 py-10 text-center shadow-[0_24px_56px_-20px_rgba(44,30,30,0.12)] sm:px-12 sm:py-14"
        >
          <p className="text-xs font-semibold tracking-[0.18em] text-[#9E743C]">
            NAILCRAFT PRO ACADEMY
          </p>

          <h2 className="mx-auto mt-3 max-w-xl font-serif text-3xl font-semibold leading-tight tracking-tight text-[#2C1E1E] [text-wrap:balance] sm:text-4xl lg:text-[2.75rem]">
            ¡Comienza hoy tu camino en el mundo de las uñas!
          </h2>

          <div className="mx-auto mt-8 max-w-md border-y border-[#EAE0D9] py-6">
            <p className="text-sm font-medium text-[#5E4B49]">
              Precio especial
            </p>
            <p className="mt-1 font-serif text-5xl font-bold tracking-tight text-[#8A3F4B] tabular-nums sm:text-6xl">
              US$ 3
            </p>
            <p className="mt-3 text-sm font-medium text-[#2C1E1E] sm:text-base">
              Acceso digital al manual PDF
            </p>
            <p className="mt-1 text-xs text-[#745F5C] sm:text-sm">
              16 módulos educativos · 20 páginas · Actividades y glosario
            </p>
          </div>

          <div className="mt-8 flex flex-col items-center gap-4">
            <CheckoutButton
              label="COMPRAR AHORA POR US$ 3"
              size="lg"
              className="w-full sm:w-auto sm:min-w-[300px]"
            />
            <SocialProofTrigger stats={purchaseStats} align="center" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
