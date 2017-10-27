import React from 'react';
import { Prompt } from 'react-router-dom';

export default class AddBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = { "book": { title: "", info: "" }, isDirty: false }
    }

    onSave = () => {
        let book = this.state.book;
        if (book.info.trim() !== "" && book.info.trim() !== "") {
            this.props.bookStore.addBook(book);
            this.setState({
                "book": { title: "", info: "" }, isDirty: false
            });
            this.props.onAddBook()
        } else {
            alert("enter proper values...")
        }
    }

    onChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState(prevState => (
            {
                book: { ...prevState.book, [name]: value },
                isDirty: true
            }
        ));
    }

    render() {
        return (
            <div>
                Title: <input name="title" onChange={this.onChange} value={this.state.book.title} />
                Info: <input name="info" onChange={this.onChange} value={this.state.book.info} />
                <button onClick={this.onSave}>Save</button>
                {
                    <Prompt
                        when={this.state.isDirty}
                        message="You have unsaved data that will be lost!"
                    />}
            </div>
        )
    }
}