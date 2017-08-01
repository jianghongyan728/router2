import React, { Component } from 'react';
import {Link,Route} from 'react-router-dom';
import ProductDetail from './ProductDetail';


import { ListGroup,ListGroupItem } from 'react-bootstrap';
class Product extends Component {
    render() {
        let {url} = this.props.match;
        return (
            <div>
                <ListGroup>
                    <ListGroupItem bsStyle="success"><Link to={`${url}/1`}>电视</Link></ListGroupItem>
                    <ListGroupItem bsStyle="info"><Link to={`${url}/2`}>冰箱</Link></ListGroupItem>
                    <ListGroupItem bsStyle="warning"><Link to={`${url}/3`}>洗衣机</Link></ListGroupItem>
                    <ListGroupItem bsStyle="danger"><Link to={`${url}/4`}>电饭锅</Link></ListGroupItem>
                </ListGroup>

                <Route path={`${url}/:id`} component={ProductDetail}/>
            </div>
        );
    }
}

export default Product;