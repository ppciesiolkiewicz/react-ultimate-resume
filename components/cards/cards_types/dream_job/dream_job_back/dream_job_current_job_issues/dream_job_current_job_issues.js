"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DreamJobCurrentJobIssues = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _reactJss = require("react-jss");

var _reactIntl = require("react-intl");

var _job_issues_utils = require("../../utils/job_issues/job_issues_utils");

var _dream_job_current_job_issues_styles = require("./dream_job_current_job_issues_styles");

var _job_issues_translations = require("../../utils/job_issues/job_issues_translations");

var useStyles = (0, _reactJss.createUseStyles)(_dream_job_current_job_issues_styles.styles);

var DreamJobCurrentJobIssuesComponent = function DreamJobCurrentJobIssuesComponent(_ref) {
  var _ref$currentJobIssues = _ref.currentJobIssues,
      currentJobIssues = _ref$currentJobIssues === void 0 ? {} : _ref$currentJobIssues;
  var classes = useStyles();

  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  return _react.default.createElement("ul", {
    className: classes.list
  }, Object.entries(currentJobIssues).filter(function (_ref2) {
    var _ref3 = (0, _slicedToArray2.default)(_ref2, 2),
        value = _ref3[1];

    return Boolean(value);
  }).map(function (_ref4) {
    var _Object$entries$find;

    var _ref5 = (0, _slicedToArray2.default)(_ref4, 1),
        issueId = _ref5[0];

    var correspondingIssueKey = (_Object$entries$find = Object.entries(_job_issues_utils.JobIssues).find(function (_ref6) {
      var _ref7 = (0, _slicedToArray2.default)(_ref6, 2),
          id = _ref7[1];

      return id === issueId;
    })) === null || _Object$entries$find === void 0 ? void 0 : _Object$entries$find[0];

    if (!correspondingIssueKey) {
      return null;
    }

    return _react.default.createElement("li", {
      className: classes.listItem,
      key: "dream_job_current_job_issue_".concat(issueId)
    }, formatMessage(_job_issues_translations.translations[correspondingIssueKey]));
  }));
};

var DreamJobCurrentJobIssues = DreamJobCurrentJobIssuesComponent;
exports.DreamJobCurrentJobIssues = DreamJobCurrentJobIssues;