import React from "react";
import { Input, Container, Grid, Select } from "semantic-ui-react";
import PropTypes from "prop-types";
import { Styles } from "../styleCommon";

const TextareaWithError = props => {
  return (
    <div style={Styles.ContainerInput}>
      <label style={Styles.LabelInput}>{props.title}</label>
      <Input
        {...props}
        placeholder={props.placeholder}
        rows={1}
        style={Styles.FullWidth}
        value={props.data}
        onChange={props.handleChange}
        name={props.name}
        disabled={props.disable}
      />
      <Container content={props.errors} style={Styles.ErrorLabel} />
    </div>
  );
};
TextareaWithError.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  handleChange: PropTypes.func,
  placeholder: PropTypes.string,
  errors: PropTypes.string,
  data: PropTypes.string,
  disable: PropTypes.bool
};

const DoubleTextareaWithError = props => {
  return (
    <div style={Styles.ContainerInput}>
      <label style={Styles.LabelInput}>{props.title}</label>
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column width={props.width1}>
            <Input
              placeholder={props.placeholder1}
              rows={1}
              style={Styles.FullWidth}
              value={props.data1}
              onChange={props.handleChange1}
              name={props.name1}
              disabled={props.disable}
            />
            <Container content={props.error1} style={Styles.ErrorLabel} />
          </Grid.Column>
          <Grid.Column width={props.width2}>
            <Input
              placeholder={props.placeholder2}
              rows={1}
              style={Styles.FullWidth}
              value={props.data2}
              onChange={props.handleChange2}
              name={props.name2}
              disabled={props.disable}
            />
            <Container content={props.error2} style={Styles.ErrorLabel} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};
DoubleTextareaWithError.propTypes = {
  title: PropTypes.string,
  name1: PropTypes.string,
  name2: PropTypes.string,
  handleChange1: PropTypes.func,
  handleChange2: PropTypes.func,
  placeholder1: PropTypes.string,
  placeholder2: PropTypes.string,
  width1: PropTypes.number,
  width2: PropTypes.number,
  error1: PropTypes.string,
  error2: PropTypes.string,
  data1: PropTypes.string,
  data2: PropTypes.string,
  disable: PropTypes.bool
};

const DropdownWithError = props => {
  return (
    <div style={Styles.ContainerInput}>
      <label style={Styles.LabelInput}>{props.title}</label>
      <Select
        selection
        placeholder={props.placeholder}
        search
        style={Styles.FullWidth}
        name={props.name}
        options={props.option}
        onChange={props.handleChange}
        value={props.valueDropDown}
        disabled={props.disable}
      />
      <Container content={props.errors} style={Styles.ErrorLabel} />
    </div>
  );
};
DropdownWithError.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  handleChange: PropTypes.func,
  placeholder: PropTypes.string,
  errors: PropTypes.string,
  option: PropTypes.array,
  valueDropDown: PropTypes.string,
  disable: PropTypes.bool
};

export { TextareaWithError, DoubleTextareaWithError, DropdownWithError };
