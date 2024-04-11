import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        try {
          const res = await axios.get("https://api.mudoapi.tech/menus");
          console.log(res.data);
          setProducts(res.data.data.Data)
        } catch (error) {
          console.log(error);
          return error.response.data;
        }
      }
      return <ProductContext.Provider value={{ products }}>{children}</ProductContext.Provider>;

}

