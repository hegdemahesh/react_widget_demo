import React from 'react';
import './widgetHomeComponent.css';
import hlogo from '../assets/HLogo.png';

class WidgetHomeComponent extends React.Component {
    
    render() {
        let divElement = 
        <div className="HomeWidgetBox">
            <div className="LogoBox">
                <img alt='hlogo'
                 src={hlogo} />
            </div>
            <div>Content 2</div>
        </div>;
        return divElement;
    }
}

export default WidgetHomeComponent;
