import java.util.ArrayList;

public class Library {
    static ArrayList<String> books = new ArrayList<>();

    public static void main(String[] args) {
        books.add("Java Basics");
        books.add("Web Development");
        books.add("Database Fundamentals");

        System.out.println("=== LIBRARY BOOKS ===");

        for (String book : books) {
            System.out.println("- " + book);
        }

        books.remove("Java Basics");

        System.out.println("\nAfter borrowing Java Basics:");
        for (String book : books) {
            System.out.println("- " + book);
        }
    }
}