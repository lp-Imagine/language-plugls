/*
 * @Descripttion: 
 * @version: 
 * @Author: peng
 * @Date: 2021-05-24 14:59:12
 * @LastEditors: peng
 * @LastEditTime: 2021-05-24 15:54:49
 */
import Vue from "vue";
/* import 'element-ui/lib/theme-chalk/index.css'; */
import AppComponent from "./res/result.vue";

Vue.component("app-component", AppComponent);

import {
  Button,
  TimePicker,
  Form,
  FormItem,
  Notification,
} from 'element-ui'

Vue.use(Button)
Vue.use(TimePicker)
Vue.use(Form)
Vue.use(FormItem)

Vue.prototype.$notify = Notification;

new Vue({
  el: "#result",
  render: createElement => {
    return createElement(AppComponent);
  }
});
