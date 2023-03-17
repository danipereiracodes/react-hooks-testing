import React from 'react'
import { useFetch, useCounter } from '../hooks'
import Loading from './Loading'
import Product from './Product'


const url = 'https://fakestoreapi.com/products'

const MultipleCustomHooks = () => {

    const { counter, reset, add } = useCounter(1)
    const { data, isLoading, hasError } = useFetch(`${url}/${counter}`)


    return (
        <> {
            isLoading ?
            <Loading />
            :

            <Product data={data} />}

            
            <button onClick={() => add(1)}>More Products</button>



        </>)

}

export default MultipleCustomHooks