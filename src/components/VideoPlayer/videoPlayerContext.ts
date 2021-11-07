import { createContext, RefObject } from 'react'

type VideoPlayerContextType = {
    playerRef: RefObject<HTMLVideoElement> | null
}

export const videoPlayerContext = createContext<VideoPlayerContextType>({
    playerRef: null,
})
