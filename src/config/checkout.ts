/**
 * ============================================================================
 * CONFIGURACIÓN DEL ENLACE DE CHECKOUT — NAILCRAFT PRO ACADEMY
 * ============================================================================
 *
 * Para conectar tus botones de compra con tu pasarela de pago (Hotmart,
 * Mercado Pago, PayU, Stripe, Kiwify, Gumroad, etc.):
 *
 * 1. Reemplaza la URL dentro de DEFAULT_CHECKOUT_URL por tu enlace real.
 *    Opcionalmente, también puedes definir VITE_CHECKOUT_URL en tus variables
 *    de entorno.
 * 2. Todos los botones de compra de la página apuntan automáticamente a
 *    CHECKOUT_URL.
 */
const DEFAULT_CHECKOUT_URL = 'https://pay.cakto.com.br/zrfcif3';

export const CHECKOUT_URL: string =
  import.meta.env.VITE_CHECKOUT_URL?.trim() || DEFAULT_CHECKOUT_URL;

export const PRODUCT_PRICE = '$57 MXN';

/**
 * ============================================================================
 * INTEGRACIÓN DE PRUEBA SOCIAL EN TIEMPO REAL (DATOS VERIFICABLES)
 * ============================================================================
 *
 * Para activar el aviso dinámico de compras recientes:
 * 1. Configura un endpoint real (por ejemplo, conectado a los webhooks de Cakto)
 *    que devuelva JSON con el formato:
 *    { "recentPurchases": 13, "windowMinutes": 10 }
 * 2. Define VITE_PURCHASE_STATS_URL en tus variables de entorno o coloca la
 *    URL aquí abajo en DEFAULT_PURCHASE_STATS_URL.
 *
 * Mientras no exista una URL configurada o el número sea 0, el componente
 * permanecerá oculto para no mostrar datos ficticios.
 */
const DEFAULT_PURCHASE_STATS_URL = '';

export const PURCHASE_STATS_URL: string =
  import.meta.env.VITE_PURCHASE_STATS_URL?.trim() || DEFAULT_PURCHASE_STATS_URL;

export const PURCHASE_STATS_POLL_MS = 60_000;
