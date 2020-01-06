import React from 'react'
import SyncPageContent from 'components/SyncPage'
import RootShell, { BackButton } from './RootShell'
import GithubLoginButton from 'components/SyncPage/GithubLoginButton'

const HeaderLeft = () => <GithubLoginButton />

export default () => {
  return (
    <RootShell
      headerName="Backup and Sync"
      headerLeftComponents={<HeaderLeft />}
      headerRightComponents={<BackButton />}
      rootContent={<SyncPageContent />}
    />
  )
}
