import React from 'react';
import { connect } from 'react-redux';

class Screen extends React.Component{
    render(){
        return (
            <React.Fragment>
                <div className="row">
                    <div className="screen">
                        {(!this.props.screen)?'0':this.props.screen}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        screen: state.calculator.screen
    }
}

export default connect(mapStateToProps)(Screen);
