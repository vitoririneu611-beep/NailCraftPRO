import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { ResilientImage } from './ResilientImage';

const MOCKUP_IMAGE_PATH = '/src/assets/images/ebook_nailcraft_mockup_1795323882047.jpg';

const INCLUDED_ITEMS = [
  'Manual digital PDF',
  '16 módulos educativos',
  '20 páginas de contenido',
  'Actividades prácticas',
  'Glosario profesional',
  'Guía de cuidados posteriores',
];

export function IncludesSection() {
  return (
    <section id="incluye" className="bg-[#FCF9F7] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <ResilientImage
              src={MOCKUP_IMAGE_PATH}
              alt="Mockup 3D del manual digital NailCraft Pro Academy con portada elegante en tonos rosa nude y dorado"
              loading="lazy"
              fallbackTitle="NailCraft Pro Academy — Manual PDF"
              wrapperClassName="aspect-square w-full rounded-2xl border border-[#E6D8D0] shadow-[0_20px_48px_-18px_rgba(44,30,30,0.12)]"
              className="h-full w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <p className="text-xs font-semibold tracking-[0.18em] text-[#9E743C]">
              MATERIAL DIGITAL
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-[#2C1E1E] [text-wrap:balance] sm:text-4xl">
              Qué incluye
            </h2>
            <p className="mt-3 max-w-lg text-base leading-relaxed text-[#5E4B49]">
              Todo el contenido organizado en una guía visual y práctica que puedes leer y consultar cuando lo necesites desde tu celular o computadora.
            </p>

            <ul className="mt-8 divide-y divide-[#EAE0D9] border-y border-[#EAE0D9]">
              {INCLUDED_ITEMS.map((label) => (
                <li
                  key={label}
                  className="flex items-center gap-3.5 py-3.5 sm:py-4"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#C59B5F]/50 bg-[#FAF4F0] text-[#9E743C]">
                    <Check className="h-3.5 w-3.5 stroke-[2.5]" aria-hidden="true" />
                  </span>
                  <span className="text-base font-medium text-[#2C1E1E] tabular-nums">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
