import React, { createRef, Component } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

const NewMap = props => {
  const position = [props.info.lng, props.info.lat];
  return (
    <Map center={position} zoom={props.info.zoom}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>{props.info.text}</Popup>
      </Marker>
    </Map>
  );
};

export default NewMap;
