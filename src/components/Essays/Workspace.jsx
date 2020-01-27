import React, { Component } from 'react';

import Info from '../Info';


class BenjaminFranklin extends Component {

    render() {
        const essay = {'publishedAt': 'Jan 26, 2019', 'readingTime': '1m 9s read'}
        return (
            <div className='row'>
                <div className='col-lg-2'></div>
                <div className='col-lg-8'>
                    <h1>Workspace</h1>
                    <Info essay={essay} />
                    <p>
                        As a freelance programmer, understanding where you'll be working regularly is important. 
                        One of the best parts of coding is that the work can be done anywhere but this in itself can be an unproductive factor.
                        I've outlined my experiences working at home, libraries, cafes and offices.
                    </p>
                    <h6>Home</h6>
                    <p>
                        Financially speaking, the house is the best choice if you want to save up money.
                        Everything is in the palm of your hands if you work at home but having everything within your reach can also be a bad thing.
                        Distraction is the most popular reason why people don't work at home.
                    </p>
                    <h6>Offices</h6>
                    <p>
                        I've actually never been to one because they require a monthly fee and closed during the weekends.
                        Most of them are usually located in the middle of towns or cities so if you live in the suburbs, you'll essentially be paying for commute and their monthly fee.
                    </p>
                    <h6>Cafes</h6>
                    <p>
                        The most popular workplace that I hear most people work from.
                        Depending on the ventilation of the cafe, it can feel a bit stuffy and warm sometimes.
                        You also have a high chance of finding other people working here so you won't feel left out.
                    </p>
                    <h6>Libraries</h6>
                    <p>
                        Can be bad during the weekdays because that's when groups of students go.
                        Not a problem most of the time but if you ever get in a situation when you're the only one in the room while everyone else is a student, it can feel a bit intimidating!
                        Overall, I was skeptical at first but I managed to find a nearby library in my area that allows me to work peacefully and away from the groups of students.
                    </p>
                </div>
                <div className='col-lg-2'></div>
            </div>
        )
    }
}

export default BenjaminFranklin;