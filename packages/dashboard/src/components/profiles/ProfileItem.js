/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const ProfileItem = (props) => {
  const {
    profile: {
      user: { _id, name, avatar },
      status,
      company,
      location,
      skills,
    },
  } = props;
  return (
    <div className="profile bg-light">
      <img src={avatar} alt="" className="round-img" />
      <div>
        <h2>{name}</h2>
        <p>
          {status} {company && <span> at {company}</span>}
        </p>
        <p className="my-1">{location && <span>{location}</span>}</p>

        <Link className="btn btn-primary" to={`/profile/${_id}`}>
          View Profile
        </Link>
      </div>

      <ul>
        {skills.slice(0, 4).map((skill, i) => (
          <li key={i} className="text-primary">
            <i className="fas fa-check" /> {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileItem;
