import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const mapStateToPropsForRedirect = state => ({
  isAuth: state.auth.isAuth
});

export const withAuthRedirect = WrappedComponent => {
  const RedirectComponent = props => {
    let { isAuth, ...restProps } = props;

    if (!isAuth) return <Navigate to="/login" replace />;

    return <WrappedComponent {...restProps} />;
  };

  return connect(
    mapStateToPropsForRedirect,
    {}
  )(RedirectComponent);
};
