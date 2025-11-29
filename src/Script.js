const data=[{id:1,name:"rudra",course:"java",book:"javacourse"},
    {id:2,name:"anshul",course:"python",book:"python couse"}
];

const names=data.map(item=>item.name);
console.log("Map "+names);
const JavaUser=data.filter(item=>item.course==="java");
console.log( "filter "+JavaUser);
const finduser=data.find(item=>item.name=="rudra");
console.log("find "+finduser);
const userCount=data.reduce((acc,curr)=>acc+1,0);
console.log("reduce "+userCount);

const restdata=[...data];
console.log(restdata);
function demo(a, b, ...rest) {
    console.log("A:", a);
    console.log("B:", b);
    console.log("REST:", rest);
}

demo(1, 2, 3, 4, 5);

const copyData = [...data];
console.log("SPREAD COPY:", copyData);
const newData = [...data, { id: 3, name: "rahul", course: "node", book: "nodebook" }];
console.log("ADD:", newData);
//distructuring
const {id,name}=data[0];
console.log(id,name);

const [first, second] = data;
console.log("distructuring"+first, second);

//sort
const arr=[3,7,4,1,5];
 constsortArr=arr.sort((a,b)=>a-b);
 console.log(constsortArr);
 console.log(arr);

const sortuser =[...data].sort((a, b) => a.name.localeCompare(b.name));
console.log("sortuser ",sortuser);


const hasPython = data.some(item => item.course === "python");
console.log("SOME:", hasPython);

const allIdOne = data.every(item => item.id === 1);
console.log("EVERY:", allIdOne);

const newdata={
id:6,
title:"harry potter",
author:"r.k."};
 const dataStore=[...data,newdata];
 console.log(dataStore);
//delete
 const deleteArrId=dataStore.filter(item=>item.id!==6);
  console.log(deleteArrId);
  // update
  const updatedata= data.map((item)=>item.id==1?{...data,pages:1}:item );
  console.log("update ",updatedata);