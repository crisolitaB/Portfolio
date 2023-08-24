var poems = [
    "\"Adam Had'Em\"<br>-Fleas by Ogden Nash",
    "Maggie and Millie and Molly and Mae",
    "If",
    "We were six",
    "I have eaten<br>the plums<br>that were in<br>the icebox<br><br>and which<br>you were probably<br>saving<br>for breakfast<br><br>Forgive me<br>they were delicious<br>so sweet<br>and so cold<br>-This Is Just To Say by William Carlos Williams",
    "Hold fast to dreams<br>For if dreams die<br>Life is a broken-winged bird<br>That cannot fly.<br><br>Hold fast to dreams<br>For when dreams go<br>Life is a barren field<br>Frozen with snow.<br>-Dreams by Langston Hughes",
    "As it has been said:<br>Love and a cough<br>cannot be concealed.<br>Even a small cough.<br>Even a small love.<br>-Small Wire by Anne Sexton",
    "Tell me, what is it you plan to do<br>with your one wild and precious life?<br>-The Summer Day by Mary Oliver",
    "Resist much, obey little;<br>-Caution by Walt Whitman"
]

function newPoem() {
    var randomNumber = Math.floor(Math.random()* (poems.length));
    document.getElementById('poemDisplay').innerHTML = poems[randomNumber];
}