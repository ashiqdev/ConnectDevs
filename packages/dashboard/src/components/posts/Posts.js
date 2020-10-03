import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "src/actions/post";
import Spinner from "src/views/Spinner";
import PostForm from "./PostForm";
import PostItem from "./PostItem";

const Posts = () => {
  const { posts, loading } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [getPosts]);
  return loading ? (
    <Spinner />
  ) : (
    <>
      <h1 className="large text-primary">Posts</h1>
      <p className="lead">
        <i className="fas fa-user" /> Welcome to the community
      </p>

      <PostForm />

      <div className="posts">
        {posts.map((post) => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
    </>
  );
};

export default Posts;
