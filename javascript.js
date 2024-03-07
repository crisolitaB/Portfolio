var poems = [
    "\"Adam Had'Em\"<br>-Fleas by Ogden Nash",
    "You may write me down in history<br>With your bitter, twisted lies,<br>You may trod me in the very dirt<br>But still, like dust, I’ll rise.<br>-Still I Rise by Maya Angelou",
    "maggie and milly and molly and may<br>went down to the beach(to play one day)<br><br>and maggie discovered a shell that sang<br>so sweetly she couldn't remember her troubles,and<br><br>milly befriended a stranded star<br>whose rays five languid fingers were;<br><br>and molly was chased by a horrible thing<br>which raced sideways while blowing bubbles:and<br><br>may came home with a smooth round stone<br>as small as a world and as large as alone.<br><br>For whatever we lose(like a you or a me)<br>it's always ourselves we find in the sea<br>-maggie and milly and molly and may by E.E. cummings",
    "Do not stand at my grave and weep<br>I am not there. I do not sleep.<br>I am a thousand winds that blow.<br>I am the diamond glints on snow.<br>I am the sunlight on ripened grain.<br>I am the gentle autumn rain.<br>When you awaken in the morning’s hush<br>I am the swift uplifting rush<br>Of quiet birds in circled flight.<br>I am the soft stars that shine at night.<br>Do not stand at my grave and cry;</br>I am not there. I did not die.<br>-Do Not Stand At My Grave and Weep by Mary Elizabeth Frye",
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