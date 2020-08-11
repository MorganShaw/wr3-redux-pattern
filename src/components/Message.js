import React from 'react';
import {connect} from 'react-redux';

const Message = (props) => {
    return <div>
        <p>{props.message}</p>
    </div>
}

export default Message;