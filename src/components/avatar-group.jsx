import React from "react";
const convertNameIntoInitial = (fullname) => {
   return fullname.match(/(^\S\S?|\b\S)?/g).join("").match(/(^\S|\S$)?/g).join("").toUpperCase()
}
const AvatarGroup = ({ maxLength, size, data }) => {
    return (
        <div className={`avatar-group ${size}`}>
            {data.slice(0,maxLength).map((item,index) => (
                <div className={`avatar-item ${item.photo === '' && `initial-name`}`} key={index}>
                    {item.photo !== '' ?
                        <img src={item.photo} alt={item.name} /> :
                        <span>{convertNameIntoInitial(item.name)}</span>
                    }                                       
                </div>
            ))}  
            
            {data.length > maxLength && 
                <div className={'avatar-item max-length'}>
                    <span>+ {data.length > 0 && data.length - maxLength}</span>
                </div>
            }
                        
        </div>
    )
}
/**
 * Set default Props
 */
AvatarGroup.defaultProps = {
    maxLength: 5,
    size: 'sm',
    data: {}
}



export default AvatarGroup