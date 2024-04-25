import React from 'react'

function ProductProps({productName,price}) {
  //  console.log({productName,price})
  return (
    <>
    <div>Ürün Bilgileri</div>
    <div>İsim:{productName}</div>
    <div>Fiyat:{price}TL</div>
   </>
  )
}

export default ProductProps