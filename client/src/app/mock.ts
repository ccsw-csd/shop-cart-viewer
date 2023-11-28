export const EVENT_DATA: any[] = [
    {
        "topic": "stock",
        "timestamp": 1700645714735,
        "data": {
            "success": true,
            "groupId": "team-2",
            "data": {
                "uuid": "9246b084-6753-474a-b228-08f1065d45a1",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": null,
                "paid": null,
                "shipment": null,
                "invoice": null
            },
            "team": 2
        }
    },
    {
        "topic": "payment",
        "timestamp": 1700645715404,
        "data": {
            "success": true,
            "groupId": "team-2",
            "data": {
                "uuid": "9246b084-6753-474a-b228-08f1065d45a1",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": null,
                "shipment": null,
                "invoice": null
            },
            "team": 2
        }
    },
    {
        "topic": "shipment",
        "timestamp": 1700645715776,
        "data": {
            "success": true,
            "groupId": "team-2",
            "data": {
                "uuid": "9246b084-6753-474a-b228-08f1065d45a1",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": null,
                "invoice": null
            },
            "team": 2
        }
    },
    {
        "topic": "invoice",
        "timestamp": 1700645716152,
        "data": {
            "success": true,
            "groupId": "team-2",
            "data": {
                "uuid": "9246b084-6753-474a-b228-08f1065d45a1",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": "2023-11-22T10:35:15.929162200",
                "invoice": null
            },
            "team": 2
        }
    },
    {
        "topic": "shop_order",
        "timestamp": 1700645716452,
        "data": {
            "success": true,
            "groupId": "team-2",
            "data": {
                "uuid": "9246b084-6753-474a-b228-08f1065d45a1",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": "2023-11-22T10:35:15.929162200",
                "invoice": "9246b084-6753-474a-b228-08f1065d45a1-customer1-product1"
            },
            "team": 2
        }
    },
    {
        "topic": "notification",
        "timestamp": 1700645716789,
        "data": {
            "success": true,
            "groupId": "team-2",
            "data": {
                "uuid": "9246b084-6753-474a-b228-08f1065d45a1",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": "2023-11-22T10:35:15.929162200",
                "invoice": "9246b084-6753-474a-b228-08f1065d45a1-customer1-product1"
            },
            "team": 0
        }
    },
    {
        "topic": "stock",
        "timestamp": 1700648580036,
        "data": {
            "success": true,
            "groupId": "team-3",
            "data": {
                "uuid": "154c9de5-b0cb-4c52-a96a-af110741ded1",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": null,
                "paid": null,
                "shipment": null,
                "invoice": null
            },
            "team": 3
        }
    },
    {
        "topic": "payment",
        "timestamp": 1700648580176,
        "data": {
            "success": true,
            "groupId": "team-3",
            "data": {
                "uuid": "154c9de5-b0cb-4c52-a96a-af110741ded1",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": null,
                "shipment": null,
                "invoice": null
            },
            "team": 3
        }
    },
    {
        "topic": "shipment",
        "timestamp": 1700648580232,
        "data": {
            "success": true,
            "groupId": "team-3",
            "data": {
                "uuid": "154c9de5-b0cb-4c52-a96a-af110741ded1",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": null,
                "invoice": null
            },
            "team": 3
        }
    },
    {
        "topic": "invoice",
        "timestamp": 1700648580290,
        "data": {
            "success": true,
            "groupId": "order-group-id",
            "data": {
                "uuid": "154c9de5-b0cb-4c52-a96a-af110741ded1",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": "2023-11-22T11:23:00.255232200",
                "invoice": null
            },
            "team": 0
        }
    },
    {
        "topic": "shop_order",
        "timestamp": 1700648580337,
        "data": {
            "success": true,
            "groupId": "order-group-id",
            "data": {
                "uuid": "154c9de5-b0cb-4c52-a96a-af110741ded1",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": "2023-11-22T11:23:00.255232200",
                "invoice": "154c9de5-b0cb-4c52-a96a-af110741ded1-customer1-product1"
            },
            "team": 0
        }
    },
    {
        "topic": "notification",
        "timestamp": 1700648580621,
        "data": {
            "success": true,
            "groupId": "order-group-id",
            "data": {
                "uuid": "154c9de5-b0cb-4c52-a96a-af110741ded1",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": "2023-11-22T11:23:00.255232200",
                "invoice": "154c9de5-b0cb-4c52-a96a-af110741ded1-customer1-product1"
            },
            "team": 0
        }
    },
    {
        "topic": "stock",
        "timestamp": 1700649027529,
        "data": {
            "success": true,
            "groupId": "order-group-id",
            "data": {
                "uuid": "9c891ae6-2b58-416d-b4a9-c53f7a2698ef",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": null,
                "paid": null,
                "shipment": null,
                "invoice": null
            },
            "team": 0
        }
    },
    {
        "topic": "payment",
        "timestamp": 1700649027638,
        "data": {
            "success": true,
            "groupId": "order-group-id",
            "data": {
                "uuid": "9c891ae6-2b58-416d-b4a9-c53f7a2698ef",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": null,
                "shipment": null,
                "invoice": null
            },
            "team": 0
        }
    },
    {
        "topic": "shipment",
        "timestamp": 1700649027678,
        "data": {
            "success": true,
            "groupId": "order-group-id",
            "data": {
                "uuid": "9c891ae6-2b58-416d-b4a9-c53f7a2698ef",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": null,
                "invoice": null
            },
            "team": 0
        }
    },
    {
        "topic": "invoice",
        "timestamp": 1700649027716,
        "data": {
            "success": true,
            "groupId": "order-group-id",
            "data": {
                "uuid": "9c891ae6-2b58-416d-b4a9-c53f7a2698ef",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": "2023-11-22T11:30:27.697854300",
                "invoice": null
            },
            "team": 0
        }
    },
    {
        "topic": "shop_order",
        "timestamp": 1700649027753,
        "data": {
            "success": true,
            "groupId": "order-group-id",
            "data": {
                "uuid": "9c891ae6-2b58-416d-b4a9-c53f7a2698ef",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": "2023-11-22T11:30:27.697854300",
                "invoice": "9c891ae6-2b58-416d-b4a9-c53f7a2698ef-customer1-product1"
            },
            "team": 0
        }
    },
    {
        "topic": "notification",
        "timestamp": 1700649028013,
        "data": {
            "success": true,
            "groupId": "order-group-id",
            "data": {
                "uuid": "9c891ae6-2b58-416d-b4a9-c53f7a2698ef",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": "2023-11-22T11:30:27.697854300",
                "invoice": "9c891ae6-2b58-416d-b4a9-c53f7a2698ef-customer1-product1"
            },
            "team": 0
        }
    },
    {
        "topic": "stock",
        "timestamp": 1700653383194,
        "data": {
            "success": true,
            "groupId": "order-group-id",
            "data": {
                "uuid": "8876de53-be11-403b-8973-66dfa267c872",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": null,
                "paid": null,
                "shipment": null,
                "invoice": null
            },
            "team": 0
        }
    },
    {
        "topic": "payment",
        "timestamp": 1700653383830,
        "data": {
            "success": true,
            "groupId": "order-group-id",
            "data": {
                "uuid": "8876de53-be11-403b-8973-66dfa267c872",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": null,
                "shipment": null,
                "invoice": null
            },
            "team": 0
        }
    },
    {
        "topic": "shipment",
        "timestamp": 1700653384221,
        "data": {
            "success": true,
            "groupId": "order-group-id",
            "data": {
                "uuid": "8876de53-be11-403b-8973-66dfa267c872",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": null,
                "invoice": null
            },
            "team": 0
        }
    },
    {
        "topic": "invoice",
        "timestamp": 1700653384625,
        "data": {
            "success": true,
            "groupId": "order-group-id",
            "data": {
                "uuid": "8876de53-be11-403b-8973-66dfa267c872",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": "2023-11-22T12:43:04.401038200",
                "invoice": null
            },
            "team": 0
        }
    },
    {
        "topic": "shop_order",
        "timestamp": 1700653384902,
        "data": {
            "success": true,
            "groupId": "order-group-id",
            "data": {
                "uuid": "8876de53-be11-403b-8973-66dfa267c872",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": "2023-11-22T12:43:04.401038200",
                "invoice": "8876de53-be11-403b-8973-66dfa267c872-customer1-product1"
            },
            "team": 0
        }
    },
    {
        "topic": "notification",
        "timestamp": 1700653385231,
        "data": {
            "success": true,
            "groupId": "order-group-id",
            "data": {
                "uuid": "8876de53-be11-403b-8973-66dfa267c872",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": "2023-11-22T12:43:04.401038200",
                "invoice": "8876de53-be11-403b-8973-66dfa267c872-customer1-product1"
            },
            "team": 0
        }
    },
    {
        "topic": "stock",
        "timestamp": 1700655401248,
        "data": {
            "success": true,
            "groupId": "order-group-id",
            "data": {
                "uuid": "0c5cb538-1b80-4b40-9b1c-bfe7a981f6c2",
                "customer": "customer1111111111111111111111111111111111111111",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": null,
                "paid": null,
                "shipment": null,
                "invoice": null
            },
            "team": 4
        }
    },
    {
        "topic": "payment",
        "timestamp": 1700655401294,
        "data": {
            "success": true,
            "groupId": "order-group-id",
            "data": {
                "uuid": "0c5cb538-1b80-4b40-9b1c-bfe7a981f6c2",
                "customer": "customer1111111111111111111111111111111111111111",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": null,
                "shipment": null,
                "invoice": null
            },
            "team": 4
        }
    },
    {
        "topic": "shipment",
        "timestamp": 1700655401341,
        "data": {
            "success": true,
            "groupId": "order-group-id",
            "data": {
                "uuid": "0c5cb538-1b80-4b40-9b1c-bfe7a981f6c2",
                "customer": "customer1111111111111111111111111111111111111111",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": null,
                "invoice": null
            },
            "team": 4
        }
    },
    {
        "topic": "invoice",
        "timestamp": 1700655401384,
        "data": {
            "success": true,
            "groupId": "order-group-id",
            "data": {
                "uuid": "0c5cb538-1b80-4b40-9b1c-bfe7a981f6c2",
                "customer": "customer1111111111111111111111111111111111111111",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": "2023-11-22T13:16:41.359958400",
                "invoice": null
            },
            "team": 4
        }
    },
    {
        "topic": "shipment",
        "timestamp": 1700655401436,
        "data": {
            "success": false,
            "groupId": "order-group-id",
            "data": {
                "uuid": "0c5cb538-1b80-4b40-9b1c-bfe7a981f6c2",
                "customer": "customer1111111111111111111111111111111111111111",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": "2023-11-22T13:16:41.359958400",
                "invoice": null
            },
            "team": 4
        }
    },
    {
        "topic": "payment",
        "timestamp": 1700655401709,
        "data": {
            "success": false,
            "groupId": "order-group-id",
            "data": {
                "uuid": "0c5cb538-1b80-4b40-9b1c-bfe7a981f6c2",
                "customer": "customer1111111111111111111111111111111111111111",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": "2023-11-22T13:16:41.359958400",
                "invoice": null
            },
            "team": 4
        }
    },
    {
        "topic": "stock",
        "timestamp": 1700655401942,
        "data": {
            "success": false,
            "groupId": "order-group-id",
            "data": {
                "uuid": "0c5cb538-1b80-4b40-9b1c-bfe7a981f6c2",
                "customer": "customer1111111111111111111111111111111111111111",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": "2023-11-22T13:16:41.359958400",
                "invoice": null
            },
            "team": 4
        }
    },
    {
        "topic": "shop_order",
        "timestamp": 1700655401984,
        "data": {
            "success": false,
            "groupId": "order-group-id",
            "data": {
                "uuid": "0c5cb538-1b80-4b40-9b1c-bfe7a981f6c2",
                "customer": "customer1111111111111111111111111111111111111111",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": "2023-11-22T13:16:41.359958400",
                "invoice": null
            },
            "team": 4
        }
    },
    {
        "topic": "notification",
        "timestamp": 1700655402032,
        "data": {
            "success": false,
            "groupId": "order-group-id",
            "data": {
                "uuid": "0c5cb538-1b80-4b40-9b1c-bfe7a981f6c2",
                "customer": "customer1111111111111111111111111111111111111111",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": "2023-11-22T13:16:41.359958400",
                "invoice": null
            },
            "team": 4
        }
    },
    {
        "topic": "stock",
        "timestamp": 1700655414386,
        "data": {
            "success": true,
            "groupId": "order-group-id",
            "data": {
                "uuid": "0011cdf5-a043-4992-9e91-4cf2871c0442",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": null,
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": null,
                "paid": null,
                "shipment": null,
                "invoice": null
            },
            "team": 0
        }
    },
    {
        "topic": "payment",
        "timestamp": 1700655414410,
        "data": {
            "success": true,
            "groupId": "order-group-id",
            "data": {
                "uuid": "0011cdf5-a043-4992-9e91-4cf2871c0442",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": null,
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": null,
                "shipment": null,
                "invoice": null
            },
            "team": 0
        }
    },
    {
        "topic": "shipment",
        "timestamp": 1700655414429,
        "data": {
            "success": true,
            "groupId": "order-group-id",
            "data": {
                "uuid": "0011cdf5-a043-4992-9e91-4cf2871c0442",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": null,
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": null,
                "invoice": null
            },
            "team": 0
        }
    },
    {
        "topic": "payment",
        "timestamp": 1700655414447,
        "data": {
            "success": false,
            "groupId": "order-group-id",
            "data": {
                "uuid": "0011cdf5-a043-4992-9e91-4cf2871c0442",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": null,
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": null,
                "invoice": null
            },
            "team": 0
        }
    },
    {
        "topic": "stock",
        "timestamp": 1700655414470,
        "data": {
            "success": false,
            "groupId": "order-group-id",
            "data": {
                "uuid": "0011cdf5-a043-4992-9e91-4cf2871c0442",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": null,
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": null,
                "invoice": null
            },
            "team": 0
        }
    },
    {
        "topic": "shop_order",
        "timestamp": 1700655414492,
        "data": {
            "success": false,
            "groupId": "order-group-id",
            "data": {
                "uuid": "0011cdf5-a043-4992-9e91-4cf2871c0442",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": null,
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": null,
                "invoice": null
            },
            "team": 0
        }
    },
    {
        "topic": "notification",
        "timestamp": 1700655414515,
        "data": {
            "success": false,
            "groupId": "order-group-id",
            "data": {
                "uuid": "0011cdf5-a043-4992-9e91-4cf2871c0442",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": null,
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": null,
                "invoice": null
            },
            "team": 0
        }
    },
    {
        "topic": "stock",
        "timestamp": 1700655425222,
        "data": {
            "success": true,
            "groupId": "order-group-id",
            "data": {
                "uuid": "488ee5e5-5883-418b-b94a-f796810cb229",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": null,
                "product": "product1",
                "quantity": 2,
                "price": null,
                "paid": null,
                "shipment": null,
                "invoice": null
            },
            "team": 0
        }
    },
    {
        "topic": "payment",
        "timestamp": 1700655425244,
        "data": {
            "success": true,
            "groupId": "order-group-id",
            "data": {
                "uuid": "488ee5e5-5883-418b-b94a-f796810cb229",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": null,
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": null,
                "shipment": null,
                "invoice": null
            },
            "team": 0
        }
    },
    {
        "topic": "stock",
        "timestamp": 1700655425262,
        "data": {
            "success": false,
            "groupId": "order-group-id",
            "data": {
                "uuid": "488ee5e5-5883-418b-b94a-f796810cb229",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": null,
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": null,
                "shipment": null,
                "invoice": null
            },
            "team": 0
        }
    },
    {
        "topic": "shop_order",
        "timestamp": 1700655425283,
        "data": {
            "success": false,
            "groupId": "order-group-id",
            "data": {
                "uuid": "488ee5e5-5883-418b-b94a-f796810cb229",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": null,
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": null,
                "shipment": null,
                "invoice": null
            },
            "team": 0
        }
    },
    {
        "topic": "notification",
        "timestamp": 1700655425305,
        "data": {
            "success": false,
            "groupId": "order-group-id",
            "data": {
                "uuid": "488ee5e5-5883-418b-b94a-f796810cb229",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": null,
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": null,
                "shipment": null,
                "invoice": null
            },
            "team": 0
        }
    },
    {
        "topic": "stock",
        "timestamp": 1700655437473,
        "data": {
            "success": true,
            "groupId": "order-group-id",
            "data": {
                "uuid": "59b067ba-78e9-4385-854f-af5f7e7fa04d",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 12,
                "price": null,
                "paid": null,
                "shipment": null,
                "invoice": null
            },
            "team": 0
        }
    },
    {
        "topic": "shop_order",
        "timestamp": 1700655437495,
        "data": {
            "success": false,
            "groupId": "order-group-id",
            "data": {
                "uuid": "59b067ba-78e9-4385-854f-af5f7e7fa04d",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 12,
                "price": null,
                "paid": null,
                "shipment": null,
                "invoice": null
            },
            "team": 0
        }
    },
    {
        "topic": "notification",
        "timestamp": 1700655437518,
        "data": {
            "success": false,
            "groupId": "order-group-id",
            "data": {
                "uuid": "59b067ba-78e9-4385-854f-af5f7e7fa04d",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 12,
                "price": null,
                "paid": null,
                "shipment": null,
                "invoice": null
            },
            "team": 0
        }
    },
    {
        "topic": "notification",
        "timestamp": 1700664483752,
        "data": {
            "success": true,
            "groupId": "order-team0-group-id",
            "data": {
                "uuid": "abe3e894-b732-4475-8156-f582a95e5e48",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.4,
                "paid": 44.8,
                "shipment": "2023-01-09T14:48:45.338229700",
                "invoice": "abe3e894-b732-4475-8156-f582a95e5e48-customer1-product1"
            },
            "team": 0
        }
    },
    {
        "topic": "stock",
        "timestamp": 1700727985879,
        "data": {
            "success": true,
            "groupId": "order-group-id",
            "data": {
                "uuid": "2a919929-b928-4bd0-8540-16297d0af983",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 12,
                "price": null,
                "paid": null,
                "shipment": null,
                "invoice": null
            },
            "team": 0
        }
    },
    {
        "topic": "shop_order",
        "timestamp": 1700727986295,
        "data": {
            "success": false,
            "groupId": "order-group-id",
            "data": {
                "uuid": "2a919929-b928-4bd0-8540-16297d0af983",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 12,
                "price": null,
                "paid": null,
                "shipment": null,
                "invoice": null
            },
            "team": 0
        }
    },
    {
        "topic": "notification",
        "timestamp": 1700727986522,
        "data": {
            "success": false,
            "groupId": "order-group-id",
            "data": {
                "uuid": "2a919929-b928-4bd0-8540-16297d0af983",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 12,
                "price": null,
                "paid": null,
                "shipment": null,
                "invoice": null
            },
            "team": 0
        }
    },
    {
        "topic": "stock",
        "timestamp": 1700728046100,
        "data": {
            "success": true,
            "groupId": "order-group-id",
            "data": {
                "uuid": "f255fcb6-3895-4304-9d21-55bc92ec1584",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": null,
                "product": "product1",
                "quantity": 2,
                "price": null,
                "paid": null,
                "shipment": null,
                "invoice": null
            },
            "team": 0
        }
    },
    {
        "topic": "payment",
        "timestamp": 1700728046179,
        "data": {
            "success": true,
            "groupId": "order-group-id",
            "data": {
                "uuid": "f255fcb6-3895-4304-9d21-55bc92ec1584",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": null,
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": null,
                "shipment": null,
                "invoice": null
            },
            "team": 0
        }
    },
    {
        "topic": "stock",
        "timestamp": 1700728046328,
        "data": {
            "success": false,
            "groupId": "order-group-id",
            "data": {
                "uuid": "f255fcb6-3895-4304-9d21-55bc92ec1584",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": null,
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": null,
                "shipment": null,
                "invoice": null
            },
            "team": 0
        }
    },
    {
        "topic": "shop_order",
        "timestamp": 1700728046391,
        "data": {
            "success": false,
            "groupId": "order-group-id",
            "data": {
                "uuid": "f255fcb6-3895-4304-9d21-55bc92ec1584",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": null,
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": null,
                "shipment": null,
                "invoice": null
            },
            "team": 0
        }
    },
    {
        "topic": "notification",
        "timestamp": 1700728046412,
        "data": {
            "success": false,
            "groupId": "order-group-id",
            "data": {
                "uuid": "f255fcb6-3895-4304-9d21-55bc92ec1584",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": null,
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": null,
                "shipment": null,
                "invoice": null
            },
            "team": 0
        }
    },
    {
        "topic": "stock",
        "timestamp": 1700728226186,
        "data": {
            "success": true,
            "groupId": "team-1",
            "data": {
                "uuid": "6e126eda-99e6-4a27-b306-71e19106b829",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 12,
                "price": null,
                "paid": null,
                "shipment": null,
                "invoice": null
            },
            "team": 1
        }
    },
    {
        "topic": "shop_order",
        "timestamp": 1700728226544,
        "data": {
            "success": false,
            "groupId": "team-1",
            "data": {
                "uuid": "6e126eda-99e6-4a27-b306-71e19106b829",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 12,
                "price": null,
                "paid": null,
                "shipment": null,
                "invoice": null
            },
            "team": 1
        }
    },
    {
        "topic": "notification",
        "timestamp": 1700728226733,
        "data": {
            "success": false,
            "groupId": "team-1",
            "data": {
                "uuid": "6e126eda-99e6-4a27-b306-71e19106b829",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 12,
                "price": null,
                "paid": null,
                "shipment": null,
                "invoice": null
            },
            "team": 1
        }
    },
    {
        "topic": "stock",
        "timestamp": 1700728228947,
        "data": {
            "success": true,
            "groupId": "team-1",
            "data": {
                "uuid": "083c3b23-f5ca-446d-899b-72f12730d1ba",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": null,
                "product": "product1",
                "quantity": 2,
                "price": null,
                "paid": null,
                "shipment": null,
                "invoice": null
            },
            "team": 1
        }
    },
    {
        "topic": "payment",
        "timestamp": 1700728229033,
        "data": {
            "success": true,
            "groupId": "team-1",
            "data": {
                "uuid": "083c3b23-f5ca-446d-899b-72f12730d1ba",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": null,
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": null,
                "shipment": null,
                "invoice": null
            },
            "team": 1
        }
    },
    {
        "topic": "stock",
        "timestamp": 1700728229137,
        "data": {
            "success": false,
            "groupId": "team-1",
            "data": {
                "uuid": "083c3b23-f5ca-446d-899b-72f12730d1ba",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": null,
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": null,
                "shipment": null,
                "invoice": null
            },
            "team": 1
        }
    },
    {
        "topic": "shop_order",
        "timestamp": 1700728229206,
        "data": {
            "success": false,
            "groupId": "team-1",
            "data": {
                "uuid": "083c3b23-f5ca-446d-899b-72f12730d1ba",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": null,
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": null,
                "shipment": null,
                "invoice": null
            },
            "team": 1
        }
    },
    {
        "topic": "notification",
        "timestamp": 1700728229228,
        "data": {
            "success": false,
            "groupId": "team-1",
            "data": {
                "uuid": "083c3b23-f5ca-446d-899b-72f12730d1ba",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": null,
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": null,
                "shipment": null,
                "invoice": null
            },
            "team": 1
        }
    },
    {
        "topic": "stock",
        "timestamp": 1700728231864,
        "data": {
            "success": true,
            "groupId": "team-1",
            "data": {
                "uuid": "9a898989-21df-4dab-87a0-a6ff9b1b586d",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": null,
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": null,
                "paid": null,
                "shipment": null,
                "invoice": null
            },
            "team": 1
        }
    },
    {
        "topic": "payment",
        "timestamp": 1700728231884,
        "data": {
            "success": true,
            "groupId": "team-1",
            "data": {
                "uuid": "9a898989-21df-4dab-87a0-a6ff9b1b586d",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": null,
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": null,
                "shipment": null,
                "invoice": null
            },
            "team": 1
        }
    },
    {
        "topic": "shipment",
        "timestamp": 1700728231973,
        "data": {
            "success": true,
            "groupId": "team-1",
            "data": {
                "uuid": "9a898989-21df-4dab-87a0-a6ff9b1b586d",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": null,
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": null,
                "invoice": null
            },
            "team": 1
        }
    },
    {
        "topic": "payment",
        "timestamp": 1700728232088,
        "data": {
            "success": false,
            "groupId": "team-1",
            "data": {
                "uuid": "9a898989-21df-4dab-87a0-a6ff9b1b586d",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": null,
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": null,
                "invoice": null
            },
            "team": 1
        }
    },
    {
        "topic": "stock",
        "timestamp": 1700728232274,
        "data": {
            "success": false,
            "groupId": "team-1",
            "data": {
                "uuid": "9a898989-21df-4dab-87a0-a6ff9b1b586d",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": null,
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": null,
                "invoice": null
            },
            "team": 1
        }
    },
    {
        "topic": "shop_order",
        "timestamp": 1700728232295,
        "data": {
            "success": false,
            "groupId": "team-1",
            "data": {
                "uuid": "9a898989-21df-4dab-87a0-a6ff9b1b586d",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": null,
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": null,
                "invoice": null
            },
            "team": 1
        }
    },
    {
        "topic": "notification",
        "timestamp": 1700728232316,
        "data": {
            "success": false,
            "groupId": "team-1",
            "data": {
                "uuid": "9a898989-21df-4dab-87a0-a6ff9b1b586d",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": null,
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": null,
                "invoice": null
            },
            "team": 1
        }
    },
    {
        "topic": "stock",
        "timestamp": 1700728235076,
        "data": {
            "success": true,
            "groupId": "team-1",
            "data": {
                "uuid": "3cac8398-54a0-4c5d-aa80-46aca83e06d8",
                "customer": "customer1111111111111111111111111111111111111111",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": null,
                "paid": null,
                "shipment": null,
                "invoice": null
            },
            "team": 1
        }
    },
    {
        "topic": "payment",
        "timestamp": 1700728235096,
        "data": {
            "success": true,
            "groupId": "team-1",
            "data": {
                "uuid": "3cac8398-54a0-4c5d-aa80-46aca83e06d8",
                "customer": "customer1111111111111111111111111111111111111111",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": null,
                "shipment": null,
                "invoice": null
            },
            "team": 1
        }
    },
    {
        "topic": "shipment",
        "timestamp": 1700728235114,
        "data": {
            "success": true,
            "groupId": "team-1",
            "data": {
                "uuid": "3cac8398-54a0-4c5d-aa80-46aca83e06d8",
                "customer": "customer1111111111111111111111111111111111111111",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": null,
                "invoice": null
            },
            "team": 1
        }
    },
    {
        "topic": "invoice",
        "timestamp": 1700728235212,
        "data": {
            "success": true,
            "groupId": "team-1",
            "data": {
                "uuid": "3cac8398-54a0-4c5d-aa80-46aca83e06d8",
                "customer": "customer1111111111111111111111111111111111111111",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": "2023-11-23T09:30:35.131902700",
                "invoice": null
            },
            "team": 1
        }
    },
    {
        "topic": "shipment",
        "timestamp": 1700728235318,
        "data": {
            "success": false,
            "groupId": "team-1",
            "data": {
                "uuid": "3cac8398-54a0-4c5d-aa80-46aca83e06d8",
                "customer": "customer1111111111111111111111111111111111111111",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": "2023-11-23T09:30:35.131902700",
                "invoice": null
            },
            "team": 1
        }
    },
    {
        "topic": "payment",
        "timestamp": 1700728235502,
        "data": {
            "success": false,
            "groupId": "team-1",
            "data": {
                "uuid": "3cac8398-54a0-4c5d-aa80-46aca83e06d8",
                "customer": "customer1111111111111111111111111111111111111111",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": "2023-11-23T09:30:35.131902700",
                "invoice": null
            },
            "team": 1
        }
    },
    {
        "topic": "stock",
        "timestamp": 1700728235523,
        "data": {
            "success": false,
            "groupId": "team-1",
            "data": {
                "uuid": "3cac8398-54a0-4c5d-aa80-46aca83e06d8",
                "customer": "customer1111111111111111111111111111111111111111",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": "2023-11-23T09:30:35.131902700",
                "invoice": null
            },
            "team": 1
        }
    },
    {
        "topic": "shop_order",
        "timestamp": 1700728235544,
        "data": {
            "success": false,
            "groupId": "team-1",
            "data": {
                "uuid": "3cac8398-54a0-4c5d-aa80-46aca83e06d8",
                "customer": "customer1111111111111111111111111111111111111111",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": "2023-11-23T09:30:35.131902700",
                "invoice": null
            },
            "team": 1
        }
    },
    {
        "topic": "notification",
        "timestamp": 1700728235568,
        "data": {
            "success": false,
            "groupId": "team-1",
            "data": {
                "uuid": "3cac8398-54a0-4c5d-aa80-46aca83e06d8",
                "customer": "customer1111111111111111111111111111111111111111",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": "2023-11-23T09:30:35.131902700",
                "invoice": null
            },
            "team": 1
        }
    },
    {
        "topic": "stock",
        "timestamp": 1700728238637,
        "data": {
            "success": true,
            "groupId": "team-1",
            "data": {
                "uuid": "c869c9d2-b99c-4b14-aa16-e6704ed18e87",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": null,
                "paid": null,
                "shipment": null,
                "invoice": null
            },
            "team": 1
        }
    },
    {
        "topic": "payment",
        "timestamp": 1700728238658,
        "data": {
            "success": true,
            "groupId": "team-1",
            "data": {
                "uuid": "c869c9d2-b99c-4b14-aa16-e6704ed18e87",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": null,
                "shipment": null,
                "invoice": null
            },
            "team": 1
        }
    },
    {
        "topic": "shipment",
        "timestamp": 1700728238684,
        "data": {
            "success": true,
            "groupId": "team-1",
            "data": {
                "uuid": "c869c9d2-b99c-4b14-aa16-e6704ed18e87",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": null,
                "invoice": null
            },
            "team": 1
        }
    },
    {
        "topic": "invoice",
        "timestamp": 1700728238703,
        "data": {
            "success": true,
            "groupId": "team-1",
            "data": {
                "uuid": "c869c9d2-b99c-4b14-aa16-e6704ed18e87",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": "2023-11-23T09:30:38.701652600",
                "invoice": null
            },
            "team": 1
        }
    },
    {
        "topic": "shop_order",
        "timestamp": 1700728238740,
        "data": {
            "success": true,
            "groupId": "team-1",
            "data": {
                "uuid": "c869c9d2-b99c-4b14-aa16-e6704ed18e87",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": "2023-11-23T09:30:38.701652600",
                "invoice": "c869c9d2-b99c-4b14-aa16-e6704ed18e87-customer1-product1"
            },
            "team": 1
        }
    },
    {
        "topic": "notification",
        "timestamp": 1700728238765,
        "data": {
            "success": true,
            "groupId": "team-1",
            "data": {
                "uuid": "c869c9d2-b99c-4b14-aa16-e6704ed18e87",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": "2023-11-23T09:30:38.701652600",
                "invoice": "c869c9d2-b99c-4b14-aa16-e6704ed18e87-customer1-product1"
            },
            "team": 1
        }
    },
    {
        "topic": "stock",
        "timestamp": 1700731157326,
        "data": {
            "success": true,
            "groupId": "team-1",
            "data": {
                "uuid": "76b29dd7-fb29-418d-ac5b-5ec8a662dc8a",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 12,
                "price": null,
                "paid": null,
                "shipment": null,
                "invoice": null
            },
            "team": 1
        }
    },
    {
        "topic": "shop_order",
        "timestamp": 1700731157656,
        "data": {
            "success": false,
            "groupId": "team-1",
            "data": {
                "uuid": "76b29dd7-fb29-418d-ac5b-5ec8a662dc8a",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 12,
                "price": null,
                "paid": null,
                "shipment": null,
                "invoice": null
            },
            "team": 1
        }
    },
    {
        "topic": "notification",
        "timestamp": 1700731157851,
        "data": {
            "success": false,
            "groupId": "team-1",
            "data": {
                "uuid": "76b29dd7-fb29-418d-ac5b-5ec8a662dc8a",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 12,
                "price": null,
                "paid": null,
                "shipment": null,
                "invoice": null
            },
            "team": 1
        }
    },
    {
        "topic": "stock",
        "timestamp": 1700731341592,
        "data": {
            "success": true,
            "groupId": "team-1",
            "data": {
                "uuid": "f2c3645d-cc17-4d0f-a995-34e05ad49a3b",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": null,
                "product": "product1",
                "quantity": 2,
                "price": null,
                "paid": null,
                "shipment": null,
                "invoice": null
            },
            "team": 1
        }
    },
    {
        "topic": "payment",
        "timestamp": 1700731341671,
        "data": {
            "success": true,
            "groupId": "team-1",
            "data": {
                "uuid": "f2c3645d-cc17-4d0f-a995-34e05ad49a3b",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": null,
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": null,
                "shipment": null,
                "invoice": null
            },
            "team": 1
        }
    },
    {
        "topic": "stock",
        "timestamp": 1700731341829,
        "data": {
            "success": false,
            "groupId": "team-1",
            "data": {
                "uuid": "f2c3645d-cc17-4d0f-a995-34e05ad49a3b",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": null,
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": null,
                "shipment": null,
                "invoice": null
            },
            "team": 1
        }
    },
    {
        "topic": "shop_order",
        "timestamp": 1700731341892,
        "data": {
            "success": false,
            "groupId": "team-1",
            "data": {
                "uuid": "f2c3645d-cc17-4d0f-a995-34e05ad49a3b",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": null,
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": null,
                "shipment": null,
                "invoice": null
            },
            "team": 1
        }
    },
    {
        "topic": "notification",
        "timestamp": 1700731341912,
        "data": {
            "success": false,
            "groupId": "team-1",
            "data": {
                "uuid": "f2c3645d-cc17-4d0f-a995-34e05ad49a3b",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": null,
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": null,
                "shipment": null,
                "invoice": null
            },
            "team": 1
        }
    },
    {
        "topic": "stock",
        "timestamp": 1700731459535,
        "data": {
            "success": true,
            "groupId": "team-1",
            "data": {
                "uuid": "302eed68-942d-41f1-8ced-8ac42390726d",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": null,
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": null,
                "paid": null,
                "shipment": null,
                "invoice": null
            },
            "team": 1
        }
    },
    {
        "topic": "payment",
        "timestamp": 1700731459557,
        "data": {
            "success": true,
            "groupId": "team-1",
            "data": {
                "uuid": "302eed68-942d-41f1-8ced-8ac42390726d",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": null,
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": null,
                "shipment": null,
                "invoice": null
            },
            "team": 1
        }
    },
    {
        "topic": "shipment",
        "timestamp": 1700731459640,
        "data": {
            "success": true,
            "groupId": "team-1",
            "data": {
                "uuid": "302eed68-942d-41f1-8ced-8ac42390726d",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": null,
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": null,
                "invoice": null
            },
            "team": 1
        }
    },
    {
        "topic": "payment",
        "timestamp": 1700731459816,
        "data": {
            "success": false,
            "groupId": "team-1",
            "data": {
                "uuid": "302eed68-942d-41f1-8ced-8ac42390726d",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": null,
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": null,
                "invoice": null
            },
            "team": 1
        }
    },
    {
        "topic": "stock",
        "timestamp": 1700731460021,
        "data": {
            "success": false,
            "groupId": "team-1",
            "data": {
                "uuid": "302eed68-942d-41f1-8ced-8ac42390726d",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": null,
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": null,
                "invoice": null
            },
            "team": 1
        }
    },
    {
        "topic": "shop_order",
        "timestamp": 1700731460042,
        "data": {
            "success": false,
            "groupId": "team-1",
            "data": {
                "uuid": "302eed68-942d-41f1-8ced-8ac42390726d",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": null,
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": null,
                "invoice": null
            },
            "team": 1
        }
    },
    {
        "topic": "notification",
        "timestamp": 1700731460062,
        "data": {
            "success": false,
            "groupId": "team-1",
            "data": {
                "uuid": "302eed68-942d-41f1-8ced-8ac42390726d",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": null,
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": null,
                "invoice": null
            },
            "team": 1
        }
    },
    {
        "topic": "stock",
        "timestamp": 1700731529219,
        "data": {
            "success": true,
            "groupId": "team-1",
            "data": {
                "uuid": "9a050ea5-25b3-4f4b-aceb-dd17069ca41d",
                "customer": "customer1111111111111111111111111111111111111111",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": null,
                "paid": null,
                "shipment": null,
                "invoice": null
            },
            "team": 1
        }
    },
    {
        "topic": "payment",
        "timestamp": 1700731529239,
        "data": {
            "success": true,
            "groupId": "team-1",
            "data": {
                "uuid": "9a050ea5-25b3-4f4b-aceb-dd17069ca41d",
                "customer": "customer1111111111111111111111111111111111111111",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": null,
                "shipment": null,
                "invoice": null
            },
            "team": 1
        }
    },
    {
        "topic": "shipment",
        "timestamp": 1700731529257,
        "data": {
            "success": true,
            "groupId": "team-1",
            "data": {
                "uuid": "9a050ea5-25b3-4f4b-aceb-dd17069ca41d",
                "customer": "customer1111111111111111111111111111111111111111",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": null,
                "invoice": null
            },
            "team": 1
        }
    },
    {
        "topic": "invoice",
        "timestamp": 1700731529335,
        "data": {
            "success": true,
            "groupId": "team-1",
            "data": {
                "uuid": "9a050ea5-25b3-4f4b-aceb-dd17069ca41d",
                "customer": "customer1111111111111111111111111111111111111111",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": "2023-11-23T10:25:29.273383700",
                "invoice": null
            },
            "team": 1
        }
    },
    {
        "topic": "shipment",
        "timestamp": 1700731529497,
        "data": {
            "success": false,
            "groupId": "team-1",
            "data": {
                "uuid": "9a050ea5-25b3-4f4b-aceb-dd17069ca41d",
                "customer": "customer1111111111111111111111111111111111111111",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": "2023-11-23T10:25:29.273383700",
                "invoice": null
            },
            "team": 1
        }
    },
    {
        "topic": "payment",
        "timestamp": 1700731529676,
        "data": {
            "success": false,
            "groupId": "team-1",
            "data": {
                "uuid": "9a050ea5-25b3-4f4b-aceb-dd17069ca41d",
                "customer": "customer1111111111111111111111111111111111111111",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": "2023-11-23T10:25:29.273383700",
                "invoice": null
            },
            "team": 1
        }
    },
    {
        "topic": "stock",
        "timestamp": 1700731529695,
        "data": {
            "success": false,
            "groupId": "team-1",
            "data": {
                "uuid": "9a050ea5-25b3-4f4b-aceb-dd17069ca41d",
                "customer": "customer1111111111111111111111111111111111111111",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": "2023-11-23T10:25:29.273383700",
                "invoice": null
            },
            "team": 1
        }
    },
    {
        "topic": "shop_order",
        "timestamp": 1700731529715,
        "data": {
            "success": false,
            "groupId": "team-1",
            "data": {
                "uuid": "9a050ea5-25b3-4f4b-aceb-dd17069ca41d",
                "customer": "customer1111111111111111111111111111111111111111",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": "2023-11-23T10:25:29.273383700",
                "invoice": null
            },
            "team": 1
        }
    },
    {
        "topic": "notification",
        "timestamp": 1700731529736,
        "data": {
            "success": false,
            "groupId": "team-1",
            "data": {
                "uuid": "9a050ea5-25b3-4f4b-aceb-dd17069ca41d",
                "customer": "customer1111111111111111111111111111111111111111",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": "2023-11-23T10:25:29.273383700",
                "invoice": null
            },
            "team": 1
        }
    },
    {
        "topic": "stock",
        "timestamp": 1700731592581,
        "data": {
            "success": true,
            "groupId": "team-1",
            "data": {
                "uuid": "c0e53c89-fddb-48bf-8177-7360115b0fae",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": null,
                "paid": null,
                "shipment": null,
                "invoice": null
            },
            "team": 1
        }
    },
    {
        "topic": "payment",
        "timestamp": 1700731592601,
        "data": {
            "success": true,
            "groupId": "team-1",
            "data": {
                "uuid": "c0e53c89-fddb-48bf-8177-7360115b0fae",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": null,
                "shipment": null,
                "invoice": null
            },
            "team": 1
        }
    },
    {
        "topic": "shipment",
        "timestamp": 1700731592619,
        "data": {
            "success": true,
            "groupId": "team-1",
            "data": {
                "uuid": "c0e53c89-fddb-48bf-8177-7360115b0fae",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": null,
                "invoice": null
            },
            "team": 1
        }
    },
    {
        "topic": "invoice",
        "timestamp": 1700731592637,
        "data": {
            "success": true,
            "groupId": "team-1",
            "data": {
                "uuid": "c0e53c89-fddb-48bf-8177-7360115b0fae",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": "2023-11-23T10:26:32.635227300",
                "invoice": null
            },
            "team": 1
        }
    },
    {
        "topic": "shop_order",
        "timestamp": 1700731592677,
        "data": {
            "success": true,
            "groupId": "team-1",
            "data": {
                "uuid": "c0e53c89-fddb-48bf-8177-7360115b0fae",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": "2023-11-23T10:26:32.635227300",
                "invoice": "c0e53c89-fddb-48bf-8177-7360115b0fae-customer1-product1"
            },
            "team": 1
        }
    },
    {
        "topic": "notification",
        "timestamp": 1700731592704,
        "data": {
            "success": true,
            "groupId": "team-1",
            "data": {
                "uuid": "c0e53c89-fddb-48bf-8177-7360115b0fae",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": "2023-11-23T10:26:32.635227300",
                "invoice": "c0e53c89-fddb-48bf-8177-7360115b0fae-customer1-product1"
            },
            "team": 1
        }
    },
    {
        "topic": "stock",
        "timestamp": 1700732004412,
        "data": {
            "success": true,
            "groupId": "team-1",
            "data": {
                "uuid": "85917586-e19d-4882-acf1-a60211257603",
                "customer": "customer1111111111111111111111111111111111111111",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": null,
                "paid": null,
                "shipment": null,
                "invoice": null
            },
            "team": 1
        }
    },
    {
        "topic": "payment",
        "timestamp": 1700732004435,
        "data": {
            "success": true,
            "groupId": "team-1",
            "data": {
                "uuid": "85917586-e19d-4882-acf1-a60211257603",
                "customer": "customer1111111111111111111111111111111111111111",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": null,
                "shipment": null,
                "invoice": null
            },
            "team": 1
        }
    },
    {
        "topic": "shipment",
        "timestamp": 1700732004454,
        "data": {
            "success": true,
            "groupId": "team-1",
            "data": {
                "uuid": "85917586-e19d-4882-acf1-a60211257603",
                "customer": "customer1111111111111111111111111111111111111111",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": null,
                "invoice": null
            },
            "team": 1
        }
    },
    {
        "topic": "invoice",
        "timestamp": 1700732004488,
        "data": {
            "success": true,
            "groupId": "team-1",
            "data": {
                "uuid": "85917586-e19d-4882-acf1-a60211257603",
                "customer": "customer1111111111111111111111111111111111111111",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": "2023-11-23T10:33:24.471435900",
                "invoice": null
            },
            "team": 2
        }
    },
    {
        "topic": "shipment",
        "timestamp": 1700732004519,
        "data": {
            "success": false,
            "groupId": "team-1",
            "data": {
                "uuid": "85917586-e19d-4882-acf1-a60211257603",
                "customer": "customer1111111111111111111111111111111111111111",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": "2023-11-23T10:33:24.471435900",
                "invoice": null
            },
            "team": 3
        }
    },
    {
        "topic": "payment",
        "timestamp": 1700732004555,
        "data": {
            "success": false,
            "groupId": "team-1",
            "data": {
                "uuid": "85917586-e19d-4882-acf1-a60211257603",
                "customer": "customer1111111111111111111111111111111111111111",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": "2023-11-23T10:33:24.471435900",
                "invoice": null
            },
            "team": 2
        }
    },
    {
        "topic": "stock",
        "timestamp": 1700732004588,
        "data": {
            "success": false,
            "groupId": "team-1",
            "data": {
                "uuid": "85917586-e19d-4882-acf1-a60211257603",
                "customer": "customer1111111111111111111111111111111111111111",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": "2023-11-23T10:33:24.471435900",
                "invoice": null
            },
            "team": 2
        }
    },
    {
        "topic": "shop_order",
        "timestamp": 1700732004609,
        "data": {
            "success": false,
            "groupId": "team-1",
            "data": {
                "uuid": "85917586-e19d-4882-acf1-a60211257603",
                "customer": "customer1111111111111111111111111111111111111111",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": "2023-11-23T10:33:24.471435900",
                "invoice": null
            },
            "team": 2
        }
    },
    {
        "topic": "notification",
        "timestamp": 1700732004628,
        "data": {
            "success": false,
            "groupId": "team-1",
            "data": {
                "uuid": "85917586-e19d-4882-acf1-a60211257603",
                "customer": "customer1111111111111111111111111111111111111111",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": "2023-11-23T10:33:24.471435900",
                "invoice": null
            },
            "team": 4
        }
    },
    {
        "topic": "stock",
        "timestamp": 1700732184912,
        "data": {
            "success": true,
            "groupId": "team-1",
            "data": {
                "uuid": "fd02a9a2-d913-4995-823f-87f72a793509",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": null,
                "paid": null,
                "shipment": null,
                "invoice": null
            },
            "team": 1
        }
    },
    {
        "topic": "payment",
        "timestamp": 1700732184933,
        "data": {
            "success": true,
            "groupId": "team-1",
            "data": {
                "uuid": "fd02a9a2-d913-4995-823f-87f72a793509",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": null,
                "shipment": null,
                "invoice": null
            },
            "team": 1
        }
    },
    {
        "topic": "shipment",
        "timestamp": 1700732184952,
        "data": {
            "success": true,
            "groupId": "team-1",
            "data": {
                "uuid": "fd02a9a2-d913-4995-823f-87f72a793509",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": null,
                "invoice": null
            },
            "team": 1
        }
    },
    {
        "topic": "invoice",
        "timestamp": 1700732184970,
        "data": {
            "success": true,
            "groupId": "team-1",
            "data": {
                "uuid": "fd02a9a2-d913-4995-823f-87f72a793509",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": "2023-11-23T10:36:24.968422300",
                "invoice": null
            },
            "team": 1
        }
    },
    {
        "topic": "shop_order",
        "timestamp": 1700732185001,
        "data": {
            "success": true,
            "groupId": "team-1",
            "data": {
                "uuid": "fd02a9a2-d913-4995-823f-87f72a793509",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": "2023-11-23T10:36:24.968422300",
                "invoice": "fd02a9a2-d913-4995-823f-87f72a793509-customer1-product1"
            },
            "team": 1
        }
    },
    {
        "topic": "notification",
        "timestamp": 1700732185021,
        "data": {
            "success": true,
            "groupId": "team-1",
            "data": {
                "uuid": "fd02a9a2-d913-4995-823f-87f72a793509",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.5,
                "paid": 45.0,
                "shipment": "2023-11-23T10:36:24.968422300",
                "invoice": "fd02a9a2-d913-4995-823f-87f72a793509-customer1-product1"
            },
            "team": 1
        }
    },
    {
        "topic": "notification",
        "timestamp": 1700734410064,
        "data": {
            "success": true,
            "groupId": "order-team0-group-id",
            "data": {
                "uuid": "abe3e894-b732-4475-8156-f582a95e5e48",
                "customer": "customer1",
                "email": "armen.mirzoyan-denisov@capgemini.com",
                "address": "address1",
                "credit": "12345",
                "product": "product1",
                "quantity": 2,
                "price": 22.4,
                "paid": 44.8,
                "shipment": "2023-01-09T14:48:45.338229700",
                "invoice": "abe3e894-b732-4475-8156-f582a95e5e48-customer1-product1"
            },
            "team": 4
        }
    }
]