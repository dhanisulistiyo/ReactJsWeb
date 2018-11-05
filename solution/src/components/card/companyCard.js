import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Card, Divider, Icon, Grid } from "semantic-ui-react";
import { Styles } from "../styleCommon";

const companyCard = props => {
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
          <p style={Styles.Bold}>Address:</p>
          <p>
            sssssssssssssssssssss ssssssssssssssssssss sssssssssssssssssssss sss
            sssssssssssssssssss ssssssssss ssssssssssss
            sssssssssssssssssssssssss ssssssssssssss sssssss sssssss
          </p>
          <p style={Styles.Bold}>Revenue:</p>
          <p>999999999</p>
          <p style={Styles.Bold}>Phone No:</p>
          <p>(89) 571-1212-1121-11211</p>
        </Card.Content>
      </Card>
    </div>
  );
};

companyCard.propTypes = {};
export default companyCard;
