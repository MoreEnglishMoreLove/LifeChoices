/**
 * MORE ENGLISH MORE LOVE - Comprehensive Curriculum Data
 * Unit 1: Life Choices (خيارات الحياة)
 * Supervised by Teacher: Jaidaa Saqer (جيداء صقر)
 */

export const TEACHER_INFO = {
  name: "المعلمة جيداء صقر",
  nameEn: "T. Jaidaa Saqer",
  title: "مدرّسة ومعدّة منهاج اللغة الإنجليزية",
  phone: "+963933036079",
  whatsapp: "+963933036079",
  whatsappLink: "https://wa.me/963933036079",
  socials: {
    facebook: "https://www.facebook.com/MoreEnglishMoreLove/",
    youtube: "https://www.youtube.com/@MoreEnglishMoreLove",
    instagram: "https://www.instagram.com/moreenglishmorelove/",
    telegram: "https://t.me/moreenglishmorelove",
    whatsapp: "https://wa.me/963933036079",
  },
  greetingWhatsApp: (studentName?: string) => {
    const text = studentName
      ? `مرحباً أستاذة جيداء صقر، أود الحصول على كود تفعيل لمنهاج MORE ENGLISH MORE LOVE.\nالاسم الكامل: ${studentName}`
      : `مرحباً أستاذة جيداء صقر، أود الاستفسار والحصول على كود التفعيل الحصري لمنهاج MORE ENGLISH MORE LOVE.`;
    return `https://wa.me/963933036079?text=${encodeURIComponent(text)}`;
  },
};

// ==========================================
// SECTION 1: PREVIEW & LISTENING
// ==========================================
export const PREVIEW_DATA = {
  unit: "Unit 1",
  unitTitleEn: "Life Choices",
  unitTitleAr: "خيارات الحياة",
  overview: [
    { skill: "Listening (الاستماع)", detailEn: "Listening for specific information", detailAr: "الاستماع لمعلومات محددة" },
    { skill: "Speaking (المحادثة)", detailEn: "Talking about jobs", detailAr: "التحدث عن الوظائف" },
    { skill: "Reading (القراءة)", detailEn: "Future Career & Life Lessons", detailAr: "المهنة المستقبلية والدروس المستفادة" },
    { skill: "Writing (الكتابة)", detailEn: "A description of a dream job", detailAr: "وصف وظيفة حلم وتجربة شخصية" },
    { skill: "Grammar (القواعد)", detailEn: "Revision of tenses 1", detailAr: "مراجعة الأزمنة 1 (البسيط والمستمر والتام)" },
    { skill: "Pronunciation (النطق)", detailEn: "Homophones", detailAr: "الكلمات المتشابهة في النطق ومختلفة في المعنى والإملاء" },
    { skill: "Vocabulary (المفردات)", detailEn: "Word family and phrasal verbs", detailAr: "عائلة الكلمات والأفعال المركبة" },
    { skill: "Everyday English (الإنجليزية اليومية)", detailEn: "Giving advice", detailAr: "تقديم النصيحة وقبولها والتردد" },
  ],
  discussionQuestions: [
    {
      id: "q1",
      questionEn: "What was your dream job as a child?",
      questionAr: "ما هي وظيفة حلمك عندما كنت طفلاً؟",
      sampleAnswerEn: "As a child, I dreamed of being an engineer or an astronaut because I loved exploring and building things.",
      sampleAnswerAr: "عندما كنت طفلاً، كنت أحلم بأن أكون مهندساً أو رائد فضاء لأنني أحببت الاستكشاف وبناء الأشياء.",
    },
    {
      id: "q2",
      questionEn: "What attracts you to this job?",
      questionAr: "ما الذي يجذبك إلى هذه الوظيفة؟",
      sampleAnswerEn: "The creativity, continuous problem solving, and the ability to make a positive impact on society.",
      sampleAnswerAr: "الإبداع، وحل المشكلات المستمر، والقدرة على إحداث أثر إيجابي في المجتمع.",
    },
    {
      id: "q3",
      questionEn: "Who inspired you to choose it?",
      questionAr: "من الذي ألهمك لاختيارها؟",
      sampleAnswerEn: "My parents and my dedicated teachers inspired me to pursue my real passion with confidence.",
      sampleAnswerAr: "والداي ومعلميّ المخلصون ألهموني لمتابعة شغفي الحقيقي بكل ثقة.",
    },
    {
      id: "q4",
      questionEn: "What do you hope to accomplish through your future job?",
      questionAr: "ماذا تأمل أن تحقق من خلال وظيفتك المستقبلية؟",
      sampleAnswerEn: "I hope to gain financial independence, help my community, and achieve personal excellence.",
      sampleAnswerAr: "آمل أن أحقق الاستقلال المالي، ومساعدة مجتمعي، وتحقيق التميز الشخصي.",
    },
  ],
  dialogues: [
    {
      id: "sofia",
      title: "R. 1.1 Interview with Sofia in Damascus (مقابلة صوفيا في دمشق)",
      description: "صوفيا تتحدث عن سبب انتقالها لدمشق وعملها وتجربتها مع كرم الضيافة السوري",
      lines: [
        { speaker: "Interviewer", en: "So, how long have you been living here?", ar: "المحاور: إذن، منذ متى وأنتِ تعيشين هنا؟" },
        { speaker: "Sofia", en: "For about six months now.", ar: "صوفيا: منذ حوالي ستة أشهر الآن." },
        { speaker: "Interviewer", en: "Why did you choose Damascus?", ar: "المحاور: لماذا اخترتِ دمشق؟" },
        { speaker: "Sofia", en: "Because, Maher, my husband, and I have always loved Arab culture and the language. Maher's an English teacher and he got a job here in a language school.", ar: "صوفيا: لأن ماهر، زوجي، وأنا لطالما أحببنا الثقافة واللغة العربية. ماهر مدرس إنجليزي وحصل على وظيفة هنا في معهد لغات." },
        { speaker: "Interviewer", en: "Why did you want to take a year off?", ar: "المحاور: لماذا أردتِ أخذ سنة إجازة؟" },
        { speaker: "Sofia", en: "Basically I wanted a year off teaching. I love teaching children but I needed a change. Also I've been drawing and painting since I was little but I've never really had the chance to study drawing. So this seemed like the perfect opportunity to have a change and learn to draw properly.", ar: "صوفيا: في الأساس أردت سنة إجازة من التدريس. أحب تدريس الأطفال لكنني احتجت لتغيير. كما أنني كنت أرسم منذ الصغر لكن لم تسنح لي الفرصة لدراسة الرسم، فكانت فرصة مثالية للتغيير والتعلم بشكل صحيح." },
        { speaker: "Interviewer", en: "What have you been doing here since you arrived?", ar: "المحاور: ماذا تفعلين هنا منذ وصولك؟" },
        { speaker: "Sofia", en: "Well, I found a fantastic art teacher, called Salma, and I've been having classes with her since October. She's great and she speaks English, which is lucky because I don't know how much Arabic yet. But, I am learning the language as quickly as I can.", ar: "صوفيا: حسناً، وجدت معلمة فنون رائعة تدعى سلمى، وآخذ دروساً معها منذ أكتوبر. إنها رائعة وتتحدث الإنجليزية وهو أمر محظوظ لأني لا أعرف الكثير من العربية بعد، لكني أتعلمها بأسرع ما يمكن." },
        { speaker: "Interviewer", en: "Is Arabic a difficult language to learn?", ar: "المحاور: هل العربية لغة صعبة للتعلم؟" },
        { speaker: "Sofia", en: "Incredibly difficult! Especially the pronunciation. You have to learn to make a lot of new sounds. Also it takes a long time to learn to read and write in Arabic.", ar: "صوفيا: صعبة جداً! وخاصة النطق، يجب أن تتعلم إصدار العديد من الأصوات الجديدة، كما يستغرق وقتاً طويلاً لتعلم القراءة والكتابة." },
        { speaker: "Interviewer", en: "You also teach dancing here.", ar: "المحاور: أنتِ أيضاً تدرّسين الرقص هنا." },
        { speaker: "Sofia", en: "That's right. I've been teaching dancing for six years, and they want to learn. I give classes here in my living room. We have a lot of fun.", ar: "صوفيا: هذا صحيح، أدرّس الرقص منذ ست سنوات وهم يريدون التعلم، أعطي دروساً هنا في غرفة المعيشة ونقضي وقتاً ممتعاً." },
        { speaker: "Interviewer", en: "What's the best thing about living in Syria so far?", ar: "المحاور: ما هو أفضل شيء في العيش في سوريا حتى الآن؟" },
        { speaker: "Sofia", en: "The people. The hospitality of the people here is absolutely amazing.", ar: "صوفيا: الناس! كرم ضيافة الناس هنا مذهل ورائع تماماً." },
      ],
      quiz: [
        {
          q: "Why did Sofia choose Damascus?",
          qAr: "لماذا اختارت صوفيا دمشق؟",
          answer: "Because she and her husband love Arab culture and her husband got a job there.",
          answerAr: "لأنها وزوجها يحبان الثقافة العربية وحصل زوجها على وظيفة هناك.",
        },
        {
          q: "Why did she want to take a year off?",
          qAr: "لماذا أرادت أخذ سنة إجازة؟",
          answer: "She wanted a change and the chance to study drawing properly.",
          answerAr: "أرادت تغييراً والحصول على فرصة لدراسة الرسم بشكل جيد.",
        },
        {
          q: "Who is Salma?",
          qAr: "من هي سلمى؟",
          answer: "She is a fantastic art teacher.",
          answerAr: "هي معلمة فن رائعة.",
        },
        {
          q: "What does she like most about living in Damascus?",
          qAr: "ما أكثر شيء تحبه في العيش بدمشق؟",
          answer: "The people and the hospitality of the people.",
          answerAr: "الناس وكرم ضيافة الناس المذهل.",
        },
      ],
    },
    {
      id: "emily_robert",
      title: "R. 1.1 Emily & Robert: Starting a New Job (إيميلي وروبرت: بدء وظيفة جديدة)",
      description: "قصة إيميلي التي تحولت من معلمة رياضيات لسباكة، وروبرت الذي أصبح رباً للمنزل",
      lines: [
        { speaker: "Emily", en: "I'd been working as a math teacher in a primary school for about four years and I was getting really fed up. The kids were really badly behaved and rude. Every day was really stressful. Then one day I read in the newspaper that there aren't enough plumbers in the country! So I said jokingly to my friend, 'I'll be a plumber. I'll earn more money and I won't have to deal with those kids every day!'", ar: "إيميلي: كنت أعمل معلمة رياضيات في مدرسة ابتدائية لحوالي 4 سنوات وكنت أشعر بالملل الشديد. كان الأطفال سيئي السلوك وفظين وكان كل يوم مرهقاً جداً. ثم في أحد الأيام قرأت في الجريدة أنه لا يوجد سباكون كافون في البلاد، فقلت مازحة لصديقي سأكون سباكة وسأكسب مالاً أكثر ولن أضطر للتعامل مع الأطفال يومياً!" },
        { speaker: "Emily", en: "At first, it was just a joke, but then I started thinking about it seriously and well here I am, and so far I'm really enjoying it. I'm the only woman on the course, but my colleagues are fine.", ar: "إيميلي: في البداية كانت مزحة، لكني فكرت بجدية وها أنا ذا وأستمتع بها حقاً، وأنا المرأة الوحيدة في الدورة لكن زملائي رائعون." },
        { speaker: "Robert", en: "I lost my job when the company where I worked closed down. So my wife, Kathrin, decided to go back to work. She's an engineer and has to work long hours. So basically we changed places. I look after the baby and take the other two to school, and do the shopping and the cooking and the housework.", ar: "روبرت: فقدت وظيفتي عندما أغلقت الشركة، فقررت زوجتي كاثرين العودة للعمل لأنها مهندسة. لذا تبادلنا الأدوار؛ أعتني بالطفل الرضيع وآخذ الآخرين للمدرسة وأقوم بالتسوق والطبخ وأعمال المنزل." },
      ],
      trueFalse: [
        { statement: "Emily was joking when she first said she wanted to be a plumber.", isTrue: true, ar: "كانت إيميلي تمزح عندما قالت أول مرة إنها تريد أن تصبح سباكة." },
        { statement: "Emily faces a lot of problems with her male colleagues.", isTrue: false, ar: "تواجه إيميلي مشاكل كثيرة مع زملائها الذكور." },
        { statement: "Robert became a house-husband because he wanted to spend more time with his children.", isTrue: false, ar: "أصبح روبرت رب منزل لأنه أراد قضاء وقت أطول مع أطفاله (بل بسبب فقدان عمله وعمل زوجته)." },
        { statement: "Robert's new job is harder than his old one.", isTrue: true, ar: "وظيفة روبرت الجديدة كرب منزل أصعب من وظيفته القديمة." },
      ],
    },
  ],
};

