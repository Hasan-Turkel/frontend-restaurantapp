import AppRouter from "./router/AppRouter";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <AppRouter />
      <ToastContainer />
    </>
  );
};

export default App;
