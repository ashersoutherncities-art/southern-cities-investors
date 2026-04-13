import OfferDetail from '@/components/OfferDetail';
import { getDigitalOfferBySlug } from '@/lib/service-data';

const offer = getDigitalOfferBySlug('buy-box-toolkit');

export default function BuyBoxToolkitPage() {
  if (!offer) return null;
  return <OfferDetail offer={offer} />;
}
