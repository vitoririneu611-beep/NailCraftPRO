import { motion } from 'motion/react';
import { CheckoutButton } from './CheckoutButton';
import { ResilientImage } from './ResilientImage';
import { SocialProofTrigger } from './SocialProofTrigger';
import type { VerifiedPurchaseStats } from '../hooks/useVerifiedPurchaseStats';

const HERO_IMAGE_PATH = '/src/assets/images/hero_nail_salon_manicure_1795323881395.jpg';

interface HeroSectionProps {
  purchaseStats: VerifiedPurchaseStats | null;
}

export function HeroSection({ purchaseStats }: HeroSectionProps) {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[#FCF9F7] pt-8 pb-14 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col justify-center lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mb-5"
            >
              <span className="inline-block border-b border-[#C59B5F] pb-1.5 text-xs font-semibold tracking-[0.16em] text-[#8A3F4B] sm:text-sm">
                OFERTA ESPECIAL: SOLO US$ 3
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-[2.35rem] leading-[1.08] font-semibold tracking-tight text-[#2C1E1E] [text-wrap:balance] sm:text-5xl lg:text-[3.45rem]"
            >
              ¡Descubre el arte de las uñas y lleva tu talento al siguiente nivel!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 max-w-xl text-base leading-relaxed text-[#5E4B49] sm:text-lg"
            >
              Aprende desde los fundamentos hasta técnicas de manicura, extensiones, nail art y mucho más.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-col items-start gap-4"
            >
              <CheckoutButton
                label="QUIERO MI MANUAL AHORA"
                size="lg"
                className="w-full sm:w-auto"
              />

              <SocialProofTrigger stats={purchaseStats} align="left" />

              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-medium text-[#745F5C] sm:text-sm">
                <span>Manual digital PDF</span>
                <span aria-hidden="true" className="text-[#C59B5F]">·</span>
                <span>16 módulos educativos</span>
                <span aria-hidden="true" className="text-[#C59B5F]">·</span>
                <span className="tabular-nums">Solo US$ 3</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <ResilientImage
              src={HERO_IMAGE_PATH}
              alt="Manos con manicura profesional en tonos rosa nude y delicados detalles dorados en un salón elegante"
              loading="eager"
              fetchPriority="high"
              fallbackTitle="NailCraft Pro Academy"
              wrapperClassName="aspect-[4/3] w-full rounded-2xl border border-[#C59B5F]/30 shadow-[0_20px_48px_-16px_rgba(44,30,30,0.14)] lg:h-full lg:aspect-auto"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
