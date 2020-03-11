import { Component } from '@wordpress/element';
import {
  RichText,
  MediaPlaceholder,
  BlockControls,
  MediaUpload,
  MediaUploadCheck
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { isBlobURL } from '@wordpress/blob';
import {
  Spinner,
  withNotices,
  Toolbar,
  IconButton
} from '@wordpress/components';

class TeamMemberEdit extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeInfo = this.onChangeInfo.bind(this);
    this.onSelectImage = this.onSelectImage.bind(this);
    this.onSelectURL = this.onSelectURL.bind(this);
    this.onUploadError = this.onUploadError.bind(this);
    this.removeImage = this.removeImage.bind(this);
  }

  onChangeTitle(title) {
    this.props.setAttributes({ title });
  }

  onChangeInfo(info) {
    this.props.setAttributes({ info });
  }

  onSelectImage({ id, url, alt }) {
    this.props.setAttributes({
      id,
      url,
      alt
    });
  }

  onSelectURL(url) {
    this.props.setAttributes({
      url,
      id: null,
      alt: ''
    });
  }

  onUploadError(message) {
    const { noticeOperations } = this.props;
    noticeOperations.createErrorNotice(message);
  }

  removeImage() {
    this.props.setAttributes({
      id: null,
      url: '',
      alt: ''
    });
  }

  render() {
    const {
      className,
      attributes: { title, info, url, alt, id },
      noticeUI
    } = this.props;

    return (
      <>
        <BlockControls>
          {url && (
            <Toolbar>
              {id && (
                <MediaUploadCheck>
                  <MediaUpload
                    onSelect={this.onSelectImage}
                    allowedTypes={['image']}
                    value={id}
                    render={({ open }) => {
                      return (
                        <IconButton
                          className="components-icon-button components-toolbar__control"
                          label={__('Edit Image', 'emm-guten')}
                          onClick={open}
                          icon="edit"
                        />
                      );
                    }}
                  />
                </MediaUploadCheck>
              )}
              <IconButton
                className="components-icon-button components-toolbar__control"
                label={__('Remove Image', 'emm-guten')}
                onClick={this.removeImage}
                icon="trash"
              />
            </Toolbar>
          )}
        </BlockControls>
        <div className={className}>
          {url ? (
            <>
              <img src={url} alt={alt} />
              {isBlobURL(url) && <Spinner />}
            </>
          ) : (
            <MediaPlaceholder
              icon="format-image"
              onSelect={this.onSelectImage}
              onSelectURL={this.onSelectURL}
              onError={this.onUploadError}
              accept="image/*"
              allowedTypes={['image/svg+xml']}
              notices={noticeUI}
            />
          )}
          <RichText
            className={'wp-block-emm-guten-team-member__title'}
            tagName="h4"
            onChange={this.onChangeTitle}
            value={title}
            placeholder={__('Member Name', 'emm-guten')}
            allowedFormats={[]}
          />
          <RichText
            className={'wp-block-emm-guten-team-member__info'}
            tagName="p"
            onChange={this.onChangeInfo}
            value={info}
            placeholder={__('Member Info', 'emm-guten')}
            allowedFormats={[]}
          />
        </div>
      </>
    );
  }
}

export default withNotices(TeamMemberEdit);
