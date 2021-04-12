// State in Fuctional / Class components

// Funcional component with state
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

// Class component with state
class Form1 extends React.Component {

    state = {title: '', desc: ''};

    titleChangeHandler = ( event ) => {
        this.setState( {...this.state, title: event.target.value} );
    }
    descChangeHandler = ( event ) => {
        this.setState( {...this.state, desc: event.target.value} );
    }

    submitButtonHandler = ( event ) => {
        console.log(`
            Title : ${this.state.title}
            Description : ${this.state.desc}`);
    }
    
    render( ) {
        return (
            <div className="Box">
                <label>Blog Title</label><br />
                <input type="text" onChange={this.titleChangeHandler} /><br />
                <label>Blog Description</label><br />
                <textarea onChange={this.descChangeHandler} /><br />
                <button onClick={this.submitButtonHandler}>Add Blog</button>
            </div>
        );
     }
    }

class App extends React.Component {

    render ( ) {
        return (
            <div className="App">
                <Form1 />
            </div>
        );
    }
}

ReactDOM.render( <App />, document.getElementById('root') );