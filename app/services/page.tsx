import ClientRatings from "@/components/ClientRatings/ClientRatings";
import ServiceSection from "@/components/services/ServiceSection/ServiceSection";
import TopSection from "@/components/Top-Section/TopSection";
import WhyChooseGoldStar from "@/components/Why-choose-us/WhyChooseGoldStar";

const GoldStarServices = () => {
  const services = [
    {
      title: "Residential Moving",
      subtitle: "Moving homes made simple",
      description:
        "Whether you're moving across town or across the state, our residential moving services ensure your household items arrive safely at your new home.",
      badgeText: "Most Popular",
      imageSrc:
        `${process.env.NEXT_PUBLIC_IMAGE_SERVICE_URL}services/residential-moving.webp`,
      imageAlt: "Residential moving service",
      price: "Fast, Reliable Home Moving Services.",
      buttonText: "Request Now",
      features: [
        "Full packing and unpacking services",
        "Furniture disassembly and reassembly",
        "Specialty item handling (piano, artwork, antiques)",
        "Temporary storage solutions",
        "Moving insurance coverage",
        "Same-day and next-day moving options",
      ],
      reverseClassNameDivOne: "order-1 order-lg-2 mb-4",
      reverse: false, // content - image
    },
    {
      title: "Commercial Relocation",
      subtitle: "Business moves with zero downtime",
      description:
        "Our commercial relocation experts ensure your equipment, furniture, and files are moved securely and efficiently.",
      badgeText: "Business Focused",
      imageSrc:
        `${process.env.NEXT_PUBLIC_IMAGE_SERVICE_URL}services/commercial-moving.webp`,
      imageAlt: "Office moving service",
      price: "Office Moves With Zero Downtime.",
      buttonText: "Request Now",
      features: [
        "IT equipment transport",
        "Office setup services",
        "Weekend and after-hours scheduling",
        "Disposal and recycling services",
        "Inventory tagging and tracking",
      ],
      reverse: true, // image - content
    },
    {
      title: "Junk Removal",
      subtitle: "Clean out and disposal services",
      description:
        "Declutter your space with our eco-friendly junk removal services. We donate, recycle, and dispose of items responsibly.",
      badgeText: null,
      imageSrc: `${process.env.NEXT_PUBLIC_IMAGE_SERVICE_URL}services/junk-removal-service.webp`,
      imageAlt: "Junk Removal service",
      price: "Hassle-Free Junk and Trash Removal.",
      buttonText: "Request Now",
      features: [
        "Same-day removal available",
        "Eco-friendly disposal methods",
        "Donation coordination",
        "Estate cleanouts",
        "Construction debris removal",
        "Appliance and furniture removal",
      ],
      reverseClassNameDivOne: "order-1 order-lg-2 mb-4",
      reverse: false, // image - content
    },
    {
      title: "Cross-country Moving",
      subtitle: "Long-distance moves made easy",
      description:
        "Moving to a different state? Our cross-country moving services provide reliable transportation and tracking for long-distance relocations.",
      badgeText: null,
      imageSrc:
        `${process.env.NEXT_PUBLIC_IMAGE_SERVICE_URL}services/cross-country-moving.webp`,
      imageAlt: "Cross-country Moving",
      price: "Long-Distance Moving Made Easy.",
      buttonText: "Request Now",
      features: [
        "Door-to-door service nationwide",
        "Climate-controlled storage",
        "Real-time tracking and updates",
        "Full insurance coverage",
        "Expedited delivery options",
        "Dedicated move coordinator",
      ],
      reverse: true, // content - image
    },
    {
      title: "Long-Distance Moving",
      subtitle: "Reliable long-distance movers across Canada",
      description:
        "Need to move over 100 km or to a different province? GoldStar Packers and Movers offers expert long-distance moving solutions across Canada, tailored for stress-free, affordable relocations with full tracking, insurance, and support.",
      badgeText: null,
      imageSrc:
        `${process.env.NEXT_PUBLIC_IMAGE_SERVICE_URL}services/long-distance-moving.webp`,
      imageAlt:
        "GoldStar moving truck on a Canadian highway during long-distance move",
      price: "Long-Distance Movers Across Canada",
      buttonText: "Request Now",
      features: [
        "Licensed long-distance movers in Canada",
        "Interprovincial and cross-region moving support",
        "Real-time tracking and customer updates",
        "Climate-controlled storage options",
        "Fully insured transport services",
        "Personalized planning with move coordinator",
      ],
      reverseClassNameDivOne: "order-1 order-lg-2 mb-4",
      reverse: false,
    },
    {
    title: "Professional Demolition Services",
    subtitle: "Safe, Efficient, and Compliant Demolition Solutions",
    description:
      "GoldStar Demolition offers expert demolition services for residential, commercial, and industrial projects. We handle everything from full structural teardowns to selective interior demolition with complete safety, compliance, and efficiency. Trust our team for secure, on-time, and on-budget demolition services across Canada.",
    badgeText: null,
    imageSrc:
      `${process.env.NEXT_PUBLIC_IMAGE_SERVICE_URL}demolition-service.jpeg`,
    imageAlt:
      "GoldStar team performing a demolition job on a commercial building site",
    price: "Expert Demolition Services Nationwide",
    buttonText: "Request Now",
    features: [
      "Complete structural demolition for all property types",
      "Selective demolition for renovations and rebuilds",
      "Certified handling of hazardous materials",
      "Site cleanup and debris removal services",
      "Strict adherence to safety and legal regulations",
      "24/7 emergency demolition services available",
    ],
    reverseClassNameDivOne: "order-1 order-lg-2 mb-4",
    reverse: true,
  }

  ];
  return (
    <>
      <TopSection title="Services" />
      {services.map((service, index) => (
        <ServiceSection key={index} {...service} />
      ))}
      <ClientRatings />
      <WhyChooseGoldStar />
    </>
  );
};

export default GoldStarServices;
