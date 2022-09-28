import { useState } from "react";
import { CardStudent, CardStudentContainer, ImgStudent, ButtonStart, ReactContainer, Fields, ButtonContainer, FieldsContainer} from "./styles"

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function Students({ studentsList }) {

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
    <ReactContainer>
      <ButtonContainer>
        <ButtonStart onClick={raffle}>{text}</ButtonStart>
      </ButtonContainer>
      <div>
        <CardStudentContainer>
          {selectedStudents.map((student, index) => {
            return (
              <CardStudent house={student.house}>
                <FieldsContainer key={index}>
                  <Fields>Nome:</Fields> {student.name}{" "}
                </FieldsContainer>
                <FieldsContainer>
                  <Fields>Casa:</Fields> {student.house}
                </FieldsContainer>
                <ImgStudent src={student.image} alt="" />
              </CardStudent>
            );
          })}
        </CardStudentContainer>
      </div>
    </ReactContainer>
  );
}
