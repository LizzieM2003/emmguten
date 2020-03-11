import { Component } from '@wordpress/element';
import { RichText } from '@wordpress/block-editor';
import { DateTimePicker } from '@wordpress/components';
import { withDispatch } from '@wordpress/data';
import MyDatePicker from './datePicker';

class EventEdit extends Component {
  constructor(props) {
    super(props);

    this.updateEventTitle = this.updateEventTitle.bind(this);
    this.updateEventDate = this.updateEventDate.bind(this);
    this.updateEventDetails = this.updateEventDetails.bind(this);
  }

  componentDidMount() {
    console.log(this.props);
  }

  updateEventTitle(eventTitle) {
    this.props.setAttributes({ eventTitle });
    this.props.onTitleChange(eventTitle);
  }

  updateEventDate(eventDate) {
    console.log('Running updateEventDate...');
    console.log(`Event date is: ${eventDate}`);
    this.props.setAttributes({ eventDate });
  }

  updateEventDetails(eventDetails) {
    this.props.setAttributes({ eventDetails });
  }

  render() {
    const { className, attributes } = this.props;
    let currentDate = new Date().toISOString().slice(0, 19);

    return (
      <div className={className}>
        <RichText
          tagName="h4"
          value={attributes.eventTitle}
          placeholder={'Enter the Event Title'}
          onChange={this.updateEventTitle}
        />
        {/*
        <DateTimePicker
          currentDate={currentDate}
          onChange={this.updateEventDate}
          placeholder={'Enter the Event Date'}
        />
    */}
        <MyDatePicker
          eventDate={attributes.eventDate}
          currentDate={currentDate}
          onChangeDate={this.updateEventDate}
        />

        <RichText
          tagName="p"
          value={attributes.eventDetails}
          placeholder={'Enter the Event Details'}
          onChange={this.updateEventDetails}
        />
      </div>
    );
  }
}

export default withDispatch(dispatch => {
  return {
    onTitleChange: title => {
      dispatch('core/editor').editPost({ title });
    }
  };
})(EventEdit);
