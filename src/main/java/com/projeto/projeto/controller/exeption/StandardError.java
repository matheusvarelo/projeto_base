package com.projeto.projeto.controller.exeption;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class StandardError {
    private Long timeStamp;
    private Integer status;
    private String error;
    private String message;
    private String path;
    }
