import React from 'react'


const SECURITY_CODE = "paradigma";


function UseState({name}) {

    const [value, setValue] = React.useState("")
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(false)

    
    React.useEffect(() => {
        if (loading) {
            setTimeout(() => {
                console.log("Inicio Validacion");

                if (value === SECURITY_CODE) {
                    setLoading(false)
                } else {
                    setLoading(false)
                    setError(true)
                }

                console.log("Fin Validacion");
            }, 2000);
        }
    }, [loading]);
    

    return (
        <div>
            <h2>Eliminar {name}</h2>
            <p>Por favor, escriba el código de seguridad.</p>

            {error && (
                <p>ERROR: El codigo es incorrecto</p>
            )}

            {loading && (
                <p>Cargando....</p>
            )}

            <input  
                type='text'
                placeholder='código de seguridad'
                value={value}
                onChange={(event)=> {
                    setValue(event.target.value)
                }}/>

            <button
                onClick={() => setLoading(true)}
            >Comprobar</button>
        </div>
    )
}

export {UseState};