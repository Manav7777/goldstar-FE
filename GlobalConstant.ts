const sanitizeSvg = (svg: string) => svg.replace(/className=/g, "class=");

export const goldStarMenus = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  {
    id: 3,
    name: "Services",
    url: "/services",
    subMenu: [
      {
        id: 4,
        name: "Residential",
        url: "/services/residential-moving-service",
      },
      { id: 5, name: "Commercial", url: "/services/commercial-moving-service" },
      {
        id: 6,
        name: "Cross-Country",
        url: "/services/cross-country-moving-service",
      },
      {
        id: 7,
        name: "Junk Removal",
        url: "/services/junk-removal-moving-service",
      },
    ],
  },
  { id: 8, name: "Gallery", url: "/gallery" },
  {
    id: 10,
    name: "Locations",
    subMenu: [
      { id: 11, name: "Etobicoke", url: "/etobicoke" },
      { id: 12, name: "Mississauga", url: "/mississauga" },
      { id: 13, name: "North York", url: "/north-york" },
      { id: 14, name: "Toronto", url: "/toronto" },
      { id: 15, name: "Oakville", url: "/oakville" },
      { id: 16, name: "Vaughan", url: "/vaughan" },
      { id: 17, name: "Brampton", url: "/brampton" },
      { id: 18, name: "Milton", url: "/milton" },
    ],
  },
  { id: 19, name: "Contact Us", url: "/contact" },
];

export const footersLinks = [
  { id: 3, menu: "Home", url: "/" },
  { id: 4, menu: "About Us", url: "/about" },
  { id: 5, menu: "Our Service", url: "/services" },
  { id: 6, menu: "Residential Service", url: "/services/residential-service" },
  { id: 7, menu: "Commercial Service", url: "/services/commercial-service" },
  {
    id: 8,
    menu: "Cross Country Service",
    url: "/services/cross-country-service",
  },
  { id: 9, menu: "Gallery", url: "/gallery" },
];

export const openingTimes = [
  { id: 11, day: "Monday", time: "6:00AM to 9:00PM" },
  { id: 12, day: "Tuesday", time: "6:00AM to 9:00PM" },
  { id: 14, day: "Wednesday", time: "6:00AM to 9:00PM" },
  { id: 15, day: "Thursday", time: "6:00AM to 9:00PM" },
  { id: 16, day: "Friday", time: "6:00AM to 9:00PM" },
  { id: 17, day: "Saturday", time: "7:00AM to 8:00PM" },
  { id: 18, day: "Sunday", time: "7:00AM to 8:00PM" },
];

export const HouseIcon = () =>
  `<svg xmlns="http://www.w3.org/2000/svg" className="icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
    <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
  </svg>`;

export const CalendarIcon = () =>
  `<svg xmlns="http://www.w3.org/2000/svg" className="icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M8 2v4" />
    <path d="M16 2v4" />
    <rect width="18" height="18" x="3" y="4" rx="2" />
    <path d="M3 10h18" />
  </svg>`;

export const PackageIcon = () =>
  `<svg xmlns="http://www.w3.org/2000/svg" className="icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z" />
    <path d="M12 22V12" />
    <path d="m3.3 7 7.7 4.73a2 2 0 0 0 2 0L20.7 7" />
    <path d="m7.5 4.27 9 5.15" />
  </svg>`;

export const MapPinIcon = () =>
  `<svg xmlns="http://www.w3.org/2000/svg" className="icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
    <circle cx="12" cy="10" r="3" />
  </svg>`;

export const clockIcon = () =>
  `<svg xmlns="http://www.w3.org/2000/svg" className="icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>`;

export const usersIcons = () =>
  `<svg xmlns="http://www.w3.org/2000/svg" className="icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>`;

export const truckIcon = () =>
  `<svg class="icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
        <path d="M15 18H9" />
        <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
        <circle cx="17" cy="18" r="2" />
        <circle cx="7" cy="18" r="2" />
      </svg>`;

export const guardIcon = () =>
  `<svg class="icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      </svg>`;

export const internetIcon = () =>
  `<svg class="icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>`;

export const awardIcon = () =>
  `<svg className="icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
        <circle cx="12" cy="8" r="6" />
      </svg>`;

export const bagIcon = () =>
  `<svg className="icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        <rect width="20" height="14" x="2" y="6" rx="2"></rect>
      </svg>`;

export const serverIcon = () =>
  `<svg className="icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect>
        <rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect>
        <line x1="6" x2="6.01" y1="6" y2="6"></line>
        <line x1="6" x2="6.01" y1="18" y2="18"></line>
      </svg>`;

