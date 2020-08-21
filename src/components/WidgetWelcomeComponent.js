import React from 'react';
import bg from '../assets/bgImage01.png';
import './WidgetWelcomeComponent.css';


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
                <div className="contentItems">Logo here</div>
                <div className="contentItems" >Welcome Text Herecv
                    sdasdfadsfsadfas
                    asfasfasdfasdfds
                    asfsddfdfsfdasfdas
                    xccvxz zzvxccvcvzvczcxxxxxxxxxxxxxxxxxxxxxxxx</div>
            </div>
        </div>;
        return widgetElement;
    }
}