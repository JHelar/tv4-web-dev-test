import { useRef } from 'react'
import { videoPlayerContext } from './videoPlayerContext'
import { useCurrentVideo } from '../../contexts/player/useCurrentVideo'
import { Player } from './Player'
import { PlayerController } from './PlayerControler'
import './VideoPlayer.scss'

const VideoPlayerProvider = videoPlayerContext.Provider

export const VideoPlayer = () => {
    const currentVideo = useCurrentVideo()
    const playerRef = useRef<HTMLVideoElement>(null)

    return (
        <VideoPlayerProvider
            value={{
                playerRef,
            }}
        >
            <div className="video-player">
                {currentVideo === undefined ? (
                    <div className="video-player__placeholder"></div>
                ) : (
                    <>
                        <Player video={currentVideo} ref={playerRef} />
                        <PlayerController />
                    </>
                )}
            </div>
        </VideoPlayerProvider>
    )
}
