import { doGetRequest } from 'Helpers/apiHelper';

export const FETCH_USERS = 'FETCH_USERS';

export const fetchUser = id => {
  const payload = doGetRequest(`/people/${id}`);

  return {
    type: FETCH_USERS,
    payload,
  };
};
