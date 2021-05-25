import * as React from 'react';
import './Inside.css';
class Inside extends React.Component {

    state = {
        title: this.props.TITULO
    }

    updateState(titulo) {
        this.setState({title: titulo})
    }
    render() {
      return(
            <div>
                <h1>{this.state.title}</h1>

            </div>
        );
    }
}
console.log("Change for exercise 3, done");
export default Inside
