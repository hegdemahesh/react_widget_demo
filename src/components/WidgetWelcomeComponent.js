import React from 'react';
import bg from '../assets/bgImage01.png';
import './WidgetWelcomeComponent.css';
import HLogoSmall from '../assets/HLogo_small.png';
import handIcon from '../assets/handIcon.png';


export default class WidgetWelcomeComponent extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        let widgetElement = 
        <div className='widgetWelcomeHolder'>
            <div className='widgetBg'>
                <img className="bgImage" src={bg} />
            </div>
            <div className="spacerv"></div>
            <div className="welcomeWidgetContent">
                <div className="contentItems">
                    <img src={HLogoSmall} alt='smalHlogo' />
                </div>
                <div className="contentItems" >
                    <div className="headerTexts">
                        <h3>Hi there</h3>
                        <img src={handIcon} alt="wave icon" />
                    </div>
                    <p className="whiteText">
                        Ask us anything, or share your feedback.
                    </p>
                </div>
            </div>
        </div>;
        return widgetElement;
    }
}