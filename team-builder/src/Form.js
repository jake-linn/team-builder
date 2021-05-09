import React, {useState} from 'react';
import styled from 'styled-components';

const StyledForm = styled.div `

label{

    font-size: 35px;
    color: organge
}

input, select{
background-color: gray;

}

button{
 font-size: 20px;

 background-color: cyan;


}


`
// creating the team Form/// 

const TeamForm = props => {

   



const defaultState = {name: '', email: '', role: ''}

const [newTeam, setNewTeam] = useState(defaultState);


const handleChange = event => {

setNewTeam({
    /// spread operator
    ...newTeam,
    [event.target.name]: event.target.value
})


}

const handleSubmit = event => {

event.preventDefault();
setNewTeam(defaultState)
props.setTeam([...props.team, newTeam])};




return (


<StyledForm onSubmit = {handleSubmit}  >

<label>Name </label>

<input
name = 'name'
type = 'text'
onChange = {handleChange}
value = {newTeam.name}
/> <br/>



<label> Role  </label><br/>

<select name ='role' onChange = 

{handleChange} value = {newTeam.role}> 

<option vlaue = ''> -- Please Choose a team-- </option>

<option value = 'Indianapolis Colts' > Indianapolis Colts </option>
<option value = 'Tenesse Titians' > Tenesse Titians </option>
<option value = 'Jacksonville Jaguars' > Jacksonville Jaguars </option>
<option value = 'Houston Texans' > Houston Texans </option>
<option value = 'Cinncinatti Bengals' > Cinncinatti Bengals </option>
<option value = 'Pittsburg Steelers' > Pittsburg Steelers </option>
<option value = 'Cleveland Browns' > Cleveland Browns </option>
<option value = 'Baltimore Ravens' > Baltimore Ravens </option>


</select> <br/>

<label>Email </label>
<input 
name = 'email'
type = 'email'
onChange = {handleChange}
value = {newTeam.email}
/> <br/>


<button type = 'submit'> Enroll Today! </button>


</StyledForm>




);

};

export default TeamForm