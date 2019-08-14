import React, { Component } from 'react'
import { MDBBadge } from "mdbreact"

export default class GameTag extends Component {
    delete = () => {
        if (this.props.removable)
        this.props.delete(this.props.index);
    }
    render() {
        return (
            <div>
                <MDBBadge pill color="red" onClick={this.delete}>{this.props.name}</MDBBadge>
            </div>
    )
    }
}
