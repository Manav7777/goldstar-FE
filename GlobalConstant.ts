import { Home, Building2, Package, Truck, Trash, Wrench } from "lucide-react";

const sanitizeSvg = (svg: string) => svg.replace(/className=/g, "class=");

export const goldStarMenus = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About Us", url: "/about" },
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
        id: 7,
        name: "Long-Distance",
        url: "/services/long-distance-moving-service",
      },

      {
        id: 6,
        name: "Cross-Country",
        url: "/services/cross-country-moving-service",
      },
  
      {
        id: 8,
        name: "Junk Removal",
        url: "/services/junk-removal-moving-service",
      },

      {
        id: 9,
        name: "Demolition",
        url: "/services/demolition-service",
      },

      // {
      //   id: 88,
      //   name: "All Services",
      //   url: "/services",
      // },
    ],
  },
  // { id: 8, name: "Gallery", url: "/gallery" },
  {
    id: 10,
    name: "Locations",
    className: "grid-submenu",
    subMenu: [
      { id: 11, name: "Etobicoke", url: "/goldstar/etobicoke" },
      { id: 12, name: "Mississauga", url: "/goldstar/mississauga" },
      { id: 13, name: "North York", url: "/goldstar/north-york" },
      { id: 9, name: "East York", url: "/goldstar/east-york" },
      { id: 10, name: "Hamilton", url: "/goldstar/hamilton" },
      { id: 14, name: "Toronto", url: "/goldstar/toronto" },
      { id: 15, name: "Oakville", url: "/goldstar/oakville" },
      { id: 16, name: "Vaughan", url: "/goldstar/vaughan" },
      { id: 17, name: "Brampton", url: "/goldstar/brampton" },
      { id: 18, name: "Milton", url: "/goldstar/milton" },
      { id: 19, name: "Aurora", url: "/goldstar/aurora" },
      { id: 20, name: "Richmond Hill", url: "/goldstar/richmond-hill" },
      { id: 21, name: "Burlington", url: "/goldstar/burlington" },
      { id: 22, name: "Pickering", url: "/goldstar/pickering" },
      { id: 23, name: "St. Catharines", url: "/goldstar/st-catharines" },
      { id: 24, name: "Grimsby ", url: "/goldstar/grimsby " },
      { id: 25, name: "Scarborough ", url: "/goldstar/scarborough" },
      { id: 26, name: "Niagara Falls ", url: "/goldstar/niagara-falls" },
      { id: 27, name: "Markham", url: "/goldstar/markham" },
      { id: 28, name: "Guelph", url: "/goldstar/guelph" },
      { id: 29, name: "Caledon", url: "/goldstar/caledon" },   
      { id: 30, name: "Oshawa", url: "/goldstar/oshawa" },   
    ],
  },
  { id: 19, name: "Contact Us", url: "/contact" },
];

export const footersLinks = [
  {
    id: 6,
    menu: "Residential Service",
    url: "/services/residential-moving-service",
  },
  {
    id: 7,
    menu: "Commercial Service",
    url: "/services/commercial-moving-service",
  },
  {
    id: 8,
    menu: "Long-Distance Service",
    url: "/services/cross-country-service",
  },
  {
    id: 9,
    menu: "Cross-Country Service",
    url: "/services/cross-country-moving-service",
  },
  {
    id: 10,
    menu: "Junk Removal",
    url: "/services/junk-removal-moving-service",
  },
  { id: 11, menu: "Demolition Service", url: "/services/demolition-service" },
];

export const openingTimes = [
  { id: 11, day: "Monday", time: "6:00 AM to 9:00 PM" },
  { id: 12, day: "Tuesday", time: "6:00 AM to 9:00 PM" },
  { id: 14, day: "Wednesday", time: "6:00 AM to 9:00 PM" },
  { id: 15, day: "Thursday", time: "6:00 AM to 9:00 PM" },
  { id: 16, day: "Friday", time: "6:00 AM to 9:00 PM" },
  { id: 17, day: "Saturday", time: "7:00 AM to 8:00 PM" },
  { id: 18, day: "Sunday", time: "7:00 AM to 8:00 PM" },
];

export const socialLinks = {
  instagram: "https://www.instagram.com/goldstarmovers/",
  facebook: "https://www.facebook.com/people/Gold-Star-Movers/100037978853263/",
  youtube: "https://www.youtube.com/@goldstarmovers5806",
};