// ==========================================
// SECTION 2: READING TEXTS & COMPREHENSION
// ==========================================
export const READING_DATA = {
  text1: {
    titleEn: "Future Careers",
    titleAr: "المهن المستقبلية",
    paragraphs: [
      {
        en: "Not all people have the ability to explore their future and build it with more confidence and clarity. Most studies have highlighted the role of parents as active agents in the career development of their children. Parents want their children to opt for a career they know well about, but what their children want or aspire to become can be completely different. Many parents said they had misguided their children into choosing a career of their choice. It is very important not to burden our children with unreal expectations. There are a few factors that are of great importance in the career selection process.",
        ar: "ليس كل الناس لديهم القدرة على استكشاف مستقبلهم وبنائه بثقة ووضوح أكبر. سلطت معظم الدراسات الضوء على دور الآباء كعوامل فاعلة في التطوير المهني لأبنائهم. يريد الآباء أن يختار أبناؤهم مهنة يعرفونها جيداً، ولكن ما يريده أبناؤهم أو يطمحون إليه يمكن أن يكون مختلفاً تماماً. قال العديد من الآباء إنهم ضللوا أبناءهم في اختيار مهنة من اختيارهم. من المهم جداً ألا نثقل كاهل أبنائنا بتوقعات غير واقعية. هناك عدد من العوامل ذات الأهمية الكبيرة في عملية اختيار المهنة.",
      },
      {
        en: "The child's aptitude is a mirror of his/her personality, strengths, and weaknesses. Hence, a designed aptitude test can reveal a lot of information regarding the child that can help in taking a well-informed career selection. It is very difficult to spend your life working in a field that you are not interested in. Courses leading towards a desired career should be found easily for the young to enable them to make right decisions about their future.",
        ar: "إن استعدادات الطفل (قدرته الفطرية) هي مرآة لشخصيته ونقاط قوته وضعفه. ومن ثم، فإن اختبار الاستعدادات المصمم بشكل جيد يمكن أن يكشف عن الكثير من المعلومات حول الطفل مما يساعد في اتخاذ قرار مهني مستنير. من الصعب جداً أن تقضي حياتك تعمل في مجال لا تهتم به. يجب أن تكون الدورات الدراسية المؤدية إلى المهنة المرغوبة متاحة بسهولة للشباب لتمكينهم من اتخاذ القرارات الصحيحة بشأن مستقبلهم.",
      },
      {
        en: "Psychologists said that it was very easy for a child to get swayed by peer pressure into choosing a career that the majority was opting rather than the one which was best for him/her. Although it should not be the most important, remuneration of a career holds value in one's life; nobody likes to earn little. A job's earnings should match the child's aspirations and provide a satisfying comfortable life.",
        ar: "قال علماء النفس إنه من السهل جداً على الطفل أن يتأثر بضغط الأقران في اختيار مهنة يختارها الأغلبية بدلاً من المهنة الأفضل له. على الرغم من أنه لا ينبغي أن يكون العامل الأكثر أهمية، إلا أن المردود المالي (الأجر) للمهنة يحمل قيمة في حياة الفرد؛ فلا أحد يحب أن يكسب القليل. يجب أن يتناسب دخل الوظيفة مع طموحات الطفل وأن يوفر له حياة مريحة ومرضية.",
      },
      {
        en: "Modern societies need professionals in every field: utility workers, garbage collectors, farmers, nurses, doctors, engineers, teachers, professors and many others. Furthermore, demotivation might have a negative impact on the child's mental health when rejecting all of his/her ideas. Parents can work together to gather information about a career and then help the child in deciding whether it is suitable or not.",
        ar: "تحتاج المجتمعات الحديثة إلى متخصصين في كل مجال: عمال المرافق، جامعي القمامة، المزارعين، الممرضين، الأطباء، المهندسين، المعلمين، الأساتذة وغيرهم الكثير. علاوة على ذلك، قد يكون لإحباط الهمة (إزالة الحافز) تأثير سلبي على الصحة النفسية للطفل عند رفض جميع أفكاره. يمكن للوالدين العمل معاً لجمع المعلومات حول مهنة معينة ثم مساعدة الطفل في تحديد ما إذا كانت مناسبة أم لا.",
      },
    ],
    vocabulary: [
      { word: "aptitude", pos: "n.", meaningAr: "الاستعداد، القدرة الفطرية", definitionEn: "natural ability or skill" },
      { word: "swayed", pos: "v.", meaningAr: "يتأثر، ينصاع", definitionEn: "influenced by others" },
      { word: "remuneration", pos: "n.", meaningAr: "المردود المالي، الأجر", definitionEn: "money paid for work or services" },
      { word: "demotivation", pos: "n.", meaningAr: "إحباط الهمة، إزالة الحافز", definitionEn: "making someone less eager or willing to do their job" },
      { word: "aspire", pos: "v.", meaningAr: "يطمح، يسعى", definitionEn: "seek to attain a goal" },
      { word: "burden", pos: "v.", meaningAr: "يثقل كاهل", definitionEn: "load heavily with unreal expectations" },
    ],
    comprehension: [
      {
        q: "How do most parents nowadays guide their children to choose their future career?",
        qAr: "كيف يوجه معظم الآباء في الوقت الحاضر أبناءهم لاختيار مهنتهم؟",
        a: "Most parents guide their children based on what they think is best for them.",
        aAr: "يوجه معظم الآباء أبناءهم بناءً على ما يعتقدون أنه الأفضل لهم.",
      },
      {
        q: "Do you think parents follow the right strategy? Why?",
        qAr: "هل تعتقد أن الآباء يتبعون الاستراتيجية الصحيحة؟ ولماذا؟",
        a: "Not always. Sometimes they misunderstand their children and put too much pressure on them.",
        aAr: "ليس دائماً. أحياناً يسيئون فهم أبنائهم ويضعون عليهم ضغطاً كبيراً.",
      },
      {
        q: "What factors should be taken into consideration to decide a future career?",
        qAr: "ما العوامل التي يجب أخذها في الاعتبار لتحديد مهنة المستقبل؟",
        a: "The child's aptitude, interests, strengths, weaknesses, and job opportunities.",
        aAr: "قدرات الطفل، اهتماماته، نقاط قوته وضعفه، وفرص العمل.",
      },
      {
        q: "What is the influence of peers on children?",
        qAr: "ما هو تأثير الأقران (الأصدقاء) على الأطفال؟",
        a: "Peers can sway children into choosing careers that may not be best for them.",
        aAr: "يمكن للأصدقاء أن يؤثروا على الأطفال لاختيار مهن قد لا تكون الأفضل لهم.",
      },
      {
        q: "How can demotivation affect the child's character?",
        qAr: "كيف يمكن لإحباط الهمة أن يؤثر على شخصية الطفل؟",
        a: "It can negatively affect the child's mental health and confidence.",
        aAr: "يمكن أن يؤثر سلباً على الصحة النفسية للطفل وثقته بنفسه.",
      },
      {
        q: "What do researchers recommend to choose our future career?",
        qAr: "ماذا يوصي الباحثون لاختيار مهنتنا المستقبلية؟",
        a: "They recommend self-reflection and guided activities to discover core values and find the right path.",
        aAr: "يوصون بالتأمل الذاتي والأنشطة الموجهة لاكتشاف القيم الجوهرية وإيجاد الطريق الصحيح.",
      },
    ],
  },
  text2: {
    titleEn: "A Learned Lesson is a Good Lesson",
    titleAr: "الدرس المتعلَّم هو درس جيد",
    paragraphs: [
      {
        en: "Most people think that education is limited to schools only, but the truth is that there are lessons that we can only learn from life, and they may be more important than those we learn at schools. Life lessons are sometimes painful before they are acquired, and in order to avoid this, we must benefit from the experiences of others.",
        ar: "يعتقد معظم الناس أن التعليم يقتصر على المدارس فقط، لكن الحقيقة هي أن هناك دروساً لا يمكننا تعلمها إلا من الحياة، وقد تكون أكثر أهمية من تلك التي نتعلمها في المدارس. دروس الحياة تكون مؤلمة أحياناً قبل أن نكتسبها، ولتجنب ذلك، يجب أن نستفيد من تجارب الآخرين.",
      },
      {
        en: "We should not pay too much attention to the trivial things that are not important and waste our time and effort. Since life is so unpredictable, we must not live on expectations only and meet everything new in life with optimism and positive thinking. There is no word more boring and monotonous than the word 'I'. We must be confident of ourselves, but that does not mean we talk about ourselves and our accomplishments all the time, as this inherits vanity. Human relationships are also important because without love and support from family and friends, you will not feel happy and will not achieve success in life.",
        ar: "لا ينبغي أن نولي اهتماماً كبيراً للأشياء التافهة غير المهمة التي تضيع وقتنا وجهدنا. وبما أن الحياة غير متوقعة إلى هذا الحد، فلا يجب أن نعيش على التوقعات فقط، بل نواجه كل ما هو جديد في الحياة بتفاؤل وتفكير إيجابي. لا توجد كلمة أكثر مللاً ورتابة من كلمة 'أنا'. يجب أن نكون واثقين من أنفسنا، لكن هذا لا يعني أن نتحدث عن أنفسنا وإنجازاتنا طوال الوقت، فهذا يورث الغرور. العلاقات الإنسانية مهمة أيضاً لأنه بدون حب ودعم الأسرة والأصدقاء، لن تشعر بالسعادة ولن تحقق النجاح في الحياة.",
      },
      {
        en: "Man by nature makes mistakes, so be tolerant and seek excuses for those around you, and if someone comes to you with an apology, do not stop him and do not carry in your heart any envy of anyone. There are no alternatives to exercising, eating well, fresh air and sunshine. Take care of your health and make it a priority for your entire life.",
        ar: "الإنسان بطبيعته يخطئ، لذا كن متسامحاً وابحث عن الأعذار لمن حولك، وإذا جاءك شخص معتذراً، فلا تمنعه، ولا تحمل في قلبك أي حقد أو حسد لأحد. لا بديل عن ممارسة الرياضة، وتناول الطعام الجيد، والهواء النقي، وأشعة الشمس. اعتنِ بصحتك واجعلها أولوية طوال حياتك.",
      },
      {
        en: "The pursuit of success will make you succeed in the end, no matter how long the period is, but keep trying. Failure is a great teacher in life. It teaches us humility and how to correct our course of life. A great example is Thomas Edison. He failed many times, but he did not give up until he succeeded. Even when he failed, Edison learned something: 'I get results in everything I try,' he said once in later life. The golden rule for everybody is to be honest, trustful, useful and generous so that they leave life with a trace that those around them will not forget.",
        ar: "السعي لتحقيق النجاح سيجعلك تنجح في النهاية، مهما طالت المدة، ولكن استمر في المحاولة. الفشل هو معلم عظيم في الحياة، فهو يعلمنا التواضع وكيفية تصحيح مسار حياتنا. وخير مثال على ذلك توماس إديسون؛ فقد فشل مرات عديدة، لكنه لم يستسلم حتى نجح. حتى عندما فشل، كان إديسون يتعلم شيئاً جديداً: قال ذات مرة في حياته المتأخرة: 'أحصل على نتائج في كل شيء أحاول القيام به'. القاعدة الذهبية للجميع هي أن تكون صادقاً، جديراً بالثقة، نافعاً، وكريماً، حتى تترك في الحياة أثراً لا ينساه من حولك.",
      },
    ],
    vocabularyMatch: [
      { word: "trivial", meaningAr: "تافه", defEn: "not serious, important or valuable", defAr: "غير جاد، غير مهم أو قليل القيمة" },
      { word: "inherit", meaningAr: "يرث / يورث", defEn: "to receive a characteristic in someone's behaviour", defAr: "أن يتلقى صفة في سلوك شخص ما" },
      { word: "vanity", meaningAr: "غرور", defEn: "too much pride in one's self", defAr: "الكثير من الفخر بالنفس" },
      { word: "tolerant", meaningAr: "متسامح", defEn: "allowing people to do, say, or believe what they want", defAr: "السماح للناس بفعل أو قول أو اعتقاد ما يريدون" },
      { word: "envy", meaningAr: "حسد / حقد", defEn: "jealousy or desire for something which belongs to another person", defAr: "الغيرة أو الرغبة في شيء يملكه شخص آخر" },
      { word: "humility", meaningAr: "تواضع", defEn: "modesty", defAr: "التواضع والبساطة" },
      { word: "trace", meaningAr: "أثر", defEn: "a mark that something has been in a place", defAr: "علامة تدل على أن شيئاً ما كان موجوداً في مكان" },
    ],
    trueFalse: [
      { statement: "The best life lessons can only be learnt at schools.", isTrue: false, ar: "أفضل دروس الحياة يمكن تعلمها فقط في المدارس (خطأ، بل من الحياة أيضاً)." },
      { statement: "Silly things are important and teach us great lessons.", isTrue: false, ar: "الأشياء التافهة مهمة وتعلمنا دروساً عظيمة (خطأ، يجب ألا نضيع وقتنا بها)." },
      { statement: "Being optimistic and positive leads to vanity.", isTrue: false, ar: "أن تكون متفائلاً وإيجابياً يؤدي للغرور (خطأ، الحديث الدائم عن الأنا يورث الغرور)." },
      { statement: "Family plays an essential role in someone's success.", isTrue: true, ar: "تلعب الأسرة دوراً أساسياً في نجاح الشخص (صحيح)." },
      { statement: "Taking care of our health increases our chance to achieve success.", isTrue: true, ar: "الاعتناء بصحتنا يزيد من فرصتنا لتحقيق النجاح (صحيح)." },
    ],
  },
};

