import styled from 'styled-components'

const CardStudent = styled.div `

  background-image: ${(props)=> (props.house === 'Gryffindor'? 
  "linear-gradient(to right top, #7f0909, #a63b09, #ca6701, #e89500, #ffc500)"
  : (props.house === 'Hufflepuff'? "linear-gradient(to right top, #ecb939, #c4903b, #976b39, #684a33, #372e29)"
  : (props.house === 'Ravenclaw'? "linear-gradient(to right top, #0e1a40, #272947, #3a394e, #4c4b56, #5d5d5d)"
  : "linear-gradient(to right top, #2a623d, #18635d, #35606b, #525d68, #5d5d5d);")))};
  width: 300px;
  height: 400px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  margin: 10px;
  color: rgb(253, 253, 253);
  border-radius: 10px;
`
const CardStudentContainer = styled.div `
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (min-width: 768px) {
   	display: flex;
   	flex-direction: row;
   	align-items: center;
 }
`
const ImgStudent = styled.img `
  width: 10rem;
  height: 15rem;
  border-radius: 10px;
`

const ReactContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
`
  
const Fields = styled.span `
  font-weight: bold;
  color: rgb(17, 17, 17);
  margin-left: 0.5rem;
  height: 1rem;
  padding: 0.5rem;
`
const ButtonContainer = styled.div `  
  color: rgb(17, 17, 17);  
`

const ButtonStart = styled.button `
  cursor: pointer;
  font-family: 'Courier New', Courier, monospace;
  background-color: rgb(255, 230, 0);
  width: 200px;
  height: 30px;
  border-radius: 10px;
`

const FieldsContainer = styled.p `
  width: 70%;
  height: 1rem;
  background-color: gray;
  padding: 0.5rem;
  border-radius: 8px;
  display: flex;
  font-size: 0.85rem;
  align-items: center;
`

export {CardStudent, CardStudentContainer, ImgStudent, ReactContainer, Fields, ButtonContainer, ButtonStart, FieldsContainer }





