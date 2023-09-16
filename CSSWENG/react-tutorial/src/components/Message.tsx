import React from 'react'

interface ListGroupProps {
    ListProps: string[]
    header: string

}
function Message (groupProps: ListGroupProps) {
    const [selectedIndex, setSelectedIndex] = React.useState(-1)

    const listMap = groupProps.ListProps.map((group, index) => {
        return <li
            key={index}
            className={index === selectedIndex ? 'list-group-item active' : 'list-group-item'}
            onMouseOver={ () => {setSelectedIndex(index)}}>
            {group}
        </li>
    })
    return (
        <>
            <h1>{groupProps.header}</h1>
            <ul className="list-group">
                {groupProps.ListProps.length <= 1 ?
                    (<h1>Please add more items!</h1>)
                    :
                    (listMap)
                }
            </ul>
        </>
        );
}

export default Message