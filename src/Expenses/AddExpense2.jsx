import React from 'react'
import AppContext from '../AppContext'

import { FormInput } from "shards-react";
import { Button } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import { FormSelect } from "shards-react";
import { Typography } from 'antd';
import {
    InputGroup,
    InputGroupText,
    InputGroupAddon,
    FormCheckbox
  } from "shards-react";

const { Title } = Typography;

const styles = {
    padding: '20px',
}

const AddExpense2 = () => {
    const ctx = React.useContext(AppContext);

    return (
        <div style={styles}>
            <Title style= {{textAlign: 'center'}}level = {2}>Add Expenses</Title>
            <Title level = {4}>Description</Title>
            <FormInput placeholder='Description'/>
            <br/>
            <Title level = {4}>Payed by</Title>
            <FormSelect style={{ width: '100%' }}>
                {ctx.people.map((person, index) => (
                    <option key={index}>{person}</option>
                ))}
            </FormSelect>
            <br/>
            <br/>
            <Title level = {4}>Amount</Title>
            <InputGroup>
            <InputGroupAddon type="prepend">
                <InputGroupText>$</InputGroupText>
            </InputGroupAddon>
            <FormInput placeholder="Amount"/>
            </InputGroup>
            <br/>
            <Title level = {4}>For who?</Title>
            {ctx.people.map((person, index) => (
                <div>
                    <FormCheckbox key={index}>{person}</FormCheckbox>
                </div>
            ))}
            <br/>
            <Button style={{ width: '100%' }}>Add Expense</Button>

        </div>
       
    )
}

export default AddExpense2;