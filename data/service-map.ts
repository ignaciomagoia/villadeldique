export type ServiceCategoryId =
  | "alojamientos"
  | "gastronomia"
  | "actividades";

export type ServiceCategory = {
  id: ServiceCategoryId;
  label: string;
  color: string;
};

export type ServiceLocation = {
  id: string;
  name: string;
  categoryId: ServiceCategoryId;
  coordinates: [number, number];
  detail?: string;
};

export const serviceCategories: ServiceCategory[] = [
  { id: "alojamientos", label: "Alojamientos", color: "#4e79a7" },
  { id: "gastronomia", label: "Gastronomia", color: "#8c9440" },
  { id: "actividades", label: "Actividades", color: "#8bb8de" },
];

export const serviceLocations: ServiceLocation[] = [
  {
    id: "las-pircas",
    name: "Las Pircas Cabanas",
    categoryId: "alojamientos",
    coordinates: [-32.1758, -64.4575],
    detail: "Av. de los Pescadores 800",
  },
  {
    id: "foxes",
    name: "Foxes Cabanas",
    categoryId: "alojamientos",
    coordinates: [-32.1719, -64.4624],
    detail: "Av. de los Navegantes 500",
  },
  {
    id: "amerian",
    name: "Hotel Amerian",
    categoryId: "alojamientos",
    coordinates: [-32.1794, -64.4493],
    detail: "Av. de los Navegantes 663",
  },
  {
    id: "tomassino",
    name: "Tomassino y Pancrasia",
    categoryId: "gastronomia",
    coordinates: [-32.1742, -64.4596],
    detail: "Av. de los Pescadores 302",
  },
  {
    id: "iowa",
    name: "Iowa",
    categoryId: "gastronomia",
    coordinates: [-32.1769, -64.4555],
    detail: "Av. San Martin 202",
  },
  {
    id: "roda",
    name: "Roda",
    categoryId: "gastronomia",
    coordinates: [-32.181, -64.4515],
    detail: "Av. Illia 187",
  },
  {
    id: "senderos",
    name: "Senderos",
    categoryId: "actividades",
    coordinates: [-32.1705, -64.4482],
    detail: "Recorridos recomendados",
  },
  {
    id: "nauticas",
    name: "Actividades nauticas",
    categoryId: "actividades",
    coordinates: [-32.1844, -64.465],
    detail: "Zona del lago",
  },
  {
    id: "recomendadas",
    name: "Experiencias recomendadas",
    categoryId: "actividades",
    coordinates: [-32.1736, -64.4429],
    detail: "Plan familiar",
  },
];
