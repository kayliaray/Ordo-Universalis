var races = [
  {
    "ID": 1,
    "Race": "A'Erek",
    "Strength": 12,
    "Dexterity": 16,
    "Awareness": 14,
    "Aptitude": 16,
    "Fortitude": 12,
    "Constitution": 14
  },
  {
    "ID": 2,
    "Race": "Bae Fah",
    "Strength": 20,
    "Dexterity": 14,
    "Awareness": 22,
    "Aptitude": 14,
    "Fortitude": 10,
    "Constitution": 14
  },
  {
    "ID": 3,
    "Race": "Dwarf",
    "Strength": 18,
    "Dexterity": 10,
    "Awareness": 10,
    "Aptitude": 12,
    "Fortitude": 16,
    "Constitution": 18
  },
  {
    "ID": 3,
    "Race": "Earthborn",
    "Strength": 18,
    "Dexterity": 10,
    "Awareness": 10,
    "Aptitude": 12,
    "Fortitude": 16,
    "Constitution": 18
  },
  {
    "ID": 4,
    "Race": "Elf",
    "Strength": 10,
    "Dexterity": 18,
    "Awareness": 16,
    "Aptitude": 16,
    "Fortitude": 14,
    "Constitution": 10
  },
  {
    "ID": 5,
    "Race": "Elik",
    "Strength": 7,
    "Dexterity": 16,
    "Awareness": 7,
    "Aptitude": 18,
    "Fortitude": 12,
    "Constitution": 20
  },
  {
    "ID": 6,
    "Race": "Elik Han",
    "Strength": 18,
    "Dexterity": 14,
    "Awareness": 8,
    "Aptitude": 12,
    "Fortitude": 5,
    "Constitution": 20
  },
  {
    "ID": 7,
    "Race": "Entkin",
    "Strength": 18,
    "Dexterity": 10,
    "Awareness": 16,
    "Aptitude": 12,
    "Fortitude": 10,
    "Constitution": 18
  },
  {
    "ID": 5,
    "Race": "Grl-srrrn",
    "Strength": 10,
    "Dexterity": 8,
    "Awareness": 16,
    "Aptitude": 16,
    "Fortitude": 20,
    "Constitution": 20
  },
  {
    "ID": 6,
    "Race": "Harkadian",
    "Strength": 14,
    "Dexterity": 14,
    "Awareness": 14,
    "Aptitude": 14,
    "Fortitude": 14,
    "Constitution": 14
  },
  {
    "ID": 7,
    "Race": "Human",
    "Strength": 14,
    "Dexterity": 14,
    "Awareness": 14,
    "Aptitude": 14,
    "Fortitude": 14,
    "Constitution": 14
  },
  {
    "ID": 8,
    "Race": "Kimtid (Ash Shaytan)",
    "Strength": 18,
    "Dexterity": 8,
    "Awareness": 18,
    "Aptitude": 16,
    "Fortitude": 16,
    "Constitution": 20
  },
  {
    "ID": 9,
    "Race": "Kimtid (Lilith)",
    "Strength": 12,
    "Dexterity": 14,
    "Awareness": 16,
    "Aptitude": 18,
    "Fortitude": 18,
    "Constitution": 18
  },
  {
    "ID": 10,
    "Race": "Kimtid (Mal'Akh)",
    "Strength": 16,
    "Dexterity": 16,
    "Awareness": 18,
    "Aptitude": 16,
    "Fortitude": 16,
    "Constitution": 14
  },
  {
    "ID": 11,
    "Race": "Lizardman",
    "Strength": 16,
    "Dexterity": 16,
    "Awareness": 16,
    "Aptitude": 12,
    "Fortitude": 10,
    "Constitution": 14
  },
  {
    "ID": 12,
    "Race": "Ogre",
    "Strength": 22,
    "Dexterity": 10,
    "Awareness": 10,
    "Aptitude": 8,
    "Fortitude": 10,
    "Constitution": 22
  },
  {
    "ID": 13,
    "Race": "Orc",
    "Strength": 18,
    "Dexterity": 10,
    "Awareness": 18,
    "Aptitude": 10,
    "Fortitude": 10,
    "Constitution": 18
  },
  {
    "ID": 14,
    "Race": "Sgrluk",
    "Strength": 10,
    "Dexterity": 24,
    "Awareness": 14,
    "Aptitude": 10,
    "Fortitude": 8,
    "Constitution": 18
  },
  {
    "ID": 15,
    "Race": "Shabaf",
    "Strength": 16,
    "Dexterity": 8,
    "Awareness": 18,
    "Aptitude": 12,
    "Fortitude": 12,
    "Constitution": 22
  },
  {
    "ID": 16,
    "Race": "Troll",
    "Strength": 18,
    "Dexterity": 10,
    "Awareness": 16,
    "Aptitude": 12,
    "Fortitude": 8,
    "Constitution": 24
  },
  {
    "ID": 17,
    "Race": "Ytharial",
    "Strength": 4,
    "Dexterity": 4,
    "Awareness": 6,
    "Aptitude": 24,
    "Fortitude": 24,
    "Constitution": 26
  }
]
var perks = [
  {
    "Trait": "Physically Tough",
    "Penalty": 2,
    "Description": "Hit Points are calculated by multiplying Constitution by 4 instead of 3."
  },
  {
    "Trait": "Mentally Tough",
    "Penalty": 2,
    "Description": "Stun Points are calculated by multiplying Fortitude by 4 instead of 3."
  },
  {
    "Trait": "Good Education",
    "Penalty": 2,
    "Description": "The Character has had access to learning beyond the basics.  Starting skill multiplier is 11."
  },
  {
    "Trait": "Highly Educated",
    "Penalty": 4,
    "Description": "The Character has had advanced specialized training.  The character starts with an additional number of skill points equal to the sum of their Awareness, Aptitude and Fortitude which must be spent on specializations, only."
  },
  {
    "Trait": "Lucky",
    "Penalty": 2,
    "Description": "Small infrequent events seem to favor the character.  Twice per session can reroll a non-critical success test."
  },
  {
    "Trait": "Luck of the Damned",
    "Penalty": 4,
    "Description": "Significant infrequent events resolve favorably for the character.  Four times per session may reroll a noncritical success test and twice per session can reroll a critical success test."
  },
  {
    "Trait": "Dark Energy Resistant",
    "Penalty": 2,
    "Description": "Effects of Dark Energy seem to affect the character less.  Character reduces the successes by 2 per instance for both harmful and helpful spells."
  },
  {
    "Trait": "Has a Knack for…",
    "Penalty": 2,
    "Description": "Specify which specialty the character may reduce target numbers by 4.  Reduces the cost of increasing the specialty to the next level by 2."
  },
  {
    "Trait": "Gifted",
    "Penalty": 4,
    "Description": "Specify which General Skill the character may reduce target numbers by 4.  All specialties under that heading have target numbers reduced by 2.  Reduces cost of increasing skill and specialty to next level by 4 and 2, respectively."
  },
  {
    "Trait": "Savant",
    "Penalty": 6,
    "Description": "Specify which General Skill the character may reduce target numbers by 8.  All specialties under that heading have target numbers reduced by 4.  Reduces cost of increasing skill and specialty to next level by 4 and 2, respectively."
  },
  {
    "Trait": "Multitasking",
    "Penalty": 4,
    "Description": "May perform a number of tasks simultaneously without penalty equal to 1/2 Fortitude."
  },
  {
    "Trait": "Calm",
    "Penalty": 2,
    "Description": "Character is unable to be swayed easily by emotions.  Interrogation, negotiating, etc. target numbers are reduced by 2."
  },
  {
    "Trait": "Emotional Straightjacket",
    "Penalty": 4,
    "Description": "Character appears emotionless and un-angerable.  Interrogation, negotiating, etc. target numbers are reduced by 4."
  },
  {
    "Trait": "Superior Specimen 1",
    "Penalty": 2,
    "Description": "Congratulations!  The character is a fine example of their species.  Racial restrictions on one attribute is increased by 2."
  },
  {
    "Trait": "Superior Specimen 2",
    "Penalty": 4,
    "Description": "Congratulations!  The character is a excellent example of their species.  Racial restrictions on up to two attributes is increased by 4."
  },
  {
    "Trait": "Superior Specimen 3",
    "Penalty": 6,
    "Description": "Congratulations! The Character is a superlative example of their species with a pedigree and a blue ribbon.  Racial restrictions on up to three attributes is increased by 6."
  },
  {
    "Trait": "Powerful Friends",
    "Penalty": 4,
    "Description": "Your character has friends that have position and/or resources and enough of a friendship with you to use them on your behalf."
  },
  {
    "Trait": "Good Reputation",
    "Penalty": 2,
    "Description": "You and your actions have been tested and found to be true.  Word gets around."
  },
  {
    "Trait": "Wealthy",
    "Penalty": 4,
    "Description": "You have a big bank account.  You start with double starting cash."
  },
  {
    "Trait": "Filthy Rich",
    "Penalty": 8,
    "Description": "You come from big money.  You start with quadruple starting cash and at least one big ticket item of your choice.  You receive regular income of some sort at the GM's discretion."
  },
  {
    "Trait": "Heightened Sense",
    "Penalty": 2,
    "Description": "One of your senses is very acute.  Related target numbers are at -2."
  },
  {
    "Trait": "Uncanny Sense",
    "Penalty": 4,
    "Description": "You can detect things normally undetectable to your species.  Examples:  See ghosts, feel the denomination of paper money, taste Iocane powder, etc."
  },
  {
    "Trait": "Human Weapon",
    "Penalty": 4,
    "Description": "Empty hand attacks have a multiplier of 2, though it is still stun damage."
  },
  {
    "Trait": "Ambidextrous",
    "Penalty": 2,
    "Description": "Equally good with both hands."
  },
  {
    "Trait": "Quick Reflexes",
    "Penalty": 2,
    "Description": "Awareness and Dexterity are effectively one higher each for the purposes of initiative, only."
  },
  {
    "Trait": "Signature Item",
    "Penalty": 2,
    "Description": "The item selected must be specialized in (pistol, gunship, violin), but the character can use that item as if the specialization were 4 points higher."
  },
  {
    "Trait": "Spell Resistant 1",
    "Penalty": 2,
    "Description": "Spells from the school chosen have a -2 success modifier."
  },
  {
    "Trait": "Spell Resistant 2",
    "Penalty": 4,
    "Description": "Spells from up to two chosen schools can divide a -4 success modifier."
  },
  {
    "Trait": "Spell Resistant 3",
    "Penalty": 8,
    "Description": "Spells from up to four chosen schools can divide a -8 success modifier."
  },
  {
    "Trait": "Quick Learner",
    "Penalty": 6,
    "Description": "Skills and Specializations up to a rating of 6 can be learned at 1/2 development point cost."
  },
  {
    "Trait": "Fast Healer",
    "Penalty": 4,
    "Description": "Healing target numbers are at -4."
  },
  {
    "Trait": "Photographic Memory",
    "Penalty": 4,
    "Description": "Perfect recall of any sensory experience with a Brain Skill check vs. 5."
  },
  {
    "Trait": "Eloquent",
    "Penalty": 2,
    "Description": "Refined and appropriate manners and speech make the character welcome in most gatherings."
  },
  {
    "Trait": "Celebrity",
    "Penalty": 4,
    "Description": "The character is a celebrity or famous in a \"household name\" kind of way.  The average Joe on the street will be \"pretty sure I've seen you before.\""
  },
  {
    "Trait": "Immune to a Metadisease",
    "Penalty": 4,
    "Description": "The character is immune to a specific metadisease, ie. Lycanthropy or Vampirism."
  },
  {
    "Trait": "Light Sleeper",
    "Penalty": 1,
    "Description": "Character is easily aware of detectable events around them while asleep.  They are permitted a perception check at +2 penalty while asleep."
  },
  {
    "Trait": "Magic Adept",
    "Penalty": 4,
    "Description": "The character is unusually capable of all things related to magic.  All target numbers related to magic are reduced by 2."
  },
  {
    "Trait": "Tech Savvy",
    "Penalty": 4,
    "Description": "The character is unusually capable of all things related to technology.  All target numbers related to advanced technology are reduced by 2."
  },
  {
    "Trait": "Pathogen resistant",
    "Penalty": 2,
    "Description": "The character is resistant to normal pathogens.  Target numbers are lowered by 4."
  },
  {
    "Trait": "Disease resistant",
    "Penalty": 2,
    "Description": "The character is resistant to normal diseases. Target numbers are decreased by 4."
  }
]
var drawbacks = [
  {
    "Trait": "Physically Weak",
    "Penalty": -2,
    "Description": "Hit Points are calculated by multiplying Constitution by 2 instead of 3."
  },
  {
    "Trait": "Mentally Weak",
    "Penalty": -2,
    "Description": "Stun Points are calculated by multiplying Fortitude by 2 instead of 3."
  },
  {
    "Trait": "Mental Illness, Mild",
    "Penalty": -1,
    "Description": "Character exhibits mild symptoms of mental illness."
  },
  {
    "Trait": "Mental Illness, Moderate",
    "Penalty": -2,
    "Description": "Character exhibits moderate unpredictable symptoms of mental illness."
  },
  {
    "Trait": "Mental Illness, Severe",
    "Penalty": -3,
    "Description": "Character exhibits severe, unpredictable, often debilitating symptoms of mental illness."
  },
  {
    "Trait": "Mental Illness, Overwhelming",
    "Penalty": -4,
    "Description": "Character is completely at the mercy of a debilitating mental illness."
  },
  {
    "Trait": "Uneducated",
    "Penalty": -4,
    "Description": "Character has never had formal education of any kind.  Beginning skill multiplier is only 7."
  },
  {
    "Trait": "Unlucky",
    "Penalty": -2,
    "Description": "Things often go awry for the character.  Twice per session must reroll a non-critical success test and take the lower result."
  },
  {
    "Trait": "Cursed",
    "Penalty": -4,
    "Description": "Significant events often end badly.  Four times per session may reroll a noncritical success test and twice per session may reroll a critical success test, taking the lower of the results."
  },
  {
    "Trait": "Dark Energy Magnet",
    "Penalty": -2,
    "Description": "Character adds 2 to the successes, per instance, of both helpful and harmful magic."
  },
  {
    "Trait": "Allergy, Mild",
    "Penalty": -1,
    "Description": "Character has a mildly adverse reaction to specified substance.  Raises target numbers by 1 while in contact."
  },
  {
    "Trait": "Allergy, Moderate",
    "Penalty": -2,
    "Description": "Character has a moderately adverse reaction to specified substance.  Raises target numbers by 2 while in contact and for (20-con) minutes afterward."
  },
  {
    "Trait": "Allergy, Severe",
    "Penalty": -4,
    "Description": "Character has a severely adverse reaction to specified substance.  Raises target numbers by 4 while in contact and for (20-con) hours afterward, receives 1hp and 1sp damage per round while in contact ."
  },
  {
    "Trait": "Allergy, Overwhelming",
    "Penalty": -6,
    "Description": "Character has a life threatening reaction to specified substance.  Raises target numbers by 6 while in contact and for (20-con) days afterward, Character takes 2hp and 2sp per round while in contact and for (20-con) rounds afterward."
  },
  {
    "Trait": "Slow",
    "Penalty": -2,
    "Description": "Specify which specialty the character must increase target number by 4.  Increasing this specialty costs an additional 2 per level."
  },
  {
    "Trait": "Idiot",
    "Penalty": -4,
    "Description": "Specify which General Skill the character must increase target numbers by 4.  All specialties under that heading have target numbers at +2.  Increases cost of increasing skill and specialty to next level by 4 and 2, respectively."
  },
  {
    "Trait": "Single Tasking",
    "Penalty": -4,
    "Description": "Any tasks other than a single primary task attempted incur twice the normal penalty."
  },
  {
    "Trait": "Unruly Temper",
    "Penalty": -2,
    "Description": "Character lets emotions on a free reign.  Interrogation, negotiating, etc. target numbers are increased by 2."
  },
  {
    "Trait": "Out-of-control Temper",
    "Penalty": -4,
    "Description": "Characters emotions are beyond their control.  Interrogation, negotiating, etc. target numbers are increased by 4."
  },
  {
    "Trait": "Flawed Specimen 1",
    "Penalty": -2,
    "Description": "How sad, your character seems to be troubled by minor racial imperfections.  Racial restriction on one attribute is reduced by 2."
  },
  {
    "Trait": "Flawed Specimen 2",
    "Penalty": -4,
    "Description": "Dear Lord, your character seems to be riddled some major racial imperfections.  Racial restriction on up to two attributes is reduced by 4."
  },
  {
    "Trait": "Flawed Specimen 3",
    "Penalty": -6,
    "Description": "Oh, my…[retch]…god!  Your character is practically an unholy abomination!  Racial restriction on up to three attributes is reduced by 6."
  },
  {
    "Trait": "Powerful Enemies",
    "Penalty": -4,
    "Description": "Your character has enemies that have position and/or resources and enough antipathy with you to use them against you."
  },
  {
    "Trait": "Bad Reputation",
    "Penalty": -2,
    "Description": "You and your actions have been tested and found to be wanting.  Word gets around."
  },
  {
    "Trait": "Strapped for cash",
    "Penalty": -2,
    "Description": "Your accountability with your money is pathetic.  You start with half your starting cash."
  },
  {
    "Trait": "Dirt Poor",
    "Penalty": -4,
    "Description": "You escaped from a dirt farm or a prison.  You start with the clothes on your back and a handful of free condiments from a restaurant."
  },
  {
    "Trait": "Handicap, Mild",
    "Penalty": -1,
    "Description": "Requires glasses, missing a finger, Stutters, etc.  Is not compensated for by technology at the start of gameplay."
  },
  {
    "Trait": "Handicap, Moderate",
    "Penalty": -2,
    "Description": "Missing an eye, one hand removed, requires frequent medicine or condition goes to next level, etc.  Is not compensated for by technology at the start of gameplay."
  },
  {
    "Trait": "Handicap, Severe",
    "Penalty": -4,
    "Description": "Blind, missing an arm or leg, Deaf, Requires constant medical care."
  },
  {
    "Trait": "Handicap, Crippling",
    "Penalty": -8,
    "Description": "Quadraplegic, Blind and Deaf, Spends most of time in Iron Lung."
  },
  {
    "Trait": "Pacifist",
    "Penalty": -2,
    "Description": "Refuses to engage in violence.  Target numbers to do so are 2 higher."
  },
  {
    "Trait": "Ambilateral",
    "Penalty": -2,
    "Description": "Equally inept with both hands."
  },
  {
    "Trait": "Slow On The Draw",
    "Penalty": -2,
    "Description": "Awareness and Dexterity are effectively one lower each for the purposes of initiative, only."
  },
  {
    "Trait": "Spell Susceptibility 1",
    "Penalty": -2,
    "Description": "Spells from the school chosen have a +2 success modifier."
  },
  {
    "Trait": "Spell Susceptibility 2",
    "Penalty": -4,
    "Description": "Spells from up to two chosen schools can divide a +4 success modifier."
  },
  {
    "Trait": "Spell Susceptibility 3",
    "Penalty": -8,
    "Description": "Spells from up to four chosen schools can divide a +8 success modifier."
  },
  {
    "Trait": "Slow Learner",
    "Penalty": -6,
    "Description": "Skills and Specializations cost 1.5 times as many development points."
  },
  {
    "Trait": "Slow Healer",
    "Penalty": -4,
    "Description": "Healing target numbers are at +4."
  },
  {
    "Trait": "Poor Memory",
    "Penalty": -4,
    "Description": "Require a Brain Skill check vs. 5 to recall average data, higher numbers for more complex data."
  },
  {
    "Trait": "Crude",
    "Penalty": -2,
    "Description": "Unrefined, rude or careless behavior can make many situations awkward or untenable."
  },
  {
    "Trait": "Addicted, Mild",
    "Penalty": -2,
    "Description": "Mild addiction to a substance, ie. Cigarettes.  +2 to target numbers if denied access to addiction.  Debilitating effects of indulgence apply.  Addiction severity may progress to next level."
  },
  {
    "Trait": "Addicted, Moderate",
    "Penalty": -4,
    "Description": "Moderate addiction to a substance, can result in debilitating behavior and mood swings.  ie. Alcohol. +4 to target numbers if denied timely access to the addiction until access to addiction is restored.  Debilitating effects of indulgence apply.  Addic"
  },
  {
    "Trait": "Addicted, Severe",
    "Penalty": -8,
    "Description": "Severe addiction to a substance, causes health risks and unacceptable behavior. ie. Meth, Crack, BTL. +8 to target numbers if denied timely access to the addiction until access to addiction is restored. Debilitating effects of indulgence apply.  Addiction severity may become fatal."
  },
  {
    "Trait": "Magical Restriction",
    "Penalty": 0,
    "Description": "A restriction that must be observed for the caster to effectively use magic."
  },
  {
    "Trait": "Antisocial, Minor",
    "Penalty": -2,
    "Description": "Prefers solitude, shuns gatherings.  Target numbers are at +2 while in a crowd."
  },
  {
    "Trait": "Antisocial, Major",
    "Penalty": -4,
    "Description": "Can't stand being around others.  Target numbers are at +4 while in the presence of others."
  },
  {
    "Trait": "Dark Secret, Minor",
    "Penalty": -2,
    "Description": "Character has a secret that is embarrassing or inconvenient and can affect their performance in certain tasks."
  },
  {
    "Trait": "Dark Secret, Major",
    "Penalty": -4,
    "Description": "Character has a secret that is huge and will hamper them severely in certain circles or tasks."
  },
  {
    "Trait": "Heavy Sleeper",
    "Penalty": -1,
    "Description": "Character can sleep through almost anything.  Perception checks while asleep are not permitted."
  },
  {
    "Trait": "Extroverted",
    "Penalty": -2,
    "Description": "Character cannot help but interact with others exuberantly."
  },
  {
    "Trait": "Compulsion, Mild",
    "Penalty": -1,
    "Description": "Similar to Addiction, the character is compelled to perform some action.  +1 to target numbers if unable to act on an opportunity."
  },
  {
    "Trait": "Compulsion, Moderate",
    "Penalty": -2,
    "Description": "Similar to Addiction, the character is strongly compelled to perform some action.  +2 to target numbers if unable to act on an opportunity and for 20 - Fortitude rounds after."
  },
  {
    "Trait": "Compulsion, Severe",
    "Penalty": -4,
    "Description": "Similar to Addiction, the character is overwhelmingly compelled to perform some action.  +4 to target numbers if unable to act on an opportunity and for 20 - Fortitude hours after."
  },
  {
    "Trait": "Pathogen Sensitive",
    "Penalty": -2,
    "Description": "Character is more susceptible to pathogens.  Target numbers are increased by 4."
  },
  {
    "Trait": "Disease Prone",
    "Penalty": -2,
    "Description": "Character is more susceptible to infection.  Target numbers are increased by 4."
  },
  {
    "Trait": "Deadened Sense",
    "Penalty": -2,
    "Description": "One of your senses is very poor.  Related target numbers are at +2."
  },
  {
    "Trait": "Unable to Use Magic",
    "Penalty": -4,
    "Description": "You have no access to casting magic.  Your target numbers to use magical devices are doubled."
  },
  {
    "Trait": "Unable to Use Technology",
    "Penalty": -4,
    "Description": "You have no ability to learn technology.  Your target numbers to use technological devices are doubled."
  },
  {
    "Trait": "Day Job",
    "Penalty": 0,
    "Description": "This is a professional job that requires professional training and a contractual obligation to show up to work regularly.  The character is alotted an additional 10 points to be spent exclusively on professional knowledge skills and specializations.  Shou"
  },
  {
    "Trait": "Prejudice",
    "Penalty": -2,
    "Description": "Character has a prejudice against a specified group.  Target numbers related to dealings with this group are +4."
  },
  {
    "Trait": "Obese",
    "Penalty": -2,
    "Description": "The character is more than just fat.  It reduces their movement and stamina rate to half.  It may make getting into confined spaces (cockpits, crawl spaces) or areas of weight sensitivity (weak floor, tree branch) difficult, dangerous or deadly."
  },
  {
    "Trait": "Morbidly Obese",
    "Penalty": -4,
    "Description": "The character is incapacitated by obesity.  Riding in a vehicle is unlikely unless it is specially constructed or has a sufficient cargo area.  Self movement is extremely limited, as are most other personal functions.  May also carry with it limitations o"
  }
]
var generalSkills=[
  {
    "General Skill": "Armed Combat",
    "Sphere": "Regimen",
    "Description": "Proficiency with melee weapons."
  },
  {
    "General Skill": "Small Arms",
    "Sphere": "Regimen", 
    "Description": "Proficiency with portable firearms."
  },
  {
    "General Skill": "Projectile",
    "Sphere": "Regimen",
    "Description": "Proficiency with ranged weapons and spellcasting."
  },
  {
    "General Skill": "Unarmed Combat (Brute)",
    "Sphere": "Brawn",
    "Description": "Proficiency of hand-to-hand combat using force and raw power."
  },
  {
    "General Skill": "Unarmed Combat (Disciplined)",
    "Sphere": "Regimen",
    "Description": "Proficiency of hand-to-hand combat using agility and martial arts."
  },
  {
    "General Skill": "Pilot, Small Vehicle",
    "Sphere": "Reaction",
    "Description": "Proficiency in controlling and operating small vehicles, such as motorcycles and cars."
  },
  {
    "General Skill": "Pilot, Heavy Vehicle",
    "Sphere": "Reaction",
    "Description": "Proficiency in controlling and operating large vehicles, such as military transport vehicles and military fighting vehicles."
  },
  {
    "General Skill": "Pilot, Boat",
    "Sphere": "Reaction",
    "Description": "Proficiency in controlling and operating aquatic vehicles, such as sailing ships and submarines."
  },
  {
    "General Skill": "Pilot, Rotorcraft",
    "Sphere": "Reaction",
    "Description": "Proficiency in controlling and operating rotary-wing aircraft, such as helicopters and tiltwings."
  },
  {
    "General Skill": "Pilot, Winged Aircraft",
    "Sphere": "Reaction",
    "Description": "Proficiency in controlling and operating fixed-winged aircraft, such as airplanes and gliders."
  },
  {
    "General Skill": "Pilot, Orbital Shuttle",
    "Sphere": "Reaction",
    "Description": "I have no idea what this is."
  },
  {
    "General Skill": "Pilot, Spacecraft",
    "Sphere": "Reaction",
    "Description": "I have no idea what this is."
  },
  {
    "General Skill": "Pilot, Mechanoid",
    "Sphere": "Reaction",
    "Description": "Proficiency in controlling and operating pilotable robots, such as light mechs and assault mechs."
  },
  {
    "General Skill": "Pilot, Powered Armor",
    "Sphere": "Reaction",
    "Description": "Proficiency in controlling and operating wearable mobile machines, such as power armor and construction armor"
  },
  {
    "General Skill": "Pilot, Self-Powered Flight",
    "Sphere": "Regimen",
    "Description": "I have no idea what this is."
  },
  {
    "General Skill": "Demolition",
    "Sphere": "Brains",
    "Description": "Proficiency in creating and handling explosives."
  },
  {
    "General Skill": "Covert",
    "Sphere": "Brains",
    "Description": "Proficiency in being unditectable by other creatures."
  },
  {
    "General Skill": "First Aid",
    "Sphere": "Brains",
    "Description": "Proficiency in providing basic medical care to any persons suffering from illness or injury."
  },
  {
    "General Skill": "Computer",
    "Sphere": "Brains",
    "Description": "Proficiency in controlling and operating electronic devices that manipulates or stores data."
  },
  {
    "General Skill": "Electronics",
    "Sphere": "Brains",
    "Description": "Proficiency in controlling and operating electronic devices that compute systems for other electronic devices."
  },
  {
    "General Skill": "Biology",
    "Sphere": "Discipline",
    "Description": "Proficiency in the study of living organisms."
  },
  {
    "General Skill": "Physical Science",
    "Sphere": "Discipline",
    "Description": "Proficiency in the study of non-living systems."
  },
  {
    "General Skill": "Natural Science",
    "Sphere": "Discipline",
    "Description": "Profiency in the study of natural phenomenons."
  },
  {
    "General Skill": "Math",
    "Sphere": "Discipline",
    "Description": "Proficiency in the study of numbers, shapes and patterns."
  },
  {
    "General Skill": "Psychology",
    "Sphere": "Discipline",
    "Description": "Proficiency in the study of the mind."
  },
  {
    "General Skill": "Sociology",
    "Sphere": "Discipline",
    "Description": "Proficiency in the study of relationships and institutions."
  },
  {
    "General Skill": "Artistry",
    "Sphere": "Discipline",
    "Description": "Proficiency in the workmanship of art."
  },
  {
    "General Skill": "Music",
    "Sphere": "Discipline",
    "Description": "Proficiency in the workmanship of sound."
  },
  {
    "General Skill": "Engineering",
    "Sphere": "Brains",
    "Description": "Proficiency in designing and building things."
  },
  {
    "General Skill": "Language (specify language)",
    "Sphere": "Discipline",
    "Description": "Proficiency in this system of communication."
  },
  {
    "General Skill": "Etiquette",
    "Sphere": "Toughness",
    "Description": "Proficiency in the politeness of conduct among certain members of society."
  },
  {
    "General Skill": "Interrogation",
    "Sphere": "Toughness",
    "Description": "Proficiency in the process of questioning a creature."
  },
  {
    "General Skill": "Persuasion",
    "Sphere": "Toughness",
    "Description": "Proficiency in the act of altering the belief of a creature."
  },
  {
    "General Skill": "Acting",
    "Sphere": "Toughness",
    "Description": "Proficiency in representing a character."
  },
  {
    "General Skill": "Leadership",
    "Sphere": "Toughness",
    "Description": "Proficiency in motivating others."
  },
  {
    "General Skill": "Strategy",
    "Sphere": "Toughness",
    "Description": "Proficiency in creating a plan to achieve a goal."
  },
  {
    "General Skill": "Gunnery",
    "Sphere": "Brawn",
    "Description": "Proficiency in handling guns and understanding the science of flight projectiles."
  },
  {
    "General Skill": "Athletics (Raw)",
    "Sphere": "Brawn",
    "Description": "Proficiency in activities that require speed and strength."
  },
  {
    "General Skill": "Athletics (Disciplined)",
    "Sphere": "Regimen",
    "Description": "Proficiency in activities that require flexibility and skill."
  },
  {
    "General Skill": "Concentration",
    "Sphere": "Discipline",
    "Description": "Proficiency in the five senses and ability to focus attention."
  },
  {
    "General Skill": "Perception",
    "Sphere": "Brains",
    "Description": "Proficiency in interpreting information."
  },
  {
    "General Skill": "Animal Handling",
    "Sphere": "Brains",
    "Description": "Proficiency in interaction with non-humanoid characters."
  },
  {
    "General Skill": "Flesh Magic",
    "Sphere": "Discipline",
    "Description": "Proficiency in the magical domain of healing and necromancy."
  },
  {
    "General Skill": "Earth Magic",
    "Sphere": "Discipline",
    "Description": "Proficiency in the magical domain of protection and conjuration."
  },
  {
    "General Skill": "Air Magic",
    "Sphere": "Discipline",
    "Description": "Proficiency in the magical domain of divination, illusion and transportation."
  },
  {
    "General Skill": "Water Magic",
    "Sphere": "Discipline",
    "Description": "Proficiency in the magical domain of enchantment and transmutation."
  },
  {
    "General Skill": "Fire Magic",
    "Sphere": "Discipline",
    "Description": "Proficiency in the magical domain of energy."
  },
  {
    "General Skill": "Alchemy",
    "Sphere": "Discipline",
    "Description": "Proficiency in the magical process of transformation, creation and combination."
  },
  {
    "General Skill": "Magic Device",
    "Sphere": "Discipline",
    "Description": "Proficiency in the crafstmanship of magical items."
  },
  {
    "General Skill": "Magic Theory",
    "Sphere": "Discipline",
    "Description": "Proficiency in the study of magic."
  },
  {
    "General Skill": "Farming",
    "Sphere": "Toughness",
    "Description": "Proficiency in growing crops and raising livestock."
  },
  {
    "General Skill": "Dodge",
    "Sphere": "Reaction",
    "Description": "Proficiency in avoiding danger."
  },
  {
    "General Skill": "Defend",
    "Sphere": "Regimen",
    "Description": "Proficiency in resisting danger."
  }
 ]

