import React from 'react';
import Message from './Message';
import {connect} from 'react-redux';

const Child3 = (props) => {
    const messageMap = props.messages.map(message => {
        return <Message message={message}/>
    })
    return <div>
        {messageMap}
    </div>
};

const mapStateToProps = state => state;
export default connect(mapStateToProps)(Child3);