import { Link } from "react-router";

export default function About() {
  return (
    <section className="h-dvh mb-80 md:mb-50 lg:mb-0">
      <div className="container px-4 mx-auto">
        <article>
          <h3 className="text-md md:text-lg lg:text-xl pb-5">
            Azərbaycan xəritəsi
          </h3>
        </article>
        <div>
          <article className="about-content">
            <p className="text-sm md:text-md lg:text-lg">
              Bu saytda Azərbaycan xəritəsini{" "}
              <Link
                className="text-sky-500 underline"
                to={"https://www.amcharts.com/docs/v4/"}
              >
                amCharts4
              </Link>{" "}
              paketi ilə yazmışam. Bu veb saytda Azərbaycan regionaları haqqında{" "}
              {"(sahəsi, yaranma tarixi, kənd sayı, kənd şəhər mərkəzi)"}{" "}
              məlumat verilib.
            </p>
            <p className="text-sm md:text-md lg:text-lg py-5">
              <span className="text-red-500">Diqqət:</span> Bəzi bölgələr
              haqqında məlumat düzgün verilməyə bilər və ya heç yazılmaya bilər.
              Əgər əlinizdə hazır məlumatlar varsa{" "}
              <Link
                className="text-sky-500 underline"
                to={"https://github.com/NadirYusifov/azerbaijan-map/issues"}
              >
                GitHub Issues
              </Link>{" "}
              hissəsində yaza bilərsiz.
            </p>
          </article>
          <article className="about-referance">
            <p className="text-sm md:text-md lg:text-lg font-bold">
              Referanslar:
            </p>
            <ul className="text-sm md:text-md lg:text-lg">
              <li>
                Rayon məlumatları:{" "}
                <Link
                  className="text-sky-500 underline wrap-break-word"
                  to={"https://republic.preslib.az/az_a1.html"}
                >
                  https://files.preslib.az/projects/azerbaijan/gl2.pdf#page138
                </Link>
              </li>
              <li>
                Gədəbəy (Başkənd):{" "}
                <Link
                  className="text-sky-500 underline wrap-break-word"
                  to={
                    "https://az.wikipedia.org/wiki/Ba%C5%9Fk%C9%99nd_(G%C9%99d%C9%99b%C9%99y)"
                  }
                >
                  https://az.wikipedia.org/wiki/Ba%C5%9Fk%C9%99nd_(G%C9%99d%C9%99b%C9%99y)
                </Link>
              </li>
              <li>
                Naxçıvan (şəhər):{" "}
                <Link
                  className="text-sky-500 underline wrap-break-word"
                  to={
                    "https://az.wikipedia.org/wiki/Nax%C3%A7%C4%B1van_(%C5%9F%C9%99h%C9%99r)"
                  }
                >
                  https://az.wikipedia.org/wiki/Nax%C3%A7%C4%B1van_(%C5%9F%C9%99h%C9%99r)
                </Link>
              </li>
              <li>
                Rayon məlumatları:{" "}
                <Link
                  className="text-sky-500 underline wrap-break-word"
                  to={
                    "https://files.preslib.az/projects/azerbaijan/gl2.pdf#page138"
                  }
                >
                  https://files.preslib.az/projects/azerbaijan/gl2.pdf
                </Link>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
