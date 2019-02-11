package com.util;

import java.util.Arrays;
import java.util.List;

public class SearchTiaoJian {
    private String[] datashoujia;
    private String[] datamianji;
    private String[] datashi;

    public SearchTiaoJian(String[] datashoujia, String[] datamianji, String[] datashi) {
        this.datashoujia = datashoujia;
        this.datamianji = datamianji;
        this.datashi = datashi;
    }

    public String[] getDatashoujia() {
        return datashoujia;
    }

    public void setDatashoujia(String[] datashoujia) {
        this.datashoujia = datashoujia;
    }

    public String[] getDatamianji() {
        return datamianji;
    }

    public void setDatamianji(String[] datamianji) {
        this.datamianji = datamianji;
    }

    public String[] getDatashi() {
        return datashi;
    }

    public void setDatashi(String[] datashi) {
        this.datashi = datashi;
    }

    @Override
    public String toString() {
        return "SearchTiaoJian{" +
                "datashoujia=" + Arrays.toString(datashoujia) +
                ", datamianji=" + Arrays.toString(datamianji) +
                ", datashi=" + Arrays.toString(datashi) +
                '}';
    }
}
