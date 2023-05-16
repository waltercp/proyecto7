import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import CardProduct from '../components/Home/CardProduct'
import FilterCategory from '../components/Home/FilterCategory'
import '../styles/home.css'
import FilterPrice from '../components/Home/FilterPrice'


const Home = () => {



  const [filter, setFiltere] = useState(true)

  const [fromTo, setFromTo] = useState({
    from: 0,
    to: Infinity
  })

  const [inputValue, setInputValue] = useState(' ')

  const { productsGlobal } = useSelector(state => state)
  const input = useRef()

  const handleChangeInput = () => {
    setInputValue(input.current.value.toLowerCase().trim())
  }

  const productFilter = productsGlobal
    ?.filter(prod => prod.title.toLowerCase().includes(inputValue))
    .filter(prod => {
      const from = + fromTo.from
      const to = + fromTo.to
      const price = +prod.price

      if (from && to) {
        return from <= price && price <= to
      }

      if (from && !to) {
        return from <= price
      }

      if (!from && to) {
        return price <= to
      }

      if (!from && to) {
        return price <= to
      }

      if (!from && !to) {
        return true
      }
    })


  const handleMenu = () => {
    setFiltere(!filter)
  }




  return (
    <div className='home' >
      <div className={`menuResponsive ${filter ? ' ' : 'menuResponsiveClose'} `}>
        <div onClick={handleMenu} className={`bx bx-filter ${filter ? '' : 'bxs-x-circle'} `}></div>
      </div>

      <input className='home__input' ref={input} onChange={handleChangeInput} type="text" placeholder='what are you looking for?' />
      <div className='home__content'>


        <div className={`filterCategory ${filter ? 'active' : ''} `}>
          <h4 className='home_filter_active'>Filter</h4>
          <FilterCategory />
          <FilterPrice
            setFromTo={setFromTo}
          />
        </div>

        <div className='home__Product'>
          {
            productFilter?.map(prod => (
              <CardProduct
                key={prod.id}
                product={prod}
              />
            ))
          }
        </div>
      </div>


    </div>
  )
}

export default Home