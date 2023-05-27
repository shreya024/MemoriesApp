const messageSchema = new mongoose.Schema(
  {
    messageContent: {
      type: string,
      required: true
    }
  },
  { timestamps: true }
);

export default messageSchema;
