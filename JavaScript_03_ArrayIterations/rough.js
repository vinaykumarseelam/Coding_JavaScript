const strs = ["flower","flow","flight"];
const newArray = [];
    
    var str1 = strs[0];
    var str2 = strs[1];
    var str3 = strs[2];
    console.log(str1);
    for(i=0; ((str1[i]===str2[i]) && (str1[i] === str3[i])); i++)
        {
            if((str1[i]===str2[i]) && (str1[i] === str3[i])){
                newArray.push(str1);
            }
            else{
                console.log(newArray.push(" "));
            }
        }
    console.log(newArray);


    
    