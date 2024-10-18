import mongoose from 'mongoose';

export default async function connectToDataBase() {
    try {
        await mongoose.connect(process.env.MONGO_URI!);
        console.log('connected to mongodb.');
    } catch (error: any) {
        console.log(error.message);
        process.exit(1);
    }
}