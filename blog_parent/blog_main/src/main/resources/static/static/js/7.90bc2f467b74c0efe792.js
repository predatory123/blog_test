webpackJsonp([7],{"/VLR":function(e,r){},tcoL:function(e,r,s){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t=s("M9A7"),o={name:"Register",data:function(){return{userForm:{account:"",nickname:"",password:""},code:"",mobilephonenumber:"",rules:{account:[{required:!0,message:"请输入昵称",trigger:"blur"},{max:10,message:"不能大于10个字符",trigger:"blur"}],nickname:[{required:!0,message:"请输入昵称",trigger:"blur"},{max:10,message:"不能大于10个字符",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{max:10,message:"不能大于10个字符",trigger:"blur"}],mobilephonenumber:[{required:!0,message:"手机号不能为空",trigger:"blur"},{max:11,message:"不能大于11个字符",trigger:"blur"}]}}},methods:{sendsms:function(){var e=this;t.a.sendsms(this.userForm.mobilephonenumber).then(function(r){e.$message({message:"验证码发送成功",type:"success",showClose:!0})}).catch(function(r){"error"!==r&&e.$message({message:r,type:"error",showClose:!0})})},register:function(){var e=this;t.a.register(this.userForm,this.userForm.code).then(function(r){e.$message({message:"注册成功 快来登录吧",type:"success",showClose:!0}),e.$router.push({path:"/Login"})}).catch(function(r){"error"!==r&&e.$message({message:r,type:"error",showClose:!0})})}}},a={render:function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("div",{directives:[{name:"title",rawName:"v-title"}],attrs:{id:"register","data-title":"注册"}},[s("div",{staticClass:"me-login-box me-login-box-radius"},[s("h1",[e._v("注册")]),e._v(" "),s("el-form",{ref:"userForm",attrs:{model:e.userForm,rules:e.rules}},[s("el-form-item",{attrs:{prop:"account"}},[s("el-input",{attrs:{placeholder:"用户名"},model:{value:e.userForm.account,callback:function(r){e.$set(e.userForm,"account",r)},expression:"userForm.account"}})],1),e._v(" "),s("el-form-item",{attrs:{prop:"nickname"}},[s("el-input",{attrs:{placeholder:"昵称"},model:{value:e.userForm.nickname,callback:function(r){e.$set(e.userForm,"nickname",r)},expression:"userForm.nickname"}})],1),e._v(" "),s("el-form-item",{attrs:{prop:"mobilephonenumber"}},[s("el-input",{attrs:{type:"text",placeholder:"手机号"},model:{value:e.userForm.mobilephonenumber,callback:function(r){e.$set(e.userForm,"mobilephonenumber",r)},expression:"userForm.mobilephonenumber"}})],1),e._v(" "),s("el-form-item",{attrs:{prop:"code"}},[s("el-input",{attrs:{type:"text",placeholder:"验证码"},model:{value:e.userForm.code,callback:function(r){e.$set(e.userForm,"code",r)},expression:"userForm.code"}})],1),e._v(" "),s("el-form-item",{staticClass:"me-login-button",attrs:{size:"small"}},[s("el-button",{attrs:{type:"primary"},on:{click:e.sendsms}},[e._v("发送验证码")])],1),e._v(" "),s("el-form-item",{attrs:{prop:"password"}},[s("el-input",{attrs:{placeholder:"密码","show-password":""},model:{value:e.userForm.password,callback:function(r){e.$set(e.userForm,"password",r)},expression:"userForm.password"}})],1),e._v(" "),s("el-form-item",{staticClass:"me-login-button",attrs:{size:"small"}},[s("el-button",{attrs:{type:"primary"},on:{click:e.register}},[e._v("注册")])],1)],1)],1)])},staticRenderFns:[]};var n=s("VU/8")(o,a,!1,function(e){s("/VLR")},"data-v-577facde",null);r.default=n.exports}});
//# sourceMappingURL=7.90bc2f467b74c0efe792.js.map