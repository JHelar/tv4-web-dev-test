import { useContext } from 'react'
import { panelsContext } from './panelsContext'

export const usePanels = () => useContext(panelsContext)
