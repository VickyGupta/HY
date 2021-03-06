import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';

/**
 * User Schema
 */
const UserTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */


/**
 * Methods
 */
UserTypeSchema.method({
});

/**
 * Statics
 */
UserTypeSchema.statics = {
  get(id) {
    return this.findById(id)
      .exec()
      .then((userType) => {
        if (userType) {
          return userType;
        }
        const err = new APIError('No such userType exists!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
  },


  list({ skip = 0, limit = 50 } = {}) {
    return this.find()
      //.sort({ createdAt: -1 })
      .skip(+skip)
      .limit(+limit)
      .exec();
  }
};

/**
 * @typedef UserType
 */
export default mongoose.model('UserType', UserTypeSchema);
