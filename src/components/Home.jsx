import React from 'react';


class Home extends React.Component {

    render() {
        return (
            <div className='row'>
                <div className='col-lg-5'>
                    <img className='mb-3' alt='me.png' src='/me.png' height='75' width='75' style={{ borderRadius: '50%'}}></img>
                    <p>
                        I live in Dublin and I'm a software developer primarily interested in web development and cloud computing.
                        I was born in the Philippines then grew up in Ireland and previously studied applied computing at WIT.
                    </p>
                    <p className='mb-3'>You can contact me by:</p>
                    <ul id='home'>
                        <li className='mb-1'>sending me an <a href='mailto:jkrclaro@gmail.com'>email</a></li>
                        <li className='mb-1'>connecting with me on <a href='https://www.linkedin.com/in/jkrclaro' target="_blank" rel="noopener noreferrer">linkedin</a></li>
                        <li className='mb-1'>reaching out to me on <a href='https://www.twitter.com/jkrclaro' target="_blank" rel="noopener noreferrer">twitter</a></li>
                        <li>or see my projects on <a href='https://www.github.com/jkrclaro' target="_blank" rel="noopener noreferrer">github</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Home;