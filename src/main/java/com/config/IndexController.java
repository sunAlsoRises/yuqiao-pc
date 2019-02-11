package com.config;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class IndexController {
	@RequestMapping({"/","/index"})
	public String index() {
		return "redirect:/index.html";
	}
	@RequestMapping({"/zufang/zufang_address.html"})
	public String redi() {
		return "zufang/zufang_address";
	}
	@RequestMapping({"/wenda/wenda"})
	public String wenda() {
		return "redirect:/wenda.html";
	}
	@RequestMapping({"/wenda/quanzheng"})
	public String quanzheng() {
		return "redirect:/quanzheng.html";
	}
}
