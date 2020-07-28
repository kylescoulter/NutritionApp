package com.nutrinav.controllers

import com.nutrinav.models.SampleResponse
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@CrossOrigin
@RestController
class SampleController {

    @GetMapping("/sample")
    SampleResponse sample() {
        return new SampleResponse()
    }
}