import React, { useState } from 'react';
import Modal from 'react-modal';
import './Navbar.css'; // Estilos CSS para el Navbar

// Establece la posición del modal en el centro de la pantalla
Modal.setAppElement('#root');

const Navbar = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  const openLoginModal = () => {
    setShowLoginModal(true);
  };

  const closeLoginModal = () => {
    setShowLoginModal(false);
  };

  const openRegisterModal = () => {
    setShowRegisterModal(true);
  };

  const closeRegisterModal = () => {
    setShowRegisterModal(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">Mi Tienda</div>
        <div className="nav-links">
          <button onClick={toggleCategories}>Categorías</button>
          <button onClick={openLoginModal}>Login</button>
          <button onClick={openRegisterModal}>Registro</button>
          <button>Home</button>
          <button>Contacto</button>
          <button>Sucursales</button>
        </div>
        {showCategories && (
          <div className="categories-menu">
            <ul>
              <li>Categoría 1</li>
              <li>Categoría 2</li>
              <li>Categoría 3</li>
              {/* Agrega más categorías según sea necesario */}
            </ul>
          </div>
        )}
        <div className="search-bar">
          <input type="text" placeholder="Buscar productos" />
          <button>Buscar</button>
        </div>
      </div>

      {/* Modal de Login */}
      <Modal isOpen={showLoginModal} onRequestClose={closeLoginModal}>
        {/* Contenido del modal */}
        <h2>Login</h2>
        <button onClick={closeLoginModal}>Cerrar</button>
      </Modal>

      {/* Modal de Registro */}
      <Modal isOpen={showRegisterModal} onRequestClose={closeRegisterModal}>
        {/* Contenido del modal */}
        <h2>Registro</h2>
        <button onClick={closeRegisterModal}>Cerrar</button>
      </Modal>
    </nav>
  );
};

export default Navbar;