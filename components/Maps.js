import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { useMemo } from "react";

const containerStyle = {
  width: "100%",
  height: "400px",
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCLYZw2YPDqMior7kAW5oJC0grJPZGqkkE",
  });
  const center = useMemo(
    () => ({
      lat: 51.5613,
      lng: -0.11267,
    }),
    []
  );
  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      //   onLoad={onLoad}
      //   onUnmount={onUnmount}
    >
      <Marker position={center} />
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
