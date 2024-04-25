import React, { useState } from 'react'
import Navbarr from './components/Navbarr'
import Product from './components/Product'
import ProductProps from './components/ProductProps';
import Container from './components/Container';
import { Button, Card } from 'react-bootstrap';
import Usestate from './components/Usestate';
import UseEffect from './components/UseEffect';
import Debugging from './components/Debugging';
import '../src/App.css'


function App() {
 
const productName ="Buzdolabı";
const [firstName,setFirstname] = useState('mehmet');
const [lastName,setLastname] = useState("yakar")
  //hooks verileri tutmak için kullandığımız hooks (değişken gibi düşünebiliriz)
const handleChange = () => {
   //debugger;
   // devtools ta source kısmında debug edip görebiliyoruz.
  setLastname("bitirir")
}
const [name,setName] = useState(["kader","elif","rüzgar","bekir"])
  return (
    <>
     <Navbarr/>
     <div className="container d-flex gap-2 mt-2">
      <div className="card" style={{borderColor:'red'}}>
     <Product productName ="Ayakkabı" price ={3200}/>
     </div>
     <div className="card"style={{borderColor:"blue"}}>
     <Product productName ={productName} price={3000}/>
     </div>
    <div className="card"style={{borderColor:"yellow"}}>
     <ProductProps productName ="gemi" price ={6000}/>
     </div>
     <div className="card"style={{borderColor:"green"}}>
     <ProductProps productName ="yelken" price ={11000}/>
     </div>
     <div className="card"style={{borderColor:"purple"}}>
     <div>İsminiz:{firstName}</div>
     <div>Soyisminiz:{lastName}</div>
     <Button onClick={()=>{setFirstname("veli"),setLastname(handleChange)}}className="mt-5">İsim değiştir</Button>
     </div>
     <Card>
      <h3>İSİMLER</h3>
      <div>
      {name.map((isim,index)=>(
       <div key={index}>{isim}</div> 
      ))}
      </div>
      </Card>
     <Usestate/>
     <UseEffect/>
     <Debugging/>
     <Container>  
    <Product productName = "telefon" price = {320000}/>
</Container>
    
 </div>
    
 </>
    
  )
}

export default App
