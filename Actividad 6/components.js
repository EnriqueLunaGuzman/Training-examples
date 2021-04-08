const Buttons = ( props ) => {

    return (
        <div className="Button">
            <h1>{props.name}</h1>
            <p>{props.children}</p>
        </div>
    );
}

class Buttons1 extends React.Component {

    render( ) {
        return (
            <div className="Button">
                <h1>{this.props.name}</h1>
            </div>
        );
    }
}

let app = (
    <div>
        <Buttons name="Search" />
    </div>
);

// let btn = document.querySelector('root');
// btn.addEventListener('click', () => btn.name = "Close")


ReactDOM.render( app, document.getElementById('root') );

