import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import React, { useState } from 'react';
import AddItem from "./components/AddItem";

function App() {
  let product = [
    {
      name : "Iphone 11",
      price : 50000,
      quantity: 0
    },
    {
      name : "Iphone 13",
      price : 90000,
      quantity: 0
    }
  ]

  let [productList, setProductList] = useState(product)
  let [totalAmount, setTotalAmount] = useState(0)

  let resetAll = ()=>{
    let newProduductList = [...productList]
    newProduductList.map((e)=>{
      return e.quantity=0
    })
    setProductList(newProduductList)
    setTotalAmount(0)
  }

  let incrementQunatity = (index) =>{
    let newProduductList = [...productList]
    let newTotalAmount = totalAmount
    newProduductList[index].quantity++
    newTotalAmount += newProduductList[index].price
    setProductList(newProduductList);
    setTotalAmount(newTotalAmount)
  }

  let decrememtnQunantity = (index) =>{
    let newProduductList = [...productList]
    let newTotalAmount = totalAmount
    if (newProduductList[index].quantity>0) {
      newProduductList[index].quantity--
      newTotalAmount -= newProduductList[index].price
    }
    setProductList(newProduductList);
    setTotalAmount(newTotalAmount)
  }

  let remove = (index) =>{
    let newProduductList = [...productList]
    newProduductList.splice(index,1)
    setProductList(newProduductList)
    let newTotalAmount = totalAmount
    newTotalAmount -= (newProduductList[index].price * newProduductList[index].quantity)    
    console.log(newTotalAmount);
    setTotalAmount(newTotalAmount)
  }

  let AddItem1 = (name,price)=>{
    console.log("aaa");
    let newProduductList = [...productList]
    newProduductList.push({
      name:name,
      price:price,
      quantity:0
    })
    setProductList(newProduductList)
  }

  return (
    <>
      <Navbar />
      <AddItem AddItem1={AddItem1}/>
      < ProductList productList={productList} decrememtnQunantity={decrememtnQunantity} incrementQunatity={incrementQunatity} remove={remove}/>
      <Footer totalAmount={totalAmount} resetAll={resetAll} />
    </>
  );
}

export default App;
