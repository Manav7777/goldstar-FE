import ServiceDetailSection from "@/components/services/service-detail-section/ServiceDetailSection";
import TopSection from "@/components/Top-Section/TopSection";
import { notFound } from "next/navigation";
import "./serviceDetails.css";
import PerfectMovers from "@/components/services/service-detail-section/PerfectMovers";
import ClientRatings from "@/components/ClientRatings/ClientRatings";
import MovingEfforts from "@/components/services/moving-efforts/MovingEfforts";
import { commercialMovingEfforts, commercialServiceHeroSection, commercialServicesPerfectMove, crossCountryMovingEfforts, crossCountryServiceHeroSection, crossCountryServicesPerfectMove, junkRemovalMovingEfforts, junkRemovalServiceHeroSection, junkRemovalServicesPerfectMove, ResidentialMovingEfforts, residentialServiceHeroSection, residentialServices } from "@/GlobalConstant";
import WhyChooseGoldStar from "@/components/Why-choose-us/WhyChooseGoldStar";

const servicesData: any = {
  "residential-moving-service": {
    title: "Residential Moving Service",
    description: "Build fast and scalable websites.",
    components: [
      {Component: ServiceDetailSection, props: { serviceHeroSection: residentialServiceHeroSection }},
      { Component: PerfectMovers, props: { services: residentialServices } },
      {
        Component: MovingEfforts,
        props: { residentialMovingEfforts: ResidentialMovingEfforts },
      },
    ],
  },
  "commercial-moving-service": {
    title: "Commercial Moving Service",
    description: "Improve your search engine rankings.",
    components: [
      {Component: ServiceDetailSection, props: { serviceHeroSection: commercialServiceHeroSection }},
      { Component: PerfectMovers, props: { services: commercialServicesPerfectMove } },
      {
        Component: MovingEfforts,
        props: { residentialMovingEfforts: commercialMovingEfforts },
      }
    ],
  },
  "junk-removal-moving-service": {
    title: "Junk Removal Moving Service",
    description: "Creative visuals for your brand.",
    components: [
      {Component: ServiceDetailSection, props: { serviceHeroSection: junkRemovalServiceHeroSection }},
      { Component: PerfectMovers, props: { services: junkRemovalServicesPerfectMove } },
      {
        Component: MovingEfforts,
        props: { residentialMovingEfforts: junkRemovalMovingEfforts },
      }
    ],
  },
  "cross-country-moving-service": {
    title: "Cross Country Moving Service",
    description: "Creative visuals for your brand.",
    components: [
      {Component: ServiceDetailSection, props: { serviceHeroSection: crossCountryServiceHeroSection }},
      { Component: PerfectMovers, props: { services: crossCountryServicesPerfectMove } },
      {
        Component: MovingEfforts,
        props: { residentialMovingEfforts: crossCountryMovingEfforts },
      }
    ],
  },
};

type Props = {
  params: {
    serviceSlug: string;
  };
};

export default async function ServicePage({ params }: Props) {
  const { serviceSlug } = await params;

  const service = servicesData[serviceSlug];

  if (!service) return notFound();

  return (
    <div>
      <TopSection title={service.title} />
      <section className="position-relative py-5 text-white">
        {service.components?.map(({ Component, props }: any, index: number) => (
          <Component key={index} {...(props || {})} />
        ))}
        <ClientRatings />
        <WhyChooseGoldStar />
      </section>
    </div>
  );
}
