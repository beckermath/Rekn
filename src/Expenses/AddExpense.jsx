import React from 'react'
import AppContext from '../AppContext'
import * as Yup from 'yup';
import { Typography } from 'antd';
import { Formik, Field, Form } from 'formik';
import { FormInput } from "shards-react";
import { Button } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import { FormSelect } from "shards-react";
import {
    InputGroup,
    InputGroupText,
    InputGroupAddon,
    FormCheckbox
  } from "shards-react";

import { getPayIndex, getMooch } from '../expense.utilities';
const { Title } = Typography;

const styles = {
    padding: '20px',
}

const Input = ({field, form, ...props}) => {
    return <FormInput {...field} {...props} name='desc' placeholder='Description'/>
}

const InputSelect = ({field, form, ...props}) => {
    const ctx = React.useContext(AppContext);

    return (
        <FormSelect {...field} {...props} style={{ width: '100%' }}>
            {ctx.people.map((person, index) => (
                <option key={index}>{person}</option>
            ))}
        </FormSelect>
    )
}

const InputNum = ({field, form, ...props}) => {
    return (
        <InputGroup>
            <InputGroupAddon type="prepend">
                <InputGroupText>$</InputGroupText>
            </InputGroupAddon>
            <FormInput {...field} {...props} name = 'amount' placeholder="Amount"/>
        </InputGroup>
    )
}

const AddExpense2 = () => {
    const ctx = React.useContext(AppContext);

    return (
        <Formik
            initialValues={{
                desc: '',
                payedBy: '',
                amount: '',
                forWho: []
            }}
            validationSchema={Yup.object().shape({
                desc: Yup.string()
                    .required('provide a description'),
                payedBy: Yup.string()
                    .required('select who payed'),
                amount: Yup.number()
                    .required('provide an amount'),
            })}
            onSubmit={fields => {
                ctx.setExpenses([...ctx.expenses, [getPayIndex(fields, ctx.people), fields.amount, getMooch(fields, ctx.people)]])
                ctx.setExpensesDisplay([...ctx.expensesDisplay, fields.payedBy + " payed $" + fields.amount + " for " + fields.desc + " for " + fields.forWho.join(" and ")])
            }}
            render={() => (
                <Form>
                    <div style={styles}>
                        <Title style= {{textAlign: 'center'}}level = {2}>Add Expenses</Title>
                        <Title level = {4}>Description</Title>
                        <Field component = {Input} name = 'name'/>
                        <br/>
                        <Title level = {4}>Payed by</Title>
                        <Field component = {InputSelect} name = 'payedBy'/>
                        <br/>
                        <br/>
                        <Title level = {4}>Amount</Title>
                        <Field component = {InputNum} name = 'amount'/>
                        <br/>
                        <Title level = {4}>For who?</Title>
                        {ctx.people.map((person, index) => (
                            <div>
                                <span>{person} </span>
                                <Field type ='checkbox' key = {index} label= {person} value = {person} name = 'forWho'/>
                            </div>
                        ))}
                        <br/>
                        <Button style={{ width: '100%' }}>Add Expense</Button>
                    </div>
                </Form>
            )}
        />
    )
}

export default AddExpense2;