
// 1. Find all books in the genre "Fiction"
db.books.find({ genre: "Fiction" });

// 2. Find books published after the year 1950
db.books.find({ published_year: { $gt: 1950 } });

// 3. Find all books by "George Orwell"
db.books.find({ author: "George Orwell" });

// 4. Update the price of a specific book (e.g., "The Alchemist")
db.books.updateOne(
  { title: "The Alchemist" },
  { $set: { price: 11.99 } }
);

// 5. Delete a book by its title (e.g., "Moby Dick")
db.books.deleteOne({ title: "Moby Dick" });

// 6. Find books that are both in stock and published after 2010
db.books.find({ in_stock: true, published_year: { $gt: 2010 } });

// 7. Projection: return only title, author, and price
db.books.find({}, { _id: 0, title: 1, author: 1, price: 1 });

// 8. Sort books by price ascending
db.books.find().sort({ price: 1 });

// 9. Sort books by price descending
db.books.find().sort({ price: -1 });

// 10. Pagination - page 1 (5 books per page)
db.books.find().skip(0).limit(5);

// 11. Pagination - page 2 (next 5 books)
db.books.find().skip(5).limit(5);


// ✅ Aggregation Pipelines

// 12. Average price of books by genre
db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      averagePrice: { $avg: "$price" }
    }
  }
]);

// 13. Find the author with the most books in the collection
db.books.aggregate([
  {
    $group: {
      _id: "$author",
      totalBooks: { $sum: 1 }
    }
  },
  { $sort: { totalBooks: -1 } },
  { $limit: 1 }
]);

// 14. Group books by publication decade and count them
db.books.aggregate([
  {
    $project: {
      decade: {
        $concat: [
          { $substr: [{ $subtract: ["$published_year", { $mod: ["$published_year", 10] }] }, 0, 4] },
          "s"
        ]
      }
    }
  },
  {
    $group: {
      _id: "$decade",
      count: { $sum: 1 }
    }
  },
  { $sort: { _id: 1 } }
]);


// ✅ Indexing

// 15. Create index on title
db.books.createIndex({ title: 1 });

// 16. Create compound index on author and published_year
db.books.createIndex({ author: 1, published_year: 1 });

// 17. Use explain to show query performance for title
db.books.find({ title: "1984" }).explain("executionStats");
