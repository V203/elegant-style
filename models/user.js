import mongoose from 'mongoose';

const { Schema } = mongoose;

const ShopItemsSchema = new Schema(
    {
        itemName: {
            type: String,
            unique: true,
            required: true
        },
        price: {
            type: Number,
            required: true,
        },
        category: {
            type: String,
            required: false
        },

    },
    {
        timestamps: true,
    }
);

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    products: [{ type: Schema.Types.ObjectId, ref: 'ShopItems' }],
});

export let ShopItems = mongoose.models.ShopItems  || mongoose.model('ShopItems', ShopItemsSchema);
export let User =   mongoose.models.User || mongoose.model('User', UserSchema);
