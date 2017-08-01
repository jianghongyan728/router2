import React, { Component } from 'react';
import { Button,ButtonToolbar } from 'react-bootstrap';

const buttonsInstance = (
  <div>
    <ButtonToolbar>
      <Button bsStyle="primary" bsSize="large">Large button</Button>
      <Button bsSize="large">Large button</Button>
    </ButtonToolbar>
  </div>
);
class About extends Component {
    render() {
        return (
            <div>
                关于我们
                {buttonsInstance}
            </div>
        );
    }
}

export default About;