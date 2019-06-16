import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchName } from "./actions/home.acton";
import autoBind from "react-autobind";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
});
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      UserName: ""
    };
    autoBind(this);
    // this.fetchName = this.fetchName.bind(this);
    // this.clickFnction = this.clickFnction.bind(this);
  }
  fetchName(e) {
    this.props.fetchName(e.target.value);
  }
  clickFnction() {
    this.props.history.push("/inbox");
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      UserName: nextProps.UserName
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div>
          <p>This is the Home component</p>
          <TextField
            id="outlined-dense"
            label="Enter You Name"
            className={classNames(classes.textField, classes.dense)}
            margin="dense"
            variant="outlined"
            onBlur={this.fetchName.bind(this)}
          />
          <p>Hello {this.state.UserName}</p>
        </div>
        <div>
          <p onClick={this.clickFnction}>
            click hear to check history.push() works
          </p>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state, ownProps) {
  return {
    UserName: state.HomeReducer.UserName
  };
}
export default connect(
  mapStateToProps,
  { fetchName }
)(withStyles(styles)(Home));
