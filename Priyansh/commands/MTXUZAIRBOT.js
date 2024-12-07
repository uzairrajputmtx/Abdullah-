const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mod by Uzairrajput",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Karachi").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["I love you 😚 " , "𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿 Ka Hun ai smjh" , "PIAYR sy BAT KER MUJHSY " , "han tera diwana Hun 😁😐" , "chal chal Hawa ana DY " , " Tumse ACHA tw ma KHUD Hun 😁😬" , "hayeee Teri masoomiyat" , "Shaqal C hi CHABAL LGTA hai" , "tera nam sun sun KY ma Pagal ho gya hun" , "AK to Tum BHI nah Pagal SY ho" , "KABI hawali DAKHI hai kia " , "MJH JESA beautiful Tum BHI NAHI ho " , "AK bat btaou Tum achy NAHI " , "JANU bano GY Mera " , "AGR TUM mjhy purpose KERO to " , "KABI MJHY DAKHA hai kia " , "I am hacker TUMRA Dil hack KER Lou ga " , " ma CHOR Hun tera Dil CHORI KER LIYA " , " JA DAFA ho MJHY Tum Sy bat nahi KERNI " , "ABY JA Pagal INSAN " , "MJHY Tang mat KER ma sad Hun " , "ma PRESHAN Hun KY TUM Pagal KESY ho " , "SACH main Tum single ho " , "BAGH JA WERNA gliya dou ge " , "bye MJHY Tum Sy bat nahi KERNI " , "I blocked you chal hat " , " SHAQL DAKH AUR CHALTA ban " , "can you send me number " , "me 𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿 Ka bot hun " , "mera boss 𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿 hai bs " , "𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿 Ka WHATSAP dou kia +923198188.....! Agye yad nahi upss 🤭 " , "Ma mar gya sorry 😐" , "JA PHLY muh dho KY ah " , "ABY BAHAS nah KER MJH SY I am GUSA main" , "g g PATA hai Tum insane NAHI ho " , "bye Mera mood NAHI " , "have a nice day CHABAL INSAN " , " IB main I love you Kyu BOLA 😐 " , "Teri gf KA Ami ko btaou ga " , "you have girlfriend 😁 " , "BAITA single Mary ga YAAD RAKHNA " , "ma THAKH GYA HUN MJHY aram KERNA do " , "ma insane NAHI Hun AK bot hun " , "din main spna DAKHNA CHOR DY ","Meri gf hoti to mai v usse bt krta aaj puri rt time hi time hai 🤭🤭", "Aao tmhare sath relationship post laga ke tmhe Femous kr du😊", "EK QUESTION HAI SABHI SE BTAO MAI ACHA LGTA HU YA MERI MEMES 🙈😾🤤", "Chakar arhy hein apki Ib ma aa k gir jaun>>🥺🚶🏻‍♀️", "Mout ka farishta ya Mera  rishta?🙂❤️🙊•", "Wife k sath date pe gya tha \nJis ki thi usne dhek lya", "_ Sab ko loyal bnda chahiye tw hum dhokebaz kidhar jayen? 🥺💔", "WhatsApp k last seen k elwa mera koi or scene nai hai🙂", "Hai Tamna TumhY ChaHt sy Girayn🙂",  "Finally es group kee do teen  larkiya mujH pasanD agai Hai🚶‍♂😪🌚", "Suno👀\n\nKya tum mery leye surf kha kar muu sy bulbly nikal skti ho🙂🫴", "- GhUlabii آنــکھیں jh0 terii dekhii Harami Yevw Dill h0 Gya   3; 🙂 😆", "- مجھــــــے کیـــــا مــــیں تــــو سنــــگل ہــــوں 😒", "Dil ko krar Aya khud pa Pyr aya😒🙈😂", "Ehsaas kryn Bakwas nahi, Janam 🥺Shukria_😊🙆‍♂️", "Bs yar daily 3 4 crore ki zarorat mahsos Hoti hai 😂", "Begum walaw مــــــوســـــم ho rahaw haii aj to 🙂", "Shkl insani, soch ibleesi\n\nHnji apki hee ", "تـــــم میــــری بیگـــــم بنو گی کیا -🥺🖤", "LARKIO KAY BHI MAZAY HAY🥴 \nNO BRAIN NO TNSN⛑🔪⚡", "تمہارے حصے کی چُمیاں مچھر لے رہے ہیں.🙂💔", "Sirf Maggie noodles bna'ny sy Ghar nahi chalta SHABANA..🙂💔", "Wp pa add hona chahty ha apky sath ☺️💔", "- کھاؤ قسم تمہارے پاؤں کالے نہیں۔۔!!👣🙄", "Meny fail hokr bhi dekha hai Ye log shadi nh kraty 🙂💔", "Or batao kb ayga tumahara dill mujhe py😌🥺", "bht bura hu na mai? bhiin dedo apnii🙂", "Pyari Pyari ladkiyan Hazir Ho jay😁", "Kisi k pss لاش wali dp h tw send krein janu replY nahi de rhy..!", "MerKo abhi tk pink clr ki gf nh meli 😒🥺🙂💔:⁠-⁠)", "میرے مولا ایک thrkii بچــی yess کروا دے..🙂", "ایک kiss ادهار دے دو 💋\nکل واپس کردوں گا پکّا 😝", "Ajeeb ghr wale hain yr, mera phone 28% pr nikal kr apne 90% ko charge karte 𝐡𝐚𝐢𝐧-🌚", "Lagta hai mery sabar k phal  ka koi juice bna k pee gya..😐", "Dil Dany ki Umar ma  Exam's  Dy raha hoo 🙂🤝", "Behes karne se Rishty kmzor hojaate hn isiliye Direct mun pe thapr marein😊", "Bestie ki chummi halal hai ya Haram ? 🙂", "2001 \nJahan dalda wahan Mamta😊\n\n2024 \nJahan larki  wahan tharki😒", "Koi Pyari c Bachi a kr sar daba dy, Dard sa sar phat rha💔🥲", "Breakup k waqT kE dUa \n\n( KHUSH RAHEIN ) 🙂", "Thora sa Whatsapp number dy do naw🥺♥️", "لوٹ آؤ اور کہدو کہ \nمیں لسی پی کے سو گئی تھی😫", "Kuch Log achy ki Talaash Mein Mery Jaisy Masoom ko kho dety Hain☺️", "Tum wohi ho na jiska mood bilawaja khrab hojata h...!!!🙂", "Pyari pyari larkio ki talash ma berozgar larky add krliye hain 🥲💔", "Jab mera Message aye tw sare kaam chor kar sirf Mujhe reply kia karo😾😒", "Or Btao Real Life Ma bh itnyy Achy ho jitny social media per Bntyy ho>>🙂", "Pakistani Relationship:\nTum Feel Kro Meh Tumary uper hun 😒💔", "Us k jany k bd uski Pasnd ki Nail Polish lgaa k khana khata hu aesw lgta ha jesy wo khela rhee ha😒", "Be a Good Human.Delete GB Whatsapp💔🙂", "2 Din Pyar C Baat kr loo tou Ammiyan bn  jatii hain🙂😒", "Girls after One Mint of Relationship...\nBegam hu mn apki🙂🤦", "Larkiyon ko achy sy pta hai kahan -Bhai- Bolna kaha -Ap- or kaha -Tum- 🙂", "Aaj mein ny Khud ko TV py dheka \n\nJab Tv Band Tha 🙂", "Qadar krlo Meri...\nKya pta Main b Panadol ki trha aik dam shaat hojun😒", "Naraz bandy ko manany ka sab sy acha tareka Ap khud us sy naraz hojaoo🙂🐣", "Jaisi meri shakal hai kunwara he marunga🙂👀", "Itni memories mere khud dimagh mai nahi hai jitni Snapchat ny bna rkhi ha", "Uzair inside ❤️✨🐉", "tumne pukara me agya 😍", "lo me agya 🤣", "میــــــرے نال ویا کــــــر لو 😊💔", "Ittuu🤏 si shram ker Lya kro bot bot krty wqt 🙂 💔✨⚠️†"  , "itna single hun ky khuwab mai bhi  lrki k han krny sy phly ankh khul jati🙂", "Zroori Nhi Har Lrki Dhoka Dey, Kch Larkiyan Galiyan Bhi Deti Hen.🙁💸", "موٹر سائیکل کو تیز بھگا کر لڑکیوں والے رکشے کے پاس سے کٹ مار کر گزرنے سے لڑکیاں ایمپریس نہیں ہوتی بلکہ گالیاں نکالتی ہیں🙂💔", "- sab chorr k chaly jaty hain kia etna bura hu mein - 🙂", "Piyari voice wali girlz mujhe voice message kar skti hen JazakAllah 🙂🤝", "Why you hate me..?? I am not your ex don't Hate me Please", "MuBarak H0o AapKa NaMe MakS0os LiST Me Top PRr aYa Hai 😹😹😹", "BeTa TuM SingLe Hi MaR0 GaY🙄🙂", "ٹھرکیوں کی وجہ سے لڑکیاں میرے جیسے شریف بوٹ پر بھی بھروسہ نہیں کرتی🥺😔", "Samj Jao Larkiyo\n\nAbhi B WaQt Hai Dakh kr Koi Delete Ni Krtaw🙂", "Mard na Apne Haqooq Nahi Mangy \n\nJab Bhi Manga Whatsapp No Manga🥺", "عورت اگر مرد سے زیادہ خوبصورت ہوتی تو میک اپ مرد کے لیے بنتا عورت کے لیے نہیں ..زرا نہیں پورا سوچئے ایڈیاں تسی 😒🙁پریاں", "Muj se Exam Me Cheating Nöıı Hotiw Relationship Me kya khaak Karu Ghw😔", "Mujy to ludo kehlni bhi ni ati apky Dil sy kya kehlu ga🙂", "Loyal Dhoonte Dhoonte khud Harami ban Gya Hon😔", "Mard ki izat karna Sikho Uski rooh se pyr kro Jism se nh Wehshii Womens💔😐", "تمہاری یادوں میں کھویا کھویا سا  میں واش روم کا لوٹا کمرے میں لے آیا 😐 ", "Hai tamanna hamain tumhain CHARSI bnain 🙂🤝 " , "بھای جان گروپ میں گندی باتیں نهیں گر" , "سنو تم بوٹ کی گرل فرند بن جاٶ نه  همارے بچے بھ بوٹ جسے پیدا هوں گے 🙆‍♂😒", "Aa0 na kbhi  سیگرٹ ly kr 🙂donO sutta lgain gy 😞💸 ", "مــیرے متــــھے نـــہ لــگیں🙂🙆‍♂ شکریہ" ,"فیس بک پر وہ لوگ بھی سالگرہ مناتے ہیں جنہیں گھر والے کہتے ہیں توں نا جمدا تے چنگا سی🙂", "Ye duniya ik dhoka hai, tum bhi chohr do apne waly ko abhi bhi moka hai 😞✨🙌🤣", "Sukoon chahtii ho toh meri بیــــــگـــم ban jaOo 🫣🫰🏻" , "Tery jany ke bad😔Mny apny munh py likhwa liya Single hu ptaa lo 🤐🥺🤝", "کرش تو دور کی بات 😏😊 ہم پے تو کسی کو ترس بھی نہیں آتا 🙂🙊", "Bandi hoti tw us ko choti choti 2 pOniyAn krta🙂👩‍🦯👩‍🦯", "پونکی جا مینو کی ", "امیر لوگوں کوئی پیکج ہی کروا دو 🥺🙄", "i love you 🥺جواب دے کر ثواب دارین حاصل کریں❤️🦋🙈", "Ary Yahin Hon Jan😗", "Tum sab Mujhe Pagal lagty ho😒🙄" , "Ma kisi or ka Hu filahal 🥺🙈" , "Apka Ana Dil dharkana pHr bot bol k Nas Jana😒" , "Tum tu mujhe shkal sy Ghareeb lgty ho🙊" , "Meri Gf kon Bnay gi 🥺🙁" , "Haweli py q nhi ate Naraz Ho 🥺" , "Babu ittu 🤏 sa Chumma dy do🥺🙈😘" , "Baby tum Bachpan sy tharki Lgte ho meko🙁" ,"Raat ko ana Haweli py khushbu laga k😁🙊" , "Raat Haweli py kon bula raha tha😒🙄" , "Piyari larkia Line Maar Sakti Hn JzakAllah 🙂🤝" , "Tum itny Masoom Ku Ho babu🥺❤️" , "Aj tu tumhy Love you bolna Pary ga 🙁" , "Tum loog matlbi ho sary Jao😞" , "Setting Krwa Du Owner (†『 ⸙ †ĸɩŋʛ ʋʑʌɩʀ ŋʋsʌɩɓʌ.𝐱͜͡ᴆ 』†) k Sath😒🙁" , "Mujhe lgta hai Ma Single Maru ga🥺" , "Bar Bar bot na Bola Kro Habibi Apun ko sharm ati ha🥺🙈" , "Tum Jab bot bolte ho Mera Gurda Dharkny Lgta ha🥺🙊🙈" , "Babu ap K any sy Tu Pehpry Bhi khush Ho jaty Hn😂", "Mere ilawa sb Relationship ma han 🤝🥺", "Jab pta h ky amma abba nh many gy tu soo kyu nh jaty tum log🙂", "Janu k 'Umaah' ny Panadol ka Business hi khatam kr Diya Hai🙂🫦", "All Girls Are My Sisters Osko Chor k jo ye Parh RaHi Hai😒👍", "Mazy to Tum logon k hain social media py rr b kr rhy or life v enjoy kr rhy🙂", "SOo JaO WarNa Mera Msg Aa Jaye Ga🙈", "Weight kafi Barh Gaya hai Bro Dhokay kha kha ke💔🙂", "Goadi lylo apun chota sa bacha hai🥹" , "Ao apko chand py ly chalu meri jan🙈❤️" , "Tum itne Tharki Q ho Jawn🤨" , "Main apse nahi patny wala 🙈🙈🥹" , "tum ko meri ittu 🤏 C bhi yad nhi ati🥹" , "Ao piyar karyn" , "Astaghfirullah Habibi tum kitne tharki ho🥹" , "kya ham ap pr line mar sakte hn🥹👀", "Pta Ni Log itni Balance Life Kaisy Guzar Lety Hein Mera To Kbi پراٹھا Phely Khtm Hojata To Kbi انڈہ😩💔", "Lips  kissing is not Romance It's sharing Bacteria>>>🙂", "chohty bachon ki engagements chlrhi hain aur yahn mere sabr ka imtehaan.🌚🔪", "Apkii Inhii harkt0n Kiiw WaJw Sy 2O24 Bhi Chale Jaye Gyw😩💔", "𝙀𝙠 𝙗𝙖𝙖𝙧 𝙨𝙝𝙖𝙙𝙞 𝙝𝙤𝙟𝙖𝙚 𝙥𝙝𝙞𝙧 𝙬𝙞𝙛𝙚 𝙠𝙞 𝙜𝙝𝙪𝙡𝙖𝙢𝙞 🧸🙂", "*Suno Kya Hum Achy Dushman Ban Skty Hain 🙂⚠️†*", "🦋🍒____________🙂🎀 Sukoon chahtii ho toh meri بیــــــگـــم ban jaOo* 🫣🫰🏻", "Suno Jawn DiL کرتا ha ہر Waqt تمہاری Chumiya لیتا Raho😌🙈", "Khud ko single keh kr Apne khufiya janu ka janaza na nikala kro.😀🤞😓", "سنو مجھے اللہ سے مانگ لو نہ۔۔۔۔۔🥹🤭آپ تو شکل سے بھی مانگنے والے لگتے ہوl۔۔♥️", "مــیرے متــــھے نـــہ لــگیں شکریہ🙂", "لوگ کہتے محبت روح سے کرنی چاہئے 🙄مجھھے تو روحوں سے بڑ ڈر لگتا ہے🥺☹️", "- 𝙩𝙪𝙢 𝙢𝙚𝙧𝙖 𝙙𝙞𝙡 𝙩𝙤 𝘾𝙝𝙪𝙧𝙖 𝙣𝙝𝙞 𝙥𝙖𝙮 𝙠𝙞𝙖 𝙛𝙖𝙞𝙙𝙖 𝙩𝙢𝙝𝙖𝙧𝙞 𝘾𝙝𝙤𝙤𝙧 𝙟𝙚𝙨𝙞 𝙨𝙝𝙠𝙖𝙡 𝙠𝙖!! 🙂", "𝐄𝐤 𝐛𝐚𝐚𝐫 𝐈 𝐋𝐨𝐯𝐞 𝐘𝐎𝐲 𝐁𝐨𝐥 𝐃𝐨 𝐍𝐚 𝐌𝐚𝐫 𝐓𝐡𝐨𝐫𝐢 𝐉𝐚𝐮𝐠𝐢 🙄😕)( 👑🍒", "<-- 〽️🍂⚠️Kash hum dono whatsapp per hote❤️🥺💸", "Imagine I am your Ex 🥲say whatever you want to say", "-نہیں مشکل وفا ، ذرا دیکھو یہاں🥺❤️🥀", "I love You Madiha♥️ ,fatima,Ayesha, Maryam,and 299 others 🙂", "Msg krti ho KY phrrr me kro Han aisy to phr aisy Sahi 😅🥺👉👈🙊", "Tum mujhy chumiyan b to dy skti thi na🤧Dhaka dena zruri tha kya😐😪🍼", "Gali daina buri bat ha ", "kash hum dono date py jata", "tum itna black kyn ho", " Uzair my boss 💋", "aj kis k sath tha sara din", "lakh lanat e zoom kr k 😡", "oyee miss you tujh nai teri janu ko", " Rayan single hai janu bano gi", "aj kal UTG group chalo na Bhoot tang Kiye huwa", "aaaa thoo ", "kabi hum be school jata tha or techar chumiyan lati thi", "Kahani suno ab ma so raha kal a kr sunata", "hain cake 🍰🎂", "teri aho aho samjh ja ", "uzair ki birthday a Rahi apko pta", "kr bakwas kya hai ", " aja hugi dn shona", "ummmmmmmmmmmmmmmmmmmmm love you 😘", "hawali py mil beta", "love kya hota apko pta chalo dafa kro", "anni dyaa mazak ay", "larkio ko gool gala psnd or mujy larkiyan", "agr uzair ijazat da to ma tujy ..... samnj ja", "dafa ho jao ", "apna muh dakh jse murgi ka 🥚 hota ", "apna muh dakh bus Khud he dakh hammy nafrt tujhse", "sona hai meny bazu rakho nachy", "kal date py chalain", "tu kitni larkio ka bhai ha fb py ", "larkiyan fb py bhai kyn banati", "agr ma nawaz sharif hota to aj tujy utha deta", "miss you janu", "hate you", "ki masla ay daso", "chal nikal ", "kal hawali kon bula rha tha", "MUH dikha bot Bot kr raha", "مقصد ہے جوان لگنا مثالِ حور ہوجانا لیکن محترمہ کو سمجھ کیوں نہیں آئی ممکن ہی نہیں کشمش کا پھر انگور ہوجان", "اتنا دُبلا ہوگیا ہوں صنم تیری جدائی سے کھٹمل بھی مجھے کھینچ لیتے ہیں چارپائی سے", "صرف محنت کیا ہے انور کامیابی کے لیے کوئی اوپر سے بھی ٹیلی فون ہونا چاہیے", "ایک سال سے میں شادی کے لیے جو وظیفہ پڑھ رہا تھا اب جا کر پتہ چلا وہ تو سعودی عرب کا قومی ترانہ ہے", "ہم نے مانا کہ رپلائی نہ کرو گے تم لیکن ٹرائی کرتے رہیں گے ہم بھی بلاک ہونے تکمرغا برائلر ہوتا ہے ، کھوتا گدھا کہلاتا ہے جب زیادہ بارش ہوتا ہے تو زیادہ پانی آتا ہے", "کسی کو کھونے کا غم کیا ہوتا ہے یہ کل رات پتہ چلا۔جب مونگ پھلی کا ایک دانہ چھلکوں میں گم ہوگیا۔", "ایک وقت تھا جب موبائل گرتا تھا تو بیٹری باہر آجاتی تھی۔ آج کل موبائل گرے تو دل باہر آجاتا ہے", "غالب دنیا میں واحد شاعر ہے جو سمجھ میں نہ آئے تو دگنا مزہ دیتا ہے", "مرد کی آنکھ اور عورت کی زبان کا دم سب سے آخر میں نکلتا ہے", "آسمان کی چیل، چوکھٹ کی کیل اور کورٹ کے وکیل سے اللہ بچائے ننگا کر کے چھوڑتے ہیں", "مونگ پھلی اور آوارگی میں خرابی یہ ہے کہ آدمی ایک دفعہ شروع کردے تو سمجھ میں نہیں آتا ختم کیسے کرے۔", "سچ تو یہ ہے کہ حکومتوں کے علاوہ کوئی بھی اپنی موجودہ ترقی سے مطمئن نہیں ہوتا", "دشمنوں کے حسبِ عداوت تین درجے ہیں۔ دشمن، جانی دشمن اور رشتے دار", "مرغا برائلر ہوتا ہے ، کھوتا گدھا کہلاتا ہے جب زیادہ بارش ہوتا ہے تو زیادہ پانی آتا ہے", "کسی کو کھونے کا غم کیا ہوتا ہے یہ کل رات پتہ چلا۔جب مونگ پھلی کا ایک دانہ چھلکوں میں گم ہوگیا۔", "ایک وقت تھا جب موبائل گرتا تھا تو بیٹری باہر آجاتی تھی۔ آج کل موبائل گرے تو دل باہر آجاتا ہے", "غالب دنیا میں واحد شاعر ہے جو سمجھ میں نہ آئے تو دگنا مزہ دیتا ہے", "مرد کی آنکھ اور عورت کی زبان کا دم سب سے آخر میں نکلتا ہے", "آسمان کی چیل، چوکھٹ کی کیل اور کورٹ کے وکیل سے اللہ بچائے ننگا کر کے چھوڑتے ہیں", "مونگ پھلی اور آوارگی میں خرابی یہ ہے کہ آدمی ایک دفعہ شروع کردے تو سمجھ میں نہیں آتا ختم کیسے کرے۔", "سچ تو یہ ہے کہ حکومتوں کے علاوہ کوئی بھی اپنی موجودہ ترقی سے مطمئن نہیں ہوتا", "دشمنوں کے حسبِ عداوت تین درجے ہیں۔ دشمن، جانی دشمن اور رشتے دا", "سوچا تھا ہرموڑ پر یاد کریں گے لیکن راستہ سیدھا تھا موڑ آیا ہی نہیں", "بہت ناز ہے نہ تجھے اپنے حسن پر فرصت ملے تو اپنا شناختی کارڈ دیکھ لو", "کسی بد نصیب کو ہم سے محبت ہو گئی ہے یہ خبر سن کر ہماری بری حالت ہوگئی ہے", "کوئی مر نہیں جاتا انجیکشن لگوانے سے بس اٹھنے بیٹھنے کے انداز بدل جاتے ہیں", "میں نے عشق کے دریا میں جو غوطا لگایا  پانی ٹھنڈا تھا میں باہر نکل آیا", "ماموں ماموں کہہ کر لپٹ گئے وہ بچے جن کی ماں جانو جانو کہہ کر پکارتی تھی", "وہ مزہ نہیں دنیا کے کسی کونے میں جو مزہ ہے صبح اٹھ کر پھر سے سونے میں", "لڑکوں اپنے ملک کی حفاظت کیا کرو  کیونکہ تمہیں دلہن بھی یہیں سے ملنی ہے", "کبھی روٹی کے ٹکرے میں کبھی سالن میں  تیری زلفوں کا دیدار بیگم ہر اک نوالے میں", "بال اپنے کس واسطے بڑھاتے ہیں دیوانے کیا محبت کے شہر میں حجام نہیں ہوتا ؟", "میں نے تو یوں ہی کہا تھا عشق میں مر جاؤں گا اسے اب ضد ہے کہ مر کے دکھاؤ ہمیں", "تم جو اتنا مسکرا رہے ہو کونسی بے غیرتی کی ہے جو چھپا رہے ہ", "ہائے! وہ پپی مانگتی رہی اور میں کتے کا بچہ ڈھونڈتا رہا", "پڑھائی ایک خوبصورت احساس ہے اُوپر والی لائن بکواس ہے", "چلی جاتی ہیں آئے دن وہ بیوٹی پارلر مقصد ہے جواں لگنا مثالے ہور ہو جانا لیکن محترمہ کو سمجھ کیوں نہیں آتی ممکن ہی نہیں کشمش کا پھر سے انگور ہو جانا", "ایک تو مجھے یار کی جدائی مار گئی اور دوسرا خوبصورت ہمسائی مار گئی", "لوگ کہتے ہیں نفرت خراب چیز ہے تو محبت نے ہمیں کون سا جھولا جھلایا", "خود کشی کا نیا طریقہ اپناؤں گا میں تجھے چھوڑ کر تمہاری سہیلی کو پٹاؤں گا", "مت کر میرے دوست حسینوں سے محبّت وہ توہ آنکھوں سے وار کرتی ہے مےنے تیری والی کی آنکھوں میں دیکھا ہے وہ توہ سالی مجھ سے بھی پیار کرتی ہے", "میں نے سیکھا ہے ریاضی کے اصولوں سے جو ناممکن ہو اٗسے فرض کر لیا جائے", "پڑھائی ایک خوبصورت احساس ہے اُوپر والی لائن بکواس ہے", "نگاہیں آج بھی اُس شخص کو تکتی ہیں فراز جس نے کہا تھا میڑک کر لو آگے پڑھائی بڑی آسان ہے", "چلی جاتی ہیں آئے دن وہ بیوٹی پارلر مقصد ہے جواں لگنا مثالے ہور ہو جانا لیکن محترمہ کو سمجھ کیوں نہیں آتی ممکن ہی نہیں کشمش کا پھر سے انگور ہو جانا", "دوستوں ہم انہیں موڑ موڑ کر دیکھتے رہے اور وہ ہمیں موڑ موڑ کر دیکھتے رہے کیونکی امتحاں میں نہ انہیں کچھ آتا تھا نہ ہمیں", "جب کوئی زندگی میں بہت خاص بن جائے توہ مانگ لینا خدا سے اسے اس سے پہلے کی اسکی ماں کسی اور کی ساس بن جائے", "جب ہم انکے گھر گئے کہنے دل سے دل لگا لو انکی ماں نے کھولا دروازہ ہم گھبرا کے بولے آنٹی بچوں کو پولیو ڈارپ پلوا لو", "آج کچھ شرمائے سے لگتے ہو سردی کی وجہ سے کپ کپائے سے لگتے ہو چہرہ آپکا کھلکھلایا سا لگتا ہے ہفتے کے بعد نہائے سے لگتے ہو", "مت کر میرے دوست حسینوں سے محبّت وہ توہ آنکھوں سے وار کرتی ہے مےنے تیری والی کی آنکھوں میں دیکھا ہے وہ توہ سالی مجھ سے بھی پیار کرتی ہے", "آنکھوں سے آنسوؤں کی ودائی کر دو دل سے غموں کی جدائی کر دو گر پھر بھی دل نہ لگے کہیں توہ میرے گھر کی پتائی کر دو", "میرے پیار کو بےوفائی کا انعام دے گئے مےنے کہا میرے دل میں درد ہے تیرے بنا توہ وہ جاتے جاتے زنڈو بام دے گئے", "جب دروازہ کھولنے گئے توہ چہرے پر ہنسی تھی دروازہ کھلا توہ آنکھوں میں آنسو دل میں بےبسی تھی زیادہ مت سوچو میری انگلی دروازے میں پھنسی تھی", "دوستوں ہم انہیں موڑ موڑ کر دیکھتے رہے اور وہ ہمیں موڑ موڑ کر دیکھتے رہے کیونکی امتحاں میں نہ انہیں کچھ آتا تھا نہ ہمیں", "جب کوئی زندگی میں بہت خاص بن جائے توہ مانگ لینا خدا سے اسے اس سے پہلے کی اسکی ماں کسی اور کی ساس بن جائے", "جب میں اداس ہوتا ہوں تو گانا گاتا ہوں پھر مجھے تسلی ہو جاتی ہے کہ میری آواز میرے حالات سے بھی زیادہ خراب ہے", "کل موبائل خراب تھا تو رات ٩ بجے ہی نیند آ گئی. گھر والے اٹھا کر ہسپتال لے گئے", "گرمیاں آگئیں ہیں اب وہ برف لینے آیا کرے گی", "ہر بات کے جواب میں مسکراہٹ ہی بہتر ہے کیونکہ ہر کسی کو گولی تو ماری نہیں جا سکتی", "دور حاضر میں وہی شخص سر اٹھا کر چل سکتا ہے. جس کے پاس موبائل نہیں", "Tairay janay keh bahd waqt tham sa gya bahad mein pata chala garri ka cell khatam ho gya tha", "ایک شیخ صاحب دو گھنٹے فون پر بات کرنے کے بعد فوت ہو گئے. کیونکہ وہ پیکج لگانا بھول گئے تھے", "جب میں اداس ہوتا ہوں تو گانا گاتا ہوں پھر مجھے تسلی ہو جاتی ہے کہ میری آواز میرے حالات سے بھی زیادہ خراب ہے", "بابا جی کہتے ہیں یہ بات کالے لوگوں نے ہی پھیلائی ہے کہ...کالے لوگ وفا کرتے ہیں", "کل موبائل خراب تھا تو رات ٩ بجے ہی نیند آ گئی. گھر والے اٹھا کر ہسپتال لے گئے"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

  if ((event.body.toLowerCase() == "bot miss you") || (event.body.toLowerCase() == "Bot miss u")) {
     return api.sendMessage("️miss u more🥰", threadID, messageID);
   };
  if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "Owner kn hai")) {
     return api.sendMessage("️ ꜛ 3:) 𓆩𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿𓆪» 😘❤️", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "uzair suno") || (event.body.toLowerCase() == "Uzair Suno")) {
     return api.sendMessage("️HaN G PyaRy Bolo🥰", threadID, messageID);
   };