export const aboutLists = [
  { icon: "Home", text: "Residential & Commercial Moving" },
  { icon: "Building2", text: "Cross-Country and USA Relocation Services" },
  { icon: "Truck", text: "Junk Removal" },
  { icon: "Trash", text: "Professional Demolition Services" },
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

export const realTimeTrackIcon = () =>
  `<svg class="icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
  </svg>`;

export const distanceIcon = () =>
  `<svg class="icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
    stroke="currentColor">
    <path d="M4 4a2 2 0 0 0-2 2c0 1.8 2 4.5 2 4.5S6 7.8 6 6a2 2 0 0 0-2-2z" stroke-width="1.5" stroke-linejoin="round"/>
    <circle cx="4" cy="6" r="0.8" fill="currentColor"/>
    <path d="M4 8 C 8 14, 16 4, 20 10" stroke-width="1.5" stroke-dasharray="2 2" stroke-linecap="round"/>
    <path d="M20 9a2 2 0 0 0-2 2c0 1.8 2 4.5 2 4.5s2-2.7 2-4.5a2 2 0 0 0-2-2z" stroke-width="1.5" stroke-linejoin="round"/>
    <circle cx="20" cy="11" r="0.8" fill="currentColor"/>
</svg>`;

export const fastDeliveryIcon = () =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 -1 26 26" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.31 16.826C12.2864 17.9963 11.3464 18.9278 10.2052 18.9118C9.06401 18.8957 8.14927 17.9382 8.15697 16.7676C8.16467 15.5971 9.09191 14.6522 10.2332 14.652C10.7897 14.6578 11.3212 14.8901 11.7106 15.2978C12.1001 15.7055 12.3157 16.2552 12.31 16.826V16.826Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M22.2014 16.826C22.1778 17.9963 21.2378 18.9278 20.0966 18.9118C18.9554 18.8957 18.0407 17.9382 18.0484 16.7676C18.0561 15.5971 18.9833 14.6522 20.1246 14.652C20.6811 14.6578 21.2126 14.8901 21.602 15.2978C21.9915 15.7055 22.2071 16.2552 22.2014 16.826V16.826Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M17.8032 17.576C18.2174 17.576 18.5532 17.2402 18.5532 16.826C18.5532 16.4118 18.2174 16.076 17.8032 16.076V17.576ZM12.31 16.076C11.8958 16.076 11.56 16.4118 11.56 16.826C11.56 17.2402 11.8958 17.576 12.31 17.576V16.076ZM17.0571 16.826C17.0571 17.2402 17.3928 17.576 17.8071 17.576C18.2213 17.576 18.5571 17.2402 18.5571 16.826H17.0571ZM18.5571 11.559C18.5571 11.1448 18.2213 10.809 17.8071 10.809C17.3928 10.809 17.0571 11.1448 17.0571 11.559H18.5571ZM17.8071 16.076C17.3928 16.076 17.0571 16.4118 17.0571 16.826C17.0571 17.2402 17.3928 17.576 17.8071 17.576V16.076ZM18.0518 17.576C18.466 17.576 18.8018 17.2402 18.8018 16.826C18.8018 16.4118 18.466 16.076 18.0518 16.076V17.576ZM22.189 16.0762C21.7749 16.0852 21.4465 16.4281 21.4555 16.8423C21.4644 17.2564 21.8074 17.5848 22.2215 17.5758L22.189 16.0762ZM24.4 14.485L25.1499 14.4718C25.1492 14.4331 25.1455 14.3946 25.1389 14.3565L24.4 14.485ZM24.63 11.4305C24.559 11.0224 24.1706 10.7491 23.7625 10.8201C23.3544 10.8911 23.0812 11.2794 23.1521 11.6875L24.63 11.4305ZM17.8031 6.127C17.3889 6.127 17.0531 6.46279 17.0531 6.877C17.0531 7.29121 17.3889 7.627 17.8031 7.627V6.127ZM21.2849 6.877L21.2849 7.62702L21.2897 7.62698L21.2849 6.877ZM22.8737 7.56387L22.327 8.07731L22.327 8.07731L22.8737 7.56387ZM23.4835 9.218L22.7342 9.18603C22.7319 9.23979 22.7354 9.29363 22.7446 9.34663L23.4835 9.218ZM23.1522 11.6876C23.2232 12.0957 23.6116 12.3689 24.0197 12.2979C24.4278 12.2268 24.701 11.8384 24.6299 11.4304L23.1522 11.6876ZM18.5531 6.877C18.5531 6.46279 18.2174 6.127 17.8031 6.127C17.3889 6.127 17.0531 6.46279 17.0531 6.877H18.5531ZM17.0531 11.559C17.0531 11.9732 17.3889 12.309 17.8031 12.309C18.2174 12.309 18.5531 11.9732 18.5531 11.559H17.0531ZM17.0531 6.877C17.0531 7.29121 17.3889 7.627 17.8031 7.627C18.2174 7.627 18.5531 7.29121 18.5531 6.877H17.0531ZM17.8031 6.077L17.0531 6.0722V6.077H17.8031ZM16.7657 5L16.77 4.25H16.7657V5ZM7.42037 5L7.42037 4.24999L7.41679 4.25001L7.42037 5ZM6.68411 5.31693L6.14467 4.79587L6.14467 4.79587L6.68411 5.31693ZM6.382 6.075L7.13201 6.075L7.13199 6.07158L6.382 6.075ZM6.382 15.75L7.132 15.7534V15.75H6.382ZM6.68411 16.5081L6.14467 17.0291L6.14467 17.0291L6.68411 16.5081ZM7.42037 16.825L7.41679 17.575H7.42037V16.825ZM8.1526 17.575C8.56681 17.575 8.9026 17.2392 8.9026 16.825C8.9026 16.4108 8.56681 16.075 8.1526 16.075V17.575ZM17.8051 10.808C17.3909 10.808 17.0551 11.1438 17.0551 11.558C17.0551 11.9722 17.3909 12.308 17.8051 12.308V10.808ZM23.893 12.308C24.3072 12.308 24.643 11.9722 24.643 11.558C24.643 11.1438 24.3072 10.808 23.893 10.808V12.308ZM1 6.25C0.585786 6.25 0.25 6.58579 0.25 7C0.25 7.41421 0.585786 7.75 1 7.75V6.25ZM4.05175 7.75C4.46596 7.75 4.80175 7.41421 4.80175 7C4.80175 6.58579 4.46596 6.25 4.05175 6.25V7.75ZM1.975 9.25C1.56079 9.25 1.225 9.58579 1.225 10C1.225 10.4142 1.56079 10.75 1.975 10.75V9.25ZM3.925 10.75C4.33921 10.75 4.675 10.4142 4.675 10C4.675 9.58579 4.33921 9.25 3.925 9.25V10.75ZM2.56975 12.25C2.15554 12.25 1.81975 12.5858 1.81975 13C1.81975 13.4142 2.15554 13.75 2.56975 13.75V12.25ZM3.925 13.75C4.33921 13.75 4.675 13.4142 4.675 13C4.675 12.5858 4.33921 12.25 3.925 12.25V13.75ZM17.8032 16.076H12.31V17.576H17.8032V16.076ZM18.5571 16.826V11.559H17.0571V16.826H18.5571ZM17.8071 17.576H18.0518V16.076H17.8071V17.576ZM22.2215 17.5758C23.8876 17.5397 25.1791 16.1341 25.1499 14.4718L23.6501 14.4982C23.6655 15.3704 22.9939 16.0587 22.189 16.0762L22.2215 17.5758ZM25.1389 14.3565L24.63 11.4305L23.1521 11.6875L23.6611 14.6135L25.1389 14.3565ZM17.8031 7.627H21.2849V6.127H17.8031V7.627ZM21.2897 7.62698C21.6768 7.62448 22.0522 7.7847 22.327 8.07731L23.4204 7.05042C22.8641 6.4581 22.0909 6.12177 21.28 6.12702L21.2897 7.62698ZM22.327 8.07731C22.6025 8.37065 22.7519 8.7712 22.7342 9.18603L24.2328 9.24997C24.2675 8.43728 23.976 7.642 23.4204 7.05042L22.327 8.07731ZM22.7446 9.34663L23.1522 11.6876L24.6299 11.4304L24.2224 9.08937L22.7446 9.34663ZM17.0531 6.877V11.559H18.5531V6.877H17.0531ZM18.5531 6.877V6.077H17.0531V6.877H18.5531ZM18.5531 6.0818C18.5562 5.60485 18.3745 5.14259 18.0422 4.79768L16.9619 5.83829C17.0188 5.8974 17.0537 5.98123 17.0532 6.0722L18.5531 6.0818ZM18.0422 4.79768C17.7094 4.45212 17.2522 4.25277 16.77 4.25001L16.7615 5.74999C16.8331 5.7504 16.9056 5.77984 16.9619 5.83829L18.0422 4.79768ZM16.7657 4.25H7.42037V5.75H16.7657V4.25ZM7.41679 4.25001C6.93498 4.25231 6.4778 4.45098 6.14467 4.79587L7.22355 5.83799C7.27989 5.77967 7.3524 5.75033 7.42396 5.74999L7.41679 4.25001ZM6.14467 4.79587C5.81216 5.1401 5.62983 5.60177 5.63201 6.07843L7.13199 6.07158C7.13158 5.98066 7.16659 5.89696 7.22355 5.83799L6.14467 4.79587ZM5.632 6.075V15.75H7.132V6.075H5.632ZM5.63201 15.7466C5.62983 16.2232 5.81216 16.6849 6.14467 17.0291L7.22355 15.987C7.16659 15.928 7.13158 15.8443 7.13199 15.7534L5.63201 15.7466ZM6.14467 17.0291C6.4778 17.374 6.93498 17.5727 7.41679 17.575L7.42396 16.075C7.3524 16.0747 7.27988 16.0453 7.22355 15.987L6.14467 17.0291ZM7.42037 17.575H8.1526V16.075H7.42037V17.575ZM17.8051 12.308H23.893V10.808H17.8051V12.308ZM1 7.75H4.05175V6.25H1V7.75ZM1.975 10.75H3.925V9.25H1.975V10.75ZM2.56975 13.75H3.925V12.25H2.56975V13.75Z" fill="currentColor"/>
  </svg>`;

export const loadBoxes = () =>
  `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="32px" height="32px" viewBox="0 0 24 24" data-name="Layer 1"><path d="M22,16H19.82A3,3,0,0,0,20,15V10a3,3,0,0,0-3-3H11a3,3,0,0,0-3,3v5a3,3,0,0,0,.18,1H7a1,1,0,0,1-1-1V5A3,3,0,0,0,3,2H2A1,1,0,0,0,2,4H3A1,1,0,0,1,4,5V15a3,3,0,0,0,2.22,2.88,3,3,0,1,0,5.6.12h3.36a3,3,0,1,0,5.64,0H22a1,1,0,0,0,0-2ZM9,20a1,1,0,1,1,1-1A1,1,0,0,1,9,20Zm2-4a1,1,0,0,1-1-1V10a1,1,0,0,1,1-1h6a1,1,0,0,1,1,1v5a1,1,0,0,1-1,1Zm7,4a1,1,0,1,1,1-1A1,1,0,0,1,18,20Z"/></svg>`;

export const buildingIcon = () =>
  `<svg xmlns="http://www.w3.org/2000/svg" class="icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
     <rect x="3" y="7" width="18" height="14" rx="2" />
     <line x1="3" y1="11" x2="21" y2="11" />
     <line x1="7" y1="7" x2="7" y2="21" />
     <line x1="12" y1="7" x2="12" y2="21" />
     <line x1="17" y1="7" x2="17" y2="21" />
  </svg>`;

export const toolboxIcon = () =>
  `<svg xmlns="http://www.w3.org/2000/svg" class="icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
     <rect x="2" y="7" width="20" height="12" rx="2" />
     <line x1="8" y1="7" x2="8" y2="19" />
     <path d="M2 11h20" />
     <rect x="10" y="2" width="4" height="4" />
  </svg>`;

export const cleanUpIcon = () =>
  `<svg xmlns="http://www.w3.org/2000/svg" class="icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
     <rect x="3" y="4" width="18" height="16" rx="2" />
     <line x1="3" y1="8" x2="21" y2="8" />
     <line x1="7" y1="12" x2="17" y2="12" stroke-dasharray="2 2" />
     <line x1="7" y1="16" x2="17" y2="16" />
  </svg>`;

export const alertIcon = () =>
  `<svg xmlns="http://www.w3.org/2000/svg" class="icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
     <polygon points="12 2 2 22 22 22" />
     <line x1="12" y1="8" x2="12" y2="14" />
     <circle cx="12" cy="18" r="1" />
  </svg>`;

export const documentIcon = () =>
  `<svg xmlns="http://www.w3.org/2000/svg" class="icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
     <path d="M6 2h8l6 6v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
     <polyline points="14 2 14 8 20 8" />
     <line x1="8" y1="13" x2="16" y2="13" />
     <line x1="8" y1="17" x2="16" y2="17" />
  </svg>`;

export const planIcon = () =>
  `<svg xmlns="http://www.w3.org/2000/svg" class="icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
     <path d="M3 19h18" />
     <path d="M3 5h12" />
     <path d="M3 9h18" />
     <polyline points="7 9 9 5 11 9" />
     <line x1="9" y1="5" x2="9" y2="19" />
  </svg>`;

export const safetyHelmetIcon = () =>
  `<svg xmlns="http://www.w3.org/2000/svg" class="icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
     <path d="M4 12a8 8 0 0 1 16 0v5H4v-5z" />
     <path d="M2 12h20" />
     <path d="M8 12v-3a4 4 0 0 1 8 0v3" />
  </svg>`;

export const checklistIcon = () =>
  `<svg xmlns="http://www.w3.org/2000/svg" class="icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
     <rect x="3" y="4" width="18" height="16" rx="2" />
     <line x1="7" y1="10" x2="17" y2="10" />
     <line x1="7" y1="14" x2="17" y2="14" />
     <polyline points="5 10 6 12 8 8" />
     <polyline points="5 14 6 16 8 12" />
  </svg>`;

export const projectIcon = () =>
  `<svg xmlns="http://www.w3.org/2000/svg" class="icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
     <rect x="4" y="4" width="16" height="16" rx="2" />
     <line x1="4" y1="8" x2="20" y2="8" />
     <line x1="8" y1="4" x2="8" y2="20" />
     <polyline points="12 16 16 12 12 8" />
  </svg>`;

export const ResidentialMovingEfforts: any = {
  title: `How We Make Moving`,
  span: " Effortless",
  description: `Our proven 4-step process ensures every move is executed flawlessly, on time, and within budget.`,
  data: [
    {
      number: "01",
      title: "Get Your Free Quote",
      description:
        "Contact us online or by phone for a quick, no-obligation quote tailored to your moving needs.",
      icon: sanitizeSvg(HouseIcon()),
      bgColor: "bg-blue-50",
      textColor: "text-blue",
    },
    {
      number: "02",
      title: "Schedule Your Move",
      description:
        "Choose the date and time that works best for you. We’ll coordinate everything to fit your schedule.",
      icon: sanitizeSvg(CalendarIcon()),
      bgColor: "bg-green-50",
      textColor: "text-green",
    },
    {
      number: "03",
      title: "We Do the Heavy Lifting",
      description:
        "Our professional movers arrive on time, equipped and ready. From packing to loading, we handle your belongings with care.",
      icon: sanitizeSvg(PackageIcon()),
      bgColor: "bg-yellow-50",
      textColor: "text-brand-yellow",
    },
    {
      number: "04",
      title: "Enjoy a Stress-Free Move",
      description:
        "We deliver and set up your items in your new home or office, so you can relax and settle in.",
      icon: sanitizeSvg(MapPinIcon()),
      bgColor: "bg-purple-50",
      textColor: "text-purple",
    },
  ],
};

export const residentialServiceHeroSection: any = {
  title: "Residential",
  highlightedTitle: "Moving Service.",
  subtitle: "Moving Made Magical",
  description: `Moving into a new home is a big step and at Gold Star Movers, we make sure the process is smooth, stress-free, and efficient. 
  Our residential moving services are designed to fit your needs, whether you’re moving from a small apartment, a condo, 
  or a large family house.`,
  imageUrl: `/images/top-section-old.webp`,
  buttonText: "Request Now",
  showTag: true,
  tagText: "Trusted by 1,000+ Businesses",
};

export const commercialServiceHeroSection: any = {
  title: "Your Business.",
  highlightedTitle: "Always Moving.",
  subtitle: "Never Missing a Beat",
  description:
    "Relocating your business doesn’t have to mean downtime or stress. At Gold Star Movers, we specialize in professional commercial moving services designed to keep your operations running smoothly. Whether you’re moving a small office, a retail store, or an entire corporate facility, our team ensures a fast, efficient, and organized transition.",
  imageUrl: `/images/services/commercial-service-new.webp`,
  buttonText: "Request Now",
  showTag: true,
  tagText: "Trusted by 1,000+ Businesses",
};

export const junkRemovalServiceHeroSection: any = {
  title: "Your Space",
  highlightedTitle: "Our Mission.",
  subtitle: "Clean out and disposal services",
  description:
    "Clutter taking over your home, office, or job site? At Gold Star Movers, we provide fast, reliable, and affordable junk removal services. Whether it’s old furniture, appliances, renovation debris, or general household clutter, our team handles the heavy lifting so you don’t have to.",
  imageUrl: `/images/junk-removal-banner.webp`,
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
      number: "01",
      title: "Get Your Free Quote",
      description:
        "Contact us online or by phone for a quick, no-obligation quote tailored to your moving needs.",
      icon: sanitizeSvg(HouseIcon()),
      bgColor: "bg-blue-50",
      textColor: "text-blue",
    },
    {
      number: "02",
      title: "Schedule Your Move",
      description:
        "Choose the date and time that works best for you. We’ll coordinate everything to fit your schedule.",
      icon: sanitizeSvg(CalendarIcon()),
      bgColor: "bg-green-50",
      textColor: "text-green",
    },
    {
      number: "03",
      title: "We Do the Heavy Lifting",
      description:
        "Our professional movers arrive on time, equipped and ready. From packing to loading, we handle your belongings with care.",
      icon: sanitizeSvg(PackageIcon()),
      bgColor: "bg-yellow-50",
      textColor: "text-brand-yellow",
    },
    {
      number: "04",
      title: "Enjoy a Stress-Free Move",
      description:
        "We deliver and set up your items in your new home or office, so you can relax and settle in.",
      icon: sanitizeSvg(MapPinIcon()),
      bgColor: "bg-purple-50",
      textColor: "text-purple",
    },
  ],
};

export const residentialServices: any = [
  {
    title: "Loading / Unloading Service",
    desc: "Professional Loading & Unloading Service",
    icon: sanitizeSvg(PackageIcon()),
  },
  {
    title: "Furniture Assembly",
    desc: "Complete disassembly and reassembly service",
    icon: sanitizeSvg(truckIcon()),
  },
  {
    title: "Specialty Items",
    desc: "Piano, Safe, and Hot-tubs handling",
    icon: sanitizeSvg(guardIcon()),
  },
  {
    title: "Flexible Timing",
    desc: "Same-day and next-day options",
    icon: sanitizeSvg(clockIcon()),
  },
  {
    title: "Packing",
    desc: "Professional packing with premium materials",
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
    title: "Free On-Site Consultation",
    desc: "We assess your office or business space, understand your needs, and create a custom moving plan tailored to your operations.",
    icon: sanitizeSvg(bagIcon()),
  },
  {
    title: "Detailed Moving Plan & Quote",
    desc: "You receive a transparent quote and timeline, including packing, transport, and setup, ensuring minimal disruption to your business.",
    icon: sanitizeSvg(usersIcons()),
  },
  {
    title: "Professional Packing & Labeling",
    desc: "Our team securely packs and labels equipment, furniture, and documents to guarantee safe transport and easy unpacking.",
    icon: sanitizeSvg(guardIcon()),
  },
  {
    title: "Efficient Moving Day Execution",
    desc: "Our movers arrive on time, fully equipped to handle office furniture, electronics, and sensitive materials with precision.",
    icon: sanitizeSvg(clockIcon()),
  },
  {
    title: "Secure Handling",
    desc: "Your assets are moved using specialized equipment designed for commercial moves.",
    icon: sanitizeSvg(serverIcon()),
  },
  {
    title: "Unpacking & Setup",
    desc: "We position furniture, reconnect workstations, and ensure your office is ready for business—so you can resume operations immediately.",
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
  title: `How We Make`,
  span: " Junk Removal",
  extraSpan: "Simple",
  description: `Our proven process ensures every move is executed flawlessly, on time, and within budget.`,
  data: [
    {
      title: "Easy Booking",
      description:
        "Schedule your junk removal online or by phone at a time that suits you.",
      icon: sanitizeSvg(CalendarIcon()),
      bgColor: "bg-blue-50",
      textColor: "text-blue",
    },
    {
      title: "Upfront Pricing",
      description:
        "We provide a clear, no-obligation estimate with no hidden fees.",
      icon: sanitizeSvg(usersIcons()),
      bgColor: "bg-purple-50",
      textColor: "text-purple",
    },
    {
      title: "Full-Service Removal",
      description:
        "We lift, load, and remove all unwanted items—no work required from you.",
      icon: sanitizeSvg(removeIcon()),
      bgColor: "bg-red-50",
      textColor: "text-red",
    },
    {
      title: "Eco-Friendly Disposal",
      description:
        "Items are sorted for donation, recycling, or proper disposal to reduce landfill waste.",
      icon: sanitizeSvg(recycleIcon()),
      bgColor: "bg-green-50",
      textColor: "text-green",
    },
  ],
};

export const crossCountryServiceHeroSection: any = {
  title: "Your Journey",
  highlightedTitle: "Our Mission.",
  subtitle: "Affordable cross country moving made easy.",
  description:
    "Whether you’re moving across Canada or relocating to the United States, our team is here to make the journey smooth and stress-free. We specialize in long-distance and cross-border moving, handling every step with care — from professional packing and secure loading to customs preparation and on-time delivery.",
  imageUrl: `/images/cross-country-service-cards.webp`,
  buttonText: "Request Now",
  showTag: true,
  tagText: "Trusted by 1,000+ Businesses",
};

export const crossCountryServicesPerfectMove: any = [
  {
    title: "Personalized Consultation",
    desc: "We start by understanding your moving needs, timeline, and destination.",
    icon: sanitizeSvg(realTimeTrackIcon()),
  },
  {
    title: "Custom Moving Plan",
    desc: "Our team designs a clear strategy for packing, labor, and coordination.",
    icon: sanitizeSvg(guardIcon()),
  },
  {
    title: "Expert Packing & Protection",
    desc: "Every item is carefully wrapped, packed, and prepared for the long journey.",
    icon: sanitizeSvg(usersIcons()),
  },
  {
    title: "Professional Loading",
    desc: "Our movers skillfully load your belongings into your chosen container or rental truck, maximizing space and safety.",
    icon: sanitizeSvg(clockIcon()),
  },
  {
    title: "Unloading & Placement",
    desc: "At your new home, we unload and set everything exactly where you need it.",
    icon: sanitizeSvg(MapPinIcon()),
  },
  {
    title: "Final Check & Ongoing Support",
    desc: "We review the move with you to ensure satisfaction and provide follow-up support if needed.",
    icon: sanitizeSvg(truckIcon()),
  },
];

export const crossCountryMovingEfforts: any = {
  title: `Why Businesses Choose`,
  span: " GoldStarMovers",
  description: `Our proven process ensures every move is executed flawlessly, on time, and within budget.`,
  data: [
    {
      title: "Tailored Moving Strategy",
      description:
        "Every business is unique. We create a customized relocation plan that minimizes downtime and keeps your operations running smoothly.",
      icon: sanitizeSvg(distanceIcon()),
      bgColor: "bg-blue-50",
      textColor: "text-blue",
    },
    {
      title: "Professional Packing & Handling",
      description:
        "From office furniture and equipment to sensitive files, our team ensures everything is securely packed and protected.",
      icon: sanitizeSvg(usersIcons()),
      bgColor: "bg-purple-50",
      textColor: "text-purple",
    },
    {
      title: "Efficient Execution",
      description:
        "Skilled movers handle the heavy lifting, loading, and unloading with precision and speed — saving your team time and effort.",
      icon: sanitizeSvg(guardIcon()),
      bgColor: "bg-red-50",
      textColor: "text-red",
    },
    {
      title: "Seamless Setup & Support",
      description:
        "We place everything exactly where it belongs, review the move with you, and provide ongoing support to ensure a smooth transition.",
      icon: sanitizeSvg(MapPinIcon()),
      bgColor: "bg-green-50",
      textColor: "text-green",
    },
  ],
};

export const aboutUsSteps: any = {
  title: `Our Moving`,
  span: " Process",
  description: `Moving made simple with a four-step process designed for ease and reliability.`,
  data: [
    {
      number: "01",
      title: "Booking",
      description:
        "Easily book trusted packers and movers online for hassle-free relocation services.",
      icon: sanitizeSvg(CalendarIcon()),
      bgColor: "bg-blue-50",
      textColor: "text-blue",
    },
    {
      number: "02",
      title: "Packing",
      description:
        "Professional packing using high-quality materials to protect your belongings during the move.",
      icon: sanitizeSvg(PackageIcon()),
      bgColor: "bg-green-50",
      textColor: "text-green",
    },
    {
      number: "03",
      title: "Safe Loading",
      description:
        "Expert handling and secure loading to ensure zero damage during transportation.",
      icon: sanitizeSvg(loadBoxes()),
      bgColor: "bg-yellow-50",
      textColor: "text-primary",
    },
    {
      number: "04",
      title: "Safe Unloading",
      description:
        "Timely and safe delivery of your goods to the destination, guaranteed by verified movers.",
      icon: sanitizeSvg(fastDeliveryIcon()),
      bgColor: "bg-purple-50",
      textColor: "text-purple",
    },
  ],
};

export const longDistanceSectionOne: any = {
  title: "Long-Distance Moves.",
  highlightedTitle: "Handled with Care.",
  subtitle: "Nationwide Relocation Experts",
  description:
    "Moving to a new city or province is a big step — and we’re here to make it simple. Our long-distance moving services cover all of Ontario and Quebec, ensuring your belongings are packed, loaded, and delivered with care and precision.",
  imageUrl: `/images/long-distance-service-card.webp`,
  buttonText: "Get a Free Quote",
  showTag: true,
  tagText: "Serving 1,000+ Long-Distance Moves Nationwide",
};

export const longDistanceSectionTwo: any = [
  {
    title: "Initial Consultation & Estimate",
    desc: "We start with a detailed discussion of your move and provide a clear, upfront quote tailored to your needs.",
    icon: sanitizeSvg(distanceIcon()),
  },
  {
    title: "Customized Moving Plan",
    desc: "A step-by-step plan is designed to cover packing, loading, and delivery — ensuring nothing is overlooked.",
    icon: sanitizeSvg(realTimeTrackIcon()),
  },
  {
    title: "Professional Packing & Protection",
    desc: "Our team carefully wraps, packs, and secures your belongings, including fragile or oversized items, for long travel.",
    icon: sanitizeSvg(guardIcon()),
  },
  {
    title: "Skilled Loading",
    desc: "Movers maximize space and safety by loading your items into the container or the truck with precision.",
    icon: sanitizeSvg(MapPinIcon()),
  },
  {
    title: "Delivery & Unloading",
    desc: "At your destination, we unload everything efficiently and place items exactly where you need them.",
    icon: sanitizeSvg(truckIcon()),
  },
  {
    title: "Final Walkthrough & Support",
    desc: "We check everything with you, ensure your satisfaction, and remain available for any follow-up assistance.",
    icon: sanitizeSvg(clockIcon()),
  },
];

export const longDistanceSectionThree: any = {
  title: `Why Businesses Choose`,
  span: " GoldStarMovers",
  description: `Our proven process ensures every move is executed flawlessly, on time, and within budget.`,
  data: [
    {
      title: "Strategic Planning",
      description:
        "We design a detailed moving plan that minimizes downtime and ensures your business continues to run smoothly.",
      icon: sanitizeSvg(distanceIcon()),
      bgColor: "bg-blue-50",
      textColor: "text-blue",
    },
    {
      title: "Expert Packing & Handling",
      description:
        "Office furniture, electronics, and sensitive equipment are carefully packed and protected for long-distance travel.",
      icon: sanitizeSvg(usersIcons()),
      bgColor: "bg-purple-50",
      textColor: "text-purple",
    },
    {
      title: "Efficient Execution",
      description:
        "Our experienced movers handle every detail of loading and unloading with speed, precision, and professionalism.",
      icon: sanitizeSvg(guardIcon()),
      bgColor: "bg-red-50",
      textColor: "text-red",
    },
    {
      title: "Seamless Setup & Ongoing Support",
      description:
        "We place everything exactly where it’s needed, review the move with you, and provide post-move assistance for a stress-free transition.",
      icon: sanitizeSvg(MapPinIcon()),
      bgColor: "bg-green-50",
      textColor: "text-green",
    },
  ],
};

export const demolitionSectionOne: any = {
  title: "Professional",
  highlightedTitle: "Demolition Services.",
  subtitle: "Residential & Commercial Demolition Across the Greater Toronto Area",
  description:
    "At Gold Star Movers, we provide safe, efficient, and professional demolition services for residential, commercial, and industrial projects. Whether you need a complete teardown or selective interior demolition, our experienced crew has the tools and expertise to get the job done right.",
  imageUrl: `/images/demolition-service.webp`,
  buttonText: "Request a Free Demolition Quote",
  showTag: true,
  tagText: "Proudly Serving 500+ Projects Across Canadian Provinces",
};

export const demolitionSectionTwo: any = [
  {
    title: "Free Site Assessment",
    desc: "We inspect the property and discuss your demolition requirements in detail.",
    icon: sanitizeSvg(buildingIcon()),
  },
  {
    title: "Clear Estimate & Plan",
    desc: "You receive a transparent quote and step-by-step demolition plan with timeline.",
    icon: sanitizeSvg(toolboxIcon()),
  },
  {
    title: "Professional Preparation",
    desc: "Our crew prepares the site for demolition, ensuring safety and efficiency from the start.",
    icon: sanitizeSvg(guardIcon()),
  },
  {
    title: "Expert Demolition",
    desc: "Using the right tools and techniques, our team carries out the demolition with precision.",
    icon: sanitizeSvg(cleanUpIcon()),
  },
  {
    title: "Debris Removal & Recycling",
    desc: "All debris is sorted, hauled away, and recycled or disposed of responsibly.",
    icon: sanitizeSvg(documentIcon()),
  },
  {
    title: "Final Site Clean-Up",
    desc: "We leave the site clean, safe, and ready for the next stage of your project.",
    icon: sanitizeSvg(alertIcon()),
  },
];

export const demolitionSectionThree: any = {
  title: `Why Canadians Trust`,
  span: " GoldStar Movers",
  description: `From planning to debris removal, we offer a streamlined demolition experience with industry-leading safety, scheduling, and support.`,
  data: [
    {
      title: "Project Planning & Assessment",
      description:
        "We start with a detailed site evaluation, including utility mapping and demolition scope planning.",
      icon: sanitizeSvg(planIcon()),
      bgColor: "bg-yellow-50",
      textColor: "text-yellow",
    },
    {
      title: "Certified Safety Standards",
      description:
        "Our crews follow CSA and provincial safety protocols—equipped and trained for every job site.",
      icon: sanitizeSvg(safetyHelmetIcon()),
      bgColor: "bg-red-50",
      textColor: "text-red",
    },
    {
      title: "Full Legal Compliance",
      description:
        "We navigate Canadian demolition regulations, permits, and environmental laws so you don’t have to.",
      icon: sanitizeSvg(checklistIcon()),
      bgColor: "bg-blue-50",
      textColor: "text-blue",
    },
    {
      title: "End-to-End Project Management",
      description:
        "We manage every detail—from initial consultation to site cleanup—ensuring your demolition stays on time and on budget.",
      icon: sanitizeSvg(projectIcon()),
      bgColor: "bg-green-50",
      textColor: "text-green",
    },
  ],
};

export const locationService: any = {
  title: "Our Moving Services in Mississauga",
  subtitle: "Professional packing and moving solutions for Peel Region",
  services: [
    {
      title: "Residential Moving",
      description:
        "Effortless relocation for homes and apartments with professional care and attention to detail.",
      image: `/images/residential-moving-service-card.webp`,
      icon: Home,
    },
    {
      title: "Commercial Moving",
      description:
        "Seamless office and business relocations with minimal downtime and maximum efficiency.",
      image: `/images/commercial-moving-service.jpeg`,
      icon: Building2,
    },
    {
      title: "Cross-Country Moving",
      description:
        "Nationwide moving services from coast to coast across Canada with secure transport",
      image: `/images/cross-country-service-card.jpeg`,
      icon: Package,
    },
    {
      title: "Long-Distance Moving",
      description:
        "Specialized long-distance moving services with secure transport, careful handling, and timely delivery across provinces.",
      image: `/images/long-distance-service-card.webp`,
      icon: Truck,
    },
    {
      title: "Junk Removal",
      description:
        "Eco-friendly disposal and decluttering services for residential and commercial spaces.",
      image: `/images/junk-removal-banner.webp`,
      icon: Trash,
    },
    {
      title: "Demolition",
      description:
        "From small interior jobs to large-scale projects – we demolish with precision.",
      image: `/images/demolition-service.webp`,
      icon: Wrench,
    },
  ],
};
