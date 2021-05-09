import React from 'react'
import styled from 'styled-components'

const StyledCustomers = styled.div `

display: flex;
flex-direction: row;
text-align: center;
border: 3px black solid;
margin-tip: 10px;


`

const Customers = props => {

    return(

<div className = 'customer-roster'>

{props.team.map((customer, index) => (
    <div className = 'customer' key = {[index]}> 
    <StyledCustomers className = 'customer'>
<h2> {customer.name}  </h2>
<p> {customer.role}    </p>
<p> {customer.email}    </p>
</StyledCustomers>
    </div>

))}

</div>





    );



};


export default Customers