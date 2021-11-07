import "./styles.css";
import { useState } from "react";

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function Students({ studentsList }) {
  console.log(studentsList);
  const [selectedStudents, setSelectedStudents] = useState([]);

  const raffleStudent = (selStudents) => {
    let availableStudents = studentsList;
    if (selStudents.length > 0) {
      availableStudents = studentsList.filter((stu) => {
        return (
          selStudents.find((seStu) => seStu.house === stu.house) === undefined
        );
      });
    }
    return availableStudents[
      randomIntFromInterval(0, availableStudents.length - 1)
    ];
  };
  const [text, setText] = useState("Começar");
  const raffle = () => {
    let selStudents = [];
    for (let i = 0; i < 3; i++) {
      const raffledStudent = raffleStudent(selStudents);
      selStudents.push(raffledStudent);
    }
    setSelectedStudents(selStudents);
    setText("Tentar novamente");
  };

  return (
    <div className="container">
      <div className="button-container">
        <button onClick={raffle}>{text}</button>
      </div>
      <div>
        <div className="card-student-container">
          {selectedStudents.map((student, index) => {
            return (
              <div className="card-student">
                <p key={index}>
                  <span>Name:</span> {student.name}{" "}
                </p>
                <p>
                  <span>House:</span> {student.house}
                </p>
                <img src={student.image} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
