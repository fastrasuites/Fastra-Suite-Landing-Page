import React from 'react';


const Card = ({svgImage, title, content, boxType}) => {


    return (

        <>
        {boxType === true ?
            (<div className='bg'>
            <div className="svg">
                {svgImage}
            </div>
            <h5>{title}</h5>
            <p>{content}</p>
            </div>) 
            :
            (
                <div className='bg2'>
            <div className="svg">
                {svgImage}
            </div>
            <h5>{title}</h5>
            <p>{content}</p>
            </div>
            )
        }
        </>
        
    )
}

export default Card;