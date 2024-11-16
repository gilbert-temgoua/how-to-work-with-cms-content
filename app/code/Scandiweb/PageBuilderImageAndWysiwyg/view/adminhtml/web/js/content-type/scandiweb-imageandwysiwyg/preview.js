function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

define([
    "Magento_PageBuilder/js/content-type/preview-collection"
], function (
    PreviewBase
) {
    'use strict';

    var Preview = /*#__PURE__*/function (_previewCollection2) {
        "use strict";

        _inheritsLoose(Preview, _previewCollection2);

        function Preview(contentType, config, observableUpdater) {
            var _this;

            _this = _previewCollection2.call(this, contentType, config, observableUpdater) || this;

            return _this;
        }

        var _proto = Preview.prototype;

        return Preview;

    }(PreviewBase)

    return Preview;
});
