import React, { useState } from 'react'
import './todoliststyle.css'
export default function ListTodos() {
    // const arr = ["Khana Khana", "Padhai karna","Assignment baki hain", "Date pe jana hai", "Sona hai", "new Job"]
    // const [jobs, setJobs] = useState(["Khana Khana", "Padhai karna","Assignment baki hain", "Date pe jana hai", "Sona hai", "new Job"])
    const [jobs, setJobs] = useState([
        {
            desc:'Khana Khana',
            completed:false,
        },
        {
            desc:'Padhai karna',
            completed:true,
        },
        {
            desc:'Assignment baki hain',
            completed:false,
        }
    ])
    const [display, setDisplay] = useState('hidden')
    const [text, setText] = useState('')
    const add=()=>{
        // setJobs( (arr) => {
        //     arr.push(text)
        //     return arr
        // })
        const data = {
            desc:text,
            completed:false
        }
        setJobs((prev)=>{
            return [...prev, data]
        })
        setText('')
    }

    const remove=(index)=>{
        // setJobs( (prev)=>{
        //     return [...prev.slice(0, index), ...prev.slice(index+1)]
        // } )
        setJobs( prev => prev.filter((ele, ind)=>ind!=index) )
    }

    const handleComplete=(index)=>{
        //console.log(index)
        //setJobs( (prev) => {
            // prev[index] = {...prev[index], completed:true}
            // return prev
            // return prev.map((element, ind)=>{
            //     if(ind == index)
            //         return {...element, completed:!element.completed }
            //     else 
            //         return element
            // })
        //} )
        setJobs( (arr) => {
            return arr.map( (element, ind)=> {
                if(ind == index)
                    return {...element, completed:!element.completed}
                else
                    return element
            } )
        } )
    }
    return (
        <div>
            <h1 style={{fontWeight:'300', textAlign:'center'}}>Todo App</h1>
            <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                <input type="text" className="textbox" value={text} onChange={(event)=>setText(event.target.value)}/>
                <span style={{width:'16px'}}></span>
                <button className='button2' onClick={add}>Add</button>
                {/* <button className='button2' onClick={()=>{
                    setJobs((prev)=>{
                        return [...prev, text]
                    })
                    setText('')
                }}>
                    Add
                </button> */}
            </div>
            
            <hr />
            <div className='todo_container'>
                {
                    jobs.map((element, index)=>{
                        // return <div key={index} className='single_job' onMouseEnter={()=>{setDisplay('show')}} onMouseLeave={()=>{setDisplay('hidden')}}>
                        return  <div key={index} className='single_job'>
                                    <div style={{display:'flex'}}>
                                        <div style={{width:'30px'}} >
                                            {/* <input type="checkbox" className={display}/> */}
                                            <input type="checkbox" className='' checked={element.completed} onClick={()=>handleComplete(index)}/>
                                        </div>
                                        <span style={{textDecoration: element.completed==true?'line-through':''}}>{element.desc}</span>
                                        
                                    </div>
                                    {/* <button className={display}>delete</button> */}
                                    <button className="view button2" onClick={()=>remove(index)}>delete</button>
                                    
                                </div>
                    })
                }
            </div>
            
        </div>
  )
}
