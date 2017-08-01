import React, { Component } from 'react';
import {Jumbotron,Button } from 'react-bootstrap';
const jumbotronInstance = (
  <Jumbotron>
    <h1>Hello, world!</h1>
    <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <p><Button bsStyle="primary">Learn more</Button></p>
  </Jumbotron>
);
class ProductDetail extends Component {
    render() {
        let products={
            "1":[
                {name:"电视1"},
                {name:"电视2"} 
            ],
            "2":[
                {name:"冰箱1"},
                {name:"冰箱2"} 
            ],
            "3":[
                {name:"洗衣机1"},
                {name:"洗衣机2"} 
            ],
            "4":[
                {name:"电饭锅1"},
                {name:"电饭锅2"} 
            ]
        };
        let arr = products[this.props.match.params.id];
        let divs = arr.map((item,i)=>{
            return <div key={i}>{item.name}</div>
        });
        return (
            <div>
                    {divs}
            </div>
        );
    }
}

export default ProductDetail;