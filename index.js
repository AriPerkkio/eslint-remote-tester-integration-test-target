var foo = bar;

if (foo) {
}

var p = {
    get name(){
        // no returns.
    }
};
p.getName();


if (foo === -0) {
  // prevent no-empty
}