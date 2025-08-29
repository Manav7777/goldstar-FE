import HomePage from "@/components/Home/HomePage";
import Loader from "@/components/ui/loader/Loader";
import { lazy, Suspense } from "react";
const ClientRatings = lazy(() => import('../components/ClientRatings/ClientRatings'));
const ClientReviewsVideos = lazy(() => import('../components/clients-reviews-videos/ClientReviewsVideos'));
const WhyChooseUs = lazy(() => import('../components/Why-choose-us/WhyChooseUs'));
const ServicesCard = lazy(() => import('../components/services/ServicesCard'));
const LastMomentDelivery = lazy(() => import('../components/last-moment-delivery/LastMomentDelivery'));

export default function MainScreen() {
  return (
    <div className="">
      <Suspense fallback={<Loader/>}>
        <HomePage />
        <ServicesCard/>
        <ClientRatings/>
        <WhyChooseUs/>
        <ClientReviewsVideos/>
        <LastMomentDelivery/>
      </Suspense>
    </div>
  );
}
