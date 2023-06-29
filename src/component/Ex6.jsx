import React from "react"

const x = 10000
const title = "BePractical"
const bollean = true
const user = ['babu','suresh','chandra']
const Emp ={
    id : 222,
    Name : "baluchandra",
    eamil : "balu@gmail.com"
}

const Ex6 = function (props) {
    return(
        <div>
            <h1>X = { x }</h1>
            <h2> Title = {title}</h2>
            <h3> Bollen = {bollean? "sayTrue": "Sayfalse"}</h3>
            <div>
                <ul>
                    {
                        user.map((index,title) =>{
                            return(
                                <li key= {index}>{index} {title}</li>
                            )
                        })
                    }
                </ul>
                <h1>Emp id = {Emp.id}</h1>
                <h1>Emp name = {Emp.Name}</h1>
            </div>
        </div>
    )
    
}
export default Ex6