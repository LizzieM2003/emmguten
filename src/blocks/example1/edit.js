import { Component } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import {
  RichText,
  BlockControls,
  AlignmentToolbar
} from '@wordpress/block-editor';

class Edit extends Component {
  // class properties below require a babel plugin to be installed so recoded as underneath

  //   onChangeContent = content => {
  //     this.props.setAttributes({ content });
  //   };

  //   onChangeAlignment = alignment => {
  //     this.props.setAttributes({ alignment });
  //   };

  constructor(props) {
    super(props);
    this.onChangeContent = this.onChangeContent.bind(this);
    this.onChangeAlignment = this.onChangeAlignment.bind(this);
  }

  onChangeContent(content) {
    this.props.setAttributes({ content });
  }

  onChangeAlignment(alignment) {
    this.props.setAttributes({ alignment });
  }

  render() {
    const { className, attributes, setAttributes } = this.props;
    const { content, alignment } = attributes;

    const onChangeContent = content => {
      setAttributes({ content });
    };

    const onChangeAlignment = alignment => {
      setAttributes({ alignment });
    };

    return (
      <>
        <BlockControls>
          <AlignmentToolbar
            value={alignment}
            onChange={this.onChangeAlignment}
          />
        </BlockControls>
        <RichText
          tagName="p"
          className={className}
          onChange={this.onChangeContent}
          value={content}
          allowedFormats={['bold']}
          style={{
            textAlign: alignment
          }}
        />
      </>
    );
  }
}

export default Edit;
