import { useState } from "react";
import { FormContext } from "./FormContext.jsx";
import Field from "./Field.jsx";

function FormRoot() {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [submittedData, setSubmittedData] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        if (name.trim() === "" || mail.trim() === "") return;
        setSubmittedData((prev) => [...prev, { name, mail }]);
    }

    const value = { name, mail, setName, setMail };

    return (
        <FormContext.Provider value={value}>
            <div id="form_wrapper">
                <form action="#" onSubmit={handleSubmit}>
                    <FormRoot.Field />
                </form>

                {submittedData.map((item, index) => (
                    <div className="submitted_card" key={index}>
                        <h3>Dati inviati</h3>
                        <p>Nome: {item.name}</p>
                        <p>Mail: {item.mail}</p>
                    </div>
                ))}
            </div>
        </FormContext.Provider>
    );
}

FormRoot.Field = Field;

export default FormRoot;
