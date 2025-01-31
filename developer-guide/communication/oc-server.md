# OC -> SERVER 通信

## auth/request

接口描述|已实现
-|-
OC 登录请求|✅

键值|类型|描述
-|-|-
TOKEN|string|登录密钥（OC）

```json
{
    "type" : "auth/request",
    "data" : {
        "token" : <TOKEN>
    }
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

## data/ae/itemList

接口描述|已实现
-|-
上报 AE 物品列表|✅

键值|类型|描述
-|-|-
ITEM[]|Global.Ae.Item[]|AE 物品列表

```json
{
    "type" : "data/ae/itemList",
    "data" : <ITEM[]>
}
```

## data/ae/cpus

接口描述|已实现
-|-
上报 AE CPU 信息|✅

键值|类型|描述
-|-|-
CPU[]|Global.Ae.Cpu[]|AE CPU 列表

```json
{
    "type" : "data/ae/cpus",
    "data" : <CPU[]>
}
```

## data/event/add

接口描述|已实现
-|-
新增事件通知|✅

键值|类型|描述
-|-|-
EVENT|Global.Event|事件

```json
{
    "type" : "data/event/add",
    "data" : <EVENT>
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

## data/bot/component

接口描述|已实现
-|-
上报 OC 组件信息|✅

键值|类型|描述
-|-|-
COMPONENT[]|Global.Bot.Component[]|组件列表

```json
{
    "type" : "data/bot/component",
    "data" : <COMPONENT[]>
}
```

