# SERVER -> WEB 通信

## auth/response

接口描述|已实现
-|-
WEB 登录响应|✅

键值|类型|描述
-|-|-
USER|Global.User|用户账号信息

```json
{
    "type" : "auth/response",
    "data" : <USER>
}
```

## data/common/set

接口描述|已实现
-|-
修改通用数据，以 UUID 为主键进行修改|✅

键值|类型|描述
-|-|-
COMMON|Global.Common|通用数据

```json
{
    "type" : "data/common/set",
    "data" : <COMMON>
}
```

## data/bot/set

接口描述|已实现
-|-
修改 BOT 数据，以 UUID 为主键进行修改|✅

键值|类型|描述
-|-|-
BOT|Global.Bot|BOT 数据

```json
{
    "type" : "data/bot/set",
    "data" : <BOT>
}
```

## data/ae/set

接口描述|已实现
-|-
修改 AE 数据，以 UUID 为主键进行修改|✅

键值|类型|描述
-|-|-
AE|Global.Ae|AE 数据

```json
{
    "type" : "data/ae/set",
    "data" : <AE>
}
```

## data/mcServerStatus/set

接口描述|已实现
-|-
修改 MC 服务器状态数据|✅

键值|类型|描述
-|-|-
MCSERVERSTATUS|Global.McServerStatus|MC 服务器状态数据

```json
{
    "type" : "data/mcServerStatus/set",
    "data" : <MCSERVERSTATUS>
}
```

## 其他
登录时仅发送一次的数据暂略，可参照源码进行开发。