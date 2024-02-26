const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter name"],
        },
        email: {
            type: String,
            required: [true, "Please enter email"],
        },

    }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;