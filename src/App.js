import axios from 'axios'
import styled from 'styled-components'
import './styles.css'

export default function App() {
  const onClickUsers = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => console.log(err))
  }
  const onClickUser1 = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/users?id=1')
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className="App">
      <SButton onClick={onClickUsers}>users</SButton>
      <SButton onClick={onClickUser1}>id=1のuser</SButton>
    </div>
  )
}

const SButton = styled.button`
  width: 120px;
  height: 32px;
  font-size: 14px;
  margin: 8px;
  outline: none;
  border: none;
  background-color: #333;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    opacity: 0.8;
  }
`
