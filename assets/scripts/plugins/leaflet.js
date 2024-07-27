!(function (t) {
  "use strict";
  t(document).ready(function () {
    !(function () {
      if (t("#map-basic").length) {
        var e = L.map("map-basic").setView([51.505, -0.09], 13);
        L.tileLayer(
          "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
          {
            maxZoom: 18,
            attribution:
              'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            id: "mapbox/streets-v11",
            tileSize: 512,
            zoomOffset: -1,
          }
        ).addTo(e),
          L.circle([51.508, -0.11], 500, {
            color: "#9777fa",
            fillColor: "#9777fa",
            fillOpacity: 0.5,
          })
            .addTo(e)
            .bindPopup("AliThemes Studio.");
        var o = L.popup();
        function n(t) {
          o.setLatLng(t.latlng)
            .setContent("You clicked the map at " + t.latlng.toString())
            .openOn(e);
        }
        e.on("click", n);
      }
    })(),
      (function () {
        if (t("#map-choropleth").length) {
          var e = L.map("map-choropleth").setView([37.8, -96], 4);
          L.tileLayer(
            "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
            {
              maxZoom: 18,
              attribution:
                'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
              id: "mapbox/light-v9",
              tileSize: 512,
              zoomOffset: -1,
            }
          ).addTo(e);
          var o = L.control();
          function i(t) {
            return t > 1e3
              ? "#800026"
              : t > 500
              ? "#BD0026"
              : t > 200
              ? "#E31A1C"
              : t > 100
              ? "#FC4E2A"
              : t > 50
              ? "#FD8D3C"
              : t > 20
              ? "#FEB24C"
              : t > 10
              ? "#FED976"
              : "#FFEDA0";
          }
          (o.onAdd = function (t) {
            return (
              (this._div = L.DomUtil.create("div", "info")),
              this.update(),
              this._div
            );
          }),
            (o.update = function (t) {
              this._div.innerHTML =
                "<h4>US Population Density</h4>" +
                (t
                  ? "<b>" +
                    t.name +
                    "</b><br />" +
                    t.density +
                    " people / mi<sup>2</sup>"
                  : "Hover over a state");
            }),
            o.addTo(e),
            e.attributionControl.addAttribution(
              'Population data &copy; <a href="http://census.gov/">US Census Bureau</a>'
            );
          var n = L.control({ position: "bottomright" });
          (n.onAdd = function (t) {
            for (
              var e,
                o,
                n = L.DomUtil.create("div", "info legend"),
                a = [0, 10, 20, 50, 100, 200, 500, 1e3],
                l = [],
                r = 0;
              r < a.length;
              r++
            )
              (e = a[r]),
                (o = a[r + 1]),
                l.push(
                  '<i style="background:' +
                    i(e + 1) +
                    '"></i> ' +
                    e +
                    (o ? "&ndash;" + o : "+")
                );
            return (n.innerHTML = l.join("<br>")), n;
          }),
            n.addTo(e);
        }
      })(),
      (function () {
        if (t("#map-panes").length) {
          var e = L.map("map-panes");
          e.createPane("labels"),
            (e.getPane("labels").style.zIndex = 650),
            (e.getPane("labels").style.pointerEvents = "none");
          var o =
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attribution">CARTO</a>';
          L.tileLayer(
            "https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png",
            { attribution: o }
          ).addTo(e),
            L.tileLayer(
              "http://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png",
              { attribution: o, pane: "labels" }
            ).addTo(e),
            e.setView({ lat: 47.040182144806664, lng: 9.667968750000002 }, 4);
        }
      })(),
      (function () {
        if (t("#map-multi-marker-colors").length) {
          var e = L.map("map-multi-marker-colors", {
            center: [47.339, 11.602],
            zoom: 3,
          });
          L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
          }).addTo(e);
          var o = L.divIcon({
              html: '<span class="svg-icon svg-icon-danger svg-icon-3x"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="24" width="24" height="0"/><path d="M5,10.5 C5,6 8,3 12.5,3 C17,3 20,6.75 20,10.5 C20,12.8325623 17.8236613,16.03566 13.470984,20.1092932 C12.9154018,20.6292577 12.0585054,20.6508331 11.4774555,20.1594925 C7.15915182,16.5078313 5,13.2880005 5,10.5 Z M12.5,12 C13.8807119,12 15,10.8807119 15,9.5 C15,8.11928813 13.8807119,7 12.5,7 C11.1192881,7 10,8.11928813 10,9.5 C10,10.8807119 11.1192881,12 12.5,12 Z" fill="#7e46f0" fill-rule="nonzero"/></g></svg></span>',
              bgPos: [10, 10],
              iconAnchor: [20, 37],
              popupAnchor: [0, -37],
              className: "leaflet-marker",
            }),
            n = L.divIcon({
              html: '<span class="svg-icon svg-icon-primary svg-icon-3x"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="24" width="24" height="0"/><path d="M5,10.5 C5,6 8,3 12.5,3 C17,3 20,6.75 20,10.5 C20,12.8325623 17.8236613,16.03566 13.470984,20.1092932 C12.9154018,20.6292577 12.0585054,20.6508331 11.4774555,20.1594925 C7.15915182,16.5078313 5,13.2880005 5,10.5 Z M12.5,12 C13.8807119,12 15,10.8807119 15,9.5 C15,8.11928813 13.8807119,7 12.5,7 C11.1192881,7 10,8.11928813 10,9.5 C10,10.8807119 11.1192881,12 12.5,12 Z" fill="#3ed092" fill-rule="nonzero"/></g></svg></span>',
              bgPos: [10, 10],
              iconAnchor: [20, 37],
              popupAnchor: [0, -37],
              className: "leaflet-marker",
            }),
            i = L.divIcon({
              html: '<span class="svg-icon svg-icon-warning svg-icon-3x"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="24" width="24" height="0"/><path d="M5,10.5 C5,6 8,3 12.5,3 C17,3 20,6.75 20,10.5 C20,12.8325623 17.8236613,16.03566 13.470984,20.1092932 C12.9154018,20.6292577 12.0585054,20.6508331 11.4774555,20.1594925 C7.15915182,16.5078313 5,13.2880005 5,10.5 Z M12.5,12 C13.8807119,12 15,10.8807119 15,9.5 C15,8.11928813 13.8807119,7 12.5,7 C11.1192881,7 10,8.11928813 10,9.5 C10,10.8807119 11.1192881,12 12.5,12 Z" fill="#ff3551" fill-rule="nonzero"/></g></svg></span>',
              bgPos: [10, 10],
              iconAnchor: [20, 37],
              popupAnchor: [0, -37],
              className: "leaflet-marker",
            }),
            a = L.divIcon({
              html: '<span class="svg-icon svg-icon-success svg-icon-3x"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="24" width="24" height="0"/><path d="M5,10.5 C5,6 8,3 12.5,3 C17,3 20,6.75 20,10.5 C20,12.8325623 17.8236613,16.03566 13.470984,20.1092932 C12.9154018,20.6292577 12.0585054,20.6508331 11.4774555,20.1594925 C7.15915182,16.5078313 5,13.2880005 5,10.5 Z M12.5,12 C13.8807119,12 15,10.8807119 15,9.5 C15,8.11928813 13.8807119,7 12.5,7 C11.1192881,7 10,8.11928813 10,9.5 C10,10.8807119 11.1192881,12 12.5,12 Z" fill="#5579ff" fill-rule="nonzero"/></g></svg></span>',
              bgPos: [10, 10],
              iconAnchor: [20, 37],
              popupAnchor: [0, -37],
              className: "leaflet-marker",
            }),
            l = L.marker([39.3262345, -4.8380649], { icon: o }).addTo(e),
            r = L.marker([41.804, 13.843], { icon: n }).addTo(e),
            s = L.marker([51.11, 10.371], { icon: i }).addTo(e),
            c = L.marker([46.74, 2.417], { icon: a }).addTo(e);
          l.bindPopup("Spain", { closeButton: !1 }),
            r.bindPopup("Italy", { closeButton: !1 }),
            s.bindPopup("Germany", { closeButton: !1 }),
            c.bindPopup("France", { closeButton: !1 }),
            L.control.scale().addTo(e);
        }
      })(),
      (function () {
        if (t("#map-multi-mark").length) {
          var e = [
              { location: [41.57533, 13.102411], title: "One" },
              { location: [41.57573, 13.002411], title: "Two" },
              { location: [41.807149, 13.162994], title: "Three" },
              { location: [41.507149, 13.172994], title: "Four" },
              { location: [41.847149, 14.132994], title: "Five" },
              { location: [41.21919, 13.062145], title: "Six" },
              { location: [41.34419, 13.242145], title: "Seven" },
              { location: [41.67919, 13.122145], title: "Eight" },
              { location: [41.32919, 13.192145], title: "Nine" },
              { location: [41.37929, 13.122545], title: "Ten" },
              { location: [41.40919, 13.362145], title: "Elevent" },
              { location: [41.794008, 12.583884], title: "Twelve" },
              { location: [41.805008, 12.982884], title: "Thirteen" },
              { location: [41.536175, 13.27359], title: "Fourteen" },
              { location: [41.516175, 13.37359], title: "Fifteen" },
              { location: [41.507175, 13.27369], title: "Sixteen" },
              { location: [41.836175, 13.67359], title: "Seventeen" },
              { location: [41.796175, 13.57059], title: "Eighteen" },
              { location: [41.436175, 13.57359], title: "Nineteen" },
              { location: [41.336175, 13.97359], title: "Tweenty" },
              { location: [41.236175, 13.27359], title: "Tweenty One" },
              { location: [41.546175, 13.47359], title: "Tweenty Two" },
              { location: [41.23929, 13.032145], title: "Tweenty Three" },
            ],
            o = new L.Map("map-multi-mark", {
              zoom: 10,
              center: new L.latLng(e[0].location),
            });
          o.addLayer(
            new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
          ),
            L.control.scale().addTo(o);
          var n = L.divIcon({
            html: '<span class="svg-icon svg-icon-danger svg-icon-3x"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="24" width="24" height="0"/><path d="M5,10.5 C5,6 8,3 12.5,3 C17,3 20,6.75 20,10.5 C20,12.8325623 17.8236613,16.03566 13.470984,20.1092932 C12.9154018,20.6292577 12.0585054,20.6508331 11.4774555,20.1594925 C7.15915182,16.5078313 5,13.2880005 5,10.5 Z M12.5,12 C13.8807119,12 15,10.8807119 15,9.5 C15,8.11928813 13.8807119,7 12.5,7 C11.1192881,7 10,8.11928813 10,9.5 C10,10.8807119 11.1192881,12 12.5,12 Z" fill="#7e46f0" fill-rule="nonzero"/></g></svg></span>',
            bgPos: [10, 10],
            iconAnchor: [20, 37],
            popupAnchor: [0, -37],
            className: "leaflet-marker",
          });
          e.forEach(function (t) {
            L.marker(t.location, { icon: n })
              .addTo(o)
              .bindPopup(t.title, { closeButton: !1 });
          });
        }
      })(),
      (function () {
        if (t("#map-interactive").length) {
          var e = L.map("map-interactive", {
            center: [40.725, -73.985],
            zoom: 11,
          });
          L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution:
              '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors',
          }).addTo(e);
          var o = L.layerGroup().addTo(e),
            n = L.divIcon({
              html: '<span class="svg-icon svg-icon-danger svg-icon-3x"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="24" width="24" height="0"/><path d="M5,10.5 C5,6 8,3 12.5,3 C17,3 20,6.75 20,10.5 C20,12.8325623 17.8236613,16.03566 13.470984,20.1092932 C12.9154018,20.6292577 12.0585054,20.6508331 11.4774555,20.1594925 C7.15915182,16.5078313 5,13.2880005 5,10.5 Z M12.5,12 C13.8807119,12 15,10.8807119 15,9.5 C15,8.11928813 13.8807119,7 12.5,7 C11.1192881,7 10,8.11928813 10,9.5 C10,10.8807119 11.1192881,12 12.5,12 Z" fill="#000000" fill-rule="nonzero"/></g></svg></span>',
              bgPos: [10, 10],
              iconAnchor: [20, 37],
              popupAnchor: [0, -37],
              className: "leaflet-marker",
            });
          e.on("click", function (t) {
            geocodeService
              .reverse()
              .latlng(t.latlng)
              .run(function (t, e) {
                t ||
                  (o.clearLayers(),
                  L.marker(e.latlng, { icon: n })
                    .addTo(o)
                    .bindPopup(e.address.Match_addr, { closeButton: !1 })
                    .openPopup(),
                  alert(
                    `You've clicked on the following address: ${e.address.Match_addr}`
                  ));
              });
          });
        }
      })();
  });
})(jQuery);
//# sourceMappingURL=leaflet.js.map