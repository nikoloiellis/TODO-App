
//in order to make authentication you need to handle a sessiono storage
/*In order to do that you need to create a service class that is a pure js class 
create a method that takes in a username and a password and use sessionstorage.setitem 
export it as a function with the new keyword */


//Local vs Session Storage, once you set a value into the local storage it remains no matter what 
//vs a session storage that deletes with every new session 
class AuthenticationService { 

    registerSuccessfulLogin(username,password){
        console.log("registerSuccesfulllogin");
        sessionStorage.setItem('authenticatedUser', username);
       

    }


    //Simply just delete the key sent in from autheticatedUser
    logout(){
        sessionStorage.removeItem('authenticatedUser');
    }

    //This one is a bit tricky and requires a little bit of leg work 
    //It basically says get the session key 
    //if the key is null then return false if it isn't return true 
    //This is more or less used in controling feautures you can and cannot use if you're logged in or not 
    isUserLoggedIn(){
        let user = sessionStorage.getItem('authenticatedUser');
        if(user===null){
            return false
        }
            return true
        
       
    }

    getLoggedInUser(){
        let user = sessionStorage.getItem('authenticatedUser');
        if(user === null) return ''
        return user
    }
}

export default new AuthenticationService();