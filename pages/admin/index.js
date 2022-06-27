import React from 'react'

import AdminComponent from 'common/components/admin/admin-page/AdminComponent'
import {
  GET_ALL_CONFIG,
} from "common/http/RequestData.js";
export const getServerSideProps = async () => {

    const configData = await GET_ALL_CONFIG();

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