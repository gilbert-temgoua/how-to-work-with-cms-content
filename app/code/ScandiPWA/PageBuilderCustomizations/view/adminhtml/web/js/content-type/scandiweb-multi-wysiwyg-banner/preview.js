/*eslint-disable */
/* jscs:disable */

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

define(["jarallax", "jarallaxVideo", "jquery", "jquery/z-index", "mage/translate", "Magento_PageBuilder/js/events", "mageUtils", "underscore", "vimeoWrapper", "Magento_PageBuilder/js/content-type-menu/hide-show-option", "Magento_PageBuilder/js/uploader", "Magento_PageBuilder/js/utils/delay-until", "Magento_PageBuilder/js/utils/editor", "Magento_PageBuilder/js/utils/nesting-link-dialog", "Magento_PageBuilder/js/utils/nesting-widget-dialog", "Magento_PageBuilder/js/wysiwyg/factory", "Magento_PageBuilder/js/content-type/preview"], function (_jarallax, _jarallaxVideo, _jquery, _zIndex, _translate, _events, _mageUtils, _underscore, _vimeoWrapper, _hideShowOption, _uploader, _delayUntil, _editor, _nestingLinkDialog, _nestingWidgetDialog, _factory, _preview) {
    /**
     * @category  ScandiPWA
     * @package   ScandiPWA/PageBuilderCustomizations
     * @author    info <info@scandiweb.com>
     * @copyright Copyright (c) 2023 Scandiweb, Inc (https://scandiweb.com)
     */

    /**
     * @api
     */
    var Preview = /*#__PURE__*/function (_preview2) {
        "use strict";

        _inheritsLoose(Preview, _preview2);

        function Preview() {
            var _this;

            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            _this = _preview2.call.apply(_preview2, [this].concat(args)) || this;
            _this.buttonPlaceholder = (0, _translate)("Edit Button Text");
            _this.wysiwygDeferred = _jquery.Deferred();
            _this.handledDoubleClick = false;
            _this.videoUpdateProperties = ["background_type", "video_fallback_image", "video_lazy_load", "video_loop", "video_play_only_visible", "video_source"];
            _this.contentOverlaySelector = ".pagebuilder-wysiwyg-example";
            _this.defaultOverlayZIndex = 2;
            _this.activeEditorOverlayZIndex = 3;
            _this.buildJarallax = _underscore.debounce(function () {
                // Destroy all instances of the plugin prior
                try {
                    jarallax(_this.wrapper, "destroy");
                } catch (e) {// Failure of destroying is acceptable
                }

                if (_this.wrapper && _this.wrapper.dataset.backgroundType === "video" && _this.wrapper.dataset.videoSrc.length) {
                    _underscore.defer(function () {
                        // Build Parallax on elements with the correct class
                        jarallax(_this.wrapper, {
                            videoSrc: _this.wrapper.dataset.videoSrc,
                            imgSrc: _this.wrapper.dataset.videoFallbackSrc,
                            videoLoop: _this.contentType.dataStore.get("video_loop") === "true",
                            speed: 1,
                            videoPlayOnlyVisible: _this.contentType.dataStore.get("video_play_only_visible") === "true",
                            videoLazyLoading: _this.contentType.dataStore.get("video_lazy_load") === "true"
                        }); // @ts-ignore

                        if (_this.wrapper.jarallax && _this.wrapper.jarallax.video) {
                            // @ts-ignore
                            _this.wrapper.jarallax.video.on("started", function () {
                                // @ts-ignore
                                if (_this.wrapper.jarallax && _this.wrapper.jarallax.$video) {
                                    // @ts-ignore
                                    _this.wrapper.jarallax.$video.style.visibility = "visible";
                                }
                            });
                        }
                    });
                }
            }, 50);
            return _this;
        }

        var _proto = Preview.prototype;

        /**
         * Return an array of options
         *
         * @returns {OptionsInterface}
         */
        ;

        _proto.retrieveOptions = function retrieveOptions() {
            var options = _preview2.prototype.retrieveOptions.call(this);

            options.hideShow = new _hideShowOption({
                preview: this,
                icon: _hideShowOption.showIcon,
                title: _hideShowOption.showText,
                action: this.onOptionVisibilityToggle,
                classes: ["hide-show-content-type"],
                sort: 40
            });
            return options;
        }
        /**
         * Get registry callback reference to uploader UI component
         *
         * @returns {Uploader}
         */
        ;

        _proto.getUploader = function getUploader() {
            var initialImageValue = this.contentType.dataStore.get(this.config.additional_data.uploaderConfig.dataScope, ""); // Create uploader

            return new _uploader("imageuploader_" + this.contentType.id, this.config.additional_data.uploaderConfig, this.contentType.id, this.contentType.dataStore, initialImageValue);
        }
        /**
         * Stop event to prevent execution of action when editing textarea.
         *
         * @param {Preview} preview
         * @param {JQueryEventObject} event
         * @returns {Boolean}
         */
        ;

        _proto.stopLeftEvent = function stopLeftEvent(preview, event) {
            event.stopPropagation();
            return true;
        }
        /**
         * Stop event to prevent execution of action when editing textarea.
         *
         * @param {Preview} preview
         * @param {JQueryEventObject} event
         * @returns {Boolean}
         */
        ;

        _proto.stopRightEvent = function stopRightEvent(preview, event) {
            event.stopPropagation();
            return true;
        }
        /**
         * Init Left WYSIWYG on load
         *
         * @param element
         * @deprecated please use activateEditor & initWysiwygFromClick
         */
        ;

        _proto.initLeftWysiwyg = function initLeftWysiwyg(element) {
            var _this2 = this;

            this.element = element;
            element.id = this.contentType.id + "-left-editor";
            element.innerHTML = this.data.left_content.html();

            this.contentType.dataStore.subscribe(function () {
                // If we're not focused into TinyMCE inline, update the value when it changes in the data store
                if (!_this2.wysiwyg || _this2.wysiwyg && _this2.wysiwyg.getAdapter().id !== (0, _editor.getActiveEditor)().id) {
                    element.innerHTML = _this2.data.left_content.html();
                }
            }, "left_content");

            this.wysiwyg = null;
            return this.initLeftWysiwygFromClick(false);
        }
        /**
         * Init Right WYSIWYG on load
         *
         * @param element
         * @deprecated please use activateEditor & initWysiwygFromClick
         */
        ;

        _proto.initRightWysiwyg = function initRightWysiwyg(element) {
            var _this3 = this;

            this.element = element;
            element.id = this.contentType.id + "-right-editor";
            element.innerHTML = this.data.right_content.html();

            this.contentType.dataStore.subscribe(function () {
                // If we're not focused into TinyMCE inline, update the value when it changes in the data store
                if (!_this3.wysiwyg || _this3.wysiwyg && _this3.wysiwyg.getAdapter().id !== (0, _editor.getActiveEditor)().id) {
                    element.innerHTML = _this3.data.right_content.html();
                }
            }, "right_content");

            this.wysiwyg = null;

            return this.initRightWysiwygFromClick(false);
        }
        /**
         * Init the Left WYSIWYG
         *
         * @param {boolean} focus Should wysiwyg focus after initialization?
         * @returns Promise
         */
        ;

        _proto.initLeftWysiwygFromClick = function initLeftWysiwygFromClick(focus) {
            var _this4 = this;

            if (focus === void 0) {
                focus = false;
            }

            if (this.wysiwyg) {
                return Promise.resolve(this.wysiwyg);
            }

            var wysiwygConfig = this.config.additional_data.wysiwygConfig.wysiwygConfigData;

            if (focus) {
                wysiwygConfig.adapter.settings.auto_focus = this.element.id;

                wysiwygConfig.adapter.settings.init_instance_callback = function (editor) {
                    editor.on("focus", function () {
                        (0, _jquery)(_this4.element).parents(_this4.contentOverlaySelector).zIndex(_this4.activeEditorOverlayZIndex);
                    });
                    editor.on("blur", function () {
                        (0, _jquery)(_this4.element).parents(_this4.contentOverlaySelector).zIndex(_this4.defaultOverlayZIndex);
                        (0, _nestingLinkDialog)(_this4.contentType.dataStore, _this4.wysiwyg, "left_content", "link_url");
                        (0, _nestingWidgetDialog)(_this4.contentType.dataStore, _this4.wysiwyg, "left_content", "link_url");
                    });

                    _underscore.defer(function () {
                        _this4.element.blur();

                        _this4.element.focus();
                    });
                };
            }

            wysiwygConfig.adapter.settings.fixed_toolbar_container = "#" + this.contentType.id + " .pagebuilder-text-content-left";
            return (0, _factory)(this.contentType.id, this.element.id, this.config.name, wysiwygConfig, this.contentType.dataStore, "left_content", this.contentType.stageId).then(function (wysiwyg) {
                _this4.wysiwyg = wysiwyg;
                return wysiwyg;
            });
        }
        /**
         * Init the Right WYSIWYG
         *
         * @param {boolean} focus Should wysiwyg focus after initialization?
         * @returns Promise
         */
        ;

        _proto.initRightWysiwygFromClick = function initRightWysiwygFromClick(focus) {
            var _this5 = this;

            if (focus === void 0) {
                focus = false;
            }

            if (this.wysiwyg) {
                return Promise.resolve(this.wysiwyg);
            }

            var wysiwygConfig = this.config.additional_data.wysiwygConfig.wysiwygConfigData;

            if (focus) {
                wysiwygConfig.adapter.settings.auto_focus = this.element.id;

                wysiwygConfig.adapter.settings.init_instance_callback = function (editor) {
                    editor.on("focus", function () {
                        (0, _jquery)(_this5.element).parents(_this5.contentOverlaySelector).zIndex(_this5.activeEditorOverlayZIndex);
                    });
                    editor.on("blur", function () {
                        (0, _jquery)(_this5.element).parents(_this5.contentOverlaySelector).zIndex(_this5.defaultOverlayZIndex);
                        (0, _nestingLinkDialog)(_this5.contentType.dataStore, _this5.wysiwyg, "right_content", "link_url");
                        (0, _nestingWidgetDialog)(_this5.contentType.dataStore, _this5.wysiwyg, "right_content", "link_url");
                    });

                    _underscore.defer(function () {
                        _this5.element.blur();

                        _this5.element.focus();
                    });
                };
            }

            wysiwygConfig.adapter.settings.fixed_toolbar_container = "#" + this.contentType.id + " .pagebuilder-text-content-right";
            return (0, _factory)(this.contentType.id, this.element.id, this.config.name, wysiwygConfig, this.contentType.dataStore, "right_content", this.contentType.stageId).then(function (wysiwyg) {
                _this5.wysiwyg = wysiwyg;
                return wysiwyg;
            });
        }
        /**
         * Makes Left WYSIWYG active
         *
         * @param {Preview} preview
         * @param {JQueryEventObject} event
         * @returns {Boolean}
         */
        ;

        _proto.activateLeftEditor = function activateLeftEditor(preview, event) {
            var _this5 = this;
            var elemId = this.contentType.id + "-left-editor";

            if (this.element && this.element.id === elemId && !this.wysiwyg) {
                var bookmark = (0, _editor.createBookmark)(event);
                (0, _editor.lockImageSize)(this.element);
                this.element.removeAttribute("contenteditable");

                _underscore.defer(function () {
                    _this5.initLeftWysiwygFromClick(true).then(function () {
                        return (0, _delayUntil)(function () {
                            // We no longer need to handle double click once it's initialized
                            _this5.handledDoubleClick = true;

                            _this5.wysiwygDeferred.resolve();

                            (0, _editor.moveToBookmark)(bookmark);
                            (0, _editor.unlockImageSize)(_this5.element);
                        }, function () {
                            return _this5.element.classList.contains("mce-edit-focus");
                        }, 10);
                    }).catch(function (error) {
                        // If there's an error with init of WYSIWYG editor push into the console to aid support
                        console.error(error);
                    });
                });
            } else if (this.element && this.element.id === elemId && this.wysiwyg) {
                var element = this.element || this.textarea;

                if (event.currentTarget !== event.target && event.target !== element && !element.contains(event.target)) {
                    return;
                }

                element.focus();
            }
        }
        /**
         * Makes Right WYSIWYG active
         *
         * @param {Preview} preview
         * @param {JQueryEventObject} event
         * @returns {Boolean}
         */
        ;

        _proto.activateRightEditor = function activateRightEditor(preview, event) {
            var _this6 = this;
            var elemId = this.contentType.id + "-right-editor";

            if (this.element && this.element.id === elemId && !this.wysiwyg) {
                var bookmark = (0, _editor.createBookmark)(event);
                (0, _editor.lockImageSize)(this.element);
                this.element.removeAttribute("contenteditable");

                _underscore.defer(function () {
                    _this6.initRightWysiwygFromClick(true).then(function () {
                        return (0, _delayUntil)(function () {
                            // We no longer need to handle double click once it's initialized
                            _this6.handledDoubleClick = true;

                            _this6.wysiwygDeferred.resolve();

                            (0, _editor.moveToBookmark)(bookmark);
                            (0, _editor.unlockImageSize)(_this6.element);
                        }, function () {
                            return _this6.element.classList.contains("mce-edit-focus");
                        }, 10);
                    }).catch(function (error) {
                        // If there's an error with init of WYSIWYG editor push into the console to aid support
                        console.error(error);
                    });
                });
            } else if (this.element && this.element.id === elemId && this.wysiwyg) {
                var element = this.element || this.textarea;

                if (event.currentTarget !== event.target && event.target !== element && !element.contains(event.target)) {
                    return;
                }

                element.focus();
            }
        }
        /**
         * If a user double clicks prior to initializing TinyMCE, forward the event
         *
         * @param preview
         * @param event
         */
        ;

        _proto.handleDoubleClick = function handleDoubleClick(preview, event) {
            var _this7 = this;

            if (this.handledDoubleClick) {
                return;
            }

            event.preventDefault();
            var targetIndex = (0, _editor.findNodeIndex)(this.element, event.target.tagName, event.target);
            this.handledDoubleClick = true;
            this.wysiwygDeferred.then(function () {
                var target = document.getElementById(event.target.id);

                if (!target) {
                    target = (0, _editor.getNodeByIndex)(_this7.element, event.target.tagName, targetIndex);
                }

                if (target) {
                    target.dispatchEvent((0, _editor.createDoubleClickEvent)());
                }
            });
        }
        /**
         * @returns {Boolean}
         */
        ;

        _proto.isWysiwygSupported = function isWysiwygSupported() {
            return (0, _editor.isWysiwygSupported)();
        }
        /**
         * @param {HTMLTextAreaElement} element
         */
        ;

        _proto.initLeftTextarea = function initLeftTextarea(element) {
            var _this8 = this;

            this.textareaLeft = element; // set initial value of left textarea based on data store
            element.id = this.contentType.id + "-left-textarea-editor"; // Set the innerHTML manually so we don't upset Knockout & TinyMCE

            this.textareaLeft.value = _this8.contentType.dataStore.get("left_content");
            this.adjustLeftTextareaHeightBasedOnScrollHeight(); // Update content in our stage preview textarea after its slideout counterpart gets updated

            _events.on("form:" + this.contentType.id + ":saveAfter", function () {
                _this8.textareaLeft.value = _this8.contentType.dataStore.get("left_content");

                _this8.adjustLeftTextareaHeightBasedOnScrollHeight();
            });
        }
        /**
         * @param {HTMLTextAreaElement} element
         */
        ;

        _proto.initRightTextarea = function initRightTextarea(element) {
            var _this9 = this;

            this.textareaRight = element; // set initial value of right textarea based on data store
            element.id = this.contentType.id + "-right-textarea-editor"; // Set the innerHTML manually so we don't upset Knockout & TinyMCE

            this.textareaRight.value = _this9.contentType.dataStore.get("right_content");
            this.adjustRightTextareaHeightBasedOnScrollHeight(); // Update content in our stage preview textarea after its slideout counterpart gets updated

            _events.on("form:" + this.contentType.id + ":saveAfter", function () {
                _this9.textareaRight.value = _this9.contentType.dataStore.get("right_content");

                _this9.adjustRightTextareaHeightBasedOnScrollHeight();
            });
        }
        /**
         * Save current value of Left textarea in data store
         */
        ;

        _proto.onLeftTextareaKeyUp = function onLeftTextareaKeyUp() {
            this.adjustLeftTextareaHeightBasedOnScrollHeight();
            this.contentType.dataStore.set("left_content", this.textareaLeft.value);
        }
        /**
         * Save current value of Right textarea in data store
         */
        ;

        _proto.onRightTextareaKeyUp = function onRightTextareaKeyUp() {
            this.adjustRightTextareaHeightBasedOnScrollHeight();
            this.contentType.dataStore.set("right_content", this.textareaRight.value);
        }
        /**
         * Start stage interaction on left textarea blur
         */
        ;

        _proto.onLeftTextareaFocus = function onLeftTextareaFocus() {
            (0, _jquery)(this.textareaLeft).closest(".pagebuilder-text-content-left").addClass("pagebuilder-toolbar-active");

            _events.trigger("stage:interactionStart");
        }
        /**
         * Start stage interaction on right textarea blur
         */
        ;

        _proto.onRightTextareaFocus = function onRightTextareaFocus() {
            (0, _jquery)(this.textareaRight).closest(".pagebuilder-text-content-right").addClass("pagebuilder-toolbar-active");

            _events.trigger("stage:interactionStart");
        }
        /**
         * Stop stage interaction on left textarea blur
         */
        ;

        _proto.onLeftTextareaBlur = function onLeftTextareaBlur() {
            (0, _jquery)(this.textareaLeft).closest(".pagebuilder-text-content-left").removeClass("pagebuilder-toolbar-active");

            _events.trigger("stage:interactionStop");
        }
        /**
         * Stop stage interaction on right textarea blur
         */
        ;

        _proto.onRightTextareaBlur = function onRightTextareaBlur() {
            (0, _jquery)(this.textareaRight).closest(".pagebuilder-text-content-right").removeClass("pagebuilder-toolbar-active");

            _events.trigger("stage:interactionStop");
        }
        /**
         * Init the parallax element
         *
         * @param {HTMLElement} element
         */
        ;

        _proto.initParallax = function initParallax(element) {
            var _this10 = this;

            this.wrapper = element;

            _underscore.defer(function () {
                _this10.buildJarallax();
            });
        }
        /**
         * Destroy jarallax instance.
         */
        ;

        _proto.destroy = function destroy() {
            _preview2.prototype.destroy.call(this);

            if (this.wrapper) {
                jarallax(this.wrapper, "destroy");
            }
        }
        /**
         * @inheritDoc
         */
        ;

        _proto.bindEvents = function bindEvents() {
            var _this11 = this;

            _preview2.prototype.bindEvents.call(this);

            _events.on(this.config.name + ":" + this.contentType.id + ":updateAfter", function () {
                var dataStore = _this11.contentType.dataStore.getState();

                if (dataStore.left_content === "<div data-bind=\"html: data.left_content.html\">&nbsp;</div>") {
                    _this11.contentType.dataStore.set('left_content', '');
                }

                if (dataStore.right_content === "<div data-bind=\"html: data.right_content.html\">&nbsp;</div>") {
                    _this11.contentType.dataStore.set('right_content', '');
                }
            });

            _events.on("stage:" + this.contentType.stageId + ":viewportChangeAfter", function (args) {
                _this11.buildJarallax();
            });
        }
        /**
         * Adjust Left textarea's height based on scrollHeight
         */
        ;

        _proto.adjustLeftTextareaHeightBasedOnScrollHeight = function adjustLeftTextareaHeightBasedOnScrollHeight() {
            this.textareaLeft.style.height = "";
            var scrollHeight = this.textareaLeft.scrollHeight;
            var minHeight = parseInt((0, _jquery)(this.textareaLeft).css("min-height"), 10);

            if (scrollHeight === minHeight) {
                // leave height at 'auto'
                return;
            }

            (0, _jquery)(this.textareaLeft).height(scrollHeight);
        }
        /**
         * Adjust Right textarea's height based on scrollHeight
         */
        ;

        _proto.adjustRightTextareaHeightBasedOnScrollHeight = function adjustRightTextareaHeightBasedOnScrollHeight() {
            this.textareaRight.style.height = "";
            var scrollHeight = this.textareaRight.scrollHeight;
            var minHeight = parseInt((0, _jquery)(this.textareaRight).css("min-height"), 10);

            if (scrollHeight === minHeight) {
                // leave height at 'auto'
                return;
            }

            (0, _jquery)(this.textareaRight).height(scrollHeight);
        }
        /**
         * Get Left part background image url based on the viewport.
         *
         * @returns {string}
         */
        ;

        _proto.getLeftBackgroundImage = function getLeftBackgroundImage() {
            var mobileImage = this.contentType.dataStore.get('left_background_image_mobile');
            var desktopImage = this.contentType.dataStore.get('left_background_image_desktop');
            var backgroundImage = this.viewport() === 'mobile' && mobileImage.length ? mobileImage : desktopImage;

            if (this.contentType.dataStore.get('left_side_type') === '0') {
                return 'none';
            }

            return backgroundImage.length ? "url(\"" + backgroundImage[0].url + "\")" : 'none';
        }
        /**
         * Get Right part background image url based on the viewport.
         *
         * @returns {string}
         */
        ;

        _proto.getRightBackgroundImage = function getRightBackgroundImage() {
            var mobileImage = this.contentType.dataStore.get('right_background_image_mobile');
            var desktopImage = this.contentType.dataStore.get('right_background_image_desktop');
            var backgroundImage = this.viewport() === 'mobile' && mobileImage.length ? mobileImage : desktopImage;

            if (this.contentType.dataStore.get('right_side_type') === '0') {
                return 'none';
            }

            return backgroundImage.length ? "url(\"" + backgroundImage[0].url + "\")" : 'none';
        }
        /**
         * Get Left wrapper position based on the viewport.
         *
         * @returns {string}
         */
        ;

        _proto.getLeftPosition = function getLeftPosition() {
            return this.viewport() === 'mobile' ? this.contentType.dataStore.get('left_side_mobile_order') : 1;
        }
        /**
         * Get Right wrapper position based on the viewport.
         *
         * @returns {string}
         */
        ;

        _proto.getRightPosition = function getRightPosition() {
            return this.viewport() === 'mobile' ? this.contentType.dataStore.get('right_side_mobile_order') : 2;
        };


        return Preview;
    }(_preview);

    return Preview;
});
//# sourceMappingURL=preview.js.map
