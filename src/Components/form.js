import React, { useState } from "react";


const Form = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [highestLevel, setHighestLevel] = useState('');
    const [schoolName, setSchoolName] = useState('');
    const [titleOfStudy, setTitleOfStudy] = useState('');
    const [studyStart, setStudyStart] = useState('');
    const [studyEnd, setStudyEnd] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [positionTitle, setPositionTitle] = useState('');
    const [mainTasks, setMainTasks] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    }    
           
    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    }

    const handleHighestLevelChange = (e) => {
        setHighestLevel(e.target.value);
    }

    const handleSchoolNameChange = (e) => {
        setSchoolName(e.target.value);
    }

    const handleTitleOfStudyChange = (e) => {
        setTitleOfStudy(e.target.value);
    }

    const handleStudyStartChange = (e) => {
        setStudyStart(e.target.value);
    }

    const handleStudyEndChange = (e) => {
        setStudyEnd(e.target.value);
    }

    const handleCompanyNameChange = (e) => {
        setCompanyName(e.target.value);
    }

    const handlePositionTitleChange = (e) => {
        setPositionTitle(e.target.value);
    }

    const handleMainTasksChange = (e) => {
        setMainTasks(e.target.value);
    }

    const handleStartDateChange = (e) => {
        setStartDate(e.target.value);
    }

    const handleEndDateChange = (e) => {
        setEndDate(e.target.value);
    }

    const handleSubmit = (e) => {
        const form = document.getElementById('form');
        form.style.display = 'none';
        const review = document.getElementById('review-page');
        review.style.display = 'block';
        e.preventDefault()
    }

    const handleEdit = (e) => {
        const form = document.getElementById('form');
        form.style.display = 'block';
        const review = document.getElementById('review-page');
        review.style.display = 'none';
        e.preventDefault();
    }

        return (
            <div>
                <div style={{ display: "block" }} id="form">
                    <form onSubmit={handleSubmit}>
                        <div id="general">
                            <div id="general-heading">
                                <legend><u>GENERAL INFORMATION</u></legend>
                            </div>
                            <div id="general-body">
                                <div>
                                    <label htmlFor="first-name" required>First Name:</label>
                                    <br />
                                    <input type="text" value={firstName} onChange={handleFirstNameChange} id="first-name" />
                                </div>
                                <div>
                                    <label htmlFor="last-name" required>Last Name:</label>
                                    <br />
                                    <input type="text" value={lastName} onChange={handleLastNameChange} id="last-name" />
                                </div>
                                <div>
                                    <label htmlFor="email" required>Email:</label>
                                    <br />
                                    <input type="email" value={email} onChange={handleEmailChange} id="email" />
                                </div>
                                <div>
                                    <label htmlFor="phone-number" required>Phone number:</label>
                                    <br />
                                    <input type="tel" value={phoneNumber} onChange={handlePhoneNumberChange} id="phone-number" pattern="^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$"/>
                                </div>
                            </div>
                        </div>
                        <div id="education">
                            <div id="education-heading">
                                <legend><u>EDUCATIONAL EXPERIENCE</u></legend>
                            </div>
                            <div id="education-body">
                                <div id="highest-level">
                                <label htmlFor="highest-level">Highest Level of Education:</label>
                                <br />
                                <select value={highestLevel} onChange={handleHighestLevelChange} name="highest-level">
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
                                </div>
                                <div>
                                    <label htmlFor="school-name">School name:</label>
                                    <br />
                                    <input type="text" value={schoolName} onChange={handleSchoolNameChange} id="school-name"/>
                                </div>
                                <div>
                                    <label htmlFor="title-of-study">Title of study:</label>
                                    <br />
                                    <input type="text" value={titleOfStudy} onChange={handleTitleOfStudyChange} id="title-of-study"/>
                                </div>
                                <div>
                                    <label htmlFor="study-start">Study start:</label>
                                    <br />
                                    <input type="date" value={studyStart} onChange={handleStudyStartChange} id="study-start"/>
                                </div>
                                <div>
                                    <label htmlFor="study-end">Study end:</label>
                                    <br />
                                    <input type="date" value={studyEnd} onChange={handleStudyEndChange} id="study-end" />
                                </div>
                            </div>
                        </div>
                        <div id="work">
                            <div id="work-heading">
                                <legend><u>PRACTICAL EXPERIENCE</u></legend>
                            </div>
                            <div id="work-body">
                                <div>
                                    <label htmlFor="company-name">Company name:</label>
                                    <br />
                                    <input type="text" value={companyName} onChange={handleCompanyNameChange} />
                                </div>
                                <div>
                                    <label htmlFor="position-title">Position title:</label>
                                    <br />
                                    <input type="text" value={positionTitle} onChange={handlePositionTitleChange} />
                                </div>
                                <div id="main-tasks">
                                    <label htmlFor="main-tasks">Main tasks:</label>
                                    <br />
                                    <textarea value={mainTasks} onChange={handleMainTasksChange} name="main-tasks" cols="30" rows="10"></textarea>
                                </div>
                                <div>
                                    <label htmlFor="start-date">Start date:</label>
                                    <br />
                                    <input type="date" value={startDate} onChange={handleStartDateChange} />
                                </div>
                                <div>
                                    <label htmlFor="end-date">End date:</label>
                                    <br />
                                    <input type="date" value={endDate} onChange={handleEndDateChange} />
                                </div>
                            </div>
                        </div>
                        <button type="submit" id="review">Review</button>
                    </form>
                </div>
                <div style={{ display: "none" }} id="review-page">
                    <div id="review-container">
                        <div id="general-review-heading">
                            <legend><u>GENERAL INFORMATION</u></legend>
                        </div>
                        <div id="general-review-body">
                            <div id="first-name-review">
                                <div><b>First Name:</b></div>
                                <div>{firstName || <em>- Not specified -</em>}</div>
                            </div>
                            <div id="last-name-review">
                                <div><b>Last Name:</b></div>
                                <div>{lastName || <em>- Not specified -</em>}</div>
                            </div>
                            <div id="email-review">
                                <div><b>Email:</b></div>
                                <div>{email || <em>- Not specified -</em>}</div>
                            </div>
                            <div id="phone-number-review">
                                <div><b>Phone number:</b></div>
                                <div>{phoneNumber || <em>- Not specified -</em>}</div>
                            </div>
                        </div>
                        <div id="education-review-heading">
                            <legend><u>EDUCATIONAL EXPERIENCE</u></legend>
                        </div>
                        <div id="education-review-body">
                            <div id="highest-level-review">
                                <div><b>Highest level:</b></div>
                                <div>{highestLevel || <em>- Not specified -</em>}</div>
                            </div>
                            <div id="school-name-review">
                                <div><b>School name:</b></div>
                                <div>{schoolName || <em>- Not specified -</em>}</div>
                            </div>
                            <div id="title-of-study-review">
                                <div><b>Title of study:</b></div>
                                <div>{titleOfStudy || <em>- Not specified -</em>}</div>
                            </div>
                            <div id="study-start-review">
                                <div><b>Study start:</b></div>
                                <div>{studyStart || <em>- Not specified -</em>}</div>
                            </div>
                            <div id="study-end-review">
                                <div><b>Study end:</b></div>
                                <div>{studyEnd || <em>- Not specified -</em>}</div>
                                <br />
                            </div>
                        </div>
                        <div id="work-review-heading">
                            <legend><u>PRACTICAL EXPERIENCE</u></legend>
                        </div>
                        <div id="work-review-body">
                            <div id="company-name-review">
                                <div><b>Company name:</b></div>
                                <div>{companyName || <em>- Not specified -</em>}</div>
                                <br />
                            </div>
                            <div id="position-title-review">
                                <div><b>Position title:</b></div>
                                <div>{positionTitle || <em>- Not specified -</em>}</div>
                            </div>
                            <br />
                            <div id="main-tasks-review">
                                <div><b>Main tasks:</b></div>
                                <div>{mainTasks || <em>- Not specified -</em>}</div>
                                <br />
                            </div>
                            <div id="start-date-review">
                                <div><b>Start date:</b></div>
                                <div>{startDate || <em>- Not specified -</em>}</div>
                            </div>
                            <div id="end-date-review">
                                <div><b>End date:</b></div>
                                <div>{endDate || <em>- Not specified -</em>}</div>
                            </div>
                        </div>
                        <div id="buttons-container">
                        <button id="edit" onClick={handleEdit}>Edit</button>
                        <button id="submit">Submit</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }

export default Form;