'use strict';

if (process.env.NODE_ENV === 'development') {
  // exports.AXIOS_BASE = 'http://localhost:8060';
  // exports.AXIOS_BASE = 'https://earn.advokate.com.cn';
  exports.AXIOS_BASE = 'https://memberearn.advokate.com.cn';
  // exports.AXIOS_BASE = 'http://10.144.110.244:8060';
} else {
  // 正式版
  exports.AXIOS_BASE = 'https://earn.advokate.com.cn';
  // 体验版
  // exports.AXIOS_BASE = 'https://memberearn.advokate.com.cn';
  // exports.AXIOS_BASE = 'http://10.144.108.179:8060/';
}
