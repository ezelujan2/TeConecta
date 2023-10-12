"use client";
import { useState } from "react";

export default function Home() {
  const [services, setServices] = useState({
    date: "",
    name: "",
    company: "",
    car: "",
    detail: "",
    km: "",
    discount: "",
    price: "",
  });

  const handleChange = (e) => {
    setServices({ ...services, [e.target.name]: e.target.value });

    if (e.target.name === "km") {
      let value = Math.floor(e.target.value * 288.9);
      if (services.discount === "") {
        setServices({ ...services, price: value });
      } else {
        setServices({ ...services, price: value * (services.discount / 100) });
      }
    } else if (e.target.name === "discount") {
      if (services.km !== "") {
        let value = Math.floor(services.km * 288.9);
        setServices({ ...services, price: value * (services.discount / 100) });
      }
    }
  };

  const cars = ["Fluence Gris", "Fluence Blanco", "Honda", "Toyota", "Otros"];
  const companies = [
    "Sidersa",
    "Conicet",
    "Ebinox",
    "Sython",
    "Stern",
    "Cachi",
    "Otros",
  ];

  return (
    <div className="flex m-auto justify-around mt-10">
      <form className="flex flex-col bg-sky-900 rounded-xl shadow-xl">
        <input
          name="date"
          className="border border-gray-700 rounded-md m-4"
          type="date"
          onChange={handleChange}></input>
        <input
          name="name"
          className="border border-gray-700 rounded-md m-4"
          type="name"
          placeholder="Nombre"
          onChange={handleChange}></input>
        <select
          name="company"
          className="border border-gray-700 rounded-md m-4"
          type="name"
          placeholder="
      Empresa"
          onChange={handleChange}>
          {companies.map((companie, index) => {
            return <option key={index}>{companie}</option>;
          })}
        </select>
        <select
          onChange={handleChange}
          name="car"
          className="border border-gray-700 rounded-md m-4"
          type="name"
          placeholder="Auto">
          {cars.map((car, index) => {
            return <option key={index}> {car} </option>;
          })}
        </select>
        <input
          onChange={handleChange}
          name="detail"
          className="border border-gray-700 rounded-md m-4"
          type="name"
          placeholder="Detalles"></input>
        <input
          onChange={handleChange}
          name="km"
          className="border border-gray-700 rounded-md m-4"
          type="number"
          placeholder="Kilometros"></input>
        <input
          onChange={handleChange}
          name="discount"
          className="border border-gray-700 rounded-md m-4"
          type="number"
          placeholder="Descuento %"></input>

        <button type="submit" className="bg-black p-2 text-white rounded m-4">
          {" "}
          Reservar{" "}
        </button>
        {services.price !== "" ? <p>Precio = ${services.price} </p> : ""}
      </form>
    </div>
  );
}
