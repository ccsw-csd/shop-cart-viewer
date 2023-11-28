package com.cap.order.shoporder.consumer;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

import com.cap.order.shoporder.request.EventDataDto;

@Component
public class KafkaConsumer {

    List<ConsumerRecord<String, String>> list = new ArrayList<ConsumerRecord<String, String>>();

    @KafkaListener(topics = { "shop_order", "invoice", "payment", "shipment", "stock", "notification" })
    public void listener(ConsumerRecord<String, String> record) {

        synchronized (list) {
            list.add(record);
        }

    }

    public List<EventDataDto> getData() {

        List<EventDataDto> eventList = new ArrayList<>();

        synchronized (list) {
            list.stream().sorted(new Comparator<ConsumerRecord>() {

                @Override
                public int compare(ConsumerRecord o1, ConsumerRecord o2) {
                    return (int) (o1.timestamp() - o2.timestamp());
                }
            }).forEach(item -> {
                try {
                    eventList.add(new EventDataDto(item));
                } catch (Exception e) {
                    e.printStackTrace();
                }
            });

            //list.clear();
        }

        return eventList;
    }

}