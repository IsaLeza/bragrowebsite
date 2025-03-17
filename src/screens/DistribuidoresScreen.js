import React from "react";
import "./Distribuidor.css";
import { Helmet } from "react-helmet-async";

const distribuidores = [
  { nombre: "Ing. Porfirio Moisés Huerta Lobato", municipio: "Tochtepec", estado: "Puebla", telefono: "2492119462" },
  { nombre: "Ing. Jorge Luis Andrade", municipio: "Palmar de Bravo", estado: "Puebla", telefono: "2491380358" },
  { nombre: "Ing. Lorenzo Arellano Pérez", municipio: "San Martin Texmelucan", estado: "Puebla", telefono: "2481793484" },
  { nombre: "Ing. Jaime Eduardo Ordaz López", municipio: "Libres", estado: "Puebla", telefono: "2382763352" },
  { nombre: "Ing. Edgar Hernández Alcaraz", municipio: "Villahermosa", estado: "Tabasco", telefono: "6291065715" },
  { nombre: "Ing. Wilber Castellanos Pérez", municipio: "", estado: "Guerrero", telefono: "7571096535" },
  { nombre: "Ing. Haydee Lilian Aguiarte Rubio", municipio: "", estado: "Chihuahua", telefono: "6275211343" },
  { nombre: "Ing. Annel Marquelis", municipio: "", estado: "Guerrero", telefono: "7421037850" },
  { nombre: "Ing. Elver Yared Pérez", municipio: "", estado: "Morelos", telefono: "2491768711" },
  { nombre: "Ing. Raúl Zaragoza", municipio: "Zaragoza", estado: "Puebla", telefono: "2331049643" },
  { nombre: "Ing. Jhon", municipio: "", estado: "Morelos", telefono: "8443126115" },
  { nombre: "Ing. Salvador Annel", municipio: "Perote", estado: "Veracruz", telefono: "2281035612" },
  { nombre: "Ing. Abraham", municipio: "Libres", estado: "Puebla", telefono: "2761074098" },
  { nombre: "Ing. Uriel Hernández Ramirez", municipio: "", estado: "México", telefono: "2831056421" },
  { nombre: "Ing. Luis Hernandez", municipio: "", estado: "Guerrero", telefono: "2491500135" },
  { nombre: "Ing. Pedro N.", municipio: "", estado: "Jalisco", telefono: "3421178153" },
  { nombre: "Ing. Javier Hernández", municipio: "", estado: "Veracruz", telefono: "9241479994" },
  { nombre: "Ing. Juan Antonio Macías", municipio: "", estado: "Aguascalientes", telefono: "4651016313" },
  { nombre: "Ing. Juan Ramos", municipio: "", estado: "Sonora", telefono: "6625737786" },
  { nombre: "Ing. Susana Yañez", municipio: "Metepec", estado: "Hidalgo", telefono: "7717294751" },
  { nombre: "Ing. Vidal Mariscal", municipio: "Ensenada", estado: "Baja California", telefono: "6461830605" },
  { nombre: "Ing. Silvia Bautista Bautista", municipio: "Amealco de Bonfil", estado: "Querétaro", telefono: "283-113-5045" },
  { nombre: "Ing. Samuel Cruz", municipio: "", estado: "Estado de México", telefono: "2371107550" },
  { nombre: "Ing. Vidal Luna", municipio: "Tapachula", estado: "Chiapas", telefono: "9626225604" },
];

// Ordenar los distribuidores por estado
distribuidores.sort((a, b) => a.estado.localeCompare(b.estado));

// Agrupar los distribuidores por estado
const distribuidoresPorEstado = distribuidores.reduce((acc, distribuidor) => {
  const { estado } = distribuidor;
  if (!acc[estado]) {
    acc[estado] = [];
  }
  acc[estado].push(distribuidor);
  return acc;
}, {});

function DistribuidoresScreenCopy() {
  return (
    <div className="distribuidores-container">
      <Helmet>
        <title>BR Agro - Distribuidores</title>
        <meta
          name="description"
          content="Optimiza tu producción agrícola con los mejores agroquímicos del mercado. BR Agro ofrece fertilizantes, insecticidas y soluciones innovadoras para el campo."
        />
        <meta
          name="keywords"
          content="Agroquímicos, fertilizantes agrícolas, insecticidas, BR Agro, protección de cultivos, distribuidores agroquímicos, soluciones agrícolas, nutrición vegetal, bioestimulantes"
        />
        <meta name="author" content="isaSoft" />
      </Helmet>
      <h1 className="title">Nuestros Distribuidores Autorizados</h1>
      {Object.keys(distribuidoresPorEstado).map((estado, index) => (
        <div key={index} className="estado-section">
          <h2 className="estado-title">{estado}</h2>
          {distribuidoresPorEstado[estado].map((distribuidor, index) => (
            <div key={index} className="distribuidor-item">
              <h3>{distribuidor.nombre}</h3>
              <p>{distribuidor.estado}</p>
              <p style={{ color: "green", fontWeight: "bold" }}>Tel: {distribuidor.telefono}</p>

            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default DistribuidoresScreenCopy;
