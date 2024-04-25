import React from 'react'

function Product(props) {
   // console.log(props)
    const {productName,price} = props;  //Destructuring yaptık.Propsu parçalara ayırmış olduk.

  return (
    <>
    <div>Ürün Bilgileri</div>
    <div>İsim:{props.productName}</div>
    <div>Fiyat:{props.price}TL</div>
    <hr />
    <div>İsim:{productName}</div>
    <div>Fiyat:{price}TL</div>
    </>
  )
}

export default Product

