import { Component } from '@wordpress/element';
import MyDatePicker from './datePicker';

class EventEdit extends Component {
  constructor(props) {
    super(props);

    this.updateEventStartDate = this.updateEventStartDate.bind(this);
    this.updateEventEndTime = this.updateEventEndTime.bind(this);
  }

  componentDidMount() {
    console.log(this.props);
  }

  updateEventStartDate(eventStartDate) {
    this.props.setAttributes({ eventStartDate });
  }

  updateEventEndTime(eventEndTime) {
      console.log('Running updateEventEndTime...');
    if (eventEndTime) {
        this.props.setAttributes({eventEndTime});
    }
  }


  render() {
    const { className, attributes } = this.props;
    let currentDate = new Date().toISOString().slice(0, 19);

    return (
      <div className={className}>
        <MyDatePicker
          eventDate={attributes.eventStartDate}
          currentDate={currentDate}
          eventTime={attributes.eventEndTime}
          onChangeDate={this.updateEventStartDate}
          onChangeTime={this.updateEventEndTime}
        />
      </div>
    );
  }
}

export default EventEdit;