export const companyIcon = () =>
  `<svg className="icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect>
        <path d="M9 22v-4h6v4"></path>
        <path d="M8 6h.01"></path>
        <path d="M16 6h.01"></path>
        <path d="M12 6h.01"></path>
        <path d="M12 10h.01"></path>
        <path d="M12 14h.01"></path>
        <path d="M16 10h.01"></path>
        <path d="M16 14h.01"></path>
        <path d="M8 10h.01"></path>
        <path d="M8 14h.01"></path>
      </svg>`;

export const recycleIcon = () =>
  `<svg class="icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"></path>
      <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"></path>
      <path d="m14 16-3 3 3 3"></path>
      <path d="M8.293 13.596 7.196 9.5 3.1 10.598"></path>
      <path
          d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"></path>
      <path d="m13.378 9.633 4.096 1.098 1.097-4.096"></path>
    </svg>`;

export const leafIcon = () =>
  `<svg class="icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
    </svg>`;

export const heartIcon = () =>
  `<svg class="icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
    </svg>`;

export const removeIcon = () =>
  `<svg class="icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path d="M3 6h18"></path>
    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
    <line x1="10" x2="10" y1="11" y2="17"></line>
    <line x1="14" x2="14" y1="11" y2="17"></line>
    </svg>`;

export const realTimeTrackIcon = () => (
  `<svg class="icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
  </svg>`
)

export const distanceIcon = () => (
  `<svg class="icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
    stroke="currentColor">
    <path d="M4 4a2 2 0 0 0-2 2c0 1.8 2 4.5 2 4.5S6 7.8 6 6a2 2 0 0 0-2-2z" stroke-width="1.5" stroke-linejoin="round"/>
    <circle cx="4" cy="6" r="0.8" fill="currentColor"/>
    <path d="M4 8 C 8 14, 16 4, 20 10" stroke-width="1.5" stroke-dasharray="2 2" stroke-linecap="round"/>
    <path d="M20 9a2 2 0 0 0-2 2c0 1.8 2 4.5 2 4.5s2-2.7 2-4.5a2 2 0 0 0-2-2z" stroke-width="1.5" stroke-linejoin="round"/>
    <circle cx="20" cy="11" r="0.8" fill="currentColor"/>
</svg>`
)

export const ResidentialMovingEfforts: any = {
  title: `How We Make Moving`,
  span: " Effortless",
  description: `Our proven 4-step process ensures every move is executed flawlessly, on time, and within budget.`,
  data: [
    {
      number: "01",
      title: "Smart Assessment",
      description:
        "AI-powered virtual survey provides instant, accurate quotes based on your specific inventory and needs.",
      icon: sanitizeSvg(HouseIcon()),
      bgColor: "bg-blue-50",
      textColor: "text-blue",
    },
    {
      number: "02",
      title: "Custom Planning",
      description:
        "Personalized moving timeline with flexibility built in for your schedule and preferences.",
      icon: sanitizeSvg(CalendarIcon()),
      bgColor: "bg-green-50",
      textColor: "text-green",
    },
    {
      number: "03",
      title: "Expert Execution",
      description:
        "Professional team handles packing, loading, and transport with real-time updates.",
      icon: sanitizeSvg(PackageIcon()),
      bgColor: "bg-yellow-50",
      textColor: "text-brand-yellow",
    },
    {
      number: "04",
      title: "Perfect Delivery",
      description:
        "White-glove delivery, setup, and final walkthrough to ensure complete satisfaction.",
      icon: sanitizeSvg(MapPinIcon()),
      bgColor: "bg-purple-50",
      textColor: "text-purple",
    },
  ],
};

export const residentialServiceHeroSection: any = {
  title: "Your Home.",
  highlightedTitle: "Our Mission.",
  subtitle: "Moving Made Magical",
  description:
    "Experience the joy of stress-free moving with our award-winning residential services. We don't just move your belongings—we move your life forward with care and precision.",
  imageUrl:
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
  buttonText: "Request Now",
  showTag: true,
  tagText: "Trusted by 1,000+ Businesses",
};

export const commercialServiceHeroSection: any = {
  title: "Your Business.",
  highlightedTitle: "Always Moving.",
  subtitle: "Never Missing a Beat",
  description:
    "Experience enterprise-grade commercial moving that keeps your business running. From startups to Fortune 500 companies, we deliver seamless relocations with zero downtime.",
  imageUrl:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
  buttonText: "Request Now",
  showTag: true,
  tagText: "Trusted by 1,000+ Businesses",
};

