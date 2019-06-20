class User{
    get id(){
        this._id;
    }
    
    get password(){
        this._password;
    }
    
    setId(id){
        this._id = id;
    }
    
    setPassword(password){
        this._password = password;
    }
    
    login(inputId, inputPassword){
        return this.id === inputId && this.password === inputPassword;
    }
}

//↑のテスタビリティを強化↓
//YOUR CODE HERE


exports.User = User;