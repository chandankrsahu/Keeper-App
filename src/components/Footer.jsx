import React from "react";


const year=new Date().getFullYear();

function foot(){
  return (<footer><p >Copyright ⓒ {year}</p></footer>);
}
export default foot;