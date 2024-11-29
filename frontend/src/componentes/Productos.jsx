import React, { useEffect, useState } from "react";
import apiClient from "../api/axiosConfig";

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await apiClient.get("/productos");
        setProductos(response.data);
      } catch (err) {
        setError("Error al cargar los productos");
      }
    };

    fetchProductos();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Lista de Productos</h1>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {productos.map((producto) => (
          <div
            key={producto.id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold">{producto.nombre}</h2>
            <img className="w-full h-auto object-cover rounded-md mb-4" src={producto.imagenUrl} alt={producto.nombre} />
            <h5 className="text-lg font-semibold">Descripción</h5>
            <p className="text-gray-600">{producto.descripcion}</p>
            <h5 className="text-lg font-semibold">Categoría</h5>
            <p className="text-gray-600">{producto.categoria ? producto.categoria.nombre: 'Sin categoría'}</p>
            <p className="text-gray-700">Precio: ${producto.precio}</p>
            <p className="text-black-700">Stock: {producto.stock}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
