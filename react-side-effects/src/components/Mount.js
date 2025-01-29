import React, { useEffect } from "react";

function Mount() {

    useEffect(() => {
        console.log('The "Mount" component has been mounted!');

        return () => {
            console.log('The "Mount" component has been unmounted!');
        };
    }, []); // Empty dependency array -> Runs once on mount

    return (
        <div>
            <h2>Mounted Component!</h2>
        </div>
    );
}

export default Mount;