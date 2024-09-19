import {Component} from 'react'
import styled from 'styled-components'
import {v4 as uuidv4} from 'uuid'
import './App.css'

const Container = styled.div`
  min-height: 100vh;
  display: flex;
`

const LeftContainer = styled.div`
  width: 50%;
  background-color: #ffbf1f;
  display: flex;
  flex-direction: column;
  row-gap: 3rem;
`

const Heading = styled.h1`
  padding: 4rem 2rem;
  color: #0f172a;
  font-size: 3rem;
  background-color: #ffc533;
`

const CharactersListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding: 1rem 3rem;
`

const ChHeading = styled.p`
  font-size: 2rem;
  color: #0f172a;
  font-weight: bold;
`

const RightContainer = styled(LeftContainer)`
  background-color: #0f172a;
  padding: 4rem 2rem;
`

const Title = styled.h1`
  color: #ffbf1f;
  font-size: 2rem;
  text-align: center;
`

const InputContainer = styled.form`
  display: flex;
  column-gap: 2rem;
  align-item: center;
  width: 100%;
  justify-content: center;
`

const Input = styled.input`
  background-color: white;
  width: 80%;
  border: none;
  outline: none;
  color: black;
  padding: 0 3rem;
`

const Button = styled.button`
  background-color: white;
  color: darkblue;
  border-radius: 8px;
  padding: 1rem 2rem;
`
const Image = styled.img`
  height: 45rem;
  width: 100%;
  object-fit: cover;
  object-position: center;
`

class App extends Component {
  state = {
    userInput: '',
    charactersList: [],
  }

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  onClickAddBtn = event => {
    event.preventDefault()
    const {userInput} = this.state
    this.setState(prevState => ({
      charactersList: [...prevState.charactersList, userInput],
      userInput: '',
    }))
  }

  render() {
    const {charactersList, userInput} = this.state
    const isEmpty = charactersList.length === 0

    return (
      <Container>
        <LeftContainer>
          <Heading>Count the characters like a Boss...</Heading>
          <CharactersListContainer>
            {isEmpty ? (
              <Image
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
              />
            ) : (
              charactersList.map((each, index) => (
                <li key={uuidv4()}>
                  <ChHeading>
                    {each} : {each.length}
                  </ChHeading>
                </li>
              ))
            )}
          </CharactersListContainer>
        </LeftContainer>
        <RightContainer>
          <Title>Character Counter</Title>
          <InputContainer>
            <Input
              type="text"
              onChange={this.onChangeUserInput}
              value={userInput}
              placeholder="Enter the Characters here"
            />
            <Button type="button" onClick={this.onClickAddBtn}>
              Add
            </Button>
          </InputContainer>
        </RightContainer>
      </Container>
    )
  }
}

export default App
