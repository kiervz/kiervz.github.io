import React from 'react'

function MainContent(props) {
    return (
        <div id='content'>
            {props.children}
        </div>
    )
}

export default MainContent