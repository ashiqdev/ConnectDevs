import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { useDispatch } from "react-redux";
import { deleteExperience } from "src/actions/profile";

const Experience = ({ experience }) => {
  const dispatch = useDispatch();

  const onClickHandler = (id) => {
    dispatch(deleteExperience(id));
  };
  const experiences = experience.map((exp) => (
    <tr key={exp._id}>
      <td>{exp.company}</td>
      <td className="hide-sm">{exp.title}</td>
      <td>
        <Moment format="YYYY/MM/DD">{exp.form}</Moment> -{" "}
        {exp.to === null ? (
          "Now"
        ) : (
          <Moment format="YYYY/MM/DD">{exp.to}</Moment>
        )}
      </td>

      <td>
        <button
          onClick={() => onClickHandler(exp._id)}
          type="submit"
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  ));
  return (
    <>
      <h2 className="my-2">Experience Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th className="hide-sm">Company</th>
            <th className="hide-sm">Years</th>

            <th />
          </tr>
        </thead>

        <tbody>{experiences}</tbody>
      </table>
    </>
  );
};

Experience.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  experience: PropTypes.array.isRequired,
};

export default Experience;
