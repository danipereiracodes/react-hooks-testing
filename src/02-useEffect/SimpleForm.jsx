import { useState, useEffect } from "react";

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'dani',
        email: 'dani@google.com'
    });

    const { username, email } = formState

    const onUserNameChange = ({ target }) => {
        setFormState((formState) => ({
            ...formState,
            username: target.value

        }))
    }

    const onEmailChange = ({ target }) => {
        const { name, value } = target
        setFormState((formState) => ({
            ...formState,
            [name]: value
        }))
    }

    useEffect(() => {

        console.log('formState called!');


    }, [formState]);

    useEffect(() => {

        console.log('effect called!');

    }, []);



    return (
        <>
            <h1>Form</h1>
            <hr />

            <input type="text"
                name="username"
                className="form-control"
                placeholder="username"
                value={username}
                onChange={onUserNameChange}
            />

            <input type="email"
                name="email"
                className="form-control mt-3"
                placeholder="dani@whatever.com"
                value={email}
                onChange={onEmailChange}
            />
        </>
    )
}

export default SimpleForm