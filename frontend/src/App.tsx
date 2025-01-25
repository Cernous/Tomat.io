
import './App.css'

function App() {
  

  return (
    <>
    <div className="header">
      <h1>Tomato</h1>
    </div>
    
    <div className= "chatbox">
      <h1>Chat</h1>
      <input type = "text" id = "name" name= "query" placeholder='Enter Questions Here!'></input>
    </div>


    <div className='footer'>
      <a href="https://github.com/Cernous/fullstack-FastAPI-React/tree/main">Visit Our Repository!</a>
    </div>
    </>
  )
}

export default App
