import mongoose from 'mongoose';

const { Schema } = mongoose;

const ShopItemsShcema = new Schema(
    {
        itemName: {
            type: String,
            unique: true,
            required: true
        },
        price: {
            type: Number,
            required:true,
        },
        category: {
            type:String,
            required: false
        },

    },
    {
        timestamps: true,
    }
);

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    products: [{ type: Schema.Types.ObjectId, ref: 'ShopItems' }],
});

const ShopItems =  mongoose.models.ShopItems || mongoose.model("ShopItems", ShopItemsShcema);
const User =  mongoose.models.User || mongoose.model('User', userSchema);

export {  User ,ShopItems};
