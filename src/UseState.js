import React, { Fragment } from 'react'


const SECURITY_CODE = "123";


function UseState({name}) {

    const [ state, setState ] = React.useState({
        value: '',
        error: false,
        loading: false,
        deleted: false,
        confirmed: false
    });


    const onConfirm = () => {
        setState({
            ...state,
            error:false,
            loading: false,
            confirmed: true
        })
    }

    const onError = () => {
        setState({
            ...state,
            error:true,
            loading: false
        })
    }

    const onWrite = (newValue) => {
        setState({
            ...state,
            value: newValue
        })
    }

    const onCheck = () => {
        setState({
            ...state,
            loading: true
            })
    }

    const onDelete = () => {
        setState({
            ...state,
            deleted:true,
        })
    };

    const onReset = () => {
        setState({
            ...state,
            confirmed:false,
            deleted: false,
            value: ""
        })
    }



    React.useEffect(() => {
        if (state.loading) {
            setTimeout(() => {
                if (state.value === SECURITY_CODE) {
                    onConfirm()
                } else {
                    onError()
                }
            }, 2000);
        }
    }, [state.loading]);
    

    if (!state.deleted && !state.confirmed) {
        return (
            <div>
                <h2>Eliminar {name}</h2>
                <p>Por favor, escriba el código de seguridad.</p>

                {state.error && !state.loading && (
                    <p>ERROR: El codigo es incorrecto</p>
                )}

                {state.loading && (
                    <p>Cargando....</p>
                )}

                <input  
                    type='text'
                    placeholder='código de seguridad'
                    value={state.value}
                    onChange={(event)=> {
                        onWrite(event.target.value)
                    }}
                />

                <button
                    onClick={() => 
                        onCheck()
                    }
                >Comprobar</button>
            </div>
        )    
    } else if (state.confirmed && !state.deleted) {
        return (
        <React.Fragment>
            <p>Estas seguro de eliminar?</p>
            <button 
                onClick={ () => {
                    onDelete();
                }}
            > Si, eliminar</button>
            <button
                onClick={ () => {
                    onReset()
                }}
            > No, Volver</button>
        </React.Fragment>
        )

    } else {
        return (
            <React.Fragment>
                <p>Eliminado con exito</p>
                <button
                onClick={ () => {
                    setState({
                        ...state,
                        confirmed:false,
                        deleted:false,
                        value: ""
                    })
                }}
            > Resetear</button>
            </React.Fragment>
        )
    }


}

export {UseState};