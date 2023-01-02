export const postCommentData = async () => {
  return [
    {
      id: 1,
      PostUUID: 5,
      postCommentID: 1,
      userId: 1,
      user: "JungKook",
      comment:
        "Wow that's an interesting idea. What you can do now is do a market research if it solves people's pain point",
      replies: [],
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
    {
      id: 2,
      PostUUID: 5,
      postCommentID: 2,
      userId: 2,
      user: "Justin Trudeau",
      comment:
        "Also check what are the specific features users are looking for in such a platform",
      replies: [],
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
    {
      id: 3,
      PostUUID: 1,
      postCommentID: 1,
      userId: 5,
      user: "Jack Bauer",
      comment:
        "I can connect you with someone who is a collector. Will PM you.",
      replies: [],
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },

    {
      id: 4,
      PostUUID: 3,
      postCommentID: 1,
      userId: 2,
      comment:
        "Sounds exciting! Would love to know how this idea progress. Idea followed!",

      createdAt: "2021-08-16T23:00:33.010+02:00",
    },

    {
      id: 5,
      PostUUID: 3,
      postCommentID: 2,
      userId: 4,
      user: "Beyonce",
      comment:
        "Congraluations! Sounds like a something that could really help aspiring entrepreneur!",
      Replies: [],
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },

    {
      id: 6,
      PostUUID: 5,
      postCommentID: 3,
      userId: 4,
      user: "Beyonce",
      comment:
        "What are the demographics of the target audience you are looking for? Identifying this is necessary to find the right people that will be keen to use this platform and have certain expectations of what they want from it",
      replies: [],
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
  ];
};

export const createComment = async (comment, postCommentID = null) => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    PostUUID: 5,
    userId: "10",
    username: "Jordan",
    comment: comment,
    postCommentID,
    createdAt: new Date().toISOString(),
  };
};
