import React, { Component } from 'react';

class Favorite extends Component {
    render() {
        const {name, title, image} = this.props
        return (
        <div className="col-3 m-1 border">
            <img src={image} alt= {image} className="img-fluid"/>
            <h4>
            {name} 
            </h4>
            <p>
            {title} 
            </p>
        </div>
        );
    }
}

export default Favorite;