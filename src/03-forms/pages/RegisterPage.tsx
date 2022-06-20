import '../styles/styles.css';
import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';

export default function RegisterPage() {

    const {
        confirmPassword,
        email,
        formData,
        isValidEmail,
        name,
        onChange,
        password,
        resetForm,
    } = useForm({
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
    });

    // event type React.FormEvent.
    const onSubmit = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
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
                    className={ `${name.trim().length <= 0 && 'has-error'}` }
                />
                { name.trim().length <= 0 && <span>This Field is Mandatory</span> }

                <input
                    type="email"
                    placeholder='email'
                    name='email'
                    value={email}
                    onChange={onChange}
                    className={ `${ !isValidEmail(email) && 'has-error'}` }
                />
                { !isValidEmail(email) && <span>This Field is Invalid</span> }

                <input
                    type="password"
                    placeholder='password'
                    name='password'
                    value={password}
                    onChange={onChange}
                />

                { password.trim().length <= 0 && <span>This Field is Mandatory</span> }
                { password.trim().length < 6 && password.trim().length > 0 && <span> Password has to be with a minimum of 6 characters </span> }

                <input
                    type="password"
                    placeholder='confirm password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={ (ev) => onChange(ev)}
                />

                { confirmPassword.trim().length <= 0 && <span>This Field is Mandatory</span> }
                { confirmPassword.trim().length > 0 && password !== confirmPassword && <span>Passwords Match</span> }

                <button type="submit">Register</button>
                <button type="button" onClick={resetForm}>Reset Form</button>

            </form>

        </div>
    )
}
