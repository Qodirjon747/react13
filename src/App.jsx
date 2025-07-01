import './App.css'

function App() {
  const body = document.getElementsByTagName("body")[0];
  function gg() {
    body.style.backgroundColor = "red";
  }
  function ss() {
    body.style.backgroundColor = "blue";
  }
  function dd() {
    body.style.backgroundColor = "yellowgreen";
  }


  return (
    <div>
      <button className='btnr' onClick={gg}>Red</button>
        <button className='btnb' onClick={ss}>Blue</button>
        <button className='btng' onClick={dd}>Green</button>
    </div>
  )
}

export default App
