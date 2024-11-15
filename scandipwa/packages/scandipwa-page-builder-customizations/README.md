# Additional Page builder features

## 1. Variable input field

TODO - How to add it to page builder element, form example
TODO - Additional configuration, content type configuration example
TODO - di.xml configuration example

FE ????
Preview / master .js

## 2. Custom classes

### Overview

Package offers the functionality to apply custom pre-defined CSS classes to Page Builder elements in admin.
By adding such classes to the element will let user see changes both in admin Page Builder's preview and on the
frontend.

### Avialable custom classes:

* FadeOutTop - TODO
* FadeOutBottom
* Watermark
* Order1, Order2, Order3
* HideWhenMobile
* HideWhenDesktop
* HideRowWhenMobile
* HideRowWhenDesktop
* ShowAsPopUp

#### - FadeOutTop - TODO!

Class can be applied to most elements that require "top fade out effect".

#### - FadeOutBottom

Class can be applied to most elements that require "bottom fade out effect".

#### - Watermark

Class that adds the watermark icon to the images, but can be used with other elements if needed.
Class adds the default SPWA logo to the top-right corner.

#### - Order1, Order2, Order3

Classes that can be applied to columns and define the order position of the column on mobile screens, fixes the
"image-text"/ "text-image" order combination on mobile.

#### - HideWhenMobile/HideWhenDesktop

Classes that hide/show elements based on required viewports, uses block layout.

#### - HideRowWhenMobile/HideRowWhenDesktop

Classes that hide/show rows based on required viewports, uses flexbox layout.

#### - ShowAsPopUp

Class that can be applied to 'image' content type. This custom class transforms images into
custom FE component which adds functionality to display image preview pop-up on image click.
Image preview pop-up allows to zoom and rotate images in preview mode. The functionality uses
'react-awesome-flexbox' as a dependency and can be modified to be used as image gallery preview
pop-up if needed.

### How to apply custom classes

* Insert/add the required element in Page Builder;
* Open element's 'Edit' settings;
* Scroll down to 'Advanced' section;
* Add the custom class name to 'CSS classes' field;

Custom classes also can be used together, in various combinations.

### Path to backend's styles:

`app/code/ScandiPWA/PageBuilder/view/adminhtml/web/css/source/page-builder/_custom-classes.less`
