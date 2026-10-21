// src/PaymentService.java — fixture for dsh-stackdecoder (Java trace)
package com.example;
public class PaymentService {
    public void charge(String cardNumber) {
        if (cardNumber == null) {
            throw new IllegalArgumentException("cardNumber is null");
        }
    }
}
