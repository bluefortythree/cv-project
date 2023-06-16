import React from "react";

function General() {
    return (
        <div>
            <div>
                <form>
                    <legend><u>GENERAL INFORMATION</u></legend>
                    <br />
                    <label htmlFor="first-name" required>First Name:</label>
                    <br />
                    <input type="text" id="first-name" />
                    <br />
                    <br />
                    <label htmlFor="last-name" required>Last Name:</label>
                    <br />
                    <input type="text" id="last-name" />
                    <br />
                    <br />
                    <label htmlFor="email" required>Email:</label>
                    <br />
                    <input type="email" id="email" />
                    <br />
                    <br />
                    <label htmlFor="phone-number" required>Phone number:</label>
                    <br />
                    <input type="tel" id="phone-number" />
                </form>
            </div>
        </div>
    )
}
export default General;