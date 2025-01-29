import React, { useState, useEffect } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    // Effect 1: Start a time when the component mounts
    useEffect(() => {
        const interval = setInterval(() => {
            console.log('Counter has started...component mounted')
            setCount(prev => prev + 1);
        }, 1000);

        // Cleanup function to stop the interval when component unmounts
        return () => {
            clearInterval(interval);
            console.log('Counter has stopped! - component unmounted')
        };
    }, []); // Runs only once when the component mounts

    // Effect 2: Update the document title whenever count changes
    useEffect(() => {
        document.title = `Count: ${count}`;
        // console.log('Count has been changed');
    }, [count]); // Runs only when count changes

    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}

export default Counter;