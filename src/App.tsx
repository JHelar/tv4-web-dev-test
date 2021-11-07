import { Swimlane } from './components/Swimlane'
import { VideoPlayer } from './components/VideoPlayer'
import { usePanels } from './contexts/panels/usePanels'
import './App.scss'
import { useEffect } from 'react'

export const App = () => {
    const { loading, panels } = usePanels()

    return (
        <div className="main-content">
            <VideoPlayer />
            {!loading &&
                panels.map((panel, index) => (
                    <Swimlane {...panel} key={index} />
                ))}
        </div>
    )
}

export default App
