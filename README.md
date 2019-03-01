Remote svg loader
======

Sometimes we need to include svg to web-page from external server. It's especially relevant if you create reusable application, but not as package view, so that you don't want to drag assets to the every new place.

The trick is when you try to do like that:
```html
<svg class="icon icon-bin">
    <use xlink:href="https://mycdn.com/img/sprite.svg#icon-bin"></use>
</svg>
```

You face with «Same Origin Policy» restrictions which don't allow to load the svg.

So this package allows you to load svg object through XmlHttpRequest, to be more accurate – through axios package, then inserts the svg object in DOM tree, and use the symbol if it is necessary.

## Example:

In the place where you want to put the svg, you have to place next code:
```html
<svg class="icon icon-bin" data-svg-src="https://mycdn.com/img/sprite.svg" data-symbol="#icon-bin"></svg>
```

Then, you have to import module in some class and create the instance of this class, for example:
```js
import SVGLoader from 'remote-svg-loader';

const loader = new SVGLoader(); 
```

One of the important things is you have to set up correct CORS setting on https://mycdn.com.