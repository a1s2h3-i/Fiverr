'use client'
import { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import { useStateProvider } from '@/context/StateContext'
import { reducerCases } from '@/context/constants'
import { GET_USER_INFO, HOST } from '@/utils/constants'

const UserHydration = () => {
  const [cookies] = useCookies()
  const [{ userInfo }, dispatch] = useStateProvider()

  useEffect(() => {
    const fetchUser = async () => {
      if (cookies.jwt && !userInfo) {
        try {
          const { data: { user } } = await axios.post(
            GET_USER_INFO,
            {},
            {
              withCredentials: true,
              headers: { Authorization: `Bearer ${cookies.jwt}` },
            }
          )

          let projectedUserInfo = { ...user }
          if (user.image) {
            projectedUserInfo.imageName = `${HOST}/${user.image}`
          }
          delete projectedUserInfo.image

          dispatch({
            type: reducerCases.SET_USER,
            userInfo: projectedUserInfo,
          })
        } catch (err) {
          console.error("Failed to fetch user info:", err)
        }
      }
    }

    fetchUser()
  }, [cookies.jwt, userInfo, dispatch])

  return null
}

export default UserHydration
