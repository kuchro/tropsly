import React from "react";

import AdminComponent from "common/components/admin/admin-page/AdminComponent";
import { GET_ALL_CONFIG } from "common/http/RequestData.js";
export const getServerSideProps = async () => {
  const configData = await GET_ALL_CONFIG();

  const configAllData = Object.entries(configData).map(([k, v]) => {
    return {
      key: k,
      catName: k,
      data: v.map((x) => x.name),
    };
  });
  const configDataWithId = Object.entries(configData).map(([k, v]) => {
    return {
      key: k,
      catName: k,
      data: v,
    };
  });

  const envData = {
    AWS_HOST: process.env.AWS_HOST_ADDRESS,
    BUCKET: process.env.BUCKET_NAME,
  };

  return {
    props: {
      data: configAllData,
      dataWithId: configDataWithId,
      env: envData,
    },
  };
};

const AdminPage = ({ data, dataWithId, env }) => {
  return <AdminComponent data={data} dataWithId={dataWithId} env={env} />;
};

export default AdminPage;
