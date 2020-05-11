/* eslint-disable no-undef */
const {MongoClient} =require ("mongodb");

describe("insert",() =>{
  let connection;
  let db;


  beforeAll(async()=>{
    connection= await MongoClient.connect(process.env.DB_URL,{
      useNewUrlParser: true,
    });
    db= await connection.db(process.env.DB_NAME);
  });
  AfterAll(async ()=>{
    await connection.close();
    await db.close();
  });

  it("should insert doc into collection", async()=>{
    const feeds= db.collection("Feed");

    const mockFedd={_id:"some-id",image:"some-image",user:"some-user",price:"some-price",availability:"true"};
    await feeds.insertOne(mockFedd);

    const insertedFeed= await feeds.findOne({_id:"some-id"});
    expect(insertedFeed).toEqual(mockFedd);
  });
});