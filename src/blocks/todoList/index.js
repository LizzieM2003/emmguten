import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import edit from './edit';

registerBlockType('emm-guten/todo-list', {
  title: __('Redux Todo List', 'emm-guten'),
  description: __('A todo list.', 'emm-guten'),
  icon: 'editor-ul',
  category: 'emmguten-category',
  edit,
  save() {
    return null;
  }
});
