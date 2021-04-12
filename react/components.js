// React Components

//Funcional components
// props = {name: 'Apple', price: '100', children: ''}

const Cart = ( props ) => {

    return (
        <div className="Box">
            <h1 onClick={() => props.clicked('function')}>{props.name}</h1>
            <p>Price: {props.price}</p>
        </div>
    );
}

// Class components
class Cart1 extends React.Component {

    render( ) {
        return (
            <div className="Box">
                <h1 onClick={() => this.props.clicked('class')}>{this.props.name}</h1>
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

//let app = (
//    <div>
//        <Cart name="Apple" price="100">
//            < Cart name="Orange" price="60" />
//        </Cart>
//    </div>
//);

class App extends React.Component {

    someMethod( args ) {
        console.log('App someMethod called!', args);
    }

    render( ) {
        return(
            <div className="App">
                <Cart name="Apple" price="100" clicked={this.someMethod} />
                <Cart1 name="Orange" price="60" clicked={this.someMethod} />
            </div>
        );
    }
}

ReactDOM.render( <App />, document.getElementById('root') );