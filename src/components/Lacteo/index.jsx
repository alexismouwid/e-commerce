import { useState, useEffect } from "react";
import Button from "../Button";

const Lacteo = ({ lacteo, agregarAlCarro }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth <= 600;
      console.log("Tamaño de pantalla:", window.innerWidth);
      console.log("isMobile cambiado a:", newIsMobile);
      setIsMobile(newIsMobile);
    };

    window.addEventListener("resize", handleResize);
    
    // Llamamos a handleResize inmediatamente para asegurar que el estado es correcto desde el inicio
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    lacteo: {
      backgroundColor: "#fff",
      padding: isMobile ? "5px" : "10px",
      margin: isMobile ? "5px" : "10px",
      borderRadius: "10px",
      boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
      width: isMobile ? "120px" : "120px",
      height: isMobile ? "200px" : "250px",
    },
    img: {
       width: "100%",
      height: isMobile ? "100px" : "98px",
      objectFit: isMobile ? "cover" : "cover",
      borderRadius: "5px",
      position: "relative",
      marginBottom: isMobile ? "5px" : "10px",
      bottom: isMobile ? "7px" : "10px",    },
    titulo: {
      fontSize: isMobile ? "12px" : "16px",
    },
    precio: {
      fontSize: isMobile ? "10px" : "14px",
    },
  };

  return (
    <div style={styles.lacteo}>
       <Button onClick={() => agregarAlCarro(lacteo)}>+</Button>
      <img style={styles.img} src={lacteo.img} alt={lacteo.name} />
      <h3 style={styles.titulo}>{lacteo.name}</h3>
      <p style={styles.precio}>${lacteo.price}/u</p>
     
    </div>
  );
};

export default Lacteo;



