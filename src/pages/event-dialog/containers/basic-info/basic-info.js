/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function() {
  const { connect } = ReactRedux;
  const { bindActionCreators } = Redux;

  const BasicInfo = ({ state, actions }) => {
    const { title, location, itemCalendar, itemCategory } = state;
    const { changeTitle, changeLocation, changeItemCategory, changeItemCalendar } = actions;

    return (
      <div id="basic-info-wrapper">
        <div id="event-grid-title-row" className="row event-grid-title-row">
          <label
            htmlFor="item-title"
            className="row-label"
            dangerouslySetInnerHTML={{ __html: underlineAccessKey("Title:", "i") }}
          />
          <input
            accessKey="I"
            type="text"
            id="item-title"
            className="row-input"
            value={title}
            onChange={changeTitle}
          />
        </div>
        <div className="row event-grid-location-row">
          <label
            htmlFor="item-location"
            className="row-label"
            dangerouslySetInnerHTML={{ __html: underlineAccessKey("Location:", "L") }}
          />
          <input
            accessKey="L"
            type="text"
            id="item-location"
            className="row-input"
            value={location}
            onChange={changeLocation}
          />
        </div>
        <div id="event-grid-category-color-row" className="row same-row">
          <div id="event-grid-category" className="row">
            <label
              htmlFor="item-categories"
              className="row-label"
              id="event-grid-category-labels-box"
              dangerouslySetInnerHTML={{ __html: underlineAccessKey("Category:", "y") }}
            />
            <select
              name="item-categories"
              id="item-categories"
              className="row-input"
              accessKey="y"
              onChange={changeItemCategory}
              value={itemCategory}
            />
          </div>
          <div id="item-calendar-row" className="row">
            <label
              htmlFor="item-calendar"
              className="row-label"
              dangerouslySetInnerHTML={{ __html: underlineAccessKey("Calendar:", "C") }}
            />
            <select
              name="item-calendar"
              id="item-calendar"
              className="row-input"
              accessKey="C"
              onChange={changeItemCalendar}
              value={itemCalendar}
            >
              <option value="HOME">Home</option>
            </select>
          </div>
        </div>
        <div className="separator groove" />
      </div>
    );
  };

  BasicInfo.propTypes = {
    state: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };

  const mapStateToProps = ({ basicInfo }) => ({ state: basicInfo });

  const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(window.__basic_info_actions__, dispatch)
  });

  window.BasicInfo = connect(mapStateToProps, mapDispatchToProps)(BasicInfo);
})();
