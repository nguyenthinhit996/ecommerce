const jwt = require("jsonwebtoken");

// Generate Access Token
const generateAccessToken = (user) => {
  const accessToken = jwt.sign(
    {
      id: user.ID,
      username: user.USER_NAME,
      email: user.MAIL,
    },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRES }
  );

  const decoded = jwt.decode(accessToken); // Decode to get the expiration time (optional)
  return {
    accessToken,
    expiresIn: decoded.exp, // Add the expiration timestamp in the response
    username: user.USER_NAME,
    email: user.MAIL,
  };
};

// Generate Refresh Token (if needed)
const generateRefreshToken = (user) => {
  return jwt.sign(
    { id: user.ID, username: user.USER_NAME, email: user.MAIL },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRES,
    }
  );
};

module.exports = {
  generateAccessToken,
  generateRefreshToken,
};
