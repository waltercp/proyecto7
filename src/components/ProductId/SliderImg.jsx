import React, { useState } from 'react'
import '../../styles/productId_sliderImg.css'


const SliderImg = ({ product }) => {

  const [numbertImg, setNumbertImg] = useState(0)


  const objStyle = {
    transform: `translate(calc(-${numbertImg}/3 * 100%))`
  }

  const handlePrevious = () => {
    if (numbertImg - 1 < 0) {
      setNumbertImg(2)
    }
    else {
      setNumbertImg(numbertImg - 1)
    }
  }

  const handleNext = () => {
    if (numbertImg + 1 > 2) {
      setNumbertImg(0)
    }
    else {
      setNumbertImg(numbertImg + 1)
    }
  }

  return (
    <div className='slider'>
      <button onClick={handlePrevious} className='slider__arrow slider_left'>&lt;</button>
      <div style={objStyle} className='slider__interior'>
        {
          product?.images.map((imgInfo) => (
            <div className='slider__img-container' key={imgInfo.id}>
              <img
                className='slider__img'
                key={imgInfo.url}
                src={imgInfo.url}
                alt="" />
            </div>
          ))
        }
      </div>
      <div className='slider-muestra'>
        {
          product?.images.map((imgInfo, i) => (
            <li
              key={imgInfo.id}
              className={numbertImg === i? 'selecto' : ''}
            >
              <img
                src={imgInfo.url}
                alt=""
                onClick={() => setNumbertImg(i)}
              />
            </li>
          ))
        }
      </div>
      <button onClick={handleNext} className='slider__arrow slider_rigth'>&gt;</button>
    </div>
  )
}

export default SliderImg