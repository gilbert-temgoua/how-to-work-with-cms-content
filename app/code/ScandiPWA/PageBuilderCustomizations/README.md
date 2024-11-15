# Additional Page builder features

## 1. General guidelines and tips

* If possible, do not hard code margins and paddings in the CMA page code as then users can't change them in the admin. 
* Use empty row to space out blocks as you can specify separate min height for desktop and mobile

## 2. Variable input field

For example and usage ask PageBuilder team on #pagebuilder slack channel

## 3. Custom classes

### Overview

Package offers the functionality to apply custom pre-defined CSS classes to Page Builder elements in admin.
By adding such classes to the element will let user see changes both in admin Page Builder's preview and on the
frontend.

### Available custom classes:

* FadeOutTop - TODO
* FadeOutBottom
* Watermark
* Order1, Order2, Order3
* HideWhenMobile
* HideWhenDesktop
* HideRowWhenMobile
* HideRowWhenDesktop

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

### How to apply custom classes

* Insert/add the required element in Page Builder;
* Open element's 'Edit' settings;
* Scroll down to 'Advanced' section;
* Add the custom class name to 'CSS classes' field;

Custom classes also can be used together, in various combinations.

### Path to backend's styles:

`app/code/ScandiPWA/PageBuilder/view/adminhtml/web/css/source/page-builder/_custom-classes.less`

