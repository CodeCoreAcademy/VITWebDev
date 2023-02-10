import React, { useState } from 'react'

function Number() {
    const [num,setNum] = useState(0)
    const [msg, setMsg] = useState('')

    const handleInput = (value)=>{
        // console.log(value)
        setNum( parseInt(value) )
    }

    const check = ()=>{
        console.log(typeof(num))
        let f = 0
        let sq = Math.sqrt(num)
        for(let i=2;i<=sq; i++)
        {
            if(num%i == 0)
            {
                f=1;
                break;
            }
        }
        if(f==0)    
            setMsg("Prime")
        else
            setMsg("Not prime")
    }
  return (
    <div>
        <input type='number' onChange={(event)=>{handleInput(event.target.value)}}/>
        <br />
        <label for="options">Choose an option:</label>
        <br />
        <select id="options">
            <option value="volvo">Palindrome number</option>
            <option value="saab">Prime Number</option>
            <option value="mercedes">Armstrong number</option>
            <option value="audi">Tech number</option>
        </select>
        <br />
        <button onClick={check}>Check</button>
        <div>
            Output: {msg}
        </div>
    </div>
  )
}

export default Number