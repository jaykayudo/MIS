import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
import { icon } from 'leaflet';
import { marker } from '../../assets';


const markerIcon = icon({
  iconUrl: marker,
    iconSize: [50,50],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
});

const GISMap = () => {
   
      return (
        // Important! Always set the container height explicitly
        <div style={{ maxHeight: '80vh', width: '100%' }}>
          <h2 className='header'>GIS Map</h2>
          <MapContainer center={[9.0820,8.6753]} style={{height: 500, width:"100%"}} zoom={6} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker  icon={markerIcon} position={[6.5244, 3.3792]}>
              
              <Popup>
                Lagos
              </Popup>
            </Marker>
          </MapContainer>
        </div> );
}
 
export default GISMap;


