package com.cap.order.shoporder.request;

import org.apache.kafka.clients.consumer.ConsumerRecord;

import com.fasterxml.jackson.databind.ObjectMapper;

public class EventDataDto {

    private String topic;
    private Long timestamp;
    private ShopOrderRequest data;

    private static final ObjectMapper mapper = new ObjectMapper();

    public EventDataDto(ConsumerRecord<String, String> event) throws Exception {

        this.topic = event.topic();
        this.timestamp = event.timestamp();

        this.data = mapper.readValue(event.value(), ShopOrderRequest.class);
    }

    /**
     * @return the topic
     */
    public String getTopic() {
        return topic;
    }

    /**
     * @return the timestamp
     */
    public Long getTimestamp() {
        return timestamp;
    }

    /**
     * @return the data
     */
    public ShopOrderRequest getData() {
        return data;
    }

}
