import React, { useState, useEffect } from "react";
import { ConfigContainer, Label } from "./StyledComponents";
import { Space, Table, Tag, message, Button } from "antd";
const { Column, ColumnGroup } = Table;
import ActionableAddModal from "common/components/modals/ActionableAddModal";
import ActionableDeleteModal from "common/components/modals/ActionableDeleteModal";
import AddCategory from "common/components/config-manager/AddCategory";
import DeleteCategory from "common/components/config-manager/DeleteCategory";
import BackdropEffect from "common/components/modals/BackdropEffect";
import PopConfirmation from "common/components/modals/PopConfirmation";

import { Submit } from "./StyledComponents";
import { HOST_DATA } from "hostdata";
import axios from "axios";

const ConfigManagerComponent = ({ configuration }) => {
  const [configData, setConfigData] = useState(configuration);
  const [reloadData, setReloadData] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalDeleteIsOpen, setModalDeleteIsOpen] = useState(false);
  const [pathRoute, setPathRoute] = useState();
  const [elementToDeleteByKey, setElementsToDeleteByKey] = useState(new Set())
  const [selectCatToDelete, setSelectCatToDelete] = useState([]);

  const showAddModal = (path) => {
    setPathRoute(path);
    setModalIsOpen(true);
  };

  const showDeleteModal = (path) => {
    console.log('Element:',elementToDeleteByKey)
    setPathRoute(path);
    setModalDeleteIsOpen(true);
    setReloadData(false);
    
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalDeleteIsOpen(false);
  };

  const onDelete = (path) => {
    console.log(selectCatToDelete);
    axios
      .delete(`${HOST_DATA.API_URL}${HOST_DATA.CONFIGURE}${path}/remove`, {
        data: selectCatToDelete,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const cancel = (e) => {
    console.log(e);
    message.error("Click on No");
  };

  const confirmModal = () => {
    setReloadData(true);
    setModalIsOpen(false);
    setModalDeleteIsOpen(false);
  };


  const dataSet = (data)=>{
    console.log('this',data);
    let cate = new Set(data.catName);
    setElementsToDeleteByKey(cate);
  }

  useEffect(() => {
    (async () => {
      let configDataResponse = await axios.get(
        `${HOST_DATA.API_URL}${HOST_DATA.CONFIG_ALL}`
      );
      let configData = await configDataResponse.data;
      const configAllData = Object.entries(configData).map(([k, v]) => {
        return {
          key: k,
          catName: k,
          data: v,
        };
      });
      console.log("State changed", configAllData);
      setConfigData(configAllData);
      console.log(configAllData);
      Object.entries(configAllData).map(([k,v])=>{

      // setElementsToDeleteByKey(v.catName,v.data)

      })
     
    })();

    return () => {
      console.log("This will be logged on unmount");
    };
  }, [reloadData]);

  return (
    <ConfigContainer>
      <Table dataSource={configData}>
        <Column title="Category Name" dataIndex="catName" key="catName" />
        <Column
          title="Current Data List"
          dataIndex="data"
          key="data"
          render={(tags) => (
            <>
              {tags.map((tag) => (
                <Tag color="blue" key={tag}>
                  
                  {tag}
                </Tag>
              ))}
            </>
          )}
        />
        <Column
          title="Action"
          key="action"
          render={(data) => (
            
            <Space size="middle">
              <>
             
              {console.log("cat:",elementToDeleteByKey)}
                <a onClick={() => showAddModal(data.catName)}>
                  Add {data.catName}
                 
                </a>
                {modalIsOpen && (
                  <>
                    <ActionableAddModal
                      key={data.catName}
                      onCancel={() => closeModal()}
                      onConfirm={() => confirmModal()}
                      actionType={
                        <AddCategory
                          path={pathRoute}
                          actionButton={
                            <Submit type="submit" value="Add Category" />
                          }
                          buttons={
                            <>
                              <Button onClick={() => closeModal()}>
                                Close
                              </Button>
                              <Button type="submit">Test</Button>
                            </>
                          }
                        />
                      }
                    />
                    <BackdropEffect />
                  </>
                )}
                <a onClick={() => showDeleteModal(data.catName, data.data)}>
                  Delete {data.catName}
                </a>

                {modalDeleteIsOpen && (
                  <>
                    <ActionableDeleteModal
                      key={data.catName}
                      onCancel={() => closeModal()}
                      onConfirm={() => onConfirm()}
                      buttons={
                        <>
                          <Button onClick={() => closeModal()}>Close</Button>
                          <PopConfirmation
                            onConfirm={() => onDelete(data.catName)}
                            onCancel={() => cancel()}
                          />
                        </>
                      }
                      actionType={
                        
                        <DeleteCategory
                          path={pathRoute}
                          categories={configData.find(x=>x.key===pathRoute).data}
                          catToDelete={(data) => setSelectCatToDelete(data)}
                        />
                      }
                    />
                    <BackdropEffect />
                  </>
                )}
              </>
            </Space>
          )}
        />
      </Table>
    </ConfigContainer>
  );
};

export default ConfigManagerComponent;
