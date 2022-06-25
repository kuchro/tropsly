import React from 'react'

const AddOrRemoveButton = ({exist,buttonDelete, buttonAdd}) => {
  return (
    <>
    {exist ? buttonDelete : buttonAdd}
    </>
  )
}

export default AddOrRemoveButton