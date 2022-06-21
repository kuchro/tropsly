import React from "react";
import { Form,Table } from "antd";
import EditableCell from "common/components/functional-components/editable-cell/EditableCell";
const DataTableComponent = ({ form, dataSource, columnsData, onCancel, scrollData, pageSize }) => {
  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        
        bordered
        dataSource={dataSource}
        scroll={scrollData}
        columns={columnsData}
        pagination={{
          pageSize : pageSize,
          onChange: onCancel,
          hideOnSinglePage: true
        }}
      />
    </Form>
  );
};

export default DataTableComponent;
