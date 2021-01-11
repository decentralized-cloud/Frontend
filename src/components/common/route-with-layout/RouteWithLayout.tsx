import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';

import { IApplicationState } from '../../../framework/redux';

interface RouteWithLayoutProps {
  layout: React.ComponentType<any>;
  component: React.ComponentType<any>;
  isSecureRoute: boolean;
  userFound: boolean;
  location?: string;
}

const RouteWithLayout = React.memo<RouteWithLayoutProps>(({ layout: Layout, component: Component, isSecureRoute, userFound, location, ...rest }) => {
  if (isSecureRoute && !userFound) {
    return <Redirect to={{ pathname: '/signin', state: { from: location } }} />;
  }

  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <Layout>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
});

const mapStateToProps = (state: IApplicationState) => ({
  userFound: false,
});

export default withRouter(connect(mapStateToProps)(RouteWithLayout as any));
