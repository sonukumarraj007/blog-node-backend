module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      title: String,
      published: Boolean,
      category: String,
      createdBy: String,
      shortDesc: String,
      description: String,
      blogPicLocation: String,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Post = mongoose.model("post", schema);
  return Post;
};
