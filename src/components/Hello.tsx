import * as React from "react";
import { useParams } from 'react-router-dom';
import { Helmet } from "react-helmet-async";

interface Props {
    name: string;
}

export default ({ name }: Props) => {
    return (
        <React.Fragment>
            <Helmet>
                <title>{name} Page</title>
            </Helmet>
            <h1>Hello {name}</h1>
        </React.Fragment>
    )
}
