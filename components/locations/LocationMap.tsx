"use client";
import { useEffect } from "react";

export default function ServiceAreaMap() {
  useEffect(() => {
    // Only run on the client
    const loadMap = async () => {
      const L = await import("leaflet");

      const map = L.map("map", {
        zoomControl: false,
      }).setView([43.7, -79.4], 8);

      map.scrollWheelZoom.disable();
      map.on("click", () => {
        map.scrollWheelZoom.enable();
      });

      map.on("mouseout", () => {
        map.scrollWheelZoom.disable();
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(map);

      const cities = [
        { name: "Toronto", lat: 43.6532, lng: -79.3832 },
        { name: "Hamilton", lat: 43.2557, lng: -79.8711 },
        { name: "Barrie", lat: 44.3894, lng: -79.6903 },
        { name: "Oshawa", lat: 43.8971, lng: -78.8658 },
      ];

      const goldIcon = L.divIcon({
        className: "custom-gold-marker",
        html: "<div style='width: 16px; height: 16px; background-color: #facc15; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 6px rgba(0,0,0,0.3);'></div>",
        iconSize: [20, 20],
        iconAnchor: [10, 10],
      });

      cities.forEach((city) => {
        // Main gold point marker
        L.marker([city.lat, city.lng], { icon: goldIcon }).addTo(map);

        const cityLabel = L.divIcon({
          className: "city-label",
          html: `<div style="
            font-size: 13px;
            font-weight: 600;
            color: #f59e0b;
            background-color: rgba(255, 255, 255, 0.9);
            padding: 2px 6px;
            border-radius: 4px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
            ">${city.name}</div>`,
          iconSize: [100, 20],
          iconAnchor: [0, 0],
        });

        // Place the label slightly above the marker
        L.marker([city.lat + 0.02, city.lng + 0.02], {
          icon: cityLabel,
          interactive: false,
        }).addTo(map);
      });

      const areaCoords: any = [
        [44.3894, -79.6903],
        [43.8971, -78.8658],
        [43.2557, -79.8711],
        [43.6532, -79.3832],
      ];

      L.polygon(areaCoords, {
        color: "#f59e0b",
        fillColor: "#facc15",
        fillOpacity: 0.25,
        weight: 2,
      }).addTo(map);
    };

    loadMap();

    // Cleanup: we assume map might be globally scoped if needed
    return () => {
      const mapContainer: any = document.getElementById("map");
      if (mapContainer && mapContainer._leaflet_id) {
        mapContainer._leaflet_id = null;
      }
    };
  }, []);

  return (
    <div className="container py-5 text-center bg-white">
      <h2 className="fw-bold display-5">Our Locations in <span className="text-primary">Canada</span></h2>
      <p className="text-secondary mb-4 mx-auto" style={{ maxWidth: "700px" }}>
        Our team proudly provides services across Southern Ontario. Explore the
        highlighted area to see where we deliver excellence.
      </p>
      <div
        id="map"
        className="w-100 border border-warning"
        style={{
          height: "500px",
          borderRadius: "1rem",
        //   boxShadow: "0 .5rem 1.5rem rgba(0,0,0,0.15)",
        }}
      ></div>

      <style jsx global>{`
        .custom-gold-marker {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .city-label {
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}
