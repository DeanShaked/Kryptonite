import { useEffect } from "react";
import { Navbar, Welcome, Footer, Services, Transactions } from "./components";
import { useDispatch } from "react-redux";
import { sendHttp } from "./redux/actions/accountActions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sendHttp());
  }, []);

  return (
    <div className="App">
      <div className="min-h-screen gradient-bg-welcome">
        <Navbar />
        <Welcome />

        <Services />
        <Transactions />
        <Footer />
      </div>
    </div>
  );
};

export default App;
