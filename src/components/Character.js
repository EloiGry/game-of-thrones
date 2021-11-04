import React, { Component } from 'react';

class Character extends Component {

    render() {
        const {name, title, image, click, showFavorites} = this.props
        return (
        <div className="col-3 m-1 border">
            <img src={image} alt= {image} className="img-fluid"/>
            <h4>
            {name} 
            </h4>
            <p>
            {title} 
            </p>
            <button className={`${showFavorites ? "btn btn-warning" : "btn btn-outline-warning"}`} onClick={()=> click(name)}>
                Favoris
            </button>
        </div>
        );
    }
}

export default Character;