import React, {useContext} from "react";
import {
  List as MUIList,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  ListItemSecondaryAction,
  IconButton,
  Slide,
} from "@material-ui/core";
import { Delete, MoneyOff } from "@material-ui/icons";
import useStyles from "./styles";
import {ExpenseTrackerContent} from '../../../Context/Context'
export default function List() {
  const classes = useStyles();
  const {deleteTransaction,transactions}= useContext(ExpenseTrackerContent) 
  console.log(typeof deleteTransaction)
  //console.log(globalState)
  // const tansactions = [
  //   {
  //     id: 1,
  //     type: "Income",
  //     category: "salary",
  //     amount:50,
  //     date:new Date(),
  //   },
  //   {
  //     id: 2,
  //     type: "Expense",
  //     category: "salary",
  //     amount:50,
  //     date:new Date(),
  //   },
  //   {
  //     id: 3,
  //     type: "Income",
  //     category: "salary",
  //     amount:50,
  //     date:new Date(),
  //   },
  // ];
  return (
    <MUIList dense={false} className={classes.list}>
      {transactions.map((transaction) => (
        <Slide
          direction="down"
          in
          mountOnEnter
          unMountOnExit
          key={transaction.id}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar
                className={
                  transaction.type === "Income"
                    ? classes.avatarIncome
                    : classes.avatarExpense
                }
              >
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={transaction.category} secondary={`${transaction.amount}-${transaction.date}`} />
            <ListItemSecondaryAction>
                <IconButton edge='end' aria-label='delete' onClick={()=>deleteTransaction(transaction.id)}>
                  <Delete/>
                </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  );
}
