import jwt from 'jsonwebtoken';

export const verifyToken = (socket, next) => {
  try {
    const authHeader = socket.handshake.auth.token;
    console.log(authHeader);
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return next(new Error('Missing or invalid Authorization token'));
    }
    const token = authHeader.split(' ')[1]; // Bearer <token>
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    socket.user = decoded;

    return next();
  } catch (err) {
    return next(new Error('Invalid or expired token'));
  }
};
