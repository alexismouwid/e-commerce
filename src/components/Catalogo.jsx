import React from 'react';
import './Catalogo.css';

const Catalogo = ({ toggleVegetales, toggleFrutas, refProductos, refFrutas, refVegetales}) => {
  return (
    <div ref={refProductos} className="catalogs-container">
    
      <p className="section-subtitle">Descubre nuestras categorías</p>
      
      <div className="cards-grid">
        {/* Tarjeta de Frutas */}
        <div className="product-card fruit-card">
          <div className="card-content">
            <h3>Frutas Frescas</h3>
            <p>Del campo a tu mesa</p>
            <button onClick={toggleFrutas} className="product-button">
              Ver Frutas <span>→</span>
            </button>
          </div>
        </div>

        {/* Tarjeta de Verduras */}
        <div className="product-card vegetable-card">
          <div className="card-content">
            <h3>Verduras Orgánicas</h3>
            <p>Nutrición 100% natural</p>
            <button onClick={toggleVegetales} className="product-button">
              Ver Verduras <span>→</span>
            </button>
          </div>
        </div>

        {/* Tarjeta de Lácteos */}
        <div className="product-card dairy-card">
          <div className="card-content">
            <h3>Lácteos y Huevos</h3>
            <p>Frescura garantizada</p>
            <button className="product-button">
              Ver Lácteos y Huevos<span>→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalogo;
