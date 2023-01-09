package com.lifo.CVSreview.exception;

import lombok.Getter;

public enum ExceptionCode {

    REVIEW_NOT_FOUND(401, "Review Not Found"),
    REVIEW_EXISTS(402, "Review Exists");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int code, String message) {
        this.status = code;
        this.message = message;
    }
}
