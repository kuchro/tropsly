import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Comment, Form, Input, message } from "antd";
import React, { useState, useEffect } from "react";
import CommentList from "./CommentList";
import EditorSection from "./EditorSection";
const { TextArea } = Input;

import axios from "axios";
import { HOST_DATA } from "hostdata";

export const CommentSection = ({ productId }) => {
  const [addComment, setAddComment] = useState(false);
  const [reloadData, setReloadData] = useState(false);
  const [comments, setComments] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState("");

  const fetchData = async () => {
    let getAllComments = await axios.get(
      `${HOST_DATA.API_URL}${HOST_DATA.PRODUCT_COMMENT}/${productId}`
    );
    let allComments = await getAllComments.data;
    let data = allComments.map((x) => {
      return {
        author: "A some user",
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
    if (!value){
      message.warning("Comment can't be empty!");
      return;
    } 
    setSubmitting(true);
    setTimeout(() => {
      let payload = {
        comment: value,
        productId: productId,
      };
      setSubmitting(false);
      setValue("");
      axios
        .post(`${HOST_DATA.API_URL}${HOST_DATA.PRODUCT_COMMENT}`, payload)
        .then(function (response) {
          setReloadData(true);
          setAddComment(false);
        })
        .catch(function (error) {
          message.error("Something went wrong...");
        });
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
          onClick={()=>addNewComment()}
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
