import { memo } from "react";

export const Small = memo(({counter}) => {

    console.log('rendering Small');


  return (
    <small>{ counter }</small>
  )
})