var specializations=[
  {
    "Specialization": "Club",
    "Sphere": "Physical"
  },
  {
    "Specialization": "Small Blade",
    "Sphere": "Physical"
  },
  {
    "Specialization": "Large Blade, 1 handed",
    "Sphere": "Physical"
  },
  {
    "Specialization": "Large Blade, 2 handed",
    "Sphere": "Physical"
  },
  {
    "Specialization": "Staff/Pole Arm",
    "Sphere": "Physical"
  },
  {
    "Specialization": "Whip/Flail",
    "Sphere": "Physical"
  },
  {
    "Specialization": "Taser Weapon (hand held)",
    "Sphere": "Physical"
  },
  {
    "Specialization": "Energy Weapons (hand held)",
    "Sphere": "Physical"
  },
  {
    "Specialization": "Grenade Launcher",
    "Sphere": "Physical"
  },
  {
    "Specialization": "Light Machine Gun",
    "Sphere": "Physical"
  },
  {
    "Specialization": "Pistol",
    "Sphere": "Physical"
  },
  {
    "Specialization": "Hunting Rifle",
    "Sphere": "Physical"
  },
  {
    "Specialization": "Military Rifle",
    "Sphere": "Physical"
  },
  {
    "Specialization": "Submachine Gun",
    "Sphere": "Physical"
  },
  {
    "Specialization": "Taser Weapon (ranged)",
    "Sphere": "Physical"
  },
  {
    "Specialization": "Energy Weapon (ranged)",
    "Sphere": "Physical"
  },
  {
    "Specialization": "Sonic Weapon",
    "Sphere": "Physical"
  },
  {
    "Specialization": "Crossbow",
    "Sphere": "Physical"
  },
  {
    "Specialization": "Simple Bow",
    "Sphere": "Physical"
  },
  {
    "Specialization": "Recurve Bow",
    "Sphere": "Physical"
  },
  {
    "Specialization": "Mechanical Bow",
    "Sphere": "Physical"
  },
  {
    "Specialization": "Throwing Blade",
    "Sphere": "Physical"
  },
  {
    "Specialization": "Directed Spell",
    "Sphere": "Operations"
  },
  {
    "Specialization": "Grenade",
    "Sphere": "Physical"
  },
  {
    "Specialization": "Breath Weapon",
    "Sphere": "Physical"
  },
  {
    "Specialization": "Natural Weapon (ranged)",
    "Sphere": "Physical"
  },
  {
    "Specialization": "Wrestling",
    "Sphere": "Brute"
  },
  {
    "Specialization": "Brawling",
    "Sphere": "Brute"
  },
  {
    "Specialization": "Cyber implant weapons",
    "Sphere": "Brute"
  },
  {
    "Specialization": "Intimidation (Physical)",
    "Sphere": "Brute"
  },
  {
    "Specialization": "Martial Art (specify)",
    "Sphere": "Physical"
  },
  {
    "Specialization": "Natural Weapon (melee)",
    "Sphere": "Physical"
  },
  {
    "Specialization": "Blind Fighting (melee)",
    "Sphere": "Physical"
  },
  {
    "Specialization": "Bike",
    "Sphere": "Operations"
  },
  {
    "Specialization": "Car",
    "Sphere": "Operations"
  },
  {
    "Specialization": "Hover",
    "Sphere": "Operations"
  },
  {
    "Specialization": "Military Transport",
    "Sphere": "Operations"
  },
  {
    "Specialization": "Military Fighting Vehicle",
    "Sphere": "Operations"
  },
  {
    "Specialization": "Truck/Bus",
    "Sphere": "Operations"
  },
  {
    "Specialization": "Race Boat",
    "Sphere": "Operations"
  },
  {
    "Specialization": "Small Craft",
    "Sphere": "Operations"
  },
  {
    "Specialization": "Large Vessels",
    "Sphere": "Operations"
  },
  {
    "Specialization": "Sailing",
    "Sphere": "Operations"
  },
  {
    "Specialization": "Submarine",
    "Sphere": "Operations"
  },
  {
    "Specialization": "Helicopter",
    "Sphere": "Technique"
  },
  {
    "Specialization": "Tiltwing",
    "Sphere": "Technique"
  },
  {
    "Specialization": "Prop driven",
    "Sphere": "Technique"
  },
  {
    "Specialization": "Jet, small",
    "Sphere": "Technique"
  },
  {
    "Specialization": "Jet, large",
    "Sphere": "Technique"
  },
  {
    "Specialization": "Glider",
    "Sphere": "Technique"
  },
  {
    "Specialization": "Military (specify species)",
    "Sphere": "Technique"
  },
  {
    "Specialization": "Commercial (specify species)",
    "Sphere": "Technique"
  },
  {
    "Specialization": "Research (specify species)",
    "Sphere": "Technique"
  },
  {
    "Specialization": "Recreational (specify species)",
    "Sphere": "Technique"
  },
  {
    "Specialization": "Military (specify species)",
    "Sphere": "Technique"
  },
  {
    "Specialization": "Commercial (specify species)",
    "Sphere": "Technique"
  },
  {
    "Specialization": "Research (specify species)",
    "Sphere": "Technique"
  },
  {
    "Specialization": "Recreational (specify species)",
    "Sphere": "Technique"
  },
  {
    "Specialization": "Light Mech",
    "Sphere": "Technique"
  },
  {
    "Specialization": "Medium Mech",
    "Sphere": "Technique"
  },
  {
    "Specialization": "Heavy Mech",
    "Sphere": "Technique"
  },
  {
    "Specialization": "Assault Mech",
    "Sphere": "Technique"
  },
  {
    "Specialization": "Combat Armor",
    "Sphere": "Operations"
  },
  {
    "Specialization": "Construction Armor",
    "Sphere": "Operations"
  },
  {
    "Specialization": "Aerial Combat",
    "Sphere": "Physical"
  },
  {
    "Specialization": "Aerial Dodge",
    "Sphere": "Operations"
  },
  {
    "Specialization": "Flight Endurance",
    "Sphere": "Physical"
  },
  {
    "Specialization": "IED",
    "Sphere": "Technique"
  },
  {
    "Specialization": "Bomb/Warhead Assembly",
    "Sphere": "Technique"
  },
  {
    "Specialization": "Energy Weapons (area effect)",
    "Sphere": "Technique"
  },
  {
    "Specialization": "Demolition Engineering",
    "Sphere": "Technique"
  },
  {
    "Specialization": "Hide",
    "Sphere": "Technique"
  },
  {
    "Specialization": "Move Silently",
    "Sphere": "Technique"
  },
  {
    "Specialization": "Camouflage (specify ecology)",
    "Sphere": "Technique"
  },
  {
    "Specialization": "Stealth (specify culture)",
    "Sphere": "Technique"
  },
  {
    "Specialization": "Cyber (specify culture)",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Forgery",
    "Sphere": "Technique"
  },
  {
    "Specialization": "Infiltration (specify culture)",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Sabotage",
    "Sphere": "Technique"
  },
  {
    "Specialization": "Slip Locks",
    "Sphere": "Technique"
  },
  {
    "Specialization": "Slight of Hand",
    "Sphere": "Technique"
  },
  {
    "Specialization": "Surveillance/Hunting",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Pharmacology",
    "Sphere": "Technique"
  },
  {
    "Specialization": "Internal Medicine",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Surgery",
    "Sphere": "Technique"
  },
  {
    "Specialization": "Dentistry",
    "Sphere": "Technique"
  },
  {
    "Specialization": "Forensics",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Genetics",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Neurology",
    "Sphere": "Technique"
  },
  {
    "Specialization": "Toxicology",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Veterinary Medicine",
    "Sphere": "Technique"
  },
  {
    "Specialization": "Hardware",
    "Sphere": "Technique"
  },
  {
    "Specialization": "Software",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Programming",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Networking",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Alien Systems (specify)",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Hacking",
    "Sphere": "Technique"
  },
  {
    "Specialization": "Control Systems",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Communication Systems",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Security Systems",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Vehicle Systems",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Ship Systems",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Alien Systems (specify)",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Botany",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Xeno-botany",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Zoology",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Xeno-zoology",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Quantum Mechanics",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Chemistry",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Scientific Theory",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Navigation",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Geology",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Geography",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Terraforming",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Climatology",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Astrology",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Astronomy",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Calculus",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Hypergeometry",
    "Sphere": "Mental"
  },
  {
    "Specialization": "String Theory",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Analysis/Diagnosis",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Lie Detection",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Brainwashing",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Counseling",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Intimidation (Psychological)",
    "Sphere": "Mental"
  },
  {
    "Specialization": "History (specify culture)",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Analysis",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Religion (specify culture)",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Law (specify culture)",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Philosophy (specify culture)",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Archaeology (specify culture)",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Creating (specify medium)",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Graffiti",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Evaluation",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Restoration",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Forgery",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Cooking",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Brew Alcohol",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Performance (specify)",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Directing",
    "Sphere": "Leadership"
  },
  {
    "Specialization": "Composing (specify medium)",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Evaluation",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Architecture",
    "Sphere": "Technique"
  },
  {
    "Specialization": "Maintenance (specify system)",
    "Sphere": "Technique"
  },
  {
    "Specialization": "Repair/Fabricate (specify medium)",
    "Sphere": "Technique"
  },
  {
    "Specialization": "Code breaking",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Translation (specify language)",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Corporate (specify culture)",
    "Sphere": "Leadership"
  },
  {
    "Specialization": "Matrix (specify culture)",
    "Sphere": "Leadership"
  },
  {
    "Specialization": "Media (specify culture)",
    "Sphere": "Leadership"
  },
  {
    "Specialization": "Street (specify culture)",
    "Sphere": "Leadership"
  },
  {
    "Specialization": "Military (specify culture)",
    "Sphere": "Leadership"
  },
  {
    "Specialization": "Conversation",
    "Sphere": "Leadership"
  },
  {
    "Specialization": "Machine Assisted",
    "Sphere": "Leadership"
  },
  {
    "Specialization": "Enhanced",
    "Sphere": "Leadership"
  },
  {
    "Specialization": "Alien (specify culture)",
    "Sphere": "Leadership"
  },
  {
    "Specialization": "Bartering",
    "Sphere": "Leadership"
  },
  {
    "Specialization": "Corporate Negotiation",
    "Sphere": "Leadership"
  },
  {
    "Specialization": "Governmental Negotiation",
    "Sphere": "Leadership"
  },
  {
    "Specialization": "Street Negotiation",
    "Sphere": "Leadership"
  },
  {
    "Specialization": "Intimidation",
    "Sphere": "Leadership"
  },
  {
    "Specialization": "Marketing",
    "Sphere": "Leadership"
  },
  {
    "Specialization": "Seduction",
    "Sphere": "Leadership"
  },
  {
    "Specialization": "Directing",
    "Sphere": "Leadership"
  },
  {
    "Specialization": "Bluff",
    "Sphere": "Leadership"
  },
  {
    "Specialization": "Performance",
    "Sphere": "Leadership"
  },
  {
    "Specialization": "Writing",
    "Sphere": "Leadership"
  },
  {
    "Specialization": "Deception",
    "Sphere": "Leadership"
  },
  {
    "Specialization": "Disguise",
    "Sphere": "Leadership"
  },
  {
    "Specialization": "Governmental (specify culture)",
    "Sphere": "Leadership"
  },
  {
    "Specialization": "Corporate (specify culture)",
    "Sphere": "Leadership"
  },
  {
    "Specialization": "Religious (specify sect)",
    "Sphere": "Leadership"
  },
  {
    "Specialization": "Military (specify culture)",
    "Sphere": "Leadership"
  },
  {
    "Specialization": "Military (specify culture)",
    "Sphere": "Leadership"
  },
  {
    "Specialization": "Corporate (specify culture)",
    "Sphere": "Leadership"
  },
  {
    "Specialization": "Covert (specify culture)",
    "Sphere": "Leadership"
  },
  {
    "Specialization": "Game Theory",
    "Sphere": "Leadership"
  },
  {
    "Specialization": "Gambling",
    "Sphere": "Leadership"
  },
  {
    "Specialization": "Heavy Machine Gun",
    "Sphere": "Brute"
  },
  {
    "Specialization": "Vehicle-Mounted Weapon",
    "Sphere": "Brute"
  },
  {
    "Specialization": "Missile / Rocket Launcher",
    "Sphere": "Brute"
  },
  {
    "Specialization": "Ballistic Artillery",
    "Sphere": "Brute"
  },
  {
    "Specialization": "Energy Weapon (large)",
    "Sphere": "Brute"
  },
  {
    "Specialization": "Projectile Weapon (primitive)",
    "Sphere": "Brute"
  },
  {
    "Specialization": "Climbing (free and secured)",
    "Sphere": "Physical"
  },
  {
    "Specialization": "Jumping",
    "Sphere": "Physical"
  },
  {
    "Specialization": "Lifting",
    "Sphere": "Brute"
  },
  {
    "Specialization": "Breaking",
    "Sphere": "Brute"
  },
  {
    "Specialization": "Running",
    "Sphere": "Brute"
  },
  {
    "Specialization": "Swimming",
    "Sphere": "Brute"
  },
  {
    "Specialization": "Sport (specify sport)",
    "Sphere": "Brute"
  },
  {
    "Specialization": "Scuba Diving",
    "Sphere": "Brute"
  },
  {
    "Specialization": "Riding (specify species)",
    "Sphere": "Physical"
  },
  {
    "Specialization": "Parachuting",
    "Sphere": "Brute"
  },
  {
    "Specialization": "Contortionism",
    "Sphere": "Physical"
  },
  {
    "Specialization": "Juggling",
    "Sphere": "Physical"
  },
  {
    "Specialization": "Yoga",
    "Sphere": "Physical"
  },
  {
    "Specialization": "Gymnastics",
    "Sphere": "Physical"
  },
  {
    "Specialization": "Tumbling",
    "Sphere": "Physical"
  },
  {
    "Specialization": "Riding (specify species)",
    "Sphere": "Physical"
  },
  {
    "Specialization": "Balance",
    "Sphere": "Physical"
  },
  {
    "Specialization": "Hearing",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Spot",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Search",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Taste",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Touch",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Smell",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Intuit Direction",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Maintain Spell",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Meditation",
    "Sphere": "Leadership"
  },
  {
    "Specialization": "Resist Distraction",
    "Sphere": "Leadership"
  },
  {
    "Specialization": "Deduction",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Investigation",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Read Lips",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Empathy",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Tracking",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Gambling",
    "Sphere": "Technique"
  },
  {
    "Specialization": "Veterinary (specify ecology)",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Training (specify species)",
    "Sphere": "Technique"
  },
  {
    "Specialization": "Riding (specify species)",
    "Sphere": "Technique"
  },
  {
    "Specialization": "Individual Spell (specify spell)",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Casting Flesh Magic",
    "Sphere": "Leadership"
  },
  {
    "Specialization": "Ritual Flesh Magic",
    "Sphere": "Leadership"
  },
  {
    "Specialization": "Individual Spell (specify spell)",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Casting Earth Magic",
    "Sphere": "Leadership"
  },
  {
    "Specialization": "Ritual Earth Magic",
    "Sphere": "Leadership"
  },
  {
    "Specialization": "Individual Spell (specify spell)",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Casting Air Magic",
    "Sphere": "Leadership"
  },
  {
    "Specialization": "Ritual Air Magic",
    "Sphere": "Leadership"
  },
  {
    "Specialization": "Individual Spell (specify spell)",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Casting Water Magic",
    "Sphere": "Leadership"
  },
  {
    "Specialization": "Ritual Water Magic",
    "Sphere": "Leadership"
  },
  {
    "Specialization": "Individual Spell (specify spell)",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Casting Fire Magic",
    "Sphere": "Leadership"
  },
  {
    "Specialization": "Ritual Fire Magic",
    "Sphere": "Leadership"
  },
  {
    "Specialization": "Brew Potion",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Grow Orda-Symmetric Lattice",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Transmutation",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Herbalism",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Identify Device",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Use Device/Scroll",
    "Sphere": "Leadership"
  },
  {
    "Specialization": "Craft Device/Scroll",
    "Sphere": "Leadership"
  },
  {
    "Specialization": "Identify Magic",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Dispel Magic/Counter Spell",
    "Sphere": "Leadership"
  },
  {
    "Specialization": "Craft Spell",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Scribe/Read Glyph or Circle",
    "Sphere": "Mental"
  },
  {
    "Specialization": "Veterinary (specify ecology)",
    "Sphere": "Leadership"
  },
  {
    "Specialization": "Agriculture",
    "Sphere": "Brute"
  },
  {
    "Specialization": "Subsistence",
    "Sphere": "Brute"
  },
  {
    "Specialization": "Gardening",
    "Sphere": "Brute"
  },
  {
    "Specialization": "Deflect Arrows",
    "Sphere": "Operations"
  },
  {
    "Specialization": "Maximize Cover",
    "Sphere": "Operations"
  },
  {
    "Specialization": "Detect Threat",
    "Sphere": "Operations"
  }
 ]
 