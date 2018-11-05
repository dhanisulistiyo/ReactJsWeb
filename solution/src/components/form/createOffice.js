import React, { Component } from "react";
import PropTypes from "prop-types";
import { Grid, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import {
  TextareaWithError,
  DoubleTextareaWithError,
  DropdownWithError
} from "../input/inputGlobal";
import { ButtonFull } from "../button/buttonGlobal";
import { post_company } from "../../actions/companyAction";
import { copyObject } from "../../helper/helper";

class createOffice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Office: {
        Name: "",
        Latitude: "",
        Longtitude: "",
        StartDate: "",
        Company: ""
      },

      ListCompany: []
    };
  }
  static propTypes = {
    dispatch: PropTypes.func,
    listCompany: PropTypes.array
  };

  componentDidUpdate() {
    if (this.props.listCompany.length !== this.state.ListCompany.length) {
      console.log(this.props.listCompany.length);
      this.setState(
        {
          ListCompany: this.props.listCompany.map(obj => ({
            key: obj.Name.toLowerCase(),
            value: obj.Name.toLowerCase(),
            flag: obj.Name.toLowerCase(),
            text: obj.Name
          }))
        },
        () => console.log(this.state)
      );
    }
  }

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
              <Header as="h1" content="Create Office" />
              <TextareaWithError
                placeholder="Name"
                title="Name:"
                name="Name"
                value={this.state.Office.Name}
                handleChange={this.handleChange}
              />
              <DoubleTextareaWithError
                placeholder1="Latitude"
                placeholder2="Longtitude"
                width1={8}
                width2={8}
                title="Location:"
                name1="Latitude"
                data1={this.state.Office.Latitude}
                handleChange1={this.handleChange}
                name2="Longtitude"
                data2={this.state.Office.Longtitude}
                handleChange2={this.handleChange}
              />
              <TextareaWithError
                placeholder="Date"
                title="Official Start Date:"
                type="date"
                data-date-format="DD MMMM YYYY"
                name="StartDate"
                value={this.state.Office.StartDate}
                handleChange={this.handleChange}
              />
              <DropdownWithError
                placeholder="Select Company"
                fluid
                selection
                title="Company:"
                name="Company"
                options={this.state.ListCompany}
                onChange={this.handleChange}
                value={this.state.Office.Company}
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

export default connect(mapStateToProps)(createOffice);
