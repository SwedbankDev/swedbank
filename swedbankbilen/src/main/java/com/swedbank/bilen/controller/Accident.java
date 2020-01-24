package com.swedbank.bilen.controller;

public class Accident {
    String name;
    String category;
    String waitingTime;
    String status;
    String assignedHelper;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getWaitingTime() {
        return waitingTime;
    }

    public void setWaitingTime(String waitingTime) {
        this.waitingTime = waitingTime;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getAssignedHelper() {
        return assignedHelper;
    }

    public void setAssignedHelper(String assignedHelper) {
        this.assignedHelper = assignedHelper;
    }
}
