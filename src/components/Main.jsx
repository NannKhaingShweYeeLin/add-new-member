import { useState } from "react"
import Formbox from "./Form"
import List from "./List"

const Main = () => {

    const [userInfos, setUserInfos] = useState([]);

    const getuserInfos = (userInfoObj) => {
        setUserInfos([...userInfos,userInfoObj]);
    }
  return (
   <section className="main">
    <Formbox getuserInfos={getuserInfos}/>
    <List userInfos={userInfos}/>
   </section>
  )
}

export default Main