import React, {useState} from 'react';
import styled from 'styled-components';


const StyledForm = styled.form`
label {
font-size: 35px;
color: pink;

}
input, select {

    background-color: bisque;
}
button{
font-size:22px;
background-color: cyan;

}

`





// creating the Team form

const TeamForm = props => {
const defaultState = {name: '', email: '', role:''}
const [newTeam, setNewTeam] = useState(defaultState);

const handleChange = event => {
    setNewTeam ({
        //?? questions?? 
        ...newTeam,
        [event.target.name]: event.target.value
    })
}
const handleSubmit = event => {
    event.preventDefault();
    setNewTeam(defaultState)
    props.setTeam([...props.team, newTeam]);

}
return(
<StyledForm onSubmit = {handleSubmit}>
<label>Name</label>
<input
name = 'name'
type = 'text'
onChange = {handleChange}
value = {newTeam.name}
/><br/>


<label>Favorite Kanye Album </label><br/>
<select name = 'role' onChange = {handleChange} value = {newTeam.role}> 
<option value = ''>-- Please chose an album--</option>
<option value = 'The Life of Pablo'> The Life of Pablo   </option>
<option value = 'Yeezus'> Yeezus</option>
<option value = 'My Beautiful Dark Twisted Fantasty'> My Beautiful Dark Twisted Fantasty</option>
<option value = '808/s and Heart Break'> 808's and Heat Break</option>
<option value = 'Graduation' > Graduation</option>
<option value = 'Late Registration'> Late Registration </option>
<option value = 'The College Dropout' > The College Dropout </option>


</select><br/>

<label>Email</label> <br/>
<input
name = 'email'
type = 'email'
onChange= {handleChange}
value = {newTeam.email}
/><br/>

<button type = 'submit'> Join the Kanye West Fan Club!  </button>

</StyledForm>

);


};

export default TeamForm