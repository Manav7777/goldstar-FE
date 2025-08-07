import ClientRatings from "@/components/ClientRatings/ClientRatings";
import HomePage from "@/components/Home/HomePage";
import LastMomentDelivery from "@/components/last-moment-delivery/LastMomentDelivery";
import ServicesCard from "@/components/services/ServicesCard";
import WhyChooseUs from "@/components/Why-choose-us/WhyChooseUs";

export default function MainScreen() {
  return (
    <div className="">
      <HomePage />
      <ServicesCard/>
      <ClientRatings/>
      <WhyChooseUs/>
      <LastMomentDelivery/>
    </div>
  );
}
