import React, {Component} from 'react'
import classes from './Form.module.css'
// import load from './public/backend';
//
//
// load('customer-message-form.json')
//     .then(data => {
//     /* эта функция сработает для загруженных данных */
// });

class Form extends Component{

    componentDidMount() {
        fetch("./public/backend/customer-message-form.json")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.form
                    });
                },
                // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
                // чтобы не перехватывать исключения из ошибок в самих компонентах.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )

        console.log('test')
    }
    render() {
        return (
            <div className={classes.Form}>


                <main className={classes.main}>
                    1
                    {this.props.children}
                </main>
            </div>
        );
    }
}

export default Form
