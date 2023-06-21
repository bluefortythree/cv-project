import React, { Component } from "react";


class Form extends Component {
    constructor() {
        super();

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            highestLevel: '',
            schoolName: '',
            titleOfStudy: '',
            studyStart: '',
            studyEnd: '',
            companyName: '',
            positionTitle: '',
            mainTasks: '',
            startDate: '',
            endDate: '',
        }
    }

    handleFirstNameChange = (e) => {
        this.setState({
            firstName: e.target.value
        })
    }

    handleLastNameChange = (e) => {
        this.setState({
            lastName: e.target.value
        })
    }

    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handlePhoneNumberChange = (e) => {
        this.setState({
            phoneNumber: e.target.value
        })
    }

    handleHighestLevelChange = (e) => {
        this.setState({
            highestLevel: e.target.value
        })
    }

    handleSchoolNameChange = (e) => {
        this.setState({
            schoolName: e.target.value
        })
    }

    handleTitleOfStudyChange = (e) => {
        this.setState({
            titleOfStudy: e.target.value
        })
    }

    handleStudyStartChange = (e) => {
        this.setState({
            studyStart: e.target.value
        })
    }

    handleStudyEndChange = (e) => {
        this.setState({
            studyEnd: e.target.value
        })
    }

    handleCompanyNameChange = (e) => {
        this.setState({
            companyName: e.target.value
        })
    }
    handlePositionTitleChange = (e) => {
        this.setState({
            positionTitle: e.target.value
        })
    }

    handleMainTasksChange = (e) => {
        this.setState({
            mainTasks: e.target.value
        })
    }

    handleStartDateChange = (e) => {
        this.setState({
            startDate: e.target.value
        })
    }

    handleEndDateChange = (e) => {
        this.setState({
            endDate: e.target.value
        })
    }

    handleSubmit = (e) => {
        const form = document.getElementById('form');
        form.style.display = 'none';
        const review = document.getElementById('review-page');
        review.style.display = 'block';
        e.preventDefault()
    }

    handleEdit = (e) => {
        const form = document.getElementById('form');
        form.style.display = 'block';
        const review = document.getElementById('review-page');
        review.style.display = 'none';
        e.preventDefault();
    }

    render() {
        const { firstName, lastName, email, phoneNumber, highestLevel, schoolName, titleOfStudy, studyStart, studyEnd, 
                companyName, positionTitle, mainTasks, startDate, endDate } = this.state
        return (
            <div>
                <div style={{ display: "block" }} id="form">
                    <form onSubmit={this.handleSubmit}>
                        <div id="general">
                            <div id="general-heading">
                                <legend><u>GENERAL INFORMATION</u></legend>
                            </div>
                            <div id="general-body">
                                <div>
                                    <label htmlFor="first-name" required>First Name:</label>
                                    <br />
                                    <input type="text" value={firstName} onChange={this.handleFirstNameChange} id="first-name" />
                                </div>
                                <div>
                                    <label htmlFor="last-name" required>Last Name:</label>
                                    <br />
                                    <input type="text" value={lastName} onChange={this.handleLastNameChange} id="last-name" />
                                </div>
                                <div>
                                    <label htmlFor="email" required>Email:</label>
                                    <br />
                                    <input type="email" value={email} onChange={this.handleEmailChange} id="email" />
                                </div>
                                <div>
                                    <label htmlFor="phone-number" required>Phone number:</label>
                                    <br />
                                    <input type="tel" value={phoneNumber} onChange={this.handlePhoneNumberChange} id="phone-number" pattern="^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$"/>
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
                                <select value={highestLevel} onChange={this.handleHighestLevelChange} name="highest-level">
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
                                    <input type="text" value={schoolName} onChange={this.handleSchoolNameChange} id="school-name"/>
                                </div>
                                <div>
                                    <label htmlFor="title-of-study">Title of study:</label>
                                    <br />
                                    <input type="text" value={titleOfStudy} onChange={this.handleTitleOfStudyChange} id="title-of-study"/>
                                </div>
                                <div>
                                    <label htmlFor="study-start">Study start:</label>
                                    <br />
                                    <input type="date" value={studyStart} onChange={this.handleStudyStartChange} id="study-start"/>
                                </div>
                                <div>
                                    <label htmlFor="study-end">Study end:</label>
                                    <br />
                                    <input type="date" value={studyEnd} onChange={this.handleStudyEndChange} id="study-end" />
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
                                    <input type="text" value={companyName} onChange={this.handleCompanyNameChange} />
                                </div>
                                <div>
                                    <label htmlFor="position-title">Position title:</label>
                                    <br />
                                    <input type="text" value={positionTitle} onChange={this.handlePositionTitleChange} />
                                </div>
                                <div id="main-tasks">
                                    <label htmlFor="main-tasks">Main tasks:</label>
                                    <br />
                                    <textarea value={mainTasks} onChange={this.handleMainTasksChange} name="main-tasks" cols="30" rows="10"></textarea>
                                </div>
                                <div>
                                    <label htmlFor="start-date">Start date:</label>
                                    <br />
                                    <input type="date" value={startDate} onChange={this.handleStartDateChange} />
                                </div>
                                <div>
                                    <label htmlFor="end-date">End date:</label>
                                    <br />
                                    <input type="date" value={endDate} onChange={this.handleEndDateChange} />
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
                            <div>
                                <div><b>First Name:</b></div>
                                <div>{this.state.firstName || <em>- Not specified -</em>}</div>
                            </div>
                            <div>
                                <div><b>Last Name:</b></div>
                                <div>{this.state.lastName || <em>- Not specified -</em>}</div>
                            </div>
                            <div>
                                <div><b>Email:</b></div>
                                <div>{this.state.email || <em>- Not specified -</em>}</div>
                            </div>
                            <div>
                                <div><b>Phone number:</b></div>
                                <div>{this.state.phoneNumber || <em>- Not specified -</em>}</div>
                            </div>
                        </div>
                        <div id="education-review-heading">
                            <legend><u>EDUCATIONAL EXPERIENCE</u></legend>
                        </div>
                        <div id="education-review-body">
                            <div id="highest-level-review">
                                <div><b>Highest level:</b></div>
                                <div>{this.state.highestLevel || <em>- Not specified -</em>}</div>
                            </div>
                            <div>
                                <div><b>School name:</b></div>
                                <div>{this.state.schoolName || <em>- Not specified -</em>}</div>
                            </div>
                            <div>
                                <div><b>Title of study:</b></div>
                                <div>{this.state.titleOfStudy || <em>- Not specified -</em>}</div>
                            </div>
                            <div>
                                <div><b>Study start:</b></div>
                                <div>{this.state.studyStart || <em>- Not specified -</em>}</div>
                            </div>
                            <div>
                                <div><b>Study end:</b></div>
                                <div>{this.state.studyEnd || <em>- Not specified -</em>}</div>
                                <br />
                            </div>
                        </div>
                        <div id="work-review-heading">
                            <legend><u>PRACTICAL EXPERIENCE</u></legend>
                        </div>
                        <div id="work-review-body">
                            <div>
                                <div><b>Company name:</b></div>
                                <div>{this.state.companyName || <em>- Not specified -</em>}</div>
                                <br />
                            </div>
                            <div>
                                <div><b>Position title:</b></div>
                                <div>{this.state.positionTitle || <em>- Not specified -</em>}</div>
                            </div>
                            <div id="main-tasks-review">
                                <div><b>Main tasks:</b></div>
                                <div>{this.state.mainTasks || <em>- Not specified -</em>}</div>
                                <br />
                            </div>
                            <div>
                                <div><b>Start date:</b></div>
                                <div>{this.state.startDate || <em>- Not specified -</em>}</div>
                            </div>
                            <div>
                                <div><b>End date:</b></div>
                                <div>{this.state.endDate || <em>- Not specified -</em>}</div>
                            </div>
                        </div>
                        <div id="buttons-container">
                        <button id="edit" onClick={this.handleEdit}>Edit</button>
                        <button id="submit">Submit</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Form;