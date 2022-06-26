import { CheckOutlined,PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import { useState } from 'react';
import axios from "axios";
import { HOST_DATA } from "hostdata";


const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';

  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }

  const isLt2M = file.size / 1024 / 1024 < 2;

  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }

  return isJpgOrPng && isLt2M;
};

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