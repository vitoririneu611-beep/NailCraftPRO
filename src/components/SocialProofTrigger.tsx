import { motion } from 'motion/react';
import { Users } from 'lucide-react';
import type { VerifiedPurchaseStats } from '../hooks/useVerifiedPurchaseStats';

interface SocialProofTriggerProps {
  stats: VerifiedPurchaseStats | null;
  align?: 'left' | 'center';
}

export function SocialProofTrigger({
  stats,
  align = 'left',
}: SocialProofTriggerProps) {
  if (!stats || stats.recentPurchases <= 0) {
    return null;
  }

  const { recentPurchases, windowMinutes } = stats;
  const peopleCopy =
    recentPurchases === 1
      ? '¡1 persona compró'
      : `¡${recentPurchases} personas compraron`;
  const timeCopy =
    windowMinutes === 1 ? 'en el último minuto!' : `en los últimos ${windowMinutes} minutos!`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      aria-live="polite"
      className={`inline-flex items-center gap-2.5 rounded-xl border border-[#EBD2CA] bg-[#FAEDE9] px-3.5 py-2 text-xs font-medium text-[#6B2F39] sm:text-sm ${
        align === 'center' ? 'justify-center' : 'justify-start'
      }`}
    >
      <Users
        className="h-4 w-4 shrink-0 text-[#8A3F4B]"
        aria-hidden="true"
      />
      <span className="tabular-nums">
        {peopleCopy} {timeCopy}
      </span>
    </motion.div>
  );
}
