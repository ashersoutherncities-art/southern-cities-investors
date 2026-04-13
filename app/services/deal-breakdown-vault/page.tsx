import OfferDetail from '@/components/OfferDetail';
import { getDigitalOfferBySlug } from '@/lib/service-data';

const offer = getDigitalOfferBySlug('deal-breakdown-vault');

export default function DealBreakdownVaultPage() {
  if (!offer) return null;
  return <OfferDetail offer={offer} />;
}
