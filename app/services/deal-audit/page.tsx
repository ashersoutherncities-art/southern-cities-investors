import StarterOfferDetail from '@/components/StarterOfferDetail';
import { getStarterOfferBySlug } from '@/lib/service-data';

const offer = getStarterOfferBySlug('deal-audit');

export default function DealAuditPage() {
  if (!offer) return null;
  return <StarterOfferDetail offer={offer} />;
}
