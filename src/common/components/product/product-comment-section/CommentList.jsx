import React,{useState} from 'react'
import {Comment, List } from "antd";

const CommentList = ({commentsList}) => {

  return (
    <List
    dataSource={commentsList}
    header={`${commentsList.length} ${commentsList.length > 1 ? "replies" : "reply"}`}
    itemLayout="horizontal"
    renderItem={(props) => <Comment {...props} />}
  />
  )
}

export default CommentList