var id = 1;

document.getElementById("next").addEventListener("click", function () {

    id += 1;

    if(id  > 3){
        id = 1;
    }

    for (let i = 1; i <= 3; i++){

        if(id == i){
            document.getElementById('i' + i).style.display = 'flex';
        }else{
            document.getElementById('i' + i).style.display = 'none';
        }
    }
});


document.getElementById("later").addEventListener("click", function () {
    
    id -= 1;

    if(id < 1){
        id = 3;
    } 

    for (let i = 1; i <= 3; i++){

        if(id == i){
            document.getElementById('i' + i).style.display = 'flex';
        }else{
            document.getElementById('i' + i).style.display = 'none';
        }
    }   
});