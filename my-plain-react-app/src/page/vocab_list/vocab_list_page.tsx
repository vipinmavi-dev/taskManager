import React, {useState, useCallback} from "react";

const VocablaryListPage = ()=>{
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        console.log("clicked");
    }, []);

    return (
        <>
        <button onClick={() => setCount(count + 1)}>
            Increment
        </button>
        <p>{count}</p>
        <Child onClick={handleClick} />
        </>
    );
}

const Child = React.memo(({ onClick }) => {

  console.log("Child Rendered");

  return <button onClick={onClick}>Click</button>;
});
export default VocablaryListPage;