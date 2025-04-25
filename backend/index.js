import express from 'express'
import sqlite3 from 'sqlite3'
import cors from 'cors'

const app = express();
const PORT = 3000;
app.use(express.json());
app.use(cors({
    origin: "https://data-vinci-assissment.vercel.app",
    credentials:true,
}))

const sql = sqlite3.verbose();
const db = new sql.Database('./campaign.db');

db.serialize(()=>{
    db.run('CREATE TABLE IF NOT EXISTS campaign( id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, status TEXT, clicks INTEGER, cost REAL , impressions INTEGER)');

    db.all('SELECT COUNT(*) as count FROM campaign', (err, rows)=>{
        if(rows[0].count === 0){
            const insert = db.prepare('INSERT INTO campaign (name, status, clicks, cost, impressions) VALUES (?,?,?,?,?)')
            insert.run("Summer Sale", "Active", 150, 45.99, 1000);
            insert.run("Black Friday", "Paused", 320, 89.50, 2500);
            insert.run("Sunday Sale", "Active", 450, 29.99, 3000);
            insert.run("Monday Sale", "Paused", 100, 50.99, 2000);
            insert.run("Diwali Dhamaka", "Active", 450, 101.99, 6000);
            insert.run("Holi Sale", "Active", 385, 50.99, 1500);
            insert.run("Eid Sale", "Paused", 430, 90.99, 1800);
            insert.run("Chrismas Sale", "Active", 850, 442.99, 3400);
            insert.run("Winter Sale", "Paused", 150, 45.99, 1000);
            insert.run("Monday Sale", "Active", 250, 20.99, 1100);
            insert.finalize();
        }
    });
});

app.get('/campaign',(req, res)=>{
    db.all('SELECT * FROM campaign', (err, rows)=>{
        if(err){
            res.status(500).json({error:"Faild to fetch data"});
        }else{
            res.json(rows);
        }
    })
})


app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
})