const gameSetUp = {
  //this array contains all possible stories and associated info
  stories: [
    {
      id: 0,
      title: 'The Shire',
      introImageSrc: './assets/1/introImage.jpeg',

      background: [
        {
          imageSrcSmall: './assets/1/background/card1/smallImage.jpeg',
          imageSrcLarge: './assets/1/background/card1/smallImage.jpeg',
          shortText: [
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit',
            'Molestias aut, repellat ipsum facere voluptate',
            'Dicta obcaecati deserunt nobis suscipit eaque?',
          ],
          fullText:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?',
        },
        {
          imageSrcSmall: './assets/1/background/card2/smallImage.jpeg',
          imageSrcLarge: './assets/1/background/card2/smallImage.jpeg',
          shortText: [
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
            'Molestias aut, repellat ipsum facere voluptate dicta',
            'obcaecati deserunt nobis suscipit eaque',
          ],
          fullText:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?',
        },
        {
          imageSrcSmall: './assets/1/background/card3/smallImage.jpeg',
          imageSrcLarge: './assets/1/background/card3/smallImage.jpeg',
          shortText: [
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
            'Molestias aut, repellat ipsum facere voluptate dicta',
            'obcaecati deserunt nobis suscipit eaque',
          ],
          fullText:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?',
        },
      ],
      hints: {
        weapon: {
          imageSrcSmall: './assets/1/hints/weapon/weaponHintImage.jpeg',
          imageSrcLarge: './assets/1/hints/weapon/weaponHintImage.jpeg',
          title: 'Weapon',
          fullText:
            'Donec consequat enim ac arcu maximus venenatis. Duis non dignissim ipsum, ac eleifend augue. Nullam porta purus ac libero viverra blandit. Vestibulum dictum hendrerit mi, a tincidunt eros. Etiam tristique libero id tincidunt vestibulum. In gravida faucibus lectus sed maximus. Donec iaculis aliquet hendrerit. Pellentesque ultricies at dui in commodo. Suspendisse suscipit massa at nisl ornare, vitae viverra tortor scelerisque. Nullam quis eleifend risus, sit amet tempus risus. Curabitur consequat tellus lobortis, bibendum nulla nec, commodo diam. Pellentesque mauris mauris, fermentum in purus eu, euismod euismod diam. Etiam scelerisque molestie erat, vitae pretium ipsum gravida at. Aenean tempor interdum ligula et euismod. Duis ac lacus eu arcu mattis lobortis.',
        },
        name: {
          imageSrcSmall: './assets/1/hints/weapon/nameHintImage.jpeg',
          imageSrcLarge: './assets/1/hints/weapon/nameHintImage.jpeg',
          title: 'Name',
          fullText:
            'Nunc faucibus blandit nisi sit amet tristique. Etiam at enim sit amet nunc dictum tincidunt in nec mi. Nam fringilla hendrerit mauris id elementum. Nulla quis turpis vel magna ullamcorper facilisis. Nullam consectetur eget purus non cursus. Nullam neque libero, venenatis eget elit sit amet, egestas maximus sem. Cras eget porttitor tellus, cursus venenatis massa. Phasellus non metus augue. Sed molestie urna dolor, quis viverra nulla suscipit non. Duis gravida ante mauris, id accumsan felis finibus ut. Aliquam libero purus, sodales vel mattis eget, gravida eget sapien. Aliquam malesuada ut purus eu euismod. Donec quis eros in nibh pharetra varius vitae eu ante.',
        },
        location: {
          imageSrcSmall: './assets/1/hints/weapon/locationHintImage.jpeg',
          imageSrcLarge: './assets/1/hints/weapon/locationHintImage.jpeg',
          title: 'Location',
          fullText:
            'Curabitur quis purus diam. Vivamus id aliquet velit. Donec ut purus sit amet neque placerat tempor id eu augue. Fusce dapibus elementum congue. Suspendisse auctor congue diam, sit amet tempor nulla sollicitudin nec. Morbi blandit nulla eget justo tempor, ac porta orci auctor. Phasellus quis felis et eros ultrices porttitor a quis nunc. Praesent rutrum mauris lobortis nulla dapibus, volutpat fringilla lorem molestie. Phasellus vitae libero at massa semper iaculis. Quisque sed porttitor metus, at posuere turpis. Duis vehicula sem eget lacus porttitor, vel luctus ipsum porta. Maecenas blandit orci ut dui rutrum, et ornare dui congue.',
        },
      },
      selectables: {
        weapon: [
          {
            name: 'Glamdring',
            id: 'Glamdring',
            imageSrc: './assets/1/selectables/weapon/glamdring.jpeg',
            solution: true,
          },
          {
            name: 'Gauntlets',
            id: 'Gauntlets',
            imageSrc: './assets/1/selectables/name/gauntlets.jpeg',
          },
          {
            name: 'Axe',
            id: 'Axe',
            imageSrc: './assets/1/selectables/name/axe.jpeg',
          },
          {
            name: 'Dagger',
            id: 'Dagger',
            imageSrc: './assets/1/selectables/name/dagger.jpeg',
          },
          {
            name: 'Spell',
            id: 'Spell',
            imageSrc: './assets/1/selectables/name/spell.jpeg',
          },
          {
            name: 'Sword',
            id: 'Sword',
            imageSrc: './assets/1/selectables/weapon/sword.jpeg',
          },
        ],
        name: [
          {
            name: 'Glamdring',
            id: 'Glamdring',
            imageSrc: './assets/1/selectables/weapon/glamdring.jpeg',
            solution: true,
          },
          {
            name: 'Gauntlets',
            id: 'Gauntlets',
            imageSrc: './assets/1/selectables/name/gauntlets.jpeg',
          },
          {
            name: 'Axe',
            id: 'Axe',
            imageSrc: './assets/1/selectables/name/axe.jpeg',
          },
          {
            name: 'Dagger',
            id: 'Dagger',
            imageSrc: './assets/1/selectables/name/dagger.jpeg',
          },
          {
            name: 'Spell',
            id: 'Spell',
            imageSrc: './assets/1/selectables/name/spell.jpeg',
          },
          {
            name: 'Sword',
            id: 'Sword',
            imageSrc: './assets/1/selectables/weapon/sword.jpeg',
          },
        ],
        location: [
          {
            name: 'Glamdring',
            id: 'Glamdring',
            imageSrc: './assets/1/selectables/weapon/glamdring.jpeg',
            solution: true,
          },
          {
            name: 'Gauntlets',
            id: 'Gauntlets',
            imageSrc: './assets/1/selectables/name/gauntlets.jpeg',
          },
          {
            name: 'Axe',
            id: 'Axe',
            imageSrc: './assets/1/selectables/name/axe.jpeg',
          },
          {
            name: 'Dagger',
            id: 'Dagger',
            imageSrc: './assets/1/selectables/name/dagger.jpeg',
          },
          {
            name: 'Spell',
            id: 'Spell',
            imageSrc: './assets/1/selectables/name/spell.jpeg',
          },
          {
            name: 'Sword',
            id: 'Sword',
            imageSrc: './assets/1/selectables/weapon/sword.jpeg',
          },
        ],
      },
      results: {
        backgroundImageSrc: './assets/1/resultsBackgroundImage.jpeg',
      },
    },
    {
      id: '2',
      title: 'The Shire',
      background1:
        'The shire needs your help in finding the creature that is terrorizing the hobbits. Luckily, each attack has resulted in hints left behind...',
      introImage: './assets/2/introimage.png',
      hintImage: 'assets/2/hintimage.jpeg',
      images: {
        weapon: {
          image: [
            './assets/2/weaponimages/1.jpeg',
            './assets/2/weaponimages/2.jpeg',
            './assets/2/weaponimages/3.jpeg',
            './assets/2/glamdring.jpeg',
            './assets/2/weaponimages/5.jpeg',
            './assets/2/weaponimages/6.jpeg',
          ],
          id: [
            'orc Axe',
            'fists',
            'sword',
            'Glamdring',
            'spell',
            'elvish dagger',
          ],
        },
        name: {
          image: [
            './assets/2/nameimages/1.png',
            './assets/2/nameimages/1.png',
            './assets/2/nameimages/1.png',
            './assets/2/nameimages/1.png',
            './assets/2/nazgul.jpeg',
            './assets/2/nameimages/1.png',
          ],
          id: ['goblin', 'orc', 'Sam', 'Gladriel', 'Nazgul', 'Bilbo'],
        },
        location: {
          image: [
            './assets/2/locationimages/1.png',
            './assets/2/locationimages/1.png',
            './assets/2/hobbiton.jpeg',
            './assets/2/locationimages/1.png',
            './assets/2/locationimages/1.png',
            './assets/2/locationimages/1.png',
          ],
          id: [
            'Anduin River',
            'Moria',
            'Hobbiton',
            'Fargorn',
            'Isengard',
            'Mirkwood',
          ],
        },
      },

      background2: ``,
      weapon: 'Glamdring',
      HintsWeaponImage: 'assets/2/glamdring.jpeg',
      location: 'Hobbiton',
      HintsLocationImage: 'assets/2/hobbiton.jpeg',
      name: 'Nazgul',
      HintsNameImage: 'assets/2/nazgul.jpeg',
      //List of "phrases or sentences" for each category
      HintsWeapon: 'Powerful Weapon',
      HintsWeapon1: 'This weapon was build by elvish hands',
      HintsWeapon2: 'Later it was wield by Gandolf. How did the killer get it?',
      HintsLocation: 'A basic place',
      HintsLocation1:
        'There is a rummor that the town where the killings took place is a main town in the shire .',
      HintsLocation2:
        'Sam Gamgee was particularlly attentive to healing this area with soil from Galadriel',
      HintsName: 'An evil spirit',
      HintsName1: 'The killer was one of the nine',
      HintsName2: 'Whos voice strikes fear into mortals',
      game: 0,
      cheat: () => {},
      // location, weapon then name

      userSelection: [],
    },
  ],

  storyInUse: null,

  // this method chooses what story to use
  choose: function () {
    // pick random story, the random is removed for now
    // const num = Math.floor(Math.random() * this.stories.length)

    let num = 0;
    // this methhod returns a random story the story
    this.storyInUse = num;
    return this.stories[num];
  },

  //  method to add user input
  userSelection(event, forWhat) {
    let selection = event.currentTarget.id;

    // I want a way to know which user seleciton I am setting
    // weapon , name or location?
    //let forWhat = "weapon";

    if (forWhat === 'name') {
      this.stories[this.storyInUse].userSelection[0] = selection;
      console.log(this.stories[this.storyInUse].userSelection);
    } else if (forWhat === 'weapon') {
      this.stories[this.storyInUse].userSelection[1] = selection;
      console.log(this.stories[this.storyInUse].userSelection);
    } else {
      this.stories[this.storyInUse].userSelection[2] = selection;
      console.log(this.stories[this.storyInUse].userSelection);
    }
  },
};


Array.prototype.ChooseShortText = (arr) =>{
  
    // take number passed in as arr and find that object from background array
    let specificBackground = this.background[arr].shortText
    console.log(specificBackground)
    //create randmon number  x where   0=< x  < background[arr].shortText.length
    const randomNum = Math.floor(Math.random() * specificBackground.length)
    console.log(randomNum)
  
    return specificBackground[randomNum] 
}

export default gameSetUp;
