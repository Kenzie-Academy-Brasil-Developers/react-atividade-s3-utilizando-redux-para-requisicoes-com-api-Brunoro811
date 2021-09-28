import "./App.css";
import Digimon from "./Components/Digimon";
import Seach from "./Components/Seach";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router";
import Navbar from "./Components/Navbar";
import DigimonList from "./Components/DigimonList";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  const { status, digimon } = useSelector((state) => state.digimon);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Switch>
        <Route exact path="/">
          <div className="App App-header">
            <Navbar />
            <p>Bem vindo</p>
            <DigimonList />
          </div>
        </Route>
        <Route path="/Seach">
          <div className="App App-header">
            <Navbar />
            <Seach />
            {status && <Digimon />}
          </div>
        </Route>
      </Switch>
    </>
  );
}

export default App;