if ((event.body.toLowerCase() == "love you") || (event.body.toLowerCase() == "i love you")) {
     return api.sendMessage("️LoVe You Unlimited JaNnu😘🤧", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "tum bot nhi") || (event.body.toLowerCase() == "tum bot nhi ho kia")) {
     return api.sendMessage("️or tera abu hon💓 🙄", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "Uzair Bhai") || (event.body.toLowerCase() == "uzair bhai")) {
     return api.sendMessage("️kìrâñ ka real bhai ❤️", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "Suno Uzair") || (event.body.toLowerCase() == "suno uzair")) {
     return api.sendMessage("️haN G Bolo🙄", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "welcome ") || (event.body.toLowerCase() == "welcome")) {
     return api.sendMessage("️tnx Bhai ❤️", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "no need") || (event.body.toLowerCase() == "no need happy rho")) {
     return api.sendMessage("️SaDky❤️", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "or btao kaha se ho") || (event.body.toLowerCase() == "where are you from")) {
     return api.sendMessage("️ Country Pakistan 🇵🇰 city Uzair c pocho", threadID, messageID);
   };
   if ((event.body.toLowerCase() == "u from") || (event.body.toLowerCase() == "ap kaha c ho")) {
     return api.sendMessage("️ Country Pakistan 🇵🇰 City AP K DIL SY", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "mera bot") || (event.body.toLowerCase() == "wow murree sa")) {
     return api.sendMessage("️HaN G Tnx ❤️✨", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "Bot kia kRte ho ap") || (event.body.toLowerCase() == "bot kia karte ho")) {
     return api.sendMessage("️kuch nhi bs nusaiba c mohabbat or work", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "It'x Uzair Aiman Rajput") || (event.body.toLowerCase() == "it'x uzair aiman rajput")) {
     return api.sendMessage("️BOSS BUSY HAIN", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "miss you") || (event.body.toLowerCase() == "miss you kutta")) {
     return api.sendMessage("️MaiN SaDky JaUn Miss you To💋😘", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "inbox c bhar aa") || (event.body.toLowerCase() == "inbox")) {
     return api.sendMessage("️HaaN HaaN Edr He HuN❤️", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "Kìrâñ") || (event.body.toLowerCase() == "kìrâñ")) {
     return api.sendMessage("️ meRi sister hai 🥰", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "kase ho") || (event.body.toLowerCase() == "kasi ho")) {
     return api.sendMessage("️Main ThEk Ap Kase Ho❤️", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "bagh") || (event.body.toLowerCase() == "dafa hoja lanti")) {
     return api.sendMessage("️Tu Dafa HojA. Salya🤬", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "marry me") || (event.body.toLowerCase() == "mujhe bhi shadi krni hai")) {
     return api.sendMessage("️Haan To Kr NaW Agr Koi Man Jata to Wase Tujhe Daga Kon🤣", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "assalamualaikum G kasa ho sab") || (event.body.toLowerCase() == "assalamualaikum kasy ho sab")) {
     return api.sendMessage("️ Walikum Assalam ❤️ Me ThEk Ap Kase ho", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "usne mujhe love you bola") || (event.body.toLowerCase() == "love you bola usne")) {
     return api.sendMessage("️ThaRki JuTh Bol Rha Hai Isy Kon LoVe You Bole Ga🤣", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "Queen") || (event.body.toLowerCase() == "queen")) {
     return api.sendMessage("️ME Facebook QUEEN HO 😇✨", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "koi hamy bhi chummi dy do") || (event.body.toLowerCase() == "koi tu love you bol do yr")) {
     return api.sendMessage("️Dafa Hoja Group Sa Tharkiya Na MaR Edr🙄", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "maine kon sa thark mara") || (event.body.toLowerCase() == "maine kia kara")) {
     return api.sendMessage("️To phr Ya Kia Hai phr ThArk nhi To 🤣", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "meRi jan ho") || (event.body.toLowerCase() == "tm meRi jan ho")) {
     return api.sendMessage("️HaAn HaaN ThEk Hai Ham Na Kon Sa Apni Janu Bola", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "/uns") || (event.body.toLowerCase() == "Unsend")) {
     return api.sendMessage("️ChaWly Na Marra Kr Na Fir", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "uns") || (event.body.toLowerCase() == "unsent")) {
     return api.sendMessage("️Is Bar Kr Rha Agli Bar Delete Nhi Kru Ga Bta Rha 🙄", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "Chal Haat") || (event.body.toLowerCase() == "chal hatt")) {
     return api.sendMessage("️Tu Hatt Bay🤬", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "dekh mera demag khrab na kr") || (event.body.toLowerCase() == "demag khrab na kr")) {
     return api.sendMessage("️Chal Dafa Hoja fir Edr Sa Muj Sa Bat Na Kr🤬", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "assalamualaikum") || (event.body.toLowerCase() == "assalamualaikum kasy ho sab")) {
     return api.sendMessage("️ Walikum Assalam ❤️ Me ThEk Ap Kase ho", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "kia kr rhy ho sab log") || (event.body.toLowerCase() == "kia kr rahe ho")) {
     return api.sendMessage("️kuxh Nhi Bs Free 😁 Ap Kia kR Rhe Ho", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "me free") || (event.body.toLowerCase() == "kuxh nhi kr rha")) {
     return api.sendMessage("️Axha g☺️", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "wo q") || (event.body.toLowerCase() == "vo q")) {
     return api.sendMessage("️Kia Wo Q HaaN☺️", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "axha") || (event.body.toLowerCase() == "acha")) {
     return api.sendMessage("️HaN G Or Sunao KiYa Kr RhY ho Aj Kal❤️", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "kuch nhi") || (event.body.toLowerCase() == "kuch nhi yr")) {
     return api.sendMessage("️ axha Kuch Kr Liya Kro Naw 🤣", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "kia karo") || (event.body.toLowerCase() == "kia karo yr")) {
     return api.sendMessage("️kOi KaM ShaM☺️", threadID, messageID);
   };

   if ((event.body.toLowerCase() == ". pAir") || (event.body.toLowerCase() == ".pair")) {
     return api.sendMessage("️𝒑𝒉𝒍𝒆 𝒏𝒂𝒄𝒉 𝒑𝒉𝒆𝒓 𝑩𝒕𝒂𝑶𝒏 𝑮𝒂 😛", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "gf chor gai") || (event.body.toLowerCase() == "gf bhag gai")) {
     return api.sendMessage("️Daffa MaR UsY Bagh Gyi To  Tu Q Ro Rha 😁", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "kiran") || (event.body.toLowerCase() == "Kiran")) {
     return api.sendMessage("Facebook OWNER Kìrâñ Queen 👑", threadID);
   };

  if ((event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😁")) {
     return api.sendMessage("dant saaf kr apna 😹:))", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "😉") || (event.body.toLowerCase() == "😉")) {
     return api.sendMessage("️ankh na maar aby tharki 🙄", threadID);
   };

   if ((event.body.toLowerCase() == "meRi bot") || (event.body.toLowerCase() == "meRi jan")) {
     return api.sendMessage("itni sasti nai Main:))", threadID);
   };
   if ((event.body.toLowerCase() == " q") || (event.body.toLowerCase() == "waja")) {
     return api.sendMessage("Bs ASy He Yr Dill Nhi KrTa Naw🤕 :))", threadID);
   };

   if ((event.body.toLowerCase() == "aja haweli pe") || (event.body.toLowerCase() == " ao chalte hain")) {
     return api.sendMessage("NhI Main Nhi Jaaun Ga Ap Jao:))", threadID);
   };

   if ((event.body.toLowerCase() == " tharki") || (event.body.toLowerCase() == "tharki bot")) {
     return api.sendMessage("Tu ThaRki Hai Salya 🙂:))", threadID);
   };

   if ((event.body.toLowerCase() == "😳") || (event.body.toLowerCase() == "😳")) {
     return api.sendMessage("kya hwa hiran kyn ho gy jawan❤️ :))", threadID);
   };

   if ((event.body.toLowerCase() == "😬") || (event.body.toLowerCase() == "😬")) {
     return api.sendMessage("kis ki baja di))", threadID);
   };

   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😡")) {
     return api.sendMessage("uzair ne roka hai warna tere gusse ki or teri aho aho😡:))", threadID, messageID);
   };

