import "./App.css";
import { useState, useEffect } from "react";
import Students from "./components/Students";

function App() {
  const [studentsList, setStudentsList] = useState([]);

  useEffect(() => {
    fetch("https://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) => {
        setStudentsList(filterStudents(response));
      })

      .catch((err) => console.error(err));
  }, []);

  const filterStudents = (response) => {
    return response.filter((student) => student.image !== "");
  };
  return (
    <div className="App">
      <h1>Torneio Tribruxo</h1>
      <p> Clique no botão para encontrar os feiticeiros!</p>
      {studentsList.length > 0 && <Students studentsList={studentsList} />}
    </div>
  );
}

export default App;
