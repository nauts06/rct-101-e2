import React,{useEffect,useState} from "react";
import AddProduct from "./AddProduct"
import Product  from "./Product";
import { Flex,Grid } from "@chakra-ui/react";
import axios from "axios";


const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />;
  // const Grid = () => <div />;
  
  const [newProducts,setNewProducts] = useState([])

  const GetData  = async (()=>{
  axios.get("http://localhost:8080/products").then((res)=>{
    setNewProducts(res.data)
  })
},[])
  return (
    <Flex>
      {/*  AddProduct */}
      <AddProduct/>
      <Grid>{/* List of Products */}</Grid>
      {/* Pagination */}
    </Flex>
  );
};

export default Products;
