

Assuming the user credentials are correct, which expression will create a Connection?
1)DriverManager.getConnection()
2)DriverManager.getConnection("jdbc:derby:com")
3)DriverManager.getConnection ("jdbc.derby.com")
4)DriverManager.getConnection ("J_SMITH", "dt124213")
5)DriverManager.getConnection("http://database.jdbc.com", "JSMITH", "dt1242f3")



﻿


5. Given these two classes:
public class Resource {
    public Worker owner
}
public class Worker {
private boolean ready = true;
public synchronized boolean isReady() {
    return ready;
}
public synchronized void work (Worker other, Resource resource) {
while (ready) {
while (resource.owner != this) {
try {
    wait (10)
}
    catch (InterruptedException e) { }
    if (other.isReady()) {

resource.owner = other;
    }
    else{
// do work with resource
ready = false;
resource.owner = other
}
}}}}


Worker w1 =  new Worker();
Worker w2 new Worker();
Resource r  = new Resource(); 
resource.owner w1
new Thread(() => {
wl.work(w2, r);
}).start();



﻿

try T
wait (10)
catch (InterruptedException e) ( )
if (other.isReady()) { resource.owner other:
else {
// do work with resource ready- false; resource.owner other:
And given this fragment:
Worker vi new Worker();
Worker v2 new Worker();
Resourcer new Resource ();
resource.owner wi
new Thread(()-> (
vl.work(2, 1);
)).start():
new Thread(()->{
v2.work(wl, 1);
}).start();
Which describes the fragment?
1)It is subject to deadlock.
2)throws an IllegalenitorStateException.
3)its subject to livelock
4)The code does not comple



﻿


12. Given:
public class Foo
public void foo (Collection arg) {
System.out.println("Bonjour le monde!");
}
public class Bar extends Foo {
public void foo (Collection arg) 
{ System.out.println("Hello world!");
public static void main(String... args) 
{ List<String> li= new ArrayList<>();
 Bar b= new Bar();
Foo f = b;
b.foo (li);
f.foo(li);
}}}
What is the output?
1)Bonjour le mondel
   Hello world!
2)Hello world!
 Bonjour le monde!
3)Hello world!
  Hello world!
4)Bonjour le mondl
 Bonjour le mondel


 ﻿

Given:
public class Employee (

private String name:
private localDate birthday;
private int salary:
/*  the constructors, getters, and setters methods go here */
and
List roster new ArrayList<>();
Predicate p= e-> e.getSalary() > 25:
Localbate d IsoChronology.INSTANCE.date (1989, 1, 1);
long youngAndRich roster.stream()


and
f
0
/*getters, and setters methods go here */
T
List roster= new ArrayList();
Predicate pe -> e.getSalary() > 25:
Localtate d IsoChronology. INSTANCE.date (1989, 1, 1);
long youngAndRich roster.stream()
// Line 1
Which code fragment, when inserted on line 1, gives the number of employees who were born after January
1, 1989 and have a salary greater than 25?

1)filter (p se.getBirthday().isAfter(d)).count 0:
2)filter (p)
collect (collectors.partitising@y(ee.getBirthday().After (d)))
get (true)
.count();
.collect (Collectors.partitioningby (p))
.get(true)
.stream()

3)collect (Collectors.partitioningay (ee.getBirthday().isAfter (d)))
.get(true)
.count();
4)filter (p)
filter (e.getBirthday ().isAfter (d))
.count();


﻿


20. Which two can be considered good practices for serializing Java objects?
1)Implement secure serialization by generating secure object hash or using encryption.
2)Always override the readobject/vriteobject methods from the java.io.Serializable
interface.
3)Assign null value by default while serializing and deserializing a transient variable.
4)Ensure that the class definition used is the same as the class definition used by Java runtime at
the time when the object was serialized.
5)Implement serialization for long-term data storage.


package test.t1;
public class A{
public int x =42;
protected A() {}// line 1

package test.t2:
import test.t1.*;
public class B extends A {

    int x 17; // line 2
public B() { super(); } // line 3
package test;
import test.tl.
import test.t2.*;
public class Tester {
public static void main(String[] args) {
A obj = new B();
// line 4
System.out.println(obj.z); // line 5
}}}
What is the result?
1)42
2)The compilation fails due to an error in line 3.
3)The compilation fails due to an error in line 1.
4)The compilation fails due to an error in line 5.
5)The compilation fails due to an error in line 4
6)17
7)The compilation fails due to an error in line 2.



