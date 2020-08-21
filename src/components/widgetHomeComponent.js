import React from 'react';
import './widgetHomeComponent.css';
import hlogo from '../assets/HLogo.png';
import plusLogo from '../assets/plusLogo.png';
import otheLogo from '../assets/otheLogo.png';
import SelectableCard from './selectableCard';


class WidgetHomeComponent extends React.Component {
    
    render() {
        let divElement = 
        <div className="HomeWidgetBox">
            <div className="LogoBox">
                <img alt='hlogo'
                 src={hlogo} />
                 <img alt='pluslogo'
                 src={plusLogo} />
                 <img alt='otheLogo'
                 src={otheLogo} />
            </div>
            <div className="headerTextBox">
                <h4>Connect with Intercom</h4>
                <p>Choose the account you want to connect with</p>
            </div>
            <div>
                <SelectableCard></SelectableCard>
            </div>
        </div>;
        return divElement;
    }
}

export default WidgetHomeComponent;
