package com.matthlauriou.maPremiereAPI.models.dao;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CarDao {
    private Integer id;
    private String brand;
    private String model;
    private String color;
    private String energy;
    private Integer price;

    public void update(CarDao that) {
        this.setBrand(that.getBrand());
        this.setModel(that.getModel());
        this.setColor(that.getColor());
        this.setEnergy(that.getEnergy());
        this.setPrice(that.getPrice());
    }
}
