Storytelling-System-Dot-Rating-Widget
=====================================

## Current Version 1.2.1

An HTML5 widget for dot rating that is used in tabletop roleplaying games based on the Storytelling System (e.g. World of Darkness, Vampire the Masquerade etc). Uses jQuery.

Examples
========

You can see some basic examples live [here](http://ragecryx.github.io/Storytelling-System-Dot-Rating-Widget/test/example).

Using the widget
======================

Include the stylesheet and javascript file in the head section of your page:

```html
<link rel='stylesheet' href='ssdot.css' type='text/css' />
<script src="ssdot.js"></script>
```

Create an ss-rating and give values to the data-dot-* attributes:

```html
<ss-rating id="Dexterity" data-dot-title="Dexterity" data-dot-max="5" data-dot-min="1" data-dot-value="3"></ss-rating>
```

Now you can get the value using jQuery like this:

```js
$("#Dexterity").data("dot-value");
```

__From version 1.2.1__ the title and the dots adjust on the width of the ss-rating element, title sticking to the left and dots as far right as they can. If you want to change this try customizing the __.ss-title__ and __.ss-dots__ css classes.

The data-dot-* attributes
======================

| Attribute             | Type       |	Description                                                            |
| --------------------- | :--------: | :---------------------------------------------------------------------- |
| data-dot-title        | string     | The title of the attribute/skill this rating represents.                |
| data-dot-max          | number     | The maximum number of dots this rating has.                             |
| data-dot-min          | number     | The minimum number of dots this rating has.                             |
| data-dot-value        | number     | The default value of the attribute/skill                                |
| data-dot-is-squared   | boolean    | If the value is "true" the dot will appear squared and be marked with X |
| data-dot-color-empty  | html color | Sets the color of the dot when its empty.                               |
| data-dot-color-marked | html color | Sets the color of the dot when its marked.                              |
| data-dot-color-border | html color | Sets the color of the dot's border.                                     |
