import { Panel } from '../../contexts/panels/api'
import { Slider } from './Slider'
import './Swimlane.scss'

export type SwimlaneProps = Panel
export const Swimlane = ({ title, items }: SwimlaneProps) => {
    return (
        <div className="swimlane">
            <h2 className="swimlane__title">{title}</h2>
            <Slider items={items} />
        </div>
    )
}
