import React from 'react';
import Card from '@material-ui/core/Card';
import WidgetHomeComponent from './widgetHomeComponent';
import WidgetWelcomeComponent from './WidgetWelcomeComponent';
import WidgetGoogleSignInComponent from './WidgetGoogleSignInComponent';
import './widgetContainer.css';

export default class WidgetContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { pageState: 1 };
        this.connectClick = this.connectClick.bind(this);
    }

    connectClick(){
        this.setState({ pageState: 2 } );
    }
    render() {
        let widgetElement;
        if( this.state.pageState === 1 ) {
            widgetElement = <WidgetHomeComponent connectClick={this.connectClick}/>
        }
        else if( this.state.pageState === 2){
            widgetElement = <WidgetWelcomeComponent></WidgetWelcomeComponent>
        }
        else {
            widgetElement = <WidgetGoogleSignInComponent></WidgetGoogleSignInComponent>
        }
        let widget =
            <div className="widgetContainer">
                <Card className="widgetBody">
                    {widgetElement}
                </Card>
                <div className="widgetControls"></div>
            </div>;
        return widget;
    }
    
}