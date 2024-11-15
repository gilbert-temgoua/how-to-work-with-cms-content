/**
 * Adobe page builder compatibility for ScandiPWA
 * @copyright Scandiweb, Inc. All rights reserved.
 */

import { createElement } from 'react';

import GoogleMap from '../../component/Map';
import { MAP_CONTENT_TYPE, MAP_SKELETON } from '../../component/Map/Map.config';

const addReplacementRule = (originalMember, instance) => ([
    ...originalMember,
    {
        query: { dataContentType: MAP_CONTENT_TYPE },
        replace: (domNode) => (
            createElement(GoogleMap, {
                elements: instance.toReactElements(
                    [domNode],
                    MAP_SKELETON
                )
            })
        )
    }
]);

export default {
    'Component/Html/Component': {
        'member-property': {
            rules: addReplacementRule
        }
    }
};
