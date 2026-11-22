import { motion } from 'motion/react';
import { Layers, Palette, ShieldCheck, TrendingUp } from 'lucide-react';

const LEARNING_PILLARS = [
  {
    number: '01',
    title: 'Fundamentos y Bioseguridad',
    description: 'Anatomía, higiene, herramientas y preparación.',
    icon: ShieldCheck,
  },
  {
    number: '02',
    title: 'Técnicas Profesionales',
    description: 'Manicura, esmaltado, nivelación y extensiones.',
    icon: Layers,
  },
  {
    number: '03',
    title: 'Nail Art y Diseño',
    description: 'Decoración, acabados y fotografía de uñas.',
    icon: Palette,
  },
  {
    number: '04',
    title: 'Negocio y Marketing',
    description: 'Atención al cliente, precios, ventas y crecimiento.',
    icon: TrendingUp,
  },
];

export function LearningSection() {
  return (
    <section
      id="aprender"
      className="border-y border-[#E9DDD6] bg-[#F6EFEA] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-semibold tracking-[0.18em] text-[#9E743C]">
            PLAN DE ESTUDIO
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-[#2C1E1E] [text-wrap:balance] sm:text-4xl">
            Lo que vas a aprender
          </h2>
          <p className="mt-3 text-base text-[#5E4B49]">
            Cuatro áreas esenciales explicadas con claridad para quienes comienzan desde cero o desean perfeccionar su técnica.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 md:grid-cols-2 lg:gap-6">
          {LEARNING_PILLARS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex items-start gap-5 rounded-2xl border border-[#E6D8D0] bg-white p-6 transition-colors duration-200 hover:border-[#C59B5F]/60 sm:p-7"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#E6D5C8] bg-[#FAF4F0] text-[#9E743C]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>

                <div className="min-w-0">
                  <span className="block text-xs font-semibold tracking-[0.12em] text-[#9E743C] tabular-nums">
                    {item.number}
                  </span>
                  <h3 className="mt-1 font-serif text-2xl font-semibold leading-snug text-[#2C1E1E]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5E4B49] sm:text-base">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
