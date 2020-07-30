import React, { Fragment } from 'react';
import Screen from '../container/screen';
import ButtonList from '../container/buttonList';

class App extends React.Component{
    render(){
        return(
            <Fragment>
                <div className="row">
                    <div className="col-sm-8">
                        <Screen />
                    </div>
                    <div className="col-sm-8">
                        <ButtonList />
                    </div>
                </div>
            </Fragment>
        )
    }
}


export default App;
