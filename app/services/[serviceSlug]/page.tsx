import ServiceDetailSection from "@/components/services/service-detail-section/ServiceDetailSection";
import TopSection from "@/components/Top-Section/TopSection";
import { notFound } from "next/navigation";
import "./serviceDetails.css";
import PerfectMovers from "@/components/services/service-detail-section/PerfectMovers";
import ClientRatings from "@/components/ClientRatings/ClientRatings";
import MovingEfforts from "@/components/services/moving-efforts/MovingEfforts";
import {
  commercialMovingEfforts,
  commercialServiceHeroSection,
  commercialServicesPerfectMove,
  crossCountryMovingEfforts,
  crossCountryServiceHeroSection,
  crossCountryServicesPerfectMove,
  demolitionSectionOne,
  demolitionSectionThree,
  demolitionSectionTwo,
  junkRemovalMovingEfforts,
  junkRemovalServiceHeroSection,
  junkRemovalServicesPerfectMove,
  longDistanceSectionOne,
  longDistanceSectionThree,
  longDistanceSectionTwo,
  ResidentialMovingEfforts,
  residentialServiceHeroSection,
  residentialServices,
} from "@/GlobalConstant";
import WhyChooseGoldStar from "@/components/Why-choose-us/WhyChooseGoldStar";

type Props = {
  params: {
    serviceSlug: string;
  };
};

export default async function ServicePage({ params }: Props) {
  const { serviceSlug } = await params;

  const servicesData: any = {
  "residential-moving-service": {
    title: "Residential Moving Service",
    description: "Build fast and scalable websites.",
    components: [
      {
        Component: ServiceDetailSection,
        props: { serviceHeroSection: residentialServiceHeroSection },
      },
      { Component: PerfectMovers, props: { services: residentialServices, slug: serviceSlug } },
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
      {
        Component: ServiceDetailSection,
        props: { serviceHeroSection: commercialServiceHeroSection },
      },
      {
        Component: PerfectMovers,
        props: { services: commercialServicesPerfectMove, slug: serviceSlug },
      },
      {
        Component: MovingEfforts,
        props: { residentialMovingEfforts: commercialMovingEfforts },
      },
    ],
  },
  "junk-removal-moving-service": {
    title: "Junk Removal Service",
    description: "Creative visuals for your brand.",
    components: [
      {
        Component: ServiceDetailSection,
        props: { serviceHeroSection: junkRemovalServiceHeroSection },
      },
      {
        Component: PerfectMovers,
        props: { services: junkRemovalServicesPerfectMove, slug: serviceSlug },
      },
      {
        Component: MovingEfforts,
        props: { residentialMovingEfforts: junkRemovalMovingEfforts },
      },
    ],
  },
  "cross-country-moving-service": {
    title: "Cross Country Moving Service",
    description: "Creative visuals for your brand.",
    components: [
      {
        Component: ServiceDetailSection,
        props: { serviceHeroSection: crossCountryServiceHeroSection },
      },
      {
        Component: PerfectMovers,
        props: { services: crossCountryServicesPerfectMove, slug: serviceSlug },
      },
      {
        Component: MovingEfforts,
        props: { residentialMovingEfforts: crossCountryMovingEfforts },
      },
    ],
  },
  "long-distance-moving-service": {
    title: "Long Distance Moving Service",
    description: "Creative visuals for your brand.",
    components: [
      {
        Component: ServiceDetailSection,
        props: { serviceHeroSection: longDistanceSectionOne },
      },
      { Component: PerfectMovers, props: { services: longDistanceSectionTwo, slug: serviceSlug } },
      {
        Component: MovingEfforts,
        props: { residentialMovingEfforts: longDistanceSectionThree },
      },
    ],
  },
  "demolition-service": {
    title: "Demolition  Service",
    description: "Creative visuals for your brand.",
    components: [
      {
        Component: ServiceDetailSection,
        props: { serviceHeroSection: demolitionSectionOne },
      },
      { Component: PerfectMovers, props: { services: demolitionSectionTwo, slug: serviceSlug } },
      {
        Component: MovingEfforts,
        props: { residentialMovingEfforts: demolitionSectionThree },
      },
    ],
  },
};

  const service = servicesData[serviceSlug];

  if (!service) return notFound();

  return (
    <div>
      <TopSection title={service.title} />
      <section className="position-relative py-5 text-white">
        {service.components?.map(({ Component, props }: any, index: number) => (
          <div
            data-aos="fade-up"
            data-aos-delay={index * 150}
            data-aos-duration="1000"
          >
            <Component key={index} {...(props || {})} />
          </div>
        ))}
        <ClientRatings />
        <WhyChooseGoldStar />
      </section>
    </div>
  );
}
