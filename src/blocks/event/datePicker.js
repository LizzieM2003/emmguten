import { Component } from '@wordpress/element';
import { DateTimePicker } from '@wordpress/components';
import { __experimentalGetSettings } from '@wordpress/date';

class MyDateTimePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: props.eventDate ? props.eventDate : props.currentDate,
      endTime: props.eventTime ? props.eventTime: null
    };
    this.onSelectDate = this.onSelectDate.bind(this);
    this.setEndTime = this.setEndTime.bind(this);
  }

  onSelectDate(date) {
    this.setState({ date });
    this.props.onChangeDate(date);
  }

  setEndTime(e) {
      console.log('Running setEndTime...');
    const endTime = e.target.value;
    console.log(`End time is: ${endTime}`);
    this.setState({endTime});
    this.props.onChangeTime(endTime);
  }

  render() {
    console.log(this.state.date);
    const settings = __experimentalGetSettings();

    // To know if the current timezone is a 12 hour time with look for an "a" in the time format.
    // We also make sure this a is not escaped by a "/".
    const is12HourTime = /a(?!\\)/i.test(
      settings.formats.time
        .toLowerCase() // Test only the lower case a
        .replace(/\\\\/g, '') // Replace "//" with empty strings
        .split('')
        .reverse()
        .join('') // Reverse the string and test for "a" not followed by a slash
    );

    return (
        <>
        <label>Enter the event date and start time:</label>
      <DateTimePicker
        currentDate={this.state.date}
        onChange={date => this.onSelectDate(date)}
        is12Hour={is12HourTime}
      />
      <div>
        <label for="end-time">Enter the event finish time in 24 hr format (optional): </label>
        <input id="end-time" type="time" name="end-time"
            pattern="[0-9]{2}:[0-9]{2}" 
            value={this.state.endTime}
            onChange={this.setEndTime}/>
      </div>
      </>

    );
  }
}

export default MyDateTimePicker;
