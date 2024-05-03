import React from 'react'





function DetailPage({course}) {
 console.log(course);
 
 const {id,title,description,price,image} = course;

  return (
    <>
   <div className="detail-page">
    <img src={image} width={250} height={150} />
    <h2>{title}</h2>
    <p>{description}</p>
    <p>Fiyat: {price}</p>
     <p>id:{id}</p>
   </div>
  </>
  )
}

export default DetailPage