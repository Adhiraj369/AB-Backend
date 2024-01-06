const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  shippingInfo: {
    email: {
      type: String,
      required: true,
    },

    collegeName: {
      type: String,
      required: true,
    },

    teamName: {
      type: String,
      required: true,
    },

    leaderName: {
      type: String,
      required: true,
    },

    contactNo: {
      type: Number,
      required: true,
    },

    instrument: {
      type: String,
      required: true,
    },

    extraRequirments: {
      type: String,
      required: true,
    },

    committeeOne: {
      type: String,
      required: true,
    },

    committeeTwo: {
      type: String,
      required: true,
    },

    committeeThree: {
      type: String,
      required: true,
    },

    accomodation: {
      type: String,
      required: true,
    },
  },
  orderItems: [
    {
      name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      pack: {
        type: Number,
        default: 0
      },
      variant: {
        type: Number,
        default: 0
      },
      image: {
        type: String,
        required: true,
      },
      product: {
        type: mongoose.Schema.ObjectId,
        ref: "Product",
        required: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  paymentInfo: {
    id: {
      type: String,
      // required: true,
    },
    status: {
      type: String,
      // required: true,
    },
  },
  paidAt: {
    type: Date,
    required: true,
  },

  itemsPrice: {
    type: Number,
    required: true,
    default: 0,
  },

  taxPrice: {
    type: Number,
    required: true,
    default: 0,
  },

  shippingPrice: {
    type: Number,
    required: true,
    default: 0,
  },

  totalPrice: {
    type: Number,
    required: true,
    default: 0,
  },

  orderStatus: {
    type: String,
    required: true,
    default: "Processing",
  },

  deliveredAt: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", orderSchema);
