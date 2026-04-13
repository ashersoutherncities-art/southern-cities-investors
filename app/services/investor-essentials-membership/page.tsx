import OfferDetail from '@/components/OfferDetail';
import { getMembershipOfferBySlug } from '@/lib/service-data';

const offer = getMembershipOfferBySlug('investor-essentials-membership');

export default function InvestorEssentialsMembershipPage() {
  if (!offer) return null;
  return <OfferDetail offer={offer} />;
}
