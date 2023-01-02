const mongoose = require('mongoose');

module.exports = () => {
    try {
        mongoose.connect(process.env.MONGO_URI, {
            dbName: "Unit-test",
            useNewUrlParser: true,
            useUnifiedTopology:true
        },(error)=>{
            if (error) throw error;

            console.log('Database connected!')
        });

    }catch (error) {
        console.log("Database Error: ", error.message);
    }
}
