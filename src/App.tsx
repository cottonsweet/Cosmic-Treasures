import Router from "./pages/Router";
// CSS
import classes from "./App.module.sass";

const App = () => {
  return (
    <div className={classes["App"]}>
      <Router />
    </div>
  );
};

export default App;
