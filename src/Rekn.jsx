import React from 'react'
import Group from './Group/Group'
import Expense from './Expenses/Expenses'
import TabPanel from './TabPanel'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Payments from './Payments/Payments';
import { makeStyles } from '@material-ui/core/styles';
import AppContext from './AppContext';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    content: {
      marginTop: 50
    }
}));

const Rekn = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const ctx = React.useContext(AppContext);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar posiition='fixed'>
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" variant='fullWidth'>
                <Tab label="Group"/>
                <Tab disabled = {ctx.people.length < 2} label="Expenses"/>
                <Tab disabled = {ctx.expenses.length === 0} label="Payments"/>
            </Tabs>
            </AppBar>
            <div className={classes.content}>
            <TabPanel value={value} index={0}>
                <Group/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Expense/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Payments/>
            </TabPanel>
            </div>
        </div>
    )
}

export default Rekn;