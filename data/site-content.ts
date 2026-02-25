export type NavigationItem = {
  label: string;
  href: string;
  dropdown?: NavigationDropdownItem[];
};

export type NavigationDropdownItem = {
  label: string;
  href: string;
};

export type ServiceItem = {
  id: string;
  label: string;
  icon: "home" | "utensils" | "activity" | "info";
};

export type TravelCard = {
  id: string;
  title: string;
  subtitle: string;
  gradient: string;
  href?: string;
};

export type AccommodationItem = {
  id: string;
  name: string;
  kind: string;
  address: string;
  phone: string;
  imageSrc?: string;
  imageAlt?: string;
  gradientClass: string;
};

export type GastronomyItem = {
  id: string;
  name: string;
  kind: string;
  address: string;
  phone: string;
  imageSrc?: string;
  imageAlt?: string;
  gradientClass: string;
};

export type ActivityItem = {
  id: string;
  title: string;
  imageSrc?: string;
  imageAlt?: string;
  gradientClass: string;
};

export type GalleryItem = {
  id: string;
  label: string;
  sizeClass: string;
  gradientClass: string;
  imageSrc?: string;
  imageAlt?: string;
};

export type EventItem = {
  id: string;
  title: string;
  detail: string;
  description: string;
};

export const navigationItems: NavigationItem[] = [
  {
    label: "Villa del Dique",
    href: "/historia",
    dropdown: [
      { label: "Historia", href: "/historia" },
      { label: "¿Cómo llegar?", href: "/como-llegas" },
      { label: "Galería", href: "/galeria" },
    ],
  },
  {
    label: "Planificá tu viaje",
    href: "/#planifica",
    dropdown: [
      { label: "Alojamientos", href: "/alojamientos" },
      { label: "Gastronomía", href: "/gastronomia" },
      { label: "Actividades", href: "/actividades" },
      { label: "Mapa de servicios", href: "/mapa-de-servicios" },
    ],
  },
  {
    label: "Eventos",
    href: "#eventos",
    dropdown: [
      { label: "Culturales", href: "/eventos/culturales" },
      { label: "Náuticos", href: "/eventos/nauticos" },
    ],
  },
  {
    label: "Contacto",
    href: "/contacto",
  },
];

export const serviceItems: ServiceItem[] = [
  { id: "alojamientos", label: "Alojamientos", icon: "home" },
  { id: "gastronomia", label: "Gastronomía", icon: "utensils" },
  { id: "actividades", label: "Actividades", icon: "activity" },
  { id: "servicios", label: "Servicios", icon: "info" },
];

export const travelCards: TravelCard[] = [
  {
    id: "alojamiento",
    title: "Alojamiento",
    subtitle: "Opciones para descansar cerca del lago.",
    gradient: "from-slate-300 via-slate-200 to-slate-100",
    href: "/alojamientos",
  },
  {
    id: "cabana",
    title: "Gastronomía",
    subtitle: "Restaurantes y bares para disfrutar sabores locales.",
    gradient: "from-slate-400 via-slate-300 to-slate-200",
    href: "/gastronomia",
  },
  {
    id: "acuaticos",
    title: "Actividades",
    subtitle: "Senderos, náuticas y propuestas recomendadas.",
    gradient: "from-slate-300 via-slate-200 to-slate-100",
    href: "/actividades",
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: "foto-01",
    label: "Foto 01",
    sizeClass: "row-span-2",
    gradientClass: "from-[#7bbce0] via-[#9fd0ea] to-[#c6e5f4]",
  },
  {
    id: "foto-02",
    label: "Foto 02",
    sizeClass: "row-span-2",
    gradientClass: "from-[#4d87b1] via-[#6ea6ce] to-[#a9cde5]",
  },
  {
    id: "foto-03",
    label: "Foto 03",
    sizeClass: "row-span-2",
    gradientClass: "from-[#77acd0] via-[#9bc2de] to-[#c9dfef]",
  },
  {
    id: "foto-04",
    label: "Foto 04",
    sizeClass: "row-span-3",
    gradientClass: "from-[#8cb6d8] via-[#bfd9ec] to-[#dcebf6]",
  },
  {
    id: "foto-05",
    label: "Foto 05",
    sizeClass: "row-span-2",
    gradientClass: "from-[#87bde3] via-[#9ed2ea] to-[#d2ebf6]",
  },
  {
    id: "foto-06",
    label: "Foto 06",
    sizeClass: "row-span-2",
    gradientClass: "from-[#d7b684] via-[#edd5ae] to-[#f5e8cd]",
  },
  {
    id: "foto-07",
    label: "Foto 07",
    sizeClass: "row-span-1",
    gradientClass: "from-[#f4b45b] via-[#f7ca74] to-[#ffe2a3]",
  },
  {
    id: "foto-08",
    label: "Foto 08",
    sizeClass: "row-span-1",
    gradientClass: "from-[#9faec5] via-[#bcc8d8] to-[#d8e0ea]",
  },
  {
    id: "foto-09",
    label: "Foto 09",
    sizeClass: "row-span-1",
    gradientClass: "from-[#8eb2ce] via-[#acc6dc] to-[#d5e3ef]",
  },
  {
    id: "foto-10",
    label: "Foto 10",
    sizeClass: "row-span-2",
    gradientClass: "from-[#7aa9c8] via-[#9bc5de] to-[#c6e1ef]",
  },
  {
    id: "foto-11",
    label: "Foto 11",
    sizeClass: "row-span-1",
    gradientClass: "from-[#8cb8d5] via-[#a7cde4] to-[#d0e6f3]",
  },
  {
    id: "foto-12",
    label: "Foto 12",
    sizeClass: "row-span-2",
    gradientClass: "from-[#5f96bc] via-[#84b8d8] to-[#b7d9ec]",
  },
];

