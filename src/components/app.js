import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import './app.css'
import AgeStats from './ageState';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            Date: '',
            Birthday: '1995-06-21',
            showStats: false
        }
    }

    changeBirthday() {
        console.log(this.state)
        this.setState({ Birthday: this.state.Date, showStats: true })
    }

    render() {
        return (
            <div className="app">
                <Form >
                    <h2>input your birthday</h2>
                    <FormControl type="date"
                        onChange={(event) => this.setState({ Date: event.target.value })}>
                    </FormControl>
                    {' '}
                    <Button
                        onClick={() => this.changeBirthday()}>
                        Submit
                    </Button>

                    {
                        this.state.showStats ? <div className="fade age-stats">
                            <AgeStats date={this.state.Birthday} />
                        </div> : <div> </div>
                    }
                </Form>
            </div>
        )
    }
}
export default App;