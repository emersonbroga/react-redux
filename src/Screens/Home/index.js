import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchUser } from './HomeActions';

const USER_ID = 1;

const Home = ({ user, fetchUser }) => {
  useEffect(() => {
    fetchUser(USER_ID);
  }, [fetchUser]);

  if (!user) return <h1>Home</h1>;
  return <h1>{user.name}</h1>;
};

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps, { fetchUser })(Home);
