import { ChangeEvent, useState } from "react";

// <T> is the type of the form data,
// e.g. { name: string, age: number }
export const useForm = <T>(initState: T ) => {
    const [formData, setFormData] = useState(initState);

    // event type React.ChangeEvent.
    const onChange = (event:ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    // reset the form to the initial state
    const resetForm = () => {
        // Spread operator to copy the object and not reference it.
        setFormData({...initState});
    }

    // Is the email valid?
    const isValidEmail = ( email: string ) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    return {
        ...formData,
        // properties
        formData,
        // methods
        onChange,
        resetForm,
        isValidEmail
    }
}