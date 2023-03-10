package com.lifo.CVSreview.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@AllArgsConstructor
@Getter
@Builder
public class PageInfo {
    private int page;
    private int size;
    private long totalElements;
    private int totalPages;
}
