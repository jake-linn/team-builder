import React from 'react'
import styled from 'styled-components' 


const StyledEmpoyees = styled.div`
display: flex;
flex-direction: row;
text-align: center;
justify-content: space-around;
border: 2px black solid;
margin-top: 10px;



`


const Employees = props => {
return(

    <div className = 'employee-roster'>
        {props.team.map((employee, index) => (
            <div className= 'employee' key = {[index]}>
                <StyledEmpoyees className = 'employee'>
                    <h2> {employee.name} </h2>
                    <p>{employee.role} </p>
                    <p> {employee.email} </p>
                </StyledEmpoyees>
                </div>
        ))}
        </div>
        );
    };





export default Employees