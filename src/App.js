
import { useState } from "react";
import Form from "./components/One/Form";
import Student from "./components/One/Student";

function App() {
  const [students, setStudents] = useState([]);

  const addNewMember = (memInfo) => {
    setStudents([...students, memInfo]);
  }

  return (
    <div className="App">
      <section>
        {
          students.length < 1 ? (
            <p>no member yet</p>
          ) : (
            students.map((student) => (
              <Student 
              name={student.name} 
              live={student.live}
              key={student.name} 
               />
            ))
          )
        }
        
      </section>
      <Form addNewMember={addNewMember} />
    </div>
  );
}

export default App;
