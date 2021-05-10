import * as React from 'react';
import './EXSecondView.css';
import {Link} from 'react-router-dom';

class EXSecondView extends React.Component{

    render() {
        return(
            <div className={'second-view-container'}>
                <h1>Welcome to the second view!</h1>
                <h2>Well done!</h2>
                <h2>
                    <Link to={'/Home'}>
                        Volver a vista Principal
                    </Link>
                </h2>
            </div>
        )
    }

}

export default EXSecondView;
