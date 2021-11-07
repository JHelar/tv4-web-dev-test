import { useCallback, useEffect, useRef, useState } from 'react'
import { PanelItem } from '../../contexts/panels/api'
import { Item } from './Item'
import { CaretRight } from './CaretRight'
import './Slider.scss'
import { CaretLeft } from './CaretLeft'

type SwimlaneItemsProp = {
    items: PanelItem[]
}
const ITEM_SPACING = 16

export const Slider = ({ items }: SwimlaneItemsProp) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const [canGoBack, setCanGoBack] = useState(false)
    const [canGoForward, setCanGoForward] = useState(true)

    const scrollContainer = (forward: boolean) => {
        const containerElement = containerRef.current
        if (containerElement) {
            const child = containerElement.children[0]
            const { width: childWidth } = child.getBoundingClientRect()
            const remainingLeft =
                (containerElement.scrollLeft % (childWidth + ITEM_SPACING)) +
                (childWidth + ITEM_SPACING)

            const left =
                containerElement.scrollLeft + remainingLeft * (forward ? 1 : -1)

            containerElement.scrollTo({
                left,
            })
        }
    }

    const scrollForward = useCallback(() => {
        scrollContainer(true)
    }, [])

    const scrollBack = useCallback(() => {
        scrollContainer(false)
    }, [])

    useEffect(() => {
        const containerElement = containerRef.current
        if (containerElement) {
            // ToDo: throttle this handler!
            const scrollHandler = () => {
                const { width: containerWidth } =
                    containerElement.getBoundingClientRect()
                const maxLeft = containerElement.scrollWidth - containerWidth

                setCanGoBack(containerElement.scrollLeft > 0)
                setCanGoForward(containerElement.scrollLeft < maxLeft)
            }
            containerElement.addEventListener('scroll', scrollHandler)

            return () => {
                containerElement.removeEventListener('scroll', scrollHandler)
            }
        }
    }, [])

    return (
        <div className="swimlane__slider">
            {canGoBack && (
                <button
                    className="swimlane__slider-advance swimlane__slider-advance--back"
                    onClick={scrollBack}
                    aria-label="See previous titles"
                >
                    <CaretLeft />
                </button>
            )}
            <div className="swimlane__slider-container" ref={containerRef}>
                {items.map((item) => (
                    <Item {...item} key={item.id} />
                ))}
            </div>
            {canGoForward && (
                <button
                    className="swimlane__slider-advance swimlane__slider-advance--forward"
                    onClick={scrollForward}
                    aria-label="See more titles"
                >
                    <CaretRight />
                </button>
            )}
        </div>
    )
}
