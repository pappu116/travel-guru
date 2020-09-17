import React from "react";
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  withScriptjs,
} from "react-google-maps";
function Map() {
  return (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
      {/* {props.isMarkerShown && (
        <Marker position={{ lat: -34.397, lng: 150.644 }} />
      )} */}
    </GoogleMap>
  );
}
const WrappedMap = withScriptjs(withGoogleMap(Map));
const Mapp = () => {
  return (
    <div>
      <WrappedMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `1000px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
};

export default Mapp;
