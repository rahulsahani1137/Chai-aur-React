import { useState } from "react"

function App() {
    
  let [counter, setCounter] = useState(1)

    // let counter =15
    const addValue = () => {
      // counter += 1
      setCounter(counter+1)
    }

    const subValue = () => {
      if(counter>0){
        setCounter(counter-1)
      }
    } 
  return (
    <div>
      <>
        <h1>Chai aur React</h1>
        <h2>Counter value : {counter}</h2>

        <button onClick={addValue}>Add value</button>
        <button onClick={subValue}>Remove value</button>
      </>
    </div>
  )
}

export default App
