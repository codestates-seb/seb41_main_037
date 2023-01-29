package com.lifo.CVSreview.exception;

import lombok.Getter;

public enum ExceptionCode {

    REVIEW_NOT_FOUND(404, "Review Not Found"),
    REVIEW_EXISTS(409, "Review Exists"),
    MEMBER_NOT_FOUND(404, "Member Not Found"),

    PRODUCT_NOT_FOUND(404, "Product Not Found"),
    AUTHENTICATION_NOT_FOUND(404, "Authentication not found in SecurityContextHolder"),
    UNAUTHORIZED_Member(404, "Unauthorized Member");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int code, String message) {
        this.status = code;
        this.message = message;
    }
}
