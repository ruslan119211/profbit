import React, {useState}  from 'react'
import Form from "./Form/Form";
import './App.css';
import closeModal  from './close.svg';


const App = () => {

    const [show, setShow] = useState(false);

    const handleModalClose = () => {
        setShow(false);
    };

    const handleModalOpen = () => {
        setShow(true);
    };

    return (
        <div className="App">
            <div
                hidden={!show}
            >
                <div className="modal-background">
                    <div className="modal-card">
                        <button
                            className="closeModal"
                            onClick={handleModalClose}
                        >
                            <img src={closeModal}  alt="close" />
                        </button>
                        <div className="modal-content">
                            <Form></Form>
                        </div>
                    </div>
                </div>
            </div>
            <button
                className="button"
                onClick={handleModalOpen}
            >
                Задать вопрос
            </button>
        </div>
    );
};


export default App;


