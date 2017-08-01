import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

//import { Carousel,NavItem,Nav } from 'react-bootstrap';

class Home extends Component {
    render() {
        return (
            <div>
                首页   欢迎大家访问我的首页！！！
                <Button bsStyle="warning">Warning</Button>
                <Button bsStyle="info">首页</Button>      
            </div>
        );
    }
}

export default Home;