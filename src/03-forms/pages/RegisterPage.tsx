import React from 'react'
import '../styles/styles.css';
import { useState, ChangeEvent, FormEvent } from 'react';

export default function RegisterPage() {

    const [registerData, setRegisterData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const { name, email, password, confirmPassword } = registerData;

    // event type React.ChangeEvent.
    const onChange = (event:ChangeEvent<HTMLInputElement>) => {
        setRegisterData({ ...registerData, [event.target.name]: event.target.value });
    }

    // event type React.FormEvent.
    const onSubmit = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(registerData);
    }

    return (
        <div>
            <h1>RegisterPage</h1>

            <form noValidate onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder='name'
                    name='name'
                    value={name}
                    onChange={onChange}
                />

                <input
                    type="email"
                    placeholder='email'
                    name='email'
                    value={email}
                    onChange={onChange}
                />

                <input
                    type="password"
                    placeholder='password'
                    name='password'
                    value={password}
                    onChange={onChange}
                />

                <input
                    type="password"
                    placeholder='confirm password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={ (ev) => onChange(ev)}
                />

                <button type="submit">Register</button>


            </form>

        </div>
    )
}
