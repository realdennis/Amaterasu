# Amaterasu

[Demo](https://codepen.io/realdennis/pen/wNmPPB)

![Amaterasu!](https://i.imgur.com/E8ndEHj.jpg)

Make DOM blur gradually, like user has Uchiha eyes.

```javascript
const [start,stop] = Amaterasu(DOM,/*level default 10*/,/*duration default 1 (sec)*/)

const [start,stop] = Amaterasu(document.body);
start()
/* Actually you can just code like this*/
```

## CDN

```html
<script src="https://unpkg.com/@realdennis/amaterasu@0.0.6/cdn/Amaterasu.js"></script>
<script>
  const [start, stop] = Amaterasu(document.body);
  start();
</script>
```

## NPM module

```sh

$ npm install @realdennis/amaterasu

```

## Usage

```javascript
import Amaterasu from '@realdennis/amaterasu';
const [start, stop] = Amaterasu(document.body);
start();
```

## More

```javascript
const img = document.querySelector('img#target')
const [start,stop] = Amaterasu(img,5,2);
// Blur this img elment 0 .. 1 ....5 , every 2sec

if(/* some statement */) stop()
// Make img element resume style before amaterasu start.

```
