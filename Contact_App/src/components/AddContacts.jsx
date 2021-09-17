import React from "react";
import './App.css';


class AddContacts extends React.Component {

    state = {
        name: '',
        email: '',
    };

    act = (e) => {
        e.preventDefault();
        this.props.addContactHandler(this.state);
        this.setState({ name: '', email: '' });
    };

    render() {
        return (
            <form class='AddContact' onSubmit={this.act}>
                <h1>Add Contacts :</h1>
                <div class='Uinput'>
                    <div class="Name">
                        <h2>Name</h2>
                        <input
                            type="text"
                            placeholder="Name"
                            class='input'
                            value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value })}
                            required />
                    </div>
                    <div class='Email'>
                        <h2>Email ID</h2>
                        <input
                            type="email"
                            placeholder="Email"
                            class='input'
                            value={this.state.email}
                            onChange={(e) => this.setState({ email: e.target.value })}
                            required />
                    </div>
                    <button class='button'>+</button>
                </div>
            </form>
        );
    };
}

export default AddContacts