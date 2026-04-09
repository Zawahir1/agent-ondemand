/**
 * Fires a Google Ads conversion event when a user reveals a phone number
 * by submitting the lead gen form.
 *
 * Conversion: AW-798735486/dLkrCNOGkIUBEP747vwC
 */
export function firePhoneRevealConversion() {
  if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', 'conversion', {
      send_to: 'AW-798735486/dLkrCNOGkIUBEP747vwC',
    });
  }
}
