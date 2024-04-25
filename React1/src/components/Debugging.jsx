import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'

function Debugging() {

  const [vize1,setVize1]= useState(0)  
  const [vize2,setVize2]= useState(0) 
  const [ortalamaGöster,setOrtalamaGöster] = useState(0) 
 

  const ortalamaBul = () => {   //ecmascript ile gelen arrow functıon
  //  debugger
  const toplamSonuc = topla()/2;
  yazdir(toplamSonuc);
  setOrtalamaGöster(toplamSonuc);
  }  

  function ortalamaBul2() {}   //  functıon

  const topla = () => {
    const toplam = vize1 + vize2;
  //  debugger
    return toplam;
  }
  const yazdir = (sonuc) => {
   // debugger
  console.log("ortalama:"+sonuc);
  }
  return (
    <>
    <Card>
    <div>Debugging</div>
    <div>
        <input type="number" value={vize1} onChange={(e)=>setVize1(Number(e.target.value))} />
        
    </div>
    <div>
        <input type="number" value={vize2} onChange={(e)=> setVize2(Number(e.target.value))}/>
    </div>
    <div>
        <p>Sonuç:{ortalamaGöster}</p>
    </div>
    <Button onClick={ortalamaBul}>Ortalama Bul</Button>
    </Card>
    </>
  )
}

export default Debugging