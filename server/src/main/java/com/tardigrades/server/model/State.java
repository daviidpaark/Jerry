package com.tardigrades.server.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Data
@Document(collection = "states")
@NoArgsConstructor
@AllArgsConstructor
public class State {

    @Id
    private int id;
    private String name;

}
