Storytelling-System-Dot-Rating-Widget
=====================================

An HTML5 widget for dot rating, to be used in tabletop roleplaying games based on the Storytelling System (e.g. World of Darkness, Vampire the Masquerade etc). Uses jQuery 1.11.0

Examples
========

You can see some basic examples live [here](https://dl.dropboxusercontent.com/u/62860879/Storytelling%20System%20-%20HTML5%20Dot%20Component/example.html).

Using the widget
======================

Include the stylesheet and javascript file in the head section of your page:

```html
<link rel='stylesheet' href='ssdot.css' type='text/css' />
<script src="ssdot.js"></script>
```

Create a span element with the ss-dot-rating class, give values to the data-dot-* attributes:

```html
<span id="Dexterity" class="ss-dot-rating" data-dot-title="Dexterity" data-dot-max="5" data-dot-min="1" data-dot-value="3"></span>
```

Call .DotRating() on it for initialization:

```js
$("#Dexterity").DotRating();
```

Now you can get the value using jQuery like this:

```js
$("#Dexterity").data("dot-value");
```

The data-dot-* attributes
======================

| Attribute | Type |	Description |
| ---- |:----:|:-------:|:----------- |
| data-dot-title | string | The title of the attribute/skill this rating represents. |
| data-dot-max | number | The maximum number of dots this rating has. |
| data-dot-min | number | The minimum number of dots this rating has. |
| data-dot-value | number | The default value of tje attribute/skill |
