import React from 'react';

function Experience() {
    return (
        <div>
            <form>
                <legend><u>PRACTICAL EXPERIENCE</u></legend>
                <br />
                <label htmlFor="company-name">Company name:</label>
                <br />
                <input type="text" id="company-name" />
                <br />
                <br />
                <label htmlFor="position-title">Position title:</label>
                <br />
                <input type="text" id="position-title" />
                <br />
                <br />
                <label htmlFor="main-tasks">Main tasks:</label>
                <br />
                <input type="text" id="main-tasks" />
                <br />
                <br />
                <label htmlFor="start-date">Start date:</label>
                <br />
                <input type="date" />
                <br />
                <br />
                <label htmlFor="end-date">End date:</label>
                <br />
                <input type="date" />
            </form>
        </div>
    )
}

export default Experience;