import { FunctionComponent, useCallback, useRef, useState } from 'react'
import { playerContext, PlayerContextType } from './playerContext'

const Provider = playerContext.Provider
export const PlayerProvider: FunctionComponent = ({ children }) => {
    const [currentVideo, setCurrentVideo] = useState<string | undefined>()
    const videoRef = useRef<HTMLVideoElement>(null)

    const onPlay = useCallback<PlayerContextType['play']>((video) => {
        setCurrentVideo(video)
    }, [])

    return (
        <Provider
            value={{
                play: onPlay,
                currentVideo,
            }}
        >
            {children}
        </Provider>
    )
}
