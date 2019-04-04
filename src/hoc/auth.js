import React, { Component } from "react";
import { connect } from "react-redux";
import { auth } from "../actions/userActions";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function(ComposedClass, reload, adminRoute = null) {
  class AuthenticationCheck extends Component {
    state = {
      loading: true
    };

    componentDidMount() {
      this.props.dispatch(auth()).then(res => {
        let user = res.payload.isAuth;
        if (!user) {
          if (!reload) {
            this.props.history.push("/about");
          }
        }
        else {
            if (!reload) {
              this.props.history.push("/profile");
            }
          }
        
        this.setState({
          loading: false
        });
      });
    }

    render() {
      if (this.state.loading) {
        return (
          <div className="main_loader">
            <CircularProgress style={{ color: "#2196f3" }} thickness={4} />
          </div>
        );
      }
      return <ComposedClass {...this.props} user={this.props.user} />;
    }
  }

  function mapStateToProps(state) {
    return {
      user: state.user
    };
  }

  return connect(mapStateToProps)(AuthenticationCheck);
}
