module.exports = function main(num) {
    //console.log("Debug Info");
    var digital = [
    ['._.', '...', '._.', '._.', '...', '._.', '._.', '._.', '._.', '._.'],
    ['|.|', '..|', '._|', '._|', '|_|', '|_.', '|_.', '..|', '|_|', '|_|'],
    ['|_|', '..|', '|_.', '._|', '..|', '._|', '|_|', '..|', '|_|', '..|']];
    var num_list = [];
    for(let i of num){
        num_list.push(i-'0');
    }
    var total = "";
    for(let y of [0,1,2]){
        var i=1;
        for(let x of num_list){
            if(i != num_list.length){
                i++;
                total += digital[y][x]+' ';
            }else{
                total += digital[y][x];
            }
            
        }
        total += '\n';
    }
    //console.log(total);
    return total; 
};