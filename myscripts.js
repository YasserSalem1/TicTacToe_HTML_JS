var counter = 1
const list = [[0,0,0],[0,0,0],[0,0,0]]

function clearall(){
    document.getElementById('00').innerHTML = ""
    document.getElementById('01').innerHTML = ""
    document.getElementById('02').innerHTML = ""
    document.getElementById('10').innerHTML = ""
    document.getElementById('11').innerHTML = ""
    document.getElementById('12').innerHTML = ""
    document.getElementById('20').innerHTML = ""
    document.getElementById('21').innerHTML = ""
    document.getElementById('22').innerHTML = ""

    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            list[i][j] = 0
        } 
     }

}


function action(id){
    if(counter % 2 == 0){
        document.getElementById(id).innerHTML = "O"
        list[id[0]][id[1]] = 2
        }
    else{
        document.getElementById(id).innerHTML = 'X'
        list[id[0]][id[1]] = 1
    }

//    [0][0] , [0][1] , [0][2]
//    [1][0] , [1][1] , [1][2]
//    [2][0] , [2][1] , [2][2]
//
//    [0][0] , [1][0] , [2][0]
//    [0][1] , [1][1] , [2][1]
//    [0][0] , [1][0] , [2][0]

//    [0][0] , [1][1] , [2][2]
//    [0][2] , [1][1] , [2][0]

var wining_row_1
var wining_row_2
var wining_col_1
var wining_col_2

for(let i=0;i<3;i++){
    wining_col_1 = 0
    wining_col_2 = 0
    wining_row_1 = 0
    wining_row_2 = 0
    for(let j=0;j<3;j++){
        if(list[j][i] == 1){
            wining_col_1++
            if(wining_col_1 == 3){
                alert(document.getElementById(id).innerHTML,'won' )
                clearall()
            
            }
        }
        if(list[j][i] == 2){
            wining_col_2++
            if(wining_col_2 == 3){
                alert(document.getElementById(id).innerHTML,'won' )
                clearall()
            }

            }
        if(list[i][j] == 1){
            wining_row_1++
            if(wining_row_1 == 3){
                alert(document.getElementById(id).innerHTML,'won' )
                clearall()
            }
        if(list[i][j] == 2){
            wining_row_2++
            if(wining_row_2 == 3){
                alert(document.getElementById(id).innerHTML,'won' )
                clearall()
            }
     }
        } 
        }
    } 
 if (list[0][0]== 1 && list[1][1] == 1 )
 {
    if(list[1][1] == list[2][2])
    {
        alert(document.getElementById(id).innerHTML,'won' )
        clearall()
    }
    
 }
 if (list[0][0]== 2 && list[1][1] == 2 )
 {
    if(list[1][1] == list[2][2])
    {
        alert(document.getElementById(id).innerHTML,'won' )
        clearall()
    }
    
 }

 if(list[0][2] == 1 && list[1][1] == 1)
 {
    if(list[1][1] == list[2][0]){
        alert(document.getElementById(id).innerHTML,'won' )
        clearall()
    }

 }

 if(list[0][2] == 2 && list[1][1] == 2)
 {
    if(list[1][1] == list[2][0]){
        alert(document.getElementById(id).innerHTML,'won' )
        clearall()
    }
 }
 

    

    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
             console.log("[",i,"]","[",j,"]",list[i][j])
        } 
     }

    counter++



    

 }