// ==========================================
// SECTION 3: GRAMMAR & RULES
// ==========================================
export const GRAMMAR_DATA = {
  rules: [
    {
      id: "present_simple",
      titleEn: "Present Simple",
      titleAr: "المضارع البسيط",
      structure: "I / You / We / They + base verb | He / She / It + verb + s / es",
      usageAr: "نستخدمه للحقائق العامة، والعادات، والأعمال الروتينية اليومية.",
      examples: [
        { en: "He works every day.", ar: "يعمل كل يوم." },
        { en: "She gets up early.", ar: "تستيقظ مبكراً." },
        { en: "Water boils at 100°C.", ar: "يغلي الماء عند 100 درجة مئوية." },
      ],
      keyWords: ["always", "usually", "often", "sometimes", "never", "every day/week/month"],
    },
    {
      id: "present_continuous",
      titleEn: "Present Continuous",
      titleAr: "المضارع المستمر",
      structure: "am / is / are + verb + ing",
      usageAr: "نستخدمه للأفعال التي تحدث الآن في لحظة التحدث، أو المواقف المؤقتة.",
      examples: [
        { en: "I am studying now.", ar: "أنا أدرس الآن." },
        { en: "This month I am working very hard.", ar: "هذا الشهر أعمل بجد شديد." },
        { en: "She is sweating because she is sweeping the floor.", ar: "إنها تتعرق لأنها تمسح الأرضية." },
      ],
      keyWords: ["now", "at the moment", "look!", "listen!", "at present", "this month/week"],
    },
    {
      id: "present_perfect_vs_past",
      titleEn: "Present Perfect Simple vs. Past Simple",
      titleAr: "المضارع التام البسيط مقابل الماضي البسيط",
      structure: "Past Simple: Verb + ed (or V2) | Present Perfect: have / has + past participle (V3)",
      usageAr: "الماضي البسيط: لأفعال مكتملة في وقت محدد في الماضي. المضارع التام: لأفعال بدأت في الماضي ولها أثر في الحاضر أو تجارب حياة بدون تحديد وقت.",
      examples: [
        { en: "I saw Jack last night. (Past Simple - specific time)", ar: "رأيت جاك الليلة الماضية (وقت محدد)." },
        { en: "I haven't seen him for months. (Present Perfect - duration/relevance)", ar: "لم أره منذ أشهر (أثر بالحاضر)." },
        { en: "Have you ever won a competition? - Yes, I won in 2006.", ar: "هل سبق لك أن فزت بمسابقة؟ - نعم، فزت عام 2006." },
      ],
      keyWords: ["last night", "yesterday", "ago", "in 2006 (Past Simple)", "ever", "never", "just", "already", "yet", "since", "for (Present Perfect)"],
    },
    {
      id: "present_perfect_continuous",
      titleEn: "Present Perfect Continuous",
      titleAr: "المضارع التام المستمر",
      structure: "have / has been + verb + ing",
      usageAr: "نستخدمه لأفعال بدأت في الماضي وما زالت مستمرة حتى لحظة التحدث، أو فعل انتهى لتوه ونتيجته واضحة.",
      examples: [
        { en: "I have been sweeping the floors.", ar: "كنت أمسح الأرضيات (وما زلت أو الأثر واضح كالعرق)." },
        { en: "He has been cutting the grass.", ar: "كان يقص العشب." },
        { en: "I have been peeling onions.", ar: "كنت أقشر البصل (لذلك عيناي حمراوان)." },
      ],
      keyWords: ["for", "since", "all day", "all week", "how long...?"],
    },
    {
      id: "passive_voice",
      titleEn: "Past Simple Passive",
      titleAr: "المبني للمجهول في الماضي البسيط",
      structure: "was / were + past participle (V3)",
      usageAr: "نستخدمه للتركيز على الحدث نفسه بدلاً من الفاعل، أو عندما يكون الفاعل غير معروف أو غير مهم.",
      examples: [
        { en: "Many parents said they had misguided their children.", ar: "قال العديد من الآباء إنهم ضللوا أبناءهم." },
        { en: "The room was cleaned yesterday.", ar: "تم تنظيف الغرفة بالأمس." },
      ],
      keyWords: ["by", "was + V3", "were + V3"],
    },
    {
      id: "third_conditional",
      titleEn: "Third Conditional",
      titleAr: "الشرط الثالث (المستحيل)",
      structure: "If + had + past participle, would have + past participle",
      usageAr: "نستخدمه للحديث عن ماضٍ خيالي ونتيجته في الماضي (الندم أو افتراضات غير واقعية).",
      examples: [
        { en: "If I had studied harder, I would have passed the exam.", ar: "لو كنت قد درست بجد، لكنت قد نجحت في الامتحان." },
      ],
      keyWords: ["If + had + V3", "would have + V3"],
    },
  ],
  exercises: [
    {
      id: "janes_letter",
      title: "Jane's Letter to David (رسالة جين إلى ديفيد)",
      instructionAr: "صحح الأفعال بين الأقواس لتناسب زمن المضارع البسيط أو المستمر:",
      items: [
        { original: "I'm having two sisters", corrected: "have", reasonAr: "الملكية (have) فعل حالة لا يأتي في المستمر" },
        { original: "We are getting up at seven o'clock", corrected: "get up", reasonAr: "عادة روتينية يومية تعبر بالمضارع البسيط" },
        { original: "I am finishing my classes at five", corrected: "finish", reasonAr: "جدول مواعيد ثابت يعبر بالمضارع البسيط" },
        { original: "This month I work very hard", corrected: "am working", reasonAr: "حدث مؤقت هذا الشهر يعبر بالمضارع المستمر" },
        { original: "At the moment, I eat breakfast", corrected: "am eating", reasonAr: "في هذه اللحظة (At the moment) يحتاج مضارع مستمر" },
        { original: "I'm not understanding the words", corrected: "don't understand", reasonAr: "فعل الفهم والإدراك (understand) فعل حالة لا يأتي مستمراً" },
        { original: "Are you liking these films?", corrected: "Do you like", reasonAr: "فعل الحب والتفضيل (like) فعل حالة لا يأتي مستمراً" },
      ],
    },
    {
      id: "past_vs_perfect",
      title: "Dialogues: Past Simple or Present Perfect (حوارات الماضي والمضارع التام)",
      instructionAr: "اختر الصيغة الصحيحة بين الماضي البسيط والمضارع التام:",
      items: [
        { q: "I (see) Jack last night.", options: ["saw", "have seen"], answer: "saw", reasonAr: "last night تحدد وقتاً ماضياً محدداً" },
        { q: "Oh really. I (not see) him for months.", options: ["haven't seen", "didn't see"], answer: "haven't seen", reasonAr: "for months تشير إلى فترة ممتدة للحاضر" },
        { q: "Have you ever (win) a competition?", options: ["won", "win"], answer: "won", reasonAr: "التصريف الثالث بعد have you ever" },
        { q: "Yes, I (win) a writing competition in 2006.", options: ["won", "have won"], answer: "won", reasonAr: "تاريخ محدد في الماضي (in 2006)" },
        { q: "Is that a new tab? - Yes, I just (buy) it.", options: ["bought", "have bought"], answer: "bought", reasonAr: "للحديث عن شراء تم للتو" },
      ],
    },
    {
      id: "activities_continuous",
      title: "Why are they sweating/tired? (Present Perfect Continuous)",
      instructionAr: "أكمل الإجابة باستخدام المضارع التام المستمر (have/has been + v-ing):",
      items: [
        { q: "Jane, why are you sweating?", answer: "Because I have been sweeping the floors.", ar: "لأنني كنت أمسح الأرضيات." },
        { q: "George, you look tired.", answer: "Yes, I have been cutting the grass.", ar: "نعم، كنت أقص العشب." },
        { q: "Rachel, why are your hands so soft?", answer: "Because I have been doing the washing-up.", ar: "لأنني كنت أغسل الأطباق." },
        { q: "Why are your eyes red, Mike?", answer: "Because I have been peeling onions.", ar: "لأنني كنت أقشر البصل." },
        { q: "Tom, your hands are very cold.", answer: "Yes, I have been defrosting the fridge.", ar: "نعم، كنت أفك تجميد الثلاجة." },
      ],
    },
  ],
};

