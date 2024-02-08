import OnlineChatPage from "./chat";
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import "./style.css"

function App() {
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
    <OnlineChatPage />

    </>
  );
}

export default App;
