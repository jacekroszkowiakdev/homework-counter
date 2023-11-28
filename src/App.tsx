import { FnCounter } from "./components/functionalCounter/functionalCounter";
import { ClassCounter } from "./components/classCounter/classCounter";
import "./App.css";

function App() {
    return (
        <>
            <FnCounter />
            <ClassCounter classCount={0} />
        </>
    );
}

export default App;
