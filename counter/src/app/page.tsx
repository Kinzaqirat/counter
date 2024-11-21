"use client"
import { useState } from "react";

export default function Home() {
  let [count, setCounter]=useState(0)
let counterAdd=()=>{
  setCounter(count+1)
}
let counterSub=()=>{
  setCounter(count-1)

if(count<1){
  setCounter(0)

}
}
let counterRest=()=>{
  setCounter(0)
}

  return (
    <div className="h-screen flex justify-center bg-gradient-to-t from-black to-white w-full" >
<div className="mt-[100px] w-[500px] h-[500px] rounded-3xl border max-sm:w-[300px] max-sm:h-[400px]">
<h1 className="text-center text-[200px] text-white"> {count}</h1>
<div className="flex justify-center  gap-[50px] max-sm:gap-[20px]">
  <button className="bg-slate-900 w-[100px] h-[30px] rounded-2xl text-white max-sm:w-[50px] " onClick={counterAdd}>+</button>
<button className="bg-slate-900 w-[100px] h-[30px] rounded-2xl text-white  max-sm:w-[50px]" onClick={counterRest} >Reset</button>
<button className="bg-slate-900 w-[100px] h-[30px] rounded-2xl text-white max-sm:w-[50px]" onClick={counterSub}>-</button>
</div>

</div>
    </div>
  );
}
