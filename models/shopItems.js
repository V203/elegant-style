import mongoose, { Schema } from "mongoose";

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
            required: true
        },

    },
    {
        timestamps: true,
    }
);

const ShopItems =  mongoose.models.ShopItems || mongoose.model("ShopItems", ShopItemsShcema);

export default ShopItems;



