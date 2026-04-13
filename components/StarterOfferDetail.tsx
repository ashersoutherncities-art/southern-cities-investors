import OfferDetail from '@/components/OfferDetail';
import type { StarterOffer } from '@/lib/service-data';

export default function StarterOfferDetail({ offer }: { offer: StarterOffer }) {
  return <OfferDetail offer={offer} />;
}
