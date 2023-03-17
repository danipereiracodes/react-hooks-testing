import { useForm } from "../hooks";

const FormWithCustomHook = () => {

    const formData = {
        username: '',
        email: '',
        password: ''
    }

    const {
        onResetForm,
        onInputChange,
        formState: { username, email, password }

    }
        = useForm(formData)


    return (
        <>
            <h1>Form</h1>
            <hr />

            <input type="text"
                name="username"
                className="form-control"
                placeholder="username"
                value={username}
                onChange={onInputChange}
            />

            <input type="email"
                name="email"
                className="form-control mt-3"
                placeholder="dani@whatever.com"
                value={email}
                onChange={onInputChange}
            />

            <input type="password"
                name="password"
                className="form-control mt-3"
                value={password}
                onChange={onInputChange}
                placeholder="password"
            />

            <button className="mt-2" onClick={onResetForm}>
                reset
            </button>
        </>
    )
}

export default FormWithCustomHook