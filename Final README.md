# 📚 MongoDB Fundamentals – PLP Bookstore Assignment

### Author: Javan Solomon Otieno (Jayvee-art)

Course: PLP MERN Stack Development – Week 1
Repository: [week-1-mongodb-fundamentals-assignment-Jayvee-art](https://github.com/PLP-MERN-Stack-Development/week-1-mongodb-fundamentals-assignment-Jayvee-art)

![MongoDB](https://img.shields.io/badge/Database-MongoDB-green)
![Status](https://img.shields.io/badge/Status-Complete-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)

---

## 📌 Objective

This assignment demonstrates core MongoDB skills by building a mini bookstore database. It includes data insertion, CRUD operations, advanced querying, aggregation pipelines, and performance indexing.

---

## 🗂️ Files Included

| File Name                      | Description                                                                             |
| ------------------------------ | --------------------------------------------------------------------------------------- |
| `insert_books.js`              | Script to populate `plp_bookstore.books` with book data using MongoDB Node.js driver    |
| `queries.js`                   | Contains all required MongoDB queries: CRUD, filters, projection, aggregation, indexing |
| `screenshots/compass_view.png` | Visual screenshot showing successful collection population in MongoDB Compass           |
| `README.md`                    | Documentation on how to set up, run, and test the project                               |

---

## 🧰 Setup Instructions

### Option 1: Local MongoDB

1. Install [MongoDB Community Server](https://www.mongodb.com/try/download/community) and [Node.js](https://nodejs.org)
2. Run:

   ```bash
   node insert_books.js
   ```
3. Launch MongoDB shell:

   ```bash
   mongosh
   ```
4. Run:

   ```bash
   load("queries.js")
   ```

### Option 2: MongoDB Atlas

1. Create a free cluster at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Replace the `uri` in `insert_books.js` with your Atlas connection string
3. Run the same steps as above

---

## 🔍 Example Queries Covered

* ✅ Find by author, genre, year
* ✅ Update price
* ✅ Delete by title
* ✅ In-stock filter
* ✅ Pagination & Sorting
* ✅ Aggregation: avg price, top author, decade grouping
* ✅ Indexing and performance analysis with `explain()`

---

## 🧪 Expected Outcome

* Fully populated `books` collection with 10+ entries
* Queries return expected results in MongoDB Compass or Shell
* Screenshot captured as proof of data

---

## 📸 Screenshot

📂 `screenshots/compass_view.png`
(Displays collection `books` in `plp_bookstore` with sample entries)

---

## ✅ Submission Complete

All changes have been pushed and committed:

```bash
git add .
git commit -m "Completed MongoDB assignment - CRUD, Aggregation, Indexing"
git push origin main
```

---

## 🙌 Acknowledgments

Thanks to the PLP team for the opportunity to practice with real-world backend tools. This was a great introduction to data layer engineering using MongoDB.

---

## 🧠 Tech Used

* MongoDB
* Node.js
* MongoDB Compass
* GitHub Classroom
