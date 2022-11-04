package com.tardigrades.server.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "maps")
@AllArgsConstructor
@NoArgsConstructor
public class Geography {
    private String name;
    private Object map;
}
