import * as React from "react";
import { useParams } from 'react-router-dom';
import { Helmet, HelmetProvider } from "react-helmet-async";

interface Props {
    name: string;
}

export default ({ name }: Props) => {
    let { id } = useParams();
    console.log(id)

    return (
        <React.Fragment>
            <Helmet>
                <title>{name}{id} Page</title>
            </Helmet>
            <h1>Hello {name} {id}!</h1>
        </React.Fragment>
    )
}
