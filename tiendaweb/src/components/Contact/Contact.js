import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contacto">
      <h2>Contáctanos</h2>
      <div className="map-container">
        <MapContainer center={[51.505, -0.09]} zoom={100} scrollWheelZoom={true} style={{ height: '80%', width: '30%' }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              Sucursal de Linniers <br /> La primera
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      <div className="contact-info">
        <div className="info">
          <p>Correo Electrónico: ejemplo@dominio.com</p>
          <p>Dirección: 123 Calle Principal, Ciudad, País</p>
          <p>Número de Teléfono: +1234567890</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;