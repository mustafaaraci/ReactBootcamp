import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap';

function UseEffect() {
//bir fonksiyonu bir fonksiyona parametre geçme CallBack Function denir.useEffect callback ister.sayfada ilk olarak çalışmasını isteğimiz durumlar için kullanılır.

const [firstName,setFirstname]= useState('beril')
const [lastName,setLastname]= useState('yetiş')



    useEffect(()=>{
        console.log("herzaman çalışır");
    })

    useEffect(()=>{
        console.log("component ilk render edildiğinde çalışır");
        //veri tabanından ürünleri getir ve listele, birkez çalış,[] parametre koydugumuz için tek sefer çalışıyor.
    },[])

    useEffect(()=>{
        console.log("ilk render edildiğinde ve firstName değeri değiştiğinde çalışır");
    },[firstName])

    useEffect(()=>{
        console.log("ilk render edildiğinde ve lastName değeri değiştiğinde çalışır");
    },[lastName])

  return (
    <Card>
  <h1>İsim:{firstName}</h1>
  <h1>Soyisim:{lastName}</h1>
        <Button onClick={() => setFirstname("kazım")}>Adı Değiştir</Button>
        <Button onClick={() => setLastname("demir")}>Soyadı Değiştir</Button>
    

    </Card>
  
  )
}

export default UseEffect