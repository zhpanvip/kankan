// components/lable_grid/lable_grid.js
import {log} from "../../utils/LogUtils.js"
Component({
  /**
   * 组件的属性列表
   */
  properties: {  // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
    lables: {
      type: Object,
      value: [],
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    _onItemClick:function(view){
      const index = view.currentTarget.dataset.index;
      const selecteLabel=this.properties.lables[index];
      this.triggerEvent('itemClick',selecteLabel)
    }
  }
})
