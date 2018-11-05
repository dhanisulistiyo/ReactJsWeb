import React from "react";
import { Grid, Divider, Segment, Header, Button } from "semantic-ui-react";
import OfficeCard from "./components/card/officeCard";
import { Styles } from "./components/styleCommon";

const OfficePage = props => {
  return (
    <Segment>
      <Grid style={{ textAlign: "left" }}>
        <Grid.Row>
          <Grid.Column>
            <Header as="h1" content="Alibaba" />
            <Divider />
            <p style={{ fontWeight: "bold" }}>Address:</p>
            <p>
              sssssssssssssssssssss ssssssssssssssssssss sssssssssssssssssssss
              sss sssssssssssssssssss ssssssssss ssssssssssss
              sssssssssssssssssssssssss ssssssssssssss sssssss sssssss
            </p>
            <p style={{ fontWeight: "bold" }}>Revenue:</p>
            <p>999999999</p>
            <p style={{ fontWeight: "bold" }}>Phone No:</p>
            <p>(89) 571-1212-1121-11211</p>
            <Button>Back to Overview</Button>
            <Divider />
            <div style={Styles.Label}>Offices</div>
            <div>
              <OfficeCard />
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

OfficePage.propTypes = {};
export default OfficePage;
