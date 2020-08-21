import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import CloseIcon from '@material-ui/icons/Close';
import MinimizeIcon from '@material-ui/icons/Minimize';
import MaximizeIcon from '@material-ui/icons/Fullscreen';
import WidgetHomeComponent from './widgetHomeComponent';
import WidgetWelcomeComponent from './WidgetWelcomeComponent';
import WidgetGoogleSignInComponent from './WidgetGoogleSignInComponent';
import './widgetContainer.css';

export default class WidgetContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { pageState: 1 };
        this.connectClick = this.connectClick.bind(this);
        this.signInClicked = this.signInClicked.bind(this);
        this.closeClick = this.closeClick.bind(this);
    }

    connectClick(){
        this.setState({ pageState: 2 } );
    }

    signInClicked() {
        this.setState({ pageState: 3 } );
    }

    closeClick() {
        this.setState({ pageState: 2 } );
    }
    render() {
        let widgetElement;
        if( this.state.pageState === 1 ) {
            widgetElement = <WidgetHomeComponent connectClick={this.connectClick}/>
        }
        else if( this.state.pageState === 2){
            widgetElement = <WidgetWelcomeComponent signInClicked={this.signInClicked}></WidgetWelcomeComponent>
        }
        else {
            widgetElement = <WidgetGoogleSignInComponent closeClick={this.closeClick}></WidgetGoogleSignInComponent>
        }
        let widget =
            <div className="widgetContainer">
                <Card className="widgetBody">
                    {widgetElement}
                </Card>
                <div className="spacer1">

                </div>
                <div className="widgetControls">
                    <Fab className="fabIcons" color="primary" aria-label="maximize">
                        <MaximizeIcon />
                    </Fab>
                    <Fab className="fabIcons" color="primary" aria-label="minimize">
                        <MinimizeIcon />
                    </Fab>
                    <div className='spacerh'></div>
                    <Fab className="fabIcons" color="primary" aria-label="add">
                        <CloseIcon />
                    </Fab>
                    
                    
                </div>
            </div>;
        return widget;
    }
    
}