document.getElementById('findSign').addEventListener('click', function() {
  const birthdate = document.getElementById('birthdate').value;
  const date = new Date(birthdate);
  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1;

  const zodiacSigns = [
    { sign: 'Aries', from: [3,21], to: [4,19], description: "Chaotic toddler with a gym membership. Thinks they’re the main character. Actually the action movie extra who yells 'Let’s go!' and sprints into fire without a plan. Will fight you, cry, then fight you again for making them cry." },
    { sign: 'Taurus', from: [4,20], to: [5,20], description: "Human weighted blanket with a food addiction. Will ghost you for a nap. Emotionally stable until you touch their fries. Spends €200 on candles, then complains about money. Loyal, stubborn, basically a designer cow." },
    { sign: 'Gemini', from: [5,21], to: [6,20], description: "Group chat in human form. Talking to them is like 47 tabs open and music playing from one. Can sell you a dream, then ghost you mid-sentence. Chaotic good until bored — then they just start narrating your downfall." },
    { sign: 'Cancer', from: [6,21], to: [7,22], description: "Toddler in a crab shell who cries in cursive. Will bake you cookies and hold a grudge for 12 years. Weaponizes softness. Cries, but also plots. Feels everything, forgives nothing. Brings snacks to your emotional breakdown." },
    { sign: 'Leo', from: [7,23], to: [8,22], description: "Walking selfie with a God complex. Will enter a room like they’re accepting an Oscar. Loud, loyal, and somehow wearing sunglasses at night. Will hype you up, then steal your spotlight with a hair flip and emotional monologue." },
    { sign: 'Virgo', from: [8,23], to: [9,22], description: "Self-appointed manager of everyone’s life, unprompted. Human Google Doc with control issues. Feels nothing unless it's been analyzed, labeled, and alphabetized. Thinks love is fixing people who never asked. Emotional intimacy? Sounds inefficient. Will micromanage your feelings, then get annoyed when you're 'too emotional.' Judging you harder than your mom but with Excel formulas." },
    { sign: 'Libra', from: [9,23], to: [10,22], description: "Flirty diplomat with commitment issues. Could flirt with a plant. Will ask you to choose the restaurant, then reject every option. Beautiful, indecisive, probably crying because someone raised their voice in a cartoon." },
    { sign: 'Scorpio', from: [10,23], to: [11,21], description: "Mystical cryptid with trust issues. Has intense eye contact and darker secrets than a Netflix docuseries. Will fall in love, get jealous, and plan your funeral — all before the second date. Scary hot. You kinda like it." },
    { sign: 'Sagittarius', from: [11,22], to: [12,21], description: "Philosopher clown on a scooter. Will give you life advice while losing their passport. Can’t commit, but will plan a spontaneous life together… in a different country. No filter, just vibes and a mildly offensive joke." },
    { sign: 'Capricorn', from: [12,22], to: [1,19], description: "CEO of deadpan disappointment. Born 47 years old. Could run your life better than you. Their version of flirting is 'You disappoint me less than most.' Emotionally constipated but rich. Will never let you forget they were right." },
    { sign: 'Aquarius', from: [1,20], to: [2,18], description: "Alien disguised as a TED Talk. Emotionally unavailable but somehow your therapist. Believes in saving the world but can’t answer a text. Thinks they’re a rebel — actually just wearing mismatched socks and overthinking humanity." },
    { sign: 'Pisces', from: [2,19], to: [3,20], description: "Dreamy marshmallow with a WiFi connection to the spirit realm. Can’t do math but will write a poem about your aura. Cries at clouds. Escapes reality daily — sometimes by sleeping, sometimes with substances. You never really know if they’re okay, but… vibes?" }
  ];

  let userSign = zodiacSigns.find(zodiac => {
    return (month === zodiac.from[0] && day >= zodiac.from[1]) ||
           (month === zodiac.to[0] && day <= zodiac.to[1]);
  });

  if (!userSign) userSign = zodiacSigns.find(z => z.sign === 'Capricorn');

  document.getElementById('result').innerHTML = `
    <img src="img/${userSign.sign.toLowerCase()}.png" alt="${userSign.sign}">
    <h2>${userSign.sign}</h2>
    <p>${userSign.description}</p>
  `;
});

