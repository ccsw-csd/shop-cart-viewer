package com.cap.order;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.view.RedirectView;

public class RedirectController {

    @GetMapping("/kafka")
    public RedirectView redirectWithUsingRedirectView() {
        return new RedirectView("./kafka/index.html");
    }
}