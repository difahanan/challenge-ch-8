import React from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

import swaggerJson from './Swagger'

function SwaggerPage() {
    return(
        <>
            <SwaggerUI spec={swaggerJson()}/>
        </>
    )
};

export default SwaggerPage;