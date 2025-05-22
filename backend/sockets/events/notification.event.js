export default function registerNotificationEvents(socket, io) {
  socket.on('send_notification', async (data) => {
    // Use a service or directly emit
    io.emit('receive_notification', {
      from: socket.user,
      message: data.message,
    });
  });
}
