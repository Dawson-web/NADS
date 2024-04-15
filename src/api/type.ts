import request from ".";
import {
  forgetPawwsordForm,
  loginForm,
  newAssetForm,
  newTaskForm,
  newUserForm,
  pageList,
  updateAssetForm,
  updatePawwsordForm,
  updateUserInfoForm,
} from "./model";

// 读取cookie
let getToken = () => {
  return localStorage.getItem("token");
};

// Start 用户相关接口

// 登录
export const userLoginAPI = (form: loginForm) => {
  return request({
    method: "POST",
    url: "/api/login",
    data: form,
  });
};

// 获取验证码
export const getCaptchaAPI = (username: string) => {
  return request({
    method: "GET",
    responseType: "blob",
    url: `/api/login/captcha?username=${username}`,
  });
};

// responseType: "blob",

// 登出
export const userLogoutAPI = () => {
  return request({
    method: "GET",
    url: "/api/logout",
    headers: {
      token: getToken(),
    },
  });
};

// 忘记密码
export const ForgetPasswordAPI = (form: forgetPawwsordForm) => {
  return request({
    method: "POST",
    url: "/user/forgetPassword",
    data: form,
  });
};

// End 用户相关接口

// Start 系统管理

// 更改密码
export const updatePasswordAPI = (form: updatePawwsordForm) => {
  return request({
    method: "POST",
    url: "/admin/updatePassword",
    data: form,
    headers: {
      token: getToken(),
    },
  });
};

// 修改用户信息
export const updateUserInfoAPI = (form: updateUserInfoForm) => {
  return request({
    method: "PUT",
    url: "/admin/user",
    data: form,
    headers: {
      token: getToken(),
    },
  });
};

// 新增用户
export const addUserAPI = (form: newUserForm) => {
  return request({
    method: "POST",
    url: "/admin/user",
    data: form,
    headers: {
      token: getToken(),
    },
  });
};

// 删除用户
export const deleteUserdAPI = (id: number) => {
  return request({
    method: "DELETE",
    url: `/admin/user/${id}`,
    headers: {
      token: getToken(),
    },
  });
};

// 用户列表查询
export const searchUserListdAPI = (form: pageList) => {
  return request({
    method: "GET",
    url: `/admin/user/list?pageNumber=${form.pageNumber}&pageSize=${form.pageSize}`,
    headers: {
      token: getToken(),
    },
  });
};

// End 系统管理

// Start APT
export const searchAptAPI = (form: pageList) => {
  return request({
    method: "GET",
    url: "/apt/list",
    headers: {
      pageNumber: form.pageNumber,
      pageSize: form.pageSize,
    },
  });
};
// End APT

// Start 定向资产

// 定向资产查询
export const searchAssetAPI = (form: pageList) => {
  return request({
    method: "GET",
    url: `/property/direct?pageNumber=${form.pageNumber}&pageSize=${form.pageSize}`,
    headers: {
      token: getToken(),
    },
  });
};

// 定向资产节点添加
export const addAssetAPI = (form: newAssetForm) => {
  return request({
    method: "POST",
    url: `/property/direct`,
    headers: {
      token: getToken(),
    },
    data: form,
  });
};

// 定向资产节点修改
export const updateAssetAPI = (form: updateAssetForm) => {
  return request({
    method: "PUT",
    url: `/property/direct`,
    headers: {
      token: getToken(),
    },
    data: form,
  });
};

// 定向资产节点删除
export const deleteAssetAPI = (nodeId: number) => {
  return request({
    method: "DELETE",
    url: `/property/direct/${nodeId}`,
    headers: {
      token: getToken(),
    },
  });
};

// 创建任务
export const addTaskAPI = (form: newTaskForm) => {
  return request({
    method: "POST",
    url: `/property/task`,
    headers: {
      token: getToken(),
    },
    data: form,
  });
};

// End 定向资产
