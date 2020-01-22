import React from 'react';


class Home extends React.Component {

    render() {
        return (
            <div className='col-lg-5'>
                <h3><b>John Claro</b></h3>
                <p>I live in Dublin and I'm a passionate software engineer primarily interested in web development and cloud computing.</p>
                <p>I was born in the Philippines but grew up in Ireland and studied at WIT.</p>
                <p>I worked as data engineer for DistilledSCH after graduating and a short stint as a freelance web developer afterwards.</p>
                <p>If you want to contact me, you can reach me via one of the following communication channels:</p>
                <ul>
                    <li>send me an <a href='mailto:jkrclaro@gmail.com'>email</a></li>
                    <li>see my projects on <a href='https://www.github.com/jkrclaro' target="_blank" rel="noopener noreferrer">github</a></li>
                    <li>reach out to me on <a href='https://www.twitter.com/jkrclaro' target="_blank" rel="noopener noreferrer">twitter</a></li>
                    <li>connect with me on <a href='https://www.linkedin.com/in/jkrclaro' target="_blank" rel="noopener noreferrer">linkedin</a></li>
                </ul>
            </div>
        )
    }
}

export default Home;