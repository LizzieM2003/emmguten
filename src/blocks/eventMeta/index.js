import { registerBlockType } from '@wordpress/blocks';
import { RichText } from '@wordpress/block-editor';
// import { DateTimePicker } from '@wordpress/components';
import { __experimentalGetSettings } from '@wordpress/date';
import edit from './edit';

registerBlockType('emm-guten/event-meta', {
  title: 'Event Data',
  icon: 'smiley',
  category: 'emmguten-category',
  description: 'Event Meta Test',
  attributes: {
    eventTitle: {
      type: 'string',
      source: 'meta',
      meta: 'emmguten_event_title_field'
    },
    eventDate: {
      type: 'string',
      source: 'meta',
      meta: 'emmguten_event_date_field'
    },
    eventDetails: {
      type: 'string',
      source: 'meta',
      meta: 'emmguten_event_details_field'
    }
  },
  // No information saved to the block
  // Data is saved to post meta via attributes
  save() {
    return null;
  },
  edit
});
