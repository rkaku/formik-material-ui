import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PetsOutlinedIcon from "@material-ui/icons/PetsOutlined";
import PropTypes from "prop-types";
import Fab from "@material-ui/core/Fab";

class MineButton extends Component {
  state = {
    isSuccess: {},
    query: "idle",
  };

  timerRef = createRef();

  componentDidMount() {
    this.setState({ isSuccess: this.props.mining });
    clearTimeout(this.timerRef.current);
  }

  componentDidUpdate() {
    if (this.state.isSuccess !== this.props.mining) {
      this.setState({ isSuccess: this.props.mining });
    }
  }

  handleSuccess = () => {
    if (this.state.isSuccess === true) {
      return <Typography>SUCCESS ：）</Typography>;
    }
    if (this.state.isSuccess === false) {
      return <Typography>FAILED ：（</Typography>;
    }
    return null;
  };

  handleClickQuery = () => {
    this.props.onClick();
    clearTimeout(this.timerRef.current);

    if (this.query !== "idle") {
      this.setState({ query: "idle" });
      return;
    }
    // Button Label => Now Mining...
    this.setState({ query: "progress" });

    // Button Label Reset => Start Mining
    this.timerRef.current = setTimeout(() => {
      this.setState({ query: "idle" });
    }, 1234);
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        {/* Mine Button */}
        <Fab
          variant='extended'
          aria-label='mine'
          className={classes.fab}
          onClick={this.handleClickQuery}
        >
          <PetsOutlinedIcon className={classes.extendedIcon} />
          {this.state.query !== "idle" ? "Now Mining..." : "Start Mining"}
        </Fab>

        {/* Mining Results */}
        <div className={classes.placeholder}>{this.handleSuccess()}</div>
      </div>
    );
  }
}
const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  placeholder: {
    height: 14,
    margin: theme.spacing(1),
  },
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
});

const mapStateToProps = state => ({ mining: state.blockchain.mining });
const _MineButton = withStyles(styles)(MineButton);
export default connect(mapStateToProps)(_MineButton);

// { props: { … } }
// props:
// onClick: () => { … }
MineButton.propTypes = {
  props: PropTypes.shape({
    onClick: PropTypes.func.isRequired,
  }),
};
