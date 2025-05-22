import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, select: false, trim: true },
    avatar: { type: String },
    authProvider: {
      type: String,
      enum: ['local', 'google', 'github'],
      default: 'local',
    },
    oauthId: {
      type: String,
      default: null,
    },
    role: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Role',
      //   required: true,
    },
    projects: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
      },
    ],

    refreshToken: {
      type: String,
      default: null,
    },
    fcmToken: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true },
);

const User = mongoose.model('User', userSchema);

export default User;
