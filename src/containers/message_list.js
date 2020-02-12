import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Message from '../components/message';
import MessageForm from '../containers/message_form';
import { fetchMessages } from '../actions/index';


class MessageList extends Component {

    componentWillMount() {
        this.fetchMessages();
    }

    // componentDidMount() {
    //     this.refresher = setInterval(this.fetchMessages, 5000);
    // }

    // componentWillUnmount() {
    //     clearInterval(this.refresher);
    // }

    fetchMessages = () => {
        this.props.fetchMessages(this.props.selectedChannel);
    }

    render() {
        return (
            <div>
            <ul className="list-group-item">
                {
                    this.props.messages.map((message) => {
                        return <Message key={message.id} message={message} />
                    })
                }
            </ul>
            <MessageForm />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        messages: state.messages,
        channel: state.channel
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        { fetchMessages: fetchMessages },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);