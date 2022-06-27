import { useState, useEffect } from "react";
import { Rate, Typography, Space } from "antd";
import { HOST_DATA } from "hostdata";
import axios from "axios";
const { Text } = Typography;

const desc = ["😤", "😥", "🙄", "🙂", "😀"];

const RatingComponent = ({ productId }) => {
  const [rating, setRating] = useState({ratingAvg:0, voteNumber:0});
  const [reloadData, setReloadData] = useState(false);
  const fetchData = async () => {
    let getRating = await axios.get(
      `${HOST_DATA.API_URL}${HOST_DATA.PRODUCT_RATE}${productId}`
    );
    let ratingData = await getRating.data;
    setRating(ratingData);
  };
  useEffect(() => {
    fetchData();
    setReloadData(false);
  }, [reloadData]);

  const onChange = (data) => {
    let payload = {
      productId: productId,
      ratingScore: data,
    };
    axios
      .post(`${HOST_DATA.API_URL}${HOST_DATA.PRODUCT_RATE}`, payload)
      .then(function (response) {
        setReloadData(true);
      })
      .catch(function (error) {});
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