export const junkRemovalServiceHeroSection: any = {
  title: "Your Space",
  highlightedTitle: "Our Mission.",
  subtitle: "Clean out and disposal services",
  description:
    "Reclaim your space with our comprehensive junk removal services. We make decluttering effortless while prioritizing environmental responsibility through donation, recycling, and proper disposal.",
  imageUrl:
    `${process.env.NEXT_PUBLIC_IMAGE_SERVICE_URL}junk-removal-service.webp`,
  buttonText: "Request Now",
  showTag: true,
  tagText: "Trusted by 1,000+ Businesses",
};


export const commercialMovingEfforts: any = {
  title: `Why Businesses Choose`,
  span: " GoldStarMovers",
  description: `We understand that time is money. Our proven methodology minimizes disruption while maximizing efficiency.`,
  data: [
    {
      title: "Smart Assessment",
      description:
        "AI-powered virtual survey provides instant, accurate quotes based on your specific inventory and needs.",
      icon: sanitizeSvg(clockIcon()),
      bgColor: "bg-green-50",
      textColor: "text-green",
    },
    {
      title: "Strategic Planning",
      description:
        "Personalized moving timeline with flexibility built in for your schedule and preferences.",
      icon: sanitizeSvg(usersIcons()),
      bgColor: "bg-blue-50",
      textColor: "text-blue",
    },
    {
      title: "Coordinated Execution",
      description:
        "Professional team handles packing, loading, and transport with real-time updates.",
      icon: sanitizeSvg(PackageIcon()),
      bgColor: "bg-yellow-50",
      textColor: "text-brand-yellow",
    },
    {
      title: "Perfect Delivery",
      description:
        "White-glove delivery, setup, and final walkthrough to ensure complete satisfaction.",
      icon: sanitizeSvg(MapPinIcon()),
      bgColor: "bg-purple-50",
      textColor: "text-purple",
    },
  ],
};

export const residentialServices: any = [
  {
    title: "Full-Service Packing",
    desc: "Professional packing with premium materials",
    icon: sanitizeSvg(PackageIcon()),
  },
  {
    title: "Furniture Assembly",
    desc: "Complete disassembly and reassembly service",
    icon: sanitizeSvg(truckIcon()),
  },
  {
    title: "Specialty Items",
    desc: "Piano, artwork, and antique handling",
    icon: sanitizeSvg(guardIcon()),
  },
  {
    title: "Flexible Timing",
    desc: "Same-day and next-day options",
    icon: sanitizeSvg(clockIcon()),
  },
  {
    title: "Storage Solutions",
    desc: "Temporary and long-term storage",
    icon: sanitizeSvg(internetIcon()),
  },
  {
    title: "Insurance Coverage",
    desc: "Comprehensive protection included",
    icon: sanitizeSvg(awardIcon()),
  },
];

export const commercialServicesPerfectMove: any = [
  {
    title: "Zero Downtime",
    desc: "Strategic planning and execution designed to minimize business interruption and maintain productivity.",
    icon: sanitizeSvg(bagIcon()),
  },
  {
    title: "Project Management",
    desc: "Dedicated project manager coordinates every detail of your commercial relocation from start to finish.",
    icon: sanitizeSvg(usersIcons()),
  },
  {
    title: "Secure Operations",
    desc: "Advanced security protocols for confidential documents and sensitive business equipment.",
    icon: sanitizeSvg(guardIcon()),
  },
  {
    title: "After-Hours Service",
    desc: "Weekend, evening, and holiday moving options to accommodate your business schedule.",
    icon: sanitizeSvg(clockIcon()),
  },
  {
    title: "IT Specialists",
    desc: "Certified technicians handle servers, networking equipment, and sensitive technology with expertise.",
    icon: sanitizeSvg(serverIcon()),
  },
  {
    title: "Complete Setup",
    desc: "Full office configuration and workstation setup to get your team operational immediately.",
    icon: sanitizeSvg(companyIcon()),
  },
];

export const junkRemovalServicesPerfectMove: any = [
  {
    title: "Eco-Friendly Disposal",
    desc: "Environmentally responsible disposal with priority on recycling and donation to reduce landfill waste.",
    icon: sanitizeSvg(recycleIcon()),
  },
  {
    title: "Same-Day Service",
    desc: "Rapid response with same-day and next-day pickup options available throughout the Greater Toronto Area.",
    icon: sanitizeSvg(clockIcon()),
  },
  {
    title: "Green Practices",
    desc: "Sustainable disposal methods following strict environmental regulations and green certification standards.",
    icon: sanitizeSvg(leafIcon()),
  },
  {
    title: "Full-Service Removal",
    desc: "Complete junk removal service - we handle all heavy lifting, loading, and cleanup from any location.",
    icon: sanitizeSvg(truckIcon()),
  },
  {
    title: "Community Impact",
    desc: "Usable items are donated to local charities and community organizations to benefit those in need.",
    icon: sanitizeSvg(heartIcon()),
  },
  {
    title: "Complete Cleanouts",
    desc: "Comprehensive property cleanouts from single items to entire estates, garages, and commercial spaces.",
    icon: sanitizeSvg(removeIcon()),
  },
];

