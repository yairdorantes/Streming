import { Toaster } from "react-hot-toast";
import MovieContainer from "./components/MovieContainer";

function App() {
  return (
    <>
      <div className="">
        <MovieContainer />
        <Toaster />
      </div>
    </>
  );
}

export default App;
