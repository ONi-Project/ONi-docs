# SERVER -> OC 通信

## auth/response

接口描述|已实现
-|-
OC 登录响应|✅

键值|类型|描述
-|-|-
BOT|Global.Bot|机器人账号信息

```json
{
    "type" : "auth/response",
    "data" : <BOT>
}
```

## task

接口描述|已实现
-|-
设定任务列表|✅

如果是周期任务，则替换整个任务列表；如果是单次任务，直接执行。

键值|类型|描述
-|-|-
TASK[]|Global.Bot.Task[]|任务列表

```json
{
    "type" : "task",
    "data" : <TASK[]>
}
```