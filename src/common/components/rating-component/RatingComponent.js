import { useState } from "react";
import { Rate } from "antd";
const desc = ["😤", "😥", "🙄", "🙂", "😀"];

const RatingComponent = () => {
  const [rating, setRating] = useState();
  return (
    <span>
      <Rate tooltips={desc} onChange={setRating} value={rating} />
      {rating ? <span className="ant-rate-text"></span> : ""}
    </span>
  );
};

export default RatingComponent;
