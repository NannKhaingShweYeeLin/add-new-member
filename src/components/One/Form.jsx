import { useState } from "react"

const Form = (props) => {
  const [name,setName] = useState("");
  const [live,setLive] = useState("");
 
const trackName = (event) => {
setName(event.target.value)
}

const trackLive = (event) => {
setLive(event.target.value)
}

const showData = (event) => {
  event.preventDefault();

  const data = {
    name,
    live,
  }

  props.addNewMember(data);

  setName("");
  setLive("");
}
  return (
    <form onSubmit={showData}>
      <input type="text" placeholder="name" onChange={trackName} value={name} />
      <input type="text" placeholder="live" onChange={trackLive} value={live}/>
      <button type="submit">Add new member</button>
    </form>
  )
}

export default Form
