package com.util;

import java.util.UUID;

public class UuidUtils {
    /**
     * 返回UUID
     *
     * @return
     */
    public static String GetUUID() {
        String uuid = UUID.randomUUID().toString();
        return uuid.replaceAll("-", "").toUpperCase();
    }
}
