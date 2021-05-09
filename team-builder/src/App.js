import React, {useState} from 'react';
import './App.css';
import TeamForm from './Form'
import Customer from './Customers'
import styled from 'styled-components'


const StyledApp = styled.div `

height: 110vh;
text-align: center;
background-color: #5e76a1;
font-family: couier-new;


`

const customer1 = [{

name: 'Jake Linn',
role: 'Indianapolis Colts',
email: 'linnj@lambda.com'


}]



function App() {

const [team, setTeam] = useState(customer1)


  return (
    
<StyledApp>

<h1> AFC North vs. AFC South </h1>
<div>
<TeamForm team={team} setTeam = {setTeam}/>
<Customer team= {team}/>
</div>




</StyledApp>



  );
}

export default App;
