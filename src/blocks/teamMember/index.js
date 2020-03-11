import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';
import './parent';
import edit from './edit';

const attributes = {
  title: {
    type: 'string',
    source: 'html',
    selector: 'h4'
  },
  info: {
    type: 'string',
    source: 'html',
    selector: 'p'
  },
  id: {
    type: 'number'
  },
  alt: {
    type: 'string',
    source: 'attribute',
    selector: 'img',
    attribute: 'alt',
    default: ''
  },
  url: {
    type: 'string',
    source: 'attribute',
    selector: 'img',
    attribute: 'src'
  }
};

registerBlockType('emm-guten/team-member', {
  title: __('Team Member', 'emm-guten'),
  description: __('Block showing a Team Member.', 'emm-guten'),
  icon: 'admin-users',
  category: 'emmguten-category',
  keywords: [
    __('team', 'emm-guten'),
    __('member', 'emm-guten'),
    __('person', 'emm-guten')
  ],
  parent: ['emm-guten/team-members'],
  supports: {
    reusable: false,
    html: false
  },
  attributes,
  save: ({ attributes: { title, info, id, url, alt } }) => {
    return (
      <div>
        {url && (
          <img src={url} alt={alt} className={id ? `wp-image-${id}` : null} />
        )}
        {title && (
          <RichText.Content
            className={'wp-block-emm-guten-team-member__title'}
            tagName="h4"
            value={title}
          />
        )}
        {info && (
          <RichText.Content
            className={'wp-block-emm-guten-team-member__info'}
            tagName="p"
            value={info}
          />
        )}
      </div>
    );
  },
  edit
});
