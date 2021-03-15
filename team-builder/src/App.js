
import React, {useState} from 'react'
import './App.css';
import TeamForm from './Form'
import Employee from './Employee'
import styled from 'styled-components'


const StyledTitle = styled.div`
height: 100vh;
text-align: center;
background-color: #FF8C00;
font-family: couier-new;

h1{
  font size: 45px;
  color: dim-grey;
}

 

`


const employee1 =[
{
name: 'Jake Linn',
role: 'Yeezus',
email: 'jlinn@lambda.com',


}
]



function App() {
const [team, setTeam] = useState(employee1)

  return (
<StyledTitle className = 'container'>
  <h1> Welcome to the Kanye West Fan Club!   </h1>
  <div>
<TeamForm team ={team} setTeam= {setTeam}/>
<Employee team ={team} />   
  </div>

</StyledTitle>
    
  );
}

export default App;
