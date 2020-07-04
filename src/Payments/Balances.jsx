import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AppContext from '../AppContext'
import { getBalances } from '../calculator';

const Balances = () => {
    const ctx = React.useContext(AppContext);

    const [balances, setBalances] = React.useState([]);

    React.useLayoutEffect(() => {
        setBalances(getBalances(ctx.people, ctx.expenses))
    }, [ctx.people, ctx.expenses])

    console.log(getBalances(ctx.people, ctx.expenses))

    return (
        <List>
            {balances.map((balance, index) => (
                <ListItem key = {index} value={balance}>
                    <ListItemText>{ctx.people[index]} : ${balance.toFixed(2)}</ListItemText>
                </ListItem>
            ))}  
        </List> 
    )
}

export default Balances;