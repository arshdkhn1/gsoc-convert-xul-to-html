/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function() {
  /* global React, Redux, ReactRedux */
  const { connect } = ReactRedux;
  const { bindActionCreators } = Redux;

  const Options = ({ state, actions }) => {
    const { showTasksWithNoDueDate, showCompletedTasks } = state;
    const { toggleCompletedTasks, toggleTasksWithNoDueDate } = actions;

    return (
      <Fieldset title="Options" id="optionsGroup">
        <div className="fieldset-content-wrapper">
          <div className="row row-label-expanded">
            <input
              className="row-input checkbox"
              type="checkbox"
              id="tasks-with-no-due-date"
              checked={showTasksWithNoDueDate}
              onChange={toggleTasksWithNoDueDate}
            />
            <label htmlFor="tasks-with-no-due-date" className="row-label">
              Tasks with no due date
            </label>
          </div>
          <div className="row row-label-expanded">
            <input
              className="row-input checkbox"
              type="checkbox"
              id="completed-tasks"
              checked={showCompletedTasks}
              onChange={toggleCompletedTasks}
            />
            <label htmlFor="completed-tasks" className="row-label">
              Completed tasks
            </label>
          </div>
        </div>
      </Fieldset>
    );
  };

  Options.propTypes = {
    state: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };

  const mapStateToProps = ({ options }) => ({ state: options });

  const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(window.__options_actions__, dispatch)
  });

  window.Options = connect(mapStateToProps, mapDispatchToProps)(Options);
})();
