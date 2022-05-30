import React,{useEffect,useState} from "react";
import{Stack,Image,Tag,TagLabel,Box,Text,Heading} from '@chakra-ui/react'
import axios from "axios"

const Product = () => {
  // TODO: Remove below const and instead import them from chakra
  const [carddata,setCarddata]=useState([]) 

  useEffect(()=>{
    const GetData = async (e)=>{
      let r = await axios.get("http://localhost:8080/products")
      setCarddata(r)
      console.log(r)
    }
    GetData()
  },[])

  return (
    <Stack data-cy="product">
      <Image data-cy="product-image" src={item.imageSrc} />
      <Text data-cy="product-category">{item.category}</Text>
      <Tag>
        <TagLabel data-cy="product-gender">{item.gender}</TagLabel>
      </Tag>
      <Heading data-cy="product-title">{item.title}</Heading>
      <Box data-cy="product-price">{item.price}</Box>
    </Stack>
  );
};

export default Product;
