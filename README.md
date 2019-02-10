# Amaterasu

Make DOM blur gradully, like user has Uchiha eyes.

```javascript
Amaterasu(dom, level, duration)
```
level default is 10
duration default is 1 (sec)


## Usage

```javascript
const [start,stop] = Amaterasu(document.body)
start();
```

## More

```javascript
const img = document.querySelector('img#target')
const [start,stop] = Amaterasu(img,5,2);
// blur this dom to 5

```