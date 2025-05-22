import { Server } from 'socket.io';
import { verifyToken } from './middlewares/verifyToken.middleware.js';
import { addActiveUser, getActiveUsers, removeActiveUser } from './utils/trackUser.utils.js';
// import registerNotificationEvents from './events/notification';

export const initSocketIO = (server) => {
  const io = new Server(server, {
    cors: {
      //   origin: process.env.CLIENT_URL,
      origin: '*',
      methods: ['GET', 'POST'],
      credentials: true,
    },
  });

  io.use(verifyToken);

  io.on('connection', (socket) => {
    const userId = socket.user?.userId;
    const email = socket.user?.email;
    if (!userId) return socket.disconnect(true);

    addActiveUser(userId, socket.id);
    console.log(`✅ User ${email + ' --- ' + userId} connected with socket ${socket.id}`);

    // Register other events here ::
    // registerNotificationEvents(socket, io);

    console.log('huhwdubf', getActiveUsers());
    socket.on('disconnect', () => {
      removeActiveUser(userId, socket.id);
      socket.disconnect(true);
      console.log(`❌ User ${email + ' --- ' + userId} disconnected socket ${socket.id}`);
    });
  });
};
