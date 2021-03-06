/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function() {
  class DialogButton extends React.Component {
    componentDidMount() {
      this.addAttributes(this.props);
    }

    componentWillReceiveProps(nextProps) {
      this.addAttributes(nextProps);
    }

    addAttributes(props) {
      this.button.setAttribute("dlgtype", props.dlgtype);
      this.button.setAttribute("icon", props.dlgtype);
      if (props.isDefaultButton) {
        this.button.setAttribute("default", "true");
      }
    }

    render() {
      const { html, className, onClick, accessKey } = this.props;
      return React.createElement("button", {
        ref: node => (this.button = node),
        dangerouslySetInnerHTML: {
          __html: html
        },
        onClick: onClick,
        accessKey: accessKey,
        className: className
      });
    }
  }

  /* eslint-disable react/no-unused-prop-types */
  DialogButton.propTypes = {
    dlgtype: PropTypes.string,
    accessKey: PropTypes.string,
    className: PropTypes.string,
    html: PropTypes.string,
    onClick: PropTypes.func,
    isDefaultButton: PropTypes.bool
  };

  window.DialogButton = DialogButton;
})();
