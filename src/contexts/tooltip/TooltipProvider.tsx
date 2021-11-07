import { FunctionComponent, useCallback, useState } from 'react'
import { Tooltip } from '../../components/Tooltip'
import { tooltipContext, TooltipContextType } from './tooltipContext'

const Provider = tooltipContext.Provider
export const TooltipProvider: FunctionComponent = ({ children }) => {
    const [isShowing, setIsShowing] = useState(false)
    const [text, setText] = useState('')
    const hideTooltip = useCallback(() => {
        setIsShowing(false)
    }, [])

    const showTooltip = useCallback<TooltipContextType['showTooltip']>(
        (text) => {
            setText(text)
            setIsShowing(true)
        },
        []
    )

    return (
        <Provider
            value={{
                hideTooltip,
                showTooltip,
            }}
        >
            {children}
            <Tooltip text={text} show={isShowing} />
        </Provider>
    )
}
