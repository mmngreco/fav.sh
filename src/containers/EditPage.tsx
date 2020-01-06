import React from 'react'
import RootShell from './RootShell'
import Create from 'components/AddForm'

export default () => {
  return (
    <RootShell
      basicHeader
      headerName="Edit Bookmark"
      rootContent={<Create editMode />}
    />
  )
}
