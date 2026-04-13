import StarterOfferDetail from '@/components/StarterOfferDetail';
import { getStarterOfferBySlug } from '@/lib/service-data';

const offer = getStarterOfferBySlug('buy-box-review');

export default function BuyBoxReviewPage() {
  if (!offer) return null;
  return <StarterOfferDetail offer={offer} />;
}
