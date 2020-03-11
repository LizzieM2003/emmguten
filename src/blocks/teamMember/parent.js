import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';

const attributes = {
  columns: {
    type: 'number',
    default: 3
  }
};

registerBlockType('emm-guten/team-members', {
  title: __('Team Members', 'emm-guten'),
  description: __('Block showing all Team Members', 'emm-guten'),
  icon: 'grid-view',
  category: 'emmguten-category',
  keywords: [
    __('team', 'emm-guten'),
    __('member', 'emm-guten'),
    __('person', 'emm-guten')
  ],
  supports: {
    html: false
  },
  attributes,
  edit({ className, attributes: { columns }, setAttributes }) {
    return (
      <div className={`${className} has-${columns}-columns`}>
        <InspectorControls>
          <PanelBody>
            <RangeControl
              label={__('Columns', 'emm-guten')}
              value={columns}
              onChange={columns => setAttributes({ columns })}
              min={1}
              max={4}
            />
          </PanelBody>
        </InspectorControls>
        <InnerBlocks
          allowedBlocks={['emm-guten/team-member']}
          template={[['emm-guten/team-member'], ['emm-guten/team-member']]}
        />
      </div>
    );
  },
  save({ attributes: { columns } }) {
    return (
      <div className={`has-${columns}-columns`}>
        <InnerBlocks.Content />
      </div>
    );
  }
});
