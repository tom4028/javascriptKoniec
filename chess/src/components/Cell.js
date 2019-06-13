import React  from 'react';
import './board.css';

const Cell = (props)=>{

    const styles={
        width: '50px',
        height: '50px',
        backgroundColor: props.bck,
        textAlign:'center',
        lineHeight: '50px'
    }


    return (
        <div style={styles}>
            <span className="figure">{props.figure}</span>
        </div>
    )
}

export default Cell;