export const junkRemovalMovingEfforts: any = {
  title: `How We Make Moving`,
  span: " Effortless",
  description: `Our proven process ensures every move is executed flawlessly, on time, and within budget.`,
  data: [
    {
      title: "Quick Booking",
      description:
        "Easy online scheduling or phone booking with flexible time slots to fit your schedule.",
      icon: sanitizeSvg(CalendarIcon()),
      bgColor: "bg-blue-50",
      textColor: "text-blue",
    },
    {
      title: "Transparent Pricing",
      description:
        "Upfront, honest pricing based on volume with no hidden fees or surprise charges.",
      icon: sanitizeSvg(usersIcons()),
      bgColor: "bg-purple-50",
      textColor: "text-purple",
    },
    {
      title: "Expert Removal",
      description:
        "Professional team handles packing, loading, and transport with real-time updates.",
      icon: sanitizeSvg(removeIcon()),
      bgColor: "bg-red-50",
      textColor: "text-red",
    },
    {
      title: "Responsible Disposal",
      description:
        "Items are sorted for donation, recycling, or proper disposal according to environmental standards.",
      icon: sanitizeSvg(recycleIcon()),
      bgColor: "bg-green-50",
      textColor: "text-green",
    },
  ],
};

export const crossCountryServiceHeroSection: any = {
  title: "Your Journey",
  highlightedTitle: "Our Mission.",
  subtitle: "Long-distance moves made easy",
  description:
    "Experience seamless long-distance relocations with our premium cross-country moving services. From coast to coast, we ensure your belongings travel safely with real-time tracking and comprehensive protection.",
  imageUrl:
    "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=600&h=400&fit=crop",
  buttonText: "Request Now",
  showTag: true,
  tagText: "Trusted by 1,000+ Businesses",
};

export const crossCountryServicesPerfectMove: any = [
  {
    title: "Real-Time Tracking",
    desc: "Advanced GPS tracking system provides live updates on your shipment's location throughout the journey.",
    icon: sanitizeSvg(realTimeTrackIcon()),
  },
  {
    title: "Premium Protection",
    desc: "Comprehensive insurance coverage with multiple protection levels for valuable and irreplaceable items.",
    icon: sanitizeSvg(guardIcon()),
  },
  {
    title: "Nationwide Network",
    desc: "Coast-to-coast coverage with local expertise in every Canadian province and major U.S. cities.",
    icon: sanitizeSvg(usersIcons()),
  },
  {
    title: "Flexible Delivery",
    desc: "Express, standard, and economy delivery options to match your timeline and budget requirements.",
    icon: sanitizeSvg(clockIcon()),
  },
  {
    title: "Border Expertise",
    desc: "Specialized knowledge for seamless Canada-U.S. relocations with all customs documentation handled.",
    icon: sanitizeSvg(MapPinIcon()),
  },
  {
    title: "Vehicle Transport",
    desc: "Professional car, motorcycle, and RV transportation services for complete family relocations.",
    icon: sanitizeSvg(truckIcon()),
  },
];

export const crossCountryMovingEfforts: any = {
  title: `Why Businesses Choose`,
  span: " GoldStarMovers",
  description: `Our proven process ensures every move is executed flawlessly, on time, and within budget.`,
  data: [
    {
      title: "Distance Planning",
      description:
        "Comprehensive long-distance consultation with route optimization and timeline coordination.",
      icon: sanitizeSvg(distanceIcon()),
      bgColor: "bg-blue-50",
      textColor: "text-blue",
    },
    {
      title: "Logistics Coordination",
      description:
        "Detailed scheduling with pickup, transit, and delivery windows customized to your needs.",
      icon: sanitizeSvg(usersIcons()),
      bgColor: "bg-purple-50",
      textColor: "text-purple",
    },
    {
      title: "Secure Transit",
      description:
        "Professional loading with GPS monitoring and climate-controlled transport options available.",
      icon: sanitizeSvg(guardIcon()),
      bgColor: "bg-red-50",
      textColor: "text-red",
    },
    {
      title: "Destination Service",
      description:
        "White-glove delivery and setup at your new location with final inventory verification.",
      icon: sanitizeSvg(MapPinIcon()),
      bgColor: "bg-green-50",
      textColor: "text-green",
    },
  ],
};