---
title: "Mario: A Launchcode Problem Set"
date: 2019-03-13T20:25:45-05:00
description: "A Series in Java"
tags:
- "Launchcode" 
- "Java"
draft:	false 
---

# The Mario Journey
 Divided into 7 problem sets or *psets* as referenced in the originial [repo](https://github.com/mpmenne/launchcode-java-class), **Mario** is the application that students will code. 
I will publish my walkthrough here, beginning with pset1.

## First Fork
 The first step, as noted by the [README.md](https://github.com/mpmenne/launchcode-java-class) is to fork the original repository. A guide to how to do that can be found [here](https://help.github.com/en/articles/fork-a-repo). 

### ok got [it](https://github.com/dceu/launchcode-java-class).
Check out my fork. Going to add ToDos along with each pset to make it easier to just dig in and code. Maybe these will get pushed to the orignial branch. I'll send that "push" request after I finish this walkthrough.

---

## Pset 1
According to the video, what's required is as follows:
* a prompt for a user to enter a desired height
* a loop that validates the entered height to a set range. [0, 23], in this example.
* a *half-pyramid*, drawn to these specs. 

Sample input:
```
prompt for height: 7
```

Samplue output:
```
      ##
     ###
    ####
   #####
  ######
 #######
########
```
---
### prompt
Ok, so the prompt can be as simple as: 

```java
System.out.println("enter a height: ");

```
Not, necessarily, the most enthusiastic greeting regarding UX, but I'll let your iterations present jubilation. 

### User input
For the user-input, we'll be invoking the Scanner object and looking for an integer. The method will look similar to:

```java
public static int scanHeight() {
	Scanner input = new Scanner(System.in);
	int height = input.nextInt();
	return height;
}

```
*note: don't forget to add the Scanner import at the top of your java file:*

```java
import java.util.Scanner
...
public class Mariopset1{
...
}
```


### loops
The *loop* suggested was a do-while loop, which if coded with the prompt and scanMethodl in the same block, will look something like this:

```java
do {
	prompt();
	getPyramidHeight();
	}
while  (isNotValid(height.pyramid);)
```

The isNotValid() method should return true, while the entered height, is not within [0,23].  Which would look something like this:

```java
isNotValid(int h){
	while (h > 23 || h < 0){
	return true;
	}
```

### Printing the Pyramid
If we are to simply, print the pyramid row by row, we have the following:
* the number of spaces decreases by 1 as we print each new line.
* the number of hashes increases by 1 as we print each new line.
* we print new lines while until the number of lines is equal to the height, and no more.
* the top line (first line printed), contains 2 hashes.

The above  can be coded with nested loops like this:
```java
for (int i = 0; i < height; i++){
	System.out.println();
	for (int s = height - 1; s > 0; s--){
		System.out.print(" ");
	}
	for (int h = 0; h <= i + 1; h++){
		System.out.print("#");
	 }	
}
```
### Putting it all together
So once we have:
+ A prompt
+ A scanner that takes an int input
+ A loop, that prompts and enforces the range on input int
+ A method that prints the desired pyramid

Our main method will look something like this:
```java
public static void main(String[] args) {
	do {
	prompt();
	int height = getPyramidHeight();
	}
	while (isNotValid(height););
	drawPyramid();
}
```
I'll leave it to the readers to code out the methods.

### and that's the gist of pset1...
But wait, it's Java after all, so why not code this pyramid as a seperate object, that the Mario.class can call upon to construct?
I'll explore this version of the solution in [Mario: pset1 extended edition!](/pset1ex.html)
