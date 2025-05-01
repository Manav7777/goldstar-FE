import { title } from "process";

export const goldStarMenus = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  {
    id: 3,
    name: "Services",
    url: "/services",
    subMenu: [
      { id: 4, name: "Residential", url: "/residential" },
      { id: 5, name: "Commercial", url: "/commercial" },
      { id: 6, name: "Cross-Country", url: "/cross-country" },
      { id: 7, name: "Junk Removal", url: "/junk-removal" },
    ],
  },
  { id: 8, name: "Gallery", url: "/gallery" },
  { id: 9, name: "Testimonials", url: "/testimonials" },
  {
    id: 10,
    name: "Locations We Serve",
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
  { id: 6, menu: "Residential Service", url: "/residential-service" },
  { id: 7, menu: "Commercial Service", url: "/commercial-service" },
  { id: 8, menu: "Cross Country Service", url: "/cross-country-service" },
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
