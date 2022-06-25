import React from 'react'

import AdminComponent from 'common/components/admin/admin-page/AdminComponent.js'

import { HOST_DATA } from "hostdata";
import axios from "axios";
export const getServerSideProps = async () => {

    let configDataResponse = await axios.get(`${HOST_DATA.API_URL}${HOST_DATA.CONFIG_ALL}`);
    let configData = await configDataResponse.data;
    const configAllData = Object.entries(configData).map(([k,v])=>{
        return {
            key: k,
            catName: k,
            data: v.map(x=>x.name)
        }
    })
    const configDataWithId = Object.entries(configData).map(([k,v])=>{
      return {
          key: k,
          catName: k,
          data: v
      }
  })

      return {
        props: {
            data: configAllData,
            dataWithId: configDataWithId,
        }
      }
    }

const AdminPage = ({data,dataWithId}) => {
  return (
    <AdminComponent data={data} dataWithId={dataWithId}/>
  )
}

export default AdminPage