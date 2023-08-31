import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// Method that accepts some content and PUTs it to the database
export const putDb = async (content) => {
  console.error("putDb not implemented");
  // Open a connection to the 'jate' database with value 1
  const jateDb = await openDB("jate", 1);

  // Start a read-write transaction on the 'jate' object store
  const tx = jateDb.transaction("jate", "readwrite");

  // Get the object store
  const store = tx.objectStore("jate");

  // Use the .put() method to add content to the object store
  const request = store.put({ id: 1, content: content });

  // Wait for the request to complete and get the result
  const result = await request;
  console.log("successfully saved data to database", result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => console.error("getDb not implemented");

initdb();
