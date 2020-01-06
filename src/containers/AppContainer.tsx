/**
 * This is the root app container
 * All components start here
 *
 */
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Router from 'Router'
import DevTools from 'containers/DevTools'
import { getToken, login } from 'store/modules/sync'

export default () => {
  const token = useSelector(getToken)
  const dispatch = useDispatch()
  useEffect(() => {
    if (!token) {
      chrome.storage.local.get(['code'], res => {
        if (res.code) {
          handleLogin(res.code)
        }
      })
    }
  }, [])

  const handleLogin = code => {
    dispatch(login(code, true))
  }

  return (
    <>
      <Router />
      {process.env.NODE_ENV === 'development' && (
        <DevTools />
      )}
    </>
  )
}
