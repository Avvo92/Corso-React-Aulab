import { useState } from "react"

export default function Form() {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [submittedData, setSubmittedData] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        if (name.trim() === "" || mail.trim() === "") return;
        setSubmittedData((prev) => [...prev, { name, mail }]);
    }

    return (
        <div id="form_wrapper">
            <form action="#" onSubmit={handleSubmit}>
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
            </form>

            {submittedData.map((item) => (
                <div className="submitted_card">
                    <h3>Dati inviati</h3>
                    <p>Nome: {item.name}</p>
                    <p>Mail: {item.mail}</p>
                </div>
            ))}
        </div>
    );
}