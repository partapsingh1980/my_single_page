
import React from "react"
  const Note = ({note,toggleImportance}) =>{
    const label = note.important
    ?'make note important':'dont important'
return(
    <li>{note.id} {note.content} 
    
    <button onClick={toggleImportance}>do impotant</button>
    </li>
)
}
export default Note