define([
    'Magento_Ui/js/dynamic-rows/dynamic-rows',
], function (dynamicRows) {
    'use strict';

    return dynamicRows.extend({
        /**
         * Init default record
         *
         * @returns Chainable.
         */
        initDefaultRecord: function () {
            if (this.inputVariations && !this.recordData().length) {
                this.recordData(Object.entries(this.inputVariations).map(
                    ([key, label], index) => {
                        return {
                            record_id: index,
                            label: label,
                            value: ""
                        }
                    }));
                this.reload();
            }

            return this;
        }
    });
});
