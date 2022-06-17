import {
  DislikeFilled,
  DislikeOutlined,
  LikeFilled,
  LikeOutlined,
} from "@ant-design/icons";
import { Button, Comment, Form, Input, List } from "antd";
import React, { useState,useEffect } from "react";
import moment from "moment";
import CommentList from './CommentList'
import EditorSection from './EditorSection'
const { TextArea } = Input;

import axios from "axios";
import { HOST_DATA } from "hostdata";


export const CommentSection = ({productId}) => {
  const [reloadData, setReloadData] = useState(false);
  const [comments, setComments] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState("");


  const fetchData = async () => {
    let getAllComments = await axios.get(
      `${HOST_DATA.API_URL}${HOST_DATA.PRODUCT_COMMENT}/${productId}`
    );
    let allComments = await getAllComments.data;
    let data = allComments.map(x=> {
      return {
        author: 'A some user',
        content: x.comment,
        datetime: x.dateTime
      }
    })
   setComments(data);
  };
  useEffect(() => {
    fetchData();
    setReloadData(false);
  }, [reloadData]);

  const handleSubmit = () => {
    if (!value) return;
    setSubmitting(true);
    setTimeout(() => {
      let payload = {
        comment: value,
        productId: productId
      }
      setSubmitting(false);
      setValue("");
      axios.post(`${HOST_DATA.API_URL}${HOST_DATA.PRODUCT_COMMENT}`,payload).then(function (response) {
        setReloadData(true);
      })
      .catch(function (error) {
        message.error("Something went wrong...");
      });

    }, 1000);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
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
      {comments.length > 0 && <CommentList commentsList={comments} />}
    </>
  );
};

export default CommentSection;
