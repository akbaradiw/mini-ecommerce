import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { getMenu } from "../redux/features/menuSlice";
import { ProductContext } from "../Context/ProductProvider";
import {useContext} from "react"

const Test = () => {
  const dispatch = useDispatch();
  const { menus } = useSelector((state) => state.menu);
  const { products } = useContext(ProductContext);

  useEffect(() => {
    dispatch(getMenu());
  }, []);

  return (
    <div>
      <h1>mudo API</h1>
      {menus.map((item) => (
        <div key={item.id}>
          <h1>{item.type}</h1>
          <p>{item.description}</p>
          <div className="flex justify-center">
            <img  className="h-40 mb-6"src={item.imageUrl} alt="Instrument" />
          </div>
        </div>
      ))}
      <div>
        <h1>mudo API with context</h1>
        {products.map((item) => (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <div className="flex justify-center">
            <img  className="h-40 mb-6"src={item.imageUrl} alt="mudo" />
          </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Test;
