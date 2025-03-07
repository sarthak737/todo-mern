import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  const { token } = req.cookies;
  const isLoggedIn = jwt.verify(token, process.env.TOKEN_SECRET);
  if (!isLoggedIn) {
    return res.status(401).send("Session Expired");
  }
  next();
};
