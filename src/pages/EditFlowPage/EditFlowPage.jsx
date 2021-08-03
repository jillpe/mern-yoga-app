import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export default function EditFlowPage(props) {
    const location = useLocation();

    const [invalidForm, setValidForm] = useState(true);
    const [formData, setFormData] = useState(location.state.flow);

    const formRef = useRef();

    useEffect(() => {
        formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true)
    }, [formData]);

    const handleSubmit = (evt) => {
        evt.preventDefault()
        props.handleUpdateFlow(formData);
    }

    const handleChange = (evt) => {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        })
    }

    return (
        <>
            <h1>Edit Flow</h1>
            <form ref={formRef} onSubmit={handleSubmit}>
                <div>
                    <label>Flow Name:</label>
                    <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Category</label>
                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                    >
                        <option value="Vinyasa">Vinyasa</option>
                        <option value="Hatha">Hatha</option>
                        <option value="Yin">Yin</option>
                        <option value="Power">Power</option>
                    </select>
                </div>
                <div>
                    <label>Pose Sequence</label>
                    <textarea
                        name="poses"
                        value={formData.poses}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Difficulty Level</label>
                    <select
                        name="difficulty"
                        value={formData.difficulty}
                        onChange={handleChange}
                        required
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <button
                    type="submit"
                    disabled={invalidForm}
                >
                    UPDATE
                </button>
                <Link to='/flows'>GO BACK</Link>
            </form>
        </>
    );
}