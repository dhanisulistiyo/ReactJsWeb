import React from "react";
import { Button } from "semantic-ui-react";
import PropTypes from "prop-types";
import { Styles } from "../styleCommon";

const ButtonFull = ({ name, onClick }) => {
  return (
    <div>
      <Button style={Styles.FullWidth} content={name} onClick={onClick} />
    </div>
  );
};
ButtonFull.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func
};

export { ButtonFull };
