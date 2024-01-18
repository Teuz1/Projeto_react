import { useEffect, useState } from 'react'
import './Task.css'

function Task() {
  const [completado, setCompletado] = useState(false) // boolean
  const [tarefa, setTarefa] = useState() // string
  
  // Função a ser disparada / um gatilho (algo  a ser analizado)
  useEffect(() => {
    if(completado == true){
      setTarefa ("Tarefa concluída")
    }
  }, [completado])

  /* 
   function () {} é igual () => {}
  */


  return (
    <div className="container">
        <h1>Tarefa</h1>
        <h3>Status da Tarefa: { tarefa }</h3>
        <button onClick= {() => {setCompletado(true)}}>Conclua a Tarefa</button>
    
    </div>
  )
}

export default Task