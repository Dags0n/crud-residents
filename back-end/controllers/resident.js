import { db } from "../db-connection.js";

export const getResidents = (_, res) => {
  const sql = "SELECT * FROM residents";

  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).json({ message: "Something went wrong" });
      return;
    }

    res.status(200).json(result);
  });
};