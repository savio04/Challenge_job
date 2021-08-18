import "../styles/global.scss";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { ActivityContextProvider } from "../context/ActivityContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ToastContainer autoClose={3000} />
      <ActivityContextProvider>
        <Component {...pageProps} />
      </ActivityContextProvider>
    </>
  );
}

export default MyApp;
