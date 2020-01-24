package com.swedbank.bilen.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@RestController
@CrossOrigin
public class RestServiceController {
    @GetMapping("/status")
    public String hello() {
        return "OK_____";
    }

    @GetMapping(value = "/getCaseList",produces = "application/json")
    public List<Accident> getCaseList() {
        List<Accident> accidents=new ArrayList<>();
        accidents.add(getAccident());
        accidents.add(getAccident());
        accidents.add(getAccident());
        accidents.add(getAccident());
        accidents.add(getAccident());
        accidents.add(getAccident());
        accidents.add(getAccident());
        accidents.add(getAccident());
        accidents.add(getAccident());
        accidents.add(getAccident());
        accidents.add(getAccident());
        accidents.add(getAccident());
        accidents.add(getAccident());
        accidents.add(getAccident());
        return accidents;
    }

    private Accident getAccident() {
        Accident accident = new Accident();
        accident.setAssignedHelper("helper "+ new Random().nextInt()*10);
        accident.setCategory("category "+ new Random().nextInt()*10);
        accident.setName("name "+ new Random().nextInt()*10);
        accident.setStatus("Waiting");
        accident.setWaitingTime(String.valueOf(new Random().nextInt()*10));
        return accident;
    }

}
