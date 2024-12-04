import { createContext, useState, useEffect } from "react";
export const homeContext = createContext();
import ListProduc from "../assets/ProductsData.json";

export const HomeProvaider =({children})=>{

    const [productos, setProductos] = useState([]);
    const [carrito, setCarrito] = useState([]);

    useEffect(() => {
      setProductos(ListProduc)
      
    }, []);
    

    const addCart =(nombre, img, precio)=>{
        setCarrito([...carrito, {nombre, img, precio}]);
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