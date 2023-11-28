package com.cap.order.shoporder.request;

public class ShopOrderRequest {

    private Boolean success;
    private String groupId;

    private ShopOrderDataRequest data;

    public Boolean getSuccess() {
        return success;
    }

    public void setSuccess(Boolean success) {
        this.success = success;
    }

    public ShopOrderDataRequest getData() {
        return data;
    }

    public void setData(ShopOrderDataRequest data) {
        this.data = data;
    }

    public Integer getTeam() {
        if ("team-1".equals(groupId))
            return 1;
        if ("team-2".equals(groupId))
            return 2;
        if ("team-3".equals(groupId))
            return 3;
        if ("team-4".equals(groupId))
            return 4;

        return 0;
    }

    public String getGroupId() {
        return groupId;
    }

    public void setGroupId(String groupId) {
        this.groupId = groupId;
    }
}
