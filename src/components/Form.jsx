import { useRef } from "react"
import Card from "./Card"

const Form = (props) => {
    const nameRef = useRef();
    const LiveRef = useRef();
    const EmailRef = useRef();

    const addNewUser = (event) => {
        event.preventDefault();
        if(
            nameRef.current.value.trim().length === 0 ||
            LiveRef.current.value.trim().length === 0 || 
            EmailRef.current.value.trim().length === 0
        ) {
            alert("pls fill a invalid value for all input");
            return;
        }
        const userInfo = {
            name : nameRef.current.value,
            live : LiveRef.current.value,
            email : EmailRef.current.value
        };
        props.getuserInfos(userInfo);

        nameRef.current.value = ""
        LiveRef.current.value = ""
        EmailRef.current.value = ""
    };

    return (
        <Card>
            <form onSubmit={addNewUser}>
                <div className="form-div">
                    <label htmlFor="name">Name</label>
                    <input 
                    type="text"
                    id="name" 
                    ref={nameRef} />
                </div>
                <div className="form-div">
                    <label htmlFor="live">Live</label>
                    <input 
                    type="text" 
                    id="live"
                   ref={LiveRef} />
                </div>
                <div className="form-div">
                    <label htmlFor="email">Email</label>
                    <input 
                    type="email" 
                    id="email"
                  ref={EmailRef} />
                </div>
                <button className="btn">Add New User</button>
            </form>
        </Card>

    )
}

export default Form