import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextInput from "./textInput";
import RadioInput from "./radioInput";
import SelectInput from "./selectInput";

class Form extends Component {
    state = { data: {} };

    handleChange = ({ currentTarget: input }) => {
        const data = { ...this.state.data };
        data[input.name] = input.value;
        this.setState({ data });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.doSubmit();
    };

    renderTextInput(name, label, type = "text", required = true) {
        const { data } = this.state;
        return (
            <TextInput
                name={name}
                value={data[name]}
                type={type}
                required={required}
                label={label}
                onChange={this.handleChange}
            />
        );
    }

    renderRadioInput(name, label, options, required = true) {
        const { data } = this.state;
        return (
            <RadioInput
                name={name}
                value={data[name]}
                onChange={this.handleChange}
                label={label}
                options={options}
                required={required}
            />
        );
    }

    renderSelectInput(name, label, options, required = true) {
        const { data } = this.state;
        return (
            <SelectInput
                name={name}
                value={data[name]}
                options={options}
                label={label}
                required={required}
                onChange={this.handleChange}
            />
        );
    }

    renderSubmitBtn(name) {
        return (
            <Button
                type="submit"
                style={{ marginLeft: "auto" }}
                variant="contained"
                size="medium"
                color="primary"
            >
                {name}
            </Button>
        );
    }
}

export default Form;
