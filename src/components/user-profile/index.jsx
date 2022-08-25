import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getUserAction } from "@actions";

import Loader from "@components/loader";
import Error from "@components/error";

import Icon from "@ui/icon";

import "./user-profile.scss";

const UserProfile = ({ id }) => {
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.user?.data);
  const isLoading = useSelector((state) => state.user?.isLoading);
  const isError = useSelector((state) => state.user?.isError);
  const errorDetail = useSelector((state) => state.user?.errorDetail);

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
            {userData.firstName} {userData.lastName}
          </p>

          <div className="UserProfile__user-data">
            <Icon name="mail" text={userData.email} />
            <Icon name="phone" text={userData.phone} />
            <Icon name="country" text={userData.location?.country} />
            <Icon
              name="birthday"
              text={`Cumpleaños el ${new Date(userData.dateOfBirth).getDate()} de ${
                new Date(userData.dateOfBirth).getMonth() + 1
              }`}
            />
          </div>
        </>
      )}
      {isLoading && <Loader />}
      {isError && <Error error={errorDetail} />}
    </div>
  );
};

export default UserProfile;
