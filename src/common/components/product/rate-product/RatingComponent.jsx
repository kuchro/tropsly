import { useState, useEffect } from "react";
import { Rate, Typography, Space } from "antd";
import {GET_RATE_OF_PRODUCT, ADD_RATE_OF_PRODUCT} from 'common/http/RequestData';

const desc = ["😤", "😥", "🙄", "🙂", "😀"];

const RatingComponent = ({ productId }) => {
  const [rating, setRating] = useState({ratingAvg:0, voteNumber:0});
  const [reloadData, setReloadData] = useState(false);
  const fetchData = async () => {
    let getRating = await GET_RATE_OF_PRODUCT(productId);
    setRating(getRating);
  };
  useEffect(() => {
    fetchData();
    setReloadData(false);
  }, [reloadData]);

  const onChange = async (data) => {
    let payload = {
      productId: productId,
      ratingScore: data,
    };
    await ADD_RATE_OF_PRODUCT(payload,()=>setReloadData(true));
  };
  return (
    <span>
      <Rate
        tooltips={desc}
        onChange={(data) => onChange(data)}
        value={rating.ratingAvg}
      />
      <Space>
        <Typography.Title
          level={5}
          style={{
            margin: "15px",
          }}
        >
          {" "}
          ({rating.ratingAvg} / {rating.voteNumber})
        </Typography.Title>
      </Space>
    </span>
  );
};

export default RatingComponent;
