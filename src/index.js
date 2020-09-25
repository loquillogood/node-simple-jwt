const app= require('./app');


//Starting the server
async function init () {
    await app.listen(app.get('port'));
    console.log(`server on port ${app.get('port')}`);
}

init();
