import StarterOfferDetail from '@/components/StarterOfferDetail';
import { getStarterOfferBySlug } from '@/lib/service-data';

const offer = getStarterOfferBySlug('operator-strategy-call');

export default function OperatorStrategyCallPage() {
  if (!offer) return null;
  return <StarterOfferDetail offer={offer} />;
}
