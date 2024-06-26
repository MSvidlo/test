import { Schema } from 'mongoose';

import mongoose from 'mongoose';

const contactSchema = new Schema(
  {  name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      validate: {
        validator: function (v) {

          return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
        },
        message: props => `${props.value} is not a valid email address!`,
      },
      required: [false, 'User email required'],
    },
    isFavourite: {
      type: Boolean,
      default: false,
    },
    contactType: {
      type: String,
      enum: ['work', 'home', 'personal'],
      required: true,
      default: 'personal',
    },
  },
  {
    timestamps: true, 
  }
);

const contactsCollection  = mongoose.model('contacts', contactSchema);

export default contactsCollection

