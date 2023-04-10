import React from "react";

function Data(page: number) {
  let frontend, backend, database;
  switch (page) {
    case 1:
      frontend = "React";
      backend = "FastAPI";
      database = "null";
      return { frontend: frontend, backend: backend, database: database };
    case 2:
      frontend = "React";
      backend = "null";
      database = "Firebase";
      return { frontend: frontend, backend: backend, database: database };
    case 3:
      frontend = "NextJS";
      backend = "null";
      database = "Firebase";
      return { frontend: frontend, backend: backend, database: database };
  }
}

export default Data;