export const accommodationItems: AccommodationItem[] = [
  {
    id: "las-pircas",
    name: "Las Pircas",
    kind: "Cabañas",
    address: "Av. de los Pescadores 800",
    phone: "0358 487-4033",
    gradientClass: "from-[#9bb8c3] via-[#bcd1da] to-[#dce9ee]",
  },
  {
    id: "foxes",
    name: "Foxes",
    kind: "Cabañas",
    address: "Av. de los Navegantes 500",
    phone: "03546 43-0333",
    gradientClass: "from-[#8eaac2] via-[#aec6d8] to-[#d4e4ef]",
  },
  {
    id: "amerian",
    name: "Amerian",
    kind: "Hotel",
    address: "Av. de los Navegantes 663",
    phone: "03546 50-6285",
    gradientClass: "from-[#9aa8bf] via-[#b9c8da] to-[#d6e2ef]",
  },
];

export const gastronomyItems: GastronomyItem[] = [
  {
    id: "tomassino",
    name: "Tomassino y Pancrasia",
    kind: "Pizzería",
    address: "Av. de los Pescadores 302",
    phone: "03546 40-5413",
    gradientClass: "from-[#9aa9bb] via-[#b9c8d7] to-[#d6e1ea]",
  },
  {
    id: "iowa",
    name: "Iowa",
    kind: "Parrilla y Restaurante",
    address: "Av. San Martín 202",
    phone: "0351 208-2818",
    gradientClass: "from-[#93a4ae] via-[#b8cad5] to-[#d9e4ea]",
  },
  {
    id: "roda",
    name: "Rodá",
    kind: "Restaurante - Tortas y tartas",
    address: "Av. Illia 187",
    phone: "03546 15-40-6684",
    gradientClass: "from-[#c4bcab] via-[#ddd4c3] to-[#ede6d9]",
  },
];

export const activityItems: ActivityItem[] = [
  {
    id: "senderos",
    title: "SENDEROS",
    gradientClass: "from-[#8797a7] via-[#a4b4c4] to-[#c3d0de]",
  },
  {
    id: "nauticas",
    title: "NÁUTICAS",
    gradientClass: "from-[#8cb4d0] via-[#9ec2db] to-[#c4d9ea]",
  },
  {
    id: "recomendadas",
    title: "RECOMENDADAS",
    gradientClass: "from-[#8ca0be] via-[#aab9d1] to-[#c8d3e5]",
  },
];

export const culturalEvents: EventItem[] = [
  {
    id: "pascuas-serranas",
    title: "Pascuas Serranas 2025",
    detail: "19/04 - Plaza San Martín - 11:00 a 18:00 hs",
    description:
      "Tradición, sabor y cultura. Degustación de pejerrey, música en vivo, actividades para toda la familia.",
  },
  {
    id: "viernes-peatonales",
    title: "Viernes Peatonales",
    detail: "Todos los viernes - Calle San Martín - 21:00 hs",
    description:
      "Durante el verano la calle principal se convierte en peatonal todos los viernes. Experiencia única.",
  },
  {
    id: "festival-jineteada",
    title: "Festival de Jineteada y Folclore",
    detail: "08/02 - Predio Los Eucaliptos - 12:00 hs",
    description: "Una de las fiestas más tradicionales de la región.",
  },
];

export const nauticEvents: EventItem[] = [
  {
    id: "oceanman",
    title: "Oceanman",
    detail: "7 y 8 de marzo",
    description:
      "Competencia internacional de natación en aguas abiertas con distancias para diferentes niveles, que atrae a nadadores de todo el país y del extranjero.",
  },
  {
    id: "remada-nocturna",
    title: "Remada Nocturna",
    detail: "18 y 25 de enero",
    description:
      "Se recorre el lago en kayak al anochecer, con actividades paralelas como shows, gastronomía y sorteos.",
  },
  {
    id: "expo-nautica",
    title: "Expo Náutica",
    detail: "4 y 5 de diciembre",
    description:
      "Encuentro náutico que reúne exposición de embarcaciones, stands de productos y servicios, y actividades acuáticas.",
  },
];

export const heroText = {
  bold: "Descubrí su huella,",
  soft: "dejá la tuya",
};
