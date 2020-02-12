import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
//import Message from '../components/message';
//import MessageForm from '../containers/message_form';
import { selectChannel, fetchMessages } from '../actions/index';


class ChannelList extends Component {
    componentWillReceiveProps(nextProps) {
    if (nextProps.selectedChannel !== this.props.selectedChannel) {
      this.props.fetchMessages(nextProps.selectedChannel);
    }
  }

    handleClick = (channel) => {
    this.props.selectChannel(channel);
    }
  
    render() {
        return (
      <div className="channels-container">
        <span>Redux Chat</span>
        <ul>
          {this.props.channels.map((channel) => {
              return <li 
              key={channel}
              className={channel === this.props.selectedChannel ? 'active' : null}
              onClick={() => this.handleClick(channel)}>
              #{channel}
              </li>
          })}
        </ul>
      </div>
    );
    }
}

function mapStateToProps(state) {
    return {
        selectedChannel: state.selectedChannel,
        channels: state.channels
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        { selectChannel, fetchMessages },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);