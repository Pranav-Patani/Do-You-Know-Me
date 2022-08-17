const readlineSync = require(`readline-sync`);
const chalk = require(`chalk`);

//Welcome Message

const userName = readlineSync.question(
  chalk.magentaBright(`Please enter your user name. -> `)
);
console.log(`------------------------------------------
  `);

let start = readlineSync.keyInSelect(
  [`Yes`, `No`],
  chalk.green(`Welcome ${chalk.bold(userName)}!`) + ` Do you know Pranav?`,
  { cancel: false }
);

//Condition for starting game

if (start == 0) {
  console.log(`------------------------------------------
  `);
  console.log(chalk.cyanBright(`Good confidence, let's test if you know me!`));

  //Declaring global variables
  const highscore = 8;
  const topPlayer = `Bob`;
  let cookie = 0;

  const leaderboard = [
    { name: `Bob`, score: 8 },

    { name: `Fin`, score: 6 },

    { name: `Hog`, score: 5 },
  ];

  //Function

  const play = function (question, options, answer) {
    console.log(`------------------------------------------
  `);
    const userAnswer = readlineSync.keyInSelect(options, question, {
      cancel: false,
    });

    if (userAnswer == answer) {
      console.log(`------------------------------------------
  `);
      console.log(
        chalk.greenBright.bold(`Great job smarty, you just earned a cookie!`) +
          chalk.greenBright(`

Total cookies -> ${(cookie = cookie + 1)}`)
      );
    } else {
      console.log(`------------------------------------------
  `);
      console.log(
        chalk.red.bold(`Wrong move! The cookie monster ate your cookie.`) +
          chalk.red(`
    
nom nom nom... Total cookies left -> ${(cookie = cookie - 1)}`)
      );
    }
  };

  //Questions

  const qNa = [
    {
      question: `What is my birth-date?`,
      options: [07, 19, 25],
      answer: 1,
    },

    {
      question: `What song do I like the most?`,
      options: [`8-Letters`, `Faded`, `Sakhiyaan`, `Lamberghini`],
      answer: 0,
    },

    {
      question: `Which city am I from?`,
      options: [`Udaipur`, `Bihar`, `Jaipur`, `Delhi`],
      answer: 2,
    },

    {
      question: `What is my favourite snack?`,
      options: [`Popcorn`, `Chips`, `Sweet Corn`, `Noodles`],
      answer: 1,
    },

    {
      question: `What type of wrist-watch do I prefer?`,
      options: [`Analog`, `Digital`],
      answer: 0,
    },

    {
      question: `What type of drink do I prefer?`,
      options: [`Soft drink`, `Alcohol`, `Fruit Juice`, `Milk Shake`],
      answer: 3,
    },

    {
      question: `What type of themes do I like?`,
      options: [`Dark Themes`, `Light Themes`],
      answer: 0,
    },

    {
      question: `What is my favourite music genre?`,
      options: [`Rock`, `Pop`, `Metal`, `Jazz`],
      answer: 1,
    },

    {
      question: `What cartoon character I like the most?`,
      options: [`Oggy`, `Shin Chan`, `SpongeBob`, `Doraemon`],
      answer: 2,
    },

    {
      question: `What is my favourite color?`,
      options: [`Puprple`, `Green`, `Brown`, `Red`],
      answer: 1,
    },
  ];

  //Loop

  for (let i = 0; i < qNa.length; i++) {
    play(chalk.yellowBright(qNa[i].question), qNa[i].options, qNa[i].answer);
  }

  //Conclusion

  if (cookie < 5 && cookie > 0) {
    console.log(`------------------------------------------
  `);
    console.log(
      chalk.magenta(
        `The game has finished. You are left with ${chalk.bold(
          cookie
        )} cookies. Do you really know me? :(`
      )
    );
  } else if (cookie == 5 || cookie == 6) {
    console.log(`------------------------------------------
  `);
    console.log(
      chalk.magenta(
        `The game has finished. You are left with ${chalk.bold(
          cookie
        )} cookies. You do know me pretty good.`
      )
    );
  } else if (cookie > 6) {
    console.log(`------------------------------------------
  `);
    console.log(
      chalk.magenta(
        `Well played! You are left with ${chalk.bold(
          cookie
        )} cookies. Go buy the amount of cookies you earned and celebrate :)`
      )
    );
  } else if (cookie == 0) {
    console.log(`------------------------------------------
  `);
    console.log(
      chalk.magenta(
        `The game has finished. You got no cookies. How can you live without knowing me?`
      )
    );
  } else {
    console.log(`------------------------------------------
  `);
    console.log(
      chalk.magenta(
        `The game has finished. You are in a debt of ${chalk.bold(
          cookie
        )} cookies. Send me the cookies NOW!`
      )
    );
  }

  //High Score

  if (cookie > highscore) {
    console.log(`------------------------------------------
  `);
    console.log(
      chalk.greenBright.bold(
        `Congratulations! You beat the current highscore by ${chalk.bgGreen.black(
          cookie - highscore
        )} cookies! Send me a screen shot of your score and I will update the highscore!`
      )
    );
  } else if (cookie == highscore) {
    console.log(`------------------------------------------
  `);
    console.log(
      chalk.greenBright(
        `You match the highscore of ${chalk.bgGreen.black(
          highscore
        )} cookies! Send me a screen shot and I will put your name below ;)`
      )
    );
  } else {
    console.log(`------------------------------------------
  `);
    console.log(
      chalk.blueBright(
        `The current High Score is ${chalk.blueBright.bold(
          highscore
        )}. You need ${chalk.blueBright.bold(
          highscore - cookie
        )} more cookies to beat the current highscore. You can send me a screen shot if you want to be in the leaderboard!`
      )
    );
  }

  //Top Players
  console.log(`------------------------------------------
------------------------------------------ `);
  console.log(
    chalk.bgGreen.black(
      `The top player is ${topPlayer} with ${highscore} cookies!`
    )
  );
  console.log(`------------------------------------------
------------------------------------------ `);

  console.log(chalk.cyan(`Leaderboard:`));
  console.table(leaderboard);
  console.log(chalk.bgGray(`------------------------------------------`));
  //Aborting the game if condition didn't match
} else {
  console.log(`------------------------------------------
  `);
  console.log(
    chalk.red(`You may leave the game.
Thanks for showing your interest!`)
  );
}
