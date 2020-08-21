import React from 'react';
import WidgetHomeComponent from './widgetHomeComponent';
import WidgetWelcomeComponent from './WidgetWelcomeComponent';
import WidgetGoogleSignInComponent from './WidgetGoogleSignInComponent';

export default class WidgetContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { pageState: 1 };
    }
    render() {
        let widgetElement;
        if( this.state.pageState === 1 ) {
            widgetElement = <WidgetHomeComponent/>
        }
        else if( this.state.pageState === 2){
            widgetElement = <WidgetWelcomeComponent></WidgetWelcomeComponent>
        }
        else {
            widgetElement = <WidgetGoogleSignInComponent></WidgetGoogleSignInComponent>
        }
        let widget =
            <div className="widgetContainer">
                <div className="widgetBody">
                    {widgetElement}
                </div>
                <div className="widgetControls"></div>
            </div>;
        return widget;
    }
    
}