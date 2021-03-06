import Joi from 'joi';

export default {
  // POST /api/users
  createUser: {
    body: {
      name: Joi.string().required(),
      mobile: Joi.number().integer().positive().required(),
      email : Joi.string().email(),
      pin :  Joi.number().integer().positive().min(6).max(6),
      type : Joi.string()
    }
  },
  // POST /api/posts
  createPost: {
    body: {
      title: Joi.string().required(),
    }
  },

    // POST /api/userType
    createUserType: {
      body: {
        name: Joi.string().required()
      }
    },

   // POST /api/feature
    createFeature: {
      body: {
        name: Joi.string().required()
      }
    },

    // POST /api/feature
    createRole: {
      body: {
        name: Joi.string().required()
      }
    },

    // POST /api/feature
    createState: {
      body: {
        name: Joi.string().required()
      }
    },


  // UPDATE /api/users/:userId
  updateUser: {
    // body: {
    //   name: Joi.string().required(),
    //   mobile: Joi.number().integer().positive().required(),
    //   email : Joi.string().email(),
    //   pin :  Joi.number().integer().positive().min(6).max(6),
    //   type : Joi.string()
    // },
    params: {
      userId: Joi.string().hex().required()
    }
  },

  updateUserType :{
    params: {
      userTypeId: Joi.string().hex().required()
    }
  },

  updateState :{
    params: {
      stateId: Joi.string().hex().required()
    }
  },

  // UPDATE /api/posts/:postId
  updatePost: {
    body: {
      title: Joi.string().required(),
    },
    params: {
      postId: Joi.string().hex().required()
    }
  },

  // POST /api/auth/login
  login: {
    body: {
      username: Joi.string().required(),
      password: Joi.string().required()
    }
  }
};
