import { CheckOutlined,PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import { useState } from 'react';


import {beforeUpload} from "common/util/UtilsFunctions"

const ImageUpload = ({setImageFile}) => {

  const [file, setFile] = useState();

  const handleChange = (info) => {
    setImageFile(info.file);
    setFile(info.file);
  };

  return (
    <>
    <Upload
      name="avatar"
      listType="picture-card"
      className="avatar-uploader"
      showUploadList={false}
      beforeUpload={beforeUpload}
      onChange={handleChange}
    >
      {file ? (
       <CheckOutlined />
      ) : (
        <PlusOutlined />
      )}
    </Upload>
    </>
  );
};

export default ImageUpload;