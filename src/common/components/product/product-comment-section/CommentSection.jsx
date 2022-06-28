import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Comment, Form, Input, message } from "antd";
import React, { useState, useEffect } from "react";
import CommentList from "./CommentList";
import EditorSection from "./EditorSection";
import {
  GET_ALL_COMMENTS_OF_PRODUCT_BY_ID,
  ADD_COMMENT,
} from "common/http/RequestData";
export const CommentSection = ({ productId }) => {
  const [addComment, setAddComment] = useState(false);
  const [reloadData, setReloadData] = useState(false);
  const [comments, setComments] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState("");

  const fetchData = async () => {
    let getAllComments = await GET_ALL_COMMENTS_OF_PRODUCT_BY_ID(productId);
    let data = getAllComments.map((x) => {
      return {
        author: "User X",
        content: x.comment,
        datetime: x.dateTime,
      };
    });
    setComments(data);
  };
  useEffect(() => {
    fetchData();
    setReloadData(false);
  }, [reloadData]);

  const handleSubmit = () => {
    if (!value) {
      message.warning("Comment can't be empty!");
      return;
    }
    setSubmitting(true);
    setTimeout(async () => {
      let payload = {
        comment: value,
        productId: productId,
      };
      setSubmitting(false);
      setValue("");
      await ADD_COMMENT(
        payload,
        () => setReloadData(true),
        () => setAddComment(false)
      );
    }, 1000);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const addNewComment = () => {
    setAddComment(true);
  };
  return (
    <>
      {!addComment ? (
        <div>
          <span>Add Comment</span>
          <Button
            onClick={() => addNewComment()}
            style={{ margin: "10px" }}
            icon={<PlusCircleOutlined />}
          />{" "}
        </div>
      ) : null}
      {addComment ? (
        <Comment
          content={
            <EditorSection
              onChange={handleChange}
              onSubmit={handleSubmit}
              submitting={submitting}
              value={value}
            />
          }
        />
      ) : null}
      {comments.length > 0 && <CommentList commentsList={comments} />}
    </>
  );
};

export default CommentSection;
