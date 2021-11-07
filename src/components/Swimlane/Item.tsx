import { KeyboardEvent, MouseEvent, useCallback } from 'react'
import { PanelItem } from '../../contexts/panels/api'
import { usePlayer } from '../../contexts/player/usePlayerControls'
import { useTooltip } from '../../contexts/tooltip/useTooltip'
import './Item.scss'

const enum KEY_CODES {
    SPACE = ' ',
    ENTER = 'Enter',
}

const IS_TOUCH_DEVICE = 'ontouchstart' in window || navigator.maxTouchPoints > 0

export const Item = ({ title, video, image, description }: PanelItem) => {
    const { play } = usePlayer()
    const { showTooltip, hideTooltip } = useTooltip()

    const onClick = useCallback(() => {
        play(video)
    }, [video])

    const onKeyPress = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === KEY_CODES.SPACE || e.key === KEY_CODES.ENTER) {
                play(video)
            }
        },
        [video]
    )

    const onMouseEnter = useCallback(() => {
        if (!IS_TOUCH_DEVICE) {
            showTooltip(description)
        }
    }, [])

    const onMouseLeave = useCallback(() => {
        hideTooltip()
    }, [])

    return (
        <div
            className="swimlane-item"
            role="button"
            tabIndex={0}
            onClick={onClick}
            onKeyPress={onKeyPress}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <img src={image} className="swimlane-item__image" />
            <h3 className="swimlane-item__title">{title}</h3>
            <p className="sr-only">{description}</p>
        </div>
    )
}
