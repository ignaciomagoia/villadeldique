"use client";

import { useEffect, useRef } from "react";

import { serviceCategories, serviceLocations } from "@/data/service-map";

const categoryMap = new Map(serviceCategories.map((item) => [item.id, item]));

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

export function InteractiveServiceMap() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let disposed = false;
    let mapInstance: import("leaflet").Map | null = null;

    const initMap = async () => {
      const L = await import("leaflet");

      if (disposed || !containerRef.current) {
        return;
      }

      mapInstance = L.map(containerRef.current, {
        zoomControl: true,
        scrollWheelZoom: true,
      }).setView([-32.1769, -64.4568], 13);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(mapInstance);

      const bounds = L.latLngBounds([]);

      serviceLocations.forEach((location) => {
        const category = categoryMap.get(location.categoryId);
        const markerColor = category?.color ?? "#0b6f8f";

        const marker = L.circleMarker(location.coordinates, {
          radius: 8,
          color: "#ffffff",
          weight: 2,
          fillColor: markerColor,
          fillOpacity: 0.95,
        });

        const popupRows = [
          `<strong>${escapeHtml(location.name)}</strong>`,
          category ? escapeHtml(category.label) : "",
          location.detail ? escapeHtml(location.detail) : "",
        ].filter(Boolean);

        marker.bindPopup(popupRows.join("<br/>"));
        marker.addTo(mapInstance!);
        bounds.extend(location.coordinates);
      });

      if (bounds.isValid()) {
        mapInstance.fitBounds(bounds.pad(0.15));
      }
    };

    void initMap();

    return () => {
      disposed = true;
      mapInstance?.remove();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-full w-full rounded-2xl"
      aria-label="Mapa de servicios de Villa del Dique"
    />
  );
}