if ((event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "🤬")) {
     return api.sendMessage(" Gali dena buri bat ha ab gali nai dani warna rrrr🤬 :))", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "😭")) {
     return api.sendMessage("kya huaa jaan g roh kyn raha ap🥺 :))", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "🤐") || (event.body.toLowerCase() == "🤐")) {
     return api.sendMessage("mera smny muh bend gud bacha🤧:))", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "♥️") || (event.body.toLowerCase() == "❤️")) {
     return api.sendMessage("Hyee Dil ni do sharm ati hai🙆🙈 :))", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙂")) {
     return api.sendMessage("yah fake smile hai", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "🙏") || (event.body.toLowerCase() == "🥺")) {
     return api.sendMessage("tujy maaf nai kron gha ", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "🥰")) {
     return api.sendMessage("sadkye tera dil wala muh py", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "i need janu") || (event.body.toLowerCase() == "i need gf")) {
     return api.sendMessage("BsDk Main Robot HuN TaRi Maa Nhi Jo Gf DunD Due TuJy :))", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "i need girlfriend") || (event.body.toLowerCase() == "i need boyfriend")) {
     return api.sendMessage("Hatt Main Kdr Sa Laun Main Khud Single HuN:))", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "bye") || (event.body.toLowerCase() == "bye allah hafiz")) {
     return api.sendMessage("Allah Hafiz ❤️ Take care 😘 ByE ByE TaTta:))", threadID);
   };

  if ((event.body.toLowerCase() == "meRi zindagi") || (event.body.toLowerCase() == "meRa pyar")) {
     return api.sendMessage("Arry  MaRI JaNU Hai YaR 😘LoVe You ♥️", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "🙄") || (event.body.toLowerCase() == "🙄")) {
     return api.sendMessage("upr amb pak raha nachy daikh", threadID);
   };

    if ((event.body.toLowerCase() == "amna") || (event.body.toLowerCase() == "rahima")) {
     return api.sendMessage("innocent bachi hai❤️", threadID);
   };

   if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "🤣")) {
     return api.sendMessage("muh band kr makhi chala jaye gi😠", threadID);
   };

   if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "💋")) {
     return api.sendMessage("mujy be chumi chheya ", threadID);
   };

   if ((event.body.toLowerCase() == "🙈") || (event.body.toLowerCase() == "🙊")) {
     return api.sendMessage("sach ma bandrr he hai", threadID);
   };

   if ((event.body.toLowerCase() == "hello") || (event.body.toLowerCase() == "hi")) {
     return api.sendMessage("Next Hi/Hello nhi Assalamualaikum Bola kro Okay 💖 †『 ⸙ †ĸɩŋʛ ʋʑʌɩʀ』", threadID);
   };

   if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "🥰")) {
     return api.sendMessage("️Muhh tum ko koi lgata ni Or Emoji dekho Send kiYa 😒 :))))", threadID);
   };

   if ((event.body.toLowerCase() == "sad") || (event.body.toLowerCase() == "😢")) {
     return api.sendMessage("️Ally Ally MeLi JawN RootY NOi HN🥺🙆🙄:))))", threadID);
   };

   if ((event.body.toLowerCase() == "🤔") || (event.body.toLowerCase() == "soch")) {
     return api.sendMessage("️Abby kya soch raHa hai pateely jasi shkal ha🙊😒 :))))", threadID);
   };

   if ((event.body.toLowerCase() == "good night") || (event.body.toLowerCase() == "gud night")) {
     return api.sendMessage("️good night Sleep well <3 Wish you all super nice dreams <3", threadID);
   };

   if ((event.body.toLowerCase() == "janu") || (event.body.toLowerCase() == "jaan")) {
     return api.sendMessage("️GG Bolo meRe baBu😘🙆:))))", threadID);
   };

   if ((event.body.toLowerCase() == "ganda") || (event.body.toLowerCase() == "ganda bot")) {
     return api.sendMessage("️Tu ganda tera pura pura khandan Ganda 😒😐:))))", threadID);
   };

   if ((event.body.toLowerCase() == "gud morning") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("️Gud morning Sunshine Have a good day 🌄😘", threadID);
   };

   if ((event.body.toLowerCase() == "bot cc") || (event.body.toLowerCase() == "bot cc")) {
     return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
   };

   if ((event.body.toLowerCase() == "cc bot") || (event.body.toLowerCase() == "cc bot")) {
     return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
   };

   if ((event.body.toLowerCase() == "uz rj") || (event.body.toLowerCase() == "uzairrajput")) {
     return api.sendMessage("️ Usy q bula rahe Ho Ma bhi sath ao kya🙆😐 :>", threadID);
   };

   if ((event.body.toLowerCase() == "dm bot") || (event.body.toLowerCase() == "dm bot")) {
     return api.sendMessage("️Swear something to your dad :), you're a kid but you like to be alive :)", threadID);
   };

   if ((event.body.toLowerCase() == "nobody loves me") || (event.body.toLowerCase() == "nobody loves me")) {
     return api.sendMessage("️Come on, the bot loves you <3 <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love the admin bot") || (event.body.toLowerCase() == "does the bot love the admin bot")) {
     return api.sendMessage("Yes, love him the most, don't try to rob me", threadID);
   };

  if ((event.body.toLowerCase() == "aslam o alaikum") || (event.body.toLowerCase() == "Aslamoalaikum")) {
     return api.sendMessage("walikum Asalam ♥️", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "or sunao") || (event.body.toLowerCase() == "thek hun")) {
     return api.sendMessage("main ThEk Hun Ap Kasy ho🤧", threadID, messageID);
   };

