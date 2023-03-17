import { useLayoutEffect, useRef, useState } from "react"

const Product = ({ data }) => {

  const dataRef = useRef()

  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const { width, height } = dataRef.current.getBoundingClientRect();
    setBoxSize({ width, height })

  }, [])


  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h1 ref={dataRef} >{data.title}</h1>
        <img style={{ width: '150px', height: '200px' }} src={data.image} alt={data.title} />

        <hr />

      </div>
      <h5>{JSON.stringify(boxSize)}</h5>
    </>
  )
}

export default Product