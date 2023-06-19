import React, { useState } from 'react'

function App1() {
    const [first, setFirst] = useState('')
    const [second, setSecond] = useState('')
    const [result,setResult]=useState('')
    const handleSubmit = () => {
        const add = parseInt( first) + parseInt(second)
        setResult(add)
    }

    return (
        <div>
            <h1>Calculator</h1>
            <p>{result}</p>
            <p>First Number <input type="number" onChange={(e) => { setFirst(e.target.value) }} /></p>
            <p>Second Number <input type="number" onChange={(e) => { setSecond(e.target.value) }} /></p>
            <button onClick={handleSubmit}>Add</button>
            <p>Add : {result}</p>
        </div>
    )
}

export default App1
