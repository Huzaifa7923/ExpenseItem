import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expenses = [
    {
      id: "e1",
      date: new Date(2021, 5, 12),
      title: "first title",
      amount: 5,
    },
    {
      id: "e2",
      date: new Date(2022, 3, 9),
      title: "second title",
      amount: 10,
    },
    {
      id: "e3",
      date: new Date(2023, 6, 1),
      title: "third title",
      amount: 15,
    },
  ];
  return (
    <div>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
