import {useState} from 'react'
import Affairs from './Affairs'

// types
export type AffairPriorityType = 'high' | 'low' | 'middle' // need to fix any
export type AffairType = {
    _id: number,
    name: string,
    priority: AffairPriorityType,
    }
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: AffairType[] = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]


// pure helper functions
export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType => { // need to fix any
    if (filter === 'all') return affairs
    else affairs.filter((AffairType)=> AffairType.priority = filter)

}

export const deleteAffair = (affairs: AffairType[], _id: AffairType): AffairType[] => { // need to fix any
    return // need to fix
}

function Homework2() {
    const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: AffairType) => setAffairs(deleteAffair(affairs, _id)) // need to fix any

    return (
        <div>

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />
        </div>
    )
}

export default Homework2
