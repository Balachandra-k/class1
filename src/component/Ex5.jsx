import React from "react"

const x = 123
const title = 'welcome to react'
const isview = false
const users = ['balu','ramu','somu']
const emp ={
    id : 123,
    name : "balu",
    emailid:"balu@gmail.com"

}

const Ex5 = (props) => {
    return(
        <div>
            <h1>Varible and Data binding in Arrow Function</h1>
            <h1> x = { x }</h1>
            <h2> title = { title}</h2>
            <h3> { isview ? "sayTrue" : "sayFalse" }</h3>
            <ul>
                {
                    users.map((index,title)=>{
                        return(
                            <li key={index}>{index} {title}</li>
                        )
                    })
                }
            </ul>
            <h3>empId {emp.id}</h3>
            <h3>Emp Name{emp.name}</h3>
            
        </div>
        
    )
}
export default Ex5