// Lifecycle

// Class component with Lyfecycle

class Product extends React.Component {

    constructor( ) {
            console.log('constructor');
        }

        render( ) {
            console.log('render');
            return (
                <div className="Box">
                    <h1>Apple</h1>
                    <p>Price: 100</p>
                </div>
            );
        }

        componentDidMount( ) {
            console.log('componentDidMount');
        }
        
        componentDidUpdate( ) {
            console.log('componentDidUpdate');
        }

        componentWillUnmount( ) {
            console.log('componentWillUnmont');
        }
 }

 const Form = ( props ) => {

    const [title, setTitle] = React.useState('');
    const [desc, setDesc] = React.useState('');

    const titleChangeHandler = ( event ) => {
        console.log(event.target.value);
        setTitle(event.target.value);
    }
    const descChangeHandler = ( event ) => {
        setDesc(event.target.value);
    }

    const submitButtonHandler = ( event ) => {
        console.log(`
            Title : ${title}
            Description : ${desc}`);
    }
    

    return (
        <div className="Box">
            <label>Blog Title</label><br />
            <input type="text" onChange={titleChangeHandler} /><br />
            <label>Blog Description</label><br />
            <textarea onChange={descChangeHandler} /><br />
            <button onClick={submitButtonHandler}>Add Blog</button>
        </div>
    );
}

const View1 = ( props ) => {

    React.useEffect( ( ) => {
        console.log('Runs everytime');
    } );
    React.useEffect( ( ) => {
        console.log('Runs only once!');
    }, [] );
    React.useEffect( ( ) => {
        console.log('Runs whens prop/state is updated!');
    }, [props.title] );
    React.useEffect( ( ) => {
        console.log('Runs whens prop/state is updated!');
    }, [props.desc] );

    React.useEffect( ( ) => {
        return ( ) => console.log('Runs whens components is unmounted');
    } );

    return (
        <div className="App">
            <div className="Box">
                <h1>Apple</h1>
                <p>Price: 100</p>
            </div>
        </div>
    );
}

 class App1 extends React.Component {

    constructor( ) {
        super( );
        console.log('constructor');
    }

    render( ) {
        console.log('render');
        return (
            <div className="App">
                <div className="Box">
                    <h1>Apple</h1>
                    <p>Price: 100</p>
                </div>
            </div>
        );
    }

    componentDidMount( ) {
        console.log('componentDidMount');
    }
    
    componentDidUpdate( ) {
        console.log('componentDidUpdate');
    }

    componentWillUnmount( ) {
        console.log('componentWillUnmont');
    }
 }

 class App extends React.Component {
     render( ) {
         return (
             <div className="App">
                 <View1 />
             </div>
         );
     }
 }

 ReactDOM.render( <App />, document.getElementById('root') );