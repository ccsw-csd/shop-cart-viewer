package com.cap.order.shoporder.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cap.order.shoporder.consumer.KafkaConsumer;
import com.cap.order.shoporder.producer.KafkaProducer;
import com.cap.order.shoporder.request.EventDataDto;
import com.cap.order.shoporder.request.ShopOrderDataRequest;
import com.cap.order.shoporder.request.ShopOrderRequest;

@RestController
@RequestMapping("/data")
@CrossOrigin(origins = "*")
public class KafkaViewController {

    @Autowired
    private KafkaConsumer kafkaConsumer;

    @Autowired
    private KafkaProducer kafkaProducer;

    @GetMapping("/")
    public List<EventDataDto> get() {

        return kafkaConsumer.getData();
    }

    @PutMapping("/{topic}/{team}/{success}")
    public void put(@PathVariable String topic, @PathVariable Integer team, @PathVariable Boolean success) {

        ShopOrderRequest data = new ShopOrderRequest();
        ShopOrderDataRequest orderData = new ShopOrderDataRequest();

        orderData.setAddress("address");
        orderData.setCredit("credit");
        orderData.setCustomer("customer");
        orderData.setEmail("email");
        orderData.setInvoice("invoice");
        orderData.setPaid(2D);
        orderData.setPrice(2D);
        orderData.setProduct("product");
        orderData.setQuantity(1);
        orderData.setShipment("shipment");
        orderData.setUuid("uuid");

        data.setSuccess(success);
        data.setGroupId("team-" + team);
        data.setData(orderData);

        kafkaProducer.sendMessage(topic, data);
    }
}
