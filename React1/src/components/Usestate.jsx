import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap';

function Usestate() {
//useState ile [ilk parametresi değişkenimiz, ikinci parametresi değişiklik yapmamızı sağlayan değişkenimiz] =useState(başlangıç değerimiz)

    const [product,setProduct]=useState({title:"Burger",price:"120"}); //başlangıçta obje olarak tanımladık ve jsx ile çağırdık
    const handleChangeProduct = ()=>{
       
        setProduct({title:"armut",price:"450"})
    }
  return (
    <Card>
         <div>Ürün Bilgileri</div>
         <p>ürün Adı:{product.title}</p>
         <p>Fiyat:{product.price}</p>
         <Button onClick={handleChangeProduct}>Değiştir</Button>

    </Card>
   
  )
}

export default Usestate