import React, { Component } from 'react';
import './App.css';

class App extends Component {
         
    constructor(props){
        super(props);
        this.state = {
            products : [
            {
                id : 1,
                name : 'Apple Iphone 6 plus 16GB',
                price : 15000000,
                image :'https://bachlongmobile.com/media/catalog/product/cache/2/image/040ec09b1e35df139433887a97daa66f/6/0/600_ip6_gold_800x800_1_3.jpg',
                status : true 
            },      
            {
                id : 2,
                name : 'Samsung Galaxy S7',
                price : 12000000,
                image : 'https://cdn.tgdd.vn/Products/Images/42/75180/samsung-galaxy-s7-edge-blue-coral-edition-400x460-400x460.png',
                status : true
            },
            {
                id : 3,
                name : 'Oppo F1s',
                price : 7000000,
                image : 'https://cdn.fptshop.com.vn/Uploads/Originals/2017/2/9/636222506137676408_f1s-2.jpg',
                status : true
            }
            ],
            isActive: true
        };
        //this.onSetState=this.onSetState.bind(this);
    }
    onSetState=() => {
        this.setState({
            isActive : !this.state.isActive
        });
    }
    render(){ 
            let elements = this.state.products.map((product, index) => {
                let result = '';
                if (product.status){
                     result=  <tr key={index}>
                                    <td>{index}</td>
                                    <td>{product.name}</td>
                                    <td>
                                        <span className="label label-success">{product.price} VND</span>
                                     </td>
                                </tr>
                      
                }
                return result;
            });  
        return ( 
            <div >
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="">Trang chủ</a>
                        <ul className="nav navbar-nav">
                            <li className="active">
                                <a href="">Sản phẩm</a>
                            </li>
                            <li>
                                <a href="" >About</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <div classname="row">
                            <table className="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th>Sản phẩm</th>
                                        <th>Giá</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {elements}
                                </tbody>
                            </table>
                            <button type="button" class="btn btn-warning" onClick={this.onSetState}>
                                Active : {this.state.isActive === true ? 'true' : 'false'}
                            </button>
                        </div>
                    </div>
                </div>
             </div>
        );
     }
}

export default App;