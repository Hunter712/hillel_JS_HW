const str = "In the quiet of the night so deep,\n" +
    "Where moonbeams softly start to seep,\n" +
    "Stars twinkle in a velvet sea,\n" +
    "Whispering secrets just for me.\n" +
    "\n" +
    "Dreams dance lightly on a breeze,\n" +
    "Carrying wishes through the trees,\n" +
    "Mysteries in the starlit sky,\n" +
    "Where imagination learns to fly.";

const pattern = /[b-zB-Z]{6,}/gm;

const matches = str.match(pattern);

console.log(matches);