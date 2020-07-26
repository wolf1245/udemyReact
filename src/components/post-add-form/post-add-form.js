import React, {Component} from 'react';

// цсс стили форм
import './post-add-form.css';

// вытаскиваем передаваем props при помощи деструктизации
export default class PostAddForm extends Component
{
    constructor(props)
    {
        super(props);
        this.state= {
            text: ''
        };
        // биндим контекст вызова
        this.onValueChange = this.onValueChange.bind(this);
        // биндим контекст вызова
        this.onSubmit = this.onSubmit.bind(this);
    }

    //мнтод отслеживания что ввел пользователь  с обьектом event
    onValueChange(event)
    {
        // перезаписываем свойство text без условией имутабельности
        this.setState({
            text: event.target.value
        });
    }

    // метод отслеживаем когда был нажат submit
    onSubmit(event)
    {
        // отменяем стандартное поведение браузера
        event.preventDefault();
        //берет ф-ю из props
        this.props.onAdd(this.state.text);
        // очищаем инпут
        this.setState({
            text: ''
        });
    }

    //
    render()
    {
        return (
            <form 
            className="bottom-panel d-flex"
            onSubmit={this.onSubmit}
            >
                <input
                    type="text"
                    placeholder="О чем вы думаетет сейчас?"
                    className="form-control new-post-label"
                    onChange={this.onValueChange}
                    value={this.state.text}
                />
                <button
                    type="submit"
                    className="btn btn-outline-secondary"
                >Добавить</button>
            </form>
        )
    }
}