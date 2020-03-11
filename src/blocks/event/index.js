import { registerBlockType } from '@wordpress/blocks';
// import { DateTimePicker } from '@wordpress/components';
import { __experimentalGetSettings } from '@wordpress/date';
import edit from './edit';

registerBlockType('emm-guten/event-meta', {
  title: 'Event Data',
  icon: 'cloud',
  category: 'emmguten-category',
  description: 'Event Data Block',
  attributes: {
    eventStartDate: {
      type: 'string',
      source: 'meta',
      meta: 'emmguten_event_start_date'
    },
    eventEndTime: {
      type: 'string',
      source: 'meta',
      meta: 'emmguten_event_end_time'
    }
  },
  // No information saved to the block
  // Data is saved to post meta via attributes
  save() {
    return null;
  },
  edit
});
