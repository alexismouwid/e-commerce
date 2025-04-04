import { useState, useEffect } from "react";
import Logo from "../Logo";
import "./Navbar.css";
import Carro from "../Carro";
import FormularioLogin from "../FormularioLogin";
import FormularioRegistro from "../FormularioRegistro";
import ListaPedidos from "../ListaPedidos";
import axios from "axios";


const Navbar = ({
carroRef,
  carro,
esCarroVisible,
mostrarCarro,
usuarioAutenticado,
cerrarSesion,
verificarSesion,
  vaciarCarro,
  eliminarDelCarro
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [mostrarLogin, setMostrarLogin] = useState(false);
  const [mostrarRegistro, setMostrarRegistro] = useState(false);
  const [pedidos, setPedidos] = useState([]);
  const [mostrarPedidos, setMostrarPedidos] = useState(false);

const obtenerPedidos = async () => {
  const token = localStorage.getItem("token"); // Obtener el token JWT

  try {
    const response = await axios.get("https://backend-ecommerce-taupe.vercel.app/orders/user", {
      headers: {
        Authorization: `Bearer ${token}`, // Enviar el token JWT
      },
    });

    setPedidos(response.data); // Guardar los pedidos en el estado
    setMostrarPedidos(true); // Mostrar la lista de pedidos
  } catch (error) {
    console.error("Error al obtener los pedidos:", error);
    alert("Error al cargar los pedidos. Intenta de nuevo más tarde.");
  }
};

const cerrarListaPedidos = () => {
  setMostrarPedidos(false);
};
  // Función para alternar el menú solo si es móvil
  const toggleMenu = () => {
    if (isMobile) {
      setMenuOpen(!menuOpen);
    }
  };
  const toggleLogin = () => {
    setMostrarLogin((prev) => !prev);
    setMostrarRegistro(false);
  };

  const toggleRegistro = () => {
    setMostrarRegistro((prev) => !prev);
    setMostrarLogin(false);
  }
  // Detectar cambios de tamaño de ventana
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMenuOpen(false); // Cierra el menú si pasa a pantalla grande
      }
    };

    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <Logo/>
          </div>

          {/* Botón Hamburguesa solo si es móvil */}
          {isMobile && (
            <button className="menu-icon" onClick={toggleMenu}>
               ☰
            </button>

          )}

          {/* Enlaces de navegación */}
          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            {usuarioAutenticado ? ( 
 <>           
   <li> <button className='mis-pedidos'onClick={obtenerPedidos}>Mis pedidos</button> </li>
                <li>
                  <button className="cerrar-sesion" onClick={cerrarSesion}>
                    Cerrar Sesión
                  </button>
                </li>
 <li className='carro'>
                  <Carro 
                  carro={carro} 
                  esCarroVisible={esCarroVisible}
                  mostrarCarro={mostrarCarro}
                  vaciarCarro={vaciarCarro} 
                  eliminarDelCarro={eliminarDelCarro}/>
                </li>

                             </>
            ): (  
              <>
                <li className="login"> 
                  <FormularioLogin
                    mostrarLogin={mostrarLogin}
                    toggleLogin={toggleLogin}
                    verificarSesion={verificarSesion}
                  />
                </li>
                <li className="register">
                  <FormularioRegistro
                    mostrarRegistro={mostrarRegistro}
                    toggleRegistro={toggleRegistro}
                  />
                </li>
                <li className='carro'>
                  <Carro 
                  carro={carro} 
                  esCarroVisible={esCarroVisible}
                  mostrarCarro={mostrarCarro}
                  vaciarCarro={vaciarCarro} 
                  eliminarDelCarro={eliminarDelCarro}/>
                </li>
              </>
              
            )}
                     </ul>
        </div>
      </nav>

      {/* Carrito separado */}
      <div className="carro-movil">
        <Carro carro={carro} 
        esCarroVisible={esCarroVisible} 
        mostrarCarro={mostrarCarro}
        vaciarCarro={vaciarCarro} 
        eliminarDelCarro={eliminarDelCarro}/>

      </div>

      {mostrarPedidos && (
<ListaPedidos pedidos={pedidos} onClose={cerrarListaPedidos} />        
      )}
    </>
  );
};

export default Navbar;

