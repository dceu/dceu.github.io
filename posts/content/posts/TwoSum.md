---
title: "Two Sum Algorithms"
description: "Outline Two Sum Solutions in Java"
date: "2018-12-18"
draft: "false"
categories:
    - "post"
tags:
    - "test"
    - "java"
    - "Algorithms"



---


# Introduction:
This post begins my series on algorithms. 
We will explore a set of common problem archetypes, outline design elements, and finally analyze these solutions as coded in Java, along with the runtime complexity in Big O time. 

## Problem Archetype:
In the **"Two Sum"** problem, we are looking for two numbers that exist in a given array adding up to a given target number. For this instance, this array is unorderd, and has no dupes. As we progress we will explore solutions for instaances where such variances occur. 

## Solution Design:
We will create a function twoSum that returns the indices of the two numbers that add up to the given target sum, where index 1 < index 2, and the returned answers are not zero-based.
```
Sample Input: numbers = {1, 77, 6, 5 ,8} target: 9;
Expected Output: index1= 0, index2 = 4;
```
## Java Solution
The HashMap implementation of the Java Collection interface will be used to store the target sum value. This implementation interfaces Map, stores data as key-value pairs, is unordered, unsorted, but does not allow for dupes.
```java
public class Solution {
	public int[] twoSum(int[] numbers, int target) {
	HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
	int[] result = new int[2];

for (int i = 0; i < numbers.length; i++) {
	if (map.containsKey(numbers[i])) {
		int index = map.get(numbers[i]);
		result[0] = index;
		result[1] = i;
		break;
		} else {
		map.put(target - numbers[i], i);
		}
	}
	return result;
	}
}
```

Time complexity of this solution is O(n).