// ==========================================
// SECTION 4: VOCABULARY & PHRASAL VERBS
// ==========================================
export const VOCABULARY_DATA = {
  phrasalVerbs: [
    {
      id: "reach_out_to",
      verb: "reach out to",
      meaningEn: "offer help and support to someone",
      meaningAr: "يمتد للمساعدة، يقدم الدعم لشخص ما",
      exampleEn: "The rich have to reach out to the poor.",
      exampleAr: "يجب على الأغنياء أن يمدوا يد المساعدة للفقراء.",
    },
    {
      id: "fit_in",
      verb: "fit in",
      meaningEn: "be accepted by other people in a group",
      meaningAr: "ينسجم، يتم قبوله من قبل الآخرين في المجموعة",
      exampleEn: "She didn't really fit in with her workmates in her previous job.",
      exampleAr: "لم تكن حقاً منسجمة مع زملائها في وظيفتها السابقة.",
    },
    {
      id: "get_into",
      verb: "get into",
      meaningEn: "start to become interested in something",
      meaningAr: "يبدأ بالاهتمام بشيء ما، يدخل في مجال",
      exampleEn: "I got into writing when I was a kid, and I just never stopped loving it.",
      exampleAr: "دخلت في الكتابة وبدأت الاهتمام بها عندما كنت طفلاً، ولم أتوقف أبداً عن حبها.",
    },
    {
      id: "follow_through",
      verb: "follow through",
      meaningEn: "start something and finish it in a satisfactory way",
      meaningAr: "يتابع حتى النهاية، يبدأ شيئاً وينهيه بطريقة مرضية",
      exampleEn: "We've been talking about this project for a while, and it's time to follow it through.",
      exampleAr: "كنا نتحدث عن هذا المشروع لفترة وحان الوقت لمتابعته حتى النهاية.",
    },
    {
      id: "run_into",
      verb: "run into",
      meaningEn: "encounter problems or difficulties unexpectedly",
      meaningAr: "يواجه أو يصادف صعوبات ومشاكل بشكل غير متوقع",
      exampleEn: "If you run into any trouble, just give me a call.",
      exampleAr: "إذا واجهت أي مشكلة، فقط اتصل بي.",
    },
    {
      id: "keep_up_with",
      verb: "keep up with",
      meaningEn: "stay updated and informed about something",
      meaningAr: "يواكب، يبقى على اطلاع ومعرفة بشيء ما",
      exampleEn: "A big part of my job is keeping up with the latest research in medical technology.",
      exampleAr: "جزء كبير من وظيفتي هو مواكبة أحدث الأبحاث في التكنولوجيا الطبية.",
    },
  ],
  wordFamilies: [
    {
      root: "decide (يقرر)",
      meaningAr: "اتخاذ القرار",
      forms: [
        { word: "decision", pos: "n.", meaningAr: "قرار" },
        { word: "decisive", pos: "adj.", meaningAr: "حاسم، قاطع" },
        { word: "decide", pos: "v.", meaningAr: "يقرر" },
        { word: "decided", pos: "adj.", meaningAr: "مقرَّر" },
      ],
    },
    {
      root: "accomplish (ينجز)",
      meaningAr: "الإنجاز والتحقيق",
      forms: [
        { word: "accomplishment", pos: "n.", meaningAr: "إنجاز" },
        { word: "accomplished", pos: "adj.", meaningAr: "مُنجَز، بارع" },
        { word: "accomplish", pos: "v.", meaningAr: "ينجز" },
      ],
    },
    {
      root: "guide (يرشد)",
      meaningAr: "الإرشاد والتوجيه",
      forms: [
        { word: "guidance", pos: "n.", meaningAr: "إرشاد، توجيه" },
        { word: "guide", pos: "v. / n.", meaningAr: "يرشد / مرشد" },
        { word: "guided", pos: "adj.", meaningAr: "موجَّه" },
      ],
    },
    {
      root: "vary (يتنوع)",
      meaningAr: "التنوع والاختلاف",
      forms: [
        { word: "various", pos: "adj.", meaningAr: "متنوع، متعدد" },
        { word: "variety", pos: "n.", meaningAr: "تنوع، تشكيلة" },
        { word: "vary", pos: "v.", meaningAr: "يختلف، يتنوع" },
      ],
    },
    {
      root: "real (حقيقي)",
      meaningAr: "الواقع والحقيقة",
      forms: [
        { word: "reality", pos: "n.", meaningAr: "حقيقة، واقع" },
        { word: "real", pos: "adj.", meaningAr: "حقيقي" },
        { word: "realize", pos: "v.", meaningAr: "يدرك، يحقق" },
      ],
    },
  ],
  generalVocabulary: [
    { word: "career", pos: "n.", meaningAr: "مهنة، مسار مهني" },
    { word: "dream", pos: "n.", meaningAr: "حلم" },
    { word: "inspire", pos: "v.", meaningAr: "يُلهم" },
    { word: "achieve", pos: "v.", meaningAr: "يحقق" },
    { word: "advice", pos: "n.", meaningAr: "نصيحة" },
    { word: "opportunity", pos: "n.", meaningAr: "فرصة" },
    { word: "challenge", pos: "n.", meaningAr: "تحدي" },
    { word: "passion", pos: "n.", meaningAr: "شغف" },
    { word: "responsibility", pos: "n.", meaningAr: "مسؤولية" },
    { word: "success", pos: "n.", meaningAr: "نجاح" },
    { word: "remuneration", pos: "n.", meaningAr: "مردود مالي، أجر" },
    { word: "demotivation", pos: "n.", meaningAr: "إحباط الهمة" },
    { word: "aptitude", pos: "n.", meaningAr: "استعداد، موهبة فطرية" },
    { word: "swayed", pos: "v.", meaningAr: "يتأثر، ينصاع" },
    { word: "burden", pos: "v.", meaningAr: "يثقل كاهل" },
    { word: "aspire", pos: "v.", meaningAr: "يطمح" },
    { word: "humility", pos: "n.", meaningAr: "تواضع" },
    { word: "vanity", pos: "n.", meaningAr: "غرور" },
    { word: "tolerant", pos: "adj.", meaningAr: "متسامح" },
    { word: "envy", pos: "n.", meaningAr: "حسد" },
    { word: "trace", pos: "n.", meaningAr: "أثر" },
    { word: "trivial", pos: "adj.", meaningAr: "تافه" },
  ],
};

