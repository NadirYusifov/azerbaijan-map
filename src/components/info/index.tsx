import type { RegionData } from "../../data";

interface DataProps {
  region: RegionData | null;
}

export const Info = ({ region }: DataProps) => {
  return (
    <div className="pt-5">
      {region ? (
        <article className="space-y-1">
          <h1 className="font-bold text-xl md:text-2xl lg:text-3xl">
            {region?.name || "Məlumat yoxdur və ya tapılmadı"}
          </h1>
          <p className="map-content text-md md:text-lg lg:text-xl">
            <span>Sahə:</span>{" "}
            {region.field || "Məlumat yoxdur və ya tapılmadı"}
          </p>
          <p className="map-content text-md md:text-lg lg:text-xl">
            <span>Yaranma tarixi:</span>{" "}
            {region.date || "Məlumat yoxdur və ya tapılmadı"}
          </p>
          <p className="map-content text-md md:text-lg lg:text-xl">
            <span>Kənd sayı:</span>{" "}
            {region.regionnum || "Məlumat yoxdur və ya tapılmadı"}
          </p>
          <p className="map-content text-md md:text-lg lg:text-xl">
            <span>Kənd şəhər mərkəzi:</span>{" "}
            {region.regioncentername || "Məlumat yoxdur və ya tapılmadı"}
          </p>
        </article>
      ) : (
        <h1 className="text-2xl lg:text-3xl">
          Məlumat almaq üçün xəritə üzərindən bir rayon və yaxud bir şəhər
          seçin.
        </h1>
      )}
    </div>
  );
};
