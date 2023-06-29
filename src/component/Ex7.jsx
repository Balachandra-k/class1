import React,{Component} from "react"


const x = 23456
const title = "react"
const bollean = false
const users = ['kiran','akhil','venu', 'nadhini']
const Emp = {
    id : 345,
    name : "venu",
    email : "venu@gmail.com"
}

class Ex7 extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h1>x={x}</h1>
                <h1> title = {title}</h1>
                <h1>bollean={bollean? "say true": "sayfalse"}</h1>
                <div>
                    <ul>
                        {
                            users.map((index,title)=>{
                                return(
                                    <li key={index} >{index}{title}</li>
                                )
                            })
                        }
                    </ul>
                    <h1>emp.id= {Emp.id}</h1>
                    <h1>emp.name= {Emp.name}</h1>
                    <h1>emp.email = {Emp.email}</h1>
                </div>
            </div>
        )
    }
}
export default Ex7