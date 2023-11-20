import React from 'react'


export default function ParentChildcom() {
    return (
        <div>
            <Child name="Basavaraj"/>
        </div>
  )
}

function Child(props){
    return(
        <div>
            <h1>My name is {props.name}</h1>
        </div>
    )
}