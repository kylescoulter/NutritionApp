package com.nutrinav.models

class SampleResponse {
    private final long id
    private final String content

    SampleResponse() {
        this.id = 1
        this.content = "This response is pulled from the Java backend dynamically!"
    }

    long getId() {
        return id
    }

    String getContent() {
        return content
    }
}