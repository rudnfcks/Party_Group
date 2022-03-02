package com.rudnfcks.partyGroup.config;

import java.util.Base64;

public class GlobalMathod {
    public static String encodeBase64(String useTxt)  {
        return Base64.getEncoder().encodeToString(useTxt.getBytes());
    }

    public static String decodeBase64(String encodedString)  {
        byte[] decodedBytes = Base64.getDecoder().decode(encodedString);
        String decodedString = new String(decodedBytes);
        return decodedString;
    }
}
