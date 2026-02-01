import Info from "../info";
import { useEffect, useRef, useState } from "react";
import * as am4core from "@amcharts/amcharts4/core"
import * as am4maps from "@amcharts/amcharts4/maps"
import { regionData, type RegionData } from "../../data";
import am4geodata_azerbaijanHigh from "@amcharts/amcharts4-geodata/azerbaijanHigh";

export default function AzerbaijanMap() {
  const [regiondata, setRegionData] = useState<RegionData | null>(null)
  const charDivRef = useRef<HTMLDivElement>(null)
  const chartInstanceRef = useRef<am4core.Container | null>(null)

  useEffect(() => {
    if (!charDivRef.current) return;

    const map = am4core.create(charDivRef.current, am4maps.MapChart);
    chartInstanceRef.current = map

    map.geodata = am4geodata_azerbaijanHigh
    map.projection = new am4maps.projections.Mercator()

    const polygonSeries = new am4maps.MapPolygonSeries();
    polygonSeries.useGeodata = true;
    map.series.push(polygonSeries)
    polygonSeries.data = regionData

    const polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.fill = am4core.color("#4285F4");

    polygonTemplate.events.on("hit", function (e) {
      e.target.series.chart.zoomToMapObject(e.target)
      const data = e.target.dataItem.dataContext as RegionData
      setRegionData(data)
    })

    const button = map.chartContainer.createChild(am4core.Button);
    button.padding(5, 5, 5, 5);
    button.margin(5, 5, 5, 5)
    button.align = "right"
    button.events.on("hit", function () {
      map.goHome()
    })
    button.icon = new am4core.Sprite()
    button.icon.path = "M22.719 12A10.719 10.719 0 0 1 1.28 12h.838a9.916 9.916 0 1 0 1.373-5H8v1H2V2h1v4.2A10.71 10.71 0 0 1 22.719 12z"

    map.zoomControl = new am4maps.ZoomControl()

    const hoverstate = polygonTemplate.states.create("hover");
    hoverstate.properties.fill = am4core.color("#FF0000");

    return (() => {
      map.dispose()
    })
  }, [])

  return (
    <>
      <div ref={charDivRef} id="chartdiv" style={{ width: "100%", height: "50dvh" }}></div>
      <div className="container px-4">
        <div id="info">
          <Info region={regiondata} />
        </div>
      </div>
    </>

  )
}
