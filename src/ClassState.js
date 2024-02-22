import React from 'react'

class ClassState extends React.Component {

    constructor(props){

        super(props);

        this.state = {
            error: false,
            loading:false,
        }
    }

    componentDidUpdate(){
        console.log("Actu");
        if (this.state.loading) {
            setTimeout(() => {
                console.log("Hola");
                this.setState({loading:false})
            }, 3000);
        }
    }

    render() {
        return (
        <div>
            <h2>Eliminar {this.props.name}</h2>
            <p>Por favor, escriba el código de seguridad.</p>

            {this.state.error && (
                <p>ERROR: El codigo es incorrecto</p>
            )}


            {this.state.loading && (
                <p>Cargando...</p>
            )}


            <input type='text' placeholder='código de seguridad'/>
            <button
                onClick={() => this.setState({loading: true})}
                >Comprobar</button>
        </div>
        )
    }
}

export {ClassState}