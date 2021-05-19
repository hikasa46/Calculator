//数字の文字列
let number=["1","2","3","4","5","6","7","8","9","0"];

//演算子
let operatorString=["＋","ー","＊","÷"];

//計算式(表示)
let formula=document.getElementById("Answer");

//解答
let Answer=0;

//前の数字(文字列)
let frontNumberString="";

//後ろの数字(文字列)
let backNumberString="";

//前の数字
let frontNumber=0;

//後ろの数字
let backNumber=0;

//演算子入力フラグ
let boolOperator=false;

//演算子を置き換える変数
let operatorNumber=0;

//数字が一番最初に押されたかどうか
let boolnumberPush=false;

//ボタンを押した時
for(let i=0;i<number.length;i++)
{
    document.getElementsByTagName("button")[i].addEventListener("click",()=>{
        
        //表示する数字 
        formula.textContent+=number[i];

        //演算子が入力できるようにする
        boolnumberPush=true;

        //押された文字列の数字を保持しておく
        if(boolOperator===false)
        {
            //前の数字
            frontNumberString+=number[i];
        }
       else
       {
           //後ろの数字
           backNumberString+=number[i];
       }
    })
}

//演算子を押した時
for(let i=0;i<operatorString.length;i++)
{
    document.getElementsByClassName("operator")[i].addEventListener("click",function(){

    //数字が何も押されていないのなら演算子が反映されない
    if(boolnumberPush===false){return;}
        
    //演算子は一度のみ実行
    if(boolOperator===true){return;}
         
    //表示する演算子
    formula.textContent+=operatorString[i];

    //押された演算子を数字に置き換える
    operatorNumber=i;

    //フラグをonにして演算子をもう一度押せなくする
    boolOperator=true;
         
    })
}

//イコールが押されたら
document.getElementById("equal").addEventListener("click",function(){

    //演算子が押されてないならreturn
    if(boolOperator===false){return;}

    //文字列の数字を値に変換する
    frontNumber=parseFloat(frontNumberString);  //前
    backNumber=parseFloat(backNumberString);    //後ろ

    //+
    if(operatorNumber===0)
    {
        Answer=frontNumber+backNumber;
    }
    //-
    else if(operatorNumber===1)
    {
        
        Answer=frontNumber-backNumber;
    }
    //*
    else if(operatorNumber===2)
    {
        Answer=frontNumber*backNumber;
    }
    //÷
    else if(operatorNumber===3)
    {
        Answer=frontNumber/backNumber;
    }

    //答えを表示する
    formula.textContent=Answer;

    //後ろの数字の文字列を初期化する
    backNumberString="";

    //答えの数字を前の数字の文字列に代入する
    frontNumberString=String(Answer);

    //演算子を入力できるようにする
    boolOperator=false;
})