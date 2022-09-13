import service from "../request";

// 获取seller
export function getSeller(params: any) {
  return service.request({
    method: "POST",
    url: "接口一",
    data: params,
  });
}
export function Login(params: any) {
  return service.request({
    method: "POST",
    url: "接口二",
    data: params,
  });
}
/* 调用接口 */
// getTest('放入params参数').then(response => {
//     console.log("结果", response);
// })
// .catch(error => {
//         console.log('获取失败！')
// });
