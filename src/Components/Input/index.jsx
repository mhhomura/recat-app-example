import React from 'react';

import {
    Container,
    Label,
} from './styles';

const Input = ({ label, placeholder, value, setState, type, id }) => {
    return (
        <Container>
            <Label>
                <label htmlFor={id}>
                    {label}
                </label>
            </Label>
            <input type={type} placeholder={placeholder} id={id} onChange={(e) => setState(e.target.value)} value={value} />
        </Container>
    )
}

export default Input;