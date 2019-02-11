package com.util;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class SelfLog4j {
	public static Logger getLog4j(Class cl) {
		return LoggerFactory.getLogger(cl);		
	}
	
}
