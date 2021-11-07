import { FunctionComponent, useEffect, useState } from 'react'
import { fetchPanels, Panel } from './api'
import { panelsContext } from './panelsContext'

const Provider = panelsContext.Provider

export const PanelsProvider: FunctionComponent = ({ children }) => {
    const [panels, setPanels] = useState<Panel[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getPanels = async () => {
            try {
                setLoading(true)
                const { panels } = await fetchPanels()
                setPanels(panels)
            } catch (error) {
                console.error('Error in usePanels:', error)
            } finally {
                setLoading(false)
            }
        }
        getPanels()
    }, [])

    return (
        <Provider
            value={{
                panels,
                loading,
            }}
        >
            {children}
        </Provider>
    )
}
