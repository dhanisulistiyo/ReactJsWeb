import React, { Component } from "react";
import PropTypes from "prop-types";
import { Grid, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import {
  TextareaWithError,
  DoubleTextareaWithError
} from "../input/inputGlobal";
import { ButtonFull } from "../button/buttonGlobal";
import { post_company } from "../../actions/companyAction";
import { copyObject } from "../../helper/helper";

class createCompany extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Company: {
        Name: "",
        Address: "",
        Revenue: "",
        CodeNumb: "",
        PhoneNumb: "",
        Office: []
      }
    };
  }
  static propTypes = {
    dispatch: PropTypes.func,
    listCompany: PropTypes.array
  };

  handleChange = (e, { name, value }) =>
    this.setState({
      Company: {
        ...this.state.Company,
        [name]: value
      }
    });

  handleSave = () => {
    let listCompany = copyObject(this.props.listCompany);
    listCompany.push(this.state.Company);
    this.props.dispatch(post_company(listCompany));
  };

  render() {
    return (
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Header as="h1" content="Create Company" />
              <TextareaWithError
                placeholder="Name"
                title="Name:"
                errors=""
                name="Name"
                value={this.state.Company.Name}
                handleChange={this.handleChange}
              />
              <TextareaWithError
                placeholder="Address"
                title="Address:"
                name="Address"
                value={this.state.Company.Address}
                handleChange={this.handleChange}
              />
              <TextareaWithError
                placeholder="Revenue"
                title="Revenue:"
                name="Revenue"
                value={this.state.Company.Revenue}
                handleChange={this.handleChange}
              />
              <DoubleTextareaWithError
                placeholder1="Code"
                placeholder2="Number"
                width1={4}
                width2={12}
                title="Phone No:"
                name1="CodeNumb"
                data1={this.state.Company.CodeNumb}
                handleChange1={this.handleChange}
                name2="PhoneNumb"
                data2={this.state.Company.PhoneNumb}
                handleChange2={this.handleChange}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <ButtonFull name="Create" onClick={this.handleSave} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  listCompany: state.companyReducer.company
});

export default connect(mapStateToProps)(createCompany);
