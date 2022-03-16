export default {
  state: {
    description: [
      `We've built an Xbox community for people like you - gamers from all walks of life and from every corner of the world who want the same thing: a place to play and play. With your help, the Xbox community will always be a fun and safe place for everyone.`,
      `While the Code of Conduct section of the Microsoft Services Agreement applies to all Microsoft products, there are so many ways to interact with other users in the Xbox community that some additional clarification should be provided.`,
      `To that end, we've formulated the following Xbox Community Standards. These standards should be seen as a roadmap through which you can make your own contributions to this incredible community that spans the world. Remember: Xbox is your community. We all bring something unique to it, and that uniqueness is worth protecting.`,
      `Whether you are a beginner or have been playing for decades, we want you to be the guardians of this place, so that you protect each other, even when you compete. After all, when everyone can play, we all benefit from it.`,
    ],
  },
  getters: {
    description(state) {
      return state.description;
    },
  },
};