// ==========================================
// SECTION 5: PRONUNCIATION & HOMOPHONES
// ==========================================
export const HOMOPHONES_DATA = {
  definitionEn: "Homophones are words that have the same pronunciation but different meanings and spellings.",
  definitionAr: "الكلمات المتشابهة في النطق هي كلمات تُنطق بنفس الطريقة ولكنها تختلف في المعنى والإملاء.",
  pairs: [
    {
      id: "h1",
      word1: "way",
      meaning1: "طريق / طريقة",
      word2: "weigh",
      meaning2: "يزن (الوزن)",
      sentence: "Which (way / weigh) should we use to (way / weigh) the goods?",
      sentenceAr: "أي (طريقة way) نستخدم لـ (وزن weigh) البضائع؟",
      slot1Correct: "way",
      slot2Correct: "weigh",
    },
    {
      id: "h2",
      word1: "weather",
      meaning1: "طقس / جو",
      word2: "whether",
      meaning2: "ما إذا كان / فيما إذا",
      sentence: "No one knows (weather / whether) the (weather / whether) will be fine tomorrow.",
      sentenceAr: "لا أحد يعرف (ما إذا كان whether) (الطقس weather) سيكون جيداً غداً.",
      slot1Correct: "whether",
      slot2Correct: "weather",
    },
    {
      id: "h3",
      word1: "road",
      meaning1: "طريق",
      word2: "rode",
      meaning2: "ركب (الماضي من ride)",
      sentence: "The cyclist (road / rode) his bike and set off quickly on the (road / rode).",
      sentenceAr: "ركب (rode) الدراجة وسرع على الطريق (road).",
      slot1Correct: "rode",
      slot2Correct: "road",
    },
    {
      id: "h4",
      word1: "son",
      meaning1: "ابن",
      word2: "sun",
      meaning2: "شمس",
      sentence: "The man is enjoying his time with his (son / sun) on the beach under the (son / sun).",
      sentenceAr: "يستمتع الرجل بوقته مع ابنه (son) على الشاطئ تحت الشمس (sun).",
      slot1Correct: "son",
      slot2Correct: "sun",
    },
    {
      id: "h5",
      word1: "eight",
      meaning1: "رقم ثمانية (8)",
      word2: "ate",
      meaning2: "أكل (الماضي من eat)",
      sentence: "I only (eight / ate) a sandwich at (eight / ate) before I went to bed.",
      sentenceAr: "أكلت (ate) ساندويتشاً في الساعة الثامنة (eight) قبل النوم.",
      slot1Correct: "ate",
      slot2Correct: "eight",
    },
    {
      id: "h6",
      word1: "right",
      meaning1: "صحيح / يمين",
      word2: "write",
      meaning2: "يكتب",
      sentence: "The teacher asked the students to (right / write) down the (right / write) answer.",
      sentenceAr: "طلب المعلم من الطلاب أن يكتبوا (write) الإجابة الصحيحة (right).",
      slot1Correct: "write",
      slot2Correct: "right",
    },
    {
      id: "h7",
      word1: "by",
      meaning1: "بواسطة / بجانب",
      word2: "buy",
      meaning2: "يشتري",
      sentence: "We usually (by / buy) our food from a shop (by / buy) the corner.",
      sentenceAr: "نشتري (buy) طعامنا عادة من متجر بجانب (by) الزاوية.",
      slot1Correct: "buy",
      slot2Correct: "by",
    },
    {
      id: "h8",
      word1: "here",
      meaning1: "هنا",
      word2: "hear",
      meaning2: "يسمع",
      sentence: "I wanted to sit (here / hear) to be able to (here / hear) the speech well.",
      sentenceAr: "أردت أن أجلس هنا (here) لأتمكن من سماع (hear) الخطاب جيداً.",
      slot1Correct: "here",
      slot2Correct: "hear",
    },
    {
      id: "h9",
      word1: "break",
      meaning1: "يكسر / استراحة",
      word2: "brake",
      meaning2: "فرامل (مكابح)",
      sentence: "When teaching my daughter how to drive, I told her if she didn't hit the (break / brake) in time she would (break / brake) the car's mirror.",
      sentenceAr: "إذا لم تضغط على الفرامل (brake) فستكسر (break) المرآة.",
      slot1Correct: "brake",
      slot2Correct: "break",
    },
    {
      id: "h10",
      word1: "cell",
      meaning1: "زنزانة / خلية",
      word2: "sell",
      meaning2: "يبيع",
      sentence: "If you (cell / sell) rotten food, you will get arrested and end up in a prison (cell / sell).",
      sentenceAr: "إذا بعت (sell) طعاماً فاسداً فستنتهي بك الحال في زنزانة (cell) السجن.",
      slot1Correct: "sell",
      slot2Correct: "cell",
    },
    {
      id: "h11",
      word1: "flour",
      meaning1: "طحين (دقيق)",
      word2: "flower",
      meaning2: "زهرة / وردة",
      sentence: "To bake a (flour / flower)-shaped cake, you'll need some (flour / flower).",
      sentenceAr: "لخبز كعكة على شكل زهرة (flower) ستحتاج لبعض الطحين (flour).",
      slot1Correct: "flower",
      slot2Correct: "flour",
    },
    {
      id: "h12",
      word1: "our",
      meaning1: "لنا (ضمير ملكية)",
      word2: "hour",
      meaning2: "ساعة زمنية",
      sentence: "We have one (our / hour) before (our / hour) appointment with the real estate agent.",
      sentenceAr: "لدينا ساعة واحدة (hour) قبل موعدنا (our) مع وكيل العقارات.",
      slot1Correct: "hour",
      slot2Correct: "our",
    },
    {
      id: "h13",
      word1: "night",
      meaning1: "ليلة / ليل",
      word2: "knight",
      meaning2: "فارس (محارب)",
      sentence: "The (night / knight) is on his way to the castle, but traveling at (night / knight) is very dangerous.",
      sentenceAr: "الفارس (knight) في طريقه للقلعة، لكن السفر ليلاً (night) خطير جداً.",
      slot1Correct: "knight",
      slot2Correct: "night",
    },
    {
      id: "h14",
      word1: "sea",
      meaning1: "بحر",
      word2: "see",
      meaning2: "يرى",
      sentence: "My little brother feels excited every time he (sea / see / sees) a (sea / see) turtle.",
      sentenceAr: "يشعر أخي الصغير بالحماس كلما رأى (sees) سلحفاة بحرية (sea).",
      slot1Correct: "sees",
      slot2Correct: "sea",
    },
  ],
};

