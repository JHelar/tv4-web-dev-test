import { useEffect, useRef } from 'react'
import './Tooltip.scss'

type TooltipProps = {
    text: string
    show: boolean
}

const TOOLTIP_WIDTH = 300
const HORIZONTAL_SPACING = 80

export const Tooltip = ({ text, show }: TooltipProps) => {
    useEffect(() => {
        const onMouseMove = ({ clientX, clientY }: MouseEvent) => {
            const maxPosX =
                document.documentElement.clientWidth -
                TOOLTIP_WIDTH -
                HORIZONTAL_SPACING
            const minPosX = HORIZONTAL_SPACING

            const posX = Math.max(
                Math.min(clientX - TOOLTIP_WIDTH / 2, maxPosX),
                minPosX
            )

            const posY = clientY

            document.documentElement.style.setProperty(
                '--pos-x',
                posX.toString()
            )
            document.documentElement.style.setProperty(
                '--pos-y',
                posY.toString()
            )
        }
        document.addEventListener('mousemove', onMouseMove)

        return () => {
            document.removeEventListener('mousemove', onMouseMove)
        }
    }, [])
    return <p className={`tooltip ${show ? 'tooltip--show' : ''}`}>{text}</p>
}
