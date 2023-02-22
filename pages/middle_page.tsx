import styles from '../styles/Home.module.css'
import { Grid } from '@mui/material'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const useUser = () => ({ user: null, loading: false })

export default function MiddlePage(){
  const { user, loading } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (!(user || loading)) {
      router.push('/registration')
    }
  }, [user, loading])

  return <></>
}