import React from "react";
import PropTypes from "prop-types";
import { Card, Divider, Icon, Grid } from "semantic-ui-react";
import { Styles } from "../styleCommon";

const officeCard = props => {
  return (
    <div>
      <Card style={{ textAlign: "left" }}>
        <Card.Content>
          <Card.Header>
            <Grid columns={2}>
              <Grid.Row>
                <Grid.Column width={13}>Recent Activity</Grid.Column>
                <Grid.Column width={3}>
                  <Icon name="close" />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Card.Header>
          <Divider />
          <p style={Styles.Bold}>Location:</p>
          <p>Lat - 121223223</p>
          <p>Log - 121223223</p>
          <p style={Styles.Bold}>Office Start Date:</p>
          <p>999999999</p>
        </Card.Content>
      </Card>
    </div>
  );
};

officeCard.propTypes = {};
export default officeCard;
