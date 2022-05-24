import React from 'react'
import { Descriptions,Divider } from 'antd';

const MiniProductDetails = ({product}) => {
    return (
        <div>
        <Descriptions title="Product info">
                <div>Description: {product.description}</div>
        </Descriptions>
          <Divider/>
          <span>Size: {product.size.map(size => (<span>{size},</span>))}</span>
        </div>
    )
}

export default MiniProductDetails