import { useContext } from 'react'
import { playerContext } from './playerContext'

export const useCurrentVideo = () => {
    const { currentVideo } = useContext(playerContext)
    return currentVideo
}
