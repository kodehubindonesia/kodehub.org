'use strict';

import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    minlength: 6,
    maxlength: 20,
    required: [true, 'Username is required']
  },
  email: {
    type: String,
    unique: true,
    maxlength: 50,
    required: [true, 'Email is required']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: 8,
    maxlength: 40
  },
  fullName: {
    type: String,
    required: true,
    maxlength: 100
  },
  role: {
    type: String,
    required: true,
    default: 'USER'
  },
  bio: {
    type: String,
    maxlength: 100
  },
  profileImageUrl: {
    type: String,
    maxlength: 100
  },
  links: {
    github: {
      type: String,
      maxlength: 100
    },
    twitter: {
      type: String,
      maxlength: 100
    },
    website: {
      type: String,
      maxlength: 100
    },
    blog: {
      type: String,
      maxlength: 100
    }
  },
  address: {
    provinsi: {
      type: String,
      maxlength: 50
    },
    kotaKabupaten: {
      type: String,
      maxlength: 50
    }
  },
  skills: {
    language: {
      type: String,
      maxlength: 100
    },
    tools: {
      type: String,
      maxlength: 100
    }
  },
  userProvider: {
    type: String,
    maxlength: 100
  },
  userGithubId: {
    type: String,
    maxlength: 100
  },
  userProviderToken: {
    type: String,
    maxlength: 255
  },
  status: {
    type: String,
    default: 'PENDING',
    enum: ['PENDING', 'SUSPENSE', 'VERIFIED']
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

userSchema.statics.findByLogin = async function(login) {
  let user = await this.findOne({
    username: login
  });
  if (!user) {
    user = await this.findOne({ email: login });
  }
  return user;
};

/* Authenticate method to compare the passed password
 *
 * @param password
 */
userSchema.methods.validatePassword = async function validatePassword(
  password
) {
  const isValidated = await bcrypt.compare(password, this.password);
  return isValidated;
};

userSchema.pre('save', async function saveUser(next) {
  if (!this.fullName) {
    this.fullName = this.username;
  }
  // set hash for password
  if (this.isModified('password')) {
    this.password = await generateUserPasswordHash(this.password);
  }

  next();
});

userSchema.pre('findById', async function saveUser(next) {
  // set hash for password
  console.log('post find by id');

  next();
});

const User = mongoose.model('User', userSchema);
export default User;

// some helper
export async function generateUserPasswordHash(password) {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
}
