import React from 'react';
import './Header.css'
import {ReactComponent as Logo} from './Header.svg';

class Header extends React.Component {
    constructor({}) {
        super()
    }

    render = () => {
        return (
            <div className='Header'>
                <div id="LeftHeader">
                    <Logo/>
                    <p>
                        IIITS Student Mascot
                    </p>
                    </div>
                    <div id="RightHeader">
                    <p>
                        something
                    </p>
                </div>
            </div>
        )
    } 
}

export default Header