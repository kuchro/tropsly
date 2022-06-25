import React, { useState } from "react";
import { Checkbox, Collapse } from "antd";

const { Panel } = Collapse;

const ProductFilter = ({ filterType, handleFilterType, productTypes }) => {
  const [Checked, setChecked] = useState([]);

  const handleToggle = (id) => {
    const currentIndex = Checked.indexOf(id);
    const newCheckedFilter = [...Checked];
    currentIndex === -1
      ? newCheckedFilter.push(id)
      : newCheckedFilter.splice(currentIndex, 1);

    setChecked(newCheckedFilter);
    handleFilterType(newCheckedFilter);
  };

  return (
    <div>
      <Collapse defaultActiveKey={["1"]} style={{ width: "350px" }}>
        <Panel header={filterType}>
          {productTypes.map((value) => (
            <React.Fragment key={value.id}>
              <Checkbox
                key={value.id}
                style={{ margin: "10px" }}
                onChange={() => handleToggle(value.id)}
                type="checkbox"
                checked={Checked.indexOf(value.id) === -1 ? false : true}
              />
              <span
                style={{
                  color:
                    Checked.indexOf(value.id) === -1 ? "#000000" : "#08b625",
                }}
              >
                {value.name}
              </span>
            </React.Fragment>
          ))}
        </Panel>
      </Collapse>
    </div>
  );
};

export default ProductFilter;
