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

export const createResident = (req, res) => {
  const sql = "INSERT INTO `crud-residents`.`residents` (`cpf`, `rg`, `name`, `email`, `phone`, `date_birth`, `sex`) VALUES (?);";

  const values = [
    req.body.cpf,
    req.body.rg,
    req.body.name,
    req.body.email,
    req.body.phone,
    req.body.date_birth,
    req.body.sex,
  ];

  db.query(sql, [values], (err) => {
    if (err) {
      res.status(500).json({ message: "Something went wrong" });
      return;
    }

    res.status(201).json({ message: "Resident created" });
  });
};

export const updateResident = (req, res) => {
  const sql = "UPDATE `crud-residents`.`residents` SET `rg` = ?, `name` = ?, `email` = ?, `phone` = ?, `date_birth` = ?, `sex` = ? WHERE `cpf` = ?;";

  const values = [
    req.body.rg,
    req.body.name,
    req.body.email,
    req.body.phone,
    req.body.date_birth,
    req.body.sex,
  ];

  db.query(sql, [...values, req.params.cpf], (err) => {
    if (err) {
      res.status(500).json({ message: "Something went wrong" });
      return;
    }

    res.status(200).json({ message: "Resident updated" });
  });
};

export const deleteResident = (req, res) => {
  const sql = "DELETE FROM residents WHERE cpf = ?";

  db.query(sql, [req.params.cpf], (err) => {
    if (err) {
      res.status(500).json({ message: "Something went wrong" });
      return;
    }

    res.status(200).json({ message: "Resident deleted" });
  });
};