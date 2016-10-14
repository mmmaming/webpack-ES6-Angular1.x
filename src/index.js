/**
 * Created by ming on 2016/9/23.
 */
var pt = require('./assets/images/123.png');
console.log(pt);
// require('./demo.css');

import './index.css';
// require('./index.css');
var div = document.getElementById('img');
var img = document.createElement('img');
img.src = pt;
div.appendChild(img);
var div2 = document.getElementById('img');
console.log('tetete');
