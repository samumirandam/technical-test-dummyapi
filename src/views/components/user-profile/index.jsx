import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';

import { getUserAction } from '@modules/user/actions';
import {
  getUser,
  isPostLoading,
  isPostError,
  getPostErrorDetail,
} from '@modules/user/selectors';

import Loader from '@components/loader';
import Error from '@components/error';

import Icon from '@ui/icon';

import './user-profile.scss';

const UserProfile = ({ id }) => {
  const dispatch = useDispatch();

  const userData = useSelector(getUser);
  const isLoading = useSelector(isPostLoading);
  const isError = useSelector(isPostError);
  const errorDetail = useSelector(getPostErrorDetail);

  useEffect(() => {
    if (id) {
      dispatch(getUserAction(id));
    }
  }, [id]);

  return (
    <div className="UserProfile">
      {!isLoading && userData && (
        <>
          <figure className="UserProfile__image">
            <img
              src={userData.picture}
              alt={`${userData.firstName} ${userData.lastName}`}
            />
          </figure>
          <p>
            {userData.firstName}
            {' '}
            {userData.lastName}
          </p>

          <div className="UserProfile__user-data">
            <Icon name="mail" text={userData.email} />
            <Icon name="phone" text={userData.phone} />
            <Icon name="country" text={userData.location?.country} />
            <Icon
              name="birthday"
              text={`Cumpleaños el ${format(
                new Date(userData.dateOfBirth),
                "d 'de' MMMM",
              )}`}
            />
          </div>
        </>
      )}
      {isLoading && <Loader />}
      {isError && <Error error={errorDetail} />}
    </div>
  );
};

UserProfile.propTypes = {
  id: PropTypes.string.isRequired,
};

export default UserProfile;
