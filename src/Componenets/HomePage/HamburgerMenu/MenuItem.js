import React from 'react';

function MenuItem(props) {

    let [hoverState, setHoverState] = false;

    function handleHover(){
        this.setState({hover:!this.state.hover})
    }


    return (
        <div>

        </div>
    );
}

export default MenuItem;