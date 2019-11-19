/* eslint-disable no-undef */
/*
 * @Author: 冯杰
 * @Date: 2019-08-16 14:51:52
 * @Last Modified by: 冯杰
 * @Last Modified time: 2019-11-15 17:49:06
 */
import { AXIOS_BASE } from './const-base.js';
import store from '../store/index.js';

class Axios {
  constructor() {
    this.baseurl = AXIOS_BASE;
    this.header = {
      'content-type': 'application/json',
      'accept': 'application/json'
    };
  }

  deleteData(data) {
    data && Object.keys(data).forEach(p => {
      !data[p] && delete data[p];
    });
    return data;
  }

  // axios GET
  get({
    url,
    data,
    dataType = 'json',
    config
  } = {}) {
    if (store.getters.authorization) {
      this.header.authorization = store.getters.authorization;
      this.header.openid = store.getters.openId;
    }
    this.deleteData(data);
    return new Promise((resolve, reject) => {
      uni.request({
        url: `${this.baseurl}${url}`,
        data,
        dataType,
        header: this.header,
        method: 'GET',
        success: (res) => {
          if (res.statusCode === 200) {
            resolve(res.data);
          } else if (res.statusCode === 511 || res.statusCode === 512) {
            uni.showToast({ title: res.data.message, icon: 'none' });
            reject(new Error(res.statusCode));
          } else {
            reject(new Error(res.statusCode));
            // reject({
            //   status: res.statusCode,
            //   message: res.data
            // });
          }
        },
        fail: (err) => {
          reject(err);
        }
      });
    });
  }

  // axios POST
  post({
    url,
    data,
    dataType = 'json',
    config
  } = {}) {
    if (store.getters.authorization) {
      this.header.authorization = store.getters.authorization;
      this.header.openid = store.getters.openId;
    }
    this.deleteData(data);
    return new Promise((resolve, reject) => {
      uni.request({
        url: `${this.baseurl}${url}`,
        data,
        dataType,
        header: this.header,
        method: 'POST',
        success: (res) => {
          if (res.statusCode === 200) {
            resolve(res.data);
          } else if (res.statusCode === 511 || res.statusCode === 512) {
            uni.showToast({ title: res.data.message, icon: 'none' });
            reject(new Error(res.data));
          } else {
            reject(new Error(res.statusCode));
            // reject({
            //   status: res.statusCode,
            //   message: res.data
            // });
          }
        },
        fail: (err) => {
          console.log(err);
          reject(err);
        }
      });
    });
  }

  /**
   * axios PUT 支付宝不支持
   */
  put({
    url,
    data,
    dataType = 'json',
    config
  } = {}) {
    if (store.getters.authorization) {
      this.header.authorization = store.getters.authorization;
      this.header.openid = store.getters.openId;
    }
    this.deleteData(data);
    return new Promise((resolve, reject) => {
      uni.request({
        url: `${this.baseurl}${url}`,
        data,
        dataType,
        header: this.header,
        method: 'PUT',
        success: (res) => {
          resolve(res.data);
        },
        fail: (err) => {
          uni.showToast({ title: err, icon: 'none' });
          reject(err);
        }
      });
    });
  }

  /**
   * axios DELETE 支付宝不支持、头条不支持
   */
  delete({
    url,
    data,
    dataType = 'json',
    config
  } = {}) {
    if (store.getters.authorization) {
      this.header.authorization = store.getters.authorization;
      this.header.openid = store.getters.openId;
    }
    this.deleteData(data);
    return new Promise((resolve, reject) => {
      uni.request({
        url: `${this.baseurl}${url}`,
        data,
        dataType,
        header: this.header,
        method: 'DELETE',
        success: (res) => {
          resolve(res.data);
        },
        fail: (err) => {
          reject(err);
        }
      });
    });
  }
}
module.exports = new Axios();
