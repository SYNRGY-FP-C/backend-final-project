const express = require("express");

const router = express.Router();

router.post("/v1/auth/register/pencari", (req, res) => {
  res.status(201).json({
    code: 201,
    status: "success",
    data: {
      token:
        "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjEiLCJmdWxsbmFtZSI6Iktob2lyb25pIiwiYmlydGhkYXRlIjoiMjEtMDctMjAwMCIsImdlbmRlciI6Ik1hbGUiLCJvY2N1cGF0aW9uIjoiU29mdHdhcmUgRGV2ZWxvcGVyIiwiZW1haWwiOiJ6ZWtob2kuYXBwQGdtYWlsLmNvbSIsInBob25lX251bWJlciI6IjA4OTg2MzkzMDMxIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjcyMjI0MTcxfQ.6oEf82JlYDnNcQ5QL5w1u6CSwPDZIzNEdw1MC6O4oTw",
    },
  });
});

router.post("/v1/auth/register/penyedia", (req, res) => {
  res.status(201).json({
    code: 201,
    status: "success",
    data: {
      token:
        "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjEiLCJmdWxsbmFtZSI6Iktob2lyb25pIiwiYmlydGhkYXRlIjoiMjEtMDctMjAwMCIsImdlbmRlciI6Ik1hbGUiLCJvY2N1cGF0aW9uIjoiU29mdHdhcmUgRGV2ZWxvcGVyIiwiZW1haWwiOiJ6ZWtob2kuYXBwQGdtYWlsLmNvbSIsInBob25lX251bWJlciI6IjA4OTg2MzkzMDMxIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjcyMjI0MTcxfQ.6oEf82JlYDnNcQ5QL5w1u6CSwPDZIzNEdw1MC6O4oTw",
    },
  });
});

router.post("/v1/auth/login/pencari", (req, res) => {
  res.status(200).json({
    code: 200,
    status: "success",
    data: {
      token:
        "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjEiLCJmdWxsbmFtZSI6Iktob2lyb25pIiwiYmlydGhkYXRlIjoiMjEtMDctMjAwMCIsImdlbmRlciI6Ik1hbGUiLCJvY2N1cGF0aW9uIjoiU29mdHdhcmUgRGV2ZWxvcGVyIiwiZW1haWwiOiJ6ZWtob2kuYXBwQGdtYWlsLmNvbSIsInBob25lX251bWJlciI6IjA4OTg2MzkzMDMxIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjcyMjI0MTcxfQ.6oEf82JlYDnNcQ5QL5w1u6CSwPDZIzNEdw1MC6O4oTw",
    },
  });
});

router.post("/v1/auth/login/penyedia", (req, res) => {
  res.status(200).json({
    code: 200,
    status: "success",
    data: {
      token:
        "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjEiLCJmdWxsbmFtZSI6Iktob2lyb25pIiwiYmlydGhkYXRlIjoiMjEtMDctMjAwMCIsImdlbmRlciI6Ik1hbGUiLCJvY2N1cGF0aW9uIjoiU29mdHdhcmUgRGV2ZWxvcGVyIiwiZW1haWwiOiJ6ZWtob2kuYXBwQGdtYWlsLmNvbSIsInBob25lX251bWJlciI6IjA4OTg2MzkzMDMxIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjcyMjI0MTcxfQ.6oEf82JlYDnNcQ5QL5w1u6CSwPDZIzNEdw1MC6O4oTw",
    },
  });
});

router.get("/v1/auth/currentuser", (req, res) => {
  res.json({
    code: 200,
    status: "success",
    data: {
      id: "1",
      fullname: "Khoironi",
      birthdate: "21-07-2000",
      gender: "Male",
      occupation: "Software Developer",
      email: "zekhoi.app@gmail.com",
      phone_number: "08986393031",
      role: "customer",
      iat: 1672224171,
    },
  });
});

module.exports = router;
