import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Icon } from 'leaflet';
import { useEffect } from 'react';

const customIcon = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/854/854878.png",
  iconSize: [30, 30],
});

function MapUpdater({ latitude, longitude }) {
  const map = useMap();

  useEffect(() => {
    map.setView([latitude, longitude]);
  }, [latitude, longitude, map]);

  return null;
}

function MapComponent({ latitude, longitude, city }) {
  return (
    <div className="mt-8 h-[400px] w-full max-w-4xl mx-auto">
      <MapContainer
        center={[latitude, longitude]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
      >
        <MapUpdater latitude={latitude} longitude={longitude} />

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />

        <Marker position={[latitude, longitude]} icon={customIcon}>
          <Popup>{city ? `Location: ${city}` : "IP Location"}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default MapComponent;