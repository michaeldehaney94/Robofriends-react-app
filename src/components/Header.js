import React, {Component} from "react";

class Header extends Component {
    //when the web app loads, the header will render once because it 
    //returned 'false'.
    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    render() {
        return (
            <div>
                <h1 className="f1">RoboFriends</h1>
            </div>
        );
    }
}

export default Header;