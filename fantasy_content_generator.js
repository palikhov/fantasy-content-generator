(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){module.exports={dragonborn:{male:["Arjhan","Balasar","Bharash","Donaar","Ghesh","Heskan","Kriv","Medrash","Mehen","Nadarr","Pandjed","Patrin","Rhogar","Shamash","Shedinn","Tarhun","Torinn"],female:["Akra","Biri","Daar","Farideh","Harann","Havilar","Jheri","Kava","Korinn","Mishann","Nala","Perra","Raiann","Sora","Surina","Thava","Uadjit"],last:["Clethtinthiallor","Daardendrian","Delmirev","Drachedandion","Fenkenkabradon","Kepeshkmolik","Kerrhylon","Kimbatuul","Linxakasendalor","Myastan","Nemmonis","Norixius","Ophinshtalajiir","Prexijandilin","Shestendeliath","Turnuroth","Verthisathurgiesh","Yarjerit"],templates:["{$first} {$last}"]},dwarf:{male:["Adrik","Alberich","Baern","Barendd","Brottor","Bruenor","Dain","Darrak","Delg","Eberk","Einkil","Fargrim","Flint","Gardain","Harbek","Kildrak","Morgran","Orsik","Oskar","Rangrim","Rurik","Taklinn","Thoradin","Thorin","Tordek","Traubon","Travok","Ulfgar","Veit","Vondal"],female:["Amber","Artin","Audhild","Bardryn","Dagnal","Diesa","Eldeth","Falkrunn","Finellen","Gunnloda","Gurdis","Helja","Hlin","Kathra","Kristryd","Ilde","Liftrasa","Mardred","Riswynn","Sannl","Torbera","Torgga","Vistra"],last:["Balderk","Battlehammer","Brawnanvil","Dankil","Fireforge","Frostbeard","Gorunn","Holderhek","Ironfist","Loderr","Lutgehr","Rumnaheim","Strakeln","Torunn","Ungart"],templates:["{$first} {$last}"]},elf:{male:["Adran","Aelar","Aramil","Arannis","Aust","Beiro","Berrian","Carric","Enialis","Erdan","Erevan","Galinndan","Hadarai","Heian","Himo","Immeral","Ivellios","Laucian","Mindartis","Paelias","Peren","Quarion","Riardon","Rolen","Soveliss","Thamior","Tharivol","Theren","Varis"],female:["Adrie","Althaea","Anastrianna","Andraste","Antinua","Bethrynna","Birel","Caelynn","Drusilia","Enna","Felosial","Ielenia","Jelenneth","Keyleth","Leshanna","Lia","Meriele","Mialee","Naivara","Quelenna","Quillathe","Sariel","Shanairra","Shava","Silaqui","Theirastra","Thia","Vadania","Valanthe","Xanaphia"],last:["Amakiir","Amastacia","Galanodel","Holimion","Ilphelkiir","Liadon","Meliamne","Naïlo","Siannodel","Xiloscient"],templates:["{$first} {$last}"]},gnome:{male:["Alston","Alvyn","Boddynock","Brocc","Burgell","Dimble","Eldon","Erky","Fonkin","Frug","Gerbo","Gimble","Glim","Jebeddo","Kellen","Namfoodle","Orryn","Roondar","Seebo","Sindri","Warryn","Wrenn","Zook"],female:["Bimpnottin","Breena","Caramip","Carlin","Donella","Duvamil","Ella","Ellyjobell","Ellywick","Lilli","Loopmottin","Lorilla","Mardnab","Nissa","Nyx","Oda","Orla","Roywyn","Shamil","Tana","Waywocket","Zanna"],last:["Beren","Daergel","Folkor","Garrick","Nackle","Murnig","Ningel","Raulnor","Scheppen","Timbers","Turen"],templates:["{$first} {$last}"]},halfElf:{templates:["{$humanFirst} {$humanLast}","{$elfFirst} {$elfLast}","{$humanFirst} {$elfLast}","{$elfFirst} {$humanLast}"]},halfOrc:{male:["Dench","Feng","Gell","Henk","Holg","Imsh","Keth","Krusk","Mhurren","Ront","Shump","Thokk"],female:["Baggi","Emen","Engong","Kansif","Myev","Neega","Ovak","Ownka","Shautha","Sutha","Vola","Volen","Yevelda"],templates:["{$humanFirst} {$humanLast}","{$humanFirst}","{$orcFirst} {$humanLast}","{$orcFirst}"]},halfling:{male:["Alton","Ander","Cade","Corrin","Eldon","Errich","Finnan","Garret","Lindal","Lyle","Merric","Milo","Osborn","Perrin","Reed","Roscoe","Wellby"],female:["Andry","Bree","Callie","Cora","Euphemia","Jillian","Kithri","Lavinia","Lidda","Merla","Nedda","Paela","Portia","Seraphina","Shaena","Trym","Vani","Verna"],last:["Brushgather","Goodbarrel","Greenbottle","High-hill","Hilltopple","Leagallow","Tealeaf","Thorngage","Tosscobble","Underbough"],templates:["{$first} {$last}"]},human:{male:["Aseir","Bardeid","Haseid","Khemed","Mehmen","Sudeiman","Zasheir","Darvin","Dorn","Evendur","Gorstag","Grim","Helm","Malark","Morn","Randal","Stedd","Bor","Fodel","Glar","Grigor","Igan","Ivor","Kosef","Mival","Orel","Pavel","Sergor","Blath","Bran","Frath","Geth","Lander","Luth","Malcer","Stor","Taman","Urth","Aoth","Bareris","Ehput-Ki","Kethoth","Mumed","Ramas","So-Kehur","Thazar-De","Urhur","Borivik","Faurgar","Jandar","Kanithar","Madislak","Ralmevik","Shaumar","Vladislak","An","Chen","Chi","Fai","Jiang","Jun","Lian","Long","Meng","On","Shan","Shui","Wen","Anton","Diero","Marcon","Pieron","Rimardo","Romero","Salazar","Umbero"],female:["Atala","Ceidil","Hama","Jasmal","Meilil","Seipora","Yasheira","Zasheida","Arveene","Esvele","Jhessail","Kerri","Lureene","Miri","Rowan","Shandri","Tessele","Alethra","Kara","Katernin","Mara","Natali","Olma","Tana","Zora","Ander","Amafrey","Betha","Cefrey","Kethra","Mara","Olga","Silifrey","Westra","Arizima","Chathi","Nephis","Nulara","Murithi","Sefris","Thola","Umara","Zolis","Fyevarra","Hulmarra","Immith","Imzel","Navarra","Shevarra","Tammith","Yuldra","Bai","Chao","Jia","Lei","Mei","Qiao","Shui","Tai","Balama","Dona","Faila","Jalana","Luisa","Marta","Quara","Selise","Vonda"],last:["Basha","Dumein","Jassan","Khalid","Mostana","Pashar","Rein","Amblecrown","Buckman","Dundragon","Evenwood","Greycastle","Tallstag","Bersk","Chernin","Dotsk","Kulenov","Marsk","Nemetsk","Shemov","Starag","Brightwood","Helder","Hornraven","Lackman","Stormwind","Windrivver","Ankhalab","Anskuld","Fezim","Hahpet","Nathandem","Sepret","Uuthrakt","Chergoba","Dyernina","Iltazyara","Murnyethara","Stayanoga","Ulmokina","Chien","Huang","Kao","Kung","Lao","Ling","Mei","Pin","Shin","Sum","Tan","Wan","Agosto","Astorio","Calabra","Domine","Falone","Marivaldi","Pisacar","Ramondo"],templates:["{$first} {$last}"]},tiefling:{male:["Akmenos","Amnon","Barakas","Damakos","Ekemon","Lados","Kairon","Leucis","Melech","Mordai","Morthos","Pelaios","Skamos","Therai","Thycius","Urmenos"],female:["Aranxus","Zhermos","Amrius","Valros","Zerdos","Casira","Zarcis","Kosakas","Dharxus","Guelyre","Arkvir"],templates:["{$humanFirst} {$humanLast}","{$humanFirst}","{$tieflingFirst} {$humanLast}","{$tieflingFirst}"]}}},{}],2:[function(require,module,exports){module.exports={traits:["I lost my {left/right} eye {protecting my family/in a bar brawl/hunting a great beast}.","I have an unusually {big/small} nose.","My eyes are very piercing, and bright {blue/green}.","I have thick, shaggy hair.","I am unusually tall for my race.","I am very slender.","I have a very {loud/quiet} voice.","My voice is {raspy/croaky/harsh} from years of {smoking/drinking}.","I have a {bad/mild} limp in my {left/right} leg from years serving {in the military/as a guard for nobility}.","My hands are unusually {small/large}.","I have lots of freckles.","My feet are very {small/big}.","I have a nervous twitch in my {legs/hands}.","I talk too much when I get nervous.","I am very {quick/slow} to anger.","My eyebrows are very {bushy/thin}.","I am prone to illness, and always seem to have a {cough/cold/sickness}.","I'm very clumsy.","I am germaphobic.","I am meticulous and precise in all respects.","I am deaf in my {left/right} ear.","I am deaf.","I get flashes of pain in my {left arm/right arm/left shoulder/right shoulder} from an old {dagger/arrow/sword} wound there.","I have no sense of humour.","I {never/always} remember a face.","I {never/always} remember a name.","I am scarred on my {chest/back} from an attempt on my life when I was a child.","I have an unusually {deep/high} voice.","My hair is an unusual colour for my race.","My {left/right} leg is false. I lost it {in battle/hunting the undead/fighting an evil mage/in an accident}."],desires:["I want revenge against my {X::brother/sister} for murdering our {mother/father} for {X::his/her} own financial gain.","All I desire is a home to live in and a family to care for.","I want justice for the crimes committed against my {clan/tribe/family/friends}.","I want clear my name of false wrongdoings - I didn't {murder the noble/steal the treasure/attack the guards/attack my friend}!","All I want is enough money to pay off my debts.","I want to prove myself, and escape the shadow of my {brother/sister/brothers/sisters/siblings}.","I want to prove myself in combat, so I'm going to {win a tournament/beat the local champion/join an adventuring party}.","I want to go on adventures, because {it's what my father did/it's what my mother did/I'm bored of my mundane profession}.","I want to study magic and become a grand wizard.","I want to find an ancient {sword/shield/suit of armour/gem/cloak/ring} that I was told of as a child.","I want to discover more about my ancestors.","I want to find my lost {brother/sister}.","I want to open my own {inn/blacksmiths/armoury/tavern/stable}.","I want to escape my past as a {thief/criminal/burglar/gang member}.","I want to save my friends from {slavery/prison}.","I want to prove myself to the person I love, by {winning a race/beating a rival in combat/convincing their family I am worthy}.","I want to provide for my family, but I cannot find work. Therefore, I'm planning to {rob a wealthy merchant/steal an aristocrats jewellery}.","I want to escape the bonds of my secret enslavement to a {warlock/witch/demon/Shadowfell being}.","I want to master a musical instrument.","I want to be taken more seriously by the guild of my profession...even if it means playing dirty.","I want to become a Cleric, so I can {heal the sick, like my family before me/heal my dying family member}.","I want to be free of my nagging spouse...whatever it takes.","I want to get my own back on my superior at work, who humiliates and belittles me about my {physical appearance/race/family/tribe/clan}.","I want to disappear from the law - I'm on the run for a crime I {didn't commit/did commit}.","I want to become a master of the {sword/axe/dagger} - my dream is to become a {knight/great warrior/hunter}.","I want to be free of my Warlock Patron.","I want to murder the {duke/mayor/baron} for burning down my village.","I want to travel and see the world, but I can't because of {my commitment to my family/I'm being drafted into the military/I'm scared of danger/I'm too weak}.","I want to find true love.","I want to prove to my family that I can be strong and independent.","I want to see my {brother/sister} succeed.","I want to find my {father/brother} - he left to be a {monk/cleric/priest} and I don't know where he is."]}},{}],3:[function(require,module,exports){module.exports={thorp:{population_range:"5-20",natural_landmark_count:"0-1"},hamlet:{population_range:"20-80",natural_landmark_count:"0-1"},village:{population_range:"80-400",natural_landmark_count:"0-1"},small_town:{population_range:"400-900",natural_landmark_count:"0-2"},medium_town:{population_range:"900-2000",natural_landmark_count:"0-2"},large_town:{population_range:"2000-5000",natural_landmark_count:"0-3"},small_city:{population_range:"5000-10000",natural_landmark_count:"0-4"},medium_city:{population_range:"10000-20000",natural_landmark_count:"0-4"},large_city:{population_range:"20000-50000",natural_landmark_count:"1-4"},great_city:{population_range:"50000-100000",natural_landmark_count:"2-5"},metropolis:{population_range:"100000-100500",natural_landmark_count:"3-6"}}},{}],4:[function(require,module,exports){const Names=require("./names");const Storyhooks=require("./storyhooks");const NPCs=require("./npcs");const Settlements=require("./settlements");const MagicItems=require("./magic_items");module.exports={Names:Names,Storyhooks:Storyhooks,NPCs:NPCs,Settlements:Settlements,MagicItems:MagicItems}},{"./magic_items":7,"./names":9,"./npcs":10,"./settlements":11,"./storyhooks":12}],5:[function(require,module,exports){require("../src/data/names.json");require("../src/data/npcs.json");require("../src/data/settlements.json");require("../src/loots/loots.json");require("../src/magic_items/magic_items.json");require("../src/storyhooks/npc_acts.json");require("../src/storyhooks/pc_related.json");window.FantasyContentGenerator=require("./index")},{"../src/data/names.json":1,"../src/data/npcs.json":2,"../src/data/settlements.json":3,"../src/loots/loots.json":6,"../src/magic_items/magic_items.json":8,"../src/storyhooks/npc_acts.json":13,"../src/storyhooks/pc_related.json":14,"./index":4}],6:[function(require,module,exports){module.exports={loot_source:["Humanoid (Wild)"],loot_per_loot_source:{"Humanoid (Civilised)":["sack containing {2/3/4} rations","{green/blue/red} glass bottle of {cheap/expensive/luxurious} {Dwarven/Elvish} {alcohol/wine/ale}"],"Humanoid (Wild)":["a {worn/damaged/rough/primitive} {cloth/woollen} bag of bones.","a waterskin {half-filled/fully filled} with {water/stale water/dirty water}.","{rotting/spoiled} meat wrapped in {leaves/parchment/ragged cloth/stained cloth/torn animal hide}.","{damaged/broken} manacles.","a {glass/stone} bottle of strong, harsh alcohol.","a small empty cage made of wood.","{2/3/4} corked glass bottles.","a small jar, holding {5/6/7} fireflies.","a {worn/damaged/rough/primitive} bag full of leaves & stems of an unknown plant.","a dagger. It is stained with {blood/old blood/dirt/something unknown}.","{8/9/10/12/15} arrows tied up with crude string.","a necklace made from {string/pewter chain/silver chain/rough string}.","a necklace made from {string/pewter chain/silver chain/rough string}. There is a pendant attached. The pendant is made from {jade/ebony/glass/lead/iron/copper/bronze}. It depicts the image of {Sirrion/Reorx/Chislev/Zivilyn/Lunitari/Takhisis/Sargonnas/Chemosh/Zeboim/Hiddukel}","a small, {worn/damaged/rough/primitive/weathered/stained} bag of jewellery. Inside is a small collection of rings, necklaces, several earrings and a brooch.","a crude animal cage. Inside there are {2/3} live {rats/mice/bats/squirrels}.","a crude animal cage. Inside there is a live {rat/mouse/bat/squirrel}.","a book. It is badly water damaged, and it's pages cannot be read.","several severed fingers, wrapped in bloody {cloth/fabric}. The fingers appear to be {Dwarven/Elvish/Orcish/Human}.","a small animal skull, floating in a glass jar filled with {salt water/oil}.","the skull of an {Elf/Dwarf/Orc/Gnoll/Tiefling/Human}. It is partially covered in a dark stain.","a small, {stone/wooden} box. It is empty. On the lid, there is a carving of {an eye/a sword/the sun/the moon/a religious symbol}.","a small bag, containing what appears to be a crude {dice game/card game/collection of figurines}. ","a sack of torn up clothing.","a length of rope, measuring {20/30/40}ft in total.","a length of {primitive/badly wound/crusty, stained} rope, measuring {20/30/40}ft in total.","{2/3/4} jars of oil tied together with {rough/fraying} twine. The jars are secured with {bronze/copper/iron} lids.","a collected set of {2/3} ornate, sharpened daggers. They appear to be made from {a hard, black wood/glass/granite}.","a small set of {iron/bronze/copper} rods, instruments. Many of the pieces are {bent out of shape/badly rusted/cracked}. With some cleaning and repair, they could work as a set of Thieves Tools.","a stack of stained, water damaged parchments. Many of the sheets appear to have {Dwarvish/Elvish/Goblin/Draconic/Abyssal} script on them. With care, {15/17/19/20} of the parchments can be salvaged.","a rusty, {copper/iron}, oil lamp. It leaks, and appears to be {Dwarvish/Elvish/Human} made. With some repair, it could be made fully functional.","a badly tarnished crowbar. The flattened end is covered in a dark {red/black} stain.","a silver hand mirror. It is badly {cracked/tarnished}.","{2/3}lbs of salted meat, wrapped in {cloth/parchment}.","a {glass/stone} jar of acid. The jar's lid is badly fitting, and the acid bubbles and froths as it moves. A {skull/symbol of fire/warning written in Dwarvish} is etched onto the side of the jar.","a small, crude chest. It is filled with {apples/partially rotten apples/cooked meats/skulls/empty glass vials}. The chest {has a broken hinge/appears to be badly burnt}.","{3/4} vials of basic Poison in a scuffed leather pouch. ","a bedroll. It is covered in a large, dark stain, but is in otherwise good condition.","a bedroll. It has several gashes down its length, but could be repaired.","{3/4} pots and pans of various sizes, tied together with {crude/rough} rope.","a note written in {Draconic/Abysmal/Ocrish} script. Some deciphering will show that is appears to be list of commands, focusing on {stealing livestock/ransacking a local settlement/attacking travellers for their wares}.","an unholy symbol of {Cyric/Talos/Umberlee}. It is covered in dried blood, and stings when a good creature touches it.","a badly {water damaged/burned/torn} spellbook. Though mostly unintelligible, some deciphering shows the book {belongs/belonged} to a {wizard/witch} specialising in {Conjuration/Divination/Transmutation}.","crude fishing supplies, including a box of maggots, several {rusty/bent} hooks and a {10/12/15}ft length of wire.","a set of clothes, appearing {Dwarvish/Elvish/Human/Halfling} in size and design. They appear {partially burnt/wet and ragged}, and have a large, black stain on the chest.","a corked vial of cloudy, {crimson/charcoal/green/teal} coloured liquid. The vial is wrapped in {cloth/fabric} inside a leather pouch. The leather pouch has a {skull/symbol of Bhaal/symbol of Kelemvor/symbol of Myrkul} etched onto it. Investigation will reveal the liquid to be a dosage of {Assassin’s blood/Crawler mucus/Drow poison/Essence of ether/Malice/Pale tincture/Serpent venom}. ","{2/3} torches, tied together with rope.","a large {stone/bronze/iron} jar with a fastened lid, which is then secured even further with tightly would twine. Inside the jar is a live {tarantula/rat/snake/giant millipede}.","a crudely fashioned hunting trap. It is made of {blackened/gnarled} wood and jagged {iron/steel} {hooks/spikes}. It could be used to trap small creatures, such as boar or deer.","a set of badly maintained scientific instruments, including a compass, measuring rods, quills and ink. With some repair, they could form a Cartographer's toolkit.","the skull of a {Dwarf/Elf/Human/Tiefling/Halfling}. It has been cleaned and bleached white, and has a large, drilled hole in the centre of the crown. {Symbols of Bhaal/Symbols of Cyric/Symbols of Talos/Several Abysmal symbols/Several Draconic symbols} are crudely carved into the temples."],Beast:["broken {fangs/claws/talons}"],Undead:["pieces of rotting flesh","damaged {amour/weapons/ammunition}"]}}},{}],7:[function(require,module,exports){const MagicItemData=require("./magic_items.json");const Utils=require("../utils");const Names=require("../names");const _type=()=>Utils.pick(MagicItemData.types);const _powerLevel=()=>Utils.pick(MagicItemData.power_levels);const _schoolOfMagic=type=>{if(type==="weapon"){return Utils.pick(Object.keys(MagicItemData.school_weapon_effects_per_level))}return Utils.pick(MagicItemData.schools_of_magic)};const _effects=(schoolOfMagic,powerLevel)=>{const effectsCount=Utils.parseTemplate(MagicItemData.item_effects_per_level[powerLevel]);return Utils.pick(MagicItemData.school_weapon_effects_per_level[schoolOfMagic][powerLevel],effectsCount,true).map(Utils.parseTemplate)};const generate=props=>{if(props==null){props={}}const type=props.type?props.type:_type();const powerLevel=props.powerLevel?props.powerLevel:_powerLevel();const schoolOfMagic=props.schoolOfMagic?props.schoolOfMagic:_schoolOfMagic(type);const effects=props.effects?props.effects:_effects(schoolOfMagic,powerLevel);const subtype=Utils.pick(MagicItemData.subtypes[type]);const formattedData={};if(powerLevel==="supreme"){formattedData.owner=Names.generate()}formattedData.title=`${subtype} of ${Utils.titleCase(powerLevel)} ${Utils.titleCase(schoolOfMagic)}`;return{type:type,subtype:subtype,powerLevel:powerLevel,schoolOfMagic:schoolOfMagic,effects:effects,formattedData:formattedData}};const functions={generate:generate};module.exports=functions},{"../names":9,"../utils":15,"./magic_items.json":8}],8:[function(require,module,exports){module.exports={types:["weapon"],subtypes:{weapon:["Club","Dagger","Greatclub","Handaxe","Javelin","Light Hammer","Mace","Quarterstaff","Sickle","Spear","Battleaxe","Flail","Glaive","Greataxe","Greatsword","Halberd","Lance","Longsword","Maul","Morningstar","Pike","Rapier","Scimitar","Shortsword","Trident","War Pick","Warhammer","Whip"]},power_levels:["minor","lesser","greater","supreme"],schools_of_magic:["abjuration","conjuration","divination","enchantment","evocation","illusion","necromancy","transmutation"],item_effects_per_level:{minor:"{0/0/1}",lesser:"{0/0/1/1}",greater:"{0/1/1/1}",supreme:"{1/1/1/1}"},school_weapon_effects_per_level:{conjuration:{minor:["This weapon has {2/3} charges. While holding this weapon, the wielder can expend a charge to cast {Acid Splash/Poison Spray/Produce Flame} as though they were 1st level. The charges are regained at dawn."],lesser:["This weapon has {2/3/4} charges. While holding this weapon, the wielder can expend a charge to cast {Acid Splash/Poison Spray/Produce Flame} as though they were 5th level. The charges are regained at dawn.","On a successful attack, the target must make a DC 14 CON save. On a failure, the targets mouth and stomach is suddenly filled with monstrous {slugs/worms/beetles/insects/maggots}, and they begin to vomit and cough uncontrollably. The target can take no action other than movement for 1d4 turns.","On a successful attack, magical {vines/tentacles/ropes} erupt from the weapon, wrapping themselves around the limbs and joints of the targets. The target must make a DC 13 DEX save. On a failure, for 2d4 turns the target's max speed is reduced to 10 ft per turn and they have disadvantage on attack rolls"],greater:["This weapon has {3/4} charges. While holding this weapon, the wielder can expend a charge to cast {Acid Splash/Poison Spray/Produce Flame} as though they were 11th level. The charges are regained at dawn.","On a successful attack, the target must make a DC 12 WIS save. On a failure, the target blinks out of existence, and reappears 2d12 feet away. Direction of teleportation is determined by rolling 1d8. If the target reappears inside solid matter, their body replaces the matter. However, the target can become stuck in this manner (for example, reappearing with their leg inside a boulder)."],supreme:["This weapon has 4 charges. While holding this weapon, the wielder can expend a charge to cast {Acid Splash/Poison Spray/Produce Flame} as though they were 17th level. The charges are regained at dawn.","This weapon has 2 charges. The wielder can expend a charge to load the blade with a crackling, screeching heat, and the steel becomes a shade of {maroon/violet}. The wielder can use the weapon to carve into space itself, creating a freestanding portal in the air. This portal acts as if created by the spell Arcane Gate. There can only ever be 2 portals present - if a 3rd is opened, the 1st closes. The charges are regained at dawn.","Once per day, the wielder of this weapon can speak the ancient words and make a sacrifice of blood in order to unleash the weapons power. Lose 2d4 HP, and cast the spell Hunger of Hadar.","This weapon has 1 charge. On a successful attack, the wielder can expend a charge to displace the essence of the target. The target must make a DC 18 WIS save. On a failure, the target is transported to the {Feywild/Shadowfell} plane. The charge is regained at dawn"]},enchantment:{minor:["This weapon has {2/3} charges. While holding this weapon, the wielder can expend a charge to cast Vicious Mockery as though they were 1st level. The charges are regained at dawn."],lesser:["This weapon has {2/3} charges. While holding this weapon, the wielder can expend a charge to cast Vicious Mockery as though they were 5th level. The charges are regained at dawn.","On a successful attack, target must make a DC 14 WIS save. On a failure, their mind is clouded with terrifying visions. They have disadvantage on all attack rolls for {2/3}d4 rounds.","On a successful attack, target must make a DC 14 WIS save. On a failure, their thoughts are swamped with intense emotions of fear, panic and sorrow. They are unable to make hostile or aggressive actions for 1d6 rounds."],greater:["This weapon has {2/3} charges. While holding this weapon, the wielder can expend a charge to cast Vicious Mockery as though they were 11th level. The charges are regained at dawn.","On a successful attack, targets must make a DC 16 WIS save. On a failure, the target becomes Paralyzed for {2/3}d4 rounds.","is weapon has {2/3} charges. On a successful attack, the wielder can expend a charge to swamp the target’s mind with thoughts of jealousy and anger. On the target’s next turn, they must try and attack an ally, to the reasonable best of the target’s ability. The charges are regained at dawn."],supreme:["This weapon has {2/3} charges. While holding this weapon, the wielder can expend a charge to cast Vicious Mockery as though they were 17th level. The charges are regained at dawn.","This weapon has {2/3} charges. On a successful attack, the wielder can expend a charge to cast Confusion at 4th level. The spells point of origin is the target. If allies are inside the sphere, the wielder can choose to make them exempt from the effect. The charges are regained at dawn"]},evocation:{minor:["This weapon has {2/3} charges. The wielder can expend a charge to cast {Eldritch Blast/Fire Bolt/Frostbite} as though they were 1st level. The charges are regained at dawn"],lesser:["This weapon has {2/3} charges. The wielder can expend a charge to cast {Eldritch Blast/Fire Bolt/Frostbite} as though they were 5th level. The charges are regained at dawn","On a successful attack, embers and flames erupt from the target at the point where the weapon made contact. Target takes an additional {2/3}d4 of Fire damage.","Twice a day, you can thrust the weapon into the ground beneath you, sending out magical shockwaves. This has the effect of casting Thunderwave at 1st level"],greater:["This weapon has {2/3} charges. The wielder can expend a charge to cast {Eldritch Blast/Fire Bolt/Frostbite} as though they were 11th level. The charges are regained at dawn","The blade of this weapon crackles with {electrical/magical/eldritch} energy. When swung in front of a group of creatures, {X::2/3/4} of the creatures are struck with bolts of energy. Each affected creature takes 3d4 Lightning damage, and becomes Paralyzed for 2 rounds."],supreme:["This weapon has {2/3} charges. The wielder can expend a charge to cast {Eldritch Blast/Fire Bolt/Frostbite} as though they were 17th level. The charges are regained at dawn"]},illusion:{minor:["This weapon has {2/3} charges. The wielder can expend a charge to cast Minor Illusion as though they were 1st level. The charges are regained at dawn"],lesser:["This weapon has {2/3} charges. The wielder can expend a charge to cast Minor Illusion as though they were 5th level. The charges are regained at dawn","On a successful attack, embers and flames erupt from the target at the point where the weapon made contact. Target takes an additional {2/3}d4 of Fire damage."],greater:["This weapon has {2/3} charges. The wielder can expend a charge to cast Minor Illusion as though they were 11th level. The charges are regained at dawn","On a successful attack, the target must make a DC 16 WIS save. On a failure, they see lifelike bugs and insects pouring out of the wound inflicted by the attack, and become frightened for 1d8 turns. The source of the fear is the weapon itself."],supreme:["This weapon has {2/3} charges. The wielder can expend a charge to cast Minor Illusion as though they were 17th level. The charges are regained at dawn"]},necromancy:{minor:["On a successful attack, target must make a DC 12 CON save or take an extra {1d2/1d3} of {Necrotic/Chill} damage. This effect occurs once per day","On a successful attack, target must make a DC 12 CON save. On a failure, the target's youth is sapped, stiffening their joints and aging their skin. It has has disadvantage on all DEX saves for 1 minute"],lesser:["On a successful attack, target must make a DC 14 CON save or take an extra {1d6/2d4} {Necrotic/Chill} damage. This effect occurs once per day","On a successful attack, target must make a DC {14/15/16} CON save or gain 1 point of Exhaustion","On a successful attack, target must make a DC {14/15} CON save or lose {2/1d4} HP, and the attacker gains that much HP","On a successful attack, {sickly/black/dark} energy strikes all creatures of the wielders choosing in a {20/25/30}ft radius. All targets must make a DC {14/15} CON saving throw. Any failures become Deaf for {2d4} turns."],greater:["On a successful attack, target must make a DC 16 CON save or take an extra {2/3}d{6/8} {Necrotic/Chill} damage. This effect occurs once per day","On a successful attack, {sickly/black/dark} energy strikes all creatures of the wielders choosing in a {15/20/25}ft radius. All targets must make a DC {15/16} CON saving throw. Any failures become Blind for {2d4} turns.","On a successful attack, {sickly/black/dark} energy {strikes/slams into/seeks out/rushes into} all targets of the wielders choosing in a {20/25/30}ft radius. All targets must make a DC 16 CON saving throw. Any failures take {2/3}d4 Necrotic damage.","While wielding this weapon, the holder can cast Inflict Wounds at base level {2/3} times/day","This weapon has {3/4} charges. On a successful attack, the wielder can expend a charge to sap the life energy from the target to regain health. The number of Hit Points restored is equal to the damage inflicted by the weapon. The charges are regained at dawn"],supreme:["On a successful attack, target must make a DC 18 CON save or take an extra {3/4}d{10/12} {Necrotic/Chill} damage. This effect occurs once per day","If a creature is killed with this weapon, they are raised as undead in 1d10 turns. The raised creature acts as if raised by the Create Undead spell cast at base level","This weapon has 1 charge. On a successful attack, the wielder can expend a charge to send oily black roots digging through the targets body into their skull. The target must make a DC 14 CON save. On a failure, they become permanently {Blind/Deaf}.","While wielding this weapon, the holder can cast {Blight/Contagion} at base level {once/twice} per day","Whenever a creature looks at this weapon, they must make a DC {14/15/16} WIS save. On a failure, the creature becomes Frightened for 2d4 turns. The creature re-try the saving throw after these turns. A success renders the creature immune to the effect for 24 hours"]},transmutation:{minor:["This weapon has {2/3} charges. The wielder can expend a charge to cast Thorn Whip as though they were 1st level. The charges are regained at dawn"],lesser:["This weapon has {2/3} charges. The wielder can expend a charge to cast Thorn Whip as though they were 5th level. The charges are regained at dawn"],greater:["This weapon has {2/3} charges. The wielder can expend a charge to cast Thorn Whip as though they were 11th level. The charges are regained at dawn","This weapon has {2/3} charges. On a successful attack, the wielder can expend a charge to trigger the effect. The target must make a DC 15 {WIS/CON} save or be transmuted into {wood/stone/rock/clay} for {1/2/3}d4 minutes. While transmuted, the target has the Petrified condition. The charges are regained at dawn"],supreme:["This weapon has {2/3} charges. The wielder can expend a charge to cast Thorn Whip as though they were 17th level. The charges are regained at dawn","On a successful attack, the target must make a DC 18 WIS check. On a failure, the creature feels stinging, ice cold energy coursing through their veins. The creature becomes Petrified","This weapon has 2 charges. While holding this weapon, the wielder can expend a charge to cast the spell Gaseous Form on themselves or an ally. The charges are regained at dawn"]}}}},{}],9:[function(require,module,exports){const Utils=require("../utils");const Data=require("../data/names.json");const _generate=props=>{if(!props){props={}}let{race:race,gender:gender}=props;if(race==null){race=Utils.pick(Object.keys(Data))}if(gender==null){gender=Utils.pick(["male","female"])}const raceTemplates=Data[race].templates;if(!raceTemplates){throw new Error(`could not find race templates for ${race}`)}const template=Utils.pick(raceTemplates);switch(race){case"dragonborn":case"dwarf":case"elf":case"gnome":case"halfling":case"human":return Utils.parseTemplate(template,{first:Utils.pick(Data[race][gender]),last:Utils.pick(Data[race].last)});case"halfOrc":return Utils.parseTemplate(template,{humanFirst:Utils.pick(Data.human[gender]),humanLast:Utils.pick(Data.human.last),orcFirst:Utils.pick(Data.halfOrc[gender])});case"halfElf":return Utils.parseTemplate(template,{humanFirst:Utils.pick(Data.human[gender]),humanLast:Utils.pick(Data.human.last),elfFirst:Utils.pick(Data.elf[gender]),elfLast:Utils.pick(Data.elf.last)});case"tiefling":return Utils.parseTemplate(template,{humanFirst:Utils.pick(Data.human[gender]),humanLast:Utils.pick(Data.human.last),tieflingFirst:Utils.pick(Data.tiefling[gender])})}};const sanitise=name=>{return name};const generate=props=>{const name=_generate(props);return sanitise(name)};const functions={generate:generate};Object.keys(Data).forEach(race=>{functions[race]=(props=>{if(props==null){props={}}props.race=race;return generate(props)})});module.exports=functions},{"../data/names.json":1,"../utils":15}],10:[function(require,module,exports){const Names=require("../names");const Utils=require("../utils");const NameData=require("../data/names.json");const NPCData=require("../data/npcs.json");const generate=(props={})=>{const race=props.race?props.race:Utils.pick(Object.keys(NameData));const gender=props.gender?props.gender:Utils.pick(["male","female"]);const name=Names.generate({race:race,gender:gender});const traits=Utils.pick(NPCData.traits,2,true).map(Utils.parseTemplate);const desires=Utils.pick(NPCData.desires,1,true).map(Utils.parseTemplate);const formattedData={name:name,gender:Utils.titleCase(gender),race:Utils.formatRace(race),traits:traits,desires:desires};return{name:name,gender:gender,race:race,traits:traits,desires:desires,formattedData:formattedData}};const functions={generate:generate};module.exports=functions},{"../data/names.json":1,"../data/npcs.json":2,"../names":9,"../utils":15}],11:[function(require,module,exports){const Utils=require("../utils");const SettlementData=require("../data/settlements.json");const settlementType=()=>Utils.pick(Object.keys(SettlementData));const population=type=>{const populationRange=SettlementData[type].population_range.split("-");const population=Utils.rand(parseInt(populationRange[0]),parseInt(populationRange[1]));return population.toLocaleString()};const generate=(props={})=>{const type=props.type?props.type:settlementType();return{type:type,population:population(type)}};const functions={generate:generate};module.exports=functions},{"../data/settlements.json":3,"../utils":15}],12:[function(require,module,exports){const Utils=require("../utils");const generate=storyhookBank=>{const storyhooks=require(`./${storyhookBank}.json`);return Utils.parseTemplate(Utils.pick(storyhooks))};const functions={npcActs:()=>{return generate("npc_acts")},pcRelated:()=>{return generate("pc_related")}};module.exports=functions},{"../utils":15}],13:[function(require,module,exports){module.exports=["An NPC takes a {disliking/liking} to {a PC/another NPC}","An NPC is caught palming a weapon by the PCs","An NPC shuffles nervously and suspiciously","An NPC becomes {fearful/angry/scared/terrified}","An NPC {insults/threatens} {a PC/another NPC}"]},{}],14:[function(require,module,exports){arguments[4][13][0].apply(exports,arguments)},{dup:13}],15:[function(require,module,exports){const pick=(array,count=1,returnAsArray=false)=>{const arrayCopy=Array.from(array);const pickedValues=[];for(let i=0;i<count;i++){let pickedIndex=rand(0,arrayCopy.length-1);pickedValues.push(arrayCopy[pickedIndex]);arrayCopy.splice(pickedIndex,1)}return pickedValues.length===1&&returnAsArray===false?pickedValues[0]:pickedValues};const parseTemplate=(string,content={})=>{const regex=/{(.+?)}/gm;const matches=string.match(regex);const linkedPlaceholderIndexes={};if(matches){matches.forEach(match=>{const linkedPlaceholderMatches=/{(.+?)::(.+?)}/gm.exec(match);if(linkedPlaceholderMatches){const rawLinkToken=linkedPlaceholderMatches[1];if(linkedPlaceholderIndexes[rawLinkToken]!=null){let replacement=linkedPlaceholderMatches[2].split("/")[linkedPlaceholderIndexes[rawLinkToken]];string=string.replace(match,replacement)}else{const allPlaceholderChunks=linkedPlaceholderMatches[2].split("/");const newIndex=rand(0,allPlaceholderChunks.length-1);let replacement=allPlaceholderChunks[newIndex];linkedPlaceholderIndexes[rawLinkToken]=newIndex;string=string.replace(match,replacement)}}});matches.forEach(match=>{if(match.charAt(1)==="$"){replacementVarName=match.substring(2,match.length-1);string=string.replace(match,content[replacementVarName])}else{let replacement=pick(match.substring(1).substring(0,match.length-2).split("/"));string=string.replace(match,replacement)}})}return string};const rand=(min,max)=>{min=parseInt(min);max=parseInt(max);return Math.floor(Math.random()*(max-min+1))+min};const forCount=(number,func)=>{for(let i=0;i<number;i++){func()}};const titleCase=string=>string.replace(/\w\S*/g,function(txt){return txt.charAt(0).toUpperCase()+txt.substr(1).toLowerCase()});const formatRace=race=>{switch(race){case"halfOrc":return"Half-Orc";case"halfElf":return"Half-Elf";default:return titleCase(race)}};module.exports={pick:pick,parseTemplate:parseTemplate,rand:rand,forCount:forCount,titleCase:titleCase,formatRace:formatRace}},{}]},{},[5]);