import { db } from "../db-connection.js";

export const getResidents = (_, res) => {
  const query = "SELECT * FROM residents";

  db.query(query, (err, result) => {
    if (err) {
      res.status(500).json({ message: "Something went wrong" });
      return;
    }

    res.status(200).json(result);
  });
};

export const createResident = (req, res) => {
  const query = "INSERT INTO residents(`cpf`, `rg`, `nome`, `email`, phone, `date_birth`, `sex`) VALUES (?)";

  const values = [
    req.body.cpf,
    req.body.rg,
    req.body.nome,
    req.body.email,
    req.body.phone,
    req.body.date_birth,
    req.body.sex,
  ];

  db.query(query, [values], (err, result) => {
    if (err) {
      res.status(500).json({ message: "Something went wrong" });
      return;
    }

    res.status(201).json({ message: "Resident created" });
  });
};