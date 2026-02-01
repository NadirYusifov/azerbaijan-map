import { Link } from "react-router";

export default function About() {
    return (
        <section className="h-dvh">
            <div className="container px-4 mx-auto">
                <article>
                    <h3 className="text-2xl pb-5">Azərbaycan xəritəsi</h3>
                </article>
                <div>
                    <article className="about-content">
                        <p>
                            Bu saytda Azərbaycan xəritəsini <Link className="text-sky-500 underline" to={"https://www.amcharts.com/docs/v4/"}>amCharts4</Link> paketi ilə yazmışam. Bu veb saytda Azərbaycan regionaları haqqında {"(sahəsi, yaranma tarixi, kənd sayı, kənd şəhər mərkəzi)"} məlumat verilib.
                        </p>
                        <p className="py-5">
                            <span className="text-red-500">Diqqət:</span> Bəzi bölgələr haqqında məlumat düzgün verilməyə bilər və ya heç yazılmaya bilər. Əgər əlinizdə hazır məlumatlar varsa <Link className="text-sky-500 underline" to={"https://github.com/NadirYusifov/azerbaijan-map/issues"}>GitHub Issues</Link> hissəsində yaza bilərsiz.
                        </p>
                    </article>
                    <p className="about-referance font-bold">
                        Referanslar:
                    </p>
                    <ul className="">
                        <li>Rayon məlumatları: <Link className="text-sky-500" to={"https://republic.preslib.az/az_a1.html"}>https://republic.preslib.az/az_a1.html</Link></li>
                    </ul>
                </div>
            </div>
        </section >
    )
}
