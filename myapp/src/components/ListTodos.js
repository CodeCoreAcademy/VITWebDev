import React, { useState } from 'react'
import './todoliststyle.css'
export default function ListTodos() {
    const arr = ["Khana Khana aasdasds", "Padhai karna","Assignment baki hain", "Date pe jana hai", "Sona hai"]
  
    const [display, setDisplay] = useState('hidden')
    return (
        <div>
            <h1>Todo App</h1>
            <input type="text"/>
            <button>Add</button>
            <hr />
            <div className='todo_container'>
                {
                    arr.map((element, index)=>{
                        return <div key={index} className='single_job' onMouseEnter={()=>{setDisplay('show')}} onMouseLeave={()=>{setDisplay('hidden')}}>
                                    <div>
                                        <input type="checkbox" className={display}/>
                                        <span>{element}</span>
                                        
                                    </div>
                                    <button className={display}>delete</button>
                                    
                                </div>
                    })
                }
            </div>
            
        </div>
  )
}
