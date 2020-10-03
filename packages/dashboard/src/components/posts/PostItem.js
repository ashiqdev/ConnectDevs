import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import { addLike, deletePost, removeLike } from "src/actions/post";

const PostItem = ({
  // eslint-disable-next-line react/prop-types
  post: { _id, text, name, avatar, user, likes, comments, date },
  showActions,
}) => {
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  return (
    <div className="post bg-white p-1 my-1">
      <div>
        <Link to={`/profile/${user}`}>
          <img className="round-img" src={avatar} alt="Avatar" />
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <p className="my-1">{text}</p>
        <p className="post-date">
          Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
        </p>

        {showActions && (
          <>
            <button
              type="button"
              onClick={(e) => dispatch(addLike(_id))}
              className="btn btn-light"
            >
              <i className="fas fa-thumbs-up" />{" "}
              {likes.length > 0 && <span>{likes.length}</span>}
            </button>
            <button
              type="button"
              onClick={() => dispatch(removeLike(_id))}
              className="btn btn-light"
            >
              <i className="fas fa-thumbs-down" />
            </button>
            <Link to={`/posts/${_id}`} className="btn btn-primary">
              Discussion{" "}
              {comments.length > 0 && (
                <span className="comment-count">{comments.length}</span>
              )}
            </Link>

            {!auth.loading && user === auth.user._id && (
              <button
                type="button"
                onClick={() => dispatch(deletePost(_id))}
                className="btn btn-danger"
              >
                <i className="fas fa-times" />
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

PostItem.defaultProps = { showActions: true };

export default PostItem;
