import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  //const expenseTitle = 'Automobil';
  //const expenseAmount = '2599';         //Hardcoded varijable bez korištenja propsa

  //ExpenseDate buduci da treba dohvatiti podatke van ExpenseItem-a trebamo opet neku varijablu date u koju pohranimo props.date, na taj način opet preko propsa prosljedivamo
  // podatke dalje
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />       
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
