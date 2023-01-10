const global = "global";

if (true) {
  const blockA = "blockA";

  console.log("if :>> ", global);
  console.log("if :>> ", blockA);

  if (true) {
    const blockB = "blockB";
    console.log("if :>> ", global);
    console.log("if 2 :>> ", blockA);
    console.log("if 2 :>> ", blockB);

    if (true) {
      const BlockC = "BlockC";
      console.log("if :>> ", global);
      console.log("if3 :>> ", blockA);
      console.log("if 3 :>> ", blockB);
    }
  }
}

console.log("global :>> ", global);
console.log("BlockC :>> ", BlockC);
console.log("global :>> ", blockB);
console.log("global :>> ", blockA);
