/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function() {
  /* global React, Redux, ReactRedux */
  const { connect } = ReactRedux;
  const { bindActionCreators } = Redux;

  const PrintDialog = ({ actions }) => {
    return React.createElement(
      Dialog,
      {
        buttonlabelaccept: "Print",
        buttonaccesskeyaccept: "P",
        ondialogaccept: actions.acceptDialog,
        ondialogcancel: actions.cancelDialog
      },
      React.createElement(
        "div",
        { className: "vgrid" },
        React.createElement(PrintDialogGroupBox, null),
        React.createElement(HSplitter, {
          boxId: "groupboxVbox",
          boxWindowId: "dialog-content-box"
        }),
        React.createElement(PreviewIframe, null)
      )
    );
  };

  PrintDialog.propTypes = {
    actions: PropTypes.object.isRequired
  };

  const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(window.__dialog_actions__, dispatch)
  });

  window.PrintDialog = connect(undefined, mapDispatchToProps)(PrintDialog);
})();
