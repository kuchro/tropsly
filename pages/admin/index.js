import React from 'react'

import AdminComponent from 'common/components/admin/AdminComponent.js'

import { HOST_DATA } from "hostdata";
import axios from "axios";
export const getServerSideProps = async () => {

    let configDataResponse = await axios.get(`${HOST_DATA.API_URL}${HOST_DATA.CONFIG_ALL}`);
    let configData = await configDataResponse.data;
    const configAllData = Object.entries(configData).map(([k,v])=>{
        return {
            key: k,
            catName: k,
            data: v
        }
    })

      return {
        props: {
            data: configAllData,
        }
      }
    }

const AdminPage = ({data}) => {
  return (
    <AdminComponent data={data}/>
  )
}

export default AdminPage