import React from "react";

function Education() {
    return (
        <div>
            <form>
                <legend><u>EDUCATIONAL EXPERIENCE</u></legend>
                <br />
                <label htmlFor="highest-level">Highest Level of Education:</label>
                <br />
                <select name="highest-level" id="highest-level">
                    <option disabled selected></option>
                    <option value="High school or equivalent">High school or equivalent</option>
                    <option value="Technical or occupational certificate">Technical or occupational certificate</option>
                    <option value="Associate degree">Associate degree</option>
                    <option value="Some college">Some college</option>
                    <option value="Bachelor&#39;s degree">Bachelor"s degree</option>
                    <option value="Master&#39;s degree">Master"s degree</option>
                    <option value="Doctorate">Doctorate</option>
                    <option value="Professional">Professional</option>
                </select>
                <br />
                <br />
                <label htmlFor="school-name">School name:</label>
                <br />
                <input type="text" id="school-name"/>
                <br />
                <br />
                <label htmlFor="title-of-study">Title of study:</label>
                <br />
                <input type="text" id="title-of-study"/>
                <br />
                <br />
                <label htmlFor="study-start">Study start:</label>
                <br />
                <input type="date" />
                <br />
                <br />
                <label htmlFor="study-end">Study end:</label>
                <br />
                <input type="date" />

            </form>
        </div>
    )
}

export default Education;