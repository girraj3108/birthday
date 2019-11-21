import React, { Component } from 'react';
import partyPopper from '../assets/party-popper.jpg'


class AgeStats extends React.Component {

    constructor() {
        super();
    }

    getBirthDays(date) {
        let date_now = new Date().getTime();
        let date_later = new Date(date).getTime();
        let difference = Math.abs(date_now - date_later)

        let days = Math.floor(difference / (1000 * 60 * 60 * 24))
        let years = Math.floor(days / 365)
        days -= years * 365;
        console.log(days)
        let months = Math.floor(days / 30);
        days -= months * 30;

        return `${years} years ${months} months ${days} days`
    }


    render() {
        return (
            <div>
                <h2>{this.props.date}</h2>
                <h3> congrats on {this.getBirthDays(this.props.date)}</h3>
                <img src={partyPopper} className="party-popper"></img>
            </div>
        )
    }

}

export default AgeStats;