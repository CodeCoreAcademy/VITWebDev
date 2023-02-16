import React, { useState } from 'react'
import './todoliststyle.css'
export default function ListTodos() {
    // const arr = ["Khana Khana", "Padhai karna","Assignment baki hain", "Date pe jana hai", "Sona hai", "new Job"]
    const [jobs, setJobs] = useState(["Khana Khana", "Padhai karna","Assignment baki hain", "Date pe jana hai", "Sona hai", "new Job"])
    const [display, setDisplay] = useState('hidden')
    const [text, setText] = useState('')
    let add=()=>{
        // setJobs( (arr) => {
        //     arr.push(text)
        //     return arr
        // })
        setJobs((prev)=>{
            return [...prev, text]
        })
        setText('')
    }

    return (
        <div>
            <h1 style={{fontWeight:'300', textAlign:'center'}}>Todo App</h1>
            <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                <input type="text" className="textbox" value={text} onChange={(event)=>setText(event.target.value)}/>
                <span style={{width:'16px'}}></span>
                <button className='button2' onClick={add}>Add</button>
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
                                            <input type="checkbox" className='view'/>
                                        </div>
                                        <span>{element}</span>
                                        
                                    </div>
                                    {/* <button className={display}>delete</button> */}
                                    <button className="view button2">delete</button>
                                    
                                </div>
                    })
                }
            </div>
            
        </div>
  )
}
