# 全局数据

## Global.Ae
```typescript
interface Ae {
    uuid: string
    name: string
    timeCreated: number
    timeUpdated: number

    cpus: [{
        name: string
        coproccessors: number
        storage: number
        busy: boolean
        active: boolean
        finalOutput?: {
            name: string
            damage: number
            amount: number
            id: number
            display: string
        }
    }]

    itemList: [{
        name: string
        type: string
        amount: number
        damage?: number
        craftable: boolean
        id: number
        display: string
    }]
}
```

## Global.Bot
```typescript
interface Bot {
    uuid: string
    name: string
    token: string
    timeCreated: number

    components: [{
        description: string
        class: string
        uuid: string
    }]

    tasks: [{
        task: string
        interval: number
        taskUuid: string
        config?: any
    }]
}
```

## Global.Common
```typescript
interface Common {
    uuid: string
    name: string
    description?: string
    unit?: string
    min?: number
    max?: number

    value?: number
    avgIO?: number
}
```

## Global.Event
```typescript
interface Event {
    uuid: string
    name: string
    description?: string

    // 0=通知 1=警告 2=紧急
    priority: number
    // 0=未处理 1=已处理
    status: number
    timestamp: number
}
```

## Global.McServerStatus
```typescript
interface McServerStatus {
    ip: string
    online: boolean
    motd: string
    players: {
        max: number
        online: number
        list: string[]
    }
}
```

## Global.Redstone
```typescript
interface Redstone {
    uuid: string
    botUuid: string
    name: string
    description?: string

    type: "digital" | "analog"
    value: number
    side: "up" | "down" | "north" | "south" | "west" | "east"
}
```

## Global.User
```typescript
interface User {
    uuid: string
    name: string
    token: string
}
```