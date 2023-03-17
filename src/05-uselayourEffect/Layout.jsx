import React from 'react'
import { useFetch, useCounter } from '../hooks'
import Loading from '../03-examples/Loading'
import Product from '../03-examples/Product'


const url = 'https://fakestoreapi.com/products'

const Layout = () => {

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

export default Layout