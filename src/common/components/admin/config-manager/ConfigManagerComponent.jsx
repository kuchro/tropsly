import React, { useState, useEffect } from "react";
import { ConfigContainer } from "./StyledComponents";
import { Space, Tag, message, Button } from "antd";
import ActionableModal from "common/components/functional-components/modals/ActionableModal";
import CategorySelect from "common/components/admin/config-manager/CategorySelect";
import BackdropEffect from "common/components/functional-components/modals/BackdropEffect";
import PopConfirmation from "common/components/functional-components/modals/PopConfirmation";
import DataTableComponent from "common/components/functional-components/data-table/DataTableComponent";
import { useRouter } from "next/router";
import {
  DELETE_PRODUCT_CATEGORY,
  ADD_NEW_CATEGORY,
} from "common/http/RequestData";

const ConfigManagerComponent = ({ configuration }) => {
  const router = useRouter();
  const [configData, setConfigData] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalDeleteIsOpen, setModalDeleteIsOpen] = useState(false);
  const [pathRoute, setPathRoute] = useState();
  const [selectedCat, setSelectCat] = useState([]);

  useEffect(() => {
    setConfigData(configuration);
  }, [configuration]);

  const refreshData = () => {
    router.replace(router.asPath);
  };

  const showAddModal = (path) => {
    setPathRoute(path);
    setModalIsOpen(true);
  };

  const showDeleteModal = (path) => {
    setPathRoute(path);
    setModalDeleteIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalDeleteIsOpen(false);
  };

  const onDelete = async (path) => {
    await DELETE_PRODUCT_CATEGORY(path, selectedCat);
    refreshData();
    setModalDeleteIsOpen(false);
  };

  const onSubmit = async () => {
    await ADD_NEW_CATEGORY(pathRoute, selectedCat);
    refreshData();
    setModalIsOpen(false);
    setModalDeleteIsOpen(false);
  };

  const columnData = [
    {
      title: "Data name",
      dataIndex: "catName",
      key: "catName",
    },
    {
      title: "Current Data List",
      dataIndex: "data",
      key: "data",
      render: (tags) => (
        <>
          {tags.map((tag) => (
            <Tag color="blue" key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      ),
    },
    {
      title: "Action",
      key: "data",
      render: (data) => (
        <Space size="middle">
          <>
            <a onClick={() => showAddModal(data.catName)}>Add {data.catName}</a>
            {modalIsOpen && (
              <>
                <ActionableModal
                  key={data.catName}
                  onCancel={() => closeModal()}
                  onConfirm={() => onSubmit()}
                  actionType={
                    <CategorySelect
                      path={pathRoute}
                      categories={
                        configData.find((x) => x.key === pathRoute).data
                      }
                      catToDelete={(data) => setSelectCat(data)}
                    />
                  }
                  buttons={
                    <>
                      <Button onClick={() => closeModal()}>Close</Button>
                      <PopConfirmation
                        onConfirm={() => onSubmit()}
                        onCancel={() => {}}
                        text={"Add"}
                      />
                    </>
                  }
                  text="Add To Category"
                />
                <BackdropEffect />
              </>
            )}
            <a onClick={() => showDeleteModal(data.catName, data.data)}>
              Delete {data.catName}
            </a>

            {modalDeleteIsOpen && (
              <>
                <ActionableModal
                  key={data.catName}
                  onCancel={() => closeModal()}
                  buttons={
                    <>
                      <Button onClick={() => closeModal()}>Close</Button>
                      <PopConfirmation
                        onConfirm={() => onDelete(pathRoute)}
                        onCancel={() => {}}
                        text={"Delete"}
                      />
                    </>
                  }
                  actionType={
                    <CategorySelect
                      path={pathRoute}
                      categories={
                        configData.find((x) => x.key === pathRoute).data
                      }
                      catToDelete={(data) => setSelectCat(data)}
                    />
                  }
                  text="Delete"
                />
                <BackdropEffect />
              </>
            )}
          </>
        </Space>
      ),
    },
  ];

  return (
    <ConfigContainer>
      <DataTableComponent
        form={null}
        dataSource={configData}
        columnsData={columnData}
        onCancel={() => null}
      />
    </ConfigContainer>
  );
};

export default ConfigManagerComponent;
