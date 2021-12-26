import React, {Component} from 'react'
import classes from './Form.module.css'
import {getFormData, getSuccess, getError} from "../../services/form";
import Input from "../Input/Input";


class Form extends Component {

    state = {
        form: [],
        successMessage: '',
        errorMessage: '',
    }

    componentDidMount() {
        getFormData().then((response) => {
            this.setState({form: response.form});
        });
    }

    submitSuccess() {
        getSuccess().then(function (response) {
            this.setState({successMessage: 'successMessage', errorMessage: ''})
        }.bind(this));
    }

    submitError() {
        getError().then(function (response) {
            this.setState({successMessage: '', errorMessage: 'errorMessage'})
        }.bind(this));
    }

    render() {
        return (
            <div className={classes.form_wrap}>
                <main className={classes.main}>
                    {this.state.form.map(input => (
                        <div key={input.name}>
                            <Input {...input}/>
                        </div>
                    ))}
                </main>
                <div className={classes.btn_wrap}>
                    <button onClick={this.submitSuccess.bind(this)} className={classes.success}>Отправить с успехом
                    </button>
                    <button onClick={this.submitError.bind(this)} className={classes.error}>Отправить с ошибкой</button>
                </div>


                <div className={`${classes.message_text} ${classes.error}`}>{this.state.successMessage}</div>
                <div className={`${classes.message_text} ${classes.success}`}>{this.state.errorMessage}</div>
            </div>
        );
    }
}

export default Form
