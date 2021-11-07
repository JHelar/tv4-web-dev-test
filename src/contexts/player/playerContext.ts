import { createContext, Ref } from 'react'

export type PlayerContextType = {
    play: (video: string) => void
    currentVideo?: string
}

export const playerContext = createContext<PlayerContextType>({
    play: () => {},
})
