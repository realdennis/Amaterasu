# Amaterasu

Make DOM blur gradully, like user has Uchiha eyes.

```javascript
Amaterasu(dom, level, duration)
```
> level default is 10
> duration default is 1 (sec)

## Installation

### CDN
```html
<script src="https://unpkg.com/@realdennis/amaterasu@0.0.6/cdn/Amaterasu.js"></script>
<script>
  const [start,stop] = Amaterasu(document.body);
  start();
</script>
```

### npm module
```sh

$ npm install @realdennis/amaterasu 

```

## Usage

```javascript
import Amaterasu from '@realdennis/Amaterasu'
const [start,stop] = Amaterasu(document.body)
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
