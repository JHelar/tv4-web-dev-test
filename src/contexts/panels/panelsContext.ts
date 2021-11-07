import { createContext } from 'react'
import { Panels } from './api'

type PanelsContextType = {
    panels: Panels
    loading: boolean
}
export const panelsContext = createContext<PanelsContextType>({
    panels: [],
    loading: true,
})
