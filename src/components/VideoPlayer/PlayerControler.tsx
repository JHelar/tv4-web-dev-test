import { useEffect } from 'react'
import { useVideoPlayerRef } from './useVideoPlayerRef'

export const PlayerController = () => {
    const videoRef = useVideoPlayerRef()

    useEffect(() => {
        const videoElement = videoRef?.current
        if (videoElement) {
            videoElement.controls = true
        }
    }, [videoRef])

    // ToDo: If you have time, implement controller.
    return null
}
