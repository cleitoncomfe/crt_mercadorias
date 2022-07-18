import React from "react";
import {useState} from "react"

function Cadastrar(){
    const [numTr, setNumTr]=useState("")
    
    function saveData(e){
        e.preventDefault()
        if(!numTr==""){
            console.log(numTr)
            setNumTr("")
        }else{
            console.log("Digite um valor")
        }
    }
    return(
        
        <div>
            <h2>Cadastro de mercadorias retidas</h2>
            <form onSubmit={saveData}>
                <label>Número do TR</label>
                <input type="text" onChange={(e)=>{setNumTr(e.target.value)}} value={numTr}></input>
                <br/>
                <label>Nome do contribuinte</label>
                <input type="text" onChange={(e)=>{setNumTr(e.target.value)}} value={numTr}></input>
                <br/>
                <label>Nome do fiel depositário</label>
                <input type="text" onChange={(e)=>{setNumTr(e.target.value)}} value={numTr}></input>
                
                <input type={"submit"}></input>
            </form>
        </div>
    )
}

export default Cadastrar