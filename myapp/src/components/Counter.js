import { useState } from "react"

export default function Counter()
{
  const [count, setCount] = useState(0)
  // let count = 0
  let c=0
  const increament = ()=>{
    for(let i=1; i<=5; i++)
      setCount(count+1)
    // console.log(count)
    // count++
    // console.log(count)
    // setCount(count+1)
  }

  const inc2 = ()=>{
    for(let i=1; i<=5; i++)
      // setCount((prev)=>{ return prev+1})
      setCount((value)=>{
        return value+1
      })
  }

  return(
    <div>
      <span>{count}</span>
      <br />
      <button onClick={increament}>Click</button>
      <button onClick={inc2}>Click 2</button>
    </div>
  )
}