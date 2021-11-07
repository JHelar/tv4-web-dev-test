import { forwardRef, useEffect, useRef } from 'react'
import { useVideoPlayerRef } from './useVideoPlayerRef'
import './Player.scss'

export type PlayerProps = {
    video: string
}

export const Player = forwardRef<HTMLVideoElement, PlayerProps>(
    ({ video }, ref) => {
        const videoRef = useVideoPlayerRef()
        const sourceRef = useRef<HTMLSourceElement>(null)

        useEffect(() => {
            const sourceElement = sourceRef.current
            const videoElement = videoRef?.current
            if (sourceElement && videoElement) {
                sourceElement.src = video
                videoElement.load()
                videoElement.play()
            }
        }, [video])

        return (
            <video ref={ref} className="player">
                <source type="video/mp4" ref={sourceRef} />
            </video>
        )
    }
)
