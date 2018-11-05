import React from "react";
import { Styles } from "./components/styleCommon";
import CreateCompany from "./components/form/createCompany";
import CreateOffice from "./components/form/createOffice";
import { Grid, Divider, Segment } from "semantic-ui-react";
import CompanyCard from "./components/card/companyCard";
const OverviewePage = props => {
  return (
    <Segment>
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <CreateCompany />
          </Grid.Column>
          <Grid.Column>
            <CreateOffice />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Divider />
      <div style={Styles.Label}>Companies</div>
      <div>
        <CompanyCard />
      </div>
    </Segment>
  );
};

OverviewePage.propTypes = {};
export default OverviewePage;
