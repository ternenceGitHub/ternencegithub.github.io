webpackJsonp([17],{dCfE:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("Sxqw"),i=n.n(o),r=n("26vW"),a=n.n(r),s=n("DK4l"),l=n.n(s),d=n("6Koo"),c=n("3SZ7"),u=n.n(c),f=n("/Ko3"),h=n.n(f),p=n("5nhJ"),m={components:{AModal:h.a,query:p.a},data:function(){return{maskClosable:!1,ModalText:"Content of the modal",visible:!1,confirmLoading:!1,structure:{fields:[{id:1,field:"user_name",text:"登录名",type:"input",options:[],isDuration:!1,isNumber:!1},{id:2,field:"ip_address",text:"客户端IP",type:"input",options:[],isDuration:!1,isNumber:!1},{id:3,field:"oper_time",text:"操作时间",type:"date",options:[],isDuration:!1,isNumber:!1},{id:4,field:"state",text:"操作状态",type:"select",options:["登录","注销"],isDuration:!1,isNumber:!0}],stringConditions:[{id:1,condition:"=",text:"等于",type:"input"},{id:2,condition:"like_contain",text:"包含",type:"input"}],numberConditions:[{id:1,condition:"=",text:"等于",type:"input"},{id:2,condition:"!=",text:"不等于",type:"input"},{id:3,condition:">",text:"大于",type:"input"},{id:4,condition:">=",text:"大于等于",type:"input"},{id:5,condition:"<",text:"小于",type:"input"},{id:6,condition:"<=",text:"小于等于",type:"input"}],connectionWay:[{connection:"与"},{connection:"或"}]}}},methods:{showQueryModal:function(){this.visible=!0},handleOk:function(e){var t=this,n=this;this.$refs.dialogtreeQuery.dataSource.forEach(function(e){e.fieldSelected&&(n.$refs.dialogtreeQuery.searchConditionResult=[].concat(i()(n.$refs.dialogtreeQuery.searchConditionResult),[{key:e.key,field:e.fieldSelected||{},condition:e.conditionSelected||{},value:n.$trim(e.value)||{}}]))}),this.ModalText="The modal will be closed after two seconds",this.confirmLoading=!0,setTimeout(function(){t.visible=!1,t.confirmLoading=!1,alert(u()(t.$refs.dialogtreeQuery.searchConditionResult)),t.$refs.dialogtreeQuery.searchConditionResult=[]},2e3)},handleCancel:function(e){this.visible=!1}}},y={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"queryModal"},[t("a-modal",{attrs:{title:"查询",visible:this.visible,maskClosable:this.maskClosable,confirmLoading:this.confirmLoading,width:"907px"},on:{ok:this.handleOk,cancel:this.handleCancel}},[t("query",{ref:"dialogtreeQuery",attrs:{structure:this.structure}})],1)],1)},staticRenderFns:[]},g=n("Mz/3")(m,y,!1,null,null,null).exports,v=n("Eg+s"),_=l.a.Group,x={props:{customerId:String},components:{ATable:a.a,AButton:l.a,AButtonGroup:_,queryModal:g,PageLayout:v.a},data:function(){return{dataSource:[],selectedRowKeys:[],loading:!1,loadingCallHistory:!1,filteredInfo:null,sortedInfo:null,pagination:{showQuickJumper:!0,pageSize:10}}},mounted:function(){this.getDataFromServer()},watch:{customerId:{handler:function(e){var t=this;this.loading=!0,Object(d.setTimeout)(function(){t.loading=!1,t.deleteLocalHistory()},1e3)}}},computed:{title:function(){return this.$route.meta.title},hasSelected:function(){return this.selectedRowKeys.length>0},columns:function(){var e=this.sortedInfo,t=this.filteredInfo;e=e||{},t=t||{};var n=[{title:"登录名",dataIndex:"user_name",key:"user_name",sortevr:function(e,t){return e.user_name.length-t.user_name.length},sortOrder:"tuser_nameag"===e.columnKey&&e.order},{title:"客户端IP",dataIndex:"ip_address",key:"ip_address"},{title:"操作时间",dataIndex:"oper_time",key:"oper_time",sorter:function(e,t){return e.oper_time.length-t.oper_time.length},sortOrder:"oper_time"===e.columnKey&&e.order},{title:"操作状态",dataIndex:"state",key:"state",sorter:function(e,t){return e.state.length-t.state.length},sortOrder:"state"===e.columnKey&&e.order},{title:"操作",key:"operation",dataIndex:"operation",fixed:"right",width:100,scopedSlots:{customRender:"operation"}}];return n}},methods:{batchDelete:function(){var e=this;this.$confirm({title:"你确定要删除选中的客户信息吗?",content:"Some descriptions",okText:"确定",okType:"danger",cancelText:"取消",onOk:function(){e.loading=!0,Object(d.setTimeout)(function(){e.loading=!1,e.dataSource=e.dataSource.filter(function(t){return!e.selectedRowKeys.includes(t.key)}),e.selectedRowKeys=[]},1e3)},onCancel:function(){}})},onSelectChange:function(e){this.selectedRowKeys=e},showExportModal:function(){},getDataFromServer:function(){for(var e=0;e<25;e++)this.dataSource.push({key:e,id:e,user_name:"登录名-"+e,ip_address:"192.168.2."+e,oper_time:"2018-08-"+e+" "+e+":00:00",state:"登录"})},deleteLocalHistory:function(){this.dataSource=[]},handleChange:function(e,t,n){this.filteredInfo=t,this.sortedInfo=n},onDelete:function(e){var t=this;this.$confirm({title:"你确定要删除该条记录吗?",content:"Some descriptions",okText:"确定",okType:"danger",cancelText:"取消",onOk:function(){t.loading=!0,Object(d.setTimeout)(function(){t.loading=!1;var n=[].concat(i()(t.dataSource));t.dataSource=n.filter(function(t){return t.key!==e})},1e3)},onCancel:function(){}})},showQueryModel:function(){this.$refs.dialogtreeQueryModal.showQueryModal()}}},k={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("page-layout",{attrs:{title:e.title}},[n("template",{slot:"action"},[n("div",{staticClass:"interval-sovle"},[n("a-button-group",{staticStyle:{"margin-right":"8px"}},[n("a-button",{attrs:{icon:"delete",loading:e.loading},on:{click:e.batchDelete}},[e._v("\n          批量删除\n        ")]),e._v(" "),n("a-button",{attrs:{icon:"export"},on:{click:e.showExportModal}},[e._v("\n          导出\n        ")])],1),e._v(" "),n("a-button",{attrs:{type:"primary",icon:"search"},on:{click:e.showQueryModel}},[n("span",[e._v("查询")]),e._v(" "),n("queryModal",{ref:"dialogtreeQueryModal"})],1)],1)]),e._v(" "),n("div",{staticClass:"loginLog"},[n("a-table",{attrs:{rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange},dataSource:e.dataSource,columns:e.columns,scroll:{x:1300},pagination:e.pagination,loading:e.loading},on:{change:e.handleChange},scopedSlots:e._u([{key:"operation",fn:function(t,o){return[n("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.onDelete(o.key)}}},[e._v("删除")])]}}])})],1)],2)},staticRenderFns:[]};var b=n("Mz/3")(x,k,!1,function(e){n("pbpY")},null,null);t.default=b.exports},pbpY:function(e,t){}});
//# sourceMappingURL=17.8d2dfa43abfe2c4a0874.js.map