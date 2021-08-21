const baseUrl = "https://elm.cangdu.org";

export default async (url = "", data = {}, type = "GET", method = "fetch") => {
  type = type.toUpperCase();
  url = baseUrl + url;
  // 判断请求类型
  if (type == "GET") {
    let dataStr = ""; //数据拼接字符串 设置url传参
    Object.keys(data).forEach((key) => {
      dataStr += key + "=" + data[key] + "&";
    });
    // 判断 url 传参数是否存在 存在拼接到 url 中
    if (dataStr !== "") {
      dataStr = dataStr.substr(0, dataStr.lastIndexOf("&"));
      url = url + "?" + dataStr;
    }
  }
  // 判断浏览器是否支持 fetch
  if (window.fetch && method == "fetch") {
    // 设置 fetch 配置对象
    let requestConfig = {
      credentials: "include",
      method: type,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      mode: "cors",
      cache: "force-cache",
    };

    if (type == "POST") {
      Object.defineProperty(requestConfig, "body", {
        value: JSON.stringify(data),
      });
    }

    try {
      const response = await fetch(url, requestConfig);
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      throw new Error(error);
    }
  } else {
    // 不支持 fetch 话就使用 XMLHttpReqest
    return new Promise((resolve, reject) => {
      let requestObj;
      if (window.XMLHttpRequest) {
        requestObj = new XMLHttpRequest();
      } else {
        // eslint-disable-next-line
        requestObj = new ActiveXObject();
      }

      let sendData = "";
      if (type == "POST") {
        sendData = JSON.stringify(data);
      }

      requestObj.open(type, url, true);
      requestObj.setRequestHeader(
        "Content-type",
        "application/x-www-form-urlencoded"
      );
      requestObj.send(sendData);

      requestObj.onreadystatechange = () => {
        if (requestObj.readyState == 4) {
          if (requestObj.status == 200) {
            let obj = requestObj.response;
            if (typeof obj !== "object") {
              obj = JSON.parse(obj);
            }
            resolve(obj);
          } else {
            reject(requestObj);
          }
        }
      };
    });
  }
};
