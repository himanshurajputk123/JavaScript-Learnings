import mongoose, {Schema} from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            minLength: 1,
            maxLength: 30
        },
        password:{
            type: String,
            required: true,
            minLength: 8,
            maxLength: 20
        },
        email:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        }
    },
    {
        timestamps: true
    }
)

// bcrypt => for hashing the password
// before saving password we need to hash it
UserSchema.pre("save", async function() {
    // we don't have to hash the password everytime
    if(!this.isModified("password")) return;

    this.password = await bcrypt.hash(this.password, 16);
});

// compare passwords
UserSchema.methods.comparePassword = async (password) =>{
    return await bcrypt.compare(password, this.password);
}

export const User = mongoose.model('User', UserSchema);
