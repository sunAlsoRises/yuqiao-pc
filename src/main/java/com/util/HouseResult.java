package com.util;

import java.io.Serializable;

public class HouseResult<T> implements Serializable {
	//状态
	private  int status;

	//信息
	private String msg;
	
	//需要传递的数据
	private T data;

	public HouseResult() {
		super();
	}

	public HouseResult(int status, String msg, T data) {
		super();
		this.status = status;
		this.msg = msg;
		this.data = data;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

	public T getData() {
		return data;
	}

	public void setData(T data) {
		this.data = data;
	}

	@Override
	public String toString() {
		return "HouseResult [status=" + status + ", msg=" + msg + ", data=" + data + "]";
	}


	
	
	
	
}
