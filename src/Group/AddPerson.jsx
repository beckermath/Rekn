import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AppContext from '../AppContext'
import { Formik, Field, Form } from 'formik';
import { FormInput } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import * as Yup from 'yup';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '100%',
      },
    },
    field: {
      height: 30,
      width: '99%',
    }
}));

const AddPerson = () => {
    const classes = useStyles();
    const ctx = React.useContext(AppContext)

    return (
      <Formik 
        initialValues={{
          name: ''
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string()
              .required('enter a name first'),
        })}
        onSubmit={fields => {
          ctx.setPeople([...ctx.people, fields.name])
          console.log(ctx.people)
        }}
        render={() => (
          <Form>
              <div className = {classes.root}>
                <br/>
                <Typography variant = 'h6'>Add Person</Typography>
                <FormInput placeholder='Name'/>
                <Field className = {classes.field} name = 'name' type ='text' color = 'secondary' id="standard-basic"/><br/><br/>
                <Button  color ='secondary' variant = 'contained' type ='submit'>Add Person</Button>
              </div>
          </Form>
        )}
      />
    )
}

export default AddPerson;