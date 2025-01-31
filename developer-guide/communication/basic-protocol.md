# 基本通信协议
ONi 通信基于 Websocket 协议，使用 JSON 格式进行数据交换，所有通信方向均采用统一标准。

## 基本结构
```json
{
  "type": "type",
  "data": {} // 也可以为数组形式
  //...
}
```

## type 字段规则
type 字段用于标识通信的类型，通过 `/` 分割多个层级。例如：
```
layout/event

global/ae

data/common/set
```

## 基本通信协议的拓展
四个通信方向下，可以对基本的通信协议进行拓展，但必须保留 `type` 和 `data` 字段。

## 三端的名称定义
- OC：OpenComputers
- SERVER：ONi 实例 （Node.js）
- CLIENT：客户端 （浏览器）