import { lazy, Suspense } from "react";
import { Loading } from "../../components/loading";

export default function Home() {
  const AzerbaijanMap = lazy(() => import("../../components/map"));

  return (
    <section className="h-dvh mb-60 md:mb-40 lg:mb-0">
      <Suspense fallback={<Loading />}>
        <AzerbaijanMap />
      </Suspense>
    </section>
  );
}
