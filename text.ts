const _ = require("underscore");
let knex = require("knex")({
  client: "pg",
  version: "7.2",
  connection: {
    user: "db-user-name",
    host: "db-host-name",
    database: "database-name",
    password: "database-password",
    port: 5432,
    ssl: {
      rejectUnauthorized: false,
      ca: "",
    },
  },
});

async function getAllFields() {
  try {
    const data = await knex.raw(
      `
      SELECT DISTINCT "contractId", "JSONOutput", "data_of_insertion"
      FROM "Contracs_Review",
      jsonb_array_elements("JSONOutput"::jsonb) AS json_elements
      WHERE json_elements->>'start' LIKE '%.%' 
      AND "data_of_insertion" = current_date
      `
    );

    console.log("Total distinct documents: ", data.rows);

    const updatedData = data.rows.map(row => {
      return {
        ...row,
        JSONOutput: removeFloatStartObjects(JSON.parse(row.JSONOutput))
      };
    });

    console.log("Updated Data: ", updatedData);
  } catch (err) {
    console.log("An error occurred while fetching fields: ", err);
  }
}

function removeFloatStartObjects(jsonArray) {
  return jsonArray.filter(obj => !isFloat(obj.start));
}

function isFloat(value) {
  return Number(value) === value && value % 1 !== 0;
}

getAllFields().catch((err) => console.log("Error processing documents: ", err));
