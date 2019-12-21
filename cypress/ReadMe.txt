API module:

1. Favourite fruit is missed when called app.put(...) as there is no value earlier. So added a line in code.js to validate the test case
2. Created a separate file for http server (server.js) for running jest as it's not allowing rest of the functionality to test after server is started 
3. yarn jest --coverage (Command to check coverage : covers 100%)
4. module.exports=app[command was added in index.js, if not app module will not be recognised ]

UI Functionality:
1. SignIn page is not created using form.
2. After login, to check the individual attributes there are no unique identifiers to particularly test the value.
3. yarn 'start-server-and-test' 'http://localhost:8080' 'cypress run' [command has been used to test in console]
4. yarn 'start-server-and-test' 'http://localhost:8080' 'cypress open'[command can be used but page will be logged in redundantly 
            as the logic is written to check the tests on console.  ]

