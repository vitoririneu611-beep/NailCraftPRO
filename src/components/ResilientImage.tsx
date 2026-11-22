import { useState } from 'react';
import { BookOpen } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
  fallbackTitle?: string;
  loading?: 'eager' | 'lazy';
  fetchPriority?: 'high' | 'low' | 'auto';
}

export function ResilientImage({
  src,
  alt,
  className = '',
  wrapperClassName = '',
  fallbackTitle = 'NailCraft Pro Academy',
  loading = 'lazy',
  fetchPriority = 'auto',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#F7EAE4] via-[#EFE0D8] to-[#E6D1C7] p-8 text-center text-[#5E4B49] ${wrapperClassName}`}
        role="img"
        aria-label={alt}
      >
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-[#C59B5F]/40 bg-white/70 text-[#9E743C]">
          <BookOpen className="h-5 w-5" aria-hidden="true" />
        </div>
        <p className="font-serif text-xl font-semibold text-[#2C1E1E]">
          {fallbackTitle}
        </p>
      </div>
    );
  }

  return (
    <div className={`overflow-hidden bg-[#F4EAE5] ${wrapperClassName}`}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        fetchPriority={fetchPriority}
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        className={className}
      />
    </div>
  );
}
