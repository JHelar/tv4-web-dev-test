import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import { PanelsProvider } from './contexts/panels/PanelsProvider'
import { PlayerProvider } from './contexts/player/PlayerProvider'
import { TooltipProvider } from './contexts/tooltip/TooltipProvider'

ReactDOM.render(
    <React.StrictMode>
        <PanelsProvider>
            <PlayerProvider>
                <TooltipProvider>
                    <App />
                </TooltipProvider>
            </PlayerProvider>
        </PanelsProvider>
    </React.StrictMode>,
    document.getElementById('root')
)
