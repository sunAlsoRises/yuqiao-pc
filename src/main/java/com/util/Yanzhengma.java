package com.util;

import org.slf4j.LoggerFactory;

import java.security.SecureRandom;
import java.util.Random;

public class Yanzhengma {
    private static final String SYMBOLS = "0123456789"; // 数字
    private static final Random RANDOM = new SecureRandom();
    public  static String getYanzhengma(){
//        String num = String.valueOf((new Random().nextInt(89999) + 1000));
//        System.out.println(num);

        // 如果需要4位，那 new char[4] 即可，其他位数同理可得
        char[] nonceChars = new char[4];

        for (int index = 0; index < nonceChars.length; ++index) {
            nonceChars[index] = SYMBOLS.charAt(RANDOM.nextInt(SYMBOLS.length()));
        }
        return new String(nonceChars);
    }
}
