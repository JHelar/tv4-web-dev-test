import { useContext } from 'react'
import { videoPlayerContext } from './videoPlayerContext'

export const useVideoPlayerRef = () => useContext(videoPlayerContext).playerRef
