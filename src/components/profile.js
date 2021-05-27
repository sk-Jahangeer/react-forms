import React from "react";
import Form from "./common/form";
import Card from "@material-ui/core/Card";

class Profile extends Form {
    state = {
        data: { name: "", email: "", status: "", gender: "" },
    };

    doSubmit = () => {
        console.log(this.state.data);
    };

    render() {
        return (
            <div className="flex column">
                <h1>Profile</h1>
                <form onSubmit={this.handleSubmit}>
                    <Card className="form">
                        {this.renderTextInput("name", "Name")}
                        {this.renderTextInput("email", "Email", "email")}
                        {this.renderSelectInput("status", "Marital Status", [
                            "Single",
                            "Married",
                            "Divorced",
                            "Widowed",
                        ])}
                        {this.renderRadioInput("gender", "Gender", [
                            "Male",
                            "Female",
                            "Other",
                        ])}
                        {this.renderSubmitBtn("Submit")}
                    </Card>
                </form>
            </div>
        );
    }
}

export default Profile;
