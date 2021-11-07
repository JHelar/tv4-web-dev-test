import { createContext } from 'react'

export type TooltipContextType = {
    showTooltip: (text: string) => void
    hideTooltip: () => void
}

export const tooltipContext = createContext<TooltipContextType>({
    hideTooltip: () => {},
    showTooltip: () => {},
})
