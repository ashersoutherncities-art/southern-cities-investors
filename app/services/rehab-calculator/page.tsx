import OfferDetail from '@/components/OfferDetail';
import { getDigitalOfferBySlug } from '@/lib/service-data';

const offer = getDigitalOfferBySlug('rehab-calculator');

export default function RehabCalculatorPage() {
  if (!offer) return null;
  return <OfferDetail offer={offer} />;
}
