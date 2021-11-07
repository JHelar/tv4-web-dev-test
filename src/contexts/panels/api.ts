export type PanelResponse = {
    panels: Panels
}

export type Panels = Panel[]

export type Panel = {
    title: string
    items: PanelItem[]
}

export type PanelItem = {
    id: string
    title: string
    description: string
    image: string
    video: string
}

const FETCH_PANEL_URL =
    'https://gist.githubusercontent.com/jocke138/056a510a33af4d87f1b39d88a6f9dc67/raw/6fe88083f996162a5c335bd4ec7278cdcf2eef78/movies.json'

export const fetchPanels = (): Promise<PanelResponse> =>
    fetch(FETCH_PANEL_URL)
        .then((response) => {
            if (response.status >= 400)
                throw new Error(`[${response.status}] Failed to fetch panels!`)
            return response.json()
        })
        .then((panelsResponse) => panelsResponse as PanelResponse)
