import React from "react";
import './ListaPedidos.css';

const ListaPedidos = ({ pedidos, onClose }) => {
  return (
    <div className="lista-pedidos-modal">
      <div className="lista-pedidos-contenido">
        <button className="cerrar-modal" onClick={onClose}>
          &times;
        </button>
        <h2>Mis Pedidos</h2>
        {pedidos.length > 0 ? (
          pedidos.map((pedido) => (
            <div key={pedido._id} className="pedido">
              <h3>Pedido #${pedido._id}</h3>
              <p><strong>Fecha:</strong> {new Date(pedido.createdAt).toLocaleDateString()}</p>
              <p><strong>Total:</strong> ${pedido.total}</p>
              <p><strong>Dirección:</strong> {pedido.address}</p>
              <p><strong>Teléfono:</strong> {pedido.phone}</p>
              <h4>Productos:</h4>
              <ul>
                {pedido.products.map((producto) => (
                  <li key={producto._id}>
                    {producto.name} - Cantidad: {producto.quantity} - Precio: ${producto.price}
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p>No tienes pedidos registrados.</p>
        )}
      </div>
    </div>
  );
};

export default ListaPedidos;
