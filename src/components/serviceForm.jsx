"use client";
import { useState } from "react";

export default function ServiceForm() {
  const [services, setServices] = useState({
    date: "",
    name: "",
    company: "",
    car: "",
    detail: "",
    kilometer: "",
    discount: "",
    price: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "km") {
      const newKm = e.target.value;
      const newPrice = Math.floor(newKm * 288.9);
      setServices((prevServices) => ({
        ...prevServices,
        kilometer: newKm,
        price: prevServices.discount
          ? Math.floor(newPrice - newPrice * (prevServices.discount / 100))
          : newPrice,
      }));
    } else if (e.target.name === "discount" && e.target.value !== "") {
      const newDiscount = parseFloat(e.target.value);
      const newPrice = Math.floor(services.kilometer * 288.9);
      setServices((prevServices) => ({
        ...prevServices,
        discount: newDiscount,
        price: Math.floor(newPrice - newPrice * (newDiscount / 100)),
      }));
    } else {
      setServices({ ...services, [e.target.name]: e.target.value });
    }
    console.log(services);
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

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex ml-10 justify-center sm:justify-around">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 lg:p-10 max-w-screen-sm">
        <div className="mb-2">
          <label htmlFor="date" className="text-black text-xs font-semibold">
            Fecha
          </label>
          <input
            name="date"
            id="date"
            className="border border-gray-400 rounded-lg p-2 w-full text-sm"
            type="date"
            onChange={handleChange}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="name" className="text-black text-xs font-semibold">
            Nombre
          </label>
          <input
            name="name"
            id="name"
            className="border border-gray-400 rounded-lg p-2 w-full text-sm"
            type="text"
            placeholder="Nombre"
            onChange={handleChange}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="company" className="text-black text-xs font-semibold">
            Empresa
          </label>
          <select
            name="company"
            id="company"
            className="border border-gray-400 rounded-lg p-2 w-full text-sm"
            onChange={handleChange}
            value="">
            <option value="" disabled>
              Seleccionar Empresa
            </option>
            {companies.map((company, index) => {
              return (
                <option key={index} value={company}>
                  {" "}
                  {company}{" "}
                </option>
              );
            })}
          </select>
        </div>
        <div className="mb-2">
          <label htmlFor="car" className="text-black text-xs font-semibold">
            Auto
          </label>
          <select
            onChange={handleChange}
            name="car"
            id="car"
            className="border border-gray-400 rounded-lg p-2 w-full text-sm"
            value="">
            <option value="" disabled>
              Seleccionar Auto
            </option>
            {cars.map((car, index) => {
              return (
                <option key={index} value={car}>
                  {" "}
                  {car}{" "}
                </option>
              );
            })}
          </select>
        </div>
        <div className="mb-2">
          <label htmlFor="detail" className="text-black text-xs font-semibold">
            Detalles
          </label>
          <input
            onChange={handleChange}
            name="detail"
            id="detail"
            className="border border-gray-400 rounded-lg p-2 w-full text-sm"
            type="text"
            placeholder="Detalles"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="km" className="text-black text-xs font-semibold">
            Kilómetros
          </label>
          <input
            onChange={handleChange}
            name="km"
            id="km"
            className="border border-gray-400 rounded-lg p-2 w-full text-sm"
            type="number"
            placeholder="Kilómetros"
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="discount"
            className="text-black text-xs font-semibold">
            Descuento (%)
          </label>
          <input
            onChange={handleChange}
            name="discount"
            id="discount"
            className="border border-gray-400 rounded-lg p-2 w-full text-sm"
            type="number"
            placeholder="Descuento %"
          />
        </div>
        <button
          type="submit"
          className="bg-black text-white p-2 rounded-lg w-full text-sm">
          {" "}
          Reservar{" "}
        </button>
        {services.price !== "" ? (
          <div className="mt-2">
            {services.discount ? (
              <p className="text-gray-500 text-xs italic">
                *({services.discount}% de descuento aplicado)
              </p>
            ) : (
              ""
            )}
            <p className="text-black text-sm">
              Precio = ${parseFloat(services.price).toLocaleString()}{" "}
            </p>
          </div>
        ) : (
          ""
        )}
      </form>
    </div>
  );
}
