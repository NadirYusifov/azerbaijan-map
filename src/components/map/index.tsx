import * as am4core from "@amcharts/amcharts4/core"
import * as am4maps from "@amcharts/amcharts4/maps"
import am4geodata_azerbaijanHigh from "@amcharts/amcharts4-geodata/azerbaijanHigh";
import { regionData, type RegionData } from "../../data";

export default function Map() {
  const map = am4core.create("chartdiv", am4maps.MapChart);
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
    // e.target.series.chart.zoomToMapObject(e.target)
    const data = e.target.dataItem.dataContext as RegionData
    const info = document.getElementById("info")
    if (info) {
      info.innerHTML = "<h3>" + data.name + "</h3>"
      info.innerHTML += "<p>" + "Sahə: " + data.field + " km2" + "</p>"
      info.innerHTML += "<p>" + "Şəhərlərin sayı: " + data.citynum + "</p>"
      info.innerHTML += "<p>" + "Kənd sayı: " + data.regionnum + "</p>"
      info.innerHTML += "<p>" + "Kənd şəhər mərkəzi: " + data.regioncentername + "</p>"
    } else {
      document.body.innerHTML = "<h3>No info element found</h3>"
    }
    // if (info) {
    //   info.innerHTML += "<p>"+ data.field +"</p>"
    // }
    // const contents = info?.innerHTML

    console.log(data)
    // console.log(info)
    // console.log(contents)

    map.zoomControl = new am4maps.ZoomControl()
  })

  // map.zoomControl = new am4maps.ZoomControl()

  const hoverstate = polygonTemplate.states.create("hover");
  hoverstate.properties.fill = am4core.color("#FF0000");

  return (
    <>
      <div id="chartdiv"></div>
      <div className="container px-4">
        <div id="info">
        </div>
      </div>
    </>

  )
}
