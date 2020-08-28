// function to generate random variables and assigning it starts here
let no_rows=15;
let list=['elephant','lion','tiger','fox','dog','eagle','cat','cow','mouse'];

arr=new Array(no_rows);
for(let i=0;i<no_rows;i++){
    arr[i]=new Array(no_rows);
}

function int_generator(str){
    let len=str.length;
    let num22=Math.floor(Math.random()*1000)%(no_rows);
    let num11=Math.floor(Math.random()*1000)%(no_rows-len);
    let num_insert=Math.floor(Math.random()*1000)%(2);

    if(num_insert==0){
        let ca_insert=1;
        for(let a=num11;a<num11+len;a++)
        {
            if(arr[num22][a]!=undefined){
                ca_insert=0;
                break;
            }
        }
        if(ca_insert==0)
            int_generator(str);
        else
            ret=new Array(num22,num11,1);
    }
    else if(num_insert==1){
        let ca_insert=1;
        for(let a=num11;a<num11+len;a++)
        {
            if(arr[a][num22]!=undefined){
                ca_insert=0;
                break;
            }
        }
        if(ca_insert==0)
            int_generator(str);
        else
            ret=new Array(num11,num22,0);
    }
    return ret;
}

for(let i of list){
    let k=int_generator(i);
    if(k[2]==1)
    {
        let j=0;
        for(let a=k[1];a<k[1]+i.length;a++){
            arr[k[0]][a]=i[j++];
        }
    }
    else if(k[2]==0)
    {
        let j=0;
        for(let a=k[0];a<k[0]+i.length;a++){
            arr[a][k[1]]=i[j++];
        }
    }
}
let char='abcdefghijklmnopqrstuvwxyz';
for(let a=0;a<no_rows;a++)
for(let b=0;b<no_rows;b++)
{
    if(arr[a][b]==undefined)
    {
        let number=Math.floor(Math.random()*1000)%(26);
        arr[a][b]=char[number];
    }
}
// function to generate random variables and assigning it ends here


// front-end showing of characters starts here
let a=document.getElementById("de");
let str="";
for(let i=0;i<no_rows;i++){
    for(let j=0;j<no_rows;j++){
        let id1=i*15+j;
        str+=`<button class='button-- font' id='${id1}' onclick="clicked(${id1})">${arr[i][j]}</button>`;
    }
}
a.innerHTML=str;
// front-end showing of characters ends here

let ans="";
let i=0;
let id_list=new Array;

window.alert("Names of different animals will be hidden find them..");

function clicked(id1)
{
    let go=0;
    if(i==1 && (Math.abs(id1-id_list[id_list.length-1])==1 || Math.abs(id1-id_list[id_list.length-1])==15))
    {go=1;}
    else if(i>1 && ( (Math.abs(id1-id_list[id_list.length-1])==1 && Math.abs(id1-id_list[id_list.length-2])==2) || (Math.abs(id1-id_list[id_list.length-1])==15 && Math.abs(id1-id_list[id_list.length-2])==30) ) )
    {go=1;}

    if(i==0 || go==1)
    {
        let ele=document.getElementById(id1);
        ele.style.backgroundColor="red";
        ans+=ele.textContent;
        id_list.push(id1);
        i++;

        // this is to check whethre it match with out list elements
        for(str11 of list)
        {
            if(str11==ans)
            {
                for(let p=0;p<id_list.length;p++)
                {
                    id22=id_list[p];
                    let change=document.getElementById(`${id22}`);
                    change.style.backgroundColor='green';
                }
                list = list.filter(e => e !== ans);
                setTimeout(function(){
                    if(list.length!=0)
                    {
                        window.confirm(`!!!!!!!!!YOU HAVE FOUND one of the name CORRECTLY!!!!!!
                        TRY TO FIND OTHER WORDS ALSO`);
                    }
                    else
                    {
                        let mes=document.getElementById("mes");
                        mes.innerHTML=`<h1>successfully found all hidden words..
                            REFRESH the page to start it again
                        </h1>`
                    }
                },100);
                

                
                id_list=[];
                ans="";
            }
            
        }
    }
    else{
        for(let i=0;i<id_list.length;i++)
        {
            let ele=document.getElementById(id_list[i]);
            ele.style.backgroundColor='';
        }
        id_list=[];
        ans="";
        i=0;
    }
    //  Element matching ends here
}