public class DNAsynt{
int aCount
int tCount:
int cCount;
int gCount;
void setACount (int count){
cCount = ccount;
}
void setTCount(){
    this.tCount =tCount;}
int setCount(){
    return count;
}
int setGCount (int g) {
gCount =g;
return gCount;
}
void setAllCounts (int x) {
}
aCount  = tCount =  this.ccount setGCount (x);
}
Which two methods modify field values?
1)setAllCounts
2)setTcount
3)setCcount
4)setGcount
5)setAcount

﻿

Zoom
Test: 1Z0-819-Java SE 11 Developer
Copyright ©2022, Oracle and/or its affiliates. Oracle, Java, and MySQL are registered trademarks of Oracle and/or its affiliates. Other names may be trademarks of their respective owners.
Time Remaining 01:14:15
49. Given:
public class Test {
public static void main(String... args) {
int number= 20;
Predicate<Integer> p = a -> a 12 != 0; // line 1
System.out.println(number + " is odd.");
else |
System.out.println("number + is even.");
}
Which statement on line 1 enables the Test class to compile?
1)if(p.test(number)) !
2)if (p.apply(number){
3)if(p.get(number))
4)if(p.accept(number)) {


    ﻿


33. Given:
ArrayList al sew ArrayList()
a1.add(2)
a1.add(2):
al.add(3)
Iterator itral.iterator();
while (itr.hasBext()) {
    if (tr.next()==2) {
        al.remove (2)
    System.out.print (itr.next());
    }
}

What is the result?
1)A concurentMoficationException  is thrown at runtime.
2)1 2 4 5
3)1 2 3 followed by an exception
4)1 2 followed by an exception


﻿


45. Given:
public class Main |
public static void main(String[] args) |
Thread t1 new Thread(new MyThread());
Thread 12= new Thread (new MyThread());
Thread t3 new Thread(new MyThread());
tl.start();
12.run();
Mark for Review
t3.start();
tl.start();
class ByThread implements Runnable
public void run() 1
System.out.println("Running.");
Which one is correct?
1)Four threads are created.
2)The compilation fails.
3)An IllegalThreadStateException is thrown at runtime.
4)Three threads are created.


﻿


46. Given the code fragment:
8. public class Test {
9. private final int x= 1
10. static final int y;
11. public Test () 
System.out.print(x)
System.out.print(y)
}

public static void main(String args[]) {

    new Test():
}

What is the result?
1
The compilation falls at line 9.
The compilation falls at line 16.
The compilation fails at line 13.
10


47. Given the code fragment:
int i = 0;
for(; i<10; i++){
System.out.print(++i" "); }
What is the result?
Mark for Review
1)2468
2)2 3 5 7 9 11
3)2 4 4 4 10
4)1 3 5 7 9


﻿


50. Given:
List<String> states List.of ("NY", "CA", "WA", "NC", "CO");
states.forEach(s-> System.out.println(s)); // line 1
Which statement is equivalent to line 1?
1)states.forEach((var s) -> System.out.println(s));
2)states.forEach((String s)->(return System.out.println(s);});
3)states.forEach((s)->System.out.println(s));
4)states.forEach(var->s (System.out.println(s)}};

﻿


48. Given:
public class Tester
public static void main(String[] args) {
float r =2, y=4, z =4
float a = y/x, b = y / z
if (a> b) {
System.out.println(a + b);
}}
Mark for Review
What is the result?
1)1.0
2)The program prints nothing.
3)An exception is thrown at runtime.
4)3.0
5)2.0



43. Given the content from the courses.txt file:
123: Java:1
124:MySQL:2
125:Java Server Pages: 3
Given the code fragment:
Path filePath Paths.get("course.txt"); try {
/* line 1 */
} catch (IOException ex) {
    System.out.format("File 10 Exception is thrown.", ex)}

Which code fragment at line 1 prints the lines that contain Java from the course.txt file?
1)system.out.println(Files.readstring(filePath).contains("Java"));
2)List String> lines2 = Files.readAllLines (filePath).filter(s ->
s.contains("Java"));
for (String line: lines2) (
System.out.println(line);
3)Files.lines (filePath).filter(s ->
a.contains("Java").forEach (System.out::println);

4)List<String> lines] =
Files.readAlLines (filePath).contains("Java");
for (string line: lines2) (
System.out.println(line);
5)files.lines(filePath).map(s->s.contains("Java")).forEach(system.out.println)
