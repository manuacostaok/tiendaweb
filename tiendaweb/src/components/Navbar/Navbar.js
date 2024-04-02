import React, { useState } from 'react';
import Modal from 'react-modal';
import './Navbar.css'; // Estilos CSS para el Navbar
import Cart from '../Cart/Cart'; // Importa el componente Cart

// Establece la posición del modal en el centro de la pantalla
Modal.setAppElement('#root');

const Navbar = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showCartSidebar, setShowCartSidebar] = useState(false); // Nuevo estado para mostrar la sidebar del carrito

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

  // Función para agregar un producto al carrito
  const addProductToCart = (product) => {
    // Aquí puedes agregar la lógica para agregar el producto al carrito
    console.log('Producto agregado al carrito:', product);
  };

  // Función para mostrar/ocultar la sidebar del carrito
  const toggleCartSidebar = () => {
    setShowCartSidebar(!showCartSidebar);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">Mi Tienda</div>
        <div className="nav-links">
          <button>
            <i className="fas fa-home"></i> Home {/* Botón para ir a la página de inicio */}
          </button>
          <button onClick={toggleCategories}>
            <i className="fas fa-list"></i> Categorías
          </button>
          <button onClick={openLoginModal}>
            <i className="fas fa-sign-in-alt"></i> Login
          </button>
          <button onClick={openRegisterModal}>
            <i className="fas fa-user-plus"></i> Registro
          </button>
          <button onClick={toggleCartSidebar}> {/* Mostrar/ocultar la sidebar del carrito al hacer clic en el botón */}
            <i className="fas fa-shopping-cart"></i> Carrito
          </button>
          {/* Agrega el componente Cart y pasa la función addProductToCart como prop */}
          <Cart addProductToCart={addProductToCart} show={showCartSidebar} /> {/* Pasar el estado de showCartSidebar al componente Cart */}
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