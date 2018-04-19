function myUserIsCorrect (myemail,mymdp){
    
        for ( i=0; i < BddLength ; i++){
            if(myemail===BaseDeDonnees[i].email && mymdp === BaseDeDonnees[i].mdp){
                return true;
            } else if (mymdp === BaseDeDonnees[i].mdp) {
                if (myemail===BaseDeDonnees[i].email){
                    return true;
                } else { false;}
            } else
            { 
                return false;
            } 
        }  
}

else if(userMdp === BaseDeDonnees[i].mdp) {
            if (userEmail===BaseDeDonnees[i].email){
                return true;
            }