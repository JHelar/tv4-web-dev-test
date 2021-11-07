import { useContext } from 'react'
import { playerContext } from './playerContext'

export const usePlayer = () => {
    const { play } = useContext(playerContext)

    return {
        play,
    }
}
