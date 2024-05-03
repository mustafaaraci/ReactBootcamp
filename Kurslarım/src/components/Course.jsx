import React, { useState } from 'react'
import {Button} from 'react-bootstrap'
import { Navigate } from 'react-router-dom'
import DetailPage from '../pages/DetailPage';
import { courses } from '../Data';






function Course({course}) {
   // console.log(course,"kurslar");
   const {id,title,description,price,image} = course;
   const [detail,setDetail] = useState(false);
   
   const handleDetail = () => {
    setDetail(true)
   };
   if (detail) {
    return <Navigate to={`/detay/${id}`}/>;
    
 }
   
  return (
    <div className='course mt-5'>
        <img src={image} width={250} height={150} />
        <h4>{title}</h4>
        <h5>{description}</h5>
        <h3>{price}₺</h3>
        <div className='button-group'>
      <h4><Button onClick={handleDetail}>Detay</Button></h4>     
      <h4><Button>Satın Al</Button></h4>
      </div>
    </div>
  )
}

export default Course