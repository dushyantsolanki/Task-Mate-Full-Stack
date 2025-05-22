const activeUsers = new Map(); // userId -> Set of socketIds

const addActiveUser = (userId, socketId) => {
  if (!activeUsers.has(userId)) {
    activeUsers.set(userId, new Set());
  }
  activeUsers.get(userId).add(socketId);
};

const removeActiveUser = (userId, socketId) => {
  const sockets = activeUsers.get(userId);
  if (!sockets) return;

  sockets.delete(socketId);
  if (sockets.size === 0) {
    activeUsers.delete(userId);
  }
};

const getActiveUsers = () => {
  return activeUsers;
};

const isUserActive = (userId) => {
  return activeUsers.has(userId);
};

export { addActiveUser, removeActiveUser, getActiveUsers, isUserActive };
