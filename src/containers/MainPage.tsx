import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { toggleSidebar } from 'store/modules/ui'
import { startDraft } from 'store/modules/draft'
import { Link } from 'react-router-dom'
import RootShell from './RootShell'
import Button, {
  IconButton,
} from 'components/common/Button'
import TagsSidebar from 'components/TagsSidebar'
import BookmarkList from 'components/BookmarkList'

/** Icons */
import MenuIcon from '@material-ui/icons/Menu'
import Add from '@material-ui/icons/Add'

import HeaderSearch from 'components/HeaderSearch'

export default () => {
  const dispatch = useDispatch()

  const HeaderLeft = () => (
    <>
      <IconButton
        aria-label="Sidebar"
        icon={<MenuIcon />}
        onClick={() => dispatch(toggleSidebar)}
      />
      <HeaderSearch />
    </>
  )

  const HeaderRight = () => (
    <>
      <IconButton
        variant="outlined"
        aria-label="Create Bookmark"
        icon={<Add fontSize="small" />}
        to="/add"
        component={Link}
        onClick={() => dispatch(startDraft)}
      />
      <StyledButton component={Link} to="/sync">
        Sync
      </StyledButton>
    </>
  )

  return (
    <RootShell
      headerLeftComponents={<HeaderLeft />}
      headerRightComponents={<HeaderRight />}
      sidebarContent={<TagsSidebar />}
      rootContent={<BookmarkList />}
    />
  )
}

const StyledButton = styled(Button)`
  color: #fff !important;
  font-weight: bold;
`
