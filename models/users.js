const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type:String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        require: true,
        unique: true
    },
    altPhoneNumber: {
        type: Number,
    },
    street: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zipCode: {
        type: Number,
        requried: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    admim: {
        type: Boolean,
        defaultValue: false,
        allowNull: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});
UserSchema.associate = function(models) {
    // associations defined here
}

// export model user with UserSchema
module.exports = mongoose.model("User", UserSchema);
