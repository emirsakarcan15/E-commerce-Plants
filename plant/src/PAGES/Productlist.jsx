import React from 'react'
import Navbar from '../COMOPONENTS/Navbar'
import { plantArray } from '../ASSETS/PlantArray'
import Plant from '../COMOPONENTS/Plant'
import '../CSS/ProductList.css'

function Productlist() {
  return (
    <div className='product-list-page-wrapper'>
      <Navbar />
      <div className='plants-wrapper'>
        {
          plantArray && plantArray.map((plantCategory) => (
            plantCategory.plants.map((plant, index) => (
              <Plant key={index} plant={plant} />
            ))
          ))

        }
      </div>
      
    </div>
  )
}

export default Productlist