import { createContext, useState, useEffect } from "react";
export const homeContext = createContext();
import ListProduc from "../assets/ProductsData.json";
import swal from 'sweetalert';

export const HomeProvaider =({children})=>{

    const [productos, setProductos] = useState([]);
    const [carrito, setCarrito] = useState([]);

    useEffect(() => {
      setProductos(ListProduc)
      
    }, []);
    

    const addCart =(nombre, img, precio)=>{
        setCarrito([...carrito, {nombre, img, precio}]);
        swal(`${nombre.toUpperCase()}`,`Producto. ${nombre} añadido con éxito`)
        console.log(carrito)
    }

    const contextValues={
        productos,
        carrito,
        addCart
    }

    return(
        <homeContext.Provider value={contextValues}>
            {children}
        </homeContext.Provider>
    )
}