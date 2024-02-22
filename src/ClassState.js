import React from 'react'


const SECURITY_CODE = "123";

class ClassState extends React.Component {

    constructor(props){

        super(props);

        this.state = {
            value: "",
            error: false,
            loading:false,
        }
    }

    componentDidUpdate(){
        if (this.state.loading) {
            setTimeout(() => {

                if (SECURITY_CODE === this.state.value) {
                    this.setState({error:false, loading:false});
                } else {
                    this.setState({error:true, loading:false})   
                }
            }, 2000);

        }
    }

    render() {
        return (
        <div>
            <h2>Eliminar {this.props.name}</h2>
            <p>Por favor, escriba el código de seguridad.</p>

            {this.state.error && !this.state.loading &&(
                <p>ERROR: El codigo es incorrecto</p>
            )}


            {this.state.loading && (
                <p>Cargando...</p>
            )}


            <input  
                type='text'
                placeholder='código de seguridad'
                value={this.state.value}
                onChange={(event)=> {
                    this.setState({value: event.target.value})
                }}
            />

            <button
                onClick={() => this.setState({loading: true})}
                >Comprobar</button>
        </div>
        )
    }
}

export {ClassState}