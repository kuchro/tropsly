import React from "react";
import { Form,Table } from "antd";
import EditableCell from "common/components/functional-components/editable-cell/EditableCell";
const DataTableComponent = ({ form, dataSource, columnsData, onCancel, scrollData }) => {
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
          onChange: onCancel,
        }}
      />
    </Form>
  );
};

export default DataTableComponent;
