import React from "react"
import ToDo from "./ToDo"

const texty = [
{
  id:0,
  text: 'Tekscik'
},
{
  id:1,
  text: 'Fajny text'
},
{
  id:2,
  text: 'Mega fajny tekst'
}
]

function App() {
const owca= texty.map(el => <ToDo key={el.id} text={el.text} />)

return (
  <div className="App">
    {owca}
  </div>
)
}

export default App