import { ArrowRight } from 'lucide-react';
import { CHECKOUT_URL } from '../config/checkout';

interface CheckoutButtonProps {
  label: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showArrow?: boolean;
}

export function CheckoutButton({
  label,
  size = 'md',
  className = '',
  showArrow = true,
}: CheckoutButtonProps) {
  const sizeStyles = {
    sm: 'px-4 py-2 text-xs min-h-[40px]',
    md: 'px-7 py-3.5 text-sm min-h-[52px]',
    lg: 'px-8 py-4 text-sm sm:text-base min-h-[56px]',
  }[size];

  return (
    <a
      href={CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-2.5 rounded-xl border border-[#C59B5F]/45 bg-[#8A3F4B] font-semibold tracking-[0.04em] text-white shadow-[0_8px_24px_-8px_rgba(138,63,75,0.45)] transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:bg-[#73313C] hover:shadow-[0_12px_28px_-8px_rgba(138,63,75,0.55)] active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8A3F4B] ${sizeStyles} ${className}`}
    >
      <span className="text-center">{label}</span>
      {showArrow && (
        <ArrowRight
          className="h-4 w-4 shrink-0 text-[#F3DFC1] transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      )}
    </a>
  );
}
