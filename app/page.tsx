import Loader from "@/components/ui/loader/Loader";
import { lazy } from "react";
const HomePage = lazy(() => import('../components/Home/HomePage'));
const ClientRatings = lazy(() => import('../components/ClientRatings/ClientRatings'));
const ClientReviewsVideos = lazy(() => import('../components/clients-reviews-videos/ClientReviewsVideos'));
const WhyChooseUs = lazy(() => import('../components/Why-choose-us/WhyChooseUs'));
const ServicesCard = lazy(() => import('../components/services/ServicesCard'));
const LastMomentDelivery = lazy(() => import('../components/last-moment-delivery/LastMomentDelivery'));

export default function MainScreen() {
  return (
    <div className="">
      <HomePage />
      <ServicesCard/>
      <ClientRatings/>
      <WhyChooseUs/>
      <ClientReviewsVideos/>
      <LastMomentDelivery/>
    </div>
  );
}

