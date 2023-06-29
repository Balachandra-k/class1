import React from "react";

const x = 123
const title = 'welcome to react'
const isview = false
const users = ['balu','ramu','somu']
const emp ={
    id : 123,
    name : "balu",
    emailid:"balu@gmail.com"

}

function Ex4(props){
    const y = 14

    return(
        <div>
            <h1>Varibule and data binding in react</h1>
            <h4> x = {x}</h4>
            <h3>{ title}</h3>
            <h3> boolean = { isview ? "say True" : "say False"}</h3>
            <hr/>
            <div>
                {isview? <h1>true</h1>: <h1>false</h1>}
            </div>

            <hr/>

            <ul>
                {
                    users.map((item,index) =>{
                        return (
                            <li key = {index}>{index} {item}</li>
                        )
                    })
                }
            </ul>   

            <hr/>
            <h3>Emp id = {emp.id}</h3>
            <h3>Emp name ={emp.name}</h3>
        </div>
    )
}
export default Ex4