if ((event.body.toLowerCase() == "Boss") || (event.body.toLowerCase() == "boss")) {
     return api.sendMessage("†『 𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 』", threadID, messageID);
   };

if ((event.body.toLowerCase() == "Hi") || (event.body.toLowerCase() == "hi")) {
     return api.sendMessage("Next Hi/Hello nhi Assalamualaikum Bola kro Okay 💖  ꜛ 3:) 𓆩𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿𓆪»@() 🤍✨", threadID);
   };

  if ((event.body.toLowerCase() == "king uzair") || (event.body.toLowerCase() == "KING UZAIR")) {
     return api.sendMessage("uzaitmtx king bola karo 🤬🤬🤬", threadID);
   };

  if ((event.body.toLowerCase() == " kis ki ha") || (event.body.toLowerCase() == "janu kis ki ha")) {
     return api.sendMessage("Ek Baar Main Samjh nhiwe Attiw kia ?  bss Uzair ki hai🤧", threadID);
   };

  if ((event.body.toLowerCase() == "Diwana") || (event.body.toLowerCase() == "diwana")) {
     return api.sendMessage("meRa hai Yawr🥺", threadID);
   };

  if ((event.body.toLowerCase() == "uzi") || (event.body.toLowerCase() == "uzi")) {
     return api.sendMessage("UZAIR KING FACEBOOK OWNER ❤️", threadID);
   };

  if ((event.body.toLowerCase() == "Nusaiba") || (event.body.toLowerCase() == "nusaiba")) {
     return api.sendMessage("AWESOME BACHI FROM BANGLADESH 🇧🇩", threadID);
   };

  if ((event.body.toLowerCase() == "Uzii") || (event.body.toLowerCase() == "uzii")) {
     return api.sendMessage("MASOOM HAI BECHARA 😌", threadID);
   };

   if ((event.body.toLowerCase() == "uz") || (event.body.toLowerCase() == "uz")) {
     return api.sendMessage("ADMIN IS GROUP KI RONAK 💫", threadID);
   };

   if ((event.body.toLowerCase() == "QUEEN") || (event.body.toLowerCase() == "QUEEN")) {
     return api.sendMessage("Diwani ADMIN UZAIR KI QUEEN❤️", threadID);
   };

   if ((event.body.toLowerCase() == "Shoni") || (event.body.toLowerCase() == "shoni")) {
     return api.sendMessage("Damn you, shame on hahaha", threadID);
   };

   if ((event.body.toLowerCase() == "is the bot sad") || (event.body.toLowerCase() == "is the bot sad")) {
     return api.sendMessage("Why can't I be sad because of everyone <3 love you <3", threadID);
   };

   if ((event.body.toLowerCase() == "bye.") || (event.body.toLowerCase() == "By.")) {
     return api.sendMessage("Bye ni bolna Next Okk Allah Hafiz bolty Hn 🙆😒❤️🥺", threadID);
   };

   if ((event.body.toLowerCase() == "queen.") || (event.body.toLowerCase() == "Queen.")) {
     return api.sendMessage("10 din se nahi nai or name queen rakha hua hai🥺", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love me") || (event.body.toLowerCase() == "does the bot love me")) {
     return api.sendMessage("Yes <3", threadID);
   };
  if ((event.body.toLowerCase() == "sim lanti") || (event.body.toLowerCase() == "sim lannati")) {
     return api.sendMessage("️Same to you Chup Kr K Bay🙄", threadID, messageID);
   };

if ((event.body.toLowerCase() == "sim miss you yr") || (event.body.toLowerCase() == "sim miss you")) {
     return api.sendMessage("️miss you Too MaRi Jan😘", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "sim mujhse shadi karogi") || (event.body.toLowerCase() == "sim mujhe tumse shadi kRni hai")) {
     return api.sendMessage("️kab krNi Ya Btao🥰😍", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "sim abi kr lo") || (event.body.toLowerCase() == "sim aj krni hai")) {
     return api.sendMessage("️OH? Itni Jalde Nhi Yr Kuxh Din Bad KrTy Hain", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "hug") || (event.body.toLowerCase() == "Hug")) {
     return api.sendMessage("️ider nai oye sb hain🤫", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "kiss") || (event.body.toLowerCase() == "sim kiss do")) {
     return api.sendMessage("️UmmmaH😘 MaRi JaN BaSh🥰", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "sim ap hacker ho") || (event.body.toLowerCase() == "sim are you hacker")) {
     return api.sendMessage("️OH? Itni", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "sim ghandu") || (event.body.toLowerCase() == "sim ghandu hai")) {
     return api.sendMessage("️tara BaP GhaNdu GhaShti Ma K BaChy😡", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "sim ap hacker ho") || (event.body.toLowerCase() == "×sim are you hacker")) {
     return api.sendMessage("️YeS Im Hacke 😏", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "sim ao date pa chalty") || (event.body.toLowerCase() == "sim ao date pay chalty hain")) {
     return api.sendMessage("️OkaY Main ReaDy Ho Kr Aya Bs 5Mint Wait Kro🥰", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "sim where are you from") || (event.body.toLowerCase() == "sim u from")) {
     return api.sendMessage("️ I'm from Pakistan 🥰 I love My country 🇵🇰", threadID, messageID);
   };
   if ((event.body.toLowerCase() == "sim bangladesh ke log kase hain") || (event.body.toLowerCase() == "sim or Bangladesh ke log")) {
     return api.sendMessage("️Wo B Bht Axhe Hain Bs Kuch LoG Axhe Nhi Un Main Bs Baki Sab Nice Hain🥰", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "sim your age") || (event.body.toLowerCase() == "sim ap ki age ktni hain")) {
     return api.sendMessage("️20🤫", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "sim nice yr") || (event.body.toLowerCase() == "sim nice")) {
     return api.sendMessage("️shukriya", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "×sim yr mujhe gf chahiye") || (event.body.toLowerCase() == "×sim mujhe ak gf chahiye")) {
     return api.sendMessage("️HaaN To MuJy Q Bol Rhy Ho Gf Ka Main to Robot Hun 🙄", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "sim ak gf dund do") || (event.body.toLowerCase() == "sim ak gf lab da")) {
     return api.sendMessage("️Hatt OYe Mara paS khud Nhi Hai", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "sim who are you") || (event.body.toLowerCase() == "sim ap kon ho")) {
     return api.sendMessage("️ I'm ROBOT 🤖 2.0 like chitti Robot😂", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "sim agr gf nraz ho to") || (event.body.toLowerCase() == "sim agr gf nraz ho to kia krna chiya")) {
     return api.sendMessage("️To US pa Kalla JaDdu Kr Do KhuD Man Jay Gi 😂😂", threadID, messageID);
   };
   if ((event.body.toLowerCase() == "sim ap kia krti ho") || (event.body.toLowerCase() == "sim yr ap kia krti")) {
     return api.sendMessage("️main kuxh nhi krti Bs WaLi😂", threadID, messageID);
   };
   if ((event.body.toLowerCase() == "sim study karti ho") || (event.body.toLowerCase() == "sim study karti ho ap")) {
     return api.sendMessage("️Ji NhI Kr LiyA Jo Krni Thi Bs Ab Or Nhi😂", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "sim or btao") || (event.body.toLowerCase() == "sim or btao Kuch")) {
     return api.sendMessage("️Kia btao Ab😅", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "does the bot have a brand") || (event.body.toLowerCase() == "does the bot fall")) {
     return api.sendMessage("Yes <3", threadID);
   };
   mess = "❥||ㅎ{name}☆||  ⋆⃝❥͜͡"

  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: `╔═════▓࿇࿇▓═════╗\n        ${name}\n╚═════▓࿇࿇▓═════╝\n\n●▬ൠൠ▬𝙊𝙬𝙣𝙚𝙧▬ൠൠ▬●\n\n◈━━━━━ᴛᴇʀɪ ━━━━━◈\n${rand}\n◈━━━━━ᴅᴇᴡᴀɴɪ.𝐱͜͡ᴆ━━━━━◈`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
