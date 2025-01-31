// import React from "react";
import { Fragment } from "react";

function ExplicitEx() {
    return (
        // <React.Fragment>
        //     <h1>Hello</h1>
        //     <p>This is an explicit React Fragment example.</p>
        // </React.Fragment>
        <Fragment>
            <h1>Hello</h1>
            <p>This is an explicit React Fragment example.</p>
        </Fragment>
    );
}

export default ExplicitEx;