// ==========================================
// SECTION 6: EVERYDAY ENGLISH & SPEAKING / WRITING
// ==========================================
export const EVERYDAY_ENGLISH_DATA = {
  givingAdvice: {
    title: "Giving Advice (تقديم النصيحة)",
    categories: [
      {
        type: "Giving advice (تقديم النصيحة)",
        typeColor: "blue",
        phrases: [
          { en: "If I were you......", ar: "لو كنت مكانك......" },
          { en: "You'd better....", ar: "من الأفضل أن...." },
          { en: "You should....", ar: "يجب أن...." },
          { en: "Try to....", ar: "حاول أن...." },
          { en: "Instead of... you can...", ar: "بدلاً من.... يمكنك أن..." },
        ],
      },
      {
        type: "Accepting advice completely (قبول النصيحة بالكامل)",
        typeColor: "emerald",
        phrases: [
          { en: "That's true. I haven't thought about that before.", ar: "هذا صحيح، لم أفكر في ذلك من قبل." },
          { en: "OK. I can do that.", ar: "حسناً، يمكنني أن أفعل ذلك." },
          { en: "Yes, you're right. I'll do that.", ar: "نعم، أنت على حق، سأفعل ذلك." },
          { en: "Of course! I should've thought about that.", ar: "بالطبع! كان يجب أن أفكر في ذلك." },
        ],
      },
      {
        type: "Hesitating (التردد / عدم التأكد)",
        typeColor: "amber",
        phrases: [
          { en: "Maybe you're right, but....", ar: "ربما تكون على حق، لكن...." },
          { en: "Well, you see....", ar: "حسناً، كما ترى...." },
          { en: "I'm not sure. Maybe I could....", ar: "لست متأكداً، ربما أستطيع...." },
          { en: "I'm not sure if this is the best thing to do now.", ar: "لست متأكداً إذا كان هذا هو أفضل شيء أفعله الآن." },
        ],
      },
    ],
    situations: [
      {
        id: "sit1",
        prompt: "Your friend is a heavy smoker. Try to give him advice to quit smoking.",
        promptAr: "صديقك مدخن بشراهة. حاول أن تنصحه بأن يترك التدخين.",
        dialogue: [
          { speaker: "You", text: "You'd better quit smoking. It's really bad for your health.", ar: "من الأفضل أن توقف التدخين، إنه سيء جداً لصحتك." },
          { speaker: "Friend", text: "Maybe you're right, but it's not easy.", ar: "ربما تكون على حق، لكن الأمر ليس سهلاً." },
          { speaker: "You", text: "If I were you, I would try to exercise and drink more water. Instead of smoking, you can chew gum.", ar: "لو كنت مكانك، سأحاول ممارسة الرياضة وشرب الماء، وبدلاً من التدخين يمكنك مضغ العلكة." },
          { speaker: "Friend", text: "OK. I can do that. Thanks!", ar: "حسناً، يمكنني أن أفعل ذلك. شكراً!" },
        ],
      },
      {
        id: "sit2",
        prompt: "Your cousin is travelling to England to study there. But he doesn't speak English well. Give him some advice to improve his English.",
        promptAr: "ابن عمك مسافر إلى إنجلترا للدراسة هناك، لكنه لا يتحدث الإنجليزية جيداً. قدم له نصائح لتحسين لغته.",
        dialogue: [
          { speaker: "You", text: "You should practice English every day. Try to watch English movies and listen to songs.", ar: "يجب أن تمارس الإنجليزية كل يوم، حاول أن تشاهد أفلاماً وتستمع للأغاني." },
          { speaker: "Cousin", text: "Well, you see... I don't know where to start.", ar: "حسناً، كما ترى... لا أعرف من أين أبدأ." },
          { speaker: "You", text: "Instead of translating in your head, speak in English! And listen to English podcasts.", ar: "بدلاً من الترجمة في ذهنك، تحدث بالإنجليزية واستمع لبودكاست إنجليزي." },
          { speaker: "Cousin", text: "That's true. I haven't thought about that before. I'll try it.", ar: "هذا صحيح، لم أفكر في ذلك من قبل، سأجرب ذلك." },
        ],
      },
      {
        id: "sit3",
        prompt: "Your sister has an important event and she can't miss her class / work.",
        promptAr: "لدى أختك حدث مهم في العطلة القادمة ولا تستطيع أن تغيب عن صفها / عملها.",
        dialogue: [
          { speaker: "You", text: "You'd better plan your time well. Try to finish your work early.", ar: "من الأفضل أن تخططي لوقتك جيداً، وحاولي إنهاء عملك مبكراً." },
          { speaker: "Sister", text: "I'm not sure if I can do everything. Maybe I could ask my teacher for help.", ar: "لست متأكدة إذا كان بإمكاني فعل كل شيء، ربما أسأل معلمي المساعدة." },
          { speaker: "You", text: "If I were you, I would ask for permission in advance.", ar: "لو كنت مكانك، سأطلب الإذن مسبقاً." },
          { speaker: "Sister", text: "Yes, you're right. I'll do that. Thank you!", ar: "نعم، أنت على حق، سأفعل ذلك، شكراً لك!" },
        ],
      },
    ],
  },
  modelWriting: [
    {
      titleEn: "The Job I Want After Graduation (100 words)",
      titleAr: "نموذج موضوع: الوظيفة التي أريدها بعد التخرج",
      contentEn: `After graduation, I want to become a software developer. This job requires strong skills in programming, problem-solving, and teamwork. I need to keep learning new technologies and improve my English. I expect to face challenges such as heavy workloads, tight deadlines, and constant updates in technology. However, I believe I can overcome these challenges with hard work and patience. I know that knowledge, creativity and dedication are the keys to success in my future career.`,
      contentAr: `بعد التخرج، أريد أن أصبح مطور برامج. تتطلب هذه الوظيفة مهارات قوية في البرمجة، وحل المشكلات، والعمل الجماعي. أحتاج إلى الاستمرار في تعلم تقنيات جديدة وتحسين لغتي الإنجليزية. أتوقع أن أواجه تحديات مثل عبء العمل الثقيل، والمواعيد النهائية الضيقة، والتحديثات المستمرة في التكنولوجيا. ومع ذلك، أعتقد أنني أستطيع التغلب على هذه التحديات بالعمل الجاد والصبر. أعرف أن المعرفة والإبداع والتفاني هي مفاتيح النجاح في مسيرتي المهنية المستقبلية.`,
      tips: [
        "Plan your ideas before you write. (خطط لأفكارك قبل الكتابة)",
        "Write clearly and in short sentences. (اكتب بوضوح وبجمل قصيرة)",
        "Use linking words (and, but, however, because). (استخدم كلمات الربط)",
        "Check your spelling and grammar. (تحقق من الإملاء والقواعد)",
      ],
    },
    {
      titleEn: "Life Choices & Decisions (Personal Experience Essay)",
      titleAr: "نموذج موضوع: تجربة شخصية حول الخيارات والقرارات المصيرية",
      contentEn: `One of the most important decisions I have ever made was to study abroad. It was a choice that changed my life in many ways. Before I made this decision, I was afraid of leaving my family and friends. I also worried about the language and living in a new country. The first few weeks were difficult. I missed home and found it hard to understand some of the lessons. However, I tried my best, made new friends, and asked my teachers for help. After a few months, I started to enjoy my life there. I improved my language, learned about a new culture, and became more independent. This decision taught me that stepping out of my comfort zone helped me grow. I am proud that I made this choice.`,
      contentAr: `واحد من أهم القرارات التي اتخذتها في حياتي كان القرار بالدراسة في الخارج. كان هذا الخيار قراراً غيّر حياتي بطرق عديدة. قبل أن أتخذ هذا القرار، كنت خائفاً من ترك عائلتي وأصدقائي، كما كنت قلقاً بشأن اللغة والعيش في بلد جديد. كانت الأسابيع الأولى صعبة؛ اشتقت إلى المنزل ووجدت صعوبة في فهم بعض الدروس، ومع ذلك حاولت بجدية، وكوّنت أصدقاء جدد، وطلبت المساعدة من معلميّ. بعد عدة أشهر، بدأت أستمتع بحياتي هناك، وتحسنت لغتي وتعلمت ثقافة جديدة وأصبحت أكثر استقلالاً. علمني هذا القرار أن الخروج من منطقة الراحة ساعدني على النمو، وأنا فخور بأنني اتخذت هذا الخيار.`,
      structure: {
        intro: "Introduction: Name the experience & hook reader's interest.",
        body: "Body Paragraphs: Describe what happened before, during, and challenges faced.",
        conclusion: "Conclusion: Final feelings & what you learned from the experience.",
      },
    },
  ],
};

// ==========================================
// SECTION 7: 7 CURRICULUM WORKSHEETS & MODEL SOLUTIONS
// ==========================================
export const WORKSHEETS_DATA = [
  {
    id: 1,
    titleEn: "Worksheet 1: Unit 1 Overview & Listening Comprehension",
    titleAr: "ورقة عمل 1: نظرة عامة على الوحدة الأولى ونصوص الاستماع التفاعلية",
    subtitle: "Life Choices - Sofia in Damascus & Emily/Robert Career Transitions",
    teacherNotes: "تمارين شاملة مبنية على تسجيلات الوحدة ومحادثاتها مع الحل النموذجي المعتمد للمعلمة جيداء صقر.",
    exercises: [
      {
        type: "qa",
        title: "Part A: Questions on Sofia's Interview in Damascus",
        questions: [
          { q: "How long has Sofia been living in Damascus?", answer: "For about six months now.", ar: "منذ متى تعيش صوفيا في دمشق؟ (منذ حوالي 6 أشهر)" },
          { q: "What does her husband Maher do?", answer: "He is an English teacher who got a job in a language school.", ar: "ماذا يعمل زوجها ماهر؟ (مدرس إنجليزي في معهد لغات)" },
          { q: "What does Sofia consider the best thing about living in Syria?", answer: "The hospitality of the people.", ar: "ما هو أفضل شيء برأي صوفيا في سوريا؟ (كرم ضيافة الناس)" },
        ],
      },
      {
        type: "tf",
        title: "Part B: True or False on Emily and Robert's Interview",
        questions: [
          { q: "Emily retrained to become a plumber because there was a shortage of plumbers.", isTrue: true, explanation: "She read in the newspaper that there weren't enough plumbers in the country." },
          { q: "Robert's wife decided to stay at home while Robert went to work.", isTrue: false, explanation: "Robert stayed at home as a house-husband while his wife Kathrin went to work as an engineer." },
          { q: "Robert finds doing housework and taking care of kids easier than his previous job.", isTrue: false, explanation: "Robert stated that being a house-husband is the hardest work he has ever done." },
        ],
      },
    ],
  },
  {
    id: 2,
    titleEn: "Worksheet 2: Reading Text 1 - Future Careers",
    titleAr: "ورقة عمل 2: نص القراءة الأول - المهن المستقبلية وتطوير المسار المهني",
    subtitle: "Comprehension Questions, Aptitude Testing & Peer Pressure Analysis",
    teacherNotes: "تركز هذه الورقة على مهارات الفهم والاستنتاج ومعاني المفردات التخصصية باللغتين الإنجليزية والعربية.",
    exercises: [
      {
        type: "mcq",
        title: "Part A: Vocabulary Meaning Selection",
        questions: [
          { q: "What does 'aspire' mean?", options: ["seek to attain a goal", "advance quickly", "give up easily"], correctIndex: 0 },
          { q: "What does 'burden' mean in 'burden children with expectations'?", options: ["reduce pressure", "load heavily", "solve problems"], correctIndex: 1 },
          { q: "What does 'aptitude' mean?", options: ["social status", "natural ability or skill", "wealth"], correctIndex: 1 },
          { q: "What is 'remuneration'?", options: ["money paid for work or services", "unpaid volunteer work", "a debt owed"], correctIndex: 0 },
          { q: "What does 'demotivation' lead to?", options: ["increased enthusiasm", "making someone less eager to work", "finding solutions"], correctIndex: 1 },
        ],
      },
      {
        type: "fill",
        title: "Part B: Sentence Completion from Text",
        questions: [
          { sentence: "Parents play a vital ______ in the career development of their children.", correctWord: "role", ar: "يلعب الآباء دوراً حيوياً..." },
          { sentence: "Parents should study very well the ______ of their children to decide their future career.", correctWord: "aptitudes", ar: "يجب دراسة قدرات واستعدادات الأطفال..." },
          { sentence: "There should be leading ______ to help children choose the best job.", correctWord: "courses", ar: "يجب توفير دورات دراسية..." },
          { sentence: "Nowadays, most people encourage their children to choose their future profession based on the ______.", correctWord: "remuneration", ar: "بناءً على المردود المالي..." },
        ],
      },
    ],
  },
  {
    id: 3,
    titleEn: "Worksheet 3: Reading Text 2 - A Learned Lesson is a Good Lesson",
    titleAr: "ورقة عمل 3: نص القراءة الثاني - الدرس المتعلّم وتجارب الحياة العظيمة",
    subtitle: "Thomas Edison, Life Values, Humility vs Vanity & Golden Rules",
    teacherNotes: "تحليل عميق للحكمة الحياتية وقيم التسامح والتواضع وأهمية التعلم من الفشل والاعتناء بالصحة.",
    exercises: [
      {
        type: "match",
        title: "Part A: Match Words to Their Exact Definitions",
        pairs: [
          { word: "trivial", def: "not serious, important or valuable (تافه - غير جاد أو قليل القيمة)" },
          { word: "inherit", def: "to receive a characteristic in behaviour (يرث أو يورث صفة)" },
          { word: "vanity", def: "too much pride in one's self (الكثير من الفخر بالنفس - غرور)" },
          { word: "tolerant", def: "allowing people to do or believe what they want (متسامح)" },
          { word: "envy", def: "jealousy for something which belongs to another (حسد / غيرة)" },
          { word: "humility", def: "modesty (تواضع)" },
          { word: "trace", def: "a mark that something has been in a place (أثر لا يُمحى)" },
        ],
      },
      {
        type: "tf",
        title: "Part B: True or False Evaluation",
        questions: [
          { q: "The best life lessons can only be learnt at schools.", isTrue: false, explanation: "False: Many profound lessons can only be learned from real life." },
          { q: "Talking about oneself and accomplishments all the time leads to vanity.", isTrue: true, explanation: "True: Constant self-focus inherits vanity." },
          { q: "Thomas Edison gave up after failing his first few experiments.", isTrue: false, explanation: "False: Edison never gave up and said 'I get results in everything I try'." },
          { q: "Taking care of health should be an ongoing lifetime priority.", isTrue: true, explanation: "True: There are no alternatives to exercise, good food and fresh air." },
        ],
      },
    ],
  },
  {
    id: 4,
    titleEn: "Worksheet 4: Grammar Worksheet - Revision of Tenses",
    titleAr: "ورقة عمل 4: ورقة القواعد - المراجعة الشاملة للأزمنة والتحويلات",
    subtitle: "Present Simple, Continuous, Perfect Simple & Continuous, and Passive",
    teacherNotes: "اختبار مهارات التمييز بين الأفعال اللحظية وأفعال الحالة (Stative verbs) وتطبيق قواعد الأزمنة.",
    exercises: [
      {
        type: "correction",
        title: "Part A: Fix Incorrect Verb Forms in Jane's Letter",
        items: [
          { prompt: "Dear David, I (am having) two sisters.", modelCorrection: "have", reason: "Have indicates possession (stative verb), so it cannot be in continuous form." },
          { prompt: "We (are getting up) at seven o'clock every morning.", modelCorrection: "get up", reason: "Habitual daily routine requires Present Simple." },
          { prompt: "This month I (work) very hard for my exams.", modelCorrection: "am working", reason: "Temporary action happening this month requires Present Continuous." },
          { prompt: "At the moment, I (eat) breakfast.", modelCorrection: "am eating", reason: "'At the moment' signals action happening right now." },
          { prompt: "I'm not (understanding) the words!", modelCorrection: "don't understand", reason: "Understand is a verb of mental perception; use Present Simple." },
          { prompt: "Are you (liking) these films?", modelCorrection: "Do you like", reason: "Like expresses preference/emotion; use Present Simple." },
        ],
      },
      {
        type: "choice",
        title: "Part B: Present Perfect vs. Past Simple in Dialogues",
        items: [
          { prompt: "Lucy: (Have you ever been / Did you ever go) to Canada?", answer: "Have you ever been", explanation: "Asking about life experience with 'ever'." },
          { prompt: "Ella: Yes, I (went / have been) there last year.", answer: "went", explanation: "'Last year' is a specified completed past time." },
          { prompt: "Lucy: (Did you like / Have you liked) it?", answer: "Did you like", explanation: "Asking about feelings during the specific past trip." },
          { prompt: "Ella: Yes, I (enjoyed / have enjoyed) the trip a lot.", answer: "enjoyed", explanation: "Action completed in the past." },
        ],
      },
    ],
  },
  {
    id: 5,
    titleEn: "Worksheet 5: Vocabulary & Phrasal Verbs Mastery",
    titleAr: "ورقة عمل 5: ورقة المفردات - عائلات الكلمات والأفعال المركبة",
    subtitle: "Word Families (decide, accomplish, guide, vary) & 6 Essential Phrasal Verbs",
    teacherNotes: "إتقان اشتقاق الأسماء والصفات والأفعال وتوظيف الأفعال المركبة في جمل سياقية صحيحة.",
    exercises: [
      {
        type: "phrasal_fill",
        title: "Part A: Fill in with the Correct Phrasal Verb",
        items: [
          { sentence: "You can always ______ me if you are feeling tired with your school work.", answer: "reach out to", ar: "التواصل وطلب المساعدة" },
          { sentence: "When I travelled to Spain, I tried hard to ______ with the locals.", answer: "fit in", ar: "الانسجام مع السكان المحليين" },
          { sentence: "The group had one successful song but failed to ______ with another hit record.", answer: "follow through", ar: "المتابعة لإكمال النجاح" },
          { sentence: "Nowadays, students can ______ the latest news by using the Internet.", answer: "keep up with", ar: "مواكبة آخر الأخبار" },
          { sentence: "Our company has ______ financial difficulties this month.", answer: "run into", ar: "مواجهة صعوبات غير متوقعة" },
        ],
      },
      {
        type: "word_derivation",
        title: "Part B: Word Form Derivation",
        items: [
          { prompt: "Individuals have (vary) ______ dreams in their day-to-day existence.", answer: "various", pos: "adjective" },
          { prompt: "Everyone endeavours a great deal to make dreams a (real) ______.", answer: "reality", pos: "noun" },
          { prompt: "Future plans and (decide) ______ have a great importance in a person's life.", answer: "decisions", pos: "plural noun" },
          { prompt: "Gaining your boss confidence is really a great (accomplish) ______.", answer: "accomplishment", pos: "noun" },
          { prompt: "I went to a counselor for (guide) ______ on my career.", answer: "guidance", pos: "noun" },
        ],
      },
    ],
  },
  {
    id: 6,
    titleEn: "Worksheet 6: Pronunciation Mastery - Homophones",
    titleAr: "ورقة عمل 6: ورقة النطق - الكلمات المتشابهة في اللفظ والتمييز الدقيق",
    subtitle: "Distinguishing 14 Pairs of Homophones in Contextual Sentences",
    teacherNotes: "اختبار مهارات السمع والإملاء وفهم السياق للكلمات ذات اللفظ المتطابق والمعنى المختلف.",
    exercises: [
      {
        type: "homophone_quiz",
        title: "Part A: Select the Accurate Homophone",
        items: [
          { prompt: "When teaching my daughter how to drive, I told her if she didn't hit the (break / brake)...", answer: "brake", meaning: "مكابح السيارة" },
          { prompt: "If you (cell / sell) rotten food, you will get arrested...", answer: "sell", meaning: "يبيع" },
          { prompt: "...and end up in a prison (cell / sell).", answer: "cell", meaning: "زنزانة السجن" },
          { prompt: "To bake a (flour / flower)-shaped cake, you'll need some (flour / flower).", answer: "flower then flour", meaning: "زهرة أولاً ثم طحين" },
          { prompt: "The (night / knight) is on his way to the castle traveling at (night / knight).", answer: "knight then night", meaning: "الفارس أولاً ثم الليل" },
          { prompt: "My little brother feels excited every time he (seas / sees) a (sea / see) turtle.", answer: "sees then sea", meaning: "يرى أولاً ثم البحر" },
        ],
      },
    ],
  },
  {
    id: 7,
    titleEn: "Worksheet 7: Everyday English, Dialogues & Model Compositions",
    titleAr: "ورقة عمل 7: الإنجليزية اليومية، تقديم النصيحة، وكتابة الموضوع المتكامل",
    subtitle: "Everyday Advice Expressions, Conversational Scenarios & 2 Model Essays",
    teacherNotes: "الورقة السابعة والأخيرة الشاملة لتطبيق مهارات التعبير الكتابي والمحادثة العملية المعتمدة في الامتحان.",
    exercises: [
      {
        type: "advice_match",
        title: "Part A: Categorize the Expressions",
        items: [
          { expr: "If I were you, I would take a rest.", category: "Giving advice (تقديم نصيحة)" },
          { expr: "That's true. I haven't thought about that before.", category: "Accepting advice completely (قبول النصيحة تماماً)" },
          { expr: "Well, you see... I'm not sure if this is the best thing to do.", category: "Hesitating (التردد وعدم التأكد)" },
          { expr: "Instead of worrying, try to break the problem into smaller tasks.", category: "Giving advice (تقديم نصيحة)" },
          { expr: "Of course! I should've thought about that.", category: "Accepting advice completely (قبول النصيحة)" },
        ],
      },
      {
        type: "composition_review",
        title: "Part B: Composition Writing Checklist (100 words)",
        prompt: "Write a composition describing the job you want after graduation or an important life decision.",
        modelSample: "Review the model composition in Section 6: 'The Job I Want After Graduation' and 'Life Choices Personal Experience'. Check for paragraphing, linking words, correct tenses, and spelling.",
      },
    ],
  },
];
