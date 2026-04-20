import { useFormContext } from "./FormContext.jsx";

export default function Field() {
    const { name, mail, setName, setMail } = useFormContext();

    return (
        <>
            <label htmlFor="user_name"></label>
            <input
                id="user_name"
                type="text"
                name="user_name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="user_mail"></label>
            <input
                id="user_mail"
                type="text"
                name="user_mail"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
            />

            <button type="submit">Invio</button>
        </>
    );
}
