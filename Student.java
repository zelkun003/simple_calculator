public class Student {
    String name;
    String course;
    int age;

    Student(String name, String course, int age) {
        this.name = name;
        this.course = course;
        this.age = age;
    }

    void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Course: " + course);
        System.out.println("Age: " + age);
    }

    public static void main(String[] args) {
        Student student = new Student("Irvy", "BS Computer Science", 23);
        student.displayInfo();
    }
}