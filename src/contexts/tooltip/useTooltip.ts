import { useContext } from 'react'
import { tooltipContext } from './tooltipContext'

export const useTooltip = () => useContext(tooltipContext)
