import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "src/views/Spinner";
import { getAllUsersProfile } from "src/actions/profile";
import ProfileItem from "./ProfileItem";

const Profiles = () => {
  const dispatch = useDispatch();
  const { profiles, loading } = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(getAllUsersProfile());
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h1 className="large text-primary">Developers</h1>
          <p className="lead">
            <i className="fab fa-connectdevelop">
              Browse and Connect with developers
            </i>
          </p>
          <div className="profiles">
            {profiles.length > 0 ? (
              profiles.map((profile) => (
                <ProfileItem key={profile._id} profile={profile} />
              ))
            ) : (
              <h4>No Profiles found...</h4>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Profiles;
