import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '800px',
  height: '800px',
};

const center = {
  lat: 37.7749,
  lng: -122.4194,
};

function Map() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyAk_P9MJUm-QduMzUybjsMwdHBafBiTfKE">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10} />
    </LoadScript>
  );
}

export default Map;
