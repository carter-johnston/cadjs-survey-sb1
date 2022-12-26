import { start_mongodb } from "$lib/mongodb_client";

start_mongodb()
  .then(() => {
    console.log("Connection to MongoDb started.");
  })
  .catch((error) => {
    error.log();
    console.error("Not able to establish a connection to MongoDb");
  });
