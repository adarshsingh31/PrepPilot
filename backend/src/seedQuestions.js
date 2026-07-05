require("dotenv").config();

const connectDB = require("./config/db");
const Question = require("./models/question");

const arrays = require("./data/arrays");
const strings = require("./data/strings");
const linkedList = require("./data/linkedList");
const stackQueue = require("./data/stackQueue");
const binarySearch = require("./data/binarySearch");
const trees = require("./data/trees");
const graph = require("./data/graph");
const dp = require("./data/dp");
const greedy = require("./data/greedy");
const backtracking = require("./data/backtracking");

const questions = [
  ...arrays,
  ...strings,
  ...linkedList,
  ...stackQueue,
  ...binarySearch,
  ...trees,
  ...graph,
  ...dp,
  ...greedy,
  ...backtracking,
];

const seedQuestions = async () => {
  try {
    await connectDB();

    await Question.deleteMany();

    await Question.insertMany(questions);

    console.log("Questions Seeded Successfully!");

    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

seedQuestions();
