import React from "react";

function header({children}) {
    return(
        <header>
            <h1>{children}</h1>
        </header>
    );
}

export default header;