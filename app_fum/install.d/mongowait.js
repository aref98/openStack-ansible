var conn;
try
{
    conn = new Mongo("authentiq-db:27017");
}
catch(Error)
{
    //print(Error);
}
while(conn===undefined)
{
    try
    {
        conn = new Mongo("authentiq-db:27017");
    }
    catch(Error)
    {
        //print(Error);
    }
    sleep(1000);
}
DB = conn.getDB("test");
Result = DB.runCommand('buildInfo');
print(Result.version);
