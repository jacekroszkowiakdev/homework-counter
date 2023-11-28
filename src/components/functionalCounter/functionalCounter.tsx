import { useState } from "react";

export const FnCounter: React.FC = () => {
    const [countFn, setCount] = useState(0);
    const handleIncrement = () => {
        setCount((countFn) => ++countFn);
    };

    const handleDecrement = () => {
        setCount((countFn) => --countFn);
    };

    return (
        <>
            <h2>Functional Counter:</h2>
            <div>{countFn}</div>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
        </>
    );
};
