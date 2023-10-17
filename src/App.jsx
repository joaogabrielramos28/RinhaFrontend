
import { useState } from 'react'
import './App.css'

function App() {

  const [showError, setShowError] = useState(false)

  const handleFile = (e) => {
    if(
      e.target.files[0].type !== 'application/json'
    ){
      setShowError(true)
      return
    }

    setShowError(false)

  }

  return (
   

    <section className='container'>
      <h1>
        JSON Tree Viewer
      </h1>
      <h3 className='subtitle'>
        Simple JSON Viewer that runs completely on-client. No data exchange
      </h3>
      
      <input type='file' hidden  id='file-input' onChange={handleFile}    />
      <input type='button' value="Load JSON" id='file-input' onClick={()=>{
        document.getElementById('file-input').click()
      }}  />

      {showError && <span className='error'>Invalid file. Please load a valid JSON file.</span>}

    </section>
  )
}

export default App
