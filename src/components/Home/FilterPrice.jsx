import React from 'react'
import { useForm } from 'react-hook-form'
import '../../styles/home_filterPrice.css'
import DropDown from './DropDown'


const FilterPrice = ({ setFromTo }) => {

    const { reset, register, handleSubmit } = useForm()

    const submit = data => {
        setFromTo(data)
        reset({
            from: '',
            to: ''
        })
    }


    return (
        <article className='filterPrice__article'>
          
            <DropDown  header="Price" >
                <form className='filterPrice__form' onSubmit={handleSubmit(submit)}>

                    <div className='filterPrice__from'>
                        <label htmlFor="from">From</label>
                        <input {...register('from')} type="number" id='from' />
                    </div>

                    <div className='filterPrice__to'>
                        <label htmlFor="to">To</label>
                        <input {...register('to')} type="number" id='to' />
                    </div>

                    <button className='filterPrice'>Filter Price</button>
                </form>
            </DropDown>
        </article>
    )
}

export default FilterPrice