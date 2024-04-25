import React, { Children } from 'react'
import { Card } from 'react-bootstrap'

function Container({children}) {
    console.log({children})   //props özelliğinden kontrol ettik consolda children component oldugunu gördük ve jsx olarak return de kullandık.
  return (
    <>
    <Card>
    <div>Container çalıştı</div>
    {children}
    </Card>
    </>
  )
}

export default Container