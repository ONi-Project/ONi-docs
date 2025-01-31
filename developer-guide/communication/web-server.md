# WEB -> SERVER 通信

## auth/request

接口描述|已实现
-|-
WEB 登录请求|✅

键值|类型|描述
-|-|-
TOKEN|string|登录密钥（WEB）

```json
{
    "type" : "auth/request",
    "data" : {
        "token" : <TOKEN>
    }
}
```

## oc/task/runSingle

接口描述|已实现
-|-
向 OC 发送单次任务|✅

键值|类型|描述
-|-|-
BOTUUID|string|BOT UUID
TASK|Global.Bot.Task|任务

```json
{
    "type" : "oc/task/runSingle",
    "target": <BOTUUID>,
    "data" : <TASK>
}
```

## oc/task/add

接口描述|已实现
-|-
向 OC 添加任务|✅

键值|类型|描述
-|-|-
BOTUUID|string|BOT UUID
TASK|Global.Bot.Task|任务

```json
{
    "type" : "oc/task/add",
    "target": <BOTUUID>,
    "data" : <TASK>
}
```

## oc/task/remove

接口描述|已实现
-|-
从 OC 移除任务|✅

键值|类型|描述
-|-|-
BOTUUID|string|BOT UUID
TASK|Global.Bot.Task|任务

```json
{
    "type" : "oc/task/runSingle",
    "target": <BOTUUID>,
    "data" : <TASK>
}
```

## data/event/set

接口描述|已实现
-|-
修改事件通知，以 UUID 为主键进行修改|✅

键值|类型|描述
-|-|-
EVENT|Global.Event|事件

```json
{
    "type" : "data/event/set",
    "data" : <EVENT>
}
```