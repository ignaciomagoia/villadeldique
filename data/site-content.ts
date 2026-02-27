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
  href: string;
};

export type TravelCard = {
  id: string;
  title: string;
  subtitle: string;
  gradient: string;
  icon: "home" | "utensils" | "activity";
  imageSrc?: string;
  imageAlt?: string;
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
  href?: string;
  gradientClass: string;
};

export type TrailItem = {
  id: string;
  title: string;
  difficulty: string;
  detail: string;
  imageSrc: string;
  imageAlt: string;
};

export type NauticActivityItem = {
  id: string;
  title: string;
  subtitle: string;
  detail: string;
  imageSrc: string;
  imageAlt: string;
};

export type RecommendedExperienceItem = {
  id: string;
  title: string;
  subtitle: string;
  detail: string;
  imageSrc?: string;
  imageAlt?: string;
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
  { id: "alojamientos", label: "Alojamientos", icon: "home", href: "/alojamientos" },
  { id: "gastronomia", label: "Gastronomía", icon: "utensils", href: "/gastronomia" },
  { id: "actividades", label: "Actividades", icon: "activity", href: "/actividades" },
  { id: "servicios", label: "Servicios", icon: "info", href: "/mapa-de-servicios" },
];

export const travelCards: TravelCard[] = [
  {
    id: "alojamiento",
    title: "Alojamiento",
    subtitle: "Opciones para descansar cerca del lago.",
    gradient: "from-slate-300 via-slate-200 to-slate-100",
    icon: "home",
    imageSrc: "/alojamientolaspircas.webp",
    imageAlt: "Ingreso de Las Pircas Cabanas",
    href: "/alojamientos",
  },
  {
    id: "cabana",
    title: "Gastronomía",
    subtitle: "Restaurantes y bares para disfrutar sabores locales.",
    gradient: "from-slate-400 via-slate-300 to-slate-200",
    icon: "utensils",
    imageSrc: "/tomassino-y-pancracia.jpg",
    imageAlt: "Frente de Tomassino y Pancrasia",
    href: "/gastronomia",
  },
  {
    id: "acuaticos",
    title: "Actividades",
    subtitle: "Senderos, náuticas y propuestas recomendadas.",
    gradient: "from-slate-300 via-slate-200 to-slate-100",
    icon: "activity",
    imageSrc: "/actividadesnautica.jpg",
    imageAlt: "Esqui nautico en el lago",
    href: "/actividades",
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: "galeria-01",
    label: "Galería 01",
    sizeClass: "lg:col-span-2",
    gradientClass: "from-[#7bbce0] via-[#9fd0ea] to-[#c6e5f4]",
    imageSrc: "/galeria01.jpg",
    imageAlt: "Vista panorámica de Villa del Dique",
  },
  {
    id: "galeria-02",
    label: "Galería 02",
    sizeClass: "lg:col-span-2",
    gradientClass: "from-[#4d87b1] via-[#6ea6ce] to-[#a9cde5]",
    imageSrc: "/galeria02.jpg",
    imageAlt: "Paisaje del lago en Villa del Dique",
  },
  {
    id: "galeria-03",
    label: "Galería 03",
    sizeClass: "lg:col-span-2",
    gradientClass: "from-[#77acd0] via-[#9bc2de] to-[#c9dfef]",
    imageSrc: "/galeria03.jpg",
    imageAlt: "Orilla del lago y vegetación",
  },
  {
    id: "galeria-04",
    label: "Galería 04",
    sizeClass: "lg:col-span-2",
    gradientClass: "from-[#8cb6d8] via-[#bfd9ec] to-[#dcebf6]",
    imageSrc: "/galeria4.webp",
    imageAlt: "Vista elevada de la costa",
  },
  {
    id: "galeria-05",
    label: "Galería 05",
    sizeClass: "lg:col-span-2",
    gradientClass: "from-[#87bde3] via-[#9ed2ea] to-[#d2ebf6]",
    imageSrc: "/galeria06.JPG",
    imageAlt: "Atardecer sobre el agua",
  },
  {
    id: "galeria-06",
    label: "Galería 06",
    sizeClass: "lg:col-span-2",
    gradientClass: "from-[#d7b684] via-[#edd5ae] to-[#f5e8cd]",
    imageSrc: "/galeria7.jpg",
    imageAlt: "Caminos y entorno natural",
  },
  {
    id: "galeria-07",
    label: "Galería 07",
    sizeClass: "lg:col-span-2",
    gradientClass: "from-[#f4b45b] via-[#f7ca74] to-[#ffe2a3]",
    imageSrc: "/galeria08.JPG",
    imageAlt: "Vista del lago desde la costa",
  },
  {
    id: "galeria-08",
    label: "Galería 08",
    sizeClass: "lg:col-span-2",
    gradientClass: "from-[#9faec5] via-[#bcc8d8] to-[#d8e0ea]",
    imageSrc: "/galeria10.jpg",
    imageAlt: "Embalse y paisaje serrano",
  },
  {
    id: "galeria-09",
    label: "Galería 09",
    sizeClass: "lg:col-span-1",
    gradientClass: "from-[#8eb2ce] via-[#acc6dc] to-[#d5e3ef]",
    imageSrc: "/galeria11.jpeg",
    imageAlt: "Panorámica del lago al atardecer",
  },
  {
    id: "galeria-10",
    label: "Galería 10",
    sizeClass: "lg:col-span-1",
    gradientClass: "from-[#7aa9c8] via-[#9bc5de] to-[#c6e1ef]",
    imageSrc: "/galriaquefalta.jpg",
    imageAlt: "Ciclistas en actividad al aire libre",
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
    imageSrc: "/alojamientolaspircas.webp",
    imageAlt: "Ingreso a Las Pircas Cabañas",
  },
  {
    id: "foxes",
    name: "Foxes",
    kind: "Cabañas",
    address: "Av. de los Navegantes 500",
    phone: "03546 43-0333",
    gradientClass: "from-[#8eaac2] via-[#aec6d8] to-[#d4e4ef]",
    imageSrc: "/alojamientofoxes.webp",
    imageAlt: "Complejo Foxes Cabañas",
  },
  {
    id: "amerian",
    name: "Amerian",
    kind: "Hotel",
    address: "Av. de los Navegantes 663",
    phone: "03546 50-6285",
    gradientClass: "from-[#9aa8bf] via-[#b9c8da] to-[#d6e2ef]",
    imageSrc: "/alojamientoamerian.webp",
    imageAlt: "Hotel Amerian en Villa del Dique",
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
    imageSrc: "/tomassino-y-pancracia.jpg",
    imageAlt: "Tomassino y Pancrasia en Villa del Dique",
  },
  {
    id: "iowa",
    name: "Iowa",
    kind: "Parrilla y Restaurante",
    address: "Av. San Martín 202",
    phone: "0351 208-2818",
    gradientClass: "from-[#93a4ae] via-[#b8cad5] to-[#d9e4ea]",
    imageSrc: "/gastronomiaiowa.jpg",
    imageAlt: "Restaurante Iowa",
  },
  {
    id: "roda",
    name: "Rodá",
    kind: "Restaurante - Tortas y tartas",
    address: "Av. Illia 187",
    phone: "03546 15-40-6684",
    gradientClass: "from-[#c4bcab] via-[#ddd4c3] to-[#ede6d9]",
    imageSrc: "/gastronomiaroda.webp",
    imageAlt: "Rodá pastelería artesanal",
  },
];

export const activityItems: ActivityItem[] = [
  {
    id: "senderos",
    title: "SENDEROS",
    gradientClass: "from-[#8797a7] via-[#a4b4c4] to-[#c3d0de]",
    imageSrc: "/sendero3.jpeg",
    imageAlt: "Ruta de sendero en Villa del Dique",
    href: "/senderos",
  },
  {
    id: "nauticas",
    title: "NÁUTICAS",
    gradientClass: "from-[#8cb4d0] via-[#9ec2db] to-[#c4d9ea]",
    imageSrc: "/actividadesnautica.jpg",
    imageAlt: "Actividad náutica en el lago",
    href: "/actividades-nauticas",
  },
  {
    id: "recomendadas",
    title: "RECOMENDADAS",
    gradientClass: "from-[#8ca0be] via-[#aab9d1] to-[#c8d3e5]",
    imageSrc: "/actividadesrecomendadas.jpg",
    imageAlt: "Actividad recomendada en Villa del Dique",
    href: "/experiencias-recomendadas",
  },
];

export const trailItems: TrailItem[] = [
  {
    id: "sendero-3",
    title: "Subida al Cerro de las Antenas",
    difficulty: "Dificultad: Moderada",
    detail: "Distancia: 10 km - Tiempo: 2:30 hs",
    imageSrc: "/sendero3.jpeg",
    imageAlt: "Mapa del sendero Subida al Cerro de las Antenas",
  },
  {
    id: "sendero-2",
    title: "Hoteles abandonados de la Marina",
    difficulty: "Dificultad: Fácil",
    detail: "Distancia: 5 km - Tiempo: 1:15 hs",
    imageSrc: "/sendero2.jpeg",
    imageAlt: "Mapa del sendero Hoteles abandonados de la Marina",
  },
  {
    id: "sendero-1",
    title: "Playa Los Alemanes desde VdD",
    difficulty: "Dificultad: Moderada",
    detail: "Distancia: 29 km - Tiempo: 1:30 hs",
    imageSrc: "/sendero1.jpeg",
    imageAlt: "Mapa del sendero Playa Los Alemanes desde Villa del Dique",
  },
];

export const nauticActivityItems: NauticActivityItem[] = [
  {
    id: "esqui-acuatico",
    title: "Esquí acuático",
    subtitle: "Clases",
    detail: "Principiantes, medios y avanzados.",
    imageSrc: "/actividadesnautica.jpg",
    imageAlt: "Esqui acuatico en el lago de Villa del Dique",
  },
  {
    id: "paddle-kayak",
    title: "Paddleboard y kayak",
    subtitle: "Alquiler",
    detail: "Para todas las edades",
    imageSrc: "/kayak.jpg",
    imageAlt: "Actividad de paddleboard y kayak",
  },
  {
    id: "kite-windsurf",
    title: "Kiteboard y Windsurf",
    subtitle: "Clases",
    detail: "Principiantes, medios y avanzados.",
    imageSrc: "/skate.jpg",
    imageAlt: "Kiteboard y windsurf en el lago",
  },
];

export const recommendedExperienceItems: RecommendedExperienceItem[] = [
  {
    id: "paseo-lancha",
    title: "Paseo en lancha",
    subtitle: "Desde embalse",
    detail: "Para toda la familia",
    imageSrc: "/actividadesrecomendadas.jpg",
    imageAlt: "Paseo en lancha en el embalse",
  },
  {
    id: "parque-acuatico",
    title: "Primer parque acuatico en Cordoba",
    subtitle: "Desde embalse",
    detail: "Para toda la familia",
    imageSrc: "/parqueacuatico.jpg",
    imageAlt: "Parque acuatico en el lago",
  },
  {
    id: "padel",
    title: "Canchas de Padel",
    subtitle: "Alquiler y clases",
    detail: "Para toda la familia",
    imageSrc: "/padel.jpeg",
    imageAlt: "Canchas de padel",
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
