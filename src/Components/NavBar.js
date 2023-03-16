import { useState } from 'react';


export function NavBar({valor}) {

    const [ejemplo, setEjemplo] = useState('');

    return (
        <div>
            <input placeholder='La operacion va aca'></input>
        </div>
    );
}



