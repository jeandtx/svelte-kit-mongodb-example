import { MongoClient } from 'mongodb';

/**
 * @type {{ id: any; url: any; }[]}
 */
export const images = [];

const client = new MongoClient(
    `mongodb+srv://svelte:svelte@cluster0.q5mus.mongodb.net/matchikal?retryWrites=true&w=majority`);
client.connect(err => {
    if (err) {
        console.log(err);
        return;
    }
    //access the desired collection
    const db = client.db('matchikal').collection('images');
    //fetch data from MongoDB
    db.find({}).toArray((err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        for (let i = 0; i < result.length; i++) {
            images.push({ id: result[i].id, url: result[i].url });
        }
    });
});