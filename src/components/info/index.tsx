import type { RegionData } from "../../data"

interface DataProps {
    region: RegionData | null
}

export default function Info({ region }: DataProps) {
    return (
        <div className="pt-5">
            {region ?
                <article className="space-y-1">

                    <h1 className="font-bold text-3xl">{region?.name || "Məlumat yoxdur"}</h1>
                    <p className="map-content"><span>Sahə:</span> {region?.field || "Məlumat yoxdur"}</p>
                    <p className="map-content"><span>Yaranma tarixi:</span> {region?.date || "Məlumat yoxdur"}</p>
                    <p className="map-content"><span>Kənd sayı:</span> {region?.regionnum || "Məlumat yoxdur"}</p>
                    <p className="map-content"><span>Kənd şəhər mərkəzi:</span> {region?.regioncentername || "Məlumat yoxdur"}</p>
                </article> : <h1 className="text-3xl">Məlumat almaq üçün xəritə üzərindən bir rayon və yaxud bir şəhər seçin.</h1>
            }
        </div>
    )
}
