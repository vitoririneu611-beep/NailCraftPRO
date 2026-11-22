import { useEffect, useState } from 'react';
import { PURCHASE_STATS_POLL_MS, PURCHASE_STATS_URL } from '../config/checkout';

export interface VerifiedPurchaseStats {
  recentPurchases: number;
  windowMinutes: number;
}

function parseVerifiedStats(payload: unknown): VerifiedPurchaseStats | null {
  if (!payload || typeof payload !== 'object') {
    return null;
  }

  const record = payload as Record<string, unknown>;
  const recentPurchases = record.recentPurchases;
  const windowMinutes = record.windowMinutes ?? 10;

  if (
    typeof recentPurchases !== 'number' ||
    !Number.isInteger(recentPurchases) ||
    recentPurchases <= 0
  ) {
    return null;
  }

  if (
    typeof windowMinutes !== 'number' ||
    !Number.isInteger(windowMinutes) ||
    windowMinutes <= 0
  ) {
    return null;
  }

  return {
    recentPurchases,
    windowMinutes,
  };
}

export function useVerifiedPurchaseStats(): VerifiedPurchaseStats | null {
  const [stats, setStats] = useState<VerifiedPurchaseStats | null>(null);

  useEffect(() => {
    if (!PURCHASE_STATS_URL) {
      setStats(null);
      return;
    }

    let isMounted = true;
    let activeController: AbortController | null = null;

    const loadStats = async () => {
      activeController?.abort();
      const controller = new AbortController();
      activeController = controller;

      try {
        const response = await fetch(PURCHASE_STATS_URL, {
          method: 'GET',
          headers: { Accept: 'application/json' },
          signal: controller.signal,
        });

        if (!response.ok) {
          if (isMounted) setStats(null);
          return;
        }

        const data: unknown = await response.json();
        if (isMounted) {
          setStats(parseVerifiedStats(data));
        }
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') {
          return;
        }
        if (isMounted) {
          setStats(null);
        }
      }
    };

    void loadStats();
    const intervalId = window.setInterval(() => {
      void loadStats();
    }, PURCHASE_STATS_POLL_MS);

    return () => {
      isMounted = false;
      activeController?.abort();
      window.clearInterval(intervalId);
    };
  }, []);

  return stats;
}
