import React from 'react'

import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

import AppContext from '../AppContext'

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { getPayIndex, getMooch } from '../expense.utilities';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '100%',
      },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    field: {
        height: 30,
        width: '99%',
      }
}));

const AddExpense = () => {
    const classes = useStyles();
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
                    <div className={classes.root}>
                        <br/>
                        <label htmlFor="desc">Description</label><br/>
                        <Field className = {classes.field} name = 'desc' type ='text' color = 'secondary' id="standard-basic"/>
                        <br/><br/>
                        <label htmlFor="payedBy">Payed By</label><br/>
                        <Field className = {classes.field} as="select" name="payedBy">
                            <option></option>
                            {ctx.people.map((person, index) =>(
                                <option key ={index} value = {person}>{person}</option>
                            ))}
                        </Field>
                        <br/><br/>
                        
                        <label htmlFor="amount">Amount</label><br/>
                        <Field className = {classes.field} name = 'amount' type ='number' color = 'secondary' id="standard-basic"/>
                        <br/><br/>
                        <label htmlFor="forWho">For Who?</label>
                        {ctx.people.map((person, index) => (
                            <div>
                                <span>{person} </span>
                                <Field type ='checkbox' key = {index} label= {person} value = {person} name = 'forWho'/>
                            </div>
                            
                        ))}
                        
                        <Button  color ='secondary' variant = 'contained' type ='submit'>Add Expense</Button>
                    </div>
                </Form>
            )}
            />
    )
}

export default AddExpense;