import "./ExpenseDate.css";

//razlika ExpenseDate-a i ExpenseItem-a je ta što smo u Date-u imali ispisati vrijeme što se događa unutar same komponente,
//a u ExpenseItem-u dohvaćamo podatke iz vana pa nam je potrebno samo postaviti props-eve
function ExpenseDate(props) {
  // ove žute funkcije su ugrađene za rad s vremenom (Guglao sam ih)
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { month: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}

export default ExpenseDate;
