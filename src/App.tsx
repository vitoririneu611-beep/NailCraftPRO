/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MotionConfig } from 'motion/react';
import { FinalOfferSection } from './components/FinalOfferSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { IncludesSection } from './components/IncludesSection';
import { LearningSection } from './components/LearningSection';
import { Navbar } from './components/Navbar';
import { useVerifiedPurchaseStats } from './hooks/useVerifiedPurchaseStats';

export default function App() {
  const purchaseStats = useVerifiedPurchaseStats();

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#FCF9F7] text-[#2C1E1E]">
        <Navbar />
        <main>
          <HeroSection purchaseStats={purchaseStats} />
          <LearningSection />
          <IncludesSection />
          <FinalOfferSection purchaseStats={purchaseStats} />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
