// React Components

//Funcional components
// props = {name: 'Apple', price: '100', children: ''}

const Cart = ( props ) => {

    return (
        <div className="Box">
            <h1>{props.name}</h1>
            <p>Price: {props.price}</p>
            <p>{props.children}</p>
        </div>
    );
}

// Class components
class Cart1 extends React.Component {

    render( ) {
        return (
            <div className="Box">
                <h1>{this.props.name}</h1>
                <p>Price: {this.props.price}</p>
            </div>
        );
    }
}

// let app = (
//    <div>
//        <Cart1 name="Apple" price="100" />
//        <Cart1 name="Orange" price="60" />
//    </div>
// );

let app = (
    <div>
        <Cart name="Apple" price="100">
            < Cart name="Orange" price="60" />
        </Cart>
    </div>
);

ReactDOM.render( app, document.getElementById('root') );