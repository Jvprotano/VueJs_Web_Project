import { setBearerToken } from '@/http'

//Token
export const setHeaderToken = token => setBearerToken(token)
export const getLocalToken = () => localStorage.getItem('token')
export const deleteLocalToken = () => localStorage.removeItem('token')
export const setLocalToken = token => localStorage.setItem('token', token)
//User
export const getLocalUser = () => localStorage.getItem('name')
export const setLocalUser = name => localStorage.setItem('name', name)
export const deleteLocalUser = () => localStorage.removeItem('name')
//LastName
export const getLocalLastName = () => localStorage.getItem('lastName')
export const setLocalLastName = lastName => localStorage.setItem( 'lastName', lastName)
export const deleteLocalLastName = () => localStorage.removeItem('lastName')
