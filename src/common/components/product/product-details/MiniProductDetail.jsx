
import { Descriptions, Divider } from "antd";

const MiniProductDetails = ({ product, materialTypes }) => {


  return (
    <div>
      <Descriptions title="Product info">
        <Descriptions.Item>{product.description}</Descriptions.Item>
      </Descriptions>
      <Descriptions>
        <Descriptions.Item label="Available Size">
          {product.size.join(', ')}
        </Descriptions.Item>
      </Descriptions>
      <Descriptions>
      <Descriptions.Item label="Material">
        {materialTypes.find(x=>x.id==product.materialTypeId).name}
        </Descriptions.Item>
      </Descriptions>
      <Divider />
    </div>
  );
};

export default MiniProductDetails;
