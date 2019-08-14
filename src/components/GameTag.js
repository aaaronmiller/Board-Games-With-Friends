import React from 'react';
import { MDBBadge, MDBContainer } from "mdbreact";

export default function GameTag(props) {
    return (
        <div>
            <MDBBadge pill color="success">{props.name}</MDBBadge>
        </div>
    )
}
