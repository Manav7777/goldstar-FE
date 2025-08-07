import ClientRatings from "@/components/ClientRatings/ClientRatings";
import ServiceSection from "@/components/services/ServiceSection/ServiceSection";
import TopSection from "@/components/Top-Section/TopSection";
import WhyChooseGoldStar from "@/components/Why-choose-us/WhyChooseGoldstar";

const GoldStarServices = () => {
  const services = [
    {
      title: "Residential Moving",
      subtitle: "Moving homes made simple",
      description:
        "Whether you're moving across town or across the state, our residential moving services ensure your household items arrive safely at your new home.",
      badgeText: "Most Popular",
      imageSrc:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
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
      reverse: false, // content - image
    },
    {
      title: "Commercial Relocation",
      subtitle: "Business moves with zero downtime",
      description:
        "Our commercial relocation experts ensure your equipment, furniture, and files are moved securely and efficiently.",
      badgeText: "Business Focused",
      imageSrc:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
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
      imageSrc: `${process.env.NEXT_PUBLIC_IMAGE_SERVICE_URL}junk-removal-service.webp`,
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
      reverse: false, // image - content
    },
    {
      title: "Cross-country Moving",
      subtitle: "Long-distance moves made easy",
      description:
        "Moving to a different state? Our cross-country moving services provide reliable transportation and tracking for long-distance relocations.",
      badgeText: null,
      imageSrc:
        "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=600&h=400&fit=crop",
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
