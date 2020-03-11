import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

registerBlockType('emm-guten/basic-block', {
  title: __('Basic Example','emm-guten'),
  icon: 'smiley',
  category: 'layout',
  edit: () => <div>Hola, mundo!</div>,
  save: () => <div>Hola, mundo!</div>
});
