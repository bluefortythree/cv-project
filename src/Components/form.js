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
        const review = document.getElementById('review');
        review.style.display = 'block';
        e.preventDefault()
        console.log(this.state.firstName)
    }

    

    render() {
        const { firstName, lastName, email, phoneNumber, highestLevel, schoolName, titleOfStudy, studyStart, studyEnd, 
                companyName, positionTitle, mainTasks, startDate, endDate } = this.state
        return (
            <div>
                <div style={{ display: "block" }} id="form">
                    <form onSubmit={this.handleSubmit}>
                        <legend><u>GENERAL INFORMATION</u></legend>
                        <br />
                        <label htmlFor="first-name" required>First Name:</label>
                        <br />
                        <input type="text" value={firstName} onChange={this.handleFirstNameChange} id="first-name" />
                        <br />
                        <br />
                        <label htmlFor="last-name" required>Last Name:</label>
                        <br />
                        <input type="text" value={lastName} onChange={this.handleLastNameChange} id="last-name" />
                        <br />
                        <br />
                        <label htmlFor="email" required>Email:</label>
                        <br />
                        <input type="email" value={email} onChange={this.handleEmailChange} id="email" />
                        <br />
                        <br />
                        <label htmlFor="phone-number" required>Phone number:</label>
                        <br />
                        <input type="tel" value={phoneNumber} onChange={this.handlePhoneNumberChange} id="phone-number" />
                        <br />
                        <br />
                        <legend><u>EDUCATIONAL EXPERIENCE</u></legend>
                        <br />
                        <label htmlFor="highest-level">Highest Level of Education:</label>
                        <br />
                        <select value={highestLevel} onChange={this.handleHighestLevelChange} name="highest-level" id="highest-level">
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
                        <input type="text" value={schoolName} onChange={this.handleSchoolNameChange} id="school-name"/>
                        <br />
                        <br />
                        <label htmlFor="title-of-study">Title of study:</label>
                        <br />
                        <input type="text" value={titleOfStudy} onChange={this.handleTitleOfStudyChange} id="title-of-study"/>
                        <br />
                        <br />
                        <label htmlFor="study-start">Study start:</label>
                        <br />
                        <input type="date" value={studyStart} onChange={this.handleStudyStartChange} id="study-start"/>
                        <br />
                        <br />
                        <label htmlFor="study-end">Study end:</label>
                        <br />
                        <input type="date" value={studyEnd} onChange={this.handleStudyEndChange} id="study-end" />
                        <br />
                        <br />
                        <legend><u>PRACTICAL EXPERIENCE</u></legend>
                        <br />
                        <label htmlFor="company-name">Company name:</label>
                        <br />
                        <input type="text" value={companyName} onChange={this.handleCompanyNameChange} id="company-name" />
                        <br />
                        <br />
                        <label htmlFor="position-title">Position title:</label>
                        <br />
                        <input type="text" value={positionTitle} onChange={this.handlePositionTitleChange} id="position-title" />
                        <br />
                        <br />
                        <label htmlFor="main-tasks">Main tasks:</label>
                        <br />
                        <textarea value={mainTasks} onChange={this.handleMainTasksChange} name="main-tasks" id="main-tasks" cols="30" rows="10"></textarea>
                        <br />
                        <br />
                        <label htmlFor="start-date">Start date:</label>
                        <br />
                        <input type="date" value={startDate} onChange={this.handleStartDateChange} id="start-date"/>
                        <br />
                        <br />
                        <label htmlFor="end-date">End date:</label>
                        <br />
                        <input type="date" value={endDate} onChange={this.handleEndDateChange} id="end-date"/>
                        <br />
                        <br />
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div style={{ display: "none" }} id="review">
                    <div>
                        <legend><u>GENERAL INFORMATION</u></legend>
                        <br />
                        <div>First Name:</div>
                        <div>{this.state.firstName}</div>
                        <br />
                        <br />
                        <div>Last Name:</div>
                        <div>{this.state.lastName}</div>
                        <br />
                        <br />
                        <div>Email:</div>
                        <div>{this.state.email}</div>
                        <br />
                        <br />
                        <div>Phone number:</div>
                        <div>{this.state.phoneNumber}</div>
                        <br />
                        <br />
                        <legend><u>EDUCATIONAL EXPERIENCE</u></legend>
                        <br />
                        <div>Highest level:</div>
                        <div>{this.state.highestLevel}</div>
                        <br />
                        <br />
                        <div>School name:</div>
                        <div>{this.state.schoolName}</div>
                        <br />
                        <br />
                        <div>Title of study:</div>
                        <div>{this.state.titleOfStudy}</div>
                        <br />
                        <br />
                        <div>Study start:</div>
                        <div>{this.state.studyStart}</div>
                        <br />
                        <br />
                        <div>Study end:</div>
                        <div>{this.state.studyEnd}</div>
                        <br />
                        <br />
                        <legend><u>PRACTICAL EXPERIENCE</u></legend>
                        <br />
                        <div>Company name:</div>
                        <div>{this.state.companyName}</div>
                        <br />
                        <br />
                        <div>Position title:</div>
                        <div>{this.state.positionTitle}</div>
                        <br />
                        <br />
                        <div>Main tasks:</div>
                        <div>{this.state.mainTasks}</div>
                        <br />
                        <br />
                        <div>Start date:</div>
                        <div>{this.state.startDate}</div>
                        <br />
                        <br />
                        <div>End date:</div>
                        <div>{this.state.endDate}</div>
                        <br />
                        <br />
                    </div>
                </div>
            </div>
        )
    }
}
export default Form;