import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { useDispatch } from "react-redux";
import { deleteEducation } from "src/actions/profile";

const Education = ({ education }) => {
  const dispatch = useDispatch();

  const onClickHandler = (id) => {
    dispatch(deleteEducation(id));
  };
  const educations = education.map((edu) => (
    <tr key={edu._id}>
      <td>{edu.school}</td>
      <td className="hide-sm">{edu.degree}</td>
      <td>
        <Moment format="YYYY/MM/DD">{edu.form}</Moment> -{" "}
        {edu.to === null ? (
          "Now"
        ) : (
          <Moment format="YYYY/MM/DD">{edu.to}</Moment>
        )}
      </td>

      <td>
        <button
          onClick={() => onClickHandler(edu._id)}
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
            <th>School</th>
            <th className="hide-sm">Degree</th>
            <th className="hide-sm">Years</th>

            <th />
          </tr>
        </thead>

        <tbody>{educations}</tbody>
      </table>
    </>
  );
};

Education.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  education: PropTypes.array.isRequired,
};

export default Education;
