import React from 'react'
export default function Name({studentName}){
    if(studentName==="Harish"){
        throw new Error("Harish name is not acceptable")
    }
    return (
        <div>
            <h1> my name is {studentName}</h1>
        </div>
    )
}