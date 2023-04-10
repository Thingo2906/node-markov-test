const { MarkovMachine } = require("./markov");


describe('markov machine', function () {
  test('makes chains', function () {
    let mm = new MarkovMachine("aa bb cc aa BB aa BB");

    expect(mm.makeChains()).toEqual({
        "aa":["bb", "BB"],
        "bb":["cc"],
        "cc": ["aa"],
        "BB":["aa", null]
    })
  });


  test('make text', function () {
    let mm = new MarkovMachine("a b c");
    let text = mm.makeText(20);
    expect(text).toContain("a b");
    expect(text).toContain("b c");
  });

});