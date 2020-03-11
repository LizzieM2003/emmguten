import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { RichText, BlockControls } from '@wordpress/block-editor';
import Edit from './edit';

// const blockStyle = {
//   backgroundColor: '#900',
//   color: '#fff',
//   padding: '20px'
// };

registerBlockType('emm-guten/example-01-basic-esnext', {
  title: __('Example: Basic (esnext)', 'emm-guten'),
  icon: 'universal-access-alt',
  category: 'emmguten-category',
  example: {},
  attributes: {
    content: {
      type: 'string',
      source: 'html',
      selector: 'p'
    },
    alignment: {
      type: 'string'
    }
  },
  edit: Edit,
  edit2: ({ className, attributes: { content }, setAttributes }) => {
    // return <div style={blockStyle}>Hello World, step 1 (from the editor).</div>;
    // console.log(className);
    const onChangeContent = content => setAttributes({ content });

    return (
      <>
        <BlockControls
          controls={[
            {
              icon: 'wordpress',
              title: __('test', 'emm-guten'),
              onClick: () => alert(true),
              isActive: false
            }
          ]}
        />
        <RichText
          // style={blockStyle}
          tagname="p"
          className={className}
          onChange={onChangeContent}
          value={content}
          formattingControls={['bold']}
        />
      </>
    );
  },
  save: ({ attributes: { content, alignment } }) => {
    return (
      <RichText.Content
        tagName="p"
        value={content}
        style={{ textAlign: alignment }}
      />
    );
  }
});
