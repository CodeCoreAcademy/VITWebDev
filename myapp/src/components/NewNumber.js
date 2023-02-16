import { useState } from "react"

function NewNumber(){
    
    const [num,setNum] = useState(0)
    const [option,setOption] = useState('')
    const [msg,setMsg] = useState('')
    
    const forInput=(value)=>{
        setNum(parseInt(value))
    }
    const forChoice=(option)=>{
        setOption(option)
    }
    const check = ()=>{
        switch(option){
            case "Prime":
                {
                    let f = 0
                    let sq = Math.sqrt(num)
                    for(let i=2;i<=sq;i++)
                    {
                        if(num%i==0)
                        {
                            f=1
                            break;
                        }
                    }
                    if(f==0)
                    {
                        setMsg("Prime")
                    }
                    else
                    {
                        setMsg("Not Prime")
                    }
                    break;
                }
            case "OE":
                {
                    if(num%2==0)
                    {
                        setMsg("Even")
                    }
                    else
                    {
                        setMsg("Odd")
                    }
                    break;
                }
            case "Armstrong":
                {
                    let temp=num
                    let dig=0
                    let sum=0
                    while(temp>0)
                    {
                        dig=temp%10
                        sum+=Math.pow(dig,3)
                        temp=Math.floor(temp/10)
                    }
                    console.log(sum)
                    if(sum==num)
                    {
                        setMsg("Armstrong")
                    }
                    else
                    {
                        setMsg("Not Armstrong")
                    }
                    break;
                }
            case "Palindrome":
                {
                    let temp=num
                    let dig=0
                    let sum=0
                    while(temp>0)
                    {
                        dig=temp%10
                        sum=(sum*10)+dig
                        temp=Math.floor(temp/10)  //Because loosely typed language
                    }
                    if(sum==num)
                    {
                        setMsg("Palindrome")
                    }
                    else
                    {
                        setMsg("Not Palindrome")
                    }
                    break;
                }
            case "Tech":
                {
                    let count=0
                    let temp=num
                    let sum=0
                    while(temp>0)
                    {
                        count++
                        temp=Math.floor(temp/10)
                    }
                    if(count%2==0)
                    {
                        temp=num
                        let firstNum=Math.floor(temp/(parseInt(Math.pow(10,count/2))))
                        let secondNum=temp%(parseInt(Math.pow(10,count/2)))
                        sum=firstNum+secondNum
                        if(parseInt(Math.pow(sum,2))==num)
                        {
                            setMsg("Tech Number")
                        }
                        else
                        {
                            setMsg("Not A Tech Number")
                        }

                    }
                    else
                    {
                        setMsg("Not A Tech Number")
                    }
                    break;
                }
            default:
                setMsg("How Can You Choose An Option That Doesn't Exist")
        }
    }
    
    return(
     <div>
        <input type="number" onChange={(event)=>{forInput(event.target.value)}} />
        <br />
        <br />
        <select id="options" onChange={(event)=>{forChoice(event.target.value)}}>
            <option value="Prime">Prime Check</option>
            <option value="OE">Odd Or Even Check</option>
            <option value="Armstrong">Armstrong Check</option>
            <option value="Palindrome">Palindrome Check</option>
            <option value="Tech">Tech Number</option>
        </select>
        <br />
        <br />
        <button onClick={check}>Check</button>
        <br />
        <br />
        <div>
            output : {msg}
        </div>
     </div>   
    )
}

export default NewNumber