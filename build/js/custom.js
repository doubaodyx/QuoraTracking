/**
 * Resize function without multiple trigger
 * 
 * Usage:
 * $(window).smartresize(function(){  
 *     // code here
 * });
 */
 var dataDemo = [1,2,3,4,5,6,7,8,9,10];
 var searchTypeLevel = 1;
 var nbQuestionItems = [{'questionName': 'What are the admission policies of the Rutgers School of Law in New Brunswick', 'time': 336, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/What-are-the-admission-policies-of-the-Rutgers-School-of-Law-in-New-Brunswick', 'followerNum': 0, 'viewNum': 147, 'hotness': 0.009085903662774212, 'Index': 1, 'ID': 'd034e35eb8cfe22f623f854cf19599179ba6d0a5'}, {'questionName': 'What are the academic requirements to get in the Rutgers School of Law in New Brunswick', 'time': 360, 'answerNum': 1, 'questionLink': 'https://www.quora.com/What-are-the-academic-requirements-to-get-in-the-Rutgers-School-of-Law-in-New-Brunswick', 'followerNum': 0, 'viewNum': 273, 'hotness': 0.009296469074501486, 'Index': 2, 'ID': '4087d92b76371392a88d497ea96f1067d2d9c5c8'}, {'questionName': 'Is IELTS Academic accepted in New Brunswick', 'time': 408, 'answerNum': 1, 'questionLink': 'https://www.quora.com/Is-IELTS-Academic-accepted-in-New-Brunswick', 'followerNum': 1, 'viewNum': 208, 'hotness': 0.00741022698393002, 'Index': 3, 'ID': 'd8937b4ca9f3e4772ff5142e95b8c7cb1b394239'}, {'questionName': 'How is life in New Brunswick for an immigrant', 'time': 432, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/How-is-life-in-New-Brunswick-for-an-immigrant', 'followerNum': 1, 'viewNum': 177, 'hotness': 0.006539615867891643, 'Index': 4, 'ID': '36bb6300d3ca19f2ee1ba35f4b9f5968d630c646'}, {'questionName': 'How many bowling alleys are in New Brunswick', 'time': 2784, 'answerNum': 2, 'questionLink': 'https://www.quora.com/How-many-bowling-alleys-are-in-New-Brunswick', 'followerNum': 1, 'viewNum': 252, 'hotness': 0.00043695629267593075, 'Index': 5, 'ID': '95352f1f928bf004991f22064c367e3cdbd7180d'}, {'questionName': 'What are the best place to visit in New Brunswick', 'time': 864, 'answerNum': 2, 'questionLink': 'https://www.quora.com/What-are-the-best-place-to-visit-in-New-Brunswick', 'followerNum': 0, 'viewNum': 484, 'hotness': 0.002788893619393069, 'Index': 6, 'ID': '075a17d9033823f82eafb9326fcf1a591617dba3'}, {'questionName': 'How hard is it to get into Rutgers New Brunswick SAS with an 1130 SAT and a 3 182 GPA What kind of things do I need to make my application look better', 'time': 960, 'answerNum': 2, 'questionLink': 'https://www.quora.com/How-hard-is-it-to-get-into-Rutgers-New-Brunswick-SAS-with-an-1130-SAT-and-a-3-182-GPA-What-kind-of-things-do-I-need-to-make-my-application-look-better', 'followerNum': 6, 'viewNum': 1070, 'hotness': 0.00279658984200211, 'Index': 7, 'ID': '2b3441c509ec5615cf23eb3441e988e66f0409f8'}, {'questionName': 'How does the Canadian Language Benchmark work for New Brunswick', 'time': 4608, 'answerNum': 1, 'questionLink': 'https://www.quora.com/How-does-the-Canadian-Language-Benchmark-work-for-New-Brunswick', 'followerNum': 0, 'viewNum': 136, 'hotness': 0.00017937737784337997, 'Index': 8, 'ID': '30fc78dcae5bd1b257924599248f756166970cb0'}, {'questionName': 'How would someone from New Brunswick NJ react to coming to the Bay Area', 'time': 1416, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/How-would-someone-from-New-Brunswick-NJ-react-to-coming-to-the-Bay-Area', 'followerNum': 0, 'viewNum': 370, 'hotness': 0.0012529549621830888, 'Index': 9, 'ID': 'd44b74d99a980c068cd9ba92c9fa07826d2a5160'}, {'questionName': 'How are the parties at Rutgers New Brunswick', 'time': 2784, 'answerNum': 1, 'questionLink': 'https://www.quora.com/How-are-the-parties-at-Rutgers-New-Brunswick', 'followerNum': 3, 'viewNum': 557, 'hotness': 0.0005018243703830357, 'Index': 10, 'ID': 'f7db20671b4d4b08b8bc2ca63ca60658dd98f939'}, {'questionName': 'How we can get the best laser treatment in Monroe Manalapan Old Bridge South River Brunswick or Sayreville', 'time': 2880, 'answerNum': 2, 'questionLink': 'https://www.quora.com/How-we-can-get-the-best-laser-treatment-in-Monroe-Manalapan-Old-Bridge-South-River-Brunswick-or-Sayreville', 'followerNum': 0, 'viewNum': 240, 'hotness': 0.00040808247448202256, 'Index': 11, 'ID': 'c5029fee9d1a377e9dc352b1db37727d00db6d5b'}, {'questionName': 'Is Rutgers using Chinese students to boost economy of New Brunswick', 'time': 2880, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/Is-Rutgers-using-Chinese-students-to-boost-economy-of-New-Brunswick', 'followerNum': 2, 'viewNum': 545, 'hotness': 0.0004680554577344557, 'Index': 12, 'ID': '84a0836a2b2d5d73de3b80d114c6a920c682235f'}, {'questionName': 'Is Pastor Whitman affiliated with Sovereign Grace Baptist Church in New Brunswick', 'time': 3072, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/Is-Pastor-Whitman-affiliated-with-Sovereign-Grace-Baptist-Church-in-New-Brunswick', 'followerNum': 2, 'viewNum': 494, 'hotness': 0.0004183738117001454, 'Index': 13, 'ID': '55ea3403b697c4ef662bf27775f26ad8fd8eac3a'}, {'questionName': 'Why does Rutgers especially New Brunswick establish partnerships with so many Chinese universities', 'time': 3216, 'answerNum': 3, 'questionLink': 'https://www.quora.com/Why-does-Rutgers-especially-New-Brunswick-establish-partnerships-with-so-many-Chinese-universities', 'followerNum': 1, 'viewNum': 895, 'hotness': 0.00043363752537444806, 'Index': 14, 'ID': '155ae70956f804299d58e2a05c5b007b5fa5e19f'}, {'questionName': 'Is Rutgers University New Brunswick a good school for communication', 'time': 3768, 'answerNum': 2, 'questionLink': 'https://www.quora.com/Is-Rutgers-University-New-Brunswick-a-good-school-for-communication', 'followerNum': 0, 'viewNum': 696, 'hotness': 0.00032479609327052496, 'Index': 15, 'ID': '387db705f5219b04baf6e4fecfc165c9bf1173b7'}, {'questionName': 'How good is the D1 Rutgers New Brunswick track field team', 'time': 3960, 'answerNum': 1, 'questionLink': 'https://www.quora.com/How-good-is-the-D1-Rutgers-New-Brunswick-track-field-team', 'followerNum': 2, 'viewNum': 533, 'hotness': 0.00029163817618240107, 'Index': 16, 'ID': '58aab5f5e1058efb45a83e0cee3be28a1a22583f'}, {'questionName': 'Is the Rutgers New Brunswick track and field team good If so could I be a walk on athlete with these times 100m 10 92 200m 22 61 400m 49 64', 'time': 3912, 'answerNum': 3, 'questionLink': 'https://www.quora.com/Is-the-Rutgers-New-Brunswick-track-and-field-team-good-If-so-could-I-be-a-walk-on-athlete-with-these-times-100m-10-92-200m-22-61-400m-49-64', 'followerNum': 3, 'viewNum': 1010, 'hotness': 0.0003334823991562922, 'Index': 17, 'ID': 'd9460c81584ac360e40d7e92eecba3f136801864'}, {'questionName': 'What is the best campus to live on at Rutgers New Brunswick', 'time': 4176, 'answerNum': 7, 'questionLink': 'https://www.quora.com/What-is-the-best-campus-to-live-on-at-Rutgers-New-Brunswick', 'followerNum': 0, 'viewNum': 1312, 'hotness': 0.0003154331933981088, 'Index': 18, 'ID': 'e1fc50d31249aba9452979a2a9269f281cbcee52'}, {'questionName': 'What are the risks of driving from East Brunswick New Jersey to New York City', 'time': 4512, 'answerNum': 2, 'questionLink': 'https://www.quora.com/What-are-the-risks-of-driving-from-East-Brunswick-New-Jersey-to-New-York-City', 'followerNum': 0, 'viewNum': 347, 'hotness': 0.00022193731665986176, 'Index': 19, 'ID': '31cadbfa8bc3fc5661be74ab3d2a85c503770fda'}, {'questionName': 'What are the dangers of taking a train from East Brunswick New Jersey to New York City', 'time': 4512, 'answerNum': 2, 'questionLink': 'https://www.quora.com/What-are-the-dangers-of-taking-a-train-from-East-Brunswick-New-Jersey-to-New-York-City', 'followerNum': 0, 'viewNum': 685, 'hotness': 0.00024730796895431863, 'Index': 20, 'ID': '0c6750ad93e947105bb31d20e173f85ec34706c8'}, {'questionName': 'Is Rutgers in New Brunswick good for electrical engineering', 'time': 6672, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/Is-Rutgers-in-New-Brunswick-good-for-electrical-engineering', 'followerNum': 1, 'viewNum': 484, 'hotness': 0.00012931801894763476, 'Index': 21, 'ID': '2b62eb9a94b0b5dc0aefa7cc97ca9fa9cd9b00d3'}, {'questionName': 'Why does Rutgers New Brunswick make you wait a year before transferring from Newark', 'time': 9312, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/Why-does-Rutgers-New-Brunswick-make-you-wait-a-year-before-transferring-from-Newark', 'followerNum': 0, 'viewNum': 416, 'hotness': 7.590446049518559e-05, 'Index': 22, 'ID': 'bdd7b388eed5a231ef17d05ab3a8e90e87ce99bf'}, {'questionName': 'Did anyone else get admitted to Rutgers University New Brunswick for spring 2017 PS I am asking about undergraduate students', 'time': 9696, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/Did-anyone-else-get-admitted-to-Rutgers-University-New-Brunswick-for-spring-2017-PS-I-am-asking-about-undergraduate-students', 'followerNum': 0, 'viewNum': 155, 'hotness': 5.9745787807756e-05, 'Index': 23, 'ID': '32f58eedcc72f6ad314c83a6c907d3ccfb99a92b'}, {'questionName': 'What is the average processing time for New Brunswick Provincial Nominee Program NBPNP', 'time': 7056, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/What-is-the-average-processing-time-for-New-Brunswick-Provincial-Nominee-Program-NBPNP', 'followerNum': 5, 'viewNum': 818, 'hotness': 0.00013273819671894121, 'Index': 24, 'ID': 'f1d732e8d8a050549ed60615a243ad4405736fa0'}, {'questionName': 'Is 322 in GRE 162q 161 v good enough for Rutgers New Brunswick MS Industrial Engineering', 'time': 10248, 'answerNum': 1, 'questionLink': 'https://www.quora.com/Is-322-in-GRE-162q-161-v-good-enough-for-Rutgers-New-Brunswick-MS-Industrial-Engineering', 'followerNum': 18, 'viewNum': 3292, 'hotness': 9.865788482136776e-05, 'Index': 25, 'ID': '67c25d6aeb941f23cf2f56d1483cb1a3b60f0086'}, {'questionName': 'What are the most family friendly workplaces in New Brunswick NJ', 'time': 11256, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/What-are-the-most-family-friendly-workplaces-in-New-Brunswick-NJ', 'followerNum': 1, 'viewNum': 293, 'hotness': 5.427262438826204e-05, 'Index': 26, 'ID': '0258d60e332c0a3de092b9c942a8504728806ee5'}, {'questionName': 'Which companies in New Brunswick NJ regularly hire contractors What are they like to work for', 'time': 11352, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/Which-companies-in-New-Brunswick-NJ-regularly-hire-contractors-What-are-they-like-to-work-for', 'followerNum': 1, 'viewNum': 280, 'hotness': 5.316135548477147e-05, 'Index': 27, 'ID': 'fabd073033177f9f4ef5ee269240f82b3790b984'}, {'questionName': 'What companies in New Brunswick NJ have the best employee benefits', 'time': 11496, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/What-companies-in-New-Brunswick-NJ-have-the-best-employee-benefits', 'followerNum': 3, 'viewNum': 343, 'hotness': 5.4945707464899024e-05, 'Index': 28, 'ID': '8f5535aff47ef70debc611bc2810ba8454dac501'}, {'questionName': 'What are the best private elementary schools in New Brunswick NJ What were your experiences with them', 'time': 11616, 'answerNum': 1, 'questionLink': 'https://www.quora.com/What-are-the-best-private-elementary-schools-in-New-Brunswick-NJ-What-were-your-experiences-with-them', 'followerNum': 3, 'viewNum': 919, 'hotness': 6.345243430859271e-05, 'Index': 29, 'ID': '07497eb196edf97d52d60c31559f57067859fd9c'}, {'questionName': 'What sectors of the job market are the most competitive in New Brunswick NJ', 'time': 11616, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/What-sectors-of-the-job-market-are-the-most-competitive-in-New-Brunswick-NJ', 'followerNum': 2, 'viewNum': 280, 'hotness': 5.181141053194708e-05, 'Index': 30, 'ID': '6db7549091b686496cfe5f3a8381662fb080819b'}, {'questionName': 'Who are the best Smart Home IoT consultants in New Brunswick NJ What makes them great What do they specialize in', 'time': 12168, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/Who-are-the-best-Smart-Home-IoT-consultants-in-New-Brunswick-NJ-What-makes-them-great-What-do-they-specialize-in', 'followerNum': 4, 'viewNum': 361, 'hotness': 5.131051656344338e-05, 'Index': 31, 'ID': '94cc5d21f9e377b950fbdd3b152846641fd08876'}, {'questionName': 'Are there any foreign language bookstores in New Brunswick or the surrounding area', 'time': 12456, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/Are-there-any-foreign-language-bookstores-in-New-Brunswick-or-the-surrounding-area', 'followerNum': 0, 'viewNum': 311, 'hotness': 4.6701272974877876e-05, 'Index': 32, 'ID': 'aa246a231339fa78276581eff8311b8147fa7eb6'}, {'questionName': 'Who are the best personal financial advisors in New Brunswick NJ for people saving for retirement What were your experiences with them', 'time': 12816, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/Who-are-the-best-personal-financial-advisors-in-New-Brunswick-NJ-for-people-saving-for-retirement-What-were-your-experiences-with-them', 'followerNum': 1, 'viewNum': 300, 'hotness': 4.4856772571643085e-05, 'Index': 33, 'ID': '0fa56d0eb6e7f1b6759d184a29f189caa7e7086e'}, {'questionName': 'What are the best restaurants in New Brunswick NJ What makes them special', 'time': 12840, 'answerNum': 1, 'questionLink': 'https://www.quora.com/What-are-the-best-restaurants-in-New-Brunswick-NJ-What-makes-them-special', 'followerNum': 2, 'viewNum': 409, 'hotness': 4.79179849623262e-05, 'Index': 34, 'ID': 'e1feab2d417e0dccb09a2cbcdd666240c9fa94c4'}, {'questionName': 'What are the best job fairs near New Brunswick NJ When and where are they held What were your experiences at them', 'time': 12864, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/What-are-the-best-job-fairs-near-New-Brunswick-NJ-When-and-where-are-they-held-What-were-your-experiences-at-them', 'followerNum': 1, 'viewNum': 359, 'hotness': 4.59978582654801e-05, 'Index': 35, 'ID': 'd9b641e109c7ae245c1cd0f0a401b8a456fcd26b'}, {'questionName': 'Which is the cheapest place to stay at New Brunswick New Jersey near Rutgers', 'time': 5160, 'answerNum': 1, 'questionLink': 'https://www.quora.com/Which-is-the-cheapest-place-to-stay-at-New-Brunswick-New-Jersey-near-Rutgers', 'followerNum': 2, 'viewNum': 300, 'hotness': 0.00017857249418755844, 'Index': 36, 'ID': 'd622579c6ed59a334afd9b7358325aece784ab40'}, {'questionName': 'Who are good personal injury attorneys in New Brunswick NJ What were your experiences with them', 'time': 13128, 'answerNum': 1, 'questionLink': 'https://www.quora.com/Who-are-good-personal-injury-attorneys-in-New-Brunswick-NJ-What-were-your-experiences-with-them', 'followerNum': 1, 'viewNum': 363, 'hotness': 4.507687708721436e-05, 'Index': 37, 'ID': '673545812ef9bb716eddbe21bd12ceeb15964ce2'}, {'questionName': 'How much money per hour do Uber drivers make in New Brunswick NJ Whats the most a person can reasonably make per month', 'time': 1872, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/How-much-money-per-hour-do-Uber-drivers-make-in-New-Brunswick-NJ-Whats-the-most-a-person-can-reasonably-make-per-month', 'followerNum': 2, 'viewNum': 396, 'hotness': 0.0008481158696471881, 'Index': 38, 'ID': '4775bbdf23f7e012814c922f54806d83edeb9311'}, {'questionName': 'Which college is better to study Computer Science in NJ NJIT or Rutgers New Brunswick', 'time': 4896, 'answerNum': 3, 'questionLink': 'https://www.quora.com/Which-college-is-better-to-study-Computer-Science-in-NJ-NJIT-or-Rutgers-New-Brunswick', 'followerNum': 1, 'viewNum': 1006, 'hotness': 0.00023478732078591742, 'Index': 39, 'ID': '2f30e21f360cd3e43c5fbc99aeda5795c8d510b3'}, {'questionName': 'How difficult is Rutgers', 'time': 5352, 'answerNum': 5, 'questionLink': 'https://www.quora.com/How-difficult-is-Rutgers', 'followerNum': 4, 'viewNum': 1468, 'hotness': 0.00022357400974289942, 'Index': 40, 'ID': '497036e832c4e14189aa6d96d9303523b2fc9a56'}, {'questionName': 'What is the real estate market like in New Brunswick NJ in 2017 Is it a good time to buy a house', 'time': 5472, 'answerNum': 1, 'questionLink': 'https://www.quora.com/What-is-the-real-estate-market-like-in-New-Brunswick-NJ-in-2017-Is-it-a-good-time-to-buy-a-house', 'followerNum': 2, 'viewNum': 207, 'hotness': 0.00015315943897594987, 'Index': 41, 'ID': 'c2aa2fa7f1a46940933693fea05df2ea5112540c'}, {'questionName': 'What is the best place to stay around New Brunswick', 'time': 5544, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/What-is-the-best-place-to-stay-around-New-Brunswick', 'followerNum': 0, 'viewNum': 211, 'hotness': 0.00014660196100574444, 'Index': 42, 'ID': '5e042ca9556f5ec58a1777449956b4f35383f1dc'}, {'questionName': 'Will I get into the Rutgers New Brunswick business', 'time': 5640, 'answerNum': 2, 'questionLink': 'https://www.quora.com/Will-I-get-into-the-Rutgers-New-Brunswick-business', 'followerNum': 2, 'viewNum': 486, 'hotness': 0.0001704898246188647, 'Index': 43, 'ID': '33323b1962355a81d185fafc4a18d878e85e6035'}, {'questionName': 'Should I join Rutgers New Brunswick or Camden', 'time': 5952, 'answerNum': 2, 'questionLink': 'https://www.quora.com/Should-I-join-Rutgers-New-Brunswick-or-Camden', 'followerNum': 1, 'viewNum': 548, 'hotness': 0.00015899145332467162, 'Index': 44, 'ID': '8843dffa760dbc06857bcd4d2b9734a44d0ba8a3'}, {'questionName': 'Is studying at the University of New Brunswick a good idea', 'time': 6120, 'answerNum': 2, 'questionLink': 'https://www.quora.com/Is-studying-at-the-University-of-New-Brunswick-a-good-idea', 'followerNum': 1, 'viewNum': 1114, 'hotness': 0.00016924832203743986, 'Index': 45, 'ID': '7737c34883378a5b04b275b658b93c18f307033f'}, {'questionName': 'Is driving for Uber a good way to supplement my income in New Brunswick NJ Why', 'time': 13464, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/Is-driving-for-Uber-a-good-way-to-supplement-my-income-in-New-Brunswick-NJ-Why', 'followerNum': 2, 'viewNum': 334, 'hotness': 4.279749875035043e-05, 'Index': 46, 'ID': '8b9979174fdd6a6affc20897531a5af4634cbb5e'}, {'questionName': 'My husband is working in New Brunswick NJ but we are planning on living in midtown NY do we pay income tax in NJ or NY', 'time': 13608, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/My-husband-is-working-in-New-Brunswick-NJ-but-we-are-planning-on-living-in-midtown-NY-do-we-pay-income-tax-in-NJ-or-NY', 'followerNum': 2, 'viewNum': 385, 'hotness': 4.3132628961740085e-05, 'Index': 47, 'ID': '7d47366e90cbe8e9385e8106e1106f7d2e270c4c'}, {'questionName': 'What does it take to get into Rutgers Business school in New Brunswick I have a 1720 on the SAT and 4 0 Gpa but kinda sketchy in extra curricular', 'time': 15792, 'answerNum': 3, 'questionLink': 'https://www.quora.com/What-does-it-take-to-get-into-Rutgers-Business-school-in-New-Brunswick-I-have-a-1720-on-the-SAT-and-4-0-Gpa-but-kinda-sketchy-in-extra-curricular', 'followerNum': 0, 'viewNum': 928, 'hotness': 3.980254113967237e-05, 'Index': 48, 'ID': '1cd9d0a69e262d88ee940a820b741fd5906843f3'}, {'questionName': 'What are the best high end preschools in New Brunswick NJ What makes them good or special', 'time': 14928, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/What-are-the-best-high-end-preschools-in-New-Brunswick-NJ-What-makes-them-good-or-special', 'followerNum': 2, 'viewNum': 289, 'hotness': 3.5762020533213483e-05, 'Index': 49, 'ID': '971d9db738981a76ce6b4cace0af1555f76383a7'}, {'questionName': 'Which car services are available in New Brunswick NJ How good are they compared to taxis and relative to each other', 'time': 14928, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/Which-car-services-are-available-in-New-Brunswick-NJ-How-good-are-they-compared-to-taxis-and-relative-to-each-other', 'followerNum': 1, 'viewNum': 290, 'hotness': 3.547335465772197e-05, 'Index': 50, 'ID': '7e2fa755591fb46e66619766c2d3ee6913b3a2be'}, {'questionName': 'Which intersections in New Brunswick NJ are particularly dangerous Why What could be done to improve them', 'time': 14952, 'answerNum': 1, 'questionLink': 'https://www.quora.com/Which-intersections-in-New-Brunswick-NJ-are-particularly-dangerous-Why-What-could-be-done-to-improve-them', 'followerNum': 1, 'viewNum': 294, 'hotness': 3.578208558351858e-05, 'Index': 51, 'ID': 'ab3d7a09c0d194b350730d8b3180544ac805d0e7'}, {'questionName': 'What are the pros and cons of being a driver for Uber or Lyft in New Brunswick NJ', 'time': 6192, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/What-are-the-pros-and-cons-of-being-a-driver-for-Uber-or-Lyft-in-New-Brunswick-NJ', 'followerNum': 2, 'viewNum': 350, 'hotness': 0.00013827504535644168, 'Index': 52, 'ID': 'bb30b9bbffd1d9c0e615c5f126541867c31b76c9'}, {'questionName': 'Are there Reggio Emilia preschools in New Brunswick NJ If so what are the good ones', 'time': 14976, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/Are-there-Reggio-Emilia-preschools-in-New-Brunswick-NJ-If-so-what-are-the-good-ones', 'followerNum': 1, 'viewNum': 400, 'hotness': 3.728777563433854e-05, 'Index': 53, 'ID': 'd0e8fe06bcd5c6b9cfa5c51e75cfbfdc4cefc35d'}, {'questionName': 'What are the worst commutes in New Brunswick NJ What are some tips for making them better', 'time': 14976, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/What-are-the-worst-commutes-in-New-Brunswick-NJ-What-are-some-tips-for-making-them-better', 'followerNum': 1, 'viewNum': 324, 'hotness': 3.5987210435971904e-05, 'Index': 54, 'ID': '9d349bbc630b4643e081d5f110d65a190eb58e6e'}, {'questionName': 'Where is a good place to live halfway between New Brunswick NJ and Manhattan', 'time': 22704, 'answerNum': 3, 'questionLink': 'https://www.quora.com/Where-is-a-good-place-to-live-halfway-between-New-Brunswick-NJ-and-Manhattan', 'followerNum': 1, 'viewNum': 1055, 'hotness': 2.3680216149943725e-05, 'Index': 55, 'ID': 'f664cf9aa7163b7c52827cad8d00492c20d3d76d'}, {'questionName': 'What are the graduate student housing options in New Brunswick NJ and around', 'time': 25824, 'answerNum': 2, 'questionLink': 'https://www.quora.com/What-are-the-graduate-student-housing-options-in-New-Brunswick-NJ-and-around', 'followerNum': 1, 'viewNum': 383, 'hotness': 1.662299126665993e-05, 'Index': 56, 'ID': '8677fe022f31d59265d95908a89357561343efce'}, {'questionName': 'What is the New Brunswick NJ LSAT address', 'time': 26760, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/What-is-the-New-Brunswick-NJ-LSAT-address', 'followerNum': 1, 'viewNum': 253, 'hotness': 1.442862877613426e-05, 'Index': 57, 'ID': 'c5a4b217110601fd68ad752a03524714ec09e578'}, {'questionName': 'How is the online general physics 203 course at Rutgers', 'time': 11832, 'answerNum': 1, 'questionLink': 'https://www.quora.com/How-is-the-online-general-physics-203-course-at-Rutgers', 'followerNum': 3, 'viewNum': 1463, 'hotness': 6.580935705713495e-05, 'Index': 58, 'ID': 'a75972fafd686aae7e8c6a056be77a05d44d22f6'}, {'questionName': 'What is your review of New Brunswick NJ', 'time': 29112, 'answerNum': 1, 'questionLink': 'https://www.quora.com/What-is-your-review-of-New-Brunswick-NJ', 'followerNum': 0, 'viewNum': 680, 'hotness': 1.4967727069593207e-05, 'Index': 59, 'ID': 'b9c5ce95b660df016d89a03f396b9694342038b0'}, {'questionName': 'What neighborhoods in or near New Brunswick NJ are best for families with young children', 'time': 31512, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/What-neighborhoods-in-or-near-New-Brunswick-NJ-are-best-for-families-with-young-children', 'followerNum': 1, 'viewNum': 415, 'hotness': 1.2292218893457618e-05, 'Index': 60, 'ID': 'bbac74eb7978c1f29fd1471cf6585bb8c9fc268d'}, {'questionName': 'I am in New Brunswick NJ and want to get a simple website developed Where is the best local place to go to', 'time': 33552, 'answerNum': 1, 'questionLink': 'https://www.quora.com/I-am-in-New-Brunswick-NJ-and-want-to-get-a-simple-website-developed-Where-is-the-best-local-place-to-go-to', 'followerNum': 0, 'viewNum': 698, 'hotness': 1.2145496335977192e-05, 'Index': 61, 'ID': 'd9e17c1f2d57709763aaf555a18348f7768bcbb1'}, {'questionName': 'How are online courses structured at Rutgers University New Brunswick', 'time': 34080, 'answerNum': 1, 'questionLink': 'https://www.quora.com/How-are-online-courses-structured-at-Rutgers-University-New-Brunswick', 'followerNum': 3, 'viewNum': 1465, 'hotness': 1.346717831538439e-05, 'Index': 62, 'ID': '83781e01c52332ff21111df81eeb6b0a74dbd081'}, {'questionName': 'Traveling to the states for an undergraduate summer course Is Rutgers University a good option', 'time': 34464, 'answerNum': 2, 'questionLink': 'https://www.quora.com/Traveling-to-the-states-for-an-undergraduate-summer-course-Is-Rutgers-University-a-good-option', 'followerNum': 5, 'viewNum': 1522, 'hotness': 1.357545371587494e-05, 'Index': 63, 'ID': '269a4864b560366014a4046e7886b28b7ab8852c'}, {'questionName': 'How is Sprints coverage in Rutgers%E2%80%93New Brunswick region both cellular as well as 3G 4G', 'time': 61416, 'answerNum': 1, 'questionLink': 'https://www.quora.com/How-is-Sprints-coverage-in-Rutgers%E2%80%93New-Brunswick-region-both-cellular-as-well-as-3G-4G', 'followerNum': 1, 'viewNum': 883, 'hotness': 5.1163443657798585e-06, 'Index': 64, 'ID': '075d62860d0ffac7cdd071f2fe7f62ffa7c03602'}, {'questionName': 'What is parking like in New Brunswick NJ', 'time': 54336, 'answerNum': 3, 'questionLink': 'https://www.quora.com/What-is-parking-like-in-New-Brunswick-NJ', 'followerNum': 5, 'viewNum': 542, 'hotness': 5.980222556829078e-06, 'Index': 65, 'ID': 'ed09a1691b200b1dc16caddc1bfb656f95b0931f'}, {'questionName': 'What are some of the best ways to get from within New Brunswick NJ to its nearest major airport', 'time': 54336, 'answerNum': 2, 'questionLink': 'https://www.quora.com/What-are-some-of-the-best-ways-to-get-from-within-New-Brunswick-NJ-to-its-nearest-major-airport', 'followerNum': 4, 'viewNum': 560, 'hotness': 5.92008398931001e-06, 'Index': 66, 'ID': 'e0c9e8b514a92505bb98c8a6600e36d45ba52050'}, {'questionName': 'Where can I access free WiFi in New Brunswick NJ', 'time': 54336, 'answerNum': 1, 'questionLink': 'https://www.quora.com/Where-can-I-access-free-WiFi-in-New-Brunswick-NJ', 'followerNum': 2, 'viewNum': 595, 'hotness': 5.8402537551529876e-06, 'Index': 67, 'ID': '6ecfc2b670516fbf3b418b47a43aec66693e81d2'}, {'questionName': 'What are the best bars in New Brunswick NJ', 'time': 54336, 'answerNum': 1, 'questionLink': 'https://www.quora.com/What-are-the-best-bars-in-New-Brunswick-NJ', 'followerNum': 3, 'viewNum': 364, 'hotness': 5.445987819432207e-06, 'Index': 68, 'ID': 'ee658511c571f8ad76c3696c555b361c2331dbdb'}, {'questionName': 'What is nightlife like in New Brunswick NJ', 'time': 54336, 'answerNum': 1, 'questionLink': 'https://www.quora.com/What-is-nightlife-like-in-New-Brunswick-NJ', 'followerNum': 4, 'viewNum': 416, 'hotness': 5.609918359880252e-06, 'Index': 69, 'ID': 'fb2730aa33fdbf05c622fac1faadf3b8ca000f35'}, {'questionName': 'Where can I find a clean public restroom in New Brunswick NJ', 'time': 54336, 'answerNum': 2, 'questionLink': 'https://www.quora.com/Where-can-I-find-a-clean-public-restroom-in-New-Brunswick-NJ', 'followerNum': 3, 'viewNum': 492, 'hotness': 5.759791749768786e-06, 'Index': 70, 'ID': '102864ad485ac5ccefed0561c50aa895afacd0c0'}, {'questionName': 'What restaurants in New Brunswick NJ are good for kids', 'time': 54336, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/What-restaurants-in-New-Brunswick-NJ-are-good-for-kids', 'followerNum': 1, 'viewNum': 225, 'hotness': 4.882329830678354e-06, 'Index': 71, 'ID': '85f840b89a719bdc70229aa0e0a31dc01c27f436'}, {'questionName': 'What restaurants in New Brunswick NJ are good for eating alone', 'time': 54336, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/What-restaurants-in-New-Brunswick-NJ-are-good-for-eating-alone', 'followerNum': 4, 'viewNum': 339, 'hotness': 5.382433164248025e-06, 'Index': 72, 'ID': 'ba442a3737a4a14e2a3904d2030e8e28efca38de'}, {'questionName': 'What are tips and hacks for new ride sharing drivers in New Brunswick NJ', 'time': 14976, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/What-are-tips-and-hacks-for-new-ride-sharing-drivers-in-New-Brunswick-NJ', 'followerNum': 2, 'viewNum': 351, 'hotness': 3.6789830937806e-05, 'Index': 73, 'ID': 'b1086e6328cdafcb7de64129ea18990dc50a9591'}, {'questionName': 'When is surge pricing on Uber generally in effect in New Brunswick NJ and how high does it go', 'time': 14976, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/When-is-surge-pricing-on-Uber-generally-in-effect-in-New-Brunswick-NJ-and-how-high-does-it-go', 'followerNum': 2, 'viewNum': 314, 'hotness': 3.6102314522399886e-05, 'Index': 74, 'ID': 'ed2ebbb7b0b4fa77c105cb8ac4ba532955aedfaa'}, {'questionName': 'Is there a way to ask Rutgers New Brunswick to reevaluate an application for the amount of merit based scholarship given', 'time': 15504, 'answerNum': 1, 'questionLink': 'https://www.quora.com/Is-there-a-way-to-ask-Rutgers-New-Brunswick-to-reevaluate-an-application-for-the-amount-of-merit-based-scholarship-given', 'followerNum': 1, 'viewNum': 538, 'hotness': 3.742920534921147e-05, 'Index': 75, 'ID': '67c892540a5c5b8600a3bfb8ac18600991604537'}, {'questionName': 'I dont like cold weather but I am moving to New Brunswick NJ for studies where it gets 20 at times What should I do to make sure I survive for 2 years of my study there', 'time': 18336, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/I-dont-like-cold-weather-but-I-am-moving-to-New-Brunswick-NJ-for-studies-where-it-gets-20-at-times-What-should-I-do-to-make-sure-I-survive-for-2-years-of-my-study-there', 'followerNum': 1, 'viewNum': 567, 'hotness': 2.9114028960900063e-05, 'Index': 76, 'ID': 'a3dad24149e9935d5336863e410f4b4da9113a45'}, {'questionName': 'Which school is better Rutgers New Brunswick vs SUNY Binghamton', 'time': 19440, 'answerNum': 4, 'questionLink': 'https://www.quora.com/Which-school-is-better-Rutgers-New-Brunswick-vs-SUNY-Binghamton', 'followerNum': 2, 'viewNum': 2437, 'hotness': 3.3798653548305355e-05, 'Index': 77, 'ID': '4d2d37fffdd6d76f94795a281bd70d7325cc2412'}, {'questionName': 'Has anyone hiked the entire Delaware and Raritan Canal Trail Feeder and Main in NJ from end to end What is some advice', 'time': 20976, 'answerNum': 1, 'questionLink': 'https://www.quora.com/Has-anyone-hiked-the-entire-Delaware-and-Raritan-Canal-Trail-Feeder-and-Main-in-NJ-from-end-to-end-What-is-some-advice', 'followerNum': 7, 'viewNum': 567, 'hotness': 2.509816158434035e-05, 'Index': 78, 'ID': '8dcf2d84c3da82e326fd6cf8f6bef49cf85f7048'}, {'questionName': 'If the residents of New Brunswick NJ dont constantly feel the need to correct confusion with the Canadian province of New Brunswick then why do the residents of Vancouver WA feel the need to correct confusion with the Canadian city of Vancouver BC', 'time': 21720, 'answerNum': 3, 'questionLink': 'https://www.quora.com/If-the-residents-of-New-Brunswick-NJ-dont-constantly-feel-the-need-to-correct-confusion-with-the-Canadian-province-of-New-Brunswick-then-why-do-the-residents-of-Vancouver-WA-feel-the-need-to-correct-confusion-with-the-Canadian-city-of-Vancouver-BC', 'followerNum': 4, 'viewNum': 801, 'hotness': 2.486408710105686e-05, 'Index': 79, 'ID': '3db3b5fd03a62097673442134fbcd17855abf66e'}, {'questionName': 'What restaurants in New Brunswick NJ are good for large groups', 'time': 54336, 'answerNum': 1, 'questionLink': 'https://www.quora.com/What-restaurants-in-New-Brunswick-NJ-are-good-for-large-groups', 'followerNum': 1, 'viewNum': 223, 'hotness': 4.9190148449570955e-06, 'Index': 80, 'ID': 'f5b822107429581843e9e402a4102a8717085e44'}, {'questionName': 'What places are open late in New Brunswick NJ', 'time': 54336, 'answerNum': 2, 'questionLink': 'https://www.quora.com/What-places-are-open-late-in-New-Brunswick-NJ', 'followerNum': 3, 'viewNum': 1080, 'hotness': 6.46206046489081e-06, 'Index': 81, 'ID': 'd7a23f067d7cbeb4bece46da6891ad040ad6d5e3'}, {'questionName': 'What are the hidden gems in New Brunswick NJ', 'time': 54336, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/What-are-the-hidden-gems-in-New-Brunswick-NJ', 'followerNum': 5, 'viewNum': 558, 'hotness': 5.872228191541635e-06, 'Index': 82, 'ID': '4e04bf4562905ef363425098ef36200bc9b016fe'}, {'questionName': 'What is it like to live in New Brunswick NJ', 'time': 14304, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/What-is-it-like-to-live-in-New-Brunswick-NJ', 'followerNum': 5, 'viewNum': 581, 'hotness': 4.3736209220645104e-05, 'Index': 83, 'ID': '0be42315ab1aeae2055f634768c561ea10b85052'}, {'questionName': 'What is New Brunswick NJ known for', 'time': 54336, 'answerNum': 2, 'questionLink': 'https://www.quora.com/What-is-New-Brunswick-NJ-known-for', 'followerNum': 2, 'viewNum': 670, 'hotness': 5.990951436716172e-06, 'Index': 84, 'ID': '0137830754438edb818ceea4bc4c7ed5cfc1a101'}, {'questionName': 'What are good jogging routes in or around New Brunswick NJ', 'time': 54336, 'answerNum': 3, 'questionLink': 'https://www.quora.com/What-are-good-jogging-routes-in-or-around-New-Brunswick-NJ', 'followerNum': 5, 'viewNum': 507, 'hotness': 5.920596883431096e-06, 'Index': 85, 'ID': 'be2e4574176dca49ffe9942944a2f569c397262d'}, {'questionName': 'What are fun things to do in New Brunswick NJ', 'time': 54336, 'answerNum': 1, 'questionLink': 'https://www.quora.com/What-are-fun-things-to-do-in-New-Brunswick-NJ', 'followerNum': 4, 'viewNum': 7163, 'hotness': 8.151969243717365e-06, 'Index': 86, 'ID': 'ecfd60913331f9bfd79a3307fbd2f47db5c8cc1d'}];
 var ruQuestionItems = [{'questionName': 'Which is better Rutgers MIT Stevens MSIS program or CSU Fullerton MSIS Why', 'time': 120, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/Which-is-better-Rutgers-MIT-Stevens-MSIS-program-or-CSU-Fullerton-MSIS-Why', 'followerNum': 1, 'viewNum': 94, 'hotness': 0.03856466442845259, 'ID': 'd2c995556d7c2990e621b35dcddfe6ffd70ded59', 'Index': 1}, {'questionName': 'What language does Rutgers University in New Jersey use for their computer science and theory classes', 'time': 144, 'answerNum': 3, 'questionLink': 'https://www.quora.com/What-language-does-Rutgers-University-in-New-Jersey-use-for-their-computer-science-and-theory-classes', 'followerNum': 1, 'viewNum': 627, 'hotness': 0.04258980830596448, 'ID': '80ed00c01965cb56306c116cf65442b904fa4c3e', 'Index': 2}, {'questionName': 'How has Rutgers changed since the 90s', 'time': 240, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/How-has-Rutgers-changed-since-the-90s', 'followerNum': 2, 'viewNum': 325, 'hotness': 0.017682419781607023, 'ID': '17c3175d1c06796aac97ef3f8874936755c55634', 'Index': 3}, {'questionName': 'Why does Rutgers university allow antisemitic professors on its staff', 'time': 168, 'answerNum': 2, 'questionLink': 'https://www.quora.com/Why-does-Rutgers-university-allow-antisemitic-professors-on-its-staff', 'followerNum': 1, 'viewNum': 556, 'hotness': 0.03302839361200526, 'ID': '61d51804a754123a4ca57e18f3651ca55b0ec8d0', 'Index': 4}, {'questionName': 'What are the admission policies of the Rutgers School of Law in New Brunswick', 'time': 312, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/What-are-the-admission-policies-of-the-Rutgers-School-of-Law-in-New-Brunswick', 'followerNum': 0, 'viewNum': 145, 'hotness': 0.01011940363646707, 'ID': 'a0a03e8c2b040acd6f857b7cb87e282800f9c282', 'Index': 5}, {'questionName': 'What are the academic requirements to get in the Rutgers School of Law in New Brunswick', 'time': 336, 'answerNum': 1, 'questionLink': 'https://www.quora.com/What-are-the-academic-requirements-to-get-in-the-Rutgers-School-of-Law-in-New-Brunswick', 'followerNum': 0, 'viewNum': 272, 'hotness': 0.010297318281831584, 'ID': '14132f79d4c3c5479cbdf2c2898934b28e3b4e2b', 'Index': 6}, {'questionName': 'Which companies employ grad students from Rutgers University', 'time': 432, 'answerNum': 2, 'questionLink': 'https://www.quora.com/Which-companies-employ-grad-students-from-Rutgers-University', 'followerNum': 0, 'viewNum': 348, 'hotness': 0.007448144384961371, 'ID': 'fae72be0841508ba3d5d25e7f425eee9f57c6a2b', 'Index': 7}, {'questionName': 'How is the Department of Childhood Studies at Rutgers University like What is the scope of the programme if one decides to pursue their graduation studies there Also what type of funding is made available for international students', 'time': 432, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/How-is-the-Department-of-Childhood-Studies-at-Rutgers-University-like-What-is-the-scope-of-the-programme-if-one-decides-to-pursue-their-graduation-studies-there-Also-what-type-of-funding-is-made-available-for-international-students', 'followerNum': 1, 'viewNum': 215, 'hotness': 0.006782984085184693, 'ID': 'd034e35eb8cfe22f623f854cf19599179ba6d0a5', 'Index': 8}, {'questionName': 'Which is better Rutgers University New Brunswick or NYU Tandon for an MS in Computer Science Security track Can anyone tell me the current scenario of both universities like jobs and reputation', 'time': 552, 'answerNum': 1, 'questionLink': 'https://www.quora.com/Which-is-better-Rutgers-University-New-Brunswick-or-NYU-Tandon-for-an-MS-in-Computer-Science-Security-track-Can-anyone-tell-me-the-current-scenario-of-both-universities-like-jobs-and-reputation', 'followerNum': 1, 'viewNum': 169, 'hotness': 0.004537677387718192, 'ID': '4087d92b76371392a88d497ea96f1067d2d9c5c8', 'Index': 9}, {'questionName': 'How is Rutgers New Brunswick for an MS in CS with a security track', 'time': 552, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/How-is-Rutgers-New-Brunswick-for-an-MS-in-CS-with-a-security-track', 'followerNum': 1, 'viewNum': 187, 'hotness': 0.004582109226017247, 'ID': 'f3720b06985ed5273f50a57feb3dde05f74dec3e', 'Index': 10}, {'questionName': 'How is the MSDS program at Rutgers', 'time': 624, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/How-is-the-MSDS-program-at-Rutgers', 'followerNum': 0, 'viewNum': 15, 'hotness': 0.0019561411806282287, 'ID': '6c4f814930ce78a158bde3b4437ab5034d76b026', 'Index': 11}, {'questionName': 'Why should I consider joining the Rutgers School of Engineering', 'time': 696, 'answerNum': 2, 'questionLink': 'https://www.quora.com/Why-should-I-consider-joining-the-Rutgers-School-of-Engineering', 'followerNum': 0, 'viewNum': 343, 'hotness': 0.0036428587255010365, 'ID': '02a7b1d8ad89e5c777a50c5b94957d93168034f9', 'Index': 12}, {'questionName': 'How are the job prospects after doing an MQF in Rutgers Business School', 'time': 600, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/How-are-the-job-prospects-after-doing-an-MQF-in-Rutgers-Business-School', 'followerNum': 2, 'viewNum': 287, 'hotness': 0.004411575229371164, 'ID': '73ddcb22c39243ae702fc4cce11f9277d9a1d40b', 'Index': 13}, {'questionName': 'What is the academic pressure at the Rutgers School of Engineering like', 'time': 696, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/What-is-the-academic-pressure-at-the-Rutgers-School-of-Engineering-like', 'followerNum': 4, 'viewNum': 833, 'hotness': 0.004248579394471577, 'ID': '60549e760ee1ace2a0287c241c4966f42a900f50', 'Index': 14}, {'questionName': 'How is Rutgers information technology What is the GRE score needed to get an admit What are the job prospects after an MS', 'time': 720, 'answerNum': 1, 'questionLink': 'https://www.quora.com/How-is-Rutgers-information-technology-What-is-the-GRE-score-needed-to-get-an-admit-What-are-the-job-prospects-after-an-MS', 'followerNum': 5, 'viewNum': 715, 'hotness': 0.00400774605201575, 'ID': '05c774cde5ab5e5ef25175f1f968374a3fc22dc0', 'Index': 15}, {'questionName': 'What is the application fee for Rutgers for a mathematics PhD', 'time': 768, 'answerNum': 1, 'questionLink': 'https://www.quora.com/What-is-the-application-fee-for-Rutgers-for-a-mathematics-PhD', 'followerNum': 2, 'viewNum': 785, 'hotness': 0.0036089288981765804, 'ID': 'd369b98b461c7d9cb5c6c4d7f38091fecc12f165', 'Index': 16}, {'questionName': 'How good are MBA degrees in Rutgers University', 'time': 792, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/How-good-are-MBA-degrees-in-Rutgers-University', 'followerNum': 1, 'viewNum': 527, 'hotness': 0.0031944706006973, 'ID': 'e670722c267a9c5ec8b9a24a3b8de43a166c5c29', 'Index': 17}, {'questionName': 'What is the academic pressure and workload at Rutgers University like', 'time': 864, 'answerNum': 1, 'questionLink': 'https://www.quora.com/What-is-the-academic-pressure-and-workload-at-Rutgers-University-like', 'followerNum': 0, 'viewNum': 240, 'hotness': 0.0024552937175338287, 'ID': '282d8e40131fe66fe181522787e64fdeb26765ef', 'Index': 18}, {'questionName': 'What would be my starting salary after a Pharm D from Karachi University and a Pharma MBA from Rutgers University USA', 'time': 864, 'answerNum': 1, 'questionLink': 'https://www.quora.com/What-would-be-my-starting-salary-after-a-Pharm-D-from-Karachi-University-and-a-Pharma-MBA-from-Rutgers-University-USA', 'followerNum': 1, 'viewNum': 949, 'hotness': 0.0030878116909839833, 'ID': '7aeada3dc246aabcf62068e1be33ae015e28cd32', 'Index': 19}, {'questionName': 'How is Rutgers intermediate Spanish', 'time': 912, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/How-is-Rutgers-intermediate-Spanish', 'followerNum': 4, 'viewNum': 644, 'hotness': 0.00272999379303462, 'ID': '7bac4a9b2cad250c2c3221bedfe51ee1bd975429', 'Index': 20}, {'questionName': 'How can I contact Shanvith Madhirala to ask a question regarding Rutgers University', 'time': 912, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/How-can-I-contact-Shanvith-Madhirala-to-ask-a-question-regarding-Rutgers-University', 'followerNum': 1, 'viewNum': 24, 'hotness': 0.0013216804301504968, 'ID': 'bc7aa2d324cc093c497266ef1d014eaedd72c803', 'Index': 21}, {'questionName': 'How hard is it to get into Rutgers New Brunswick SAS with an 1130 SAT and a 3 182 GPA What kind of things do I need to make my application look better', 'time': 936, 'answerNum': 2, 'questionLink': 'https://www.quora.com/How-hard-is-it-to-get-into-Rutgers-New-Brunswick-SAS-with-an-1130-SAT-and-a-3-182-GPA-What-kind-of-things-do-I-need-to-make-my-application-look-better', 'followerNum': 6, 'viewNum': 1068, 'hotness': 0.0029038684997045035, 'ID': 'f2b5ce439dfd8b29e45b8404ad70cb7a94d4c844', 'Index': 22}, {'questionName': 'Can I get into Rutgers New Brunswick SAS with a 1130 SAT and a 3 182 GPA If so how hard will it be and how do I need to make up for it', 'time': 936, 'answerNum': 1, 'questionLink': 'https://www.quora.com/Can-I-get-into-Rutgers-New-Brunswick-SAS-with-a-1130-SAT-and-a-3-182-GPA-If-so-how-hard-will-it-be-and-how-do-I-need-to-make-up-for-it', 'followerNum': 1, 'viewNum': 496, 'hotness': 0.0024836726558900672, 'ID': '95352f1f928bf004991f22064c367e3cdbd7180d', 'Index': 23}, {'questionName': 'Which is better an MCS in ASU with 1 prerequisite or an MS in Rutgers', 'time': 1056, 'answerNum': 1, 'questionLink': 'https://www.quora.com/Which-is-better-an-MCS-in-ASU-with-1-prerequisite-or-an-MS-in-Rutgers', 'followerNum': 1, 'viewNum': 563, 'hotness': 0.0021149928916379354, 'ID': '3f12983ffe9cde78bb4277d5f605c4ffe7505c1d', 'Index': 24}, {'questionName': 'How can I join Phi Beta Kappa at Rutgers University', 'time': 1152, 'answerNum': 1, 'questionLink': 'https://www.quora.com/How-can-I-join-Phi-Beta-Kappa-at-Rutgers-University', 'followerNum': 2, 'viewNum': 739, 'hotness': 0.0019495787323545214, 'ID': '4d08cd24edf1385473d5518d819543e18028bed1', 'Index': 25}, {'questionName': 'Which university is better and why for an MS in CS Rutgers or Indiana Bloomington', 'time': 1176, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/Which-university-is-better-and-why-for-an-MS-in-CS-Rutgers-or-Indiana-Bloomington', 'followerNum': 1, 'viewNum': 90, 'hotness': 0.0012731520644005602, 'ID': 'd2260ed9d5aaa425ddd52dd71fbf00e0091ff186', 'Index': 26}, {'questionName': 'How is the graduate program for civil engineering at Rutgers NB', 'time': 1248, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/How-is-the-graduate-program-for-civil-engineering-at-Rutgers-NB', 'followerNum': 1, 'viewNum': 387, 'hotness': 0.0015381567214156242, 'ID': '8dea3355749c4d13e3cfd7862c84c8b31ab9a31a', 'Index': 27}, {'questionName': 'What are my chances of getting into the Rutgers NB Business School with a GPA of 3 1 from a community college', 'time': 1248, 'answerNum': 2, 'questionLink': 'https://www.quora.com/What-are-my-chances-of-getting-into-the-Rutgers-NB-Business-School-with-a-GPA-of-3-1-from-a-community-college', 'followerNum': 3, 'viewNum': 558, 'hotness': 0.0016830358943696155, 'ID': 'f6a0cc92d5b14351405c5d0dff639c05043b2545', 'Index': 28}, {'questionName': 'Do I have to take expository writing at Rutgers NB if I transfer or will my English composition credits be equal', 'time': 1368, 'answerNum': 1, 'questionLink': 'https://www.quora.com/Do-I-have-to-take-expository-writing-at-Rutgers-NB-if-I-transfer-or-will-my-English-composition-credits-be-equal', 'followerNum': 2, 'viewNum': 602, 'hotness': 0.0014614450934140797, 'ID': '967b23cf4611fe25fc495f24175368c39c379355', 'Index': 29}, {'questionName': 'Does Rutgers New Burnswick accept IELTS scores from international students for an MS in CS', 'time': 1512, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/Does-Rutgers-New-Burnswick-accept-IELTS-scores-from-international-students-for-an-MS-in-CS', 'followerNum': 1, 'viewNum': 586, 'hotness': 0.001233603850503706, 'ID': 'b2fab4f903e5fee3e520892841af6203e07fc5a7', 'Index': 30}, {'questionName': 'How much will be the i20 amount for an international student in Master of Information Technology program at Rutgers', 'time': 1464, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/How-much-will-be-the-i20-amount-for-an-international-student-in-Master-of-Information-Technology-program-at-Rutgers', 'followerNum': 2, 'viewNum': 294, 'hotness': 0.00116573747810522, 'ID': '07351a1146069edb7567dd901b4ce6fc86684401', 'Index': 31}, {'questionName': 'What is the approximate GRE criteria for a master%E2%80%99s in MIS at Rutgers University', 'time': 1728, 'answerNum': 1, 'questionLink': 'https://www.quora.com/What-is-the-approximate-GRE-criteria-for-a-master%E2%80%99s-in-MIS-at-Rutgers-University', 'followerNum': 2, 'viewNum': 933, 'hotness': 0.001098788001493172, 'ID': '1fb80983c6615cd9c85aa8ee8c24472861ac68a1', 'Index': 32}, {'questionName': 'How is Rutgers University for a supply chain', 'time': 1656, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/How-is-Rutgers-University-for-a-supply-chain', 'followerNum': 1, 'viewNum': 423, 'hotness': 0.0010218117686765554, 'ID': 'f2f72ea92b9b1c5c3104524d9f23397c68b7730f', 'Index': 33}, {'questionName': 'How strong is the Rutgers MSCS program Its ranked quite well', 'time': 1944, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/How-strong-is-the-Rutgers-MSCS-program-Its-ranked-quite-well', 'followerNum': 4, 'viewNum': 866, 'hotness': 0.0009177878750112367, 'ID': 'aabfc95a23f272adbd761c54a50dc02fe6c3ac69', 'Index': 34}, {'questionName': 'What does west coast people industry think about Rutgers University for Masters', 'time': 1752, 'answerNum': 2, 'questionLink': 'https://www.quora.com/What-does-west-coast-people-industry-think-about-Rutgers-University-for-Masters', 'followerNum': 2, 'viewNum': 582, 'hotness': 0.0010113293131485048, 'ID': 'ee8ed214b1bd21e3ba3b9bc319176d1e6c5618ce', 'Index': 35}, {'questionName': 'What is the academic pressure and workload at Rutgers University', 'time': 1968, 'answerNum': 4, 'questionLink': 'https://www.quora.com/What-is-the-academic-pressure-and-workload-at-Rutgers-University', 'followerNum': 2, 'viewNum': 478, 'hotness': 0.000837112440544642, 'ID': '4caaa3b9a2d946cf7dbee337facdbae97e973c67', 'Index': 36}, {'questionName': 'What are the best reasons to attend Rutgers University', 'time': 1968, 'answerNum': 3, 'questionLink': 'https://www.quora.com/What-are-the-best-reasons-to-attend-Rutgers-University', 'followerNum': 2, 'viewNum': 2860, 'hotness': 0.0010621198290710467, 'ID': 'fac9efdbd0a77ace425dffdce09d3a4d39fc548c', 'Index': 37}, {'questionName': 'What are the chances of an Indian person getting into a deferred MBA program at Harvard Yale Stanford or Rutgers', 'time': 2184, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/What-are-the-chances-of-an-Indian-person-getting-into-a-deferred-MBA-program-at-Harvard-Yale-Stanford-or-Rutgers', 'followerNum': 0, 'viewNum': 90, 'hotness': 0.0004981084314796701, 'ID': 'a1480f90ca097e8dc2baa938742241d16742b4c9', 'Index': 38}, {'questionName': 'How difficult is it to gain admission to the Rutgers University philosophy program', 'time': 2280, 'answerNum': 2, 'questionLink': 'https://www.quora.com/How-difficult-is-it-to-gain-admission-to-the-Rutgers-University-philosophy-program', 'followerNum': 1, 'viewNum': 845, 'hotness': 0.0007150047558294946, 'ID': 'd5e9cb9cc21ef796ab740dfb7b418c0465be606c', 'Index': 39}, {'questionName': 'What is the minimum GRE score required for an MS in Computer Science for Rutgers University', 'time': 2424, 'answerNum': 2, 'questionLink': 'https://www.quora.com/What-is-the-minimum-GRE-score-required-for-an-MS-in-Computer-Science-for-Rutgers-University', 'followerNum': 2, 'viewNum': 826, 'hotness': 0.0006548790875490207, 'ID': '97e23b35e0799242671826c0f70ac01e5c7edc88', 'Index': 40}, {'questionName': 'Whats an average day like at Rutgers University', 'time': 2736, 'answerNum': 2, 'questionLink': 'https://www.quora.com/Whats-an-average-day-like-at-Rutgers-University', 'followerNum': 3, 'viewNum': 1766, 'hotness': 0.0006101492414004229, 'ID': '20eb89d7f6d77ba517bea69f83f69fc9cc014bf7', 'Index': 41}, {'questionName': 'How are the parties at Rutgers New Brunswick', 'time': 2760, 'answerNum': 1, 'questionLink': 'https://www.quora.com/How-are-the-parties-at-Rutgers-New-Brunswick', 'followerNum': 3, 'viewNum': 555, 'hotness': 0.0005080989883846259, 'ID': 'b2020bd6c5e4d118a5f10ad4eeea0833658dae08', 'Index': 42}, {'questionName': 'Is Rutgers using Chinese students to boost economy of New Brunswick', 'time': 2856, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/Is-Rutgers-using-Chinese-students-to-boost-economy-of-New-Brunswick', 'followerNum': 2, 'viewNum': 544, 'hotness': 0.0004738275556696049, 'ID': '8fb707e871983f78c5ad8bba43d226aea7aa94df', 'Index': 43}, {'questionName': 'How hard is it to transfer from Rutgers University to Georgia Tech for Comp Sci', 'time': 2928, 'answerNum': 1, 'questionLink': 'https://www.quora.com/How-hard-is-it-to-transfer-from-Rutgers-University-to-Georgia-Tech-for-Comp-Sci', 'followerNum': 1, 'viewNum': 1492, 'hotness': 0.0005284416861863684, 'ID': '515abe0765f2c40697beafdf7adc0c1fbc930c3c', 'Index': 44}, {'questionName': 'How is the master%E2%80%99s of science in the business of fashion at Rutgers Is it worth doing', 'time': 3024, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/How-is-the-master%E2%80%99s-of-science-in-the-business-of-fashion-at-Rutgers-Is-it-worth-doing', 'followerNum': 0, 'viewNum': 223, 'hotness': 0.0003675122041398666, 'ID': '93a68e7e593f860ac7f21ee8c66e77a33064ebe1', 'Index': 45}, {'questionName': 'Is there any advice for Math 477 theory of probability at Rutgers', 'time': 3048, 'answerNum': 1, 'questionLink': 'https://www.quora.com/Is-there-any-advice-for-Math-477-theory-of-probability-at-Rutgers', 'followerNum': 1, 'viewNum': 458, 'hotness': 0.0004182394240442113, 'ID': '41949bd15d9a0fda8560273999a17cf26b80c3ac', 'Index': 46}, {'questionName': 'What did Sourabh Dube do to get in Rutgers University What about the funding How much was it', 'time': 3120, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/What-did-Sourabh-Dube-do-to-get-in-Rutgers-University-What-about-the-funding-How-much-was-it', 'followerNum': 0, 'viewNum': 366, 'hotness': 0.0003828260151161898, 'ID': 'c47e1be89e11b6835ba535483cd1225d31a69a43', 'Index': 47}, {'questionName': 'Why does Rutgers especially New Brunswick establish partnerships with so many Chinese universities', 'time': 3192, 'answerNum': 3, 'questionLink': 'https://www.quora.com/Why-does-Rutgers-especially-New-Brunswick-establish-partnerships-with-so-many-Chinese-universities', 'followerNum': 1, 'viewNum': 894, 'hotness': 0.0004384642133141155, 'ID': '2a46f7769f91fa1be8e553e077b8b36f96e1aab5', 'Index': 48}, {'questionName': 'How is Rutgers University for an MS in control systems', 'time': 3360, 'answerNum': 2, 'questionLink': 'https://www.quora.com/How-is-Rutgers-University-for-an-MS-in-control-systems', 'followerNum': 2, 'viewNum': 214, 'hotness': 0.00032303512804642134, 'ID': 'a0556379d2ff6aa85026a61d3122904907d45165', 'Index': 49}, {'questionName': 'Whats better Rutgers or Wellesley College', 'time': 3384, 'answerNum': 4, 'questionLink': 'https://www.quora.com/Whats-better-Rutgers-or-Wellesley-College', 'followerNum': 1, 'viewNum': 789, 'hotness': 0.000397400802459396, 'ID': '135863dc0f898a2903874a5aad26f4a922c563a0', 'Index': 50}, {'questionName': 'Has anyone ever graduated from Rutgers University and gone to Harvard Medical School', 'time': 3408, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/Has-anyone-ever-graduated-from-Rutgers-University-and-gone-to-Harvard-Medical-School', 'followerNum': 2, 'viewNum': 1098, 'hotness': 0.0004034669366219938, 'ID': 'a9a9464c22f63a2639baf3c0a56706f8673ec13e', 'Index': 51}, {'questionName': 'How is Rutgers University for an MS in Computer Science', 'time': 3408, 'answerNum': 1, 'questionLink': 'https://www.quora.com/How-is-Rutgers-University-for-an-MS-in-Computer-Science', 'followerNum': 3, 'viewNum': 1275, 'hotness': 0.0004176401094901693, 'ID': 'bffdad8196e123c3aeb38cd179780db0f9d68576', 'Index': 52}, {'questionName': 'What are the long standing traditions for undergraduates at Rutgers Whats it like to participate in these', 'time': 3408, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/What-are-the-long-standing-traditions-for-undergraduates-at-Rutgers-Whats-it-like-to-participate-in-these', 'followerNum': 2, 'viewNum': 672, 'hotness': 0.0003755708258621851, 'ID': 'd44b74d99a980c068cd9ba92c9fa07826d2a5160', 'Index': 53}, {'questionName': 'Would Andrew Knudsen suggest MSIM at UW iSchool or an MS in CS from Rutgers University of Florida or Arizona State University', 'time': 3744, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/Would-Andrew-Knudsen-suggest-MSIM-at-UW-iSchool-or-an-MS-in-CS-from-Rutgers-University-of-Florida-or-Arizona-State-University', 'followerNum': 1, 'viewNum': 914, 'hotness': 0.00033890103712574726, 'ID': 'a9a7ceb91d9ef5e2d950d59500cdb4af925f6f58', 'Index': 54}, {'questionName': 'Is Rutgers University New Brunswick a good school for communication', 'time': 3744, 'answerNum': 2, 'questionLink': 'https://www.quora.com/Is-Rutgers-University-New-Brunswick-a-good-school-for-communication', 'followerNum': 0, 'viewNum': 691, 'hotness': 0.0003275666817133285, 'ID': 'd5b8bf97fe226682b37e9d0b75e32ba0cbbe37c7', 'Index': 55}, {'questionName': 'Which research labs at Rutgers are the coolest to work at over the summer', 'time': 2064, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/Which-research-labs-at-Rutgers-are-the-coolest-to-work-at-over-the-summer', 'followerNum': 5, 'viewNum': 1198, 'hotness': 0.0008841203950705666, 'ID': 'f7db20671b4d4b08b8bc2ca63ca60658dd98f939', 'Index': 56}, {'questionName': 'Is it possible to get a full ride scholarship with a 1340 SAT score', 'time': 3768, 'answerNum': 4, 'questionLink': 'https://www.quora.com/Is-it-possible-to-get-a-full-ride-scholarship-with-a-1340-SAT-score', 'followerNum': 4, 'viewNum': 1795, 'hotness': 0.00038576415717623424, 'ID': '00cc62fd28901a8b8382a0f2da15cad5088f871a', 'Index': 57}, {'questionName': 'How good is the D1 Rutgers New Brunswick track field team', 'time': 3936, 'answerNum': 1, 'questionLink': 'https://www.quora.com/How-good-is-the-D1-Rutgers-New-Brunswick-track-field-team', 'followerNum': 2, 'viewNum': 532, 'hotness': 0.00029422232681304534, 'ID': '05ed46ecedbcb68c44e7ad97c670bc2968b66028', 'Index': 58}, {'questionName': 'Is the Rutgers New Brunswick track and field team good If so could I be a walk on athlete with these times 100m 10 92 200m 22 61 400m 49 64', 'time': 3888, 'answerNum': 3, 'questionLink': 'https://www.quora.com/Is-the-Rutgers-New-Brunswick-track-and-field-team-good-If-so-could-I-be-a-walk-on-athlete-with-these-times-100m-10-92-200m-22-61-400m-49-64', 'followerNum': 3, 'viewNum': 1009, 'hotness': 0.00033652717413118596, 'ID': '403163ac072c972c570cf238a88e4391e1554a6b', 'Index': 59}, {'questionName': 'What is the best campus to live on at Rutgers New Brunswick', 'time': 4152, 'answerNum': 7, 'questionLink': 'https://www.quora.com/What-is-the-best-campus-to-live-on-at-Rutgers-New-Brunswick', 'followerNum': 0, 'viewNum': 1301, 'hotness': 0.0003178150033389021, 'ID': '84a0836a2b2d5d73de3b80d114c6a920c682235f', 'Index': 60}, {'questionName': 'Which one should I choose for MS in CS NCSU vs Rutgers', 'time': 4224, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/Which-one-should-I-choose-for-MS-in-CS-NCSU-vs-Rutgers', 'followerNum': 2, 'viewNum': 344, 'hotness': 0.0002446493701719565, 'ID': '9503eaa7498e94a5ac0940f068e60c1b99b56322', 'Index': 61}, {'questionName': 'Why do you think about doing a PhD study at Rutgers University in telecommunications', 'time': 4584, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/Why-do-you-think-about-doing-a-PhD-study-at-Rutgers-University-in-telecommunications', 'followerNum': 2, 'viewNum': 507, 'hotness': 0.00023054486251090084, 'ID': 'c0aef43e16e0a0b4d6a34b6dc48830bc67cf1f09', 'Index': 62}, {'questionName': 'Is an MS in biomedical informatics at Rutgers a STEM program', 'time': 4608, 'answerNum': 2, 'questionLink': 'https://www.quora.com/Is-an-MS-in-biomedical-informatics-at-Rutgers-a-STEM-program', 'followerNum': 1, 'viewNum': 532, 'hotness': 0.00023229389993766487, 'ID': 'e43bf42f7130c224aa655b638cf07a57f5fa0d88', 'Index': 63}, {'questionName': 'Which is better for MIS Rutgers Business school Newark or IIT Chicago', 'time': 4608, 'answerNum': 2, 'questionLink': 'https://www.quora.com/Which-is-better-for-MIS-Rutgers-Business-school-Newark-or-IIT-Chicago', 'followerNum': 0, 'viewNum': 1142, 'hotness': 0.00025809787776169297, 'ID': 'ca9729f6f672e2b48411d1980ae543b8594f430e', 'Index': 64}, {'questionName': 'What are the best things to do on weekends as a student at Rutgers 1', 'time': 4704, 'answerNum': 14, 'questionLink': 'https://www.quora.com/What-are-the-best-things-to-do-on-weekends-as-a-student-at-Rutgers-1', 'followerNum': 3, 'viewNum': 2260, 'hotness': 0.00030044571050835163, 'ID': '238525443e239c53602d677a27818003cffb3994', 'Index': 65}, {'questionName': 'How good is Rutgers compared to Harvard University', 'time': 4704, 'answerNum': 6, 'questionLink': 'https://www.quora.com/How-good-is-Rutgers-compared-to-Harvard-University', 'followerNum': 3, 'viewNum': 23245, 'hotness': 0.00036810813805439996, 'ID': '73ea1f87d7f3f27dee29887a673e5bf0a0cdc1f6', 'Index': 66}, {'questionName': 'What are the best student organizations to join at Rutgers Why should students join them', 'time': 4680, 'answerNum': 10, 'questionLink': 'https://www.quora.com/What-are-the-best-student-organizations-to-join-at-Rutgers-Why-should-students-join-them', 'followerNum': 1, 'viewNum': 1247, 'hotness': 0.000271165247772062, 'ID': '7c9edc834fbbc94f9a65db985e5d9764aa9bad09', 'Index': 67}, {'questionName': 'What are some useful tips for students starting their first semester at Rutgers', 'time': 4392, 'answerNum': 26, 'questionLink': 'https://www.quora.com/What-are-some-useful-tips-for-students-starting-their-first-semester-at-Rutgers', 'followerNum': 3, 'viewNum': 3694, 'hotness': 0.0003753986709908624, 'ID': 'e265445a38037d4dee9b0315a4ad6b69ff1c4cde', 'Index': 68}, {'questionName': 'Which college is better to study Computer Science in NJ NJIT or Rutgers New Brunswick', 'time': 4872, 'answerNum': 3, 'questionLink': 'https://www.quora.com/Which-college-is-better-to-study-Computer-Science-in-NJ-NJIT-or-Rutgers-New-Brunswick', 'followerNum': 1, 'viewNum': 999, 'hotness': 0.00023629146109996715, 'ID': '272ed162bbd72e62832cc924d0c75c478d0834ae', 'Index': 69}, {'questionName': 'Should I go to UC Berkeley and pay the full price or go to Rutgers and pay a little assuming I get no scholarships for Computer Science and Business Administration', 'time': 4896, 'answerNum': 12, 'questionLink': 'https://www.quora.com/Should-I-go-to-UC-Berkeley-and-pay-the-full-price-or-go-to-Rutgers-and-pay-a-little-assuming-I-get-no-scholarships-for-Computer-Science-and-Business-Administration', 'followerNum': 1, 'viewNum': 5243, 'hotness': 0.0003041274473843703, 'ID': 'ceb9e8a283511cce132f479eb0f34bce53530871', 'Index': 70}, {'questionName': 'Between the University of New Brunswick and the University of Manitoba which one is cheaper for B Sc in engineering', 'time': 4920, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/Between-the-University-of-New-Brunswick-and-the-University-of-Manitoba-which-one-is-cheaper-for-B-Sc-in-engineering', 'followerNum': 0, 'viewNum': 441, 'hotness': 0.00019949946966737978, 'ID': 'a9f70cd93a4c5b66687e7cd25c354d9e224b4e27', 'Index': 71}, {'questionName': 'What are the chances of getting admitted to the MBS Engineering Management program at Rutgers University with the below profile', 'time': 4920, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/What-are-the-chances-of-getting-admitted-to-the-MBS-Engineering-Management-program-at-Rutgers-University-with-the-below-profile', 'followerNum': 1, 'viewNum': 145, 'hotness': 0.00016469425604264984, 'ID': '2234b7db986a4f163617b86a026711aadf145d7a', 'Index': 72}, {'questionName': 'How difficult is it to get through the Rutgers writing class', 'time': 4968, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/How-difficult-is-it-to-get-through-the-Rutgers-writing-class', 'followerNum': 0, 'viewNum': 855, 'hotness': 0.0002179942493784519, 'ID': '549d685b8c157a6bfd00527167b0ff0de0843d12', 'Index': 73}, {'questionName': 'Which school should I choose for an MIS Rutgers Business School Newark or IIT Chicago', 'time': 4968, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/Which-school-should-I-choose-for-an-MIS-Rutgers-Business-School-Newark-or-IIT-Chicago', 'followerNum': 0, 'viewNum': 378, 'hotness': 0.00019163877350496721, 'ID': '4c6095a424f3da5b816b681aea24600590766f45', 'Index': 74}, {'questionName': 'How difficult is it to get a 3 7 as a business major at Rutgers', 'time': 4992, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/How-difficult-is-it-to-get-a-3-7-as-a-business-major-at-Rutgers', 'followerNum': 2, 'viewNum': 584, 'hotness': 0.0002074100575302162, 'ID': '387db705f5219b04baf6e4fecfc165c9bf1173b7', 'Index': 75}, {'questionName': 'Did anybody go to Rutgers Honors College', 'time': 5016, 'answerNum': 1, 'questionLink': 'https://www.quora.com/Did-anybody-go-to-Rutgers-Honors-College', 'followerNum': 2, 'viewNum': 689, 'hotness': 0.00021277768767903181, 'ID': '58aab5f5e1058efb45a83e0cee3be28a1a22583f', 'Index': 76}, {'questionName': 'How safe is it near the Rutgers campus', 'time': 5064, 'answerNum': 6, 'questionLink': 'https://www.quora.com/How-safe-is-it-near-the-Rutgers-campus', 'followerNum': 2, 'viewNum': 817, 'hotness': 0.0002229514760514817, 'ID': 'b5b2435e2fa15c65f818936d9a2e258d3ba9f607', 'Index': 77}, {'questionName': 'How is Rutgers%E2%80%99 mechanical engineering program', 'time': 5064, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/How-is-Rutgers%E2%80%99-mechanical-engineering-program', 'followerNum': 3, 'viewNum': 473, 'hotness': 0.00019795856651815867, 'ID': 'd9460c81584ac360e40d7e92eecba3f136801864', 'Index': 78}, {'questionName': 'Should I have chosen Rutgers CS over UIUC CS or UMD CS', 'time': 5160, 'answerNum': 2, 'questionLink': 'https://www.quora.com/Should-I-have-chosen-Rutgers-CS-over-UIUC-CS-or-UMD-CS', 'followerNum': 3, 'viewNum': 1742, 'hotness': 0.0002352824012413936, 'ID': '498ae9b58dcae7c3c624ff4898279607da1c0810', 'Index': 79}, {'questionName': 'Which university is best for a Master%E2%80%99s in Human Resources Rutgers NYIT or Villanova', 'time': 5208, 'answerNum': 1, 'questionLink': 'https://www.quora.com/Which-university-is-best-for-a-Master%E2%80%99s-in-Human-Resources-Rutgers-NYIT-or-Villanova', 'followerNum': 1, 'viewNum': 357, 'hotness': 0.00017983951183426776, 'ID': 'f7ba8407feb8063c4a52e4751efc9b24fd414950', 'Index': 80}, {'questionName': 'What is the best choice for an M S in Quantitative Finance between the Rutgers Business School at New Brunswick and Lally School of Management RPI', 'time': 5208, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/What-is-the-best-choice-for-an-M-S-in-Quantitative-Finance-between-the-Rutgers-Business-School-at-New-Brunswick-and-Lally-School-of-Management-RPI', 'followerNum': 2, 'viewNum': 378, 'hotness': 0.0001815591163162071, 'ID': 'a843f49595bb6b2cbb597a7d723dceee361019f9', 'Index': 81}, {'questionName': 'Which is a better university for Masters Rutgers or University of Pittsburgh I am looking for answers in the field of Health Sciences and Genomics', 'time': 5256, 'answerNum': 4, 'questionLink': 'https://www.quora.com/Which-is-a-better-university-for-Masters-Rutgers-or-University-of-Pittsburgh-I-am-looking-for-answers-in-the-field-of-Health-Sciences-and-Genomics', 'followerNum': 0, 'viewNum': 719, 'hotness': 0.00020112534088803595, 'ID': 'e1fc50d31249aba9452979a2a9269f281cbcee52', 'Index': 82}, {'questionName': 'What are some job prospects after doing an MS in ECE at Rutgers University', 'time': 5256, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/What-are-some-job-prospects-after-doing-an-MS-in-ECE-at-Rutgers-University', 'followerNum': 1, 'viewNum': 99, 'hotness': 0.0001378386579506887, 'ID': '20fd8cbcfa49c70316e60718dee9c5c142e0f238', 'Index': 83}, {'questionName': 'How difficult is Rutgers', 'time': 5328, 'answerNum': 5, 'questionLink': 'https://www.quora.com/How-difficult-is-Rutgers', 'followerNum': 4, 'viewNum': 1457, 'hotness': 0.000224867094721232, 'ID': 'f4896c13d703a25e0e7d52213d1bbb0308c97b1a', 'Index': 84}, {'questionName': 'How do undergraduates at Rutgers spend their weekends', 'time': 5376, 'answerNum': 3, 'questionLink': 'https://www.quora.com/How-do-undergraduates-at-Rutgers-spend-their-weekends', 'followerNum': 2, 'viewNum': 1846, 'hotness': 0.00022291443957191882, 'ID': 'fdc6092da04cb96e526a42e7a18e39a6ffce617e', 'Index': 85}, {'questionName': 'I want to pursue Electrical Engineering as an undergrad Which university is good UT Austin or Rutgers NJ', 'time': 5328, 'answerNum': 1, 'questionLink': 'https://www.quora.com/I-want-to-pursue-Electrical-Engineering-as-an-undergrad-Which-university-is-good-UT-Austin-or-Rutgers-NJ', 'followerNum': 0, 'viewNum': 490, 'hotness': 0.00018155376570816212, 'ID': 'a193bac047fb87340f33fad19e17ff4dfa2f37e2', 'Index': 86}, {'questionName': 'How does the mechanical engineering undergraduate program of Rutgers University%E2%80%93New Brunswick in the USA compare with that of Manipal Institute of Technology', 'time': 5376, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/How-does-the-mechanical-engineering-undergraduate-program-of-Rutgers-University%E2%80%93New-Brunswick-in-the-USA-compare-with-that-of-Manipal-Institute-of-Technology', 'followerNum': 1, 'viewNum': 181, 'hotness': 0.00015055970109391527, 'ID': '530ec241877b8a1b4004a844f2493807d478cefc', 'Index': 87}, {'questionName': 'Would Professor Frank Deis recommend taking his 301 class during the summer or spring semester', 'time': 5400, 'answerNum': 1, 'questionLink': 'https://www.quora.com/Would-Professor-Frank-Deis-recommend-taking-his-301-class-during-the-summer-or-spring-semester', 'followerNum': 0, 'viewNum': 236, 'hotness': 0.00015711824854059426, 'ID': '2e3327c649f955abb6b11644b76eb2e5fd8ac431', 'Index': 88}, {'questionName': 'How is the Rutgers University part time MBA program in Newark NJ', 'time': 5400, 'answerNum': 1, 'questionLink': 'https://www.quora.com/How-is-the-Rutgers-University-part-time-MBA-program-in-Newark-NJ', 'followerNum': 1, 'viewNum': 450, 'hotness': 0.0001769343243422211, 'ID': 'd3bf6436a625b75a32d58d499bdfcfe129edb933', 'Index': 89}, {'questionName': 'Is Rutgers University Newark campus worth attending comparing to other surrounding universities when it comes to an MBA in International Business', 'time': 5400, 'answerNum': 1, 'questionLink': 'https://www.quora.com/Is-Rutgers-University-Newark-campus-worth-attending-comparing-to-other-surrounding-universities-when-it-comes-to-an-MBA-in-International-Business', 'followerNum': 2, 'viewNum': 327, 'hotness': 0.00016926090084968246, 'ID': '9d2d3d74c5378ccb8c89933ae90ad5fcb94cb1a2', 'Index': 90}, {'questionName': 'Which is better Rutgers Business School%E2%80%99s Master of Information Technology or the University of Pittsburgh%E2%80%99s MS in Information Science', 'time': 2352, 'answerNum': 1, 'questionLink': 'https://www.quora.com/Which-is-better-Rutgers-Business-School%E2%80%99s-Master-of-Information-Technology-or-the-University-of-Pittsburgh%E2%80%99s-MS-in-Information-Science', 'followerNum': 3, 'viewNum': 1162, 'hotness': 0.000718962359238077, 'ID': '0c6750ad93e947105bb31d20e173f85ec34706c8', 'Index': 91}, {'questionName': 'Which one is better for pre med University of Pittsburgh Rutgers New Brunswick in state UIUC Purdue or UMass Amherst', 'time': 5424, 'answerNum': 2, 'questionLink': 'https://www.quora.com/Which-one-is-better-for-pre-med-University-of-Pittsburgh-Rutgers-New-Brunswick-in-state-UIUC-Purdue-or-UMass-Amherst', 'followerNum': 2, 'viewNum': 1747, 'hotness': 0.00021698743585654695, 'ID': '97e7c091560ab8dc1260495c0da5a28bc58328ca', 'Index': 92}, {'questionName': 'Do IITians BITSians BITians NITians apply to and join the Master of Information Technology program at Rutgers Business School Newark and NB campus', 'time': 1680, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/Do-IITians-BITSians-BITians-NITians-apply-to-and-join-the-Master-of-Information-Technology-program-at-Rutgers-Business-School-Newark-and-NB-campus', 'followerNum': 2, 'viewNum': 481, 'hotness': 0.0010292947263283875, 'ID': '20f07a5d84656c9bb63b0e3828b8058043b14815', 'Index': 93}, {'questionName': 'What engineering school is better Rutgers or Stevens', 'time': 5568, 'answerNum': 2, 'questionLink': 'https://www.quora.com/What-engineering-school-is-better-Rutgers-or-Stevens', 'followerNum': 2, 'viewNum': 461, 'hotness': 0.0001723689259895222, 'ID': 'bc4675ed676b134bf29f477c18ae0f858f834db0', 'Index': 94}, {'questionName': 'Will I get into the Rutgers New Brunswick business', 'time': 5616, 'answerNum': 2, 'questionLink': 'https://www.quora.com/Will-I-get-into-the-Rutgers-New-Brunswick-business', 'followerNum': 2, 'viewNum': 485, 'hotness': 0.00017152814446657263, 'ID': 'de10911c79ac69867a46e1b020cb6c5e39b5c90a', 'Index': 95}, {'questionName': 'What was your GPA at Rutgers Was it difficult', 'time': 5616, 'answerNum': 2, 'questionLink': 'https://www.quora.com/What-was-your-GPA-at-Rutgers-Was-it-difficult', 'followerNum': 5, 'viewNum': 1195, 'hotness': 0.0001997864401987039, 'ID': '2b62eb9a94b0b5dc0aefa7cc97ca9fa9cd9b00d3', 'Index': 96}, {'questionName': 'What school should I choose over Rutgers University University of Florida for an undergraduate degree in computer engineering', 'time': 5664, 'answerNum': 1, 'questionLink': 'https://www.quora.com/What-school-should-I-choose-over-Rutgers-University-University-of-Florida-for-an-undergraduate-degree-in-computer-engineering', 'followerNum': 0, 'viewNum': 755, 'hotness': 0.00017711410417528588, 'ID': '328edd09d304a1e5eb11efe6cbdcf1a3301d3ee4', 'Index': 97}, {'questionName': 'Between SUNY Buffalo and Rutgers where should I go to pursue an MS in CS as an international student', 'time': 5688, 'answerNum': 1, 'questionLink': 'https://www.quora.com/Between-SUNY-Buffalo-and-Rutgers-where-should-I-go-to-pursue-an-MS-in-CS-as-an-international-student', 'followerNum': 1, 'viewNum': 1710, 'hotness': 0.00019886235538756525, 'ID': '8e6fdcc0e191f61c01954ba4b1f00ceee72a2f19', 'Index': 98}, {'questionName': 'Which one is better for a business school Rutgers UW Seattle Pitt Penn State and UM', 'time': 5712, 'answerNum': 1, 'questionLink': 'https://www.quora.com/Which-one-is-better-for-a-business-school-Rutgers-UW-Seattle-Pitt-Penn-State-and-UM', 'followerNum': 0, 'viewNum': 511, 'hotness': 0.00016466243802071658, 'ID': 'a248e6d769fe537cd8848e2a0b866e6e5614cfdd', 'Index': 99}, {'questionName': 'Why is the ranking of Rutgers so low', 'time': 5712, 'answerNum': 2, 'questionLink': 'https://www.quora.com/Why-is-the-ranking-of-Rutgers-so-low', 'followerNum': 2, 'viewNum': 2001, 'hotness': 0.00020434654850629637, 'ID': '076ff22ff53b17a19dda906312b4cd4bacd8f0c4', 'Index': 100}, {'questionName': 'Which is better in terms of good jobs internships Rugters Business School Master in IT or University of Pittsburgh MS in information science', 'time': 5736, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/Which-is-better-in-terms-of-good-jobs-internships-Rugters-Business-School-Master-in-IT-or-University-of-Pittsburgh-MS-in-information-science', 'followerNum': 0, 'viewNum': 621, 'hotness': 0.00016740369373339841, 'ID': 'cdf8a269574b6ae5e8095280c63061ea7b85c414', 'Index': 101}, {'questionName': 'Where should I go to business school Rutgers Honors College or RPI', 'time': 5760, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/Where-should-I-go-to-business-school-Rutgers-Honors-College-or-RPI', 'followerNum': 1, 'viewNum': 333, 'hotness': 0.00015153223711709875, 'ID': '64e57752adcba4cb1e0a691b8d96f47ef288bf70', 'Index': 102}, {'questionName': 'How are the placements of the MS in CS students in Rutgers', 'time': 5808, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/How-are-the-placements-of-the-MS-in-CS-students-in-Rutgers', 'followerNum': 1, 'viewNum': 197, 'hotness': 0.00013624763118171197, 'ID': 'c52e5a236af0d054ba3e0d487c639a08208ea86b', 'Index': 103}, {'questionName': 'How good is the MBA program at Rutgers Business School', 'time': 5808, 'answerNum': 2, 'questionLink': 'https://www.quora.com/How-good-is-the-MBA-program-at-Rutgers-Business-School', 'followerNum': 0, 'viewNum': 668, 'hotness': 0.00016872009115966957, 'ID': 'c4c84b3ecfea24b215f4d7b9ab73f6ef46d5a17b', 'Index': 104}, {'questionName': 'How hard is it to get a computer science job from a school like Rutgers', 'time': 5832, 'answerNum': 1, 'questionLink': 'https://www.quora.com/How-hard-is-it-to-get-a-computer-science-job-from-a-school-like-Rutgers', 'followerNum': 1, 'viewNum': 1203, 'hotness': 0.00018261635466566413, 'ID': '6c75db58e4d9640b4ad4bd3cae54d5339b0fcba1', 'Index': 105}, {'questionName': 'By what time does Rutgers University give out the admits for MSCs for their fall intake', 'time': 5856, 'answerNum': 1, 'questionLink': 'https://www.quora.com/By-what-time-does-Rutgers-University-give-out-the-admits-for-MSCs-for-their-fall-intake', 'followerNum': 2, 'viewNum': 279, 'hotness': 0.00014588136317427588, 'ID': 'ad066479f8e6941dcc646cb3fece25c98836c1a1', 'Index': 106}, {'questionName': 'Which is the better program among these two MS in data science at Rutgers vs MS in computer science engineering at SUNY Buffalo', 'time': 5880, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/Which-is-the-better-program-among-these-two-MS-in-data-science-at-Rutgers-vs-MS-in-computer-science-engineering-at-SUNY-Buffalo', 'followerNum': 4, 'viewNum': 702, 'hotness': 0.00016938471923769085, 'ID': 'cb72f38d6fc97be1a5c29f66209d05fecd9c53cc', 'Index': 107}, {'questionName': 'How good is the University of New Brunswick in Canada for Computer Engineering', 'time': 5880, 'answerNum': 1, 'questionLink': 'https://www.quora.com/How-good-is-the-University-of-New-Brunswick-in-Canada-for-Computer-Engineering', 'followerNum': 2, 'viewNum': 1117, 'hotness': 0.0001797793453803582, 'ID': 'd0796efd1b7a78f10585acc5b82a69d58b08e5d0', 'Index': 108}, {'questionName': 'How hard is the academic at Rutgers vs UMD college park', 'time': 5904, 'answerNum': 1, 'questionLink': 'https://www.quora.com/How-hard-is-the-academic-at-Rutgers-vs-UMD-college-park', 'followerNum': 3, 'viewNum': 1306, 'hotness': 0.0001838275548536452, 'ID': 'ab7ef19e53cc9dd6abca170a12ed2131e36cabbe', 'Index': 109}, {'questionName': 'Should I attend Boston University or Rutgers', 'time': 5928, 'answerNum': 4, 'questionLink': 'https://www.quora.com/Should-I-attend-Boston-University-or-Rutgers', 'followerNum': 1, 'viewNum': 1764, 'hotness': 0.00019139937007604742, 'ID': 'd99ab09a4dd7926ad8ab0f693afaeba54d34a81a', 'Index': 110}, {'questionName': 'Should I join Rutgers New Brunswick or Camden', 'time': 5928, 'answerNum': 2, 'questionLink': 'https://www.quora.com/Should-I-join-Rutgers-New-Brunswick-or-Camden', 'followerNum': 1, 'viewNum': 546, 'hotness': 0.00015986705172149707, 'ID': '5d6d1a7fc4bf4d52e89a0ddcb8ffe505cd89a5d7', 'Index': 111}, {'questionName': 'Where should I go to college for pre med Rutgers Honors College or Johns Hopkins', 'time': 6000, 'answerNum': 4, 'questionLink': 'https://www.quora.com/Where-should-I-go-to-college-for-pre-med-Rutgers-Honors-College-or-Johns-Hopkins', 'followerNum': 2, 'viewNum': 2395, 'hotness': 0.00019662265168936873, 'ID': '95c340917cfac6179867e7027d21ef811e4e4c78', 'Index': 112}, {'questionName': 'Which has a better undergraduate Physics program Rutgers University New Brunswick or the University of Minnesota Twin Cities', 'time': 6024, 'answerNum': 1, 'questionLink': 'https://www.quora.com/Which-has-a-better-undergraduate-Physics-program-Rutgers-University-New-Brunswick-or-the-University-of-Minnesota-Twin-Cities', 'followerNum': 2, 'viewNum': 164, 'hotness': 0.0001269724640377166, 'ID': 'aa5e1272db519727a709eab840fb27a55ded04c1', 'Index': 113}, {'questionName': 'Which is the best school out of the three for CS Lehigh Penn State or Rutgers', 'time': 6048, 'answerNum': 1, 'questionLink': 'https://www.quora.com/Which-is-the-best-school-out-of-the-three-for-CS-Lehigh-Penn-State-or-Rutgers', 'followerNum': 2, 'viewNum': 745, 'hotness': 0.0001626057813584868, 'ID': '07514376447c96724e8a67d8883917919f391c54', 'Index': 114}, {'questionName': 'How does U PITT undergrad compare with Rutgers undergrad', 'time': 6048, 'answerNum': 1, 'questionLink': 'https://www.quora.com/How-does-U-PITT-undergrad-compare-with-Rutgers-undergrad', 'followerNum': 1, 'viewNum': 466, 'hotness': 0.00015012317076785924, 'ID': 'dccf066aa9eaafd6779f9f180f063fe783fa46bb', 'Index': 115}, {'questionName': 'How good is Rutgers University%E2%80%99s statistics graduate program', 'time': 6096, 'answerNum': 1, 'questionLink': 'https://www.quora.com/How-good-is-Rutgers-University%E2%80%99s-statistics-graduate-program', 'followerNum': 2, 'viewNum': 556, 'hotness': 0.00015373746074706296, 'ID': '747d7b56a02325ee58aca989b1527503f9d72011', 'Index': 116}, {'questionName': 'How good is Rutgers%E2%80%99 graduate program in statistics', 'time': 6096, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/How-good-is-Rutgers%E2%80%99-graduate-program-in-statistics', 'followerNum': 0, 'viewNum': 229, 'hotness': 0.00012909852203703748, 'ID': 'ae664bd868c89c11ea46fa6d35486ccc48381aa1', 'Index': 117}, {'questionName': 'Which university is better for machine learning USC or Rutgers according to ROI return on investment', 'time': 6096, 'answerNum': 1, 'questionLink': 'https://www.quora.com/Which-university-is-better-for-machine-learning-USC-or-Rutgers-according-to-ROI-return-on-investment', 'followerNum': 1, 'viewNum': 658, 'hotness': 0.00015655136892848702, 'ID': 'f9a52429c97ebe86292e63a369abbcb6cf92f015', 'Index': 118}, {'questionName': 'What is the cost for travelling from Edison NJ to Rutgers Business School Newark', 'time': 6096, 'answerNum': 1, 'questionLink': 'https://www.quora.com/What-is-the-cost-for-travelling-from-Edison-NJ-to-Rutgers-Business-School-Newark', 'followerNum': 0, 'viewNum': 639, 'hotness': 0.00015466728756324705, 'ID': 'd8c8710e40c95c8f580eeabd690b690673fa438e', 'Index': 119}, {'questionName': 'Is studying at the University of New Brunswick a good idea', 'time': 6096, 'answerNum': 2, 'questionLink': 'https://www.quora.com/Is-studying-at-the-University-of-New-Brunswick-a-good-idea', 'followerNum': 1, 'viewNum': 1112, 'hotness': 0.00017020578144986964, 'ID': '79d15d40b6b77d446d8c1ca9d7f0fdacf0873f8e', 'Index': 120}, {'questionName': 'Which is a better party school between Rutgers Uni Newark and Michigan State Uni', 'time': 5688, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/Which-is-a-better-party-school-between-Rutgers-Uni-Newark-and-Michigan-State-Uni', 'followerNum': 4, 'viewNum': 261, 'hotness': 0.00015194967174847205, 'ID': 'f1d732e8d8a050549ed60615a243ad4405736fa0', 'Index': 121}, {'questionName': 'I just got accepted to Rutgers Engineering Honors what should I expect', 'time': 6216, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/I-just-got-accepted-to-Rutgers-Engineering-Honors-what-should-I-expect', 'followerNum': 1, 'viewNum': 378, 'hotness': 0.00013809736289180336, 'ID': '1a279805d87b01c6cad6b5c4ed32163616ed58fa', 'Index': 122}, {'questionName': 'What are job titles soon after completing MIT course from Rutgers University', 'time': 3936, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/What-are-job-titles-soon-after-completing-MIT-course-from-Rutgers-University', 'followerNum': 3, 'viewNum': 625, 'hotness': 0.0003015981238210058, 'ID': '4ccb9a951b91ef246f4d3ef9a91d3ec0e603e89d', 'Index': 123}, {'questionName': 'Which school should I go to for a master%E2%80%99s degree in computer science University of Waterloo or Rutgers University New Brunswick', 'time': 6456, 'answerNum': 1, 'questionLink': 'https://www.quora.com/Which-school-should-I-go-to-for-a-master%E2%80%99s-degree-in-computer-science-University-of-Waterloo-or-Rutgers-University-New-Brunswick', 'followerNum': 2, 'viewNum': 1222, 'hotness': 0.00015823024332148574, 'ID': 'e7047a54a430dc975b5dfb19f68b4700aa07b97d', 'Index': 124}, {'questionName': 'Where should I do my undergraduate studies in computer science or computer engineering from Penn State Rutgers or the University of Melbourne AUS', 'time': 6456, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/Where-should-I-do-my-undergraduate-studies-in-computer-science-or-computer-engineering-from-Penn-State-Rutgers-or-the-University-of-Melbourne-AUS', 'followerNum': 1, 'viewNum': 290, 'hotness': 0.0001246938147559483, 'ID': '0d24b9aa586c29cd2bf4d117e5e2f5db02d0d195', 'Index': 125}, {'questionName': 'Is the math PhD worth it from Rutgers', 'time': 6480, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/Is-the-math-PhD-worth-it-from-Rutgers', 'followerNum': 2, 'viewNum': 312, 'hotness': 0.00012667110761061329, 'ID': 'c744312f07483ee8baefe2f90964fbf6dfa3238c', 'Index': 126}, {'questionName': 'How is the Master of Information Technology at Rutgers Business School', 'time': 1440, 'answerNum': 1, 'questionLink': 'https://www.quora.com/How-is-the-Master-of-Information-Technology-at-Rutgers-Business-School', 'followerNum': 6, 'viewNum': 1412, 'hotness': 0.0015708275642685643, 'ID': '27bcf01c53be3f1968735fd14da359caadac43a6', 'Index': 127}, {'questionName': 'I have got admits for Masters in CS from Rutgers university and CMU and I have got 30 scholarship from both universities What should I prefer', 'time': 6504, 'answerNum': 1, 'questionLink': 'https://www.quora.com/I-have-got-admits-for-Masters-in-CS-from-Rutgers-university-and-CMU-and-I-have-got-30-scholarship-from-both-universities-What-should-I-prefer', 'followerNum': 0, 'viewNum': 463, 'hotness': 0.00013340283060781936, 'ID': '67c25d6aeb941f23cf2f56d1483cb1a3b60f0086', 'Index': 128}, {'questionName': 'Is it worth taking a loan to study for a Master%E2%80%99s in Computer Science from Rutgers University', 'time': 6528, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/Is-it-worth-taking-a-loan-to-study-for-a-Master%E2%80%99s-in-Computer-Science-from-Rutgers-University', 'followerNum': 0, 'viewNum': 281, 'hotness': 0.00012088922787306697, 'ID': 'cd7dfbf184a1dca4e80859cffdd0434a27b02bcf', 'Index': 129}, {'questionName': 'Where will I be better placed after completing my undergraduate studies in CS from the University of Melbourne Penn State Rutgers or Michigan State', 'time': 6528, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/Where-will-I-be-better-placed-after-completing-my-undergraduate-studies-in-CS-from-the-University-of-Melbourne-Penn-State-Rutgers-or-Michigan-State', 'followerNum': 1, 'viewNum': 170, 'hotness': 0.00011118618918565511, 'ID': '0258d60e332c0a3de092b9c942a8504728806ee5', 'Index': 130}, {'questionName': 'I have been accepted to Rutgers University the University of Utah and NCSU Where should I pursue my MS', 'time': 6456, 'answerNum': 2, 'questionLink': 'https://www.quora.com/I-have-been-accepted-to-Rutgers-University-the-University-of-Utah-and-NCSU-Where-should-I-pursue-my-MS', 'followerNum': 2, 'viewNum': 1042, 'hotness': 0.0001558464726716629, 'ID': '6612c1865ec2dcb76cb24da3129572c5f4bc23a2', 'Index': 131}, {'questionName': 'What is Rutgers%E2%80%99 reputation', 'time': 6600, 'answerNum': 3, 'questionLink': 'https://www.quora.com/What-is-Rutgers%E2%80%99-reputation', 'followerNum': 7, 'viewNum': 1384, 'hotness': 0.0001630890216140521, 'ID': '95ad317f2770570fd510c74606a1a42cb7eb6a7e', 'Index': 132}, {'questionName': 'Will I get in to Rutgers with a 3 4 GPA and a 1250 on the SATs', 'time': 6600, 'answerNum': 3, 'questionLink': 'https://www.quora.com/Will-I-get-in-to-Rutgers-with-a-3-4-GPA-and-a-1250-on-the-SATs', 'followerNum': 1, 'viewNum': 1302, 'hotness': 0.00015547365694998613, 'ID': 'cb9b9e8c39a6503e6e0bef6c7ef9600a8c0507b1', 'Index': 133}, {'questionName': 'How do I get admission for an MS in computer science in Rutgers University', 'time': 6648, 'answerNum': 1, 'questionLink': 'https://www.quora.com/How-do-I-get-admission-for-an-MS-in-computer-science-in-Rutgers-University', 'followerNum': 1, 'viewNum': 367, 'hotness': 0.00012528864069889713, 'ID': 'fadd8333f33df21886310ae402348035de4fcf69', 'Index': 134}, {'questionName': 'Is Rutgers in New Brunswick good for electrical engineering', 'time': 6648, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/Is-Rutgers-in-New-Brunswick-good-for-electrical-engineering', 'followerNum': 1, 'viewNum': 483, 'hotness': 0.00012997556813674447, 'ID': 'b15c33576d8deb2503d9d403221474ae9340d541', 'Index': 135}, {'questionName': 'For an undergrad in electrical engineering as an international student which is best Rutgers or UC Santa Barbara', 'time': 6648, 'answerNum': 2, 'questionLink': 'https://www.quora.com/For-an-undergrad-in-electrical-engineering-as-an-international-student-which-is-best-Rutgers-or-UC-Santa-Barbara', 'followerNum': 2, 'viewNum': 931, 'hotness': 0.0001467960437289269, 'ID': 'f960d99a47c5d223d6ada43a3cb2f4e0aef3bb95', 'Index': 136}, {'questionName': 'Are there any foundation courses for O level students at the University of Saskatchewan Concordia University and the University of New Brunswick', 'time': 6648, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/Are-there-any-foundation-courses-for-O-level-students-at-the-University-of-Saskatchewan-Concordia-University-and-the-University-of-New-Brunswick', 'followerNum': 2, 'viewNum': 821, 'hotness': 0.0001420865560512628, 'ID': 'd08d28cc7bf82d54db9216278d258d28bceb5cca', 'Index': 137}, {'questionName': 'Should I go to Rutgers or Boston University', 'time': 6672, 'answerNum': 14, 'questionLink': 'https://www.quora.com/Should-I-go-to-Rutgers-or-Boston-University', 'followerNum': 1, 'viewNum': 3423, 'hotness': 0.00018443487639945486, 'ID': '24aece5d36208d295095d34a66d1c88d19b5f26e', 'Index': 138}, {'questionName': 'What will it take to transfer to Georgetown from Rutgers', 'time': 6720, 'answerNum': 2, 'questionLink': 'https://www.quora.com/What-will-it-take-to-transfer-to-Georgetown-from-Rutgers', 'followerNum': 0, 'viewNum': 1187, 'hotness': 0.00014737788875240603, 'ID': 'd9ab7798be9990a49b8e1bed0036dc17623cbce1', 'Index': 139}, {'questionName': 'Which is best for an MIS UTD NEU or Rutgers University', 'time': 3168, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/Which-is-best-for-an-MIS-UTD-NEU-or-Rutgers-University', 'followerNum': 8, 'viewNum': 1026, 'hotness': 0.00046486069730339216, 'ID': '7455426d813590f05c22a1760f46a7e50725dbb8', 'Index': 140}, {'questionName': 'What undergraduate school has a better Computer Science program Focus on machine learning Virginia Tech or Rutgers', 'time': 6768, 'answerNum': 2, 'questionLink': 'https://www.quora.com/What-undergraduate-school-has-a-better-Computer-Science-program-Focus-on-machine-learning-Virginia-Tech-or-Rutgers', 'followerNum': 2, 'viewNum': 1495, 'hotness': 0.00015252992798379928, 'ID': 'b6a5824554d25f2e3386e6c22b4ded127e09f138', 'Index': 141}, {'questionName': 'Is it better to get a B in Harvard or an A in Rutgers', 'time': 6816, 'answerNum': 4, 'questionLink': 'https://www.quora.com/Is-it-better-to-get-a-B-in-Harvard-or-an-A-in-Rutgers', 'followerNum': 2, 'viewNum': 2774, 'hotness': 0.00016535456130594347, 'ID': 'c9dbd801fbf1e90af683e5cf2b7f64678510acb0', 'Index': 142}, {'questionName': 'Where are all of the Rutgers college parties located How do I find out where the parties are taking place', 'time': 6840, 'answerNum': 1, 'questionLink': 'https://www.quora.com/Where-are-all-of-the-Rutgers-college-parties-located-How-do-I-find-out-where-the-parties-are-taking-place', 'followerNum': 2, 'viewNum': 876, 'hotness': 0.00013844367405860996, 'ID': 'fabd073033177f9f4ef5ee269240f82b3790b984', 'Index': 143}, {'questionName': 'Why do New Jersey college bound high school students who want to attend a large university prefer not to go to Rutgers', 'time': 6888, 'answerNum': 8, 'questionLink': 'https://www.quora.com/Why-do-New-Jersey-college-bound-high-school-students-who-want-to-attend-a-large-university-prefer-not-to-go-to-Rutgers', 'followerNum': 5, 'viewNum': 2564, 'hotness': 0.00016813592899628208, 'ID': '5bead55fe9b80c5891a01243e279dbfa7f813bde', 'Index': 144}, {'questionName': 'Which one is better for computer science at undergraduate level Rutgers NB or UIC', 'time': 7008, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/Which-one-is-better-for-computer-science-at-undergraduate-level-Rutgers-NB-or-UIC', 'followerNum': 1, 'viewNum': 159, 'hotness': 9.867450578489336e-05, 'ID': '319004cc7a0693e98a67cab6a6d4a804c3a9eb3e', 'Index': 145}, {'questionName': 'What is the procedure of transferring from a university outside Rutgers to Rutgers New Brunswick', 'time': 7008, 'answerNum': 1, 'questionLink': 'https://www.quora.com/What-is-the-procedure-of-transferring-from-a-university-outside-Rutgers-to-Rutgers-New-Brunswick', 'followerNum': 1, 'viewNum': 744, 'hotness': 0.00012938459204468326, 'ID': 'e8d1cd482a9c809f7987dfa66c0a8dcfdf16963e', 'Index': 146}, {'questionName': 'Which is better Rutgers University or University of Pittsburgh', 'time': 4944, 'answerNum': 1, 'questionLink': 'https://www.quora.com/Which-is-better-Rutgers-University-or-University-of-Pittsburgh', 'followerNum': 4, 'viewNum': 943, 'hotness': 0.00023090059280244955, 'ID': '84622d6304b8dcb4ad9ec00f006b02a4804fafdf', 'Index': 147}, {'questionName': 'Can you get admitted into Rutgers New Brunswick School of Arts and Sciences with a 3 9 G P A in high school but with poor SAT scores of 1050', 'time': 7056, 'answerNum': 4, 'questionLink': 'https://www.quora.com/Can-you-get-admitted-into-Rutgers-New-Brunswick-School-of-Arts-and-Sciences-with-a-3-9-G-P-A-in-high-school-but-with-poor-SAT-scores-of-1050', 'followerNum': 2, 'viewNum': 2366, 'hotness': 0.00015395714661783149, 'ID': '101b47ed08b6d35032192ea0ae0e9e336310cb09', 'Index': 148}, {'questionName': 'What were the findings of Rutgers University study about flowers', 'time': 7104, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/What-were-the-findings-of-Rutgers-University-study-about-flowers', 'followerNum': 3, 'viewNum': 393, 'hotness': 0.00011566151061997381, 'ID': '69ff014f46d71d34150c701cd205ee8a25f15d52', 'Index': 149}, {'questionName': 'How can Rutgers University 70 compete with Harvard 2 for an Academic Recruit', 'time': 7200, 'answerNum': 2, 'questionLink': 'https://www.quora.com/How-can-Rutgers-University-70-compete-with-Harvard-2-for-an-Academic-Recruit', 'followerNum': 0, 'viewNum': 2759, 'hotness': 0.00014850522175368817, 'ID': 'bdc799efabbe2057769ff1f49013e77dea58f6c9', 'Index': 150}, {'questionName': 'Is it weird if I am teaching at Rutgers University and still going to school at Rutgers University', 'time': 7248, 'answerNum': 2, 'questionLink': 'https://www.quora.com/Is-it-weird-if-I-am-teaching-at-Rutgers-University-and-still-going-to-school-at-Rutgers-University', 'followerNum': 1, 'viewNum': 1652, 'hotness': 0.00013854949476349796, 'ID': '9a0b44fe45f5297fe3c3c27470b6f15c1abc4933', 'Index': 151}, {'questionName': 'How is the MS Scientific Computing program at Rutgers University', 'time': 7296, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/How-is-the-MS-Scientific-Computing-program-at-Rutgers-University', 'followerNum': 1, 'viewNum': 543, 'hotness': 0.00011517949625006807, 'ID': '1c3f9a020c0a7d7f51c6dbc162b92fc2e0f6d6fe', 'Index': 152}, {'questionName': 'What is Rutgers computer science ranking', 'time': 7440, 'answerNum': 1, 'questionLink': 'https://www.quora.com/What-is-Rutgers-computer-science-ranking', 'followerNum': 2, 'viewNum': 1169, 'hotness': 0.00012712789108290242, 'ID': '90c4f084fcbaa9827f0d5e8c6d406d06e660e77f', 'Index': 153}, {'questionName': 'I am the Director of Outreach for the venture Capital Club at Rutgers University Is anyone with experience interested in coming to speak to my club', 'time': 7584, 'answerNum': 3, 'questionLink': 'https://www.quora.com/I-am-the-Director-of-Outreach-for-the-venture-Capital-Club-at-Rutgers-University-Is-anyone-with-experience-interested-in-coming-to-speak-to-my-club', 'followerNum': 1, 'viewNum': 980, 'hotness': 0.00012136180318703777, 'ID': 'd6e13c579c59420eff2e9b4d40544634ce0ffc66', 'Index': 154}, {'questionName': 'How is the Rutgers MBS User Expereince Design program', 'time': 6024, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/How-is-the-Rutgers-MBS-User-Expereince-Design-program', 'followerNum': 6, 'viewNum': 1058, 'hotness': 0.0001756892695258795, 'ID': '462c8adf43bcef1ce61b2b0ed4d5ff35b4a1a7a2', 'Index': 155}, {'questionName': 'Which is better for an MS in computer science UTD or Rutgers', 'time': 7632, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/Which-is-better-for-an-MS-in-computer-science-UTD-or-Rutgers', 'followerNum': 3, 'viewNum': 376, 'hotness': 0.00010312191804260047, 'ID': 'da01f0aef690e78bf50919ed2da761e970ddced8', 'Index': 156}, {'questionName': 'Why is the student body at Rutgers Newark so much weaker than that of New Brunswick', 'time': 7848, 'answerNum': 2, 'questionLink': 'https://www.quora.com/Why-is-the-student-body-at-Rutgers-Newark-so-much-weaker-than-that-of-New-Brunswick', 'followerNum': 0, 'viewNum': 1107, 'hotness': 0.00011564689988304141, 'ID': 'a2f0282fca9a7f4b03acebba4c21366aa8e0bd64', 'Index': 157}, {'questionName': 'Which university is better in terms of MIS and ROI the Rutgers Business School or the Stevens Institute Of Technology', 'time': 6264, 'answerNum': 1, 'questionLink': 'https://www.quora.com/Which-university-is-better-in-terms-of-MIS-and-ROI-the-Rutgers-Business-School-or-the-Stevens-Institute-Of-Technology', 'followerNum': 4, 'viewNum': 1341, 'hotness': 0.0001699589042701696, 'ID': '7909f63e89a17a3c07c849a34313ddd39440e22c', 'Index': 158}, {'questionName': 'Which would be a better pick an MTech in CS at IIIT Hyderabad or an MS in CS at Rutgers University', 'time': 7944, 'answerNum': 1, 'questionLink': 'https://www.quora.com/Which-would-be-a-better-pick-an-MTech-in-CS-at-IIIT-Hyderabad-or-an-MS-in-CS-at-Rutgers-University', 'followerNum': 1, 'viewNum': 871, 'hotness': 0.00010972769275794433, 'ID': '50daae767bc9aba9c7b056170ea84705e54a912e', 'Index': 159}, {'questionName': 'How would Ivy League academics particularly in STEM compare to the honors college at a school like Rutgers', 'time': 7944, 'answerNum': 1, 'questionLink': 'https://www.quora.com/How-would-Ivy-League-academics-particularly-in-STEM-compare-to-the-honors-college-at-a-school-like-Rutgers', 'followerNum': 9, 'viewNum': 2264, 'hotness': 0.00013137482778278824, 'ID': '46b54938cada6d166f64c674966084bcb9be9ce1', 'Index': 160}, {'questionName': 'In which order would you rank the following universities as the best to go to for an MS in Data Science the University of Washington Rutgers and UMTC and why', 'time': 7968, 'answerNum': 1, 'questionLink': 'https://www.quora.com/In-which-order-would-you-rank-the-following-universities-as-the-best-to-go-to-for-an-MS-in-Data-Science-the-University-of-Washington-Rutgers-and-UMTC-and-why', 'followerNum': 2, 'viewNum': 610, 'hotness': 0.00010436389437333024, 'ID': '1652f336d63dba527a49aa024447b5d8eafea353', 'Index': 161}, {'questionName': 'Are my chances for admission to a top MS CS program Waterloo ubc rutgers etc doomed', 'time': 7992, 'answerNum': 1, 'questionLink': 'https://www.quora.com/Are-my-chances-for-admission-to-a-top-MS-CS-program-Waterloo-ubc-rutgers-etc-doomed', 'followerNum': 2, 'viewNum': 934, 'hotness': 0.00011063777013525111, 'ID': 'b90090d289f8a1e32382e98eef6efd666c8508f9', 'Index': 162}, {'questionName': 'How many days does Rutgers University take to declare a graduate admission decision', 'time': 8376, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/How-many-days-does-Rutgers-University-take-to-declare-a-graduate-admission-decision', 'followerNum': 2, 'viewNum': 452, 'hotness': 9.167343122886136e-05, 'ID': '34a68571a8d4b9969f1ee195ff55ace2fe921bc5', 'Index': 163}, {'questionName': 'What should I take for my math minor Im intending to be a materials engineer at Rutgers University with a concentration in optical materials', 'time': 8400, 'answerNum': 1, 'questionLink': 'https://www.quora.com/What-should-I-take-for-my-math-minor-Im-intending-to-be-a-materials-engineer-at-Rutgers-University-with-a-concentration-in-optical-materials', 'followerNum': 0, 'viewNum': 586, 'hotness': 9.436056078521888e-05, 'ID': '019ff6864557fbb2419e05061442f5cb8beee593', 'Index': 164}, {'questionName': 'Which university is better for MS in CS Rutgers or Northeastern University', 'time': 5784, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/Which-university-is-better-for-MS-in-CS-Rutgers-or-Northeastern-University', 'followerNum': 3, 'viewNum': 629, 'hotness': 0.0001695098456469317, 'ID': '132fd6b65dd2a77d58ca0bdc1ebe5ae6ff1644cc', 'Index': 165}, {'questionName': 'Is Rutgers a public school', 'time': 8928, 'answerNum': 4, 'questionLink': 'https://www.quora.com/Is-Rutgers-a-public-school', 'followerNum': 0, 'viewNum': 813, 'hotness': 9.251728972648954e-05, 'ID': '6c267cbccee5b81fb1441f48455251653f03e3ea', 'Index': 166}, {'questionName': 'How do I get into Rutgers engineering or any college with a CS program in the the top 50s', 'time': 9048, 'answerNum': 1, 'questionLink': 'https://www.quora.com/How-do-I-get-into-Rutgers-engineering-or-any-college-with-a-CS-program-in-the-the-top-50s', 'followerNum': 2, 'viewNum': 2661, 'hotness': 0.00010560798490312827, 'ID': 'e8137b79a00c2b125882bb2e72acabf0f8c61b3c', 'Index': 167}, {'questionName': 'Is the biostatistics graduate program at Rutgers good', 'time': 9168, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/Is-the-biostatistics-graduate-program-at-Rutgers-good', 'followerNum': 1, 'viewNum': 602, 'hotness': 8.310516766764382e-05, 'ID': 'f78223c3d8024e8f3ae9521dd29d5c89a9387629', 'Index': 168}, {'questionName': 'What is the transfer acceptance rate of Rutgers New Brunswick from a community college', 'time': 9216, 'answerNum': 1, 'questionLink': 'https://www.quora.com/What-is-the-transfer-acceptance-rate-of-Rutgers-New-Brunswick-from-a-community-college', 'followerNum': 0, 'viewNum': 603, 'hotness': 8.247811261014886e-05, 'ID': '743a36c6b1541818ee68ff87df286ad550d73862', 'Index': 169}, {'questionName': 'How much better are UG Honors programs in US universities Purdue Rutgers compared to the regular programs offered by the same schools', 'time': 9288, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/How-much-better-are-UG-Honors-programs-in-US-universities-Purdue-Rutgers-compared-to-the-regular-programs-offered-by-the-same-schools', 'followerNum': 2, 'viewNum': 182, 'hotness': 6.701707621889373e-05, 'ID': 'bc821874de9921afc0a77770926b20158b35e057', 'Index': 170}, {'questionName': 'Why does Rutgers New Brunswick make you wait a year before transferring from Newark', 'time': 9288, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/Why-does-Rutgers-New-Brunswick-make-you-wait-a-year-before-transferring-from-Newark', 'followerNum': 0, 'viewNum': 414, 'hotness': 7.613789783422314e-05, 'ID': '8808f297088ea0244b1966a392473360ddbff90e', 'Index': 171}, {'questionName': 'Where does Rutgers rank among the colonial colleges', 'time': 9408, 'answerNum': 1, 'questionLink': 'https://www.quora.com/Where-does-Rutgers-rank-among-the-colonial-colleges', 'followerNum': 2, 'viewNum': 198, 'hotness': 6.740328736144401e-05, 'ID': '4bed321b7180df2b6d7092c4b9076a19aa71cf20', 'Index': 172}, {'questionName': 'How promising is Rutgers new Data Science MS program', 'time': 9600, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/How-promising-is-Rutgers-new-Data-Science-MS-program', 'followerNum': 13, 'viewNum': 1476, 'hotness': 9.555878488912033e-05, 'ID': 'aa246a231339fa78276581eff8311b8147fa7eb6', 'Index': 173}, {'questionName': 'Did anyone else get admitted to Rutgers University New Brunswick for spring 2017 PS I am asking about undergraduate students', 'time': 9672, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/Did-anyone-else-get-admitted-to-Rutgers-University-New-Brunswick-for-spring-2017-PS-I-am-asking-about-undergraduate-students', 'followerNum': 0, 'viewNum': 153, 'hotness': 5.981383579943627e-05, 'ID': '4d1bc81ad31ae50acc7a1c5ff085567fb3ca4a39', 'Index': 174}, {'questionName': 'Which of these has a better value for a master%E2%80%99s degree Rutgers CS SJSU SE or UW Tacoma Computing Science and Systems', 'time': 9672, 'answerNum': 1, 'questionLink': 'https://www.quora.com/Which-of-these-has-a-better-value-for-a-master%E2%80%99s-degree-Rutgers-CS-SJSU-SE-or-UW-Tacoma-Computing-Science-and-Systems', 'followerNum': 3, 'viewNum': 878, 'hotness': 8.296689356672564e-05, 'ID': '6d78b995cf28f7c34b649447f67db723653adb5e', 'Index': 175}, {'questionName': 'Whats the strength of Rutgers University as for research field', 'time': 10008, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/Whats-the-strength-of-Rutgers-University-as-for-research-field', 'followerNum': 1, 'viewNum': 723, 'hotness': 7.493602615841581e-05, 'ID': 'cff66427c693f1d044d02305ad1d3530c6bb0a5d', 'Index': 176}, {'questionName': 'What are the main reasons why students from Rutgers dont graduate on time', 'time': 11592, 'answerNum': 4, 'questionLink': 'https://www.quora.com/What-are-the-main-reasons-why-students-from-Rutgers-dont-graduate-on-time', 'followerNum': 10, 'viewNum': 2912, 'hotness': 7.863291713667379e-05, 'ID': '6a5c49cfef6006c2075b08a267368ee5eccfb66e', 'Index': 177}, {'questionName': 'What is the best way to write an admission essay for Rutgers University', 'time': 10032, 'answerNum': 1, 'questionLink': 'https://www.quora.com/What-is-the-best-way-to-write-an-admission-essay-for-Rutgers-University', 'followerNum': 0, 'viewNum': 1076, 'hotness': 7.914277834587278e-05, 'ID': '87c56963ac65a11365f6f3d22b65ce503ad3df42', 'Index': 178}, {'questionName': 'Should Rutgers be removed from the Big Ten', 'time': 10128, 'answerNum': 2, 'questionLink': 'https://www.quora.com/Should-Rutgers-be-removed-from-the-Big-Ten', 'followerNum': 3, 'viewNum': 2170, 'hotness': 8.802376419379044e-05, 'ID': 'ed48b8a90b601786f3aad0229273070ae1ceb87e', 'Index': 179}, {'questionName': 'How hard is it to get into Rutgers engineering', 'time': 9192, 'answerNum': 1, 'questionLink': 'https://www.quora.com/How-hard-is-it-to-get-into-Rutgers-engineering', 'followerNum': 2, 'viewNum': 1385, 'hotness': 9.475625601388235e-05, 'ID': 'fb0aa9ad8f5131cc8c405fb5d6b4d9ab83ff69dd', 'Index': 180}, {'questionName': 'How good is the Masters%E2%80%99 in economics program in Rutgers University', 'time': 10464, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/How-good-is-the-Masters%E2%80%99-in-economics-program-in-Rutgers-University', 'followerNum': 0, 'viewNum': 70, 'hotness': 4.4892007358679926e-05, 'ID': 'a98bad41f481d1cc939801bf9c00fd3fe33e1994', 'Index': 181}, {'questionName': 'Is 322 in GRE 162q 161 v good enough for Rutgers New Brunswick MS Industrial Engineering', 'time': 10224, 'answerNum': 1, 'questionLink': 'https://www.quora.com/Is-322-in-GRE-162q-161-v-good-enough-for-Rutgers-New-Brunswick-MS-Industrial-Engineering', 'followerNum': 18, 'viewNum': 3291, 'hotness': 9.900208356962393e-05, 'ID': '85e8d5976ad2a2e14a1927a934aca578fa46fffa', 'Index': 182}, {'questionName': 'Is Rutgers University a good school Why or why not', 'time': 2256, 'answerNum': 4, 'questionLink': 'https://www.quora.com/Is-Rutgers-University-a-good-school-Why-or-why-not', 'followerNum': 4, 'viewNum': 4904, 'hotness': 0.0009382142702592065, 'ID': 'f3b5d123047c054fd16cb889ea469c9ec0c14a1f', 'Index': 183}, {'questionName': 'What is the salary of a just joined lecturer in Rutgers', 'time': 10752, 'answerNum': 1, 'questionLink': 'https://www.quora.com/What-is-the-salary-of-a-just-joined-lecturer-in-Rutgers', 'followerNum': 0, 'viewNum': 261, 'hotness': 5.695903217483907e-05, 'ID': '43e984b23eb018a90478ff0af9ff25fca732a9a4', 'Index': 184}, {'questionName': 'I want to do MS in IT at Rutgers Newark As Rutgers provides assistantships only to PhD students what are the ways in which I can fund my education', 'time': 10752, 'answerNum': 1, 'questionLink': 'https://www.quora.com/I-want-to-do-MS-in-IT-at-Rutgers-Newark-As-Rutgers-provides-assistantships-only-to-PhD-students-what-are-the-ways-in-which-I-can-fund-my-education', 'followerNum': 1, 'viewNum': 400, 'hotness': 6.179760691190828e-05, 'ID': '20ced90044cad7d27794cb0238811db1545cf952', 'Index': 185}, {'questionName': 'What is the best university for MA MS in Communication in the US I have shortlisted OSU Rutgers SLU and The University of Texas at Austin', 'time': 10776, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/What-is-the-best-university-for-MA-MS-in-Communication-in-the-US-I-have-shortlisted-OSU-Rutgers-SLU-and-The-University-of-Texas-at-Austin', 'followerNum': 0, 'viewNum': 1360, 'hotness': 7.295389709112609e-05, 'ID': 'f406093d5dd2876e6bb0a198a00c2556a2d05a79', 'Index': 186}, {'questionName': 'Should I attend UC Berkeley or Rutgers or Lehigh if I major in CS and live in NJ', 'time': 11040, 'answerNum': 10, 'questionLink': 'https://www.quora.com/Should-I-attend-UC-Berkeley-or-Rutgers-or-Lehigh-if-I-major-in-CS-and-live-in-NJ', 'followerNum': 1, 'viewNum': 19657, 'hotness': 0.0001017595780271803, 'ID': 'ebd7d72ca52046459592a812636087f5b9cf4d45', 'Index': 187}, {'questionName': 'I am majoring in genetics at Rutgers University I have a pretty good GPA too but I am very confused about my future career plans', 'time': 11040, 'answerNum': 1, 'questionLink': 'https://www.quora.com/I-am-majoring-in-genetics-at-Rutgers-University-I-have-a-pretty-good-GPA-too-but-I-am-very-confused-about-my-future-career-plans', 'followerNum': 0, 'viewNum': 344, 'hotness': 5.743755901151592e-05, 'ID': '7d73392a52d45d6c671c51268690017b3a90c5d8', 'Index': 188}, {'questionName': 'What is the placement scenario after an MS in CS from Rutgers University NJ', 'time': 6192, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/What-is-the-placement-scenario-after-an-MS-in-CS-from-Rutgers-University-NJ', 'followerNum': 6, 'viewNum': 1795, 'hotness': 0.00018085874012383765, 'ID': '110eebf352b6c461652fb093d658eaaf71dc9dfa', 'Index': 189}, {'questionName': 'What are the best restaurants near Rutgerss campus', 'time': 11472, 'answerNum': 3, 'questionLink': 'https://www.quora.com/What-are-the-best-restaurants-near-Rutgerss-campus', 'followerNum': 5, 'viewNum': 1713, 'hotness': 7.222392779771759e-05, 'ID': 'f435eefb268ddfb03f7a9bcb05faabf5925c6bef', 'Index': 190}, {'questionName': 'What is Rutgers honors program', 'time': 11520, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/What-is-Rutgers-honors-program', 'followerNum': 0, 'viewNum': 844, 'hotness': 6.163877712314248e-05, 'ID': '366c29e1844f6dab27e9cb3b20d90ba3350b1546', 'Index': 191}, {'questionName': 'How can you join the Rutgers honors program', 'time': 11544, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/How-can-you-join-the-Rutgers-honors-program', 'followerNum': 1, 'viewNum': 1262, 'hotness': 6.557131745434314e-05, 'ID': '62a3258a7a5db181ce5408440cead959b1536e0f', 'Index': 192}, {'questionName': 'How is the masters program in social work at Rutgers', 'time': 11664, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/How-is-the-masters-program-in-social-work-at-Rutgers', 'followerNum': 2, 'viewNum': 138, 'hotness': 4.513909294448856e-05, 'ID': '913df3c660f668347b8d2bb7cd1b70d1175d1cbc', 'Index': 193}, {'questionName': 'Why is Rutgers considered a private school', 'time': 11856, 'answerNum': 5, 'questionLink': 'https://www.quora.com/Why-is-Rutgers-considered-a-private-school', 'followerNum': 2, 'viewNum': 2438, 'hotness': 7.13984164127563e-05, 'ID': '0863b8c95c796bb632e8fe649f8bc725bda2eec1', 'Index': 194}, {'questionName': 'I have a GRE score of 310 Q 158 AWA 3 0 TOEFL 91 and BIT VTU CS 69 Which universities can I apply for MS in CS in US', 'time': 11952, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/I-have-a-GRE-score-of-310-Q-158-AWA-3-0-TOEFL-91-and-BIT-VTU-CS-69-Which-universities-can-I-apply-for-MS-in-CS-in-US', 'followerNum': 6, 'viewNum': 1117, 'hotness': 6.335069113675843e-05, 'ID': 'a50701c4a8bfe310a79761fb114986baef104c28', 'Index': 195}, {'questionName': 'What is it like to be a summer student at Rutgers How is it different from the normal school year', 'time': 11928, 'answerNum': 5, 'questionLink': 'https://www.quora.com/What-is-it-like-to-be-a-summer-student-at-Rutgers-How-is-it-different-from-the-normal-school-year', 'followerNum': 2, 'viewNum': 3031, 'hotness': 7.264334113113452e-05, 'ID': '47110282325bd72d5a4d62b5e8f68cdd0c444be3', 'Index': 196}, {'questionName': 'How is the graduate student life for international students at Rutgers New Brunswick', 'time': 11952, 'answerNum': 1, 'questionLink': 'https://www.quora.com/How-is-the-graduate-student-life-for-international-students-at-Rutgers-New-Brunswick', 'followerNum': 0, 'viewNum': 838, 'hotness': 5.869890654692472e-05, 'ID': 'dfed928a9f239499bccd01d8021bb6208f49a9d9', 'Index': 197}, {'questionName': 'Is it wasteful for Rutgers a State university to subsidize an undergraduate program in video game design', 'time': 11976, 'answerNum': 2, 'questionLink': 'https://www.quora.com/Is-it-wasteful-for-Rutgers-a-State-university-to-subsidize-an-undergraduate-program-in-video-game-design', 'followerNum': 1, 'viewNum': 1005, 'hotness': 6.095395836198831e-05, 'ID': '4e1926219504ab37edaf13a4ab3f9468d3df2e6b', 'Index': 198}, {'questionName': 'How do Indian students adjust to snowfall for the first time in USA', 'time': 12024, 'answerNum': 2, 'questionLink': 'https://www.quora.com/How-do-Indian-students-adjust-to-snowfall-for-the-first-time-in-USA', 'followerNum': 0, 'viewNum': 477, 'hotness': 5.376735479211039e-05, 'ID': 'd43ed25f2b11e79db154d4bbb6da0c25b53dea57', 'Index': 199}, {'questionName': 'How has an MBA from Rutgers benefited you', 'time': 12168, 'answerNum': 1, 'questionLink': 'https://www.quora.com/How-has-an-MBA-from-Rutgers-benefited-you', 'followerNum': 10, 'viewNum': 2104, 'hotness': 6.911422899569924e-05, 'ID': '0fa56d0eb6e7f1b6759d184a29f189caa7e7086e', 'Index': 200}, {'questionName': 'Who are some unknown alumni from Rutgers', 'time': 12216, 'answerNum': 2, 'questionLink': 'https://www.quora.com/Who-are-some-unknown-alumni-from-Rutgers', 'followerNum': 2, 'viewNum': 709, 'hotness': 5.666294284605789e-05, 'ID': 'f4ed11fd8c89c46f3fe488b4249fedc13eadf12d', 'Index': 201}, {'questionName': 'Which school should I go to for Computer Science Rutgers New Brunswick or the University of Michigan', 'time': 12240, 'answerNum': 9, 'questionLink': 'https://www.quora.com/Which-school-should-I-go-to-for-Computer-Science-Rutgers-New-Brunswick-or-the-University-of-Michigan', 'followerNum': 5, 'viewNum': 17259, 'hotness': 8.733648204507053e-05, 'ID': '5248d2897a5b4db3b35b8984bf37449963c1aa78', 'Index': 202}, {'questionName': 'What is the difference between the CS programs of USC U Michigan and Rutgers New Brunswick', 'time': 12336, 'answerNum': 7, 'questionLink': 'https://www.quora.com/What-is-the-difference-between-the-CS-programs-of-USC-U-Michigan-and-Rutgers-New-Brunswick', 'followerNum': 5, 'viewNum': 3753, 'hotness': 7.289769992038565e-05, 'ID': '0949a442a8f542d56c6011cfb20146c80ba42c20', 'Index': 203}, {'questionName': 'What are the arts i e commerce finance etc courses being offered at Rutgers University USA', 'time': 12384, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/What-are-the-arts-i-e-commerce-finance-etc-courses-being-offered-at-Rutgers-University-USA', 'followerNum': 1, 'viewNum': 304, 'hotness': 4.7332605200803724e-05, 'ID': 'c32724de7063fd60109f9ff05c321e8f56eb3b69', 'Index': 204}, {'questionName': 'How is MLA degree at Rutgers', 'time': 12432, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/How-is-MLA-degree-at-Rutgers', 'followerNum': 1, 'viewNum': 104, 'hotness': 3.830610021251666e-05, 'ID': '24a4cf3300bfcf7c803d93ec61395ab1a5a845c4', 'Index': 205}, {'questionName': 'Why is it important to write an essay be admitted in Rutgers', 'time': 12480, 'answerNum': 1, 'questionLink': 'https://www.quora.com/Why-is-it-important-to-write-an-essay-be-admitted-in-Rutgers', 'followerNum': 0, 'viewNum': 1926, 'hotness': 6.176550408676044e-05, 'ID': 'bf75a87836d5812e6ef9bcbc3273d853912889a6', 'Index': 206}, {'questionName': 'How is the Master of Engineering program in Pharmaceutical Engineering at Rutgers University', 'time': 12624, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/How-is-the-Master-of-Engineering-program-in-Pharmaceutical-Engineering-at-Rutgers-University', 'followerNum': 1, 'viewNum': 247, 'hotness': 4.4333632708124124e-05, 'ID': '76553b9169dde3abd9d3bc22df87af253d75921e', 'Index': 207}, {'questionName': 'Which school should I chose between Rutgers Texas A M Purdue for specialization M S in ECE P D systems and networks', 'time': 12768, 'answerNum': 1, 'questionLink': 'https://www.quora.com/Which-school-should-I-chose-between-Rutgers-Texas-A-M-Purdue-for-specialization-M-S-in-ECE-P-D-systems-and-networks', 'followerNum': 1, 'viewNum': 305, 'hotness': 4.563151501494513e-05, 'ID': '15cd93f09201b0b727487105e0d29b59ea3e1c4d', 'Index': 208}, {'questionName': 'What are some tips and hacks for incoming freshmen at Rutgers', 'time': 12792, 'answerNum': 5, 'questionLink': 'https://www.quora.com/What-are-some-tips-and-hacks-for-incoming-freshmen-at-Rutgers', 'followerNum': 2, 'viewNum': 2755, 'hotness': 6.466399843273094e-05, 'ID': '45494ea29e60049a7a8d9f5a3e1b83ee5a8a0763', 'Index': 209}, {'questionName': 'How can I find open TA positions in Rutgers University', 'time': 12792, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/How-can-I-find-open-TA-positions-in-Rutgers-University', 'followerNum': 1, 'viewNum': 527, 'hotness': 4.938785104849636e-05, 'ID': 'f5ba104d40f9c2bc7cdaa3a92c1b08126a10f531', 'Index': 210}, {'questionName': 'Which is the cheapest place to stay at New Brunswick New Jersey near Rutgers', 'time': 5136, 'answerNum': 1, 'questionLink': 'https://www.quora.com/Which-is-the-cheapest-place-to-stay-at-New-Brunswick-New-Jersey-near-Rutgers', 'followerNum': 2, 'viewNum': 298, 'hotness': 0.0001796196610647169, 'ID': '9357f210d9de49d8bce2d2ffc1a2e350cb6462c6', 'Index': 211}, {'questionName': 'Has anyone on Quora attended the online MBA program at Rutgers University in New Jersey', 'time': 10680, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/Has-anyone-on-Quora-attended-the-online-MBA-program-at-Rutgers-University-in-New-Jersey', 'followerNum': 5, 'viewNum': 1608, 'hotness': 7.821804560931183e-05, 'ID': '666d61edee8b6b47f417e1ae4ca53bcd1101e71d', 'Index': 212}, {'questionName': 'How many Rutgers Alumni are presently working in Microsoft', 'time': 13032, 'answerNum': 1, 'questionLink': 'https://www.quora.com/How-many-Rutgers-Alumni-are-presently-working-in-Microsoft', 'followerNum': 1, 'viewNum': 331, 'hotness': 4.4874159316082805e-05, 'ID': '2d3ac7eb26a6f7d18ceb80e3424e75679787c43a', 'Index': 213}, {'questionName': 'Why does Rutgers LinkedIn page has so less alumni registered', 'time': 13032, 'answerNum': 1, 'questionLink': 'https://www.quora.com/Why-does-Rutgers-LinkedIn-page-has-so-less-alumni-registered', 'followerNum': 0, 'viewNum': 110, 'hotness': 3.611818659073801e-05, 'ID': '03cbf7c632fe442decd24cd93de28280c7a1bc48', 'Index': 214}, {'questionName': 'Can you transfer to Cornells CAS from a school like Rutgers', 'time': 13056, 'answerNum': 1, 'questionLink': 'https://www.quora.com/Can-you-transfer-to-Cornells-CAS-from-a-school-like-Rutgers', 'followerNum': 2, 'viewNum': 1239, 'hotness': 5.513754621968446e-05, 'ID': '0b6ed9dafefe475c9d19ceb919316e63eaa6d732', 'Index': 215}, {'questionName': 'Which university is better in terms of job opportunities MS in INDUSTRIAL Engineering Iowa state or Rutgers New Brunswick', 'time': 13152, 'answerNum': 1, 'questionLink': 'https://www.quora.com/Which-university-is-better-in-terms-of-job-opportunities-MS-in-INDUSTRIAL-Engineering-Iowa-state-or-Rutgers-New-Brunswick', 'followerNum': 1, 'viewNum': 1574, 'hotness': 5.5954770805465666e-05, 'ID': 'ce768be27569753dc88c4d1728d24db70c62a1b3', 'Index': 216}, {'questionName': 'Which university should I attend between Rutgers and UT Austin', 'time': 13152, 'answerNum': 5, 'questionLink': 'https://www.quora.com/Which-university-should-I-attend-between-Rutgers-and-UT-Austin', 'followerNum': 1, 'viewNum': 1178, 'hotness': 5.528132205601471e-05, 'ID': '1f4d9c031a0aee3afd77b8562f549e19af0f2518', 'Index': 217}, {'questionName': 'In which companies are the Rutgers alumni placed', 'time': 13152, 'answerNum': 1, 'questionLink': 'https://www.quora.com/In-which-companies-are-the-Rutgers-alumni-placed', 'followerNum': 1, 'viewNum': 254, 'hotness': 4.227581762469408e-05, 'ID': 'dac7c2d67acfb88fe035d75f16cb1412c8b1749c', 'Index': 218}, {'questionName': 'How good is Rutgers MBS Engineering Management Program', 'time': 4248, 'answerNum': 1, 'questionLink': 'https://www.quora.com/How-good-is-Rutgers-MBS-Engineering-Management-Program', 'followerNum': 1, 'viewNum': 417, 'hotness': 0.00025043824977620825, 'ID': '46a91a55ddfdd3c1a0f09ccffd24b86ec085773a', 'Index': 219}, {'questionName': 'How is the Rutgers University MBS Engineering Management course', 'time': 11016, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/How-is-the-Rutgers-University-MBS-Engineering-Management-course', 'followerNum': 2, 'viewNum': 785, 'hotness': 6.618544973888358e-05, 'ID': 'e3072e545cd8c46da4945e3e1879e8cd4c5137d7', 'Index': 220}, {'questionName': 'Im going to be a freshman in the Rutgers School of Engineering in the fall I want to transfer to MIT my sophomore year How can I assure my success', 'time': 13968, 'answerNum': 2, 'questionLink': 'https://www.quora.com/Im-going-to-be-a-freshman-in-the-Rutgers-School-of-Engineering-in-the-fall-I-want-to-transfer-to-MIT-my-sophomore-year-How-can-I-assure-my-success', 'followerNum': 2, 'viewNum': 1514, 'hotness': 5.154341324040541e-05, 'ID': '1bb388836554e9e84092473e0fb35f335e6963b7', 'Index': 221}, {'questionName': 'Should I go to Rutgers newbrunswik or UC Irvine for a masters degree in chemical engineering', 'time': 14064, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/Should-I-go-to-Rutgers-newbrunswik-or-UC-Irvine-for-a-masters-degree-in-chemical-engineering', 'followerNum': 2, 'viewNum': 384, 'hotness': 4.103463384562845e-05, 'ID': 'e1feab2d417e0dccb09a2cbcdd666240c9fa94c4', 'Index': 222}, {'questionName': 'Should I choose UCLA or Rutgers for Computer Science', 'time': 14160, 'answerNum': 1, 'questionLink': 'https://www.quora.com/Should-I-choose-UCLA-or-Rutgers-for-Computer-Science', 'followerNum': 1, 'viewNum': 494, 'hotness': 4.230906243564687e-05, 'ID': '67e56469e260ec6f3408977f388e4c558fd2bfe9', 'Index': 223}, {'questionName': 'What about the graduate of education of rutgers', 'time': 14184, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/What-about-the-graduate-of-education-of-rutgers', 'followerNum': 2, 'viewNum': 597, 'hotness': 4.346983761166625e-05, 'ID': 'b98bdccbf8168eff353cf3bab091a27e56e5bf54', 'Index': 224}, {'questionName': 'How is the masters in chemical engineering course at Rutgers NJ', 'time': 14184, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/How-is-the-masters-in-chemical-engineering-course-at-Rutgers-NJ', 'followerNum': 4, 'viewNum': 610, 'hotness': 4.42836810603159e-05, 'ID': 'ac0c4bc6538e3e286fd081c4f0b573d60b2beb57', 'Index': 225}, {'questionName': 'I got accepted to two local schools and 3 more prestigious out of state schools for Computer Science Which one should I go to', 'time': 14256, 'answerNum': 5, 'questionLink': 'https://www.quora.com/I-got-accepted-to-two-local-schools-and-3-more-prestigious-out-of-state-schools-for-Computer-Science-Which-one-should-I-go-to', 'followerNum': 2, 'viewNum': 888, 'hotness': 4.744087955107917e-05, 'ID': '5e6386f1f049978f231af0ca155c29a086d8e158', 'Index': 226}, {'questionName': 'How does Rutgers CS program compare to that of UMass Penn State and Syracuse', 'time': 14328, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/How-does-Rutgers-CS-program-compare-to-that-of-UMass-Penn-State-and-Syracuse', 'followerNum': 2, 'viewNum': 364, 'hotness': 3.955313310776444e-05, 'ID': 'fce14f921b5f11ab2664c8667d14b0921c0575d0', 'Index': 227}, {'questionName': 'Why is New Jersey the only state that does not have a University of it has Rutgers instead', 'time': 14376, 'answerNum': 5, 'questionLink': 'https://www.quora.com/Why-is-New-Jersey-the-only-state-that-does-not-have-a-University-of-it-has-Rutgers-instead', 'followerNum': 4, 'viewNum': 2006, 'hotness': 5.285223889065466e-05, 'ID': 'c2037c492ba8996b3ec9ac4364dbd068e1c112ae', 'Index': 228}, {'questionName': 'Which is a better University for pursuing MS in Mechanical Engineering Rutgers New Brunswick or MTU', 'time': 14400, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/Which-is-a-better-University-for-pursuing-MS-in-Mechanical-Engineering-Rutgers-New-Brunswick-or-MTU', 'followerNum': 1, 'viewNum': 626, 'hotness': 4.247877636339228e-05, 'ID': 'b26a5c846aa15adc42161074a0bb3f41088db577', 'Index': 229}, {'questionName': 'Is Rutgers engineering as rigorous as Purdue engineering', 'time': 14424, 'answerNum': 1, 'questionLink': 'https://www.quora.com/Is-Rutgers-engineering-as-rigorous-as-Purdue-engineering', 'followerNum': 0, 'viewNum': 311, 'hotness': 3.780498963389657e-05, 'ID': '1a138b51be2ace811d773e3e5fc1179500ddb535', 'Index': 230}, {'questionName': 'Is Rutgers as good as NYU for international relations', 'time': 14520, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/Is-Rutgers-as-good-as-NYU-for-international-relations', 'followerNum': 1, 'viewNum': 779, 'hotness': 4.336697256729177e-05, 'ID': '2c056403f5ce21be1590535509828f980926cf21', 'Index': 231}, {'questionName': 'Which is better for a chemistry PhD FSU SBU or Rutgers', 'time': 14520, 'answerNum': 2, 'questionLink': 'https://www.quora.com/Which-is-better-for-a-chemistry-PhD-FSU-SBU-or-Rutgers', 'followerNum': 4, 'viewNum': 2064, 'hotness': 5.12825962416741e-05, 'ID': '4bd00f26c03dfa38d38841c887aacb637c03f041', 'Index': 232}, {'questionName': 'Would NYU and Rutgers undergrad be comparable in the area of International Relations', 'time': 14520, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/Would-NYU-and-Rutgers-undergrad-be-comparable-in-the-area-of-International-Relations', 'followerNum': 0, 'viewNum': 62, 'hotness': 2.6681727628929986e-05, 'ID': 'abbae7b2cf25463e900c7653e565934a3a402b9a', 'Index': 233}, {'questionName': 'Which would be better for undergrad in CS if I want to work in Google Rutgers UBC or UWaterloo', 'time': 14688, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/Which-would-be-better-for-undergrad-in-CS-if-I-want-to-work-in-Google-Rutgers-UBC-or-UWaterloo', 'followerNum': 1, 'viewNum': 774, 'hotness': 4.258424686787026e-05, 'ID': 'd9b641e109c7ae245c1cd0f0a401b8a456fcd26b', 'Index': 234}, {'questionName': 'Is it worth taking risk and join in Exploratory at Purdue Vs engineering at Rutgers I am an average student', 'time': 14712, 'answerNum': 1, 'questionLink': 'https://www.quora.com/Is-it-worth-taking-risk-and-join-in-Exploratory-at-Purdue-Vs-engineering-at-Rutgers-I-am-an-average-student', 'followerNum': 0, 'viewNum': 1134, 'hotness': 4.49011178300238e-05, 'ID': '6115b458ea93ea3368ebfc9480ce7b1b4b609522', 'Index': 235}, {'questionName': 'What is my next step to becoming a teacher K 5 Im graduating in May with my bachelors in sociology from Rutgers University', 'time': 14712, 'answerNum': 1, 'questionLink': 'https://www.quora.com/What-is-my-next-step-to-becoming-a-teacher-K-5-Im-graduating-in-May-with-my-bachelors-in-sociology-from-Rutgers-University', 'followerNum': 2, 'viewNum': 701, 'hotness': 4.2486033867542505e-05, 'ID': '37135066a501832b0ac0a9fd74ecd88f8da13e9f', 'Index': 236}, {'questionName': 'Which is better for Computer Engineering ECE between Rutgers ASU and CU Boulder in terms of job opportunities and weather', 'time': 336, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/Which-is-better-for-Computer-Engineering-ECE-between-Rutgers-ASU-and-CU-Boulder-in-terms-of-job-opportunities-and-weather', 'followerNum': 2, 'viewNum': 974, 'hotness': 0.012710808017555822, 'ID': '6e4a7a8a7f1a69ae62af8fdccdb51d950255ad1d', 'Index': 237}, {'questionName': 'How hard is it to transfer into the school of engineering at Rutgers New Brunswick from the School of Arts and Sciences', 'time': 14736, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/How-hard-is-it-to-transfer-into-the-school-of-engineering-at-Rutgers-New-Brunswick-from-the-School-of-Arts-and-Sciences', 'followerNum': 2, 'viewNum': 912, 'hotness': 4.373000565559548e-05, 'ID': '5b3b578552e52cd45a3c724976244c16a3480f2b', 'Index': 238}, {'questionName': 'Which is the best school for political science Rutgers UPitt or University of Cincinnati', 'time': 14760, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/Which-is-the-best-school-for-political-science-Rutgers-UPitt-or-University-of-Cincinnati', 'followerNum': 0, 'viewNum': 850, 'hotness': 4.2548509888925366e-05, 'ID': 'e3309768e9f4fbce8d62971bb5cc11f5681a6b47', 'Index': 239}, {'questionName': 'How do I apply for a PhD in Computer Science at Rutgers', 'time': 14760, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/How-do-I-apply-for-a-PhD-in-Computer-Science-at-Rutgers', 'followerNum': 0, 'viewNum': 608, 'hotness': 4.0434964058142784e-05, 'ID': '128c9257581628406bc676d931e773f7b59f8c64', 'Index': 240}, {'questionName': 'Which is a better choice for pursuing MS in Electrical and Computer Engineering among Rutgers New Brunswick CU Boulder and ASU', 'time': 14832, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/Which-is-a-better-choice-for-pursuing-MS-in-Electrical-and-Computer-Engineering-among-Rutgers-New-Brunswick-CU-Boulder-and-ASU', 'followerNum': 1, 'viewNum': 508, 'hotness': 3.9328783195990714e-05, 'ID': '27389a0f7126cb0821008593f95e01ca29433e43', 'Index': 241}, {'questionName': 'Should I choose Rutgers NB CalPoly SLO or Wisconsin for Computer Science', 'time': 14856, 'answerNum': 3, 'questionLink': 'https://www.quora.com/Should-I-choose-Rutgers-NB-CalPoly-SLO-or-Wisconsin-for-Computer-Science', 'followerNum': 1, 'viewNum': 343, 'hotness': 3.771708964252611e-05, 'ID': 'e8687c8c7d7d51358a16ca361afa4bda8171d4ef', 'Index': 242}, {'questionName': 'What is Rutgers Universitys Cap and Skull', 'time': 14880, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/What-is-Rutgers-Universitys-Cap-and-Skull', 'followerNum': 1, 'viewNum': 1083, 'hotness': 4.385618402153809e-05, 'ID': '2aaee367cf72686815d9ac8cbd9b5d0fbde1d94c', 'Index': 243}, {'questionName': 'Which is best for MS in IE among University of Pittsburgh Rutgers and RIT', 'time': 14928, 'answerNum': 1, 'questionLink': 'https://www.quora.com/Which-is-best-for-MS-in-IE-among-University-of-Pittsburgh-Rutgers-and-RIT', 'followerNum': 4, 'viewNum': 1468, 'hotness': 4.6771576020021954e-05, 'ID': '7f44a1fe3930eef578a614a9f2849e78bdd8ba7b', 'Index': 244}, {'questionName': 'How is Rutgers University for Masters in Wireless ECE', 'time': 14976, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/How-is-Rutgers-University-for-Masters-in-Wireless-ECE', 'followerNum': 0, 'viewNum': 308, 'hotness': 3.536603970839651e-05, 'ID': '673545812ef9bb716eddbe21bd12ceeb15964ce2', 'Index': 245}, {'questionName': 'How good is rutgers state university for doing MS in Industrial Engineering compared to doing MS in INDIA', 'time': 15048, 'answerNum': 1, 'questionLink': 'https://www.quora.com/How-good-is-rutgers-state-university-for-doing-MS-in-Industrial-Engineering-compared-to-doing-MS-in-INDIA', 'followerNum': 7, 'viewNum': 2512, 'hotness': 5.0424147461268094e-05, 'ID': '6e3801f04f2fbbe2d102c118986b62ebfa21be9e', 'Index': 246}, {'questionName': 'How do CS Masters at University of Chicago Rutgers and North Carolina State Uni compare What if undecided about industry or PhD afterwards', 'time': 15120, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/How-do-CS-Masters-at-University-of-Chicago-Rutgers-and-North-Carolina-State-Uni-compare-What-if-undecided-about-industry-or-PhD-afterwards', 'followerNum': 3, 'viewNum': 1524, 'hotness': 4.550300838564874e-05, 'ID': 'd4378db7a88d5ca79f9078ccfbfde2fc097e76f8', 'Index': 247}, {'questionName': 'What is it like to study at Rutgers University as an Indian', 'time': 15456, 'answerNum': 1, 'questionLink': 'https://www.quora.com/What-is-it-like-to-study-at-Rutgers-University-as-an-Indian', 'followerNum': 2, 'viewNum': 891, 'hotness': 4.086779316446023e-05, 'ID': 'ce3d546656178be56d07ef6cb14e05690c539f31', 'Index': 248}, {'questionName': 'Are three GCE A levels recognised at Rutgers Business School', 'time': 15456, 'answerNum': 2, 'questionLink': 'https://www.quora.com/Are-three-GCE-A-levels-recognised-at-Rutgers-Business-School', 'followerNum': 2, 'viewNum': 423, 'hotness': 3.677667057606384e-05, 'ID': '9d876894e2c08491f4ad05d3b43b7729289a6fd1', 'Index': 249}, {'questionName': 'Is there a way to ask Rutgers New Brunswick to reevaluate an application for the amount of merit based scholarship given', 'time': 15480, 'answerNum': 1, 'questionLink': 'https://www.quora.com/Is-there-a-way-to-ask-Rutgers-New-Brunswick-to-reevaluate-an-application-for-the-amount-of-merit-based-scholarship-given', 'followerNum': 1, 'viewNum': 529, 'hotness': 3.7417193224113214e-05, 'ID': '83ea5310696a0e99f3bfd75e4fdf6122a0fd972b', 'Index': 250}, {'questionName': 'Does Rutgers University offer scholarships to International Students', 'time': 9840, 'answerNum': 5, 'questionLink': 'https://www.quora.com/Does-Rutgers-University-offer-scholarships-to-International-Students', 'followerNum': 8, 'viewNum': 2972, 'hotness': 0.00010019473959556141, 'ID': 'db74b49abf876f37c61567fe1eebb2d4feb20253', 'Index': 251}, {'questionName': 'Which is the better college to get a business degree Monmouth or Rutgers', 'time': 15504, 'answerNum': 2, 'questionLink': 'https://www.quora.com/Which-is-the-better-college-to-get-a-business-degree-Monmouth-or-Rutgers', 'followerNum': 2, 'viewNum': 769, 'hotness': 4.0108326306644285e-05, 'ID': '4b8a86517fa6aed7772a53af69d2b7376ce4c32f', 'Index': 252}, {'questionName': 'Which university is better for pursuing MS in Mechanical Engineering Michigan Technological University or Rutgers University New Brunswick', 'time': 15504, 'answerNum': 2, 'questionLink': 'https://www.quora.com/Which-university-is-better-for-pursuing-MS-in-Mechanical-Engineering-Michigan-Technological-University-or-Rutgers-University-New-Brunswick', 'followerNum': 1, 'viewNum': 1050, 'hotness': 4.164030029939898e-05, 'ID': '942dd3a145e8b1486557e3982a48247dbe430396', 'Index': 253}, {'questionName': 'How known is Rutgers for business in NYC', 'time': 15672, 'answerNum': 1, 'questionLink': 'https://www.quora.com/How-known-is-Rutgers-for-business-in-NYC', 'followerNum': 6, 'viewNum': 1480, 'hotness': 4.4104728458537086e-05, 'ID': 'ab496d9943646c8e351a14e9482a5ea05a8f81dc', 'Index': 254}, {'questionName': 'What does it take to get into Rutgers Business school in New Brunswick I have a 1720 on the SAT and 4 0 Gpa but kinda sketchy in extra curricular', 'time': 15768, 'answerNum': 3, 'questionLink': 'https://www.quora.com/What-does-it-take-to-get-into-Rutgers-Business-school-in-New-Brunswick-I-have-a-1720-on-the-SAT-and-4-0-Gpa-but-kinda-sketchy-in-extra-curricular', 'followerNum': 0, 'viewNum': 914, 'hotness': 3.9806594678722516e-05, 'ID': '904195da86bd8770d6c9ed354fb0795e1b4155cc', 'Index': 255}, {'questionName': 'Which school is good for Masters in Accounting MSA MBA at Northeastern University VS MBA Accounting at Rutgers VS MS Accounting at Pace University', 'time': 10200, 'answerNum': 1, 'questionLink': 'https://www.quora.com/Which-school-is-good-for-Masters-in-Accounting-MSA-MBA-at-Northeastern-University-VS-MBA-Accounting-at-Rutgers-VS-MS-Accounting-at-Pace-University', 'followerNum': 4, 'viewNum': 973, 'hotness': 7.828705030167666e-05, 'ID': '7839657dc1f280548dcf759ca6c125d8e29595d8', 'Index': 256}, {'questionName': 'Is Rutgers university a good university for masters in finance studying', 'time': 15816, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/Is-Rutgers-university-a-good-university-for-masters-in-finance-studying', 'followerNum': 1, 'viewNum': 330, 'hotness': 3.3263360991458714e-05, 'ID': 'f3169124cc5d062202acc5c94a130217c18f90b7', 'Index': 257}, {'questionName': 'What are the best reasons to attend Rutgers', 'time': 8208, 'answerNum': 5, 'questionLink': 'https://www.quora.com/What-are-the-best-reasons-to-attend-Rutgers', 'followerNum': 5, 'viewNum': 4442, 'hotness': 0.00013533951745923055, 'ID': '2848cd7514fa369a0e6892332ee29ad7276691d6', 'Index': 258}, {'questionName': 'Which should I choose Rutgers business school New Brunswick or W P Carey Business school ASU Tempe for Business and info tech major for undergrad', 'time': 15888, 'answerNum': 1, 'questionLink': 'https://www.quora.com/Which-should-I-choose-Rutgers-business-school-New-Brunswick-or-W-P-Carey-Business-school-ASU-Tempe-for-Business-and-info-tech-major-for-undergrad', 'followerNum': 2, 'viewNum': 966, 'hotness': 3.96690626583262e-05, 'ID': 'e7e2fefbf9dd8feb086a6326ecbe9db508d1d2b3', 'Index': 259}, {'questionName': 'If you had control of the Rutgers Entrepreneurial Society a promising clubclub at Rutgers University what would you do', 'time': 16032, 'answerNum': 2, 'questionLink': 'https://www.quora.com/If-you-had-control-of-the-Rutgers-Entrepreneurial-Society-a-promising-clubclub-at-Rutgers-University-what-would-you-do', 'followerNum': 3, 'viewNum': 1231, 'hotness': 4.1043958724005376e-05, 'ID': 'e82362b0f6840530a30848cc0d35a5542c26d4b2', 'Index': 260}, {'questionName': 'What is it like to study Masters in Mechanical Engineering at Rutgers University New Brunswick', 'time': 11208, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/What-is-it-like-to-study-Masters-in-Mechanical-Engineering-at-Rutgers-University-New-Brunswick', 'followerNum': 8, 'viewNum': 1190, 'hotness': 7.131770419869245e-05, 'ID': '7693e925d6c50444a6cbec056cb396d22a32b52c', 'Index': 261}, {'questionName': 'I was admitted into Computer Engineering in UW Madison Ohio State Purdue and Rutgers NB Which one should I attend', 'time': 6672, 'answerNum': 3, 'questionLink': 'https://www.quora.com/I-was-admitted-into-Computer-Engineering-in-UW-Madison-Ohio-State-Purdue-and-Rutgers-NB-Which-one-should-I-attend', 'followerNum': 6, 'viewNum': 3436, 'hotness': 0.0001782884249934145, 'ID': '5b1e3ae662019403e9abdca5b595664981920ce5', 'Index': 262}, {'questionName': 'What is the chemistry education in Rutgers', 'time': 16248, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/What-is-the-chemistry-education-in-Rutgers', 'followerNum': 1, 'viewNum': 647, 'hotness': 3.5622860498791836e-05, 'ID': 'dfa156bbbdd9edff6ae8b52c146c36c24c3ebf02', 'Index': 263}, {'questionName': 'Would it be difficult or easy for an international masters graduate from Rutgers University to get sponsorship on Wall Street', 'time': 16272, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/Would-it-be-difficult-or-easy-for-an-international-masters-graduate-from-Rutgers-University-to-get-sponsorship-on-Wall-Street', 'followerNum': 2, 'viewNum': 328, 'hotness': 3.2114484957508556e-05, 'ID': '4c74275d8cc2ee20f0bea5f2fcb8f7c99a840610', 'Index': 264}, {'questionName': 'Is there anyone from Rutgers University here', 'time': 16272, 'answerNum': 28, 'questionLink': 'https://www.quora.com/Is-there-anyone-from-Rutgers-University-here', 'followerNum': 28, 'viewNum': 7021, 'hotness': 6.352397723704963e-05, 'ID': 'f484be912866e23d915e20882f21c55442ead3a5', 'Index': 265}, {'questionName': 'How good of a university is Rutgers for business', 'time': 4704, 'answerNum': 2, 'questionLink': 'https://www.quora.com/How-good-of-a-university-is-Rutgers-for-business', 'followerNum': 6, 'viewNum': 1753, 'hotness': 0.00027577270275120903, 'ID': '25b0b12d174b835cbb771a3e1d66f9d297323fce', 'Index': 266}, {'questionName': 'Is Rutgers worth going to as an out of state student', 'time': 16344, 'answerNum': 5, 'questionLink': 'https://www.quora.com/Is-Rutgers-worth-going-to-as-an-out-of-state-student', 'followerNum': 8, 'viewNum': 3357, 'hotness': 4.7470964550058244e-05, 'ID': 'b08da74d01a259477455f3dfce1ec41e06fc6a65', 'Index': 267}, {'questionName': 'I have an admit from Rutgers for MS ECE and expect an admit from UFL too I have also applied to USC Which one among the 3 is comparatively better', 'time': 15072, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/I-have-an-admit-from-Rutgers-for-MS-ECE-and-expect-an-admit-from-UFL-too-I-have-also-applied-to-USC-Which-one-among-the-3-is-comparatively-better', 'followerNum': 4, 'viewNum': 810, 'hotness': 4.216232978851361e-05, 'ID': '292c213f8a8336043e8894ca82bb4c1875ae9752', 'Index': 268}, {'questionName': 'What are the strongest majors in terms of job prospects and what are the weakest majors at Rutgers', 'time': 16344, 'answerNum': 6, 'questionLink': 'https://www.quora.com/What-are-the-strongest-majors-in-terms-of-job-prospects-and-what-are-the-weakest-majors-at-Rutgers', 'followerNum': 10, 'viewNum': 4195, 'hotness': 4.9489408949706035e-05, 'ID': '2c795acf4935784092b2e69b9e0b9107525f06b6', 'Index': 269}, {'questionName': 'What is it like to be an accounting student at Rutgers Camden', 'time': 16368, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/What-is-it-like-to-be-an-accounting-student-at-Rutgers-Camden', 'followerNum': 1, 'viewNum': 612, 'hotness': 3.4931468826466786e-05, 'ID': '15463b4aeb335f0604fb9643ee728c41a58ba62c', 'Index': 270}, {'questionName': 'What are the best small classes for freshmen at Rutgers', 'time': 16488, 'answerNum': 2, 'questionLink': 'https://www.quora.com/What-are-the-best-small-classes-for-freshmen-at-Rutgers', 'followerNum': 7, 'viewNum': 2902, 'hotness': 4.5003761682033786e-05, 'ID': 'f614bb30160186155b0ab1a6fb311d0f3b80d3dd', 'Index': 271}, {'questionName': 'Which has the better philosophy program Rutgers or Pitt', 'time': 16608, 'answerNum': 4, 'questionLink': 'https://www.quora.com/Which-has-the-better-philosophy-program-Rutgers-or-Pitt', 'followerNum': 2, 'viewNum': 3133, 'hotness': 4.412897252503677e-05, 'ID': 'cfefc3f74e90058bce047b63e404d0a02a42b75b', 'Index': 272}, {'questionName': 'What is the minimum GRE score required for an MS in environmental engineering in the US ASU MSU and Rutgers', 'time': 21624, 'answerNum': 1, 'questionLink': 'https://www.quora.com/What-is-the-minimum-GRE-score-required-for-an-MS-in-environmental-engineering-in-the-US-ASU-MSU-and-Rutgers', 'followerNum': 4, 'viewNum': 1438, 'hotness': 2.6755727772785575e-05, 'ID': 'a36be566f3e3adaf685a370260ede2703c1fe432', 'Index': 273}, {'questionName': 'How did Rutgers become so strong in philosophy', 'time': 16968, 'answerNum': 1, 'questionLink': 'https://www.quora.com/How-did-Rutgers-become-so-strong-in-philosophy', 'followerNum': 8, 'viewNum': 2684, 'hotness': 4.27082589166977e-05, 'ID': 'c54f8f395ca638a1ff87f57cd79c125580a7e511', 'Index': 274}, {'questionName': 'What is the criteria to be selected for an interview with Rutgers%E2%80%99 dental school for its international dental program', 'time': 17088, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/What-is-the-criteria-to-be-selected-for-an-interview-with-Rutgers%E2%80%99-dental-school-for-its-international-dental-program', 'followerNum': 7, 'viewNum': 2081, 'hotness': 4.046424948236571e-05, 'ID': '8bca5a98dfbe6c01cb31245cff68a64da31820d6', 'Index': 275}, {'questionName': 'Which minor is better with an Economics major International Affairs or Finance Im a sophomore at Rutgers University', 'time': 17184, 'answerNum': 2, 'questionLink': 'https://www.quora.com/Which-minor-is-better-with-an-Economics-major-International-Affairs-or-Finance-Im-a-sophomore-at-Rutgers-University', 'followerNum': 2, 'viewNum': 887, 'hotness': 3.509021552807052e-05, 'ID': '9f9ffa1bcc2bef21fe5ce51ffd8e7088a13dbe91', 'Index': 276}, {'questionName': 'What are the strengths and weaknesses of the advising system at Rutgers', 'time': 17184, 'answerNum': 4, 'questionLink': 'https://www.quora.com/What-are-the-strengths-and-weaknesses-of-the-advising-system-at-Rutgers', 'followerNum': 2, 'viewNum': 2203, 'hotness': 4.016068520863542e-05, 'ID': '4b518d39b5b11e31838ab71f47d87b2d46a7f2e9', 'Index': 277}, {'questionName': 'How rigorous is the biology program at Rutgers', 'time': 17232, 'answerNum': 1, 'questionLink': 'https://www.quora.com/How-rigorous-is-the-biology-program-at-Rutgers', 'followerNum': 1, 'viewNum': 1129, 'hotness': 3.565002189744423e-05, 'ID': '5f49f083028d4e9d9be995414657c2c40f01b442', 'Index': 278}, {'questionName': 'Ive been accepted to Yonsei University in Korea and Rutgers University at New Brunswick Where should I go', 'time': 24072, 'answerNum': 2, 'questionLink': 'https://www.quora.com/Ive-been-accepted-to-Yonsei-University-in-Korea-and-Rutgers-University-at-New-Brunswick-Where-should-I-go', 'followerNum': 1, 'viewNum': 1097, 'hotness': 2.1657531620084644e-05, 'ID': '5c498e099573d7d68fe75fc20e459fb0169ef45a', 'Index': 279}, {'questionName': 'What are the three most important discoveries to come out of Rutgers Universitys research departments over the past ten years', 'time': 17424, 'answerNum': 1, 'questionLink': 'https://www.quora.com/What-are-the-three-most-important-discoveries-to-come-out-of-Rutgers-Universitys-research-departments-over-the-past-ten-years', 'followerNum': 4, 'viewNum': 802, 'hotness': 3.411826312161884e-05, 'ID': 'f87e612cbcd35bfcda5bbc492cfacc3d325b4f65', 'Index': 280}, {'questionName': 'How did Rutgers University get its name', 'time': 17424, 'answerNum': 3, 'questionLink': 'https://www.quora.com/How-did-Rutgers-University-get-its-name', 'followerNum': 3, 'viewNum': 1260, 'hotness': 3.658602394419258e-05, 'ID': '6fa75ac9ab46fb06c5ea0cca23c5a8aa7601c869', 'Index': 281}, {'questionName': 'What is happening with the Rutgers Grease Trucks in this day and age of healthier eating', 'time': 17424, 'answerNum': 1, 'questionLink': 'https://www.quora.com/What-is-happening-with-the-Rutgers-Grease-Trucks-in-this-day-and-age-of-healthier-eating', 'followerNum': 2, 'viewNum': 685, 'hotness': 3.285088677506163e-05, 'ID': 'af85c993cd5d9d75b8ea34933911072ee084c9bc', 'Index': 282}, {'questionName': 'How is Rutgers University ranked How has that ranking changed throughout the history of the university', 'time': 17424, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/How-is-Rutgers-University-ranked-How-has-that-ranking-changed-throughout-the-history-of-the-university', 'followerNum': 0, 'viewNum': 291, 'hotness': 2.7902682074756967e-05, 'ID': 'fe21d08ae9763ce1815d7e58d309f7a005bae2f3', 'Index': 283}, {'questionName': 'What is campus life like at Rutgers University', 'time': 17424, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/What-is-campus-life-like-at-Rutgers-University', 'followerNum': 0, 'viewNum': 419, 'hotness': 2.9695609566595706e-05, 'ID': 'b670b41e153d01e24f589043cab92ce4fbb27c92', 'Index': 284}, {'questionName': 'What is it like to be a professor at Rutgers University', 'time': 17424, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/What-is-it-like-to-be-a-professor-at-Rutgers-University', 'followerNum': 1, 'viewNum': 527, 'hotness': 3.106941561542817e-05, 'ID': '111ac38ac525c72f72e9af3ae49b0b01c000c76a', 'Index': 285}, {'questionName': 'What are the best majors to study at Rutgers University', 'time': 17424, 'answerNum': 2, 'questionLink': 'https://www.quora.com/What-are-the-best-majors-to-study-at-Rutgers-University', 'followerNum': 4, 'viewNum': 1830, 'hotness': 3.8421526511492645e-05, 'ID': '84a9a368e4b5e46fea060d6f576dfcc080ccd9e2', 'Index': 286}, {'questionName': 'Which famous people have graduated from Rutgers University', 'time': 17424, 'answerNum': 1, 'questionLink': 'https://www.quora.com/Which-famous-people-have-graduated-from-Rutgers-University', 'followerNum': 2, 'viewNum': 843, 'hotness': 3.387165519025467e-05, 'ID': 'f5c00ad4137c4e3b24f06b699ba5fe822458f757', 'Index': 287}, {'questionName': 'Where are the best places to study on the campus of Rutgers University', 'time': 17424, 'answerNum': 1, 'questionLink': 'https://www.quora.com/Where-are-the-best-places-to-study-on-the-campus-of-Rutgers-University', 'followerNum': 1, 'viewNum': 695, 'hotness': 3.2676255384955564e-05, 'ID': 'b3d57f54d4fd98c0e14b1c08b16e5ae9c9fface9', 'Index': 288}, {'questionName': 'What is the history of Rutgers University', 'time': 17424, 'answerNum': 1, 'questionLink': 'https://www.quora.com/What-is-the-history-of-Rutgers-University', 'followerNum': 1, 'viewNum': 1037, 'hotness': 3.464440798137047e-05, 'ID': 'eeb0e9d3db5fad1f20c966e3676c37b586bff456', 'Index': 289}, {'questionName': 'What are interesting facts about Rutgers University', 'time': 17424, 'answerNum': 2, 'questionLink': 'https://www.quora.com/What-are-interesting-facts-about-Rutgers-University', 'followerNum': 4, 'viewNum': 2127, 'hotness': 3.9161210725223614e-05, 'ID': 'd033159121f8ae51d97312914146fb440c680df6', 'Index': 290}, {'questionName': 'What does Rutgers University have to offer', 'time': 17424, 'answerNum': 1, 'questionLink': 'https://www.quora.com/What-does-Rutgers-University-have-to-offer', 'followerNum': 0, 'viewNum': 500, 'hotness': 3.0810754096226684e-05, 'ID': 'f91ce58947f85b2e545c10aeef3081174ec03f03', 'Index': 291}, {'questionName': 'How do I get in state tuition to Rutgers University if I live in a different state', 'time': 17448, 'answerNum': 2, 'questionLink': 'https://www.quora.com/How-do-I-get-in-state-tuition-to-Rutgers-University-if-I-live-in-a-different-state', 'followerNum': 4, 'viewNum': 1014, 'hotness': 3.544449282473224e-05, 'ID': 'a0070da1da33371fcb6cba04b4ee3b65c1f5eb66', 'Index': 292}, {'questionName': 'What are the tips and hacks for getting the classes that you want as a freshman at Rutgers', 'time': 17448, 'answerNum': 6, 'questionLink': 'https://www.quora.com/What-are-the-tips-and-hacks-for-getting-the-classes-that-you-want-as-a-freshman-at-Rutgers', 'followerNum': 6, 'viewNum': 3114, 'hotness': 4.2423811244029476e-05, 'ID': '77477b73a2acfa88f177e3af9668d59d0093caa1', 'Index': 293}, {'questionName': 'What is the course structure for CS Phd in Rutgers In how many years can we complete it Does it have a MS+PhD program Do they provide scholarships', 'time': 17448, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/What-is-the-course-structure-for-CS-Phd-in-Rutgers-In-how-many-years-can-we-complete-it-Does-it-have-a-MS+PhD-program-Do-they-provide-scholarships', 'followerNum': 0, 'viewNum': 1740, 'hotness': 3.662234525621719e-05, 'ID': 'a290fb5fb8eb67d0656f469cafecf4dea251f5ea', 'Index': 294}, {'questionName': 'When do graduate schools like Rutgers North Carolina state and CU Boulder send out decision letters', 'time': 6864, 'answerNum': 3, 'questionLink': 'https://www.quora.com/When-do-graduate-schools-like-Rutgers-North-Carolina-state-and-CU-Boulder-send-out-decision-letters', 'followerNum': 4, 'viewNum': 1875, 'hotness': 0.0001568289017357485, 'ID': '871a3a203b00eaaac62cacc9cecc56deebf611a8', 'Index': 295}, {'questionName': 'Why is Rutgers University so well regarded', 'time': 17616, 'answerNum': 2, 'questionLink': 'https://www.quora.com/Why-is-Rutgers-University-so-well-regarded', 'followerNum': 8, 'viewNum': 1647, 'hotness': 3.825303753587193e-05, 'ID': '30dc05b69cce1ce4508e3cbd34086c8660c66bcb', 'Index': 296}, {'questionName': 'With criteria including connectivity diversity and strong opportunities outside the classroom university and quality of teaching is Rutgers better than the University of Washington Seattle', 'time': 23616, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/With-criteria-including-connectivity-diversity-and-strong-opportunities-outside-the-classroom-university-and-quality-of-teaching-is-Rutgers-better-than-the-University-of-Washington-Seattle', 'followerNum': 1, 'viewNum': 512, 'hotness': 1.9600866052181598e-05, 'ID': '07559ad375c777b286b8140a61348d9084835f96', 'Index': 297}, {'questionName': 'Which of the following university is better for MS in data science Rutgers or university of Rochester', 'time': 9768, 'answerNum': 1, 'questionLink': 'https://www.quora.com/Which-of-the-following-university-is-better-for-MS-in-data-science-Rutgers-or-university-of-Rochester', 'followerNum': 13, 'viewNum': 1880, 'hotness': 9.652483507935167e-05, 'ID': '8b100bc12891b64681f732828fa227f515dc2647', 'Index': 298}, {'questionName': 'Why did Rutgers degrade Rutgers crew team one of their best athletic programs Is there a chance to reestablish their varsity status', 'time': 17688, 'answerNum': 2, 'questionLink': 'https://www.quora.com/Why-did-Rutgers-degrade-Rutgers-crew-team-one-of-their-best-athletic-programs-Is-there-a-chance-to-reestablish-their-varsity-status', 'followerNum': 2, 'viewNum': 1277, 'hotness': 3.53536790778432e-05, 'ID': '1dba1472c17e35988562d3d0bc222653255818f8', 'Index': 299}, {'questionName': 'How is Rutgers University New Brunswick for ECE Computer Engineering Graduate program', 'time': 2928, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/How-is-Rutgers-University-New-Brunswick-for-ECE-Computer-Engineering-Graduate-program', 'followerNum': 2, 'viewNum': 650, 'hotness': 0.0004691692835859231, 'ID': '4052caa11aabe34bc15abde3d6bb818792b926df', 'Index': 300}, {'questionName': 'Can I get into Rutgers SAS with 3 4 GPA and near perfect SAT and SAT2 scores', 'time': 17880, 'answerNum': 2, 'questionLink': 'https://www.quora.com/Can-I-get-into-Rutgers-SAS-with-3-4-GPA-and-near-perfect-SAT-and-SAT2-scores', 'followerNum': 0, 'viewNum': 1158, 'hotness': 3.384987592544665e-05, 'ID': 'ca80db2553bf85b1156e3985eed4b52fdd4c8bb6', 'Index': 301}, {'questionName': 'Is Rutgers Business School better than Stevens institute of technology for MIS', 'time': 5808, 'answerNum': 4, 'questionLink': 'https://www.quora.com/Is-Rutgers-Business-School-better-than-Stevens-institute-of-technology-for-MIS', 'followerNum': 17, 'viewNum': 5089, 'hotness': 0.0002448643164707045, 'ID': 'f53f15de72a9cd36f2ca9ecce277fcaa5e4c7738', 'Index': 302}, {'questionName': 'Which university is better for an MS in computer science Rutgers or NCSU', 'time': 9768, 'answerNum': 3, 'questionLink': 'https://www.quora.com/Which-university-is-better-for-an-MS-in-computer-science-Rutgers-or-NCSU', 'followerNum': 6, 'viewNum': 4419, 'hotness': 0.00010360855201413041, 'ID': 'a632429abfbd94a8b9285dddf48ce6aa83db2ce8', 'Index': 303}, {'questionName': 'Which university is better for an MS in CS Rutgers University New Brunswick or North Carolina State University NCSU and why', 'time': 23256, 'answerNum': 1, 'questionLink': 'https://www.quora.com/Which-university-is-better-for-an-MS-in-CS-Rutgers-University-New-Brunswick-or-North-Carolina-State-University-NCSU-and-why', 'followerNum': 9, 'viewNum': 3076, 'hotness': 2.7212346570202556e-05, 'ID': '1ca48b2c2dfc1de3df4d44cbc2975d5026907e2e', 'Index': 304}, {'questionName': 'Which university should I choose for Computer Science University of Texas at Dallas or Rutgers University at Camden', 'time': 17952, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/Which-university-should-I-choose-for-Computer-Science-University-of-Texas-at-Dallas-or-Rutgers-University-at-Camden', 'followerNum': 5, 'viewNum': 892, 'hotness': 3.312451927781497e-05, 'ID': '79de6001b8bedc423695200af2010487e093a602', 'Index': 305}, {'questionName': 'Which is a better school Purdue at West Lafayette or Rutgers at New Brunswick', 'time': 14328, 'answerNum': 1, 'questionLink': 'https://www.quora.com/Which-is-a-better-school-Purdue-at-West-Lafayette-or-Rutgers-at-New-Brunswick', 'followerNum': 2, 'viewNum': 960, 'hotness': 4.627890201489738e-05, 'ID': 'ab3d7a09c0d194b350730d8b3180544ac805d0e7', 'Index': 306}, {'questionName': 'How good is the undergraduate physics program at Rutgers', 'time': 18000, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/How-good-is-the-undergraduate-physics-program-at-Rutgers', 'followerNum': 0, 'viewNum': 832, 'hotness': 3.149493605866353e-05, 'ID': 'e50b882d6a4374c97591d2d333cc50cb2b76bbdf', 'Index': 307}, {'questionName': 'I was admitted into electrical and computer engineering at Ohio State University the University of Florida and Rutgers University Which is the best college among them For jobs and internship opportunities which should I prefer', 'time': 23136, 'answerNum': 3, 'questionLink': 'https://www.quora.com/I-was-admitted-into-electrical-and-computer-engineering-at-Ohio-State-University-the-University-of-Florida-and-Rutgers-University-Which-is-the-best-college-among-them-For-jobs-and-internship-opportunities-which-should-I-prefer', 'followerNum': 4, 'viewNum': 2454, 'hotness': 2.621594399081901e-05, 'ID': '023cfcc0901989d45d5de7b3def1b5187f4b868a', 'Index': 308}, {'questionName': 'How good is MBS IT at Rutgers University', 'time': 18048, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/How-good-is-MBS-IT-at-Rutgers-University', 'followerNum': 6, 'viewNum': 1048, 'hotness': 3.38458147946044e-05, 'ID': '679538ba916be5af3e5d3f80989c52e669f0e5c0', 'Index': 309}, {'questionName': 'How good is MBS Analytics at Rutgers University and its placement', 'time': 4416, 'answerNum': 2, 'questionLink': 'https://www.quora.com/How-good-is-MBS-Analytics-at-Rutgers-University-and-its-placement', 'followerNum': 21, 'viewNum': 5406, 'hotness': 0.00037545687282534285, 'ID': 'c5bbd2e8d816f3ab00ab174cdb85da1d11b097c2', 'Index': 310}, {'questionName': 'Should I be ashamed of myself for being stressed out from my academics at Rutgers more info in details', 'time': 18192, 'answerNum': 2, 'questionLink': 'https://www.quora.com/Should-I-be-ashamed-of-myself-for-being-stressed-out-from-my-academics-at-Rutgers-more-info-in-details', 'followerNum': 3, 'viewNum': 1254, 'hotness': 3.404159492148751e-05, 'ID': '8b8e4a9e2760e6552b842e587dfd8a4c8caef0a5', 'Index': 311}, {'questionName': 'How is rutgers for MS in Electrical and Computer Engineering', 'time': 17280, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/How-is-rutgers-for-MS-in-Electrical-and-Computer-Engineering', 'followerNum': 7, 'viewNum': 896, 'hotness': 3.559548437461692e-05, 'ID': 'ce88c3e16977ea85b7a43f31565570d2fb60086a', 'Index': 312}, {'questionName': 'How is Rutgers Universitys reputation in San Francisco for its tech degrees', 'time': 16080, 'answerNum': 1, 'questionLink': 'https://www.quora.com/How-is-Rutgers-Universitys-reputation-in-San-Francisco-for-its-tech-degrees', 'followerNum': 3, 'viewNum': 1508, 'hotness': 4.17088664288154e-05, 'ID': '075f475e3547ad0843fad147bd81334d70199d62', 'Index': 313}, {'questionName': 'What do you think of the MS CS program at rutgers', 'time': 10704, 'answerNum': 1, 'questionLink': 'https://www.quora.com/What-do-you-think-of-the-MS-CS-program-at-rutgers', 'followerNum': 3, 'viewNum': 2088, 'hotness': 8.011237454532604e-05, 'ID': '54e47599af7c535979bee7d5917a01bd50cbef9a', 'Index': 314}, {'questionName': 'How is the master of information technology program at rutgers business school', 'time': 3936, 'answerNum': 1, 'questionLink': 'https://www.quora.com/How-is-the-master-of-information-technology-program-at-rutgers-business-school', 'followerNum': 15, 'viewNum': 9481, 'hotness': 0.0004558499277240672, 'ID': '58484503b8397678aaa6aca71ff759933ca56d73', 'Index': 315}, {'questionName': 'I have admit for MS in CS from SUNY StonyBrook and Rutgers University New Brunswick None of them has offered any funding Which has better career prospects', 'time': 18432, 'answerNum': 3, 'questionLink': 'https://www.quora.com/I-have-admit-for-MS-in-CS-from-SUNY-StonyBrook-and-Rutgers-University-New-Brunswick-None-of-them-has-offered-any-funding-Which-has-better-career-prospects', 'followerNum': 4, 'viewNum': 2910, 'hotness': 3.7636327291438285e-05, 'ID': 'fbd0ed143534627af1c974fc4c8c08fc9632eeda', 'Index': 316}, {'questionName': 'Out of the following admits which one should I pick 1 Rutgers University MS in CS 2 Iowa State University MS in CS 3 San Jose State University MS in SE 4 Colorado State University Fort Collins MS in CS', 'time': 18456, 'answerNum': 2, 'questionLink': 'https://www.quora.com/Out-of-the-following-admits-which-one-should-I-pick-1-Rutgers-University-MS-in-CS-2-Iowa-State-University-MS-in-CS-3-San-Jose-State-University-MS-in-SE-4-Colorado-State-University-Fort-Collins-MS-in-CS', 'followerNum': 4, 'viewNum': 3109, 'hotness': 3.763579936179788e-05, 'ID': 'effaf6303eccb35d569da08df5860a0101f66207', 'Index': 317}, {'questionName': 'When and why did Rutgers lose its prestige for academic excellence', 'time': 18336, 'answerNum': 10, 'questionLink': 'https://www.quora.com/When-and-why-did-Rutgers-lose-its-prestige-for-academic-excellence', 'followerNum': 14, 'viewNum': 4292, 'hotness': 4.357522835483138e-05, 'ID': '015472efe505bdff72b2e29bac1ebfd1d3dd436c', 'Index': 318}, {'questionName': 'Is Rutgers university is good for MS in civil', 'time': 18912, 'answerNum': 1, 'questionLink': 'https://www.quora.com/Is-Rutgers-university-is-good-for-MS-in-civil', 'followerNum': 1, 'viewNum': 651, 'hotness': 2.8612606576618296e-05, 'ID': 'bb30b9bbffd1d9c0e615c5f126541867c31b76c9', 'Index': 319}, {'questionName': 'Which school is better Rutgers New Brunswick vs SUNY Binghamton', 'time': 19416, 'answerNum': 4, 'questionLink': 'https://www.quora.com/Which-school-is-better-Rutgers-New-Brunswick-vs-SUNY-Binghamton', 'followerNum': 2, 'viewNum': 2431, 'hotness': 3.385102699239904e-05, 'ID': '133ca85b640b4dacf2acffbbef420432fbea5717', 'Index': 320}, {'questionName': 'Why is Rutgers not so popular among Indian students for MS in CS', 'time': 15576, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/Why-is-Rutgers-not-so-popular-among-Indian-students-for-MS-in-CS', 'followerNum': 10, 'viewNum': 1337, 'hotness': 4.4794603727627846e-05, 'ID': 'b6066f3f094bd60001ff68fcf6783808204de802', 'Index': 321}, {'questionName': 'How much money does a statistics grad student earn from Rutgers university on average Also is it hard to find a data science job for statistics student What skills are more important to learn', 'time': 19608, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/How-much-money-does-a-statistics-grad-student-earn-from-Rutgers-university-on-average-Also-is-it-hard-to-find-a-data-science-job-for-statistics-student-What-skills-are-more-important-to-learn', 'followerNum': 2, 'viewNum': 1570, 'hotness': 3.072977324080571e-05, 'ID': '12a943fb6e44f50d38a503fce9019c13391a5057', 'Index': 322}, {'questionName': 'How can I get a job at Rutgers University', 'time': 16032, 'answerNum': 2, 'questionLink': 'https://www.quora.com/How-can-I-get-a-job-at-Rutgers-University', 'followerNum': 5, 'viewNum': 2244, 'hotness': 4.494705129881881e-05, 'ID': '03777eb823c71782285b58a97279c2495510bda1', 'Index': 323}, {'questionName': 'Can I get into Rutgers University with the scores described below', 'time': 20088, 'answerNum': 2, 'questionLink': 'https://www.quora.com/Can-I-get-into-Rutgers-University-with-the-scores-described-below', 'followerNum': 5, 'viewNum': 2991, 'hotness': 3.3189173472002174e-05, 'ID': '2f5bf30923bafb516551e348728e7ec916031216', 'Index': 324}, {'questionName': 'Is 315 an acceptable gre score in universities like NYU Rutgers and Columbia', 'time': 20280, 'answerNum': 1, 'questionLink': 'https://www.quora.com/Is-315-an-acceptable-gre-score-in-universities-like-NYU-Rutgers-and-Columbia', 'followerNum': 12, 'viewNum': 3223, 'hotness': 3.418668044864832e-05, 'ID': 'a455b5290eae48fb160444410b2391eff57254e4', 'Index': 325}, {'questionName': 'Does Purdue University have a better reputation than Rutgers NB', 'time': 22704, 'answerNum': 2, 'questionLink': 'https://www.quora.com/Does-Purdue-University-have-a-better-reputation-than-Rutgers-NB', 'followerNum': 1, 'viewNum': 1299, 'hotness': 2.420285229945767e-05, 'ID': '3060a8e0b9c5a21c8ae09f5668499b69d2825e13', 'Index': 326}, {'questionName': 'Im having a real hard time deciding Which should I choose Rutger vs Purdue', 'time': 22704, 'answerNum': 2, 'questionLink': 'https://www.quora.com/Im-having-a-real-hard-time-deciding-Which-should-I-choose-Rutger-vs-Purdue', 'followerNum': 1, 'viewNum': 961, 'hotness': 2.320629532333047e-05, 'ID': '4918055b8bf4b2e179a37825098f719f40dfc1af', 'Index': 327}, {'questionName': 'What are the GRE requirements to get an admission at Rutgers New Brunswick', 'time': 4320, 'answerNum': 3, 'questionLink': 'https://www.quora.com/What-are-the-GRE-requirements-to-get-an-admission-at-Rutgers-New-Brunswick', 'followerNum': 12, 'viewNum': 5822, 'hotness': 0.00037506025146923723, 'ID': 'be0e6de975ddf5e1f0118ff6c2da05bf56f5b91b', 'Index': 328}, {'questionName': 'What are the names of the professors in Rutgers New Jersey who are working on social networks', 'time': 22680, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/What-are-the-names-of-the-professors-in-Rutgers-New-Jersey-who-are-working-on-social-networks', 'followerNum': 0, 'viewNum': 133, 'hotness': 1.6196561735508907e-05, 'ID': '868982112b374bdfc0c7163a33eed2765a4c36eb', 'Index': 329}, {'questionName': 'Have any Rutgers students double majored in CS and ECE', 'time': 20352, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/Have-any-Rutgers-students-double-majored-in-CS-and-ECE', 'followerNum': 2, 'viewNum': 1211, 'hotness': 2.8048825045232955e-05, 'ID': 'a451f2448143c26942741638f2f27f68dc1db40b', 'Index': 330}, {'questionName': 'What is it like to do an MS from Rutgers', 'time': 17376, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/What-is-it-like-to-do-an-MS-from-Rutgers', 'followerNum': 5, 'viewNum': 511, 'hotness': 3.203369132520647e-05, 'ID': '90fe0faf9a8e6b0249bf5545f6b6f1d253e7d7c2', 'Index': 331}, {'questionName': 'From which school do graduates do better in the job market in general after graduation Purdue or Rutgers New Brunswick', 'time': 22272, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/From-which-school-do-graduates-do-better-in-the-job-market-in-general-after-graduation-Purdue-or-Rutgers-New-Brunswick', 'followerNum': 2, 'viewNum': 346, 'hotness': 2.023786122560346e-05, 'ID': '640ddc1d4f64c4f7d6b92e8f5967c3e481efb0af', 'Index': 332}, {'questionName': 'What is it like to attend Rutgers University New Brunswick', 'time': 11640, 'answerNum': 4, 'questionLink': 'https://www.quora.com/What-is-it-like-to-attend-Rutgers-University-New-Brunswick', 'followerNum': 5, 'viewNum': 3102, 'hotness': 7.646473217119096e-05, 'ID': '761e9729118367af083d05f5b533d0bc6ed606fc', 'Index': 333}, {'questionName': 'What does Ben Zhao think of Rutgers', 'time': 19488, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/What-does-Ben-Zhao-think-of-Rutgers', 'followerNum': 2, 'viewNum': 1435, 'hotness': 3.064016328503628e-05, 'ID': 'eec30ff142dae26383a0265948a1f5efc0615584', 'Index': 334}, {'questionName': 'Who are some well known graduates of the Computer Science program at Rutgers University', 'time': 10200, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/Who-are-some-well-known-graduates-of-the-Computer-Science-program-at-Rutgers-University', 'followerNum': 5, 'viewNum': 2744, 'hotness': 8.967031746727367e-05, 'ID': '5990a1f8d7c32ada11965f6a408944360bd0631d', 'Index': 335}, {'questionName': 'Im an Asian student Should I choose Rutgers over Purdue for its diversity', 'time': 21912, 'answerNum': 2, 'questionLink': 'https://www.quora.com/Im-an-Asian-student-Should-I-choose-Rutgers-over-Purdue-for-its-diversity', 'followerNum': 1, 'viewNum': 2754, 'hotness': 2.8147485561346325e-05, 'ID': 'eb7aed0323c4b3929a4578ea2469d27d379a92e3', 'Index': 336}, {'questionName': 'Where are Rutgers engineering graduates working now', 'time': 21048, 'answerNum': 1, 'questionLink': 'https://www.quora.com/Where-are-Rutgers-engineering-graduates-working-now', 'followerNum': 1, 'viewNum': 1015, 'hotness': 2.6015218692545627e-05, 'ID': '1b9d1be9bfe4d477738b473c4b0029823f527b68', 'Index': 337}, {'questionName': 'Can I get into UMD Rutgers Drexel Boston University Northeastern University Penn State Pitt or GW', 'time': 21072, 'answerNum': 3, 'questionLink': 'https://www.quora.com/Can-I-get-into-UMD-Rutgers-Drexel-Boston-University-Northeastern-University-Penn-State-Pitt-or-GW', 'followerNum': 2, 'viewNum': 1529, 'hotness': 2.8040738596926007e-05, 'ID': 'bbac74eb7978c1f29fd1471cf6585bb8c9fc268d', 'Index': 338}, {'questionName': 'What are the features of the Rutgers Livingston gym', 'time': 21168, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/What-are-the-features-of-the-Rutgers-Livingston-gym', 'followerNum': 0, 'viewNum': 360, 'hotness': 2.161979797421923e-05, 'ID': '417eacbd1cb97121f3fceb84187c1000b2f0e54f', 'Index': 339}, {'questionName': 'Can I get into Penn State Drexel GWU UMD or Rutgers with the following scores', 'time': 21288, 'answerNum': 7, 'questionLink': 'https://www.quora.com/Can-I-get-into-Penn-State-Drexel-GWU-UMD-or-Rutgers-with-the-following-scores', 'followerNum': 5, 'viewNum': 3359, 'hotness': 3.175616308942793e-05, 'ID': '61cc419467f9edc1e3dd365eca092c9cbe5a79ad', 'Index': 340}, {'questionName': 'Is Rutgers well known in the CS academia', 'time': 10200, 'answerNum': 4, 'questionLink': 'https://www.quora.com/Is-Rutgers-well-known-in-the-CS-academia', 'followerNum': 8, 'viewNum': 3185, 'hotness': 9.514940850048575e-05, 'ID': 'af7fd98b18d1855c9ace8f827c59bd9796c961df', 'Index': 341}, {'questionName': 'What are the Rutgers Recreation locations in Livingston NJ', 'time': 21528, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/What-are-the-Rutgers-Recreation-locations-in-Livingston-NJ', 'followerNum': 0, 'viewNum': 300, 'hotness': 2.0426873271757753e-05, 'ID': 'e06be856a88a74db3ab9728a05a25cc32bec4c55', 'Index': 342}, {'questionName': 'Is Rutgers%E2%80%93New Brunswick a bad school for a masters in computer science in general', 'time': 4992, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/Is-Rutgers%E2%80%93New-Brunswick-a-bad-school-for-a-masters-in-computer-science-in-general', 'followerNum': 8, 'viewNum': 1370, 'hotness': 0.00024436183191796964, 'ID': '44759b70f1a42ad35ebbde34b9f62a7341f2b042', 'Index': 343}, {'questionName': 'Which one should I choose NYU Polytechnic Rutgers or the UC Santa Cruz for an MS in computer engineering', 'time': 8832, 'answerNum': 3, 'questionLink': 'https://www.quora.com/Which-one-should-I-choose-NYU-Polytechnic-Rutgers-or-the-UC-Santa-Cruz-for-an-MS-in-computer-engineering', 'followerNum': 7, 'viewNum': 4564, 'hotness': 0.0001216252011127142, 'ID': '59ba4f03484a9dc5032b90d4c542caae7fd2eae1', 'Index': 344}, {'questionName': 'What are the SAT scores for Rutgers', 'time': 21576, 'answerNum': 2, 'questionLink': 'https://www.quora.com/What-are-the-SAT-scores-for-Rutgers', 'followerNum': 1, 'viewNum': 1028, 'hotness': 2.5290112611801452e-05, 'ID': '4d89405f11510521e81373c321f90c65a5d7d4aa', 'Index': 345}, {'questionName': 'Will contributing to the Linux Kernel project help me get an internship', 'time': 21624, 'answerNum': 3, 'questionLink': 'https://www.quora.com/Will-contributing-to-the-Linux-Kernel-project-help-me-get-an-internship', 'followerNum': 3, 'viewNum': 1128, 'hotness': 2.6069823160325195e-05, 'ID': '665f339ef98d4cf57012ba629537d42ac48786d6', 'Index': 346}, {'questionName': 'What does Prof Ben Y Zhao think about Rutgers New Brunswick computer science Did he work with any Rutgers masters students', 'time': 21672, 'answerNum': 1, 'questionLink': 'https://www.quora.com/What-does-Prof-Ben-Y-Zhao-think-about-Rutgers-New-Brunswick-computer-science-Did-he-work-with-any-Rutgers-masters-students', 'followerNum': 2, 'viewNum': 1938, 'hotness': 2.7370365079731444e-05, 'ID': 'd108675002486367c401308cacc23c7e6b9147b1', 'Index': 347}, {'questionName': 'How beneficial is a masters in business analytics course from Rutgers University What are the job and career prospects', 'time': 18576, 'answerNum': 1, 'questionLink': 'https://www.quora.com/How-beneficial-is-a-masters-in-business-analytics-course-from-Rutgers-University-What-are-the-job-and-career-prospects', 'followerNum': 5, 'viewNum': 3162, 'hotness': 3.734726428717081e-05, 'ID': '796f32bb4a172e7044122e29ff769be9dcd75ea1', 'Index': 348}, {'questionName': 'How is the Financial Statistics and Risk Management Program FSRM at Rutgers University What other programs and in which colleges can I opt for a masters in financial statistics', 'time': 8568, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/How-is-the-Financial-Statistics-and-Risk-Management-Program-FSRM-at-Rutgers-University-What-other-programs-and-in-which-colleges-can-I-opt-for-a-masters-in-financial-statistics', 'followerNum': 10, 'viewNum': 758, 'hotness': 0.00010168687603764884, 'ID': '47ced968c664d9aceb88d41593a1008172d0dc86', 'Index': 349}, {'questionName': 'What courses can a MS CS student studying in Rutgers can take in Princeton as a part of the two colleges deal', 'time': 15624, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/What-courses-can-a-MS-CS-student-studying-in-Rutgers-can-take-in-Princeton-as-a-part-of-the-two-colleges-deal', 'followerNum': 4, 'viewNum': 1420, 'hotness': 4.3199590852730394e-05, 'ID': '474502f1d48edc90cd5897cded8ecb296a64b4f8', 'Index': 350}, {'questionName': 'When will the Rutgers School of Law Camden and Newark merge be completed', 'time': 22008, 'answerNum': 1, 'questionLink': 'https://www.quora.com/When-will-the-Rutgers-School-of-Law-Camden-and-Newark-merge-be-completed', 'followerNum': 1, 'viewNum': 934, 'hotness': 2.4043718048770847e-05, 'ID': '6eeb1819478a78fba75dce415513654bc5da0012', 'Index': 351}, {'questionName': 'I have been accepted to both Rutgers University and the University of Texas Dallas to pursue an MS in VLSI computer engineering It almost seems like a tie between them Even after speaking to a lot of people I am still having trouble deciding What metrics should I use to decide between the two', 'time': 3720, 'answerNum': 4, 'questionLink': 'https://www.quora.com/I-have-been-accepted-to-both-Rutgers-University-and-the-University-of-Texas-Dallas-to-pursue-an-MS-in-VLSI-computer-engineering-It-almost-seems-like-a-tie-between-them-Even-after-speaking-to-a-lot-of-people-I-am-still-having-trouble-deciding-What-metrics-should-I-use-to-decide-between-the-two', 'followerNum': 3, 'viewNum': 1762, 'hotness': 0.0003898348325782926, 'ID': '3b47a1793f716089f3772243fdb80529fb4d003f', 'Index': 352}, {'questionName': 'Is Purdue or Rutgers New Brunswick better for an undergraduate CS', 'time': 22224, 'answerNum': 1, 'questionLink': 'https://www.quora.com/Is-Purdue-or-Rutgers-New-Brunswick-better-for-an-undergraduate-CS', 'followerNum': 1, 'viewNum': 1231, 'hotness': 2.4636805443380943e-05, 'ID': '162ace73b34ac63fc0f89ea8f124bd65bc6e7b40', 'Index': 353}, {'questionName': 'How is the mathematical finance program at Rutgers', 'time': 8760, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/How-is-the-mathematical-finance-program-at-Rutgers', 'followerNum': 4, 'viewNum': 1198, 'hotness': 0.00010053860016759548, 'ID': 'b68f19dd9f52ebcd75916e68cf8a31312c329f3c', 'Index': 354}, {'questionName': 'Should I choose Rutgers over Purdue for its location', 'time': 22752, 'answerNum': 5, 'questionLink': 'https://www.quora.com/Should-I-choose-Rutgers-over-Purdue-for-its-location', 'followerNum': 1, 'viewNum': 1410, 'hotness': 2.489101838979137e-05, 'ID': '18a1277e860ff9a68d46216a0a9e9ec293023afb', 'Index': 355}, {'questionName': 'How do I prepare for housing internship and other funding and jobs while doing an MS in the US Rutgers', 'time': 22800, 'answerNum': 3, 'questionLink': 'https://www.quora.com/How-do-I-prepare-for-housing-internship-and-other-funding-and-jobs-while-doing-an-MS-in-the-US-Rutgers', 'followerNum': 2, 'viewNum': 863, 'hotness': 2.303505648916222e-05, 'ID': 'e6e73f87710e84fc23bcbced415453c21cad3f51', 'Index': 356}, {'questionName': 'Which university among the following is the best for an M S in computer science general and why the University of Pennsylvania North Carolina State University and Rutgers The State University of New Jersey', 'time': 22800, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/Which-university-among-the-following-is-the-best-for-an-M-S-in-computer-science-general-and-why-the-University-of-Pennsylvania-North-Carolina-State-University-and-Rutgers-The-State-University-of-New-Jersey', 'followerNum': 3, 'viewNum': 740, 'hotness': 2.220122853995259e-05, 'ID': '27ae8fefdf47ac0fddd12976eb7b60e2d2580f9b', 'Index': 357}, {'questionName': 'Ive been accepted to both Purdue and Rutgers University NB Where should I go', 'time': 22872, 'answerNum': 10, 'questionLink': 'https://www.quora.com/Ive-been-accepted-to-both-Purdue-and-Rutgers-University-NB-Where-should-I-go', 'followerNum': 7, 'viewNum': 3914, 'hotness': 2.9832996788768403e-05, 'ID': '24b1045ac955c3c41c5382e2443b2177404a9987', 'Index': 358}, {'questionName': 'What is it like to study philosophy at Rutgers as an undergraduate', 'time': 22968, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/What-is-it-like-to-study-philosophy-at-Rutgers-as-an-undergraduate', 'followerNum': 0, 'viewNum': 665, 'hotness': 2.1123341468372083e-05, 'ID': 'e3b7e27a21577bd720b4e1197182edb9815d493f', 'Index': 359}, {'questionName': 'Which school should I go to Rutgers University or Bard College', 'time': 22992, 'answerNum': 4, 'questionLink': 'https://www.quora.com/Which-school-should-I-go-to-Rutgers-University-or-Bard-College', 'followerNum': 2, 'viewNum': 1156, 'hotness': 2.385784892177737e-05, 'ID': '75b9095ef174e73ec9c9d34750fffe1d5a317026', 'Index': 360}, {'questionName': 'Where should I go to college Johns Hopkins or Rutgers', 'time': 23040, 'answerNum': 10, 'questionLink': 'https://www.quora.com/Where-should-I-go-to-college-Johns-Hopkins-or-Rutgers', 'followerNum': 4, 'viewNum': 4969, 'hotness': 2.9794100453366613e-05, 'ID': 'fa51f1414969da0cad32abbfce790b17daa149d3', 'Index': 361}, {'questionName': 'How is the masters in the computer engineering course at Rutgers University New Jersey How are the opportunities to get into the core field of embedded systems at Rutgers How is the way of life in the university', 'time': 10320, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/How-is-the-masters-in-the-computer-engineering-course-at-Rutgers-University-New-Jersey-How-are-the-opportunities-to-get-into-the-core-field-of-embedded-systems-at-Rutgers-How-is-the-way-of-life-in-the-university', 'followerNum': 8, 'viewNum': 3200, 'hotness': 9.138797827116993e-05, 'ID': '518f8b899b37da7cf246a3e813af86aab16b0a9f', 'Index': 362}, {'questionName': 'How is an MS in industrial engineering at Rutgers University in New Jersey', 'time': 8832, 'answerNum': 1, 'questionLink': 'https://www.quora.com/How-is-an-MS-in-industrial-engineering-at-Rutgers-University-in-New-Jersey', 'followerNum': 10, 'viewNum': 1904, 'hotness': 0.00011039405973425931, 'ID': '5a2ae9dde0fd76bd45f33260dd6993740ebb2098', 'Index': 363}, {'questionName': 'How many students have died in the 2014 2015 academic year at Rutgers University', 'time': 23400, 'answerNum': 1, 'questionLink': 'https://www.quora.com/How-many-students-have-died-in-the-2014-2015-academic-year-at-Rutgers-University', 'followerNum': 3, 'viewNum': 1279, 'hotness': 2.324017172482449e-05, 'ID': '0931e9238fe448f6c8956d1349772aa713c24bdd', 'Index': 364}, {'questionName': 'Which university is better for a masters in computer science Virginia Tech Stony Brook or Rutgers', 'time': 288, 'answerNum': 3, 'questionLink': 'https://www.quora.com/Which-university-is-better-for-a-masters-in-computer-science-Virginia-Tech-Stony-Brook-or-Rutgers', 'followerNum': 16, 'viewNum': 5959, 'hotness': 0.022090459514916373, 'ID': 'ef0aa84f6b20985372b88ca75445a9a94929a3a3', 'Index': 365}, {'questionName': 'How do I choose between Rutgers University in MS IT and the University of Texas at Dallas in MS ITM', 'time': 14040, 'answerNum': 2, 'questionLink': 'https://www.quora.com/How-do-I-choose-between-Rutgers-University-in-MS-IT-and-the-University-of-Texas-at-Dallas-in-MS-ITM', 'followerNum': 6, 'viewNum': 3088, 'hotness': 5.735363905135652e-05, 'ID': '78d39bba4f5f216b54f8b18a94d3736f5ee5d7ec', 'Index': 366}, {'questionName': 'Which college is better for undergraduate computer science UMass Amherst or Rutgers New Brunswick', 'time': 23544, 'answerNum': 1, 'questionLink': 'https://www.quora.com/Which-college-is-better-for-undergraduate-computer-science-UMass-Amherst-or-Rutgers-New-Brunswick', 'followerNum': 6, 'viewNum': 3853, 'hotness': 2.6950154862418358e-05, 'ID': '619c02f9c6afd0b823c64f69c321dda863341f05', 'Index': 367}, {'questionName': 'Which university should I attend between Rutgers and UC Irvine', 'time': 23736, 'answerNum': 3, 'questionLink': 'https://www.quora.com/Which-university-should-I-attend-between-Rutgers-and-UC-Irvine', 'followerNum': 5, 'viewNum': 1638, 'hotness': 2.4132479678236597e-05, 'ID': 'c6976bef27334986b16d44aaf739b1ce87845740', 'Index': 368}, {'questionName': 'What is the reputation of a Rutgers University Camden MBA', 'time': 23280, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/What-is-the-reputation-of-a-Rutgers-University-Camden-MBA', 'followerNum': 2, 'viewNum': 597, 'hotness': 2.067509547475069e-05, 'ID': '1c570f8b29a84acb6111bb14c1e94fe285e4f1a5', 'Index': 369}, {'questionName': 'What is the admission interview of Rutgers University like', 'time': 23856, 'answerNum': 2, 'questionLink': 'https://www.quora.com/What-is-the-admission-interview-of-Rutgers-University-like', 'followerNum': 1, 'viewNum': 1079, 'hotness': 2.1901519769743666e-05, 'ID': '1137ee0e88a8858bed5cbc93a1d2abc8534f4c2e', 'Index': 370}, {'questionName': 'I have received an admit from Rutgers University New Brunswick for an MS in VLSI without funding Which are the other sources from which I could look for financial support', 'time': 23856, 'answerNum': 1, 'questionLink': 'https://www.quora.com/I-have-received-an-admit-from-Rutgers-University-New-Brunswick-for-an-MS-in-VLSI-without-funding-Which-are-the-other-sources-from-which-I-could-look-for-financial-support', 'followerNum': 2, 'viewNum': 1219, 'hotness': 2.2276061411084132e-05, 'ID': '89a9d4dafaed5132d622ae3dd8558dd8573cfa12', 'Index': 371}, {'questionName': 'Which university is better for a masters in computer engineering ASU or Rutgers', 'time': 14760, 'answerNum': 2, 'questionLink': 'https://www.quora.com/Which-university-is-better-for-a-masters-in-computer-engineering-ASU-or-Rutgers', 'followerNum': 6, 'viewNum': 2993, 'hotness': 5.30120812958683e-05, 'ID': 'e10e78d13c845421018dad0dbe166674ab5eaf19', 'Index': 372}, {'questionName': 'How many computer science undergrads are there currently in Rutgers', 'time': 23880, 'answerNum': 1, 'questionLink': 'https://www.quora.com/How-many-computer-science-undergrads-are-there-currently-in-Rutgers', 'followerNum': 3, 'viewNum': 1914, 'hotness': 2.3778801850165888e-05, 'ID': 'efb01a0459eb658de86b799dee4796eae01f9dc1', 'Index': 373}, {'questionName': 'Why is a masters in information management at Rutgers Business School not so famous Why is their intake so low for the program', 'time': 6960, 'answerNum': 1, 'questionLink': 'https://www.quora.com/Why-is-a-masters-in-information-management-at-Rutgers-Business-School-not-so-famous-Why-is-their-intake-so-low-for-the-program', 'followerNum': 5, 'viewNum': 1598, 'hotness': 0.00014950911488177896, 'ID': 'b88a18df11ffd67b2dc2db35bfa783075b6b5026', 'Index': 374}, {'questionName': 'How good is Rutgers University New Brunswick for an MS in VLSI', 'time': 24192, 'answerNum': 2, 'questionLink': 'https://www.quora.com/How-good-is-Rutgers-University-New-Brunswick-for-an-MS-in-VLSI', 'followerNum': 0, 'viewNum': 1329, 'hotness': 2.1923049941327654e-05, 'ID': '1e15227e9f37ce1186c29378c95df42222248ef3', 'Index': 375}, {'questionName': 'What are my chances of getting a masters in computer science at Rutgers the state university of New Jersey%E2%80%94%E2%80%8BNew Brunswick', 'time': 24360, 'answerNum': 1, 'questionLink': 'https://www.quora.com/What-are-my-chances-of-getting-a-masters-in-computer-science-at-Rutgers-the-state-university-of-New-Jersey%E2%80%94%E2%80%8BNew-Brunswick', 'followerNum': 1, 'viewNum': 2160, 'hotness': 2.3141733804850076e-05, 'ID': '2513f1de213d753a918ae9857414e76734c053ca', 'Index': 376}, {'questionName': 'I am considering using NJ STARS to go to Bergen Community College for computer science and then transferring to Rutgers New Brunswick after two years Would this be considered a good plan for college', 'time': 24456, 'answerNum': 3, 'questionLink': 'https://www.quora.com/I-am-considering-using-NJ-STARS-to-go-to-Bergen-Community-College-for-computer-science-and-then-transferring-to-Rutgers-New-Brunswick-after-two-years-Would-this-be-considered-a-good-plan-for-college', 'followerNum': 3, 'viewNum': 1561, 'hotness': 2.2636534287359186e-05, 'ID': 'a4a1e7dfbbd7f7856c6eaa127ebdf2e20add06ef', 'Index': 377}, {'questionName': 'How did Rutgers University become less prestigious than it used to be when it was considered as prestigious as Yale and Princeton back in the 1920s', 'time': 24480, 'answerNum': 2, 'questionLink': 'https://www.quora.com/How-did-Rutgers-University-become-less-prestigious-than-it-used-to-be-when-it-was-considered-as-prestigious-as-Yale-and-Princeton-back-in-the-1920s', 'followerNum': 7, 'viewNum': 3131, 'hotness': 2.5101979937414274e-05, 'ID': '0ff0af0b9aca6eeea574cad5b94ba4af399c7abd', 'Index': 378}, {'questionName': 'Which is the better school Canadas Queens University or Rutgers University New Brunswick', 'time': 24624, 'answerNum': 3, 'questionLink': 'https://www.quora.com/Which-is-the-better-school-Canadas-Queens-University-or-Rutgers-University-New-Brunswick', 'followerNum': 11, 'viewNum': 2554, 'hotness': 2.501770017876904e-05, 'ID': 'f2c236ae71ac87819a86c40912479b1141f597d4', 'Index': 379}, {'questionName': 'How is ASU for computer science undergraduate', 'time': 18624, 'answerNum': 3, 'questionLink': 'https://www.quora.com/How-is-ASU-for-computer-science-undergraduate', 'followerNum': 11, 'viewNum': 4563, 'hotness': 4.0615655597466e-05, 'ID': 'a0610b38b1e082b458aa1500dcf2e7b6c0ac98fa', 'Index': 380}, {'questionName': 'Will I be able to make a comfortable living after graduating from Rutgers Business School', 'time': 25032, 'answerNum': 1, 'questionLink': 'https://www.quora.com/Will-I-be-able-to-make-a-comfortable-living-after-graduating-from-Rutgers-Business-School', 'followerNum': 0, 'viewNum': 476, 'hotness': 1.775333482922801e-05, 'ID': 'f70cec43043735b3b11c6b67e62bba7cc9d2c76c', 'Index': 381}, {'questionName': 'Will an international student be able to get a job in the states after graduating from Rutgers Business School', 'time': 25224, 'answerNum': 2, 'questionLink': 'https://www.quora.com/Will-an-international-student-be-able-to-get-a-job-in-the-states-after-graduating-from-Rutgers-Business-School', 'followerNum': 1, 'viewNum': 883, 'hotness': 1.957825445031775e-05, 'ID': 'f537ea0da5edda656c3467f5f6d72fb7fef477be', 'Index': 382}, {'questionName': 'I have a GRE score of 304 Verbal 149 Quantitative 155 TOEFL 108 do I have any chance of getting in Rutgers for MS in CS I have a Bachelors degree in CS and 2 years of job experience in IT industry', 'time': 30456, 'answerNum': 2, 'questionLink': 'https://www.quora.com/I-have-a-GRE-score-of-304-Verbal-149-Quantitative-155-TOEFL-108-do-I-have-any-chance-of-getting-in-Rutgers-for-MS-in-CS-I-have-a-Bachelors-degree-in-CS-and-2-years-of-job-experience-in-IT-industry', 'followerNum': 10, 'viewNum': 5927, 'hotness': 1.9767017409221643e-05, 'ID': '2bce9f1596614085f9c11a72f6c20418cfc3d472', 'Index': 383}, {'questionName': 'You guys would consider me to be a loser if I go to Rutgers New Brunswick school of engineering right', 'time': 25512, 'answerNum': 2, 'questionLink': 'https://www.quora.com/You-guys-would-consider-me-to-be-a-loser-if-I-go-to-Rutgers-New-Brunswick-school-of-engineering-right', 'followerNum': 0, 'viewNum': 330, 'hotness': 1.6376548492573318e-05, 'ID': '9b1a348508108b378522543fde80045ec8c8e7de', 'Index': 384}, {'questionName': 'Which is better Rutgers undergrad engineering vs business', 'time': 25512, 'answerNum': 2, 'questionLink': 'https://www.quora.com/Which-is-better-Rutgers-undergrad-engineering-vs-business', 'followerNum': 0, 'viewNum': 1258, 'hotness': 2.009150359630837e-05, 'ID': '6a30cec53ec898cfb172f876dedb61bfb92738a0', 'Index': 385}, {'questionName': 'I will be joining the Rutgers New Brunswick campus this spring for a masters in computer science Where can I find accommodation roommates', 'time': 25512, 'answerNum': 3, 'questionLink': 'https://www.quora.com/I-will-be-joining-the-Rutgers-New-Brunswick-campus-this-spring-for-a-masters-in-computer-science-Where-can-I-find-accommodation-roommates', 'followerNum': 1, 'viewNum': 1305, 'hotness': 2.0470942410846937e-05, 'ID': 'e25b92497bbc25bf67ebfba1e7f0fd5a09b9c6f9', 'Index': 386}, {'questionName': 'I am interested in pursuing a PhD in mechanical engineering either from Rutgers or NYU Poly For academic jobs I hear that the university you get your PhD from matters My company is sponsoring me Which university is a better option if I get to choose my research topic', 'time': 25560, 'answerNum': 1, 'questionLink': 'https://www.quora.com/I-am-interested-in-pursuing-a-PhD-in-mechanical-engineering-either-from-Rutgers-or-NYU-Poly-For-academic-jobs-I-hear-that-the-university-you-get-your-PhD-from-matters-My-company-is-sponsoring-me-Which-university-is-a-better-option-if-I-get-to-choose-my-research-topic', 'followerNum': 2, 'viewNum': 1307, 'hotness': 2.0279133858364663e-05, 'ID': 'f42b51b0bcbc411fbb140564b29b3b15a88701ff', 'Index': 387}, {'questionName': 'How is the undergraduate computer science program at Rutgers University New Brunswick regarded among tech recruiters Would top tech companies such as Yahoo Amazon Facebook Oracle Uber etc automatically give my resume significantly less weight', 'time': 13800, 'answerNum': 3, 'questionLink': 'https://www.quora.com/How-is-the-undergraduate-computer-science-program-at-Rutgers-University-New-Brunswick-regarded-among-tech-recruiters-Would-top-tech-companies-such-as-Yahoo-Amazon-Facebook-Oracle-Uber-etc-automatically-give-my-resume-significantly-less-weight', 'followerNum': 3, 'viewNum': 6009, 'hotness': 6.280343086396885e-05, 'ID': '025373d7f22e1eb1f6866448d414608f267de7e5', 'Index': 388}, {'questionName': 'What are the university provided benefits that a undergraduate graduate Rutgers student should be aware of', 'time': 25800, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/What-are-the-university-provided-benefits-that-a-undergraduate-graduate-Rutgers-student-should-be-aware-of', 'followerNum': 0, 'viewNum': 129, 'hotness': 1.326613564733335e-05, 'ID': '2f1663cfcc78a9ebba0904e054646f4e78b158e4', 'Index': 389}, {'questionName': 'How much time does Rutgers University take to provide me with my UID after I have submitted and paid my application', 'time': 25800, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/How-much-time-does-Rutgers-University-take-to-provide-me-with-my-UID-after-I-have-submitted-and-paid-my-application', 'followerNum': 1, 'viewNum': 454, 'hotness': 1.6837442951854248e-05, 'ID': 'eb1b5c4c93d391c6ca61295f2a2540d9d2fd16d8', 'Index': 390}, {'questionName': 'When will Rutgers Mason Gross grades for the Fall 2014 semester be available for viewing', 'time': 26040, 'answerNum': 1, 'questionLink': 'https://www.quora.com/When-will-Rutgers-Mason-Gross-grades-for-the-Fall-2014-semester-be-available-for-viewing', 'followerNum': 1, 'viewNum': 468, 'hotness': 1.6821590389467868e-05, 'ID': '9811a8c35a2af928001c01faec12c717db611bad', 'Index': 391}, {'questionName': 'Which university is better for masters in computer science Rutgers or Syracuse And why', 'time': 7008, 'answerNum': 1, 'questionLink': 'https://www.quora.com/Which-university-is-better-for-masters-in-computer-science-Rutgers-or-Syracuse-And-why', 'followerNum': 14, 'viewNum': 3375, 'hotness': 0.00017106247557088425, 'ID': '1139f11f6cde2fbc53d92dae53310f2bf48dee18', 'Index': 392}, {'questionName': 'Are there any universities in the Central Jersey Philadelphia area that allow part time PhDs in computer science with a focus on NLP ML', 'time': 26472, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/Are-there-any-universities-in-the-Central-Jersey-Philadelphia-area-that-allow-part-time-PhDs-in-computer-science-with-a-focus-on-NLP-ML', 'followerNum': 3, 'viewNum': 1988, 'hotness': 2.0341856073910766e-05, 'ID': '51ab4de6e8523b45f7ae3e08cbdc0cf860acd77c', 'Index': 393}, {'questionName': 'What are the requirements to get into a masters in computer science at Rutgers', 'time': 7776, 'answerNum': 1, 'questionLink': 'https://www.quora.com/What-are-the-requirements-to-get-into-a-masters-in-computer-science-at-Rutgers', 'followerNum': 12, 'viewNum': 1300, 'hotness': 0.00012897824660553945, 'ID': 'bf95b1f9f7669840572fa2ebec08c6a7167b1050', 'Index': 394}, {'questionName': 'Which bowl game will Rutgers play in after that big win last night', 'time': 26808, 'answerNum': 1, 'questionLink': 'https://www.quora.com/Which-bowl-game-will-Rutgers-play-in-after-that-big-win-last-night', 'followerNum': 2, 'viewNum': 605, 'hotness': 1.689458763195501e-05, 'ID': '04e0cbbcd9d1b1a31c94886546367d76a6a602c3', 'Index': 395}, {'questionName': 'Will Rutgers improve their football team in the next years after their Big Ten debut season', 'time': 26856, 'answerNum': 2, 'questionLink': 'https://www.quora.com/Will-Rutgers-improve-their-football-team-in-the-next-years-after-their-Big-Ten-debut-season', 'followerNum': 3, 'viewNum': 720, 'hotness': 1.755365542548481e-05, 'ID': 'f857efab182e2ccd027975c11af1b6158bbccfe9', 'Index': 396}, {'questionName': 'How much would it cost to do a 2 year MS in CS or EC at Rutgers', 'time': 5856, 'answerNum': 1, 'questionLink': 'https://www.quora.com/How-much-would-it-cost-to-do-a-2-year-MS-in-CS-or-EC-at-Rutgers', 'followerNum': 1, 'viewNum': 1062, 'hotness': 0.00017834949973516233, 'ID': '95229cee51a9cddd1ce62f049be33be6cb8cf207', 'Index': 397}, {'questionName': 'How much is the I 20 amount for Rutgers University in New Brunswick for a computer science graduate who is also an international student', 'time': 26880, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/How-much-is-the-I-20-amount-for-Rutgers-University-in-New-Brunswick-for-a-computer-science-graduate-who-is-also-an-international-student', 'followerNum': 2, 'viewNum': 2112, 'hotness': 1.990748046025917e-05, 'ID': '0a02faadb1af156440554cceada3c842c5ebb7a8', 'Index': 398}, {'questionName': 'When will Rutgers play Indiana on the 15th of November 2014', 'time': 27264, 'answerNum': 1, 'questionLink': 'https://www.quora.com/When-will-Rutgers-play-Indiana-on-the-15th-of-November-2014', 'followerNum': 2, 'viewNum': 544, 'hotness': 1.62054762360388e-05, 'ID': '5958a31721156f55b7469c4c76b65c39634e6fad', 'Index': 399}, {'questionName': 'Which university is better for pursuing a masters in electronics and computer engineering Arizona State University or TAMU CS or Rutgers University And what are the internship and job opportunities in these colleges', 'time': 16008, 'answerNum': 1, 'questionLink': 'https://www.quora.com/Which-university-is-better-for-pursuing-a-masters-in-electronics-and-computer-engineering-Arizona-State-University-or-TAMU-CS-or-Rutgers-University-And-what-are-the-internship-and-job-opportunities-in-these-colleges', 'followerNum': 21, 'viewNum': 3727, 'hotness': 5.20703371269052e-05, 'ID': '2c8a0767956381c0bbf3807d668dedcd77176f5d', 'Index': 400}, {'questionName': 'What channel will the Rutgers game be on next Saturday Oct 18', 'time': 27648, 'answerNum': 1, 'questionLink': 'https://www.quora.com/What-channel-will-the-Rutgers-game-be-on-next-Saturday-Oct-18', 'followerNum': 1, 'viewNum': 734, 'hotness': 1.648315825963546e-05, 'ID': 'a2102c35afe80dc18b7fbd31779908d2cd5bae11', 'Index': 401}, {'questionName': 'How good is Rutgers State University at New Brunswick in the field of machine learning and data mining for pursuing a masters Hows the job scene in that university', 'time': 528, 'answerNum': 2, 'questionLink': 'https://www.quora.com/How-good-is-Rutgers-State-University-at-New-Brunswick-in-the-field-of-machine-learning-and-data-mining-for-pursuing-a-masters-Hows-the-job-scene-in-that-university', 'followerNum': 62, 'viewNum': 15258, 'hotness': 0.011899113604321629, 'ID': '2c3b71d49585b9161165d6186e45b95996ced72b', 'Index': 402}, {'questionName': 'With Rutgers win over Michigan tonight will it affect the AP Top 25 rankings', 'time': 27840, 'answerNum': 2, 'questionLink': 'https://www.quora.com/With-Rutgers-win-over-Michigan-tonight-will-it-affect-the-AP-Top-25-rankings', 'followerNum': 5, 'viewNum': 1216, 'hotness': 1.8151153473228967e-05, 'ID': '704370971fe45eaf42e77dfdd26a781a9d418183', 'Index': 403}, {'questionName': 'Who will rutgers play next', 'time': 28008, 'answerNum': 2, 'questionLink': 'https://www.quora.com/Who-will-rutgers-play-next', 'followerNum': 3, 'viewNum': 653, 'hotness': 1.6246213185445856e-05, 'ID': 'bf932f52c03f9724515e1bfd9d4cf539551c0c03', 'Index': 404}, {'questionName': 'What are the top 20 graduate schools to specialize in VLSI in the US', 'time': 28008, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/What-are-the-top-20-graduate-schools-to-specialize-in-VLSI-in-the-US', 'followerNum': 30, 'viewNum': 3405, 'hotness': 2.3248604622818587e-05, 'ID': 'd9cdeb5a7fbf8ea6ee39b98d561962992d202036', 'Index': 405}, {'questionName': 'How difficult is it to get admission in MS in computer science in Rutgers University', 'time': 552, 'answerNum': 5, 'questionLink': 'https://www.quora.com/How-difficult-is-it-to-get-admission-in-MS-in-computer-science-in-Rutgers-University', 'followerNum': 26, 'viewNum': 10291, 'hotness': 0.009361006297275622, 'ID': 'd5780f73ea17540c5091e7507fdb619817f65d00', 'Index': 406}, {'questionName': 'Will Rutgers make the top list in polls for college football', 'time': 28512, 'answerNum': 3, 'questionLink': 'https://www.quora.com/Will-Rutgers-make-the-top-list-in-polls-for-college-football', 'followerNum': 4, 'viewNum': 1291, 'hotness': 1.76539186426584e-05, 'ID': '48e417d69899bf16faaa8a198b63530d9073cb83', 'Index': 407}, {'questionName': 'Will Rutgers win the Big 10 football championship game before winning the national title', 'time': 28512, 'answerNum': 2, 'questionLink': 'https://www.quora.com/Will-Rutgers-win-the-Big-10-football-championship-game-before-winning-the-national-title', 'followerNum': 2, 'viewNum': 489, 'hotness': 1.5020319174501716e-05, 'ID': '3b5e1eec19da2e735441b58b23036903dc4616a0', 'Index': 408}, {'questionName': 'How is Rutgers University N J for undergraduate CSE engineering', 'time': 28584, 'answerNum': 1, 'questionLink': 'https://www.quora.com/How-is-Rutgers-University-N-J-for-undergraduate-CSE-engineering', 'followerNum': 5, 'viewNum': 900, 'hotness': 1.6625691139974893e-05, 'ID': 'e1f97cf43eb788294c4febcd5b9fdd778d181af0', 'Index': 409}, {'questionName': 'How is the online general physics 203 course at Rutgers', 'time': 11808, 'answerNum': 1, 'questionLink': 'https://www.quora.com/How-is-the-online-general-physics-203-course-at-Rutgers', 'followerNum': 3, 'viewNum': 1461, 'hotness': 6.599800420188473e-05, 'ID': '76752212c5ae8758387bbb2b4e2bbaab8c46be9c', 'Index': 410}, {'questionName': 'Which planning schools does the Bloustein have a credit transfer policy with', 'time': 28728, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/Which-planning-schools-does-the-Bloustein-have-a-credit-transfer-policy-with', 'followerNum': 1, 'viewNum': 130, 'hotness': 1.1424809228373914e-05, 'ID': 'c089a40906e6a73827fddeb821aef6383da305f9', 'Index': 411}, {'questionName': 'How is the department of economics at Rutgers University New Brunswick', 'time': 3096, 'answerNum': 1, 'questionLink': 'https://www.quora.com/How-is-the-department-of-economics-at-Rutgers-University-New-Brunswick', 'followerNum': 5, 'viewNum': 1530, 'hotness': 0.0005008174314494212, 'ID': '9c8fe316487776511c1e7a5f49db6beebdaa23a9', 'Index': 412}, {'questionName': 'Will the Big Ten Network get increased ratings in the New York metro market due to Rutgers first season with the conference', 'time': 28944, 'answerNum': 2, 'questionLink': 'https://www.quora.com/Will-the-Big-Ten-Network-get-increased-ratings-in-the-New-York-metro-market-due-to-Rutgers-first-season-with-the-conference', 'followerNum': 3, 'viewNum': 576, 'hotness': 1.5176366129083943e-05, 'ID': '78510fff87b131258cb1c15834050be394e9fba8', 'Index': 413}, {'questionName': 'What can an international student hope to learn in policy and planning at Bloustein', 'time': 29064, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/What-can-an-international-student-hope-to-learn-in-policy-and-planning-at-Bloustein', 'followerNum': 1, 'viewNum': 240, 'hotness': 1.262706414814519e-05, 'ID': '0ede1d38d8e48973cc69c8a73b18cc5d35bace28', 'Index': 414}, {'questionName': 'Is the University of Melbourne good for a masters in computer science Can we compare this university with Ohio or Rutgers or USC', 'time': 5568, 'answerNum': 2, 'questionLink': 'https://www.quora.com/Is-the-University-of-Melbourne-good-for-a-masters-in-computer-science-Can-we-compare-this-university-with-Ohio-or-Rutgers-or-USC', 'followerNum': 11, 'viewNum': 3689, 'hotness': 0.0002412172520184979, 'ID': '615bdf70490db741742b3240414af2323c195858', 'Index': 415}, {'questionName': 'What is Rutgers University known for', 'time': 29856, 'answerNum': 5, 'questionLink': 'https://www.quora.com/What-is-Rutgers-University-known-for', 'followerNum': 7, 'viewNum': 7591, 'hotness': 2.0908447904693173e-05, 'ID': 'e5f29e6e0590b668eb787f335f96cc70de0b492e', 'Index': 416}, {'questionName': 'Is Rutgers University a nonprofit school Why', 'time': 29880, 'answerNum': 2, 'questionLink': 'https://www.quora.com/Is-Rutgers-University-a-nonprofit-school-Why', 'followerNum': 0, 'viewNum': 2418, 'hotness': 1.7282469787037893e-05, 'ID': 'df8a435dc3710a61635c4b7f80d6708aae46e52e', 'Index': 417}, {'questionName': 'Which is better for business TCNJ or Rutgers Why', 'time': 30216, 'answerNum': 2, 'questionLink': 'https://www.quora.com/Which-is-better-for-business-TCNJ-or-Rutgers-Why', 'followerNum': 4, 'viewNum': 3519, 'hotness': 1.8233968172036397e-05, 'ID': '05fa4875567296ea14dd71198f2adc419ad9371a', 'Index': 418}, {'questionName': 'What kinds of degrees and programs are offered at Rutgers University', 'time': 30240, 'answerNum': 2, 'questionLink': 'https://www.quora.com/What-kinds-of-degrees-and-programs-are-offered-at-Rutgers-University', 'followerNum': 2, 'viewNum': 1358, 'hotness': 1.5948808034586436e-05, 'ID': 'd6108cb9cd06fe2a8e98a7972ca8883c30bd4ede', 'Index': 419}, {'questionName': 'What are some interesting courses offered at Rutgers University', 'time': 30720, 'answerNum': 5, 'questionLink': 'https://www.quora.com/What-are-some-interesting-courses-offered-at-Rutgers-University', 'followerNum': 6, 'viewNum': 3272, 'hotness': 1.81594689623083e-05, 'ID': 'f0be7e0dcef909bbd90c6a2e1ef03610901884af', 'Index': 420}, {'questionName': 'How does Rutgers University compare with other universities and colleges in New Jersey', 'time': 30888, 'answerNum': 4, 'questionLink': 'https://www.quora.com/How-does-Rutgers-University-compare-with-other-universities-and-colleges-in-New-Jersey', 'followerNum': 5, 'viewNum': 2464, 'hotness': 1.7212107616074943e-05, 'ID': '6ad755ab9329323581637a4f1ab6a194b47b74d8', 'Index': 421}, {'questionName': 'Should Condoleezza Rice have cancelled her commencement speech at Rutgers because of student protests Why', 'time': 31320, 'answerNum': 18, 'questionLink': 'https://www.quora.com/Should-Condoleezza-Rice-have-cancelled-her-commencement-speech-at-Rutgers-because-of-student-protests-Why', 'followerNum': 39, 'viewNum': 121534, 'hotness': 2.9711936667562933e-05, 'ID': 'bce0d94ec8d50bedab35d8fc80f70840ee57e086', 'Index': 422}, {'questionName': 'Are there any well known people in technology from Rutgers University', 'time': 31656, 'answerNum': 3, 'questionLink': 'https://www.quora.com/Are-there-any-well-known-people-in-technology-from-Rutgers-University', 'followerNum': 9, 'viewNum': 5246, 'hotness': 1.8408683111510714e-05, 'ID': '4168eafc003be047e2078d3ad273708171ccf382', 'Index': 423}, {'questionName': 'I have got admits from University of Florida Rutgers and am expecting one from NYU Poly for this fall in MS in CS Which university should I prefer', 'time': 840, 'answerNum': 7, 'questionLink': 'https://www.quora.com/I-have-got-admits-from-University-of-Florida-Rutgers-and-am-expecting-one-from-NYU-Poly-for-this-fall-in-MS-in-CS-Which-university-should-I-prefer', 'followerNum': 27, 'viewNum': 67659, 'hotness': 0.005937458705736462, 'ID': 'c92c75a17bec65b870365b0f5093cc1693afeb48', 'Index': 424}, {'questionName': 'What would you describe as the best time you had at Rutgers University', 'time': 31968, 'answerNum': 0, 'questionLink': 'https://www.quora.com/unanswered/What-would-you-describe-as-the-best-time-you-had-at-Rutgers-University', 'followerNum': 3, 'viewNum': 404, 'hotness': 1.217491811962662e-05, 'ID': '965eea0cb0d827c16960c233dddcc3729ca164b0', 'Index': 425}, {'questionName': 'Which computer engineering program is better UC Irvine or Rutgers', 'time': 32424, 'answerNum': 2, 'questionLink': 'https://www.quora.com/Which-computer-engineering-program-is-better-UC-Irvine-or-Rutgers', 'followerNum': 7, 'viewNum': 3991, 'hotness': 1.6938136939492727e-05, 'ID': '5dd4937a4c31c5bd61c796799fd95dd8d90596ba', 'Index': 426}, {'questionName': 'What has been the impact of Charles Gallistels work in neuroscience cognitive science and psychology', 'time': 32640, 'answerNum': 1, 'questionLink': 'https://www.quora.com/What-has-been-the-impact-of-Charles-Gallistels-work-in-neuroscience-cognitive-science-and-psychology', 'followerNum': 7, 'viewNum': 1695, 'hotness': 1.503152777744752e-05, 'ID': 'f9c2c5be85c353741bf49826fed069ad50dff104', 'Index': 427}, {'questionName': 'Which college has a better business program University of Tampa or Rutgers University', 'time': 33048, 'answerNum': 2, 'questionLink': 'https://www.quora.com/Which-college-has-a-better-business-program-University-of-Tampa-or-Rutgers-University', 'followerNum': 6, 'viewNum': 1448, 'hotness': 1.4457474079213363e-05, 'ID': 'a9a70514ac0e91b81d62a6931e4f0bc8d26f3cab', 'Index': 428}, {'questionName': 'What startups have come out of Rutgers University', 'time': 33312, 'answerNum': 1, 'questionLink': 'https://www.quora.com/What-startups-have-come-out-of-Rutgers-University', 'followerNum': 14, 'viewNum': 3886, 'hotness': 1.6774016954607005e-05, 'ID': 'c9fd6373d6f0a4ddaf22846615d5f056f7621c8a', 'Index': 429}, {'questionName': 'How good is the Computer Science undergraduate program at Rutgers University New Brunswick', 'time': 33504, 'answerNum': 3, 'questionLink': 'https://www.quora.com/How-good-is-the-Computer-Science-undergraduate-program-at-Rutgers-University-New-Brunswick', 'followerNum': 6, 'viewNum': 4897, 'hotness': 1.6503207302097713e-05, 'ID': '6d27cdee380446e596de530b0a65ba4a5d595294', 'Index': 430}, {'questionName': 'What classes would a poli sci major have to take over if transferring from Rutgers to Penn State with 70 current credits', 'time': 33816, 'answerNum': 3, 'questionLink': 'https://www.quora.com/What-classes-would-a-poli-sci-major-have-to-take-over-if-transferring-from-Rutgers-to-Penn-State-with-70-current-credits', 'followerNum': 3, 'viewNum': 1208, 'hotness': 1.3456197880239344e-05, 'ID': '771c1ae4708fc280deb1535ce28db48138ea5cc1', 'Index': 431}, {'questionName': 'What are some resources for aspiring entrepreneurs at the Rutgers University New Brunswick campus', 'time': 33888, 'answerNum': 1, 'questionLink': 'https://www.quora.com/What-are-some-resources-for-aspiring-entrepreneurs-at-the-Rutgers-University-New-Brunswick-campus', 'followerNum': 10, 'viewNum': 1915, 'hotness': 1.4702227454628858e-05, 'ID': '3a9445f6bab835a1376bfc8c8e3ac9b458023e1c', 'Index': 432}, {'questionName': 'How are online courses structured at Rutgers University New Brunswick', 'time': 34056, 'answerNum': 1, 'questionLink': 'https://www.quora.com/How-are-online-courses-structured-at-Rutgers-University-New-Brunswick', 'followerNum': 3, 'viewNum': 1464, 'hotness': 1.3480186805647683e-05, 'ID': '9cf17181b0dec2a5ca387ff819f2f90603e2aac1', 'Index': 433}, {'questionName': 'How do the cognitive science programs at University of Minnesota Rutgers and University of Rochester compare', 'time': 35472, 'answerNum': 2, 'questionLink': 'https://www.quora.com/How-do-the-cognitive-science-programs-at-University-of-Minnesota-Rutgers-and-University-of-Rochester-compare', 'followerNum': 5, 'viewNum': 3922, 'hotness': 1.4603819892600527e-05, 'ID': 'f7eafad9fa4fd56447da50e762ba266e700915e5', 'Index': 434}, {'questionName': 'How do the hacker startup cultures at universities such as Stanford Cornell UPenn MIT Rutgers etc compare', 'time': 35736, 'answerNum': 1, 'questionLink': 'https://www.quora.com/How-do-the-hacker-startup-cultures-at-universities-such-as-Stanford-Cornell-UPenn-MIT-Rutgers-etc-compare', 'followerNum': 8, 'viewNum': 3059, 'hotness': 1.419359926096866e-05, 'ID': '836b31dced533f9c89fd54e43180b95b1e52a60f', 'Index': 435}, {'questionName': 'Is it posssible to get into rutgers qid 305 gre score', 'time': 36000, 'answerNum': 4, 'questionLink': 'https://www.quora.com/Is-it-posssible-to-get-into-rutgers-qid-305-gre-score', 'followerNum': 4, 'viewNum': 3263, 'hotness': 1.4061877561708017e-05, 'ID': 'a8cbf61a4b94f21e78e174f7d45b937ccbf20e85', 'Index': 436}, {'questionName': 'What is your review of Rutgers University', 'time': 38208, 'answerNum': 2, 'questionLink': 'https://www.quora.com/What-is-your-review-of-Rutgers-University', 'followerNum': 1, 'viewNum': 3364, 'hotness': 1.2528280380800748e-05, 'ID': 'fb2730aa33fdbf05c622fac1faadf3b8ca000f35', 'Index': 437}, {'questionName': 'What is it like to do Masters in Computer Engineering at Rutgers University', 'time': 19176, 'answerNum': 1, 'questionLink': 'https://www.quora.com/What-is-it-like-to-do-Masters-in-Computer-Engineering-at-Rutgers-University', 'followerNum': 17, 'viewNum': 3177, 'hotness': 3.81844878074352e-05, 'ID': '7609f207f8f2d43a644d3ae2e8bcac062e8e4393', 'Index': 438}, {'questionName': '2013 NCAA Basketball Tournament Mens What should Rutgers adminstration do now that Mike Rice has been fired', 'time': 41016, 'answerNum': 5, 'questionLink': 'https://www.quora.com/2013-NCAA-Basketball-Tournament-Mens-What-should-Rutgers-adminstration-do-now-that-Mike-Rice-has-been-fired', 'followerNum': 9, 'viewNum': 1508, 'hotness': 1.0920399822663174e-05, 'ID': '7f434f1ec6157a88dc050469fbd6d485f8e57482', 'Index': 439}, {'questionName': 'What does it feel like to study at the Camden NJ campus of Rutgers University given that Camden is the most dangerous city in the U S', 'time': 19608, 'answerNum': 3, 'questionLink': 'https://www.quora.com/What-does-it-feel-like-to-study-at-the-Camden-NJ-campus-of-Rutgers-University-given-that-Camden-is-the-most-dangerous-city-in-the-U-S', 'followerNum': 5, 'viewNum': 2083, 'hotness': 3.313058777565194e-05, 'ID': '303e35a5354c8d5321a771e91d1ea60b025f0030', 'Index': 440}, {'questionName': 'What is it like to study at Rutgers University', 'time': 8208, 'answerNum': 6, 'questionLink': 'https://www.quora.com/What-is-it-like-to-study-at-Rutgers-University', 'followerNum': 10, 'viewNum': 7071, 'hotness': 0.00014697255991219285, 'ID': '04c548389eff793fdeeb4ca8d7a1de6f35b5273c', 'Index': 441}, {'questionName': 'Which university is better for a Master%E2%80%99s in computer science Rutgers or Stony Brook', 'time': 16680, 'answerNum': 6, 'questionLink': 'https://www.quora.com/Which-university-is-better-for-a-Master%E2%80%99s-in-computer-science-Rutgers-or-Stony-Brook', 'followerNum': 35, 'viewNum': 19184, 'hotness': 6.25477029161066e-05, 'ID': 'caab55f5040cec529f7dca88c75e97b902dc211c', 'Index': 442}, {'questionName': 'How good is Rutgers computer science program', 'time': 1896, 'answerNum': 6, 'questionLink': 'https://www.quora.com/How-good-is-Rutgers-computer-science-program', 'followerNum': 19, 'viewNum': 17871, 'hotness': 0.001510659230730236, 'ID': '0946b7c26d4e422ef1e686e8eeb9f54e6e7d041b', 'Index': 443}, {'questionName': '2012 NFL Season Did the Tampa Bay Buccaneers make a mistake in hiring Greg Schiano', 'time': 51408, 'answerNum': 2, 'questionLink': 'https://www.quora.com/2012-NFL-Season-Did-the-Tampa-Bay-Buccaneers-make-a-mistake-in-hiring-Greg-Schiano', 'followerNum': 3, 'viewNum': 754, 'hotness': 6.673152760482509e-06, 'ID': 'cd325b496d6412344bd9fad19daec9d860398907', 'Index': 444}, {'questionName': 'Does Rutgers business school accept the LSAT as an entrance exam If so what are the median scores', 'time': 51816, 'answerNum': 2, 'questionLink': 'https://www.quora.com/Does-Rutgers-business-school-accept-the-LSAT-as-an-entrance-exam-If-so-what-are-the-median-scores', 'followerNum': 4, 'viewNum': 1500, 'hotness': 7.3021780251344965e-06, 'ID': '1f13f3d0a73be234fa3c444a447c5b24587fad7c', 'Index': 445}, {'questionName': 'Will a B A in Chemistry fare as good a chance of getting into a good PhD program as a B S will', 'time': 56520, 'answerNum': 1, 'questionLink': 'https://www.quora.com/Will-a-B-A-in-Chemistry-fare-as-good-a-chance-of-getting-into-a-good-PhD-program-as-a-B-S-will', 'followerNum': 3, 'viewNum': 1183, 'hotness': 6.1257601082565e-06, 'ID': '45455f95e76b26239dca62b4911e0fb2b88062ea', 'Index': 446}, {'questionName': 'Is it true that Rutgers turned down an invitation to be part of the Ivy League', 'time': 6840, 'answerNum': 5, 'questionLink': 'https://www.quora.com/Is-it-true-that-Rutgers-turned-down-an-invitation-to-be-part-of-the-Ivy-League', 'followerNum': 16, 'viewNum': 24501, 'hotness': 0.0002230268504153341, 'ID': 'f0b763db029138eaa7444b1c314b69f7c2afdbf3', 'Index': 447}, {'questionName': 'Does Rutgers Admissions Office distinguish between in state and out of state applicants', 'time': 59208, 'answerNum': 1, 'questionLink': 'https://www.quora.com/Does-Rutgers-Admissions-Office-distinguish-between-in-state-and-out-of-state-applicants', 'followerNum': 2, 'viewNum': 1236, 'hotness': 5.708539852453562e-06, 'ID': 'ac4d752b866c6800592e716c36d103a99d343a73', 'Index': 448}, {'questionName': 'What year was Rutgers University founded', 'time': 60648, 'answerNum': 2, 'questionLink': 'https://www.quora.com/What-year-was-Rutgers-University-founded', 'followerNum': 3, 'viewNum': 1720, 'hotness': 5.832489828127817e-06, 'ID': '37324a2de5e55549cc2a9a9bd84820d56830078c', 'Index': 449}];
 var nbAnswerItems = [{'ID': 'd8937b4ca9f3e4772ff5142e95b8c7cb1b394239', 'questionLink': 'https://www.quora.com/Is-IELTS-Academic-accepted-in-New-Brunswick', 'answerLinks': [{"ansID": "fa32edf91593b5fbbf9168ea2453747334a17437", "answerLink": "https://www.quora.com/Is-IELTS-Academic-accepted-in-New-Brunswick/answer/Gill-Bullen"}]}, {'ID': '36bb6300d3ca19f2ee1ba35f4b9f5968d630c646', 'questionLink': 'https://www.quora.com/unanswered/How-is-life-in-New-Brunswick-for-an-immigrant', 'answerLinks': [{"ansID": "88dbf3965ec9da36c307d43e90e06c7f58eaef98", "answerLink": "https://www.quora.com/Which-is-the-better-school-Canadas-Queens-University-or-Rutgers-University-New-Brunswick/answer/Eric-Hedvat"}, {"ansID": "146714aeec5b7706d64ec15747492a6e6dd1cc68", "answerLink": "https://www.quora.com/Which-is-the-better-school-Canadas-Queens-University-or-Rutgers-University-New-Brunswick/answer/Carolyn-Russ"}, {"ansID": "465fedc9581ab94b41e3c3efd593da9096c6d290", "answerLink": "https://www.quora.com/Which-is-the-better-school-Canadas-Queens-University-or-Rutgers-University-New-Brunswick/answer/Yvonne-Lee-1"}]}, {'ID': 'b88a18df11ffd67b2dc2db35bfa783075b6b5026', 'questionLink': 'https://www.quora.com/Which-is-the-better-school-Canadas-Queens-University-or-Rutgers-University-New-Brunswick', 'answerLinks': [{"ansID": "527e382db88a14325197c6f10d716d4c81c856ed", "answerLink": "https://www.quora.com/Is-Chiac-from-New-Brunswick-and-Joual-from-Quebec-similar/answer/Cyril-Anderson"}, {"ansID": "f5178ed10cc3a8e683cafc54a66cb5e6ce114048", "answerLink": "https://www.quora.com/Is-Chiac-from-New-Brunswick-and-Joual-from-Quebec-similar/answer/Thomas-de-La-Marnierre"}]}, {'ID': '07497eb196edf97d52d60c31559f57067859fd9c', 'questionLink': 'https://www.quora.com/unanswered/What-is-the-best-place-to-stay-around-New-Brunswick', 'answerLinks': [{"ansID": "2ffb2c6ef4e7e6f3fe5e72e8b27bba94052e869c", "answerLink": "https://www.quora.com/Is-the-French-language-being-overrun-by-English-in-New-Brunswick/answer/Ian-Smith-65"}, {"ansID": "2dde4e5ba725d7212c445fa1f875a6a2ce58f8e4", "answerLink": "https://www.quora.com/Is-the-French-language-being-overrun-by-English-in-New-Brunswick/answer/Don-Flatt"}, {"ansID": "de30d094ccd82b5f3ca5d78079764bc413f02d2e", "answerLink": "https://www.quora.com/Is-the-French-language-being-overrun-by-English-in-New-Brunswick/answer/Patrick-Wilson-152"}]}, {'ID': '8286d1bd00660c925b9ed14a9b89b790277d7293', 'questionLink': 'https://www.quora.com/unanswered/New-Brunswick-and-Nova-Scotia-proposed-to-commit-under-One-Dominion-of-United-Kingdom-of-Great-Britain-and-Ireland-Is-this-good-or-bad-for-the-people', 'answerLinks': [{"ansID": "66ca6815dbbf70cdec3e2252c8226a022cfae395", "answerLink": "https://www.quora.com/Why-are-there-few-job-offers-from-Atlantic-provinces-of-Canada-Nova-Scotia-Prince-Edward-Island-New-Brunswick-and-Newfoundland-although-I-heard-about-working-force-shortage-there/answer/Austin-Bugden"}]}, {'ID': 'acbef4c4a2395c8dc07f8506089374ccc9045872', 'questionLink': 'https://www.quora.com/unanswered/Is-New-Brunswick-a-good-place-to-retire-I-moved-to-Vancouver-very-expensive-from-Montreal-and-still-miss-the-snow-so-that-wouldnt-be-a-problem', 'answerLinks': [{"ansID": "3fc64ce7d5eb737e613325d735daef3d900b1ac2", "answerLink": "https://www.quora.com/As-I-have-PR-of-New-Brunswick-Canada-I-heard-that-I-can-rent-out-a-flat-in-New-Brunswick-for-address-purposes-only-and-can-work-and-stay-in-any-other-province-Is-it-true-and-legal-in-Canada/answer/Munir-Hossain-12"}, {"ansID": "4ca42e759b33c8f8c079d4469ff047a9e7bb5f06", "answerLink": "https://www.quora.com/As-I-have-PR-of-New-Brunswick-Canada-I-heard-that-I-can-rent-out-a-flat-in-New-Brunswick-for-address-purposes-only-and-can-work-and-stay-in-any-other-province-Is-it-true-and-legal-in-Canada/answer/Gerry-Uswak"}, {"ansID": "94f4f77009f5eb57ebbad2f44a5c7bfb87e5aeee", "answerLink": "https://www.quora.com/As-I-have-PR-of-New-Brunswick-Canada-I-heard-that-I-can-rent-out-a-flat-in-New-Brunswick-for-address-purposes-only-and-can-work-and-stay-in-any-other-province-Is-it-true-and-legal-in-Canada/answer/Elizabeth-Maine-2"}, {"ansID": "3b037bf09e65a2d596b7d1181032511a40ab2fe2", "answerLink": "https://www.quora.com/As-I-have-PR-of-New-Brunswick-Canada-I-heard-that-I-can-rent-out-a-flat-in-New-Brunswick-for-address-purposes-only-and-can-work-and-stay-in-any-other-province-Is-it-true-and-legal-in-Canada/answer/John-Manzo-2"}]}, {'ID': '47502ad49c182c04878d55ac98189e16c419799b', 'questionLink': 'https://www.quora.com/Is-Chiac-from-New-Brunswick-and-Joual-from-Quebec-similar', 'answerLinks': [{"ansID": "3e7b185e1d6379ac40333f859c18881d7ff4bb5d", "answerLink": "https://www.quora.com/What-are-the-Positive-and-negative-things-about-living-in-New-Brunswick-Canada/answer/Ian-Smith-65"}, {"ansID": "e10451c89c217fbae1534891ea2f9b6a7ff62a1c", "answerLink": "https://www.quora.com/What-are-the-Positive-and-negative-things-about-living-in-New-Brunswick-Canada/answer/Art-Clogg"}, {"ansID": "87a77514e44260b3b15f681e9f1fa9ae0ec5f393", "answerLink": "https://www.quora.com/What-are-the-Positive-and-negative-things-about-living-in-New-Brunswick-Canada/answer/Sameh-Elnaggar-2"}]}, {'ID': '877fcfc136784d0dc74f3b0fa4335b23835e1d8a', 'questionLink': 'https://www.quora.com/Is-the-French-language-being-overrun-by-English-in-New-Brunswick', 'answerLinks': [{"ansID": "f468d070aaff0c84f08564e41c0def9836e8dd13", "answerLink": "https://www.quora.com/What-sites-are-available-online-to-search-for-jobs-in-New-Brunswick-Canada/answer/Elssa-Neri"}]}, {'ID': '760885ae0c196338b8334168f6805158af1ed1fd', 'questionLink': 'https://www.quora.com/unanswered/If-the-New-England-states-of-the-US-and-New-Brunswick-and-Nova-Scotia-formed-to-create-the-Republic-of-New-England-what-would-be-the-problems-would-they-have-enemies-economy-troubles-and-would-the-people-live-poor-or-rich', 'answerLinks': [{"ansID": "8e7c3077d678bf31dbb54493de2223963b984be7", "answerLink": "https://www.quora.com/Where-is-the-best-place-to-sneak-into-the-United-States-from-Canada-Quebec-Should-I-go-to-Manitoba-or-New-Brunswick/answer/Forrest-Williams-1"}, {"ansID": "5793d4e528510c924575567f4d399fe2cab1f59c", "answerLink": "https://www.quora.com/Where-is-the-best-place-to-sneak-into-the-United-States-from-Canada-Quebec-Should-I-go-to-Manitoba-or-New-Brunswick/answer/Patrick-Wilson-152"}]}, {'ID': 'ef0784a36ed47b462c65fa49f2b42961f5f774c0', 'questionLink': 'https://www.quora.com/unanswered/Does-NB-Power-have-a-monopoly-on-design-installation-commissioning-and-maintenance-of-high-voltage-substations-69-138-230-345-kv-in-New-Brunswick-Canada', 'answerLinks': [{"ansID": "90e7938a1f4e2dafd0bbce74aa928a408e3d58d3", "answerLink": "https://www.quora.com/How-many-bowling-alleys-are-in-New-Brunswick/answer/Giambattista-Trovarello"}, {"ansID": "2849d61cd6de198fc0ce6574c4e5689b22505f06", "answerLink": "https://www.quora.com/How-many-bowling-alleys-are-in-New-Brunswick/answer/Tony-Dobry"}]}, {'ID': '899e9e3950ae6d4fc52ed0b9665b739f0eed6895', 'questionLink': 'https://www.quora.com/unanswered/Would-it-be-a-good-decision-for-the-long-term-for-my-kids-and-family-to-move-to-New-Brunswick-Canada-while-I-am-already-on-an-Australian-PR-and-have-a-stable-job-in-IT', 'answerLinks': [{"ansID": "795acc1e8ea683c4f15d25828bc026d95db4baf1", "answerLink": "https://www.quora.com/Do-most-people-in-New-Brunswick-speak-both-English-and-French-fluently/answer/Tony-Dobry"}, {"ansID": "f8d4c80d0aa3d363ff5f83b6f06d0ab4667da185", "answerLink": "https://www.quora.com/Do-most-people-in-New-Brunswick-speak-both-English-and-French-fluently/answer/James-Powell-36"}, {"ansID": "f64df732549b2197ba7a3fd3a9149a55a7184d26", "answerLink": "https://www.quora.com/Do-most-people-in-New-Brunswick-speak-both-English-and-French-fluently/answer/Robert-Corbett-7"}, {"ansID": "f7c625155e5c99f4566445cfa54241d6c3aad1fc", "answerLink": "https://www.quora.com/Do-most-people-in-New-Brunswick-speak-both-English-and-French-fluently/answer/Arnav-Garg-3"}]}, {'ID': 'fc3e834b416726790b8715e7e68a15ad713f86b8', 'questionLink': 'https://www.quora.com/unanswered/What-do-high-school-history-texts-in-New-Brunswick-Canada-have-to-say-about-the-American-rebellion-Revolution-by-the-U-S-against-Great-Britain', 'answerLinks': [{"ansID": "a724622d6413265700e3713f817dc261921e1b3b", "answerLink": "https://www.quora.com/Which-part-of-New-Brunswick-has-the-least-cold-winters/answer/Heidi-Cool"}, {"ansID": "ef246e8272dd4d5bc5ad5858257f602015310490", "answerLink": "https://www.quora.com/Which-part-of-New-Brunswick-has-the-least-cold-winters/answer/Manuel-Peters"}, {"ansID": "1073405e9006ed4ad960a5e7a074f12ce428c7a0", "answerLink": "https://www.quora.com/Which-part-of-New-Brunswick-has-the-least-cold-winters/answer/Patrick-Wilson-152"}]}, {'ID': '2561b9a9a5f3923197aa01b005565ec96451b55f', 'questionLink': 'https://www.quora.com/Why-are-there-few-job-offers-from-Atlantic-provinces-of-Canada-Nova-Scotia-Prince-Edward-Island-New-Brunswick-and-Newfoundland-although-I-heard-about-working-force-shortage-there', 'answerLinks': [{"ansID": "ee1e7f9060abffca35ae1568c6f36b8874321b4b", "answerLink": "https://www.quora.com/If-you-obtained-a-PR-visa-from-the-New-Brunswick-Canada-PNP-can-you-move-to-another-province-upon-arrival/answer/Lee-Garibaldi"}, {"ansID": "80df9257e25baefbf9d850aeab2dbda6f15480d3", "answerLink": "https://www.quora.com/If-you-obtained-a-PR-visa-from-the-New-Brunswick-Canada-PNP-can-you-move-to-another-province-upon-arrival/answer/David-S-Lesperance"}, {"ansID": "d5eb526bd1438be604deb65596ebfff8dfd68e6d", "answerLink": "https://www.quora.com/If-you-obtained-a-PR-visa-from-the-New-Brunswick-Canada-PNP-can-you-move-to-another-province-upon-arrival/answer/Jim-Watkins-3"}, {"ansID": "24ecd72c9f9461fad9ee150e538dd293eec3cbb6", "answerLink": "https://www.quora.com/If-you-obtained-a-PR-visa-from-the-New-Brunswick-Canada-PNP-can-you-move-to-another-province-upon-arrival/answer/Viola-Yee"}, {"ansID": "2da548a6de9d47037123ba82d06b6d39326d2129", "answerLink": "https://www.quora.com/If-you-obtained-a-PR-visa-from-the-New-Brunswick-Canada-PNP-can-you-move-to-another-province-upon-arrival/answer/Manoj-Palwe"}, {"ansID": "ec30121a0faf0774b73641a0df9c2920449372c2", "answerLink": "https://www.quora.com/If-you-obtained-a-PR-visa-from-the-New-Brunswick-Canada-PNP-can-you-move-to-another-province-upon-arrival/answer/Ray-Comeau"}, {"ansID": "c02a81d0cd7c5cae5e2614cd93fb2b62234d1f44", "answerLink": "https://www.quora.com/If-you-obtained-a-PR-visa-from-the-New-Brunswick-Canada-PNP-can-you-move-to-another-province-upon-arrival/answer/John-Carrick-5"}, {"ansID": "eb4c597f25ebb357595f8f7a7c964dab63c28437", "answerLink": "https://www.quora.com/If-you-obtained-a-PR-visa-from-the-New-Brunswick-Canada-PNP-can-you-move-to-another-province-upon-arrival/answer/Gary-Elmer"}, {"ansID": "4a76cf98f7398838b36223cfd26a451e936f501e", "answerLink": "https://www.quora.com/If-you-obtained-a-PR-visa-from-the-New-Brunswick-Canada-PNP-can-you-move-to-another-province-upon-arrival/answer/Nasir-Diria"}]}, {'ID': 'aa6af56baebc809486c069b953fe4c787cdd9b14', 'questionLink': 'https://www.quora.com/unanswered/Is-New-Brunswick-good-for-a-new-immigrant-with-family-in-terms-of-cost-of-living-weather-and-finding-a-job', 'answerLinks': [{"ansID": "566ffed69f3f1be3311586eea40dd26e587be0b8", "answerLink": "https://www.quora.com/Given-the-size-why-did-New-Brunswick-become-a-separate-province-as-opposed-to-simply-an-extension-of-Nova-Scotia/answer/Polly-Gen"}]}, {'ID': '2951ed9fc8f5300a81452956cf8961cec803c5a6', 'questionLink': 'https://www.quora.com/As-I-have-PR-of-New-Brunswick-Canada-I-heard-that-I-can-rent-out-a-flat-in-New-Brunswick-for-address-purposes-only-and-can-work-and-stay-in-any-other-province-Is-it-true-and-legal-in-Canada', 'answerLinks': [{"ansID": "25532b39de423470bf886792a1a2661abeb3fe26", "answerLink": "https://www.quora.com/What-are-the-major-cities-in-New-Brunswick/answer/Patrick-Wilson-152"}]}, {'ID': 'cb38c7608f5d057163651d98f764e98bfc769c23', 'questionLink': 'https://www.quora.com/What-are-the-Positive-and-negative-things-about-living-in-New-Brunswick-Canada', 'answerLinks': [{"ansID": "32e4b877d28a82b22831f111fa388497925417da", "answerLink": "https://www.quora.com/What-are-some-fun-facts-about-New-Brunswick-Canada/answer/Manuel-Peters"}]}, {'ID': '29c1f63922ca6e47388ea3b4b3848e18c2c5bbf0', 'questionLink': 'https://www.quora.com/What-sites-are-available-online-to-search-for-jobs-in-New-Brunswick-Canada', 'answerLinks': [{"ansID": "1ad626a0a1d1f689e1c36f9c124597bb2a077009", "answerLink": "https://www.quora.com/Is-New-Brunswick-a-state-in-Canada/answer/Kevin-Xue-25"}]}, {'ID': '9152d840d6547b565dcc27cc85939b1dfcb9cb72', 'questionLink': 'https://www.quora.com/Where-is-the-best-place-to-sneak-into-the-United-States-from-Canada-Quebec-Should-I-go-to-Manitoba-or-New-Brunswick', 'answerLinks': [{"ansID": "ac5fa350ac70833599181171319414338c3229f2", "answerLink": "https://www.quora.com/How-does-the-Canadian-Language-Benchmark-work-for-New-Brunswick/answer/Dinesh-Sharma-974"}]}, {'ID': 'c5029fee9d1a377e9dc352b1db37727d00db6d5b', 'questionLink': 'https://www.quora.com/How-many-bowling-alleys-are-in-New-Brunswick', 'answerLinks': [{"ansID": "4924182f923ed25e6a5b043cfc9b7cd07f0888c1", "answerLink": "https://www.quora.com/What-are-some-of-New-Brunswicks-landforms/answer/Patrick-Wilson-152"}]}, {'ID': '65aed521fdf2a74c676772d2aa8a4c2b324abafd', 'questionLink': 'https://www.quora.com/Do-most-people-in-New-Brunswick-speak-both-English-and-French-fluently', 'answerLinks': [{"ansID": "633c9effd59d7a8f42f29a0a00a7a9e2676dcff8", "answerLink": "https://www.quora.com/If-you-could-choose-between-St-Johns-Newfoundland-Halifax-Nova-Scotia-or-Moncton-New-Brunswick-where-would-you-live-and-why/answer/Richard-Darroch"}, {"ansID": "638ba79861ecefac541b9bead2ed6cd46891b7f1", "answerLink": "https://www.quora.com/If-you-could-choose-between-St-Johns-Newfoundland-Halifax-Nova-Scotia-or-Moncton-New-Brunswick-where-would-you-live-and-why/answer/Patrick-Wilson-152"}, {"ansID": "ed0989dde3ae0766a41c4d12f710aca48f971ade", "answerLink": "https://www.quora.com/If-you-could-choose-between-St-Johns-Newfoundland-Halifax-Nova-Scotia-or-Moncton-New-Brunswick-where-would-you-live-and-why/answer/David-Barnett-76"}, {"ansID": "ff332f7bb156490b6b510d371252201b13fec5a7", "answerLink": "https://www.quora.com/If-you-could-choose-between-St-Johns-Newfoundland-Halifax-Nova-Scotia-or-Moncton-New-Brunswick-where-would-you-live-and-why/answer/Polly-Gen"}, {"ansID": "1760d4d46f3ee4f9d8921c11f3a72a2cda156698", "answerLink": "https://www.quora.com/If-you-could-choose-between-St-Johns-Newfoundland-Halifax-Nova-Scotia-or-Moncton-New-Brunswick-where-would-you-live-and-why/answer/Les-Howie"}]}, {'ID': 'c74c17984f5b379466a397fdbb1b060fed5f9a9f', 'questionLink': 'https://www.quora.com/Which-part-of-New-Brunswick-has-the-least-cold-winters', 'answerLinks': [{"ansID": "163c70b38a9e37030c7d8cda82eb330ba1cb0967", "answerLink": "https://www.quora.com/How-would-I-immigrate-to-New-Brunswick/answer/Bengt-Lindvall"}]}, {'ID': '656527fc0d526a02ca1053c13fd4f614c065b33f', 'questionLink': 'https://www.quora.com/If-you-obtained-a-PR-visa-from-the-New-Brunswick-Canada-PNP-can-you-move-to-another-province-upon-arrival', 'answerLinks': [{"ansID": "524e6b2ecf8d7a6268f7cf06f7cdba9a0568eccf", "answerLink": "https://www.quora.com/What-if-Maine-joined-Canada/answer/Daniel-Angelo-Monaco"}, {"ansID": "c38ff9d5f39fa5e135d499ef15b6bbd2c4973bfe", "answerLink": "https://www.quora.com/What-if-Maine-joined-Canada/answer/James-Binns-3"}, {"ansID": "536382201251ebf937d4dbc8501c68c2cea72edc", "answerLink": "https://www.quora.com/What-if-Maine-joined-Canada/answer/Randall-Burns"}, {"ansID": "f89d208aa06a017dcfb1f9732963a45cefd9b6a9", "answerLink": "https://www.quora.com/What-if-Maine-joined-Canada/answer/Greg-Vasko"}]}, {'ID': 'ff4da18217d5f13250a23e61ffdf35450dbd6fab', 'questionLink': 'https://www.quora.com/Given-the-size-why-did-New-Brunswick-become-a-separate-province-as-opposed-to-simply-an-extension-of-Nova-Scotia', 'answerLinks': [{"ansID": "4b83b6d4def29210f3525bd5e54b4f8a1aad687d", "answerLink": "https://www.quora.com/Is-Canadian-Citizenship-worth-it/answer/K-Gopinath"}, {"ansID": "c41327c23ff7cc76a8b0a27b49f3605f63f7c799", "answerLink": "https://www.quora.com/Is-Canadian-Citizenship-worth-it/answer/Rajbir-Singh-Chawla"}]}, {'ID': 'fb128bed1fc926c5df5d6a2ec62f19018149b23f', 'questionLink': 'https://www.quora.com/unanswered/How-good-is-the-University-of-New-Brunswick-Canada-for-BA-in-psychology', 'answerLinks': [{"ansID": "c0c3495c9ae535125ee99a860ee7d0924b3d1d81", "answerLink": "https://www.quora.com/What-is-it-like-to-live-in-New-Brunswick-Canada-as-an-exchange-student-in-high-school/answer/Suresh-Jeyaverasingam-1"}, {"ansID": "f9a2a94f98d3578a166867165b36e125c16ffd2e", "answerLink": "https://www.quora.com/What-is-it-like-to-live-in-New-Brunswick-Canada-as-an-exchange-student-in-high-school/answer/Jim-Watkins-3"}]}, {'ID': 'd97907dfb0f1cb912daccd29cb0262dc8bc268fc', 'questionLink': 'https://www.quora.com/How-is-the-future-of-the-software-industry-in-the-Canadian-provinces-like-New-Brunswick-or-Prince-Edward-Island-Is-it-good-for-IT-professors-with-5-years-of-experience-with-PNPs', 'answerLinks': [{"ansID": "afe8dc8014117bf93f5bb165a9ae6d2d1c605d87", "answerLink": "https://www.quora.com/Which-province-is-better-to-immigrate-to-Manitoba-or-New-Brunswick/answer/Doug-Giles"}]}, {'ID': '797dcd5a3b4e9628b743c990f6c820291d948113', 'questionLink': 'https://www.quora.com/What-are-the-major-cities-in-New-Brunswick', 'answerLinks': [{"ansID": "b57aaddbcaec39d0339a8fb853ebfed51293ed79", "answerLink": "https://www.quora.com/Has-the-Canada-Parliament-approved-the-FEMA-REX84-U-S-citizenry-martial-law-detention-camps-in-Alberta-and-New-Brunswick/answer/Scott-Young-5"}, {"ansID": "1e03b5bb9486c58fdac87f2fc2df37b48d09dff0", "answerLink": "https://www.quora.com/Has-the-Canada-Parliament-approved-the-FEMA-REX84-U-S-citizenry-martial-law-detention-camps-in-Alberta-and-New-Brunswick/answer/Jim-Uffelmann"}, {"ansID": "4291e8c51b60aa206f226a9d16570f60f0e836c3", "answerLink": "https://www.quora.com/Has-the-Canada-Parliament-approved-the-FEMA-REX84-U-S-citizenry-martial-law-detention-camps-in-Alberta-and-New-Brunswick/answer/Ken-Dunham"}]}, {'ID': '0c325ea48ed7ab387c3f161eede160cb4c649cf3', 'questionLink': 'https://www.quora.com/What-are-some-fun-facts-about-New-Brunswick-Canada', 'answerLinks': [{"ansID": "8da1b5e2e8c3ea3b1081261272c8475bdac93fcb", "answerLink": "https://www.quora.com/Will-marrying-a-girl-who-is-studying-in-Canada-new-brunswick-university-help-me-get-a-better-CRS-score/answer/Aarjav-Thakore"}]}, {'ID': '87ac54e76b23e8a07dbf2477dbf1e36c02a0f034', 'questionLink': 'https://www.quora.com/Is-New-Brunswick-a-state-in-Canada', 'answerLinks': [{"ansID": "a94e43e34529da00a5bd9a7eb7719c3e9342987f", "answerLink": "https://www.quora.com/Which-is-best-for-immigrants-Nova-Scotia-New-Brunswick-or-Prince-Edward-Island/answer/Raj-959"}]}, {'ID': '32f58eedcc72f6ad314c83a6c907d3ccfb99a92b', 'questionLink': 'https://www.quora.com/How-does-the-Canadian-Language-Benchmark-work-for-New-Brunswick', 'answerLinks': [{"ansID": "b44052682c92446e9d7d07d3ad9c30a74bbff70c", "answerLink": "https://www.quora.com/What-are-Canadian-stereotypes-of-the-people-of-New-Brunswick/answer/Craig-Anderson-10"}]}, {'ID': '611a01b4ea3b3485625ec371828313b360854494', 'questionLink': 'https://www.quora.com/What-are-some-of-New-Brunswicks-landforms', 'answerLinks': [{"ansID": "de5a3ed21b864ff87890fc4e40bd092e8b4b8fcd", "answerLink": "https://www.quora.com/How-much-is-tuition-at-University-of-New-Brunswick-Is-it-worth-it/answer/Ahmed-Y-Khiari"}, {"ansID": "940ddbd1193507c12da9410556e12a5685f7a579", "answerLink": "https://www.quora.com/How-much-is-tuition-at-University-of-New-Brunswick-Is-it-worth-it/answer/Lisa-Shields-4"}]}, {'ID': '365dad841adbbb8ffef7997e31b645eaec6d8894', 'questionLink': 'https://www.quora.com/If-you-could-choose-between-St-Johns-Newfoundland-Halifax-Nova-Scotia-or-Moncton-New-Brunswick-where-would-you-live-and-why', 'answerLinks': [{"ansID": "91aebe6922ef578e027fac66776cc8bf4e2ed692", "answerLink": "https://www.quora.com/What-are-the-pros-and-cons-of-New-Brunswick/answer/Ted-Koczon"}]}, {'ID': 'b112c612b57da91858cf53aee455ba19d733664a', 'questionLink': 'https://www.quora.com/How-would-I-immigrate-to-New-Brunswick', 'answerLinks': [{"ansID": "3a0305e1d1892c4f2f969f1a91f5faca6beab105", "answerLink": "https://www.quora.com/What-is-a-good-choice-for-a-foreign-project-manager-in-New-Brunswick-Canada/answer/Jon-Dalton-Hiles"}]}, {'ID': '3b72f7cd265da41c88f21e3c0d1ae492e6081843', 'questionLink': 'https://www.quora.com/What-if-Maine-joined-Canada', 'answerLinks': [{"ansID": "7681ab76e99e42b01d7c6b0aff7f4d26ed7cb63a", "answerLink": "https://www.quora.com/How-much-would-100-chicken-nuggets-from-McDonalds-cost-in-New-Brunswick-Canada/answer/Steve-Blumenkranz"}, {"ansID": "e0466eb30f79fcdbdb1c27e084229b867a5ae45c", "answerLink": "https://www.quora.com/How-much-would-100-chicken-nuggets-from-McDonalds-cost-in-New-Brunswick-Canada/answer/Hayden-Marsh-1"}]}, {'ID': '0d09ceb4eaeebd04b1160f1e8b5f4035e66f223e', 'questionLink': 'https://www.quora.com/Is-Canadian-Citizenship-worth-it', 'answerLinks': [{"ansID": "fa63082847c7f0cd2d62f53a062232411da8effc", "answerLink": "https://www.quora.com/What-if-Prince-Edward-Island-were-to-merge-with-New-Brunswick/answer/Austin-Bugden"}, {"ansID": "cd9f2bbbc6befb2145b0d6e4dede95d7eb91a0ed", "answerLink": "https://www.quora.com/What-if-Prince-Edward-Island-were-to-merge-with-New-Brunswick/answer/Joaquim-Garc%C3%ADa"}, {"ansID": "215d65010b35af270074efe0f31f5559bf93a3f0", "answerLink": "https://www.quora.com/What-if-Prince-Edward-Island-were-to-merge-with-New-Brunswick/answer/John-Corey-3"}, {"ansID": "3a48bc76a29f6189b940fd7ea3cf1241c49c6824", "answerLink": "https://www.quora.com/What-if-Prince-Edward-Island-were-to-merge-with-New-Brunswick/answer/Todd-Bartholomew"}, {"ansID": "662e6b41413913d5b26c16b255d1b2d3f9fb87cc", "answerLink": "https://www.quora.com/What-if-Prince-Edward-Island-were-to-merge-with-New-Brunswick/answer/Kc-Armstrong-3"}]}, {'ID': '5d39b0a573681f0af0973fa63e124626b12720bc', 'questionLink': 'https://www.quora.com/What-is-it-like-to-live-in-New-Brunswick-Canada-as-an-exchange-student-in-high-school', 'answerLinks': [{"ansID": "9ffdeb50a00917ddf1b9180d145cf3746bff632b", "answerLink": "https://www.quora.com/Would-you-choose-Montr%C3%A9al-or-New-Brunswick-for-a-high-school-exchange/answer/Rania-A-M"}]}, {'ID': 'c5b26a1732a707ea2c40d2ef0b0e8b4c4fdbe656', 'questionLink': 'https://www.quora.com/Which-province-is-better-to-immigrate-to-Manitoba-or-New-Brunswick', 'answerLinks': [{"ansID": "8f68acfb5db3031b18bc602cba6904d451334d86", "answerLink": "https://www.quora.com/Are-there-good-places-for-day-hikes-and-overnight-backpacking-near-Fredericton-New-Brunswick/answer/Suresh-Jeyaverasingam-1"}]}, {'ID': '2ece154f5d5a898c609f8bdd519a31900cd4d261', 'questionLink': 'https://www.quora.com/Has-the-Canada-Parliament-approved-the-FEMA-REX84-U-S-citizenry-martial-law-detention-camps-in-Alberta-and-New-Brunswick', 'answerLinks': [{"ansID": "fc8e494eb2f775e41467d173d39c73933549dd5e", "answerLink": "https://www.quora.com/What-is-an-average-salary-in-Fredericton-NB/answer/Cassidy-Scaglione"}]}, {'ID': '1d187e851fcbfb35166b633932b9255ae50c4968', 'questionLink': 'https://www.quora.com/Will-marrying-a-girl-who-is-studying-in-Canada-new-brunswick-university-help-me-get-a-better-CRS-score', 'answerLinks': [{"ansID": "746faa3feae390b3142d3f8ad46847a9875e61bc", "answerLink": "https://www.quora.com/Does-Bill-101-apply-to-New-Brunswick-as-it-does-Quebec/answer/Christopher-Smith-170"}, {"ansID": "b89d9ed0b13e31df9f291a0138eb9340832471e0", "answerLink": "https://www.quora.com/Does-Bill-101-apply-to-New-Brunswick-as-it-does-Quebec/answer/Lucie-Le-Blanc"}]}, {'ID': 'ae1740c5d1ca5628d9843daf115aecb0c44f00bc', 'questionLink': 'https://www.quora.com/unanswered/Who-are-some-of-the-most-historically-important-people-from-New-Brunswick', 'answerLinks': [{"ansID": "1a891de686dbba94518cb813ded829a325ab76f8", "answerLink": "https://www.quora.com/Is-New-Brunswick-CA-a-good-province-for-international-students-to-get-PR/answer/Patrick-Wilson-152"}]}, {'ID': '0ebb29f72c98d2d62f5f34804d405f3bd8b59dd6', 'questionLink': 'https://www.quora.com/Which-is-best-for-immigrants-Nova-Scotia-New-Brunswick-or-Prince-Edward-Island', 'answerLinks': [{"ansID": "413270c47ef966ed933c6b1a6152e57c9ee1aa87", "answerLink": "https://www.quora.com/What-are-the-natural-resources-of-New-Brunswick-Canada-and-how-do-these-help-the-local-economy/answer/Jerry-Gregory-1"}]}, {'ID': '86b662da1e4790dc77623549049ed608bccf2870', 'questionLink': 'https://www.quora.com/What-are-Canadian-stereotypes-of-the-people-of-New-Brunswick', 'answerLinks': [{"ansID": "fd25166f1f1c17803e59a4232f58cdaa00734ab0", "answerLink": "https://www.quora.com/Where-do-I-move-if-I-want-a-scenic-community-oriented-medium-large-city-in-Canada-with-good-employment-opportunities/answer/Steven-Haddock"}, {"ansID": "f831f19ad358c3d8389884f5025c98006352645b", "answerLink": "https://www.quora.com/Where-do-I-move-if-I-want-a-scenic-community-oriented-medium-large-city-in-Canada-with-good-employment-opportunities/answer/Miles-Anthony"}, {"ansID": "8bfb50cc65c7655a1bfd1064fcb7c7c1171c5922", "answerLink": "https://www.quora.com/Where-do-I-move-if-I-want-a-scenic-community-oriented-medium-large-city-in-Canada-with-good-employment-opportunities/answer/Cassidy-Scaglione"}, {"ansID": "fa0a062626f554505aec67a31a69e31a02a45fbe", "answerLink": "https://www.quora.com/Where-do-I-move-if-I-want-a-scenic-community-oriented-medium-large-city-in-Canada-with-good-employment-opportunities/answer/Jim-Watkins-3"}, {"ansID": "956e2c6c2150a4b9e279727ba0234d2e50471d0c", "answerLink": "https://www.quora.com/Where-do-I-move-if-I-want-a-scenic-community-oriented-medium-large-city-in-Canada-with-good-employment-opportunities/answer/Michael-Anderson-28"}, {"ansID": "912a23d07f03d77fcc4abae80589a06645f60abf", "answerLink": "https://www.quora.com/Where-do-I-move-if-I-want-a-scenic-community-oriented-medium-large-city-in-Canada-with-good-employment-opportunities/answer/Mark-Miller-179"}, {"ansID": "63a0a72332e70d9b74084b0f0c2ec247e60c9a95", "answerLink": "https://www.quora.com/Where-do-I-move-if-I-want-a-scenic-community-oriented-medium-large-city-in-Canada-with-good-employment-opportunities/answer/Kc-Armstrong-3"}]}, {'ID': '8843dffa760dbc06857bcd4d2b9734a44d0ba8a3', 'questionLink': 'https://www.quora.com/unanswered/Are-there-any-foreign-language-bookstores-in-New-Brunswick-or-the-surrounding-area', 'answerLinks': [{"ansID": "41a884211275afc44d1edb50397b8dffeaa5afea", "answerLink": "https://www.quora.com/Is-French-also-commonly-spoken-in-Nova-Scotia-and-New-Brunswick-like-Quebec/answer/Doug-Hanchard"}, {"ansID": "c974ff8dbe767ca94905a8a22751d0d122c3a70f", "answerLink": "https://www.quora.com/Is-French-also-commonly-spoken-in-Nova-Scotia-and-New-Brunswick-like-Quebec/answer/Clyde-Thogmartin"}, {"ansID": "bedd9ab070c3d7e24f938cebbb799314f72aca03", "answerLink": "https://www.quora.com/Is-French-also-commonly-spoken-in-Nova-Scotia-and-New-Brunswick-like-Quebec/answer/James-Linn-2"}]}, {'ID': '8642ea5b40d2d61b4c6cf29feea3d2fbe86a2c46', 'questionLink': 'https://www.quora.com/How-much-is-tuition-at-University-of-New-Brunswick-Is-it-worth-it', 'answerLinks': [{"ansID": "e4080a0b538934bb3846c3b8dc2659f11b43bc61", "answerLink": "https://www.quora.com/Is-moving-to-New-Brunswick-Canada-a-good-decision-How-is-the-prospect-of-finding-a-job-for-an-experience-programmer-data-scientist/answer/Jody-McDonald-8"}, {"ansID": "a1b00054777c87f002ad57ce1d4e54d0ce0d6923", "answerLink": "https://www.quora.com/Is-moving-to-New-Brunswick-Canada-a-good-decision-How-is-the-prospect-of-finding-a-job-for-an-experience-programmer-data-scientist/answer/Suresh-Jeyaverasingam-1"}]}, {'ID': 'f055d9e4cf271656b6dc8f3abca4870c2d9c0e2a', 'questionLink': 'https://www.quora.com/unanswered/What-are-the-laws-regarding-license-plate-lighting-in-Ontario-and-what-fines-are-associated-How-do-these-differ-in-New-Brunswick', 'answerLinks': [{"ansID": "fa52c38a363920806faa3f20e52082c78b7a48be", "answerLink": "https://www.quora.com/If-Quebec-became-independent-would-Newfoundland-New-Brunswick-Nova-Scotia-and-Prince-Edward-Island-join-the-United-States/answer/Jake-Morneau-de-Chavigny-de-la-Chevrotiere"}, {"ansID": "f57aa82e8c73c9e4293f20ef6b266ca671dd0091", "answerLink": "https://www.quora.com/If-Quebec-became-independent-would-Newfoundland-New-Brunswick-Nova-Scotia-and-Prince-Edward-Island-join-the-United-States/answer/Thomas-de-La-Marnierre"}, {"ansID": "e56b7f583f75ac8815b2f3632318bfae5d3da983", "answerLink": "https://www.quora.com/If-Quebec-became-independent-would-Newfoundland-New-Brunswick-Nova-Scotia-and-Prince-Edward-Island-join-the-United-States/answer/Ed-Bonnell-1"}, {"ansID": "6ae36f82748fff5304d2646bbe9e7bc5e9c03ad5", "answerLink": "https://www.quora.com/If-Quebec-became-independent-would-Newfoundland-New-Brunswick-Nova-Scotia-and-Prince-Edward-Island-join-the-United-States/answer/Shane-Cashin"}]}, {'ID': '227cb168541ac0c57ee4cc7ae8ec0801b08312a6', 'questionLink': 'https://www.quora.com/What-are-the-pros-and-cons-of-New-Brunswick', 'answerLinks': [{"ansID": "9d97403e54433ef65c2274fb93ab1e5b7fb2d05d", "answerLink": "https://www.quora.com/Is-there-any-real-hope-for-New-Brunswicks-economy/answer/Jean-Francois-Arseneau"}]}, {'ID': '8570f094446d11c21fed7739d38822f66c7188e4', 'questionLink': 'https://www.quora.com/What-is-a-good-choice-for-a-foreign-project-manager-in-New-Brunswick-Canada', 'answerLinks': [{"ansID": "e1bf3d98247a596ca9e4bd2c7a2f7a0c2fb62d89", "answerLink": "https://www.quora.com/What-if-Nova-Scotia-New-Brunswick-and-PEI-joined-to-make-one-maritime-province/answer/Suresh-Jeyaverasingam-1"}, {"ansID": "fd84b8b19d1a812d7c2add23f5b4501b1096462a", "answerLink": "https://www.quora.com/What-if-Nova-Scotia-New-Brunswick-and-PEI-joined-to-make-one-maritime-province/answer/Austin-Bugden"}, {"ansID": "e394ba6ac910b7b91ba760aa9004b8b436729438", "answerLink": "https://www.quora.com/What-if-Nova-Scotia-New-Brunswick-and-PEI-joined-to-make-one-maritime-province/answer/John-Paul-Nelson-Gill"}]}, {'ID': 'a8193487e1f5cf660c08cf2322739a0c069052c0', 'questionLink': 'https://www.quora.com/How-much-would-100-chicken-nuggets-from-McDonalds-cost-in-New-Brunswick-Canada', 'answerLinks': [{"ansID": "4e08ab3859c1e5b720ebea9b0f69a8b2f279131c", "answerLink": "https://www.quora.com/Tourism-What-are-must-see-destinations-in-New-England-New-Brunswick-Nova-Scotia/answer/Linda-deMerle-1"}, {"ansID": "cf42c93ce308dd7e9b4103c680575db9b9a52de3", "answerLink": "https://www.quora.com/Tourism-What-are-must-see-destinations-in-New-England-New-Brunswick-Nova-Scotia/answer/Stephen-MacInnis"}]}, {'ID': '78330411cd4041089ea214609335bdef7bc9cd91', 'questionLink': 'https://www.quora.com/What-if-Prince-Edward-Island-were-to-merge-with-New-Brunswick', 'answerLinks': [{"ansID": "ff40e6e3b2c32faffd29d9219002266062d3cea1", "answerLink": "https://www.quora.com/How-good-is-University-of-New-Brunswick-Canada-for-doing-a-PhD-in-electrical-engineering-Power-engineering/answer/Ian-Smith-65"}]}, {'ID': 'fe2058ac6a673140e5b58188e78bd4b3d9aa30fe', 'questionLink': 'https://www.quora.com/Would-you-choose-Montr%C3%A9al-or-New-Brunswick-for-a-high-school-exchange', 'answerLinks': [{"ansID": "ca8f3d2e9ce898168a146ae3073ebdcb91c60053", "answerLink": "https://www.quora.com/Where-is-better-for-young-professional-Melbourne-or-New-Brunswick-Im-planning-to-move-to-the-US-afterwards/answer/Brian-Collins-56"}, {"ansID": "5a082e2d5aca47c954c54777a03da996926ac845", "answerLink": "https://www.quora.com/Where-is-better-for-young-professional-Melbourne-or-New-Brunswick-Im-planning-to-move-to-the-US-afterwards/answer/Joe-Roberts-41"}]}, {'ID': '8b83b49b91df73e281e5c1ae71e660b1b0c8f9cd', 'questionLink': 'https://www.quora.com/Are-there-good-places-for-day-hikes-and-overnight-backpacking-near-Fredericton-New-Brunswick', 'answerLinks': [{"ansID": "8f38b27474b86a14aa9b7e6f55c438b4aafb3fdf", "answerLink": "https://www.quora.com/Can-I-have-a-simple-life-working-part-time-in-New-Brunswick-Canada-while-at-my-college/answer/Jim-Watkins-3"}]}, {'ID': '2dbfa1133d2076a7d3c33afc2afb7e2b70e93e48', 'questionLink': 'https://www.quora.com/What-is-an-average-salary-in-Fredericton-NB', 'answerLinks': [{"ansID": "2d97bbf0a5806fd1a77b6688b84eee7548a77d88", "answerLink": "https://www.quora.com/Why-is-the-population-of-Canadas-Maritime-provinces-so-small/answer/Stephen-MacInnis"}, {"ansID": "dee42ece948fd4707701667c795b6fc8113ac13e", "answerLink": "https://www.quora.com/Why-is-the-population-of-Canadas-Maritime-provinces-so-small/answer/Ron-Tal"}]}, {'ID': '388e56c18022d16d4160d3f4356c277b877b619c', 'questionLink': 'https://www.quora.com/unanswered/Are-Francophones-in-New-Brunswick-more-religious-than-the-Qu%C3%A9b%C3%A9cois', 'answerLinks': [{"ansID": "c33d71f872ef6c89364b54e08c10758d50cdd45b", "answerLink": "https://www.quora.com/What-animal-has-a-brown-and-furry-coat-with-a-single-horizontal-light-stripe-on-its-back-and-a-medium-length-furry-tail/answer/John-Milhaven"}, {"ansID": "36e44aac8cdb881c2233c0daa9dfcc26bca103df", "answerLink": "https://www.quora.com/What-animal-has-a-brown-and-furry-coat-with-a-single-horizontal-light-stripe-on-its-back-and-a-medium-length-furry-tail/answer/Philip-Bowles-1"}]}, {'ID': '6a606f27098a732cfa6af7624d3121ff20afd483', 'questionLink': 'https://www.quora.com/Does-Bill-101-apply-to-New-Brunswick-as-it-does-Quebec', 'answerLinks': [{"ansID": "27a95e55591eda690daad364a1a1b11e9fc66a15", "answerLink": "https://www.quora.com/If-the-residents-of-New-Brunswick-NJ-dont-constantly-feel-the-need-to-correct-confusion-with-the-Canadian-province-of-New-Brunswick-then-why-do-the-residents-of-Vancouver-WA-feel-the-need-to-correct-confusion-with-the-Canadian-city-of-Vancouver-BC/answer/Patricia-Fraser-3"}, {"ansID": "37b9220f4ba5efd1cf0977008c24f7b0bf895812", "answerLink": "https://www.quora.com/If-the-residents-of-New-Brunswick-NJ-dont-constantly-feel-the-need-to-correct-confusion-with-the-Canadian-province-of-New-Brunswick-then-why-do-the-residents-of-Vancouver-WA-feel-the-need-to-correct-confusion-with-the-Canadian-city-of-Vancouver-BC/answer/Keith-McKinnon"}, {"ansID": "a9a2dae0639831aaf535f526c290ecb8affc56dd", "answerLink": "https://www.quora.com/If-the-residents-of-New-Brunswick-NJ-dont-constantly-feel-the-need-to-correct-confusion-with-the-Canadian-province-of-New-Brunswick-then-why-do-the-residents-of-Vancouver-WA-feel-the-need-to-correct-confusion-with-the-Canadian-city-of-Vancouver-BC/answer/Jonas-K%C3%BChnemann"}]}, {'ID': '94cc5d21f9e377b950fbdd3b152846641fd08876', 'questionLink': 'https://www.quora.com/unanswered/What-is-the-average-processing-time-for-New-Brunswick-Provincial-Nominee-Program-NBPNP', 'answerLinks': [{"ansID": "5d34c88f7edb4b7a0cc23ed6cb5ec454871f2342", "answerLink": "https://www.quora.com/Is-Campobello-Island-Canadian-territory-or-U-S-territory/answer/Keith-Higa"}, {"ansID": "ab9f9e1107004ed63be109eb020d614b573f1fe8", "answerLink": "https://www.quora.com/Is-Campobello-Island-Canadian-territory-or-U-S-territory/answer/Kartik-Vibhakar"}, {"ansID": "2969723f2aa89f1f610b1a86176b89f876d90231", "answerLink": "https://www.quora.com/Is-Campobello-Island-Canadian-territory-or-U-S-territory/answer/Dorothy-Clark-2"}]}, {'ID': 'e85ada7b9ac49cdc55c7f6630c482653934ec75f', 'questionLink': 'https://www.quora.com/Is-New-Brunswick-CA-a-good-province-for-international-students-to-get-PR', 'answerLinks': [{"ansID": "2b8d68f144962a4190f4f787c08b73ed6f455da5", "answerLink": "https://www.quora.com/I-want-to-do-a-road-trip-in-the-Canadian-Maritime-Provinces-any-ideas/answer/Cyril-Anderson"}, {"ansID": "d02e7ec66041aef3f08cb8ea61fe095304f5a17d", "answerLink": "https://www.quora.com/I-want-to-do-a-road-trip-in-the-Canadian-Maritime-Provinces-any-ideas/answer/Elwood-Jones"}, {"ansID": "2857e65463ab4bec7fda1025896b96f8486aa603", "answerLink": "https://www.quora.com/I-want-to-do-a-road-trip-in-the-Canadian-Maritime-Provinces-any-ideas/answer/Alan-Dillman"}]}, {'ID': '90b75399ff3dc5aeca076a9306f6dbb21690cd6f', 'questionLink': 'https://www.quora.com/What-are-the-natural-resources-of-New-Brunswick-Canada-and-how-do-these-help-the-local-economy', 'answerLinks': [{"ansID": "6b0e4fb6a25fece2e1f5225ae16ea6a93d21235b", "answerLink": "https://www.quora.com/Which-high-school-is-the-best-in-New-Brunswick-Canada/answer/Viola-Yee"}, {"ansID": "947ae390120e807ac06b4c5b802a3e596508a246", "answerLink": "https://www.quora.com/Which-high-school-is-the-best-in-New-Brunswick-Canada/answer/Alan-Dillman"}]}, {'ID': '87adf087201c4443731f2c11ca8462474abff2e7', 'questionLink': 'https://www.quora.com/Where-do-I-move-if-I-want-a-scenic-community-oriented-medium-large-city-in-Canada-with-good-employment-opportunities', 'answerLinks': [{"ansID": "37a23689ce6d18c3da7ba13ede4af19758471475", "answerLink": "https://www.quora.com/Is-the-Maritime-Union-a-good-idea-Why-or-why-not/answer/Luke-Matthews-1"}, {"ansID": "bed55d8721b20902cb95e41d6d01ff4c439a05ee", "answerLink": "https://www.quora.com/Is-the-Maritime-Union-a-good-idea-Why-or-why-not/answer/Craig-Hubley"}]}, {'ID': 'b9cff3eb2d1b952f45d3908b4adcfaec30ca7191', 'questionLink': 'https://www.quora.com/Is-French-also-commonly-spoken-in-Nova-Scotia-and-New-Brunswick-like-Quebec', 'answerLinks': [{"ansID": "bbb9f52c9006dab3a3707a5e3dc901b16fb120c5", "answerLink": "https://www.quora.com/How-would-travellers-best-plan-for-a-one-week-trip-around-Nova-Scotia-New-Brunswick-and-or-PEI-Where-would-they-go-and-why/answer/Matt-Shaw-14"}, {"ansID": "610a13f211052318a7592f5a0795c1b2e2a5fa5b", "answerLink": "https://www.quora.com/How-would-travellers-best-plan-for-a-one-week-trip-around-Nova-Scotia-New-Brunswick-and-or-PEI-Where-would-they-go-and-why/answer/Mark-Miller-179"}, {"ansID": "c519a53a23e9c49f29c3bb70b1f98f9019c454ff", "answerLink": "https://www.quora.com/How-would-travellers-best-plan-for-a-one-week-trip-around-Nova-Scotia-New-Brunswick-and-or-PEI-Where-would-they-go-and-why/answer/Drew-Elaschuk"}]}, {'ID': 'b71f72ec6ad9379673f7be4c06b8157ac311cbe7', 'questionLink': 'https://www.quora.com/Is-moving-to-New-Brunswick-Canada-a-good-decision-How-is-the-prospect-of-finding-a-job-for-an-experience-programmer-data-scientist', 'answerLinks': [{"ansID": "78847c93f68efa5559d04c7b6683de238e670776", "answerLink": "https://www.quora.com/What-is-your-review-of-New-Brunswick-Canadian-province/answer/John-Hanson-9"}]}, {'ID': 'd747716665e9c5037b19b147622305a1e13d570d', 'questionLink': 'https://www.quora.com/unanswered/What-is-the-Personal-Property-Security-Act-and-how-is-Nova-Scotias-different-from-New-Brunswicks', 'answerLinks': [{"ansID": "1dfa1f5660789e17cdf7de75cab7b2727f501277", "answerLink": "https://www.quora.com/How-high-are-the-tides-in-New-Brunswick/answer/John-Hanson-9"}, {"ansID": "a01f6c1d46a4886c3c555718f2eb4be1a7134f32", "answerLink": "https://www.quora.com/How-high-are-the-tides-in-New-Brunswick/answer/Aaron-Gullison"}]}, {'ID': '381d1e3abdf1842f15e7818831e27d01175924af', 'questionLink': 'https://www.quora.com/If-Quebec-became-independent-would-Newfoundland-New-Brunswick-Nova-Scotia-and-Prince-Edward-Island-join-the-United-States', 'answerLinks': [{"ansID": "1a70d003bb31c87451a53898c9c8be85972a101c", "answerLink": "https://www.quora.com/Who-were-the-Grays-Greys-living-in-Napan-NB-Canada-in-the-early-1800s/answer/Aaron-Gullison"}]}, {'ID': '14943bf7047579f682212515a1ee9f9b95388ac7', 'questionLink': 'https://www.quora.com/Is-there-any-real-hope-for-New-Brunswicks-economy', 'answerLinks': [{"ansID": "f960d8b6a9c44ab23fe1f1d6c4f33fd4a8ef0069", "answerLink": "https://www.quora.com/What-is-the-best-weather-forecast-er-to-follow-in-New-Brunswick/answer/Dave-Challes"}]}, {'ID': '0c3e6f78c5a920045dcdfba3f5e6509eca639933', 'questionLink': 'https://www.quora.com/What-if-Nova-Scotia-New-Brunswick-and-PEI-joined-to-make-one-maritime-province'}, {'ID': '33c6e2809915e1f599dda6689ae417d32ebc7dd1', 'questionLink': 'https://www.quora.com/Tourism-What-are-must-see-destinations-in-New-England-New-Brunswick-Nova-Scotia'}, {'ID': '8d4e592ee4300247b44523427a00aa03c13b5dec', 'questionLink': 'https://www.quora.com/How-good-is-University-of-New-Brunswick-Canada-for-doing-a-PhD-in-electrical-engineering-Power-engineering'}, {'ID': '65d4c08a783da002f2cb71265909fe1a9973db9d', 'questionLink': 'https://www.quora.com/Where-is-better-for-young-professional-Melbourne-or-New-Brunswick-Im-planning-to-move-to-the-US-afterwards'}, {'ID': 'cc54069e3b6956e2954285e27c8ee6ceaa2b8bec', 'questionLink': 'https://www.quora.com/Can-I-have-a-simple-life-working-part-time-in-New-Brunswick-Canada-while-at-my-college'}, {'ID': '4d0c4da811d8ea052b55ed1e13f719594c794c59', 'questionLink': 'https://www.quora.com/Why-is-the-population-of-Canadas-Maritime-provinces-so-small'}, {'ID': 'a9139e416d1a0ce264af10e5b07368f646574e1f', 'questionLink': 'https://www.quora.com/What-animal-has-a-brown-and-furry-coat-with-a-single-horizontal-light-stripe-on-its-back-and-a-medium-length-furry-tail'}, {'ID': '269a4864b560366014a4046e7886b28b7ab8852c', 'questionLink': 'https://www.quora.com/If-the-residents-of-New-Brunswick-NJ-dont-constantly-feel-the-need-to-correct-confusion-with-the-Canadian-province-of-New-Brunswick-then-why-do-the-residents-of-Vancouver-WA-feel-the-need-to-correct-confusion-with-the-Canadian-city-of-Vancouver-BC'}, {'ID': '63c331cbd44cbfb57ccb19c3f870e4f4493f9721', 'questionLink': 'https://www.quora.com/Is-Campobello-Island-Canadian-territory-or-U-S-territory'}, {'ID': '5ec5901fe467506b325dd19d52955de8ef659abc', 'questionLink': 'https://www.quora.com/unanswered/When-did-Margaret-Trudeau-last-visit-New-Brunswick-Canada'}, {'ID': '48ee2603cef14812ea95ce1353b4a59c13b1bbd4', 'questionLink': 'https://www.quora.com/I-want-to-do-a-road-trip-in-the-Canadian-Maritime-Provinces-any-ideas'}, {'ID': '818bf18bfdc2242124ac9ad6115ca2da964b42cf', 'questionLink': 'https://www.quora.com/Which-high-school-is-the-best-in-New-Brunswick-Canada'}, {'ID': 'e3a64feabad54e0f7ebe67e16b7dad661dfb0703', 'questionLink': 'https://www.quora.com/Is-the-Maritime-Union-a-good-idea-Why-or-why-not'}, {'ID': '4c60ee851b4107a3e1d41f4adf24d33a398032fa', 'questionLink': 'https://www.quora.com/How-would-travellers-best-plan-for-a-one-week-trip-around-Nova-Scotia-New-Brunswick-and-or-PEI-Where-would-they-go-and-why'}, {'ID': '97acb35e989fbeb66364204119a3cceb6340f7d5', 'questionLink': 'https://www.quora.com/What-is-your-review-of-New-Brunswick-Canadian-province'}, {'ID': '581e8f7097b835a67077d2ad8e309e9c24b94913', 'questionLink': 'https://www.quora.com/How-high-are-the-tides-in-New-Brunswick'}, {'ID': 'c157316eae135ecbb86c78ad8cd8940dff1f5c3c', 'questionLink': 'https://www.quora.com/Who-were-the-Grays-Greys-living-in-Napan-NB-Canada-in-the-early-1800s'}, {'ID': 'ff296686fb0169035cb93c2ae98eae4c04110df4', 'questionLink': 'https://www.quora.com/What-is-the-best-weather-forecast-er-to-follow-in-New-Brunswick'}];
(function($,sr){
    // debouncing function from John Hann
    // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
    var debounce = function (func, threshold, execAsap) {
      var timeout;

        return function debounced () {
            var obj = this, args = arguments;
            function delayed () {
                if (!execAsap)
                    func.apply(obj, args); 
                timeout = null; 
            }

            if (timeout)
                clearTimeout(timeout);
            else if (execAsap)
                func.apply(obj, args);

            timeout = setTimeout(delayed, threshold || 100); 
        };
    };

    // smartresize 
    jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');
/**
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var CURRENT_URL = window.location.href.split('#')[0].split('?')[0],
    $BODY = $('body'),
    $MENU_TOGGLE = $('#menu_toggle'),
    $SIDEBAR_MENU = $('#sidebar-menu'),
    $SIDEBAR_FOOTER = $('.sidebar-footer'),
    $LEFT_COL = $('.left_col'),
    $RIGHT_COL = $('.right_col'),
    $NAV_MENU = $('.nav_menu'),
    $FOOTER = $('footer');

	
	
// Sidebar
function init_sidebar() {
// TODO: This is some kind of easy fix, maybe we can improve this
var setContentHeight = function () {
	// reset height
	$RIGHT_COL.css('min-height', $(window).height());

	var bodyHeight = $BODY.outerHeight(),
		footerHeight = $BODY.hasClass('footer_fixed') ? -10 : $FOOTER.height(),
		leftColHeight = $LEFT_COL.eq(1).height() + $SIDEBAR_FOOTER.height(),
		contentHeight = bodyHeight < leftColHeight ? leftColHeight : bodyHeight;

	// normalize content
	contentHeight -= $NAV_MENU.height() + footerHeight;

	$RIGHT_COL.css('min-height', contentHeight);
};

  $SIDEBAR_MENU.find('a').on('click', function(ev) {
	  console.log('clicked - sidebar_menu');
        var $li = $(this).parent();

        if ($li.is('.active')) {
            $li.removeClass('active active-sm');
            $('ul:first', $li).slideUp(function() {
                setContentHeight();
            });
        } else {
            // prevent closing menu if we are on child menu
            if (!$li.parent().is('.child_menu')) {
                $SIDEBAR_MENU.find('li').removeClass('active active-sm');
                $SIDEBAR_MENU.find('li ul').slideUp();
            }else
            {
				if ( $BODY.is( ".nav-sm" ) )
				{
					$SIDEBAR_MENU.find( "li" ).removeClass( "active active-sm" );
					$SIDEBAR_MENU.find( "li ul" ).slideUp();
				}
			}
            $li.addClass('active');

            $('ul:first', $li).slideDown(function() {
                setContentHeight();
            });
        }
    });

// toggle small or large menu 
$MENU_TOGGLE.on('click', function() {
		console.log('clicked - menu toggle');
		
		if ($BODY.hasClass('nav-md')) {
			$SIDEBAR_MENU.find('li.active ul').hide();
			$SIDEBAR_MENU.find('li.active').addClass('active-sm').removeClass('active');
		} else {
			$SIDEBAR_MENU.find('li.active-sm ul').show();
			$SIDEBAR_MENU.find('li.active-sm').addClass('active').removeClass('active-sm');
		}

	$BODY.toggleClass('nav-md nav-sm');

	setContentHeight();

	$('.dataTable').each ( function () { $(this).dataTable().fnDraw(); });
});

	// check active menu
	$SIDEBAR_MENU.find('a[href="' + CURRENT_URL + '"]').parent('li').addClass('current-page');

	$SIDEBAR_MENU.find('a').filter(function () {
		return this.href == CURRENT_URL;
	}).parent('li').addClass('current-page').parents('ul').slideDown(function() {
		setContentHeight();
	}).parent().addClass('active');

	// recompute content when resizing
	$(window).smartresize(function(){  
		setContentHeight();
	});

	setContentHeight();

	// fixed sidebar
	if ($.fn.mCustomScrollbar) {
		$('.menu_fixed').mCustomScrollbar({
			autoHideScrollbar: true,
			theme: 'minimal',
			mouseWheel:{ preventDefault: true }
		});
	}
};
// /Sidebar

	var randNum = function() {
	  return (Math.floor(Math.random() * (1 + 40 - 20))) + 20;
	};


// Panel toolbox
$(document).ready(function() {
    $('.collapse-link').on('click', function() {
        var $BOX_PANEL = $(this).closest('.x_panel'),
            $ICON = $(this).find('i'),
            $BOX_CONTENT = $BOX_PANEL.find('.x_content');
        
        // fix for some div with hardcoded fix class
        if ($BOX_PANEL.attr('style')) {
            $BOX_CONTENT.slideToggle(200, function(){
                $BOX_PANEL.removeAttr('style');
            });
        } else {
            $BOX_CONTENT.slideToggle(200); 
            $BOX_PANEL.css('height', 'auto');  
        }

        $ICON.toggleClass('fa-chevron-up fa-chevron-down');
    });

    $('.close-link').click(function () {
        var $BOX_PANEL = $(this).closest('.x_panel');

        $BOX_PANEL.remove();
    });
});
// /Panel toolbox

// Tooltip
$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip({
        container: 'body'
    });
});
// /Tooltip

// Progressbar
if ($(".progress .progress-bar")[0]) {
    $('.progress .progress-bar').progressbar();
}
// /Progressbar

// Switchery
$(document).ready(function() {
    if ($(".js-switch")[0]) {
        var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));
        elems.forEach(function (html) {
            var switchery = new Switchery(html, {
                color: '#26B99A'
            });
        });
    }
});
// /Switchery


// iCheck
$(document).ready(function() {
    if ($("input.flat")[0]) {
        $(document).ready(function () {
            $('input.flat').iCheck({
                checkboxClass: 'icheckbox_flat-green',
                radioClass: 'iradio_flat-green'
            })
            .on('ifChanged', function(e) {
            	var boolSTopic = document.getElementById('searchTopic').checked;
            	var boolSQuestion = document.getElementById('searchQuestion').checked;
            	var boolSAnswer = document.getElementById('searchAnswer').checked;
            	if (boolSTopic== true && boolSQuestion == false && boolSAnswer==false){
            		searchTypeLevel = 0;
            		//alert(searchTypeLevel);
            	}
            	else if (boolSTopic== false && boolSQuestion == true && boolSAnswer==false){
            		searchTypeLevel = 1;
            		//alert(searchTypeLevel);
            	}
            	else if (boolSTopic== false && boolSQuestion == false && boolSAnswer==true){
            		searchTypeLevel = 2;
            		//alert(searchTypeLevel);
            	}
        	});
        });
    }
	    // TODO: insert whatever you want to do with $(this) here
});
// /iCheck

// Table
$('table input').on('ifChecked', function () {
    checkState = '';
    $(this).parent().parent().parent().addClass('selected');
    countChecked();
});
$('table input').on('ifUnchecked', function () {
    checkState = '';
    $(this).parent().parent().parent().removeClass('selected');
    countChecked();
});

var checkState = '';

$('.bulk_action input').on('ifChecked', function () {
    checkState = '';
    $(this).parent().parent().parent().addClass('selected');
    countChecked();
});
$('.bulk_action input').on('ifUnchecked', function () {
    checkState = '';
    $(this).parent().parent().parent().removeClass('selected');
    countChecked();
});
$('.bulk_action input#check-all').on('ifChecked', function () {
    checkState = 'all';
    countChecked();
});
$('.bulk_action input#check-all').on('ifUnchecked', function () {
    checkState = 'none';
    countChecked();
});

function countChecked() {
    if (checkState === 'all') {
        $(".bulk_action input[name='table_records']").iCheck('check');
    }
    if (checkState === 'none') {
        $(".bulk_action input[name='table_records']").iCheck('uncheck');
    }

    var checkCount = $(".bulk_action input[name='table_records']:checked").length;

    if (checkCount) {
        $('.column-title').hide();
        $('.bulk-actions').show();
        $('.action-cnt').html(checkCount + ' Records Selected');
    } else {
        $('.column-title').show();
        $('.bulk-actions').hide();
    }
}



// Accordion
$(document).ready(function() {
    $(".expand").on("click", function () {
        $(this).next().slideToggle(200);
        $expand = $(this).find(">:first-child");

        if ($expand.text() == "+") {
            $expand.text("-");
        } else {
            $expand.text("+");
        }
    });
});

// NProgress
if (typeof NProgress != 'undefined') {
    $(document).ready(function () {
        NProgress.start();
    });

    $(window).load(function () {
        NProgress.done();
    });
}

	
	  //hover and retain popover when on popover content
        var originalLeave = $.fn.popover.Constructor.prototype.leave;
        $.fn.popover.Constructor.prototype.leave = function(obj) {
          var self = obj instanceof this.constructor ?
            obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type);
          var container, timeout;

          originalLeave.call(this, obj);

          if (obj.currentTarget) {
            container = $(obj.currentTarget).siblings('.popover');
            timeout = self.timeout;
            container.one('mouseenter', function() {
              //We entered the actual popover – call off the dogs
              clearTimeout(timeout);
              //Let's monitor popover content instead
              container.one('mouseleave', function() {
                $.fn.popover.Constructor.prototype.leave.call(self, self);
              });
            });
          }
        };

        $('body').popover({
          selector: '[data-popover]',
          trigger: 'click hover',
          delay: {
            show: 50,
            hide: 400
          }
        });


	function gd(year, month, day) {
		return new Date(year, month - 1, day).getTime();
	}
	  
	
	function init_flot_chart(){
		
		if( typeof ($.plot) === 'undefined'){ return; }
		
		console.log('init_flot_chart');
		
		
		
		var arr_data1 = [
			[gd(2012, 1, 1), 17],
			[gd(2012, 1, 2), 74],
			[gd(2012, 1, 3), 6],
			[gd(2012, 1, 4), 39],
			[gd(2012, 1, 5), 20],
			[gd(2012, 1, 6), 85],
			[gd(2012, 1, 7), 7]
		];

		var arr_data2 = [
		  [gd(2012, 1, 1), 82],
		  [gd(2012, 1, 2), 23],
		  [gd(2012, 1, 3), 66],
		  [gd(2012, 1, 4), 9],
		  [gd(2012, 1, 5), 119],
		  [gd(2012, 1, 6), 6],
		  [gd(2012, 1, 7), 9]
		];
		
		var arr_data3 = [
			[0, 1],
			[1, 9],
			[2, 6],
			[3, 10],
			[4, 5],
			[5, 17],
			[6, 6],
			[7, 10],
			[8, 7],
			[9, 11],
			[10, 35],
			[11, 9],
			[12, 12],
			[13, 5],
			[14, 3],
			[15, 4],
			[16, 9]
		];
		
		var chart_plot_02_data = [];
		
		var chart_plot_03_data = [
			[0, 1],
			[1, 9],
			[2, 6],
			[3, 10],
			[4, 5],
			[5, 17],
			[6, 6],
			[7, 10],
			[8, 7],
			[9, 11],
			[10, 35],
			[11, 9],
			[12, 12],
			[13, 5],
			[14, 3],
			[15, 4],
			[16, 9]
		];
		
		
		for (var i = 0; i < 30; i++) {
		  chart_plot_02_data.push([new Date(Date.today().add(i).days()).getTime(), randNum() + i + i + 10]);
		}
		
		
		var chart_plot_01_settings = {
          series: {
            lines: {
              show: false,
              fill: true
            },
            splines: {
              show: true,
              tension: 0.4,
              lineWidth: 1,
              fill: 0.4
            },
            points: {
              radius: 0,
              show: true
            },
            shadowSize: 2
          },
          grid: {
            verticalLines: true,
            hoverable: true,
            clickable: true,
            tickColor: "#d5d5d5",
            borderWidth: 1,
            color: '#fff'
          },
          colors: ["rgba(38, 185, 154, 0.38)", "rgba(3, 88, 106, 0.38)"],
          xaxis: {
            tickColor: "rgba(51, 51, 51, 0.06)",
            mode: "time",
            tickSize: [1, "day"],
            //tickLength: 10,
            axisLabel: "Date",
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 12,
            axisLabelFontFamily: 'Verdana, Arial',
            axisLabelPadding: 10
          },
          yaxis: {
            ticks: 8,
            tickColor: "rgba(51, 51, 51, 0.06)",
          },
          tooltip: false
        }
		
		var chart_plot_02_settings = {
			grid: {
				show: true,
				aboveData: true,
				color: "#3f3f3f",
				labelMargin: 10,
				axisMargin: 0,
				borderWidth: 0,
				borderColor: null,
				minBorderMargin: 5,
				clickable: true,
				hoverable: true,
				autoHighlight: true,
				mouseActiveRadius: 100
			},
			series: {
				lines: {
					show: true,
					fill: true,
					lineWidth: 2,
					steps: false
				},
				points: {
					show: true,
					radius: 4.5,
					symbol: "circle",
					lineWidth: 3.0
				}
			},
			legend: {
				position: "ne",
				margin: [0, -25],
				noColumns: 0,
				labelBoxBorderColor: null,
				labelFormatter: function(label, series) {
					return label + '&nbsp;&nbsp;';
				},
				width: 40,
				height: 1
			},
			colors: ['#96CA59', '#3F97EB', '#72c380', '#6f7a8a', '#f7cb38', '#5a8022', '#2c7282'],
			shadowSize: 0,
			tooltip: true,
			tooltipOpts: {
				content: "%s: %y.0",
				xDateFormat: "%d/%m",
			shifts: {
				x: -30,
				y: -50
			},
			defaultTheme: false
			},
			yaxis: {
				min: 0
			},
			xaxis: {
				mode: "time",
				minTickSize: [1, "day"],
				timeformat: "%d/%m/%y",
				min: chart_plot_02_data[0][0],
				max: chart_plot_02_data[20][0]
			}
		};	
	
		var chart_plot_03_settings = {
			series: {
				curvedLines: {
					apply: true,
					active: true,
					monotonicFit: true
				}
			},
			colors: ["#26B99A"],
			grid: {
				borderWidth: {
					top: 0,
					right: 0,
					bottom: 1,
					left: 1
				},
				borderColor: {
					bottom: "#7F8790",
					left: "#7F8790"
				}
			}
		};
        
		
        if ($("#chart_plot_01").length){
			console.log('Plot1');
			
			$.plot( $("#chart_plot_01"), [ arr_data1, arr_data2 ],  chart_plot_01_settings );
		}
		
		
		if ($("#chart_plot_02").length){
			console.log('Plot2');
			
			$.plot( $("#chart_plot_02"), 
			[{ 
				label: "Email Sent", 
				data: chart_plot_02_data, 
				lines: { 
					fillColor: "rgba(150, 202, 89, 0.12)" 
				}, 
				points: { 
					fillColor: "#fff" } 
			}], chart_plot_02_settings);
			
		}
		
		if ($("#chart_plot_03").length){
			console.log('Plot3');
			
			
			$.plot($("#chart_plot_03"), [{
				label: "Registrations",
				data: chart_plot_03_data,
				lines: {
					fillColor: "rgba(150, 202, 89, 0.12)"
				}, 
				points: {
					fillColor: "#fff"
				}
			}], chart_plot_03_settings);
			
		};
	  
	} 
	
		
	/* STARRR */
			
	function init_starrr() {
		
		if( typeof (starrr) === 'undefined'){ return; }
		console.log('init_starrr');
		
		$(".stars").starrr();

		$('.stars-existing').starrr({
		  rating: 4
		});

		$('.stars').on('starrr:change', function (e, value) {
		  $('.stars-count').html(value);
		});

		$('.stars-existing').on('starrr:change', function (e, value) {
		  $('.stars-count-existing').html(value);
		});
		
	  };
	
	
	function init_JQVmap(){

		//console.log('check init_JQVmap [' + typeof (VectorCanvas) + '][' + typeof (jQuery.fn.vectorMap) + ']' );	
		
		if(typeof (jQuery.fn.vectorMap) === 'undefined'){ return; }
		
		console.log('init_JQVmap');
	     
			if ($('#world-map-gdp').length ){
		 
				$('#world-map-gdp').vectorMap({
					map: 'world_en',
					backgroundColor: null,
					color: '#ffffff',
					hoverOpacity: 0.7,
					selectedColor: '#666666',
					enableZoom: true,
					showTooltip: true,
					values: sample_data,
					scaleColors: ['#E6F2F0', '#149B7E'],
					normalizeFunction: 'polynomial'
				});
			
			}
			
			if ($('#usa_map').length ){
			
				$('#usa_map').vectorMap({
					map: 'usa_en',
					backgroundColor: null,
					color: '#ffffff',
					hoverOpacity: 0.7,
					selectedColor: '#666666',
					enableZoom: true,
					showTooltip: true,
					values: sample_data,
					scaleColors: ['#E6F2F0', '#149B7E'],
					normalizeFunction: 'polynomial'
				});
			
			}
			
	};
			
	    
	function init_skycons(){
				
			if( typeof (Skycons) === 'undefined'){ return; }
			console.log('init_skycons');
		
			var icons = new Skycons({
				"color": "#73879C"
			  }),
			  list = [
				"clear-day", "clear-night", "partly-cloudy-day",
				"partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
				"fog"
			  ],
			  i;

			for (i = list.length; i--;)
			  icons.set(list[i], list[i]);

			icons.play();
	
	}  
	   
	   
	function init_chart_doughnut(){
				
		if( typeof (Chart) === 'undefined'){ return; }
		
		console.log('init_chart_doughnut');
	 
		if ($('.canvasDoughnut').length){
			
		var chart_doughnut_settings = {
				type: 'doughnut',
				tooltipFillColor: "rgba(51, 51, 51, 0.55)",
				data: {
					labels: [
						"Symbian",
						"Blackberry",
						"Other",
						"Android",
						"IOS"
					],
					datasets: [{
						data: [15, 20, 30, 10, 30],
						backgroundColor: [
							"#BDC3C7",
							"#9B59B6",
							"#E74C3C",
							"#26B99A",
							"#3498DB"
						],
						hoverBackgroundColor: [
							"#CFD4D8",
							"#B370CF",
							"#E95E4F",
							"#36CAAB",
							"#49A9EA"
						]
					}]
				},
				options: { 
					legend: false, 
					responsive: false 
				}
			}
		
			$('.canvasDoughnut').each(function(){
				
				var chart_element = $(this);
				var chart_doughnut = new Chart( chart_element, chart_doughnut_settings);
				
			});			
		
		}  
	   
	}
	   
	function init_gauge() {
			
		if( typeof (Gauge) === 'undefined'){ return; }
		
		console.log('init_gauge [' + $('.gauge-chart').length + ']');
		
		console.log('init_gauge');
		

		  var chart_gauge_settings = {
		  lines: 12,
		  angle: 0,
		  lineWidth: 0.4,
		  pointer: {
			  length: 0.75,
			  strokeWidth: 0.042,
			  color: '#1D212A'
		  },
		  limitMax: 'false',
		  colorStart: '#1ABC9C',
		  colorStop: '#1ABC9C',
		  strokeColor: '#F0F3F3',
		  generateGradient: true
	  };
		
		
		if ($('#chart_gauge_01').length){ 
		
			var chart_gauge_01_elem = document.getElementById('chart_gauge_01');
			var chart_gauge_01 = new Gauge(chart_gauge_01_elem).setOptions(chart_gauge_settings);
			
		}	
		
		
		if ($('#gauge-text').length){ 
		
			chart_gauge_01.maxValue = 6000;
			chart_gauge_01.animationSpeed = 32;
			chart_gauge_01.set(3200);
			chart_gauge_01.setTextField(document.getElementById("gauge-text"));
		
		}
		
		if ($('#chart_gauge_02').length){
		
			var chart_gauge_02_elem = document.getElementById('chart_gauge_02');
			var chart_gauge_02 = new Gauge(chart_gauge_02_elem).setOptions(chart_gauge_settings);
			
		}
		
		
		if ($('#gauge-text2').length){
			
			chart_gauge_02.maxValue = 9000;
			chart_gauge_02.animationSpeed = 32;
			chart_gauge_02.set(2400);
			chart_gauge_02.setTextField(document.getElementById("gauge-text2"));
		
		}
	
	
	}   
	   	   
	/* SPARKLINES */
			
		function init_sparklines() {
			
			if(typeof (jQuery.fn.sparkline) === 'undefined'){ return; }
			console.log('init_sparklines'); 
			
			
			$(".sparkline_one").sparkline([2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 5, 6, 4, 5, 6, 3, 5, 4, 5, 4, 5, 4, 3, 4, 5, 6, 7, 5, 4, 3, 5, 6], {
				type: 'bar',
				height: '125',
				barWidth: 13,
				colorMap: {
					'7': '#a1a1a1'
				},
				barSpacing: 2,
				barColor: '#26B99A'
			});
			
			
			$(".sparkline_two").sparkline([2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 5, 6, 7, 5, 4, 3, 5, 6], {
				type: 'bar',
				height: '40',
				barWidth: 9,
				colorMap: {
					'7': '#a1a1a1'	
				},
				barSpacing: 2,
				barColor: '#26B99A'
			});
			
			
			$(".sparkline_three").sparkline([2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 5, 6, 7, 5, 4, 3, 5, 6], {
				type: 'line',
				width: '200',
				height: '40',
				lineColor: '#26B99A',
				fillColor: 'rgba(223, 223, 223, 0.57)',
				lineWidth: 2,
				spotColor: '#26B99A',
				minSpotColor: '#26B99A'
			});
			
			
			$(".sparkline11").sparkline([2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 6, 2, 4, 3, 4, 5, 4, 5, 4, 3], {
				type: 'bar',
				height: '40',
				barWidth: 8,
				colorMap: {
					'7': '#a1a1a1'
				},
				barSpacing: 2,
				barColor: '#26B99A'
			});
			
			
			$(".sparkline22").sparkline([2, 4, 3, 4, 7, 5, 4, 3, 5, 6, 2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 6], {
				type: 'line',
				height: '40',
				width: '200',
				lineColor: '#26B99A',
				fillColor: '#ffffff',
				lineWidth: 3,
				spotColor: '#34495E',
				minSpotColor: '#34495E'
			});
	
	
			$(".sparkline_bar").sparkline([2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 5, 6, 4, 5, 6, 3, 5], {
				type: 'bar',
				colorMap: {
					'7': '#a1a1a1'
				},
				barColor: '#26B99A'
			});
			
			
			$(".sparkline_area").sparkline([5, 6, 7, 9, 9, 5, 3, 2, 2, 4, 6, 7], {
				type: 'line',
				lineColor: '#26B99A',
				fillColor: '#26B99A',
				spotColor: '#4578a0',
				minSpotColor: '#728fb2',
				maxSpotColor: '#6d93c4',
				highlightSpotColor: '#ef5179',
				highlightLineColor: '#8ba8bf',
				spotRadius: 2.5,
				width: 85
			});
			
			
			$(".sparkline_line").sparkline([2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 5, 6, 4, 5, 6, 3, 5], {
				type: 'line',
				lineColor: '#26B99A',
				fillColor: '#ffffff',
				width: 85,
				spotColor: '#34495E',
				minSpotColor: '#34495E'
			});
			
			
			$(".sparkline_pie").sparkline([1, 1, 2, 1], {
				type: 'pie',
				sliceColors: ['#26B99A', '#ccc', '#75BCDD', '#D66DE2']
			});
			
			
			$(".sparkline_discreet").sparkline([4, 6, 7, 7, 4, 3, 2, 1, 4, 4, 2, 4, 3, 7, 8, 9, 7, 6, 4, 3], {
				type: 'discrete',
				barWidth: 3,
				lineColor: '#26B99A',
				width: '85',
			});

			
		};   
	   
	   
	   /* AUTOCOMPLETE */
			
		function init_autocomplete() {
			
			if( typeof (autocomplete) === 'undefined'){ return; }
			console.log('init_autocomplete');
			
			var countries = { AD:"Andorra",A2:"Andorra Test",AE:"United Arab Emirates",AF:"Afghanistan",AG:"Antigua and Barbuda",AI:"Anguilla",AL:"Albania",AM:"Armenia",AN:"Netherlands Antilles",AO:"Angola",AQ:"Antarctica",AR:"Argentina",AS:"American Samoa",AT:"Austria",AU:"Australia",AW:"Aruba",AX:"Åland Islands",AZ:"Azerbaijan",BA:"Bosnia and Herzegovina",BB:"Barbados",BD:"Bangladesh",BE:"Belgium",BF:"Burkina Faso",BG:"Bulgaria",BH:"Bahrain",BI:"Burundi",BJ:"Benin",BL:"Saint Barthélemy",BM:"Bermuda",BN:"Brunei",BO:"Bolivia",BQ:"British Antarctic Territory",BR:"Brazil",BS:"Bahamas",BT:"Bhutan",BV:"Bouvet Island",BW:"Botswana",BY:"Belarus",BZ:"Belize",CA:"Canada",CC:"Cocos [Keeling] Islands",CD:"Congo - Kinshasa",CF:"Central African Republic",CG:"Congo - Brazzaville",CH:"Switzerland",CI:"Côte d’Ivoire",CK:"Cook Islands",CL:"Chile",CM:"Cameroon",CN:"China",CO:"Colombia",CR:"Costa Rica",CS:"Serbia and Montenegro",CT:"Canton and Enderbury Islands",CU:"Cuba",CV:"Cape Verde",CX:"Christmas Island",CY:"Cyprus",CZ:"Czech Republic",DD:"East Germany",DE:"Germany",DJ:"Djibouti",DK:"Denmark",DM:"Dominica",DO:"Dominican Republic",DZ:"Algeria",EC:"Ecuador",EE:"Estonia",EG:"Egypt",EH:"Western Sahara",ER:"Eritrea",ES:"Spain",ET:"Ethiopia",FI:"Finland",FJ:"Fiji",FK:"Falkland Islands",FM:"Micronesia",FO:"Faroe Islands",FQ:"French Southern and Antarctic Territories",FR:"France",FX:"Metropolitan France",GA:"Gabon",GB:"United Kingdom",GD:"Grenada",GE:"Georgia",GF:"French Guiana",GG:"Guernsey",GH:"Ghana",GI:"Gibraltar",GL:"Greenland",GM:"Gambia",GN:"Guinea",GP:"Guadeloupe",GQ:"Equatorial Guinea",GR:"Greece",GS:"South Georgia and the South Sandwich Islands",GT:"Guatemala",GU:"Guam",GW:"Guinea-Bissau",GY:"Guyana",HK:"Hong Kong SAR China",HM:"Heard Island and McDonald Islands",HN:"Honduras",HR:"Croatia",HT:"Haiti",HU:"Hungary",ID:"Indonesia",IE:"Ireland",IL:"Israel",IM:"Isle of Man",IN:"India",IO:"British Indian Ocean Territory",IQ:"Iraq",IR:"Iran",IS:"Iceland",IT:"Italy",JE:"Jersey",JM:"Jamaica",JO:"Jordan",JP:"Japan",JT:"Johnston Island",KE:"Kenya",KG:"Kyrgyzstan",KH:"Cambodia",KI:"Kiribati",KM:"Comoros",KN:"Saint Kitts and Nevis",KP:"North Korea",KR:"South Korea",KW:"Kuwait",KY:"Cayman Islands",KZ:"Kazakhstan",LA:"Laos",LB:"Lebanon",LC:"Saint Lucia",LI:"Liechtenstein",LK:"Sri Lanka",LR:"Liberia",LS:"Lesotho",LT:"Lithuania",LU:"Luxembourg",LV:"Latvia",LY:"Libya",MA:"Morocco",MC:"Monaco",MD:"Moldova",ME:"Montenegro",MF:"Saint Martin",MG:"Madagascar",MH:"Marshall Islands",MI:"Midway Islands",MK:"Macedonia",ML:"Mali",MM:"Myanmar [Burma]",MN:"Mongolia",MO:"Macau SAR China",MP:"Northern Mariana Islands",MQ:"Martinique",MR:"Mauritania",MS:"Montserrat",MT:"Malta",MU:"Mauritius",MV:"Maldives",MW:"Malawi",MX:"Mexico",MY:"Malaysia",MZ:"Mozambique",NA:"Namibia",NC:"New Caledonia",NE:"Niger",NF:"Norfolk Island",NG:"Nigeria",NI:"Nicaragua",NL:"Netherlands",NO:"Norway",NP:"Nepal",NQ:"Dronning Maud Land",NR:"Nauru",NT:"Neutral Zone",NU:"Niue",NZ:"New Zealand",OM:"Oman",PA:"Panama",PC:"Pacific Islands Trust Territory",PE:"Peru",PF:"French Polynesia",PG:"Papua New Guinea",PH:"Philippines",PK:"Pakistan",PL:"Poland",PM:"Saint Pierre and Miquelon",PN:"Pitcairn Islands",PR:"Puerto Rico",PS:"Palestinian Territories",PT:"Portugal",PU:"U.S. Miscellaneous Pacific Islands",PW:"Palau",PY:"Paraguay",PZ:"Panama Canal Zone",QA:"Qatar",RE:"Réunion",RO:"Romania",RS:"Serbia",RU:"Russia",RW:"Rwanda",SA:"Saudi Arabia",SB:"Solomon Islands",SC:"Seychelles",SD:"Sudan",SE:"Sweden",SG:"Singapore",SH:"Saint Helena",SI:"Slovenia",SJ:"Svalbard and Jan Mayen",SK:"Slovakia",SL:"Sierra Leone",SM:"San Marino",SN:"Senegal",SO:"Somalia",SR:"Suriname",ST:"São Tomé and Príncipe",SU:"Union of Soviet Socialist Republics",SV:"El Salvador",SY:"Syria",SZ:"Swaziland",TC:"Turks and Caicos Islands",TD:"Chad",TF:"French Southern Territories",TG:"Togo",TH:"Thailand",TJ:"Tajikistan",TK:"Tokelau",TL:"Timor-Leste",TM:"Turkmenistan",TN:"Tunisia",TO:"Tonga",TR:"Turkey",TT:"Trinidad and Tobago",TV:"Tuvalu",TW:"Taiwan",TZ:"Tanzania",UA:"Ukraine",UG:"Uganda",UM:"U.S. Minor Outlying Islands",US:"United States",UY:"Uruguay",UZ:"Uzbekistan",VA:"Vatican City",VC:"Saint Vincent and the Grenadines",VD:"North Vietnam",VE:"Venezuela",VG:"British Virgin Islands",VI:"U.S. Virgin Islands",VN:"Vietnam",VU:"Vanuatu",WF:"Wallis and Futuna",WK:"Wake Island",WS:"Samoa",YD:"People's Democratic Republic of Yemen",YE:"Yemen",YT:"Mayotte",ZA:"South Africa",ZM:"Zambia",ZW:"Zimbabwe",ZZ:"Unknown or Invalid Region" };

			var countriesArray = $.map(countries, function(value, key) {
			  return {
				value: value,
				data: key
			  };
			});

			// initialize autocomplete with custom appendTo
			$('#autocomplete-custom-append').autocomplete({
			  lookup: countriesArray
			});
			
		};
	   
	 /* AUTOSIZE */
			
		function init_autosize() {
			
			if(typeof $.fn.autosize !== 'undefined'){
			
			autosize($('.resizable_textarea'));
			
			}
			
		};  
	   
	   /* PARSLEY */
			
		function init_parsley() {
			
			if( typeof (parsley) === 'undefined'){ return; }
			console.log('init_parsley');
			
			$/*.listen*/('parsley:field:validate', function() {
			  validateFront();
			});
			$('#demo-form .btn').on('click', function() {
			  $('#demo-form').parsley().validate();
			  validateFront();
			});
			var validateFront = function() {
			  if (true === $('#demo-form').parsley().isValid()) {
				$('.bs-callout-info').removeClass('hidden');
				$('.bs-callout-warning').addClass('hidden');
			  } else {
				$('.bs-callout-info').addClass('hidden');
				$('.bs-callout-warning').removeClass('hidden');
			  }
			};
		  
			$/*.listen*/('parsley:field:validate', function() {
			  validateFront();
			});
			$('#demo-form2 .btn').on('click', function() {
			  $('#demo-form2').parsley().validate();
			  validateFront();
			});
			var validateFront = function() {
			  if (true === $('#demo-form2').parsley().isValid()) {
				$('.bs-callout-info').removeClass('hidden');
				$('.bs-callout-warning').addClass('hidden');
			  } else {
				$('.bs-callout-info').addClass('hidden');
				$('.bs-callout-warning').removeClass('hidden');
			  }
			};
			
			  try {
				hljs.initHighlightingOnLoad();
			  } catch (err) {}
			
		};
	   
		
		  /* INPUTS */
		  
			function onAddTag(tag) {
				alert("Added a tag: " + tag);
			  }

			  function onRemoveTag(tag) {
				alert("Removed a tag: " + tag);
			  }

			  function onChangeTag(input, tag) {
				alert("Changed a tag: " + tag);
			  }

			  //tags input
			function init_TagsInput() {
				  
				if(typeof $.fn.tagsInput !== 'undefined'){	
				 
				$('#tags_1').tagsInput({
				  width: 'auto'
				});
				
				}
				
		    };
	   
		/* SELECT2 */
	  
		function init_select2() {
			 
			if( typeof (select2) === 'undefined'){ return; }
			console.log('init_toolbox');
			 
			$(".select2_single").select2({
			  placeholder: "Select a state",
			  allowClear: true
			});
			$(".select2_group").select2({});
			$(".select2_multiple").select2({
			  maximumSelectionLength: 4,
			  placeholder: "With Max Selection limit 4",
			  allowClear: true
			});
			
		};
	   
	   /* WYSIWYG EDITOR */

		function init_wysiwyg() {
			
		if( typeof ($.fn.wysiwyg) === 'undefined'){ return; }
		console.log('init_wysiwyg');	
			
        function init_ToolbarBootstrapBindings() {
          var fonts = ['Serif', 'Sans', 'Arial', 'Arial Black', 'Courier',
              'Courier New', 'Comic Sans MS', 'Helvetica', 'Impact', 'Lucida Grande', 'Lucida Sans', 'Tahoma', 'Times',
              'Times New Roman', 'Verdana'
            ],
            fontTarget = $('[title=Font]').siblings('.dropdown-menu');
          $.each(fonts, function(idx, fontName) {
            fontTarget.append($('<li><a data-edit="fontName ' + fontName + '" style="font-family:\'' + fontName + '\'">' + fontName + '</a></li>'));
          });
          $('a[title]').tooltip({
            container: 'body'
          });
          $('.dropdown-menu input').click(function() {
              return false;
            })
            .change(function() {
              $(this).parent('.dropdown-menu').siblings('.dropdown-toggle').dropdown('toggle');
            })
            .keydown('esc', function() {
              this.value = '';
              $(this).change();
            });

          $('[data-role=magic-overlay]').each(function() {
            var overlay = $(this),
              target = $(overlay.data('target'));
            overlay.css('opacity', 0).css('position', 'absolute').offset(target.offset()).width(target.outerWidth()).height(target.outerHeight());
          });

          if ("onwebkitspeechchange" in document.createElement("input")) {
            var editorOffset = $('#editor').offset();

            $('.voiceBtn').css('position', 'absolute').offset({
              top: editorOffset.top,
              left: editorOffset.left + $('#editor').innerWidth() - 35
            });
          } else {
            $('.voiceBtn').hide();
          }
        }

        function showErrorAlert(reason, detail) {
          var msg = '';
          if (reason === 'unsupported-file-type') {
            msg = "Unsupported format " + detail;
          } else {
            console.log("error uploading file", reason, detail);
          }
          $('<div class="alert"> <button type="button" class="close" data-dismiss="alert">&times;</button>' +
            '<strong>File upload error</strong> ' + msg + ' </div>').prependTo('#alerts');
        }

       $('.editor-wrapper').each(function(){
			var id = $(this).attr('id');	//editor-one
			
			$(this).wysiwyg({
				toolbarSelector: '[data-target="#' + id + '"]',
				fileUploadError: showErrorAlert
			});	
		});
 
		
        window.prettyPrint;
        prettyPrint();
	
    };
	  
	/* CROPPER */
		
		function init_cropper() {
			
			
			if( typeof ($.fn.cropper) === 'undefined'){ return; }
			console.log('init_cropper');
			
			var $image = $('#image');
			var $download = $('#download');
			var $dataX = $('#dataX');
			var $dataY = $('#dataY');
			var $dataHeight = $('#dataHeight');
			var $dataWidth = $('#dataWidth');
			var $dataRotate = $('#dataRotate');
			var $dataScaleX = $('#dataScaleX');
			var $dataScaleY = $('#dataScaleY');
			var options = {
				  aspectRatio: 16 / 9,
				  preview: '.img-preview',
				  crop: function (e) {
					$dataX.val(Math.round(e.x));
					$dataY.val(Math.round(e.y));
					$dataHeight.val(Math.round(e.height));
					$dataWidth.val(Math.round(e.width));
					$dataRotate.val(e.rotate);
					$dataScaleX.val(e.scaleX);
					$dataScaleY.val(e.scaleY);
				  }
				};


			// Tooltip
			$('[data-toggle="tooltip"]').tooltip();


			// Cropper
			$image.on({
			  'build.cropper': function (e) {
				console.log(e.type);
			  },
			  'built.cropper': function (e) {
				console.log(e.type);
			  },
			  'cropstart.cropper': function (e) {
				console.log(e.type, e.action);
			  },
			  'cropmove.cropper': function (e) {
				console.log(e.type, e.action);
			  },
			  'cropend.cropper': function (e) {
				console.log(e.type, e.action);
			  },
			  'crop.cropper': function (e) {
				console.log(e.type, e.x, e.y, e.width, e.height, e.rotate, e.scaleX, e.scaleY);
			  },
			  'zoom.cropper': function (e) {
				console.log(e.type, e.ratio);
			  }
			}).cropper(options);


			// Buttons
			if (!$.isFunction(document.createElement('canvas').getContext)) {
			  $('button[data-method="getCroppedCanvas"]').prop('disabled', true);
			}

			if (typeof document.createElement('cropper').style.transition === 'undefined') {
			  $('button[data-method="rotate"]').prop('disabled', true);
			  $('button[data-method="scale"]').prop('disabled', true);
			}


			// Download
			if (typeof $download[0].download === 'undefined') {
			  $download.addClass('disabled');
			}


			// Options
			$('.docs-toggles').on('change', 'input', function () {
			  var $this = $(this);
			  var name = $this.attr('name');
			  var type = $this.prop('type');
			  var cropBoxData;
			  var canvasData;

			  if (!$image.data('cropper')) {
				return;
			  }

			  if (type === 'checkbox') {
				options[name] = $this.prop('checked');
				cropBoxData = $image.cropper('getCropBoxData');
				canvasData = $image.cropper('getCanvasData');

				options.built = function () {
				  $image.cropper('setCropBoxData', cropBoxData);
				  $image.cropper('setCanvasData', canvasData);
				};
			  } else if (type === 'radio') {
				options[name] = $this.val();
			  }

			  $image.cropper('destroy').cropper(options);
			});


			// Methods
			$('.docs-buttons').on('click', '[data-method]', function () {
			  var $this = $(this);
			  var data = $this.data();
			  var $target;
			  var result;

			  if ($this.prop('disabled') || $this.hasClass('disabled')) {
				return;
			  }

			  if ($image.data('cropper') && data.method) {
				data = $.extend({}, data); // Clone a new one

				if (typeof data.target !== 'undefined') {
				  $target = $(data.target);

				  if (typeof data.option === 'undefined') {
					try {
					  data.option = JSON.parse($target.val());
					} catch (e) {
					  console.log(e.message);
					}
				  }
				}

				result = $image.cropper(data.method, data.option, data.secondOption);

				switch (data.method) {
				  case 'scaleX':
				  case 'scaleY':
					$(this).data('option', -data.option);
					break;

				  case 'getCroppedCanvas':
					if (result) {

					  // Bootstrap's Modal
					  $('#getCroppedCanvasModal').modal().find('.modal-body').html(result);

					  if (!$download.hasClass('disabled')) {
						$download.attr('href', result.toDataURL());
					  }
					}

					break;
				}

				if ($.isPlainObject(result) && $target) {
				  try {
					$target.val(JSON.stringify(result));
				  } catch (e) {
					console.log(e.message);
				  }
				}

			  }
			});

			// Keyboard
			$(document.body).on('keydown', function (e) {
			  if (!$image.data('cropper') || this.scrollTop > 300) {
				return;
			  }

			  switch (e.which) {
				case 37:
				  e.preventDefault();
				  $image.cropper('move', -1, 0);
				  break;

				case 38:
				  e.preventDefault();
				  $image.cropper('move', 0, -1);
				  break;

				case 39:
				  e.preventDefault();
				  $image.cropper('move', 1, 0);
				  break;

				case 40:
				  e.preventDefault();
				  $image.cropper('move', 0, 1);
				  break;
			  }
			});

			// Import image
			var $inputImage = $('#inputImage');
			var URL = window.URL || window.webkitURL;
			var blobURL;

			if (URL) {
			  $inputImage.change(function () {
				var files = this.files;
				var file;

				if (!$image.data('cropper')) {
				  return;
				}

				if (files && files.length) {
				  file = files[0];

				  if (/^image\/\w+$/.test(file.type)) {
					blobURL = URL.createObjectURL(file);
					$image.one('built.cropper', function () {

					  // Revoke when load complete
					  URL.revokeObjectURL(blobURL);
					}).cropper('reset').cropper('replace', blobURL);
					$inputImage.val('');
				  } else {
					window.alert('Please choose an image file.');
				  }
				}
			  });
			} else {
			  $inputImage.prop('disabled', true).parent().addClass('disabled');
			}
			
			
		};
		
		/* CROPPER --- end */  
	  
		/* KNOB */
	  
		function init_knob() {
		
				if( typeof ($.fn.knob) === 'undefined'){ return; }
				console.log('init_knob');
	
				$(".knob").knob({
				  change: function(value) {
					//console.log("change : " + value);
				  },
				  release: function(value) {
					//console.log(this.$.attr('value'));
					console.log("release : " + value);
				  },
				  cancel: function() {
					console.log("cancel : ", this);
				  },
				  /*format : function (value) {
				   return value + '%';
				   },*/
				  draw: function() {

					// "tron" case
					if (this.$.data('skin') == 'tron') {

					  this.cursorExt = 0.3;

					  var a = this.arc(this.cv) // Arc
						,
						pa // Previous arc
						, r = 1;

					  this.g.lineWidth = this.lineWidth;

					  if (this.o.displayPrevious) {
						pa = this.arc(this.v);
						this.g.beginPath();
						this.g.strokeStyle = this.pColor;
						this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, pa.s, pa.e, pa.d);
						this.g.stroke();
					  }

					  this.g.beginPath();
					  this.g.strokeStyle = r ? this.o.fgColor : this.fgColor;
					  this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, a.s, a.e, a.d);
					  this.g.stroke();

					  this.g.lineWidth = 2;
					  this.g.beginPath();
					  this.g.strokeStyle = this.o.fgColor;
					  this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
					  this.g.stroke();

					  return false;
					}
				  }
				  
				});

				// Example of infinite knob, iPod click wheel
				var v, up = 0,
				  down = 0,
				  i = 0,
				  $idir = $("div.idir"),
				  $ival = $("div.ival"),
				  incr = function() {
					i++;
					$idir.show().html("+").fadeOut();
					$ival.html(i);
				  },
				  decr = function() {
					i--;
					$idir.show().html("-").fadeOut();
					$ival.html(i);
				  };
				$("input.infinite").knob({
				  min: 0,
				  max: 20,
				  stopper: false,
				  change: function() {
					if (v > this.cv) {
					  if (up) {
						decr();
						up = 0;
					  } else {
						up = 1;
						down = 0;
					  }
					} else {
					  if (v < this.cv) {
						if (down) {
						  incr();
						  down = 0;
						} else {
						  down = 1;
						  up = 0;
						}
					  }
					}
					v = this.cv;
				  }
				});
				
		};
	 
		/* INPUT MASK */
			
		function init_InputMask() {
			
			if( typeof ($.fn.inputmask) === 'undefined'){ return; }
			console.log('init_InputMask');
			
				$(":input").inputmask();
				
		};
	  
		/* COLOR PICKER */
			 
		function init_ColorPicker() {
			
			if( typeof ($.fn.colorpicker) === 'undefined'){ return; }
			console.log('init_ColorPicker');
			
				$('.demo1').colorpicker();
				$('.demo2').colorpicker();

				$('#demo_forceformat').colorpicker({
					format: 'rgba',
					horizontal: true
				});

				$('#demo_forceformat3').colorpicker({
					format: 'rgba',
				});

				$('.demo-auto').colorpicker();
			
		}; 
	   
	   
		/* ION RANGE SLIDER */
			
		function init_IonRangeSlider() {
			
			if( typeof ($.fn.ionRangeSlider) === 'undefined'){ return; }
			console.log('init_IonRangeSlider');
			
			$("#range_27").ionRangeSlider({
			  type: "double",
			  min: 1000000,
			  max: 2000000,
			  grid: true,
			  force_edges: true
			});
			$("#range").ionRangeSlider({
			  hide_min_max: true,
			  keyboard: true,
			  min: 0,
			  max: 5000,
			  from: 1000,
			  to: 4000,
			  type: 'double',
			  step: 1,
			  prefix: "$",
			  grid: true
			});
			$("#range_25").ionRangeSlider({
			  type: "double",
			  min: 1000000,
			  max: 2000000,
			  grid: true
			});
			$("#range_26").ionRangeSlider({
			  type: "double",
			  min: 0,
			  max: 10000,
			  step: 500,
			  grid: true,
			  grid_snap: true
			});
			$("#range_31").ionRangeSlider({
			  type: "double",
			  min: 0,
			  max: 100,
			  from: 30,
			  to: 70,
			  from_fixed: true
			});
			$(".range_min_max").ionRangeSlider({
			  type: "double",
			  min: 0,
			  max: 100,
			  from: 30,
			  to: 70,
			  max_interval: 50
			});
			$(".range_time24").ionRangeSlider({
			  min: +moment().subtract(12, "hours").format("X"),
			  max: +moment().format("X"),
			  from: +moment().subtract(6, "hours").format("X"),
			  grid: true,
			  force_edges: true,
			  prettify: function(num) {
				var m = moment(num, "X");
				return m.format("Do MMMM, HH:mm");
			  }
			});
			
		};
	   
	   
	   /* DATERANGEPICKER */
	   
		function init_daterangepicker() {

			if( typeof ($.fn.daterangepicker) === 'undefined'){ return; }
			console.log('init_daterangepicker');
		
			var cb = function(start, end, label) {
			  console.log(start.toISOString(), end.toISOString(), label);
			  $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
			};

			var optionSet1 = {
			  startDate: moment().subtract(29, 'days'),
			  endDate: moment(),
			  minDate: '01/01/2012',
			  maxDate: '12/31/2015',
			  dateLimit: {
				days: 60
			  },
			  showDropdowns: true,
			  showWeekNumbers: true,
			  timePicker: false,
			  timePickerIncrement: 1,
			  timePicker12Hour: true,
			  ranges: {
				'Today': [moment(), moment()],
				'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
				'Last 7 Days': [moment().subtract(6, 'days'), moment()],
				'Last 30 Days': [moment().subtract(29, 'days'), moment()],
				'This Month': [moment().startOf('month'), moment().endOf('month')],
				'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
			  },
			  opens: 'left',
			  buttonClasses: ['btn btn-default'],
			  applyClass: 'btn-small btn-primary',
			  cancelClass: 'btn-small',
			  format: 'MM/DD/YYYY',
			  separator: ' to ',
			  locale: {
				applyLabel: 'Submit',
				cancelLabel: 'Clear',
				fromLabel: 'From',
				toLabel: 'To',
				customRangeLabel: 'Custom',
				daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
				monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
				firstDay: 1
			  }
			};
			
			$('#reportrange span').html(moment().subtract(29, 'days').format('MMMM D, YYYY') + ' - ' + moment().format('MMMM D, YYYY'));
			$('#reportrange').daterangepicker(optionSet1, cb);
			$('#reportrange').on('show.daterangepicker', function() {
			  console.log("show event fired");
			});
			$('#reportrange').on('hide.daterangepicker', function() {
			  console.log("hide event fired");
			});
			$('#reportrange').on('apply.daterangepicker', function(ev, picker) {
			  console.log("apply event fired, start/end dates are " + picker.startDate.format('MMMM D, YYYY') + " to " + picker.endDate.format('MMMM D, YYYY'));
			});
			$('#reportrange').on('cancel.daterangepicker', function(ev, picker) {
			  console.log("cancel event fired");
			});
			$('#options1').click(function() {
			  $('#reportrange').data('daterangepicker').setOptions(optionSet1, cb);
			});
			$('#options2').click(function() {
			  $('#reportrange').data('daterangepicker').setOptions(optionSet2, cb);
			});
			$('#destroy').click(function() {
			  $('#reportrange').data('daterangepicker').remove();
			});
   
		}
   	   
	   function init_daterangepicker_right() {
	      
				if( typeof ($.fn.daterangepicker) === 'undefined'){ return; }
				console.log('init_daterangepicker_right');
		  
				var cb = function(start, end, label) {
				  console.log(start.toISOString(), end.toISOString(), label);
				  $('#reportrange_right span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
				};

				var optionSet1 = {
				  startDate: moment().subtract(29, 'days'),
				  endDate: moment(),
				  minDate: '01/01/2012',
				  maxDate: '12/31/2020',
				  dateLimit: {
					days: 60
				  },
				  showDropdowns: true,
				  showWeekNumbers: true,
				  timePicker: false,
				  timePickerIncrement: 1,
				  timePicker12Hour: true,
				  ranges: {
					'Today': [moment(), moment()],
					'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
					'Last 7 Days': [moment().subtract(6, 'days'), moment()],
					'Last 30 Days': [moment().subtract(29, 'days'), moment()],
					'This Month': [moment().startOf('month'), moment().endOf('month')],
					'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
				  },
				  opens: 'right',
				  buttonClasses: ['btn btn-default'],
				  applyClass: 'btn-small btn-primary',
				  cancelClass: 'btn-small',
				  format: 'MM/DD/YYYY',
				  separator: ' to ',
				  locale: {
					applyLabel: 'Submit',
					cancelLabel: 'Clear',
					fromLabel: 'From',
					toLabel: 'To',
					customRangeLabel: 'Custom',
					daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
					monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
					firstDay: 1
				  }
				};

				$('#reportrange_right span').html(moment().subtract(29, 'days').format('MMMM D, YYYY') + ' - ' + moment().format('MMMM D, YYYY'));

				$('#reportrange_right').daterangepicker(optionSet1, cb);

				$('#reportrange_right').on('show.daterangepicker', function() {
				  console.log("show event fired");
				});
				$('#reportrange_right').on('hide.daterangepicker', function() {
				  console.log("hide event fired");
				});
				$('#reportrange_right').on('apply.daterangepicker', function(ev, picker) {
				  console.log("apply event fired, start/end dates are " + picker.startDate.format('MMMM D, YYYY') + " to " + picker.endDate.format('MMMM D, YYYY'));
				});
				$('#reportrange_right').on('cancel.daterangepicker', function(ev, picker) {
				  console.log("cancel event fired");
				});

				$('#options1').click(function() {
				  $('#reportrange_right').data('daterangepicker').setOptions(optionSet1, cb);
				});

				$('#options2').click(function() {
				  $('#reportrange_right').data('daterangepicker').setOptions(optionSet2, cb);
				});

				$('#destroy').click(function() {
				  $('#reportrange_right').data('daterangepicker').remove();
				});

	   }
	   
	    function init_daterangepicker_single_call() {
	      
			if( typeof ($.fn.daterangepicker) === 'undefined'){ return; }
			console.log('init_daterangepicker_single_call');
		   
			$('#single_cal1').daterangepicker({
			  singleDatePicker: true,
			  singleClasses: "picker_1"
			}, function(start, end, label) {
			  console.log(start.toISOString(), end.toISOString(), label);
			});
			$('#single_cal2').daterangepicker({
			  singleDatePicker: true,
			  singleClasses: "picker_2"
			}, function(start, end, label) {
			  console.log(start.toISOString(), end.toISOString(), label);
			});
			$('#single_cal3').daterangepicker({
			  singleDatePicker: true,
			  singleClasses: "picker_3"
			}, function(start, end, label) {
			  console.log(start.toISOString(), end.toISOString(), label);
			});
			$('#single_cal4').daterangepicker({
			  singleDatePicker: true,
			  singleClasses: "picker_4"
			}, function(start, end, label) {
			  console.log(start.toISOString(), end.toISOString(), label);
			});
  
  
		}
		
		 
		function init_daterangepicker_reservation() {
	      
			if( typeof ($.fn.daterangepicker) === 'undefined'){ return; }
			console.log('init_daterangepicker_reservation');
		 
			$('#reservation').daterangepicker(null, function(start, end, label) {
			  console.log(start.toISOString(), end.toISOString(), label);
			});

			$('#reservation-time').daterangepicker({
			  timePicker: true,
			  timePickerIncrement: 30,
			  locale: {
				format: 'MM/DD/YYYY h:mm A'
			  }
			});
	
		}
	   
	   /* SMART WIZARD */
		
		function init_SmartWizard() {
			
			if( typeof ($.fn.smartWizard) === 'undefined'){ return; }
			console.log('init_SmartWizard');
			
			$('#wizard').smartWizard();

			$('#wizard_verticle').smartWizard({
			  transitionEffect: 'slide'
			});

			$('.buttonNext').addClass('btn btn-success');
			$('.buttonPrevious').addClass('btn btn-primary');
			$('.buttonFinish').addClass('btn btn-default');
			
		};
	   
	   
	  /* VALIDATOR */

	  function init_validator () {
		 
		if( typeof (validator) === 'undefined'){ return; }
		console.log('init_validator'); 
	  
	  // initialize the validator function
      validator.message.date = 'not a real date';

      // validate a field on "blur" event, a 'select' on 'change' event & a '.reuired' classed multifield on 'keyup':
      $('form')
        .on('blur', 'input[required], input.optional, select.required', validator.checkField)
        .on('change', 'select.required', validator.checkField)
        .on('keypress', 'input[required][pattern]', validator.keypress);

      $('.multi.required').on('keyup blur', 'input', function() {
        validator.checkField.apply($(this).siblings().last()[0]);
      });

      $('form').submit(function(e) {
        e.preventDefault();
        var submit = true;

        // evaluate the form using generic validaing
        if (!validator.checkAll($(this))) {
          submit = false;
        }

        if (submit)
          this.submit();

        return false;
		});
	  
	  };
	   
	  	/* PNotify */
			
		function init_PNotify() {
			
			if( typeof (PNotify) === 'undefined'){ return; }
			console.log('init_PNotify');
			
			//new PNotify({
			//  title: "PNotify",
			//  type: "info",
			//  text: "Welcome. Try hovering over me. You can click things behind me, because I'm non-blocking.",
			//  nonblock: {
			//	  nonblock: true
			//  },
			//  addclass: 'dark',
			//  styling: 'bootstrap3',
			//  hide: false,
			//  before_close: function(PNotify) {
			//	PNotify.update({
			//	  title: PNotify.options.title + " - Enjoy your Stay",
			//	  before_close: null
			//	});
//
			//	PNotify.queueRemove();
//
			//	return false;
			//  }
			//});

		}; 
	   
	   
	   /* CUSTOM NOTIFICATION */
			
		function init_CustomNotification() {
			
			console.log('run_customtabs');
			
			if( typeof (CustomTabs) === 'undefined'){ return; }
			console.log('init_CustomTabs');
			
			var cnt = 10;

			TabbedNotification = function(options) {
			  var message = "<div id='ntf" + cnt + "' class='text alert-" + options.type + "' style='display:none'><h2><i class='fa fa-bell'></i> " + options.title +
				"</h2><div class='close'><a href='javascript:;' class='notification_close'><i class='fa fa-close'></i></a></div><p>" + options.text + "</p></div>";

			  if (!document.getElementById('custom_notifications')) {
				alert('doesnt exists');
			  } else {
				$('#custom_notifications ul.notifications').append("<li><a id='ntlink" + cnt + "' class='alert-" + options.type + "' href='#ntf" + cnt + "'><i class='fa fa-bell animated shake'></i></a></li>");
				$('#custom_notifications #notif-group').append(message);
				cnt++;
				CustomTabs(options);
			  }
			};

			CustomTabs = function(options) {
			  $('.tabbed_notifications > div').hide();
			  $('.tabbed_notifications > div:first-of-type').show();
			  $('#custom_notifications').removeClass('dsp_none');
			  $('.notifications a').click(function(e) {
				e.preventDefault();
				var $this = $(this),
				  tabbed_notifications = '#' + $this.parents('.notifications').data('tabbed_notifications'),
				  others = $this.closest('li').siblings().children('a'),
				  target = $this.attr('href');
				others.removeClass('active');
				$this.addClass('active');
				$(tabbed_notifications).children('div').hide();
				$(target).show();
			  });
			};

			CustomTabs();

			var tabid = idname = '';

			$(document).on('click', '.notification_close', function(e) {
			  idname = $(this).parent().parent().attr("id");
			  tabid = idname.substr(-2);
			  $('#ntf' + tabid).remove();
			  $('#ntlink' + tabid).parent().remove();
			  $('.notifications a').first().addClass('active');
			  $('#notif-group div').first().css('display', 'block');
			});
			
		};
		
			/* EASYPIECHART */
			
			function init_EasyPieChart() {
				
				if( typeof ($.fn.easyPieChart) === 'undefined'){ return; }
				console.log('init_EasyPieChart');
				
				$('.chart').easyPieChart({
				  easing: 'easeOutElastic',
				  delay: 3000,
				  barColor: '#26B99A',
				  trackColor: '#fff',
				  scaleColor: false,
				  lineWidth: 20,
				  trackWidth: 16,
				  lineCap: 'butt',
				  onStep: function(from, to, percent) {
					$(this.el).find('.percent').text(Math.round(percent));
				  }
				});
				var chart = window.chart = $('.chart').data('easyPieChart');
				$('.js_update').on('click', function() {
				  chart.update(Math.random() * 200 - 100);
				});

				//hover and retain popover when on popover content
				var originalLeave = $.fn.popover.Constructor.prototype.leave;
				$.fn.popover.Constructor.prototype.leave = function(obj) {
				  var self = obj instanceof this.constructor ?
					obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type);
				  var container, timeout;

				  originalLeave.call(this, obj);

				  if (obj.currentTarget) {
					container = $(obj.currentTarget).siblings('.popover');
					timeout = self.timeout;
					container.one('mouseenter', function() {
					  //We entered the actual popover – call off the dogs
					  clearTimeout(timeout);
					  //Let's monitor popover content instead
					  container.one('mouseleave', function() {
						$.fn.popover.Constructor.prototype.leave.call(self, self);
					  });
					});
				  }
				};

				$('body').popover({
				  selector: '[data-popover]',
				  trigger: 'click hover',
				  delay: {
					show: 50,
					hide: 400
				  }
				});
				
			};
	   
		
		function init_charts() {
			
				console.log('run_charts  typeof [' + typeof (Chart) + ']');
			
				if( typeof (Chart) === 'undefined'){ return; }
				
				console.log('init_charts');
			
				
				Chart.defaults.global.legend = {
					enabled: false
				};
				
				

			if ($('#canvas_line').length ){
				
				var canvas_line_00 = new Chart(document.getElementById("canvas_line"), {
				  type: 'line',
				  data: {
					labels: ["January", "February", "March", "April", "May", "June", "July"],
					datasets: [{
					  label: "My First dataset",
					  backgroundColor: "rgba(38, 185, 154, 0.31)",
					  borderColor: "rgba(38, 185, 154, 0.7)",
					  pointBorderColor: "rgba(38, 185, 154, 0.7)",
					  pointBackgroundColor: "rgba(38, 185, 154, 0.7)",
					  pointHoverBackgroundColor: "#fff",
					  pointHoverBorderColor: "rgba(220,220,220,1)",
					  pointBorderWidth: 1,
					  data: [31, 74, 6, 39, 20, 85, 7]
					}, {
					  label: "My Second dataset",
					  backgroundColor: "rgba(3, 88, 106, 0.3)",
					  borderColor: "rgba(3, 88, 106, 0.70)",
					  pointBorderColor: "rgba(3, 88, 106, 0.70)",
					  pointBackgroundColor: "rgba(3, 88, 106, 0.70)",
					  pointHoverBackgroundColor: "#fff",
					  pointHoverBorderColor: "rgba(151,187,205,1)",
					  pointBorderWidth: 1,
					  data: [82, 23, 66, 9, 99, 4, 2]
					}]
				  },
				});
				
			}

			
			if ($('#canvas_line1').length ){
			
				var canvas_line_01 = new Chart(document.getElementById("canvas_line1"), {
				  type: 'line',
				  data: {
					labels: ["January", "February", "March", "April", "May", "June", "July"],
					datasets: [{
					  label: "My First dataset",
					  backgroundColor: "rgba(38, 185, 154, 0.31)",
					  borderColor: "rgba(38, 185, 154, 0.7)",
					  pointBorderColor: "rgba(38, 185, 154, 0.7)",
					  pointBackgroundColor: "rgba(38, 185, 154, 0.7)",
					  pointHoverBackgroundColor: "#fff",
					  pointHoverBorderColor: "rgba(220,220,220,1)",
					  pointBorderWidth: 1,
					  data: [31, 74, 6, 39, 20, 85, 7]
					}, {
					  label: "My Second dataset",
					  backgroundColor: "rgba(3, 88, 106, 0.3)",
					  borderColor: "rgba(3, 88, 106, 0.70)",
					  pointBorderColor: "rgba(3, 88, 106, 0.70)",
					  pointBackgroundColor: "rgba(3, 88, 106, 0.70)",
					  pointHoverBackgroundColor: "#fff",
					  pointHoverBorderColor: "rgba(151,187,205,1)",
					  pointBorderWidth: 1,
					  data: [82, 23, 66, 9, 99, 4, 2]
					}]
				  },
				});
			
			}
				
				
			if ($('#canvas_line2').length ){		
			
				var canvas_line_02 = new Chart(document.getElementById("canvas_line2"), {
				  type: 'line',
				  data: {
					labels: ["January", "February", "March", "April", "May", "June", "July"],
					datasets: [{
					  label: "My First dataset",
					  backgroundColor: "rgba(38, 185, 154, 0.31)",
					  borderColor: "rgba(38, 185, 154, 0.7)",
					  pointBorderColor: "rgba(38, 185, 154, 0.7)",
					  pointBackgroundColor: "rgba(38, 185, 154, 0.7)",
					  pointHoverBackgroundColor: "#fff",
					  pointHoverBorderColor: "rgba(220,220,220,1)",
					  pointBorderWidth: 1,
					  data: [31, 74, 6, 39, 20, 85, 7]
					}, {
					  label: "My Second dataset",
					  backgroundColor: "rgba(3, 88, 106, 0.3)",
					  borderColor: "rgba(3, 88, 106, 0.70)",
					  pointBorderColor: "rgba(3, 88, 106, 0.70)",
					  pointBackgroundColor: "rgba(3, 88, 106, 0.70)",
					  pointHoverBackgroundColor: "#fff",
					  pointHoverBorderColor: "rgba(151,187,205,1)",
					  pointBorderWidth: 1,
					  data: [82, 23, 66, 9, 99, 4, 2]
					}]
				  },
				});

			}	
			
			
			if ($('#canvas_line3').length ){
			
				var canvas_line_03 = new Chart(document.getElementById("canvas_line3"), {
				  type: 'line',
				  data: {
					labels: ["January", "February", "March", "April", "May", "June", "July"],
					datasets: [{
					  label: "My First dataset",
					  backgroundColor: "rgba(38, 185, 154, 0.31)",
					  borderColor: "rgba(38, 185, 154, 0.7)",
					  pointBorderColor: "rgba(38, 185, 154, 0.7)",
					  pointBackgroundColor: "rgba(38, 185, 154, 0.7)",
					  pointHoverBackgroundColor: "#fff",
					  pointHoverBorderColor: "rgba(220,220,220,1)",
					  pointBorderWidth: 1,
					  data: [31, 74, 6, 39, 20, 85, 7]
					}, {
					  label: "My Second dataset",
					  backgroundColor: "rgba(3, 88, 106, 0.3)",
					  borderColor: "rgba(3, 88, 106, 0.70)",
					  pointBorderColor: "rgba(3, 88, 106, 0.70)",
					  pointBackgroundColor: "rgba(3, 88, 106, 0.70)",
					  pointHoverBackgroundColor: "#fff",
					  pointHoverBorderColor: "rgba(151,187,205,1)",
					  pointBorderWidth: 1,
					  data: [82, 23, 66, 9, 99, 4, 2]
					}]
				  },
				});

			}	
			
			
			if ($('#canvas_line4').length ){
				
				var canvas_line_04 = new Chart(document.getElementById("canvas_line4"), {
				  type: 'line',
				  data: {
					labels: ["January", "February", "March", "April", "May", "June", "July"],
					datasets: [{
					  label: "My First dataset",
					  backgroundColor: "rgba(38, 185, 154, 0.31)",
					  borderColor: "rgba(38, 185, 154, 0.7)",
					  pointBorderColor: "rgba(38, 185, 154, 0.7)",
					  pointBackgroundColor: "rgba(38, 185, 154, 0.7)",
					  pointHoverBackgroundColor: "#fff",
					  pointHoverBorderColor: "rgba(220,220,220,1)",
					  pointBorderWidth: 1,
					  data: [31, 74, 6, 39, 20, 85, 7]
					}, {
					  label: "My Second dataset",
					  backgroundColor: "rgba(3, 88, 106, 0.3)",
					  borderColor: "rgba(3, 88, 106, 0.70)",
					  pointBorderColor: "rgba(3, 88, 106, 0.70)",
					  pointBackgroundColor: "rgba(3, 88, 106, 0.70)",
					  pointHoverBackgroundColor: "#fff",
					  pointHoverBorderColor: "rgba(151,187,205,1)",
					  pointBorderWidth: 1,
					  data: [82, 23, 66, 9, 99, 4, 2]
					}]
				  },
				});		
				
			}
			
				
			  // Line chart
			 
			if ($('#lineChart').length ){	
			
			  var ctx = document.getElementById("lineChart");
			  var lineChart = new Chart(ctx, {
				type: 'line',
				data: {
				  labels: ["January", "February", "March", "April", "May", "June", "July"],
				  datasets: [{
					label: "My First dataset",
					backgroundColor: "rgba(38, 185, 154, 0.31)",
					borderColor: "rgba(38, 185, 154, 0.7)",
					pointBorderColor: "rgba(38, 185, 154, 0.7)",
					pointBackgroundColor: "rgba(38, 185, 154, 0.7)",
					pointHoverBackgroundColor: "#fff",
					pointHoverBorderColor: "rgba(220,220,220,1)",
					pointBorderWidth: 1,
					data: [31, 74, 6, 39, 20, 85, 7]
				  }, {
					label: "My Second dataset",
					backgroundColor: "rgba(3, 88, 106, 0.3)",
					borderColor: "rgba(3, 88, 106, 0.70)",
					pointBorderColor: "rgba(3, 88, 106, 0.70)",
					pointBackgroundColor: "rgba(3, 88, 106, 0.70)",
					pointHoverBackgroundColor: "#fff",
					pointHoverBorderColor: "rgba(151,187,205,1)",
					pointBorderWidth: 1,
					data: [82, 23, 66, 9, 99, 4, 2]
				  }]
				},
			  });
			
			}
				
			  // Bar chart
			  
			if ($('#mybarChart').length ){ 
			  
			  var ctx = document.getElementById("mybarChart");
			  var mybarChart = new Chart(ctx, {
				type: 'bar',
				data: {
				  labels: ["January", "February", "March", "April", "May", "June", "July"],
				  datasets: [{
					label: '# of Votes',
					backgroundColor: "#26B99A",
					data: [51, 30, 40, 28, 92, 50, 45]
				  }, {
					label: '# of Votes',
					backgroundColor: "#03586A",
					data: [41, 56, 25, 48, 72, 34, 12]
				  }]
				},

				options: {
				  scales: {
					yAxes: [{
					  ticks: {
						beginAtZero: true
					  }
					}]
				  }
				}
			  });
			  
			} 
			  

			  // Doughnut chart
			  
			if ($('#canvasDoughnut').length ){ 
			  
			  var ctx = document.getElementById("canvasDoughnut");
			  var data = {
				labels: [
				  "Dark Grey",
				  "Purple Color",
				  "Gray Color",
				  "Green Color",
				  "Blue Color"
				],
				datasets: [{
				  data: [120, 50, 140, 180, 100],
				  backgroundColor: [
					"#455C73",
					"#9B59B6",
					"#BDC3C7",
					"#26B99A",
					"#3498DB"
				  ],
				  hoverBackgroundColor: [
					"#34495E",
					"#B370CF",
					"#CFD4D8",
					"#36CAAB",
					"#49A9EA"
				  ]

				}]
			  };

			  var canvasDoughnut = new Chart(ctx, {
				type: 'doughnut',
				tooltipFillColor: "rgba(51, 51, 51, 0.55)",
				data: data
			  });
			 
			} 

			  // Radar chart
			  
			if ($('#canvasRadar').length ){ 
			  
			  var ctx = document.getElementById("canvasRadar");
			  var data = {
				labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
				datasets: [{
				  label: "My First dataset",
				  backgroundColor: "rgba(3, 88, 106, 0.2)",
				  borderColor: "rgba(3, 88, 106, 0.80)",
				  pointBorderColor: "rgba(3, 88, 106, 0.80)",
				  pointBackgroundColor: "rgba(3, 88, 106, 0.80)",
				  pointHoverBackgroundColor: "#fff",
				  pointHoverBorderColor: "rgba(220,220,220,1)",
				  data: [65, 59, 90, 81, 56, 55, 40]
				}, {
				  label: "My Second dataset",
				  backgroundColor: "rgba(38, 185, 154, 0.2)",
				  borderColor: "rgba(38, 185, 154, 0.85)",
				  pointColor: "rgba(38, 185, 154, 0.85)",
				  pointStrokeColor: "#fff",
				  pointHighlightFill: "#fff",
				  pointHighlightStroke: "rgba(151,187,205,1)",
				  data: [28, 48, 40, 19, 96, 27, 100]
				}]
			  };

			  var canvasRadar = new Chart(ctx, {
				type: 'radar',
				data: data,
			  });
			
			}
			
			
			  // Pie chart
			  if ($('#pieChart').length ){
				  
				  var ctx = document.getElementById("pieChart");
				  var data = {
					datasets: [{
					  data: [120, 50, 140, 180, 100],
					  backgroundColor: [
						"#455C73",
						"#9B59B6",
						"#BDC3C7",
						"#26B99A",
						"#3498DB"
					  ],
					  label: 'My dataset' // for legend
					}],
					labels: [
					  "Dark Gray",
					  "Purple",
					  "Gray",
					  "Green",
					  "Blue"
					]
				  };

				  var pieChart = new Chart(ctx, {
					data: data,
					type: 'pie',
					otpions: {
					  legend: false
					}
				  });
				  
			  }
			
			  
			  // PolarArea chart

			if ($('#polarArea').length ){

				var ctx = document.getElementById("polarArea");
				var data = {
				datasets: [{
				  data: [120, 50, 140, 180, 100],
				  backgroundColor: [
					"#455C73",
					"#9B59B6",
					"#BDC3C7",
					"#26B99A",
					"#3498DB"
				  ],
				  label: 'My dataset'
				}],
				labels: [
				  "Dark Gray",
				  "Purple",
				  "Gray",
				  "Green",
				  "Blue"
				]
				};

				var polarArea = new Chart(ctx, {
				data: data,
				type: 'polarArea',
				options: {
				  scale: {
					ticks: {
					  beginAtZero: true
					}
				  }
				}
				});
			
			}
		}

		/* COMPOSE */
		
		function init_compose() {
		
			if( typeof ($.fn.slideToggle) === 'undefined'){ return; }
			console.log('init_compose');
		
			$('#compose, .compose-close').click(function(){
				$('.compose').slideToggle();
			});
		
		};
	   
	   	/* CALENDAR */
		  
		    function  init_calendar() {
					
				if( typeof ($.fn.fullCalendar) === 'undefined'){ return; }
				console.log('init_calendar');
					
				var date = new Date(),
					d = date.getDate(),
					m = date.getMonth(),
					y = date.getFullYear(),
					started,
					categoryClass;

				var calendar = $('#calendar').fullCalendar({
				  header: {
					left: 'prev,next today',
					center: 'title',
					right: 'month,agendaWeek,agendaDay,listMonth'
				  },
				  selectable: true,
				  selectHelper: true,
				  select: function(start, end, allDay) {
					$('#fc_create').click();

					started = start;
					ended = end;

					$(".antosubmit").on("click", function() {
					  var title = $("#title").val();
					  if (end) {
						ended = end;
					  }

					  categoryClass = $("#event_type").val();

					  if (title) {
						calendar.fullCalendar('renderEvent', {
							title: title,
							start: started,
							end: end,
							allDay: allDay
						  },
						  true // make the event "stick"
						);
					  }

					  $('#title').val('');

					  calendar.fullCalendar('unselect');

					  $('.antoclose').click();

					  return false;
					});
				  },
				  eventClick: function(calEvent, jsEvent, view) {
					$('#fc_edit').click();
					$('#title2').val(calEvent.title);

					categoryClass = $("#event_type").val();

					$(".antosubmit2").on("click", function() {
					  calEvent.title = $("#title2").val();

					  calendar.fullCalendar('updateEvent', calEvent);
					  $('.antoclose2').click();
					});

					calendar.fullCalendar('unselect');
				  },
				  editable: true,
				  events: [{
					title: 'All Day Event',
					start: new Date(y, m, 1)
				  }, {
					title: 'Long Event',
					start: new Date(y, m, d - 5),
					end: new Date(y, m, d - 2)
				  }, {
					title: 'Meeting',
					start: new Date(y, m, d, 10, 30),
					allDay: false
				  }, {
					title: 'Lunch',
					start: new Date(y, m, d + 14, 12, 0),
					end: new Date(y, m, d, 14, 0),
					allDay: false
				  }, {
					title: 'Birthday Party',
					start: new Date(y, m, d + 1, 19, 0),
					end: new Date(y, m, d + 1, 22, 30),
					allDay: false
				  }, {
					title: 'Click for Google',
					start: new Date(y, m, 28),
					end: new Date(y, m, 29),
					url: 'http://google.com/'
				  }]
				});
				
			};
	   
		/* DATA TABLES */
			
			function init_DataTables() {
				
				console.log('run_datatables');
				
				if( typeof ($.fn.DataTable) === 'undefined'){ return; }
				console.log('init_DataTables');
				
				var handleDataTableButtons = function() {
				  if ($("#datatable-buttons").length) {
					$("#datatable-buttons").DataTable({
					  dom: "Blfrtip",
					  buttons: [
						{
						  extend: "copy",
						  className: "btn-sm"
						},
						{
						  extend: "csv",
						  className: "btn-sm"
						},
						{
						  extend: "excel",
						  className: "btn-sm"
						},
						{
						  extend: "pdfHtml5",
						  className: "btn-sm"
						},
						{
						  extend: "print",
						  className: "btn-sm"
						},
					  ],
					  responsive: true
					});
				  }
				};

				TableManageButtons = function() {
				  "use strict";
				  return {
					init: function() {
					  handleDataTableButtons();
					}
				  };
				}();

				$('#datatable').dataTable();

				var dataSet = [];
				

				nbQuestionItems.forEach(function (node) {
					var dataItem = [];
					dataItem.push(node.Index);
					dataItem.push(node.questionName);
					dataItem.push(node.answerNum);	
					dataItem.push(node.viewNum);
					dataItem.push(node.hotness);
					dataItem.push(node.time);
					dataSet.push(dataItem);		        
			    });

				$('#datatable-keytable').DataTable({
				  keys: true,
				  data: dataSet,
			        columns: [
			            { title: "Id" },
			            { title: "Question" },
			            { title: "AnswerNum" },
			            { title: "ViewNum" },
			            { title: "Hotness" },
			            { title: "Time" }
			        ]
				});

				$('#datatable-responsive').DataTable();

				$('#datatable-scroller').DataTable({
				  ajax: "js/datatables/json/scroller-demo.json",
				  deferRender: true,
				  scrollY: 380,
				  scrollCollapse: true,
				  scroller: true
				});

				$('#datatable-fixed-header').DataTable({
				  fixedHeader: true
				});

				var $datatable = $('#datatable-checkbox');

				$datatable.dataTable({
				  'order': [[ 1, 'asc' ]],
				  'columnDefs': [
					{ orderable: false, targets: [0] }
				  ]
				});
				$datatable.on('draw.dt', function() {
				  $('checkbox input').iCheck({
					checkboxClass: 'icheckbox_flat-green'
				  });
				});

				TableManageButtons.init();
				//alert("initial the table")
				
			};
	   
			/* CHART - MORRIS  */
		
		function init_morris_charts() {
			
			if( typeof (Morris) === 'undefined'){ return; }
			console.log('init_morris_charts');
			
			if ($('#graph_bar').length){ 
			
				Morris.Bar({
				  element: 'graph_bar',
				  data: [
					{device: 'iPhone 4', geekbench: 380},
					{device: 'iPhone 4S', geekbench: 655},
					{device: 'iPhone 3GS', geekbench: 275},
					{device: 'iPhone 5', geekbench: 1571},
					{device: 'iPhone 5S', geekbench: 655},
					{device: 'iPhone 6', geekbench: 2154},
					{device: 'iPhone 6 Plus', geekbench: 1144},
					{device: 'iPhone 6S', geekbench: 2371},
					{device: 'iPhone 6S Plus', geekbench: 1471},
					{device: 'Other', geekbench: 1371}
				  ],
				  xkey: 'device',
				  ykeys: ['geekbench'],
				  labels: ['Geekbench'],
				  barRatio: 0.4,
				  barColors: ['#26B99A', '#34495E', '#ACADAC', '#3498DB'],
				  xLabelAngle: 35,
				  hideHover: 'auto',
				  resize: true
				});

			}	
			
			if ($('#graph_bar_group').length ){
			
				Morris.Bar({
				  element: 'graph_bar_group',
				  data: [
					{"period": "2016-10-01", "licensed": 807, "sorned": 660},
					{"period": "2016-09-30", "licensed": 1251, "sorned": 729},
					{"period": "2016-09-29", "licensed": 1769, "sorned": 1018},
					{"period": "2016-09-20", "licensed": 2246, "sorned": 1461},
					{"period": "2016-09-19", "licensed": 2657, "sorned": 1967},
					{"period": "2016-09-18", "licensed": 3148, "sorned": 2627},
					{"period": "2016-09-17", "licensed": 3471, "sorned": 3740},
					{"period": "2016-09-16", "licensed": 2871, "sorned": 2216},
					{"period": "2016-09-15", "licensed": 2401, "sorned": 1656},
					{"period": "2016-09-10", "licensed": 2115, "sorned": 1022}
				  ],
				  xkey: 'period',
				  barColors: ['#26B99A', '#34495E', '#ACADAC', '#3498DB'],
				  ykeys: ['licensed', 'sorned'],
				  labels: ['Licensed', 'SORN'],
				  hideHover: 'auto',
				  xLabelAngle: 60,
				  resize: true
				});

			}
			
			if ($('#graphx').length ){
			
				Morris.Bar({
				  element: 'graphx',
				  data: [
					{x: '2015 Q1', y: 2, z: 3, a: 4},
					{x: '2015 Q2', y: 3, z: 5, a: 6},
					{x: '2015 Q3', y: 4, z: 3, a: 2},
					{x: '2015 Q4', y: 2, z: 4, a: 5}
				  ],
				  xkey: 'x',
				  ykeys: ['y', 'z', 'a'],
				  barColors: ['#26B99A', '#34495E', '#ACADAC', '#3498DB'],
				  hideHover: 'auto',
				  labels: ['Y', 'Z', 'A'],
				  resize: true
				}).on('click', function (i, row) {
					console.log(i, row);
				});

			}
			
			if ($('#graph_area').length ){
			
				Morris.Area({
				  element: 'graph_area',
				  data: [
					{period: '2014 Q1', iphone: 2666, ipad: null, itouch: 2647},
					{period: '2014 Q2', iphone: 2778, ipad: 2294, itouch: 2441},
					{period: '2014 Q3', iphone: 4912, ipad: 1969, itouch: 2501},
					{period: '2014 Q4', iphone: 3767, ipad: 3597, itouch: 5689},
					{period: '2015 Q1', iphone: 6810, ipad: 1914, itouch: 2293},
					{period: '2015 Q2', iphone: 5670, ipad: 4293, itouch: 1881},
					{period: '2015 Q3', iphone: 4820, ipad: 3795, itouch: 1588},
					{period: '2015 Q4', iphone: 15073, ipad: 5967, itouch: 5175},
					{period: '2016 Q1', iphone: 10687, ipad: 4460, itouch: 2028},
					{period: '2016 Q2', iphone: 8432, ipad: 5713, itouch: 1791}
				  ],
				  xkey: 'period',
				  ykeys: ['iphone', 'ipad', 'itouch'],
				  lineColors: ['#26B99A', '#34495E', '#ACADAC', '#3498DB'],
				  labels: ['iPhone', 'iPad', 'iPod Touch'],
				  pointSize: 2,
				  hideHover: 'auto',
				  resize: true
				});

			}
			
			if ($('#graph_donut').length ){
			
				Morris.Donut({
				  element: 'graph_donut',
				  data: [
					{label: 'Jam', value: 25},
					{label: 'Frosted', value: 40},
					{label: 'Custard', value: 25},
					{label: 'Sugar', value: 10}
				  ],
				  colors: ['#26B99A', '#34495E', '#ACADAC', '#3498DB'],
				  formatter: function (y) {
					return y + "%";
				  },
				  resize: true
				});

			}
			
			if ($('#graph_line').length ){
			
				Morris.Line({
				  element: 'graph_line',
				  xkey: 'year',
				  ykeys: ['value'],
				  labels: ['Value'],
				  hideHover: 'auto',
				  lineColors: ['#26B99A', '#34495E', '#ACADAC', '#3498DB'],
				  data: [
					{year: '2012', value: 20},
					{year: '2013', value: 10},
					{year: '2014', value: 5},
					{year: '2015', value: 5},
					{year: '2016', value: 20}
				  ],
				  resize: true
				});

				$MENU_TOGGLE.on('click', function() {
				  $(window).resize();
				});
			
			}
			
		};
	   
		
		
		/* ECHRTS */
	
		
		function init_echarts() {
		
				if( typeof (echarts) === 'undefined'){ return; }
				console.log('init_echarts');
			
		
				  var theme = {
				  color: [
					  '#26B99A', '#34495E', '#BDC3C7', '#3498DB',
					  '#9B59B6', '#8abb6f', '#759c6a', '#bfd3b7'
				  ],

				  title: {
					  itemGap: 8,
					  textStyle: {
						  fontWeight: 'normal',
						  color: '#408829'
					  }
				  },

				  dataRange: {
					  color: ['#1f610a', '#97b58d']
				  },

				  toolbox: {
					  color: ['#408829', '#408829', '#408829', '#408829']
				  },

				  tooltip: {
					  backgroundColor: 'rgba(0,0,0,0.5)',
					  axisPointer: {
						  type: 'line',
						  lineStyle: {
							  color: '#408829',
							  type: 'dashed'
						  },
						  crossStyle: {
							  color: '#408829'
						  },
						  shadowStyle: {
							  color: 'rgba(200,200,200,0.3)'
						  }
					  }
				  },

				  dataZoom: {
					  dataBackgroundColor: '#eee',
					  fillerColor: 'rgba(64,136,41,0.2)',
					  handleColor: '#408829'
				  },
				  grid: {
					  borderWidth: 0
				  },

				  categoryAxis: {
					  axisLine: {
						  lineStyle: {
							  color: '#408829'
						  }
					  },
					  splitLine: {
						  lineStyle: {
							  color: ['#eee']
						  }
					  }
				  },

				  valueAxis: {
					  axisLine: {
						  lineStyle: {
							  color: '#408829'
						  }
					  },
					  splitArea: {
						  show: true,
						  areaStyle: {
							  color: ['rgba(250,250,250,0.1)', 'rgba(200,200,200,0.1)']
						  }
					  },
					  splitLine: {
						  lineStyle: {
							  color: ['#eee']
						  }
					  }
				  },
				  timeline: {
					  lineStyle: {
						  color: '#408829'
					  },
					  controlStyle: {
						  normal: {color: '#408829'},
						  emphasis: {color: '#408829'}
					  }
				  },

				  k: {
					  itemStyle: {
						  normal: {
							  color: '#68a54a',
							  color0: '#a9cba2',
							  lineStyle: {
								  width: 1,
								  color: '#408829',
								  color0: '#86b379'
							  }
						  }
					  }
				  },
				  map: {
					  itemStyle: {
						  normal: {
							  areaStyle: {
								  color: '#ddd'
							  },
							  label: {
								  textStyle: {
									  color: '#c12e34'
								  }
							  }
						  },
						  emphasis: {
							  areaStyle: {
								  color: '#99d2dd'
							  },
							  label: {
								  textStyle: {
									  color: '#c12e34'
								  }
							  }
						  }
					  }
				  },
				  force: {
					  itemStyle: {
						  normal: {
							  linkStyle: {
								  strokeColor: '#408829'
							  }
						  }
					  }
				  },
				  chord: {
					  padding: 4,
					  itemStyle: {
						  normal: {
							  lineStyle: {
								  width: 1,
								  color: 'rgba(128, 128, 128, 0.5)'
							  },
							  chordStyle: {
								  lineStyle: {
									  width: 1,
									  color: 'rgba(128, 128, 128, 0.5)'
								  }
							  }
						  },
						  emphasis: {
							  lineStyle: {
								  width: 1,
								  color: 'rgba(128, 128, 128, 0.5)'
							  },
							  chordStyle: {
								  lineStyle: {
									  width: 1,
									  color: 'rgba(128, 128, 128, 0.5)'
								  }
							  }
						  }
					  }
				  },
				  gauge: {
					  startAngle: 225,
					  endAngle: -45,
					  axisLine: {
						  show: true,
						  lineStyle: {
							  color: [[0.2, '#86b379'], [0.8, '#68a54a'], [1, '#408829']],
							  width: 8
						  }
					  },
					  axisTick: {
						  splitNumber: 10,
						  length: 12,
						  lineStyle: {
							  color: 'auto'
						  }
					  },
					  axisLabel: {
						  textStyle: {
							  color: 'auto'
						  }
					  },
					  splitLine: {
						  length: 18,
						  lineStyle: {
							  color: 'auto'
						  }
					  },
					  pointer: {
						  length: '90%',
						  color: 'auto'
					  },
					  title: {
						  textStyle: {
							  color: '#333'
						  }
					  },
					  detail: {
						  textStyle: {
							  color: 'auto'
						  }
					  }
				  },
				  textStyle: {
					  fontFamily: 'Arial, Verdana, sans-serif'
				  }
			  };

			  
			  //echart Bar
			  
			if ($('#mainb').length ){
			  
				  var echartBar = echarts.init(document.getElementById('mainb'), theme);
				  alert("in echarts mainb function");

				  echartBar.setOption({
					title: {
					  text: 'Graph title',
					  subtext: 'Graph Sub-text'
					},
					tooltip: {
					  trigger: 'axis'
					},
					legend: {
					  data: ['sales', 'purchases']
					},
					toolbox: {
					  show: false
					},
					calculable: false,
					xAxis: [{
					  type: 'category',
					  data: ['1?', '2?', '3?', '4?', '5?', '6?', '7?', '8?', '9?', '10?', '11?', '12?']
					}],
					yAxis: [{
					  type: 'value'
					}],
					series: [{
					  name: 'sales',
					  type: 'bar',
					  data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
					  markPoint: {
						data: [{
						  type: 'max',
						  name: '???'
						}, {
						  type: 'min',
						  name: '???'
						}]
					  },
					  markLine: {
						data: [{
						  type: 'average',
						  name: '???'
						}]
					  }
					}, {
					  name: 'purchases',
					  type: 'bar',
					  data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
					  markPoint: {
						data: [{
						  name: 'sales',
						  value: 182.2,
						  xAxis: 7,
						  yAxis: 183,
						}, {
						  name: 'purchases',
						  value: 2.3,
						  xAxis: 11,
						  yAxis: 3
						}]
					  },
					  markLine: {
						data: [{
						  type: 'average',
						  name: '???'
						}]
					  }
					}]
				  });

			}
			  
			  //echart Force

			if ($('#echart_force'.length)){
				var echartForce = echarts.init(document.getElementById('echart_force'), theme);

				var categories = [{"name":"topic"},{"name":"question"},{"name":"answer"}];
				var nodeTopic = [{"id": 5000, "itemStyle":null,"symbolSize": 10, "category":0, "x": 0,"y":0},{"id": 6000, "itemStyle":null,"symbolSize": 10, "category":0, "x": 0,"y":0}];

			    
			    var linksList = [];
			    var indexLink = 0;
			    var linkItem = null;
			    nbQuestionItems.forEach(function (node) {
			    	indexLink = indexLink + 1;
			        node.itemStyle = null;
			        node.symbolSize = Math.sqrt(Math.sqrt(node.hotness))*100;
			        node.value = node.symbolSize;
			        node.content = node.questionName;
			        node.index = node.Index; 
			        node.category = 1;
			        // Use random x, y
			        node.x = node.y = null;
			        node.draggable = true;
			        node.id = node.ID
			        linkItem = {"id": indexLink,"name":null,"source":'5000',"target":node.id,"lineStyle":{"normal":{}}};
			        linksList.push(linkItem);
			    });
			    option = {
			        title: {
			            text: 'Topics',
			            subtext: 'New Brunswick',
			            top: 'bottom',
			            left: 'right'
			        },
			        tooltip: {},
			        toolbox: {
					  show: true,
					  feature: {
						restore: {
						  show: true,
						  title: "Restore"
						},
						saveAsImage: {
						  show: true,
						  title: "Save Image"
						}
					  }
					},
			        legend: [{
			            // selectedMode: 'single',
			            data: categories.map(function (a) {
			                return a.name;
			            })
			        }],
			        animation: false,
			        series : [
			            {
			                type: 'graph',
			                layout: 'force',
			                data: nodeTopic.concat(nbQuestionItems),
			                links: linksList,
			                categories: categories,
			                roam: true,
			                label: {
			                    normal: {
			                        position: 'right',
			                        show: true
			                    }
			                },
			                force: {
			                    repulsion: 100
			                }
			            }
			        ]
			    };
				echartForce.setOption(option);

				echartForce.on('click', function (params) {
					if (searchTypeLevel == 1){
						new PNotify({
                                  title: "question "+params.data.index,
                                  text: params.data.content,
                                  type: 'info',
                                  styling: 'bootstrap3',
                                  hide: false,
                                  addclass: 'dark'
                              });
					}
					else if (searchTypeLevel == 2){
						if (params.componentType === 'markPoint') {
					        // 点击到了 markPoint 上
					        if (params.seriesIndex === 5) {
					            // 点击到了 index 为 5 的 series 的 markPoint 上。
					        }
					    }
					    else if (params.componentType === 'series') {
					        if (params.seriesType === 'graph') {
					            if (params.dataType === 'edge') {
					                //alert("hit on the edge");// 点击到了 graph 的 edge（边）上。
					            }
					            else {
					                alert(params.data.id);// 点击到了 graph 的 node（节点）上。
					                var questionItemID = 'd8937b4ca9f3e4772ff5142e95b8c7cb1b394239';
					                var answerData = [];
					                var qALinks = [];
					                nbAnswerItems.forEach(function (node) {
					                	if (node.ID == questionItemID){
					                		node.answerLinks.forEach(function(answerItemData){
					                			var answerItemTemple = {"id": answerItemData.ansID, 'link': answerItemData.answerLink, "category": 2, "symbolSize": 10};
					                			var qALinkItem = {"id": indexLink,"name":null,"source":questionItemID,"target":answerItemData.ansID,"lineStyle":{"normal":{}}};
					                			answerData.push(answerItemTemple);
					                			qALinks.push(qALinkItem);
					                		});
					                		var qALinkItem = {"id": indexLink,"name":null,"source":'6000',"target":questionItemID,"lineStyle":{"normal":{}}};
					                		qALinks.push(qALinkItem);
					                	}
								    });
								    alert(answerData);
								    option = {
								        title: {
								            text: 'Topics',
								            subtext: 'New Brunswick',
								            top: 'bottom',
								            left: 'right'
								        },
								        tooltip: {},
								        toolbox: {
										  show: true,
										  feature: {
											restore: {
											  show: true,
											  title: "Restore"
											},
											saveAsImage: {
											  show: true,
											  title: "Save Image"
											}
										  }
										},
								        legend: [{
								            // selectedMode: 'single',
								            data: categories.map(function (a) {
								                return a.name;
								            })
								        }],
								        animation: false,
								        series : [
								            {
								                type: 'graph',
								                layout: 'force',
								                data: nodeTopic.concat(nbQuestionItems).concat(answerData),
								                links: linksList.concat(qALinks),
								                categories: categories,
								                roam: true,
								                label: {
								                    normal: {
								                        position: 'right',
								                        show: true
								                    }
								                },
								                force: {
								                    repulsion: 100
								                }
								            }
								        ]
								    };
									this.setOption(option);
					            }
					        }
					    }	
					}
				});
			}
			  

			  
			  
			   //echart Radar
			  
			if ($('#echart_sonar').length ){ 
			  
			  var echartRadar = echarts.init(document.getElementById('echart_sonar'), theme);

			  echartRadar.setOption({
				title: {
				  text: 'Budget vs spending',
				  subtext: 'Subtitle'
				},
				 tooltip: {
					trigger: 'item'
				},
				legend: {
				  orient: 'vertical',
				  x: 'right',
				  y: 'bottom',
				  data: ['Allocated Budget', 'Actual Spending']
				},
				toolbox: {
				  show: true,
				  feature: {
					restore: {
					  show: true,
					  title: "Restore"
					},
					saveAsImage: {
					  show: true,
					  title: "Save Image"
					}
				  }
				},
				polar: [{
				  indicator: [{
					text: 'Sales',
					max: 6000
				  }, {
					text: 'Administration',
					max: 16000
				  }, {
					text: 'Information Techology',
					max: 30000
				  }, {
					text: 'Customer Support',
					max: 38000
				  }, {
					text: 'Development',
					max: 52000
				  }, {
					text: 'Marketing',
					max: 25000
				  }]
				}],
				calculable: true,
				series: [{
				  name: 'Budget vs spending',
				  type: 'radar',
				  data: [{
					value: [4300, 10000, 28000, 35000, 50000, 19000],
					name: 'Allocated Budget'
				  }, {
					value: [5000, 14000, 28000, 31000, 42000, 21000],
					name: 'Actual Spending'
				  }]
				}]
			  });

			} 
			  
			   //echart Funnel
			  
			if ($('#echart_pyramid').length ){ 
			  
			  var echartFunnel = echarts.init(document.getElementById('echart_pyramid'), theme);

			  echartFunnel.setOption({
				title: {
				  text: 'Echart Pyramid Graph',
				  subtext: 'Subtitle'
				},
				tooltip: {
				  trigger: 'item',
				  formatter: "{a} <br/>{b} : {c}%"
				},
				toolbox: {
				  show: true,
				  feature: {
					restore: {
					  show: true,
					  title: "Restore"
					},
					saveAsImage: {
					  show: true,
					  title: "Save Image"
					}
				  }
				},
				legend: {
				  data: ['Something #1', 'Something #2', 'Something #3', 'Something #4', 'Something #5'],
				  orient: 'vertical',
				  x: 'left',
				  y: 'bottom'
				},
				calculable: true,
				series: [{
				  name: '漏斗图',
				  type: 'funnel',
				  width: '40%',
				  data: [{
					value: 60,
					name: 'Something #1'
				  }, {
					value: 40,
					name: 'Something #2'
				  }, {
					value: 20,
					name: 'Something #3'
				  }, {
					value: 80,
					name: 'Something #4'
				  }, {
					value: 100,
					name: 'Something #5'
				  }]
				}]
			  });

			} 
			  
			   //echart Gauge
			  
			if ($('#echart_gauge').length ){ 
			  
			  var echartGauge = echarts.init(document.getElementById('echart_gauge'), theme);

			  echartGauge.setOption({
				tooltip: {
				  formatter: "{a} <br/>{b} : {c}%"
				},
				toolbox: {
				  show: true,
				  feature: {
					restore: {
					  show: true,
					  title: "Restore"
					},
					saveAsImage: {
					  show: true,
					  title: "Save Image"
					}
				  }
				},
				series: [{
				  name: 'Performance',
				  type: 'gauge',
				  center: ['50%', '50%'],
				  startAngle: 140,
				  endAngle: -140,
				  min: 0,
				  max: 100,
				  precision: 0,
				  splitNumber: 10,
				  axisLine: {
					show: true,
					lineStyle: {
					  color: [
						[0.2, 'lightgreen'],
						[0.4, 'orange'],
						[0.8, 'skyblue'],
						[1, '#ff4500']
					  ],
					  width: 30
					}
				  },
				  axisTick: {
					show: true,
					splitNumber: 5,
					length: 8,
					lineStyle: {
					  color: '#eee',
					  width: 1,
					  type: 'solid'
					}
				  },
				  axisLabel: {
					show: true,
					formatter: function(v) {
					  switch (v + '') {
						case '10':
						  return 'a';
						case '30':
						  return 'b';
						case '60':
						  return 'c';
						case '90':
						  return 'd';
						default:
						  return '';
					  }
					},
					textStyle: {
					  color: '#333'
					}
				  },
				  splitLine: {
					show: true,
					length: 30,
					lineStyle: {
					  color: '#eee',
					  width: 2,
					  type: 'solid'
					}
				  },
				  pointer: {
					length: '80%',
					width: 8,
					color: 'auto'
				  },
				  title: {
					show: true,
					offsetCenter: ['-65%', -10],
					textStyle: {
					  color: '#333',
					  fontSize: 15
					}
				  },
				  detail: {
					show: true,
					backgroundColor: 'rgba(0,0,0,0)',
					borderWidth: 0,
					borderColor: '#ccc',
					width: 100,
					height: 40,
					offsetCenter: ['-60%', 10],
					formatter: '{value}%',
					textStyle: {
					  color: 'auto',
					  fontSize: 30
					}
				  },
				  data: [{
					value: 50,
					name: 'Performance'
				  }]
				}]
			  });

			} 
			  
			   //echart Line
			  
			if ($('#echart_line').length ){ 
			  
			  var echartLine = echarts.init(document.getElementById('echart_line'), theme);

			  var hotnessNB = [];
			  var idNB = [];
			  nbQuestionItems.forEach(function (node) {
			  		hotnessNB.push(node.hotness);
			  		idNB.push(node.Index);
			    });

			  echartLine.setOption({
				title: {
				  text: 'Line Graph',
				  subtext: 'Subtitle'
				},
				tooltip: {
				  trigger: 'axis'
				},
				legend: {
				  x: 220,
				  y: 40,
				  data: ['Intent', 'Pre-order', 'Deal']
				},
				toolbox: {
				  show: true,
				  feature: {
					restore: {
					  show: true,
					  title: "Restore"
					},
					saveAsImage: {
					  show: true,
					  title: "Save Image"
					}
				  }
				},
				calculable: true,
				xAxis: [{
				  type: 'category',
				  boundaryGap: false,
				  data: idNB
				}],
				yAxis: [{
				  type: 'value'
				}],
				series: [{
				  name: 'New Brunswick',
				  type: 'line',
				  smooth: true,
				  itemStyle: {
					normal: {
					  areaStyle: {
						type: 'default'
					  }
					}
				  },
				  data: hotnessNB
				}]
			  });

			  echartLine.on('click', function (params) {
			  	alert(params.data.id);
			  });

			} 
			  
			   //echart Scatter
			  
			if ($('#echart_scatter').length ){ 
			  
			  var echartScatter = echarts.init(document.getElementById('echart_scatter'), theme);

			  echartScatter.setOption({
				title: {
				  text: 'Scatter Graph',
				  subtext: 'Heinz  2003'
				},
				tooltip: {
				  trigger: 'axis',
				  showDelay: 0,
				  axisPointer: {
					type: 'cross',
					lineStyle: {
					  type: 'dashed',
					  width: 1
					}
				  }
				},
				legend: {
				  data: ['Data2', 'Data1']
				},
				toolbox: {
				  show: true,
				  feature: {
					saveAsImage: {
					  show: true,
					  title: "Save Image"
					}
				  }
				},
				xAxis: [{
				  type: 'value',
				  scale: true,
				  axisLabel: {
					formatter: '{value} cm'
				  }
				}],
				yAxis: [{
				  type: 'value',
				  scale: true,
				  axisLabel: {
					formatter: '{value} kg'
				  }
				}],
				series: [{
				  name: 'Data1',
				  type: 'scatter',
				  tooltip: {
					trigger: 'item',
					formatter: function(params) {
					  if (params.value.length > 1) {
						return params.seriesName + ' :<br/>' + params.value[0] + 'cm ' + params.value[1] + 'kg ';
					  } else {
						return params.seriesName + ' :<br/>' + params.name + ' : ' + params.value + 'kg ';
					  }
					}
				  },
				  data: [
					[161.2, 51.6],
					[167.5, 59.0],
					[159.5, 49.2],
					[157.0, 63.0],
					[155.8, 53.6],
					[170.0, 59.0],
					[159.1, 47.6],
					[166.0, 69.8],
					[176.2, 66.8],
					[160.2, 75.2],
					[172.5, 55.2],
					[170.9, 54.2],
					[172.9, 62.5],
					[153.4, 42.0],
					[160.0, 50.0],
					[147.2, 49.8],
					[168.2, 49.2],
					[175.0, 73.2],
					[157.0, 47.8],
					[167.6, 68.8],
					[159.5, 50.6],
					[175.0, 82.5],
					[166.8, 57.2],
					[176.5, 87.8],
					[170.2, 72.8],
					[174.0, 54.5],
					[173.0, 59.8],
					[179.9, 67.3],
					[170.5, 67.8],
					[160.0, 47.0],
					[154.4, 46.2],
					[162.0, 55.0],
					[176.5, 83.0],
					[160.0, 54.4],
					[152.0, 45.8],
					[162.1, 53.6],
					[170.0, 73.2],
					[160.2, 52.1],
					[161.3, 67.9],
					[166.4, 56.6],
					[168.9, 62.3],
					[163.8, 58.5],
					[167.6, 54.5],
					[160.0, 50.2],
					[161.3, 60.3],
					[167.6, 58.3],
					[165.1, 56.2],
					[160.0, 50.2],
					[170.0, 72.9],
					[157.5, 59.8],
					[167.6, 61.0],
					[160.7, 69.1],
					[163.2, 55.9],
					[152.4, 46.5],
					[157.5, 54.3],
					[168.3, 54.8],
					[180.3, 60.7],
					[165.5, 60.0],
					[165.0, 62.0],
					[164.5, 60.3],
					[156.0, 52.7],
					[160.0, 74.3],
					[163.0, 62.0],
					[165.7, 73.1],
					[161.0, 80.0],
					[162.0, 54.7],
					[166.0, 53.2],
					[174.0, 75.7],
					[172.7, 61.1],
					[167.6, 55.7],
					[151.1, 48.7],
					[164.5, 52.3],
					[163.5, 50.0],
					[152.0, 59.3],
					[169.0, 62.5],
					[164.0, 55.7],
					[161.2, 54.8],
					[155.0, 45.9],
					[170.0, 70.6],
					[176.2, 67.2],
					[170.0, 69.4],
					[162.5, 58.2],
					[170.3, 64.8],
					[164.1, 71.6],
					[169.5, 52.8],
					[163.2, 59.8],
					[154.5, 49.0],
					[159.8, 50.0],
					[173.2, 69.2],
					[170.0, 55.9],
					[161.4, 63.4],
					[169.0, 58.2],
					[166.2, 58.6],
					[159.4, 45.7],
					[162.5, 52.2],
					[159.0, 48.6],
					[162.8, 57.8],
					[159.0, 55.6],
					[179.8, 66.8],
					[162.9, 59.4],
					[161.0, 53.6],
					[151.1, 73.2],
					[168.2, 53.4],
					[168.9, 69.0],
					[173.2, 58.4],
					[171.8, 56.2],
					[178.0, 70.6],
					[164.3, 59.8],
					[163.0, 72.0],
					[168.5, 65.2],
					[166.8, 56.6],
					[172.7, 105.2],
					[163.5, 51.8],
					[169.4, 63.4],
					[167.8, 59.0],
					[159.5, 47.6],
					[167.6, 63.0],
					[161.2, 55.2],
					[160.0, 45.0],
					[163.2, 54.0],
					[162.2, 50.2],
					[161.3, 60.2],
					[149.5, 44.8],
					[157.5, 58.8],
					[163.2, 56.4],
					[172.7, 62.0],
					[155.0, 49.2],
					[156.5, 67.2],
					[164.0, 53.8],
					[160.9, 54.4],
					[162.8, 58.0],
					[167.0, 59.8],
					[160.0, 54.8],
					[160.0, 43.2],
					[168.9, 60.5],
					[158.2, 46.4],
					[156.0, 64.4],
					[160.0, 48.8],
					[167.1, 62.2],
					[158.0, 55.5],
					[167.6, 57.8],
					[156.0, 54.6],
					[162.1, 59.2],
					[173.4, 52.7],
					[159.8, 53.2],
					[170.5, 64.5],
					[159.2, 51.8],
					[157.5, 56.0],
					[161.3, 63.6],
					[162.6, 63.2],
					[160.0, 59.5],
					[168.9, 56.8],
					[165.1, 64.1],
					[162.6, 50.0],
					[165.1, 72.3],
					[166.4, 55.0],
					[160.0, 55.9],
					[152.4, 60.4],
					[170.2, 69.1],
					[162.6, 84.5],
					[170.2, 55.9],
					[158.8, 55.5],
					[172.7, 69.5],
					[167.6, 76.4],
					[162.6, 61.4],
					[167.6, 65.9],
					[156.2, 58.6],
					[175.2, 66.8],
					[172.1, 56.6],
					[162.6, 58.6],
					[160.0, 55.9],
					[165.1, 59.1],
					[182.9, 81.8],
					[166.4, 70.7],
					[165.1, 56.8],
					[177.8, 60.0],
					[165.1, 58.2],
					[175.3, 72.7],
					[154.9, 54.1],
					[158.8, 49.1],
					[172.7, 75.9],
					[168.9, 55.0],
					[161.3, 57.3],
					[167.6, 55.0],
					[165.1, 65.5],
					[175.3, 65.5],
					[157.5, 48.6],
					[163.8, 58.6],
					[167.6, 63.6],
					[165.1, 55.2],
					[165.1, 62.7],
					[168.9, 56.6],
					[162.6, 53.9],
					[164.5, 63.2],
					[176.5, 73.6],
					[168.9, 62.0],
					[175.3, 63.6],
					[159.4, 53.2],
					[160.0, 53.4],
					[170.2, 55.0],
					[162.6, 70.5],
					[167.6, 54.5],
					[162.6, 54.5],
					[160.7, 55.9],
					[160.0, 59.0],
					[157.5, 63.6],
					[162.6, 54.5],
					[152.4, 47.3],
					[170.2, 67.7],
					[165.1, 80.9],
					[172.7, 70.5],
					[165.1, 60.9],
					[170.2, 63.6],
					[170.2, 54.5],
					[170.2, 59.1],
					[161.3, 70.5],
					[167.6, 52.7],
					[167.6, 62.7],
					[165.1, 86.3],
					[162.6, 66.4],
					[152.4, 67.3],
					[168.9, 63.0],
					[170.2, 73.6],
					[175.2, 62.3],
					[175.2, 57.7],
					[160.0, 55.4],
					[165.1, 104.1],
					[174.0, 55.5],
					[170.2, 77.3],
					[160.0, 80.5],
					[167.6, 64.5],
					[167.6, 72.3],
					[167.6, 61.4],
					[154.9, 58.2],
					[162.6, 81.8],
					[175.3, 63.6],
					[171.4, 53.4],
					[157.5, 54.5],
					[165.1, 53.6],
					[160.0, 60.0],
					[174.0, 73.6],
					[162.6, 61.4],
					[174.0, 55.5],
					[162.6, 63.6],
					[161.3, 60.9],
					[156.2, 60.0],
					[149.9, 46.8],
					[169.5, 57.3],
					[160.0, 64.1],
					[175.3, 63.6],
					[169.5, 67.3],
					[160.0, 75.5],
					[172.7, 68.2],
					[162.6, 61.4],
					[157.5, 76.8],
					[176.5, 71.8],
					[164.4, 55.5],
					[160.7, 48.6],
					[174.0, 66.4],
					[163.8, 67.3]
				  ],
				  markPoint: {
					data: [{
					  type: 'max',
					  name: 'Max'
					}, {
					  type: 'min',
					  name: 'Min'
					}]
				  },
				  markLine: {
					data: [{
					  type: 'average',
					  name: 'Mean'
					}]
				  }
				}, {
				  name: 'Data2',
				  type: 'scatter',
				  tooltip: {
					trigger: 'item',
					formatter: function(params) {
					  if (params.value.length > 1) {
						return params.seriesName + ' :<br/>' + params.value[0] + 'cm ' + params.value[1] + 'kg ';
					  } else {
						return params.seriesName + ' :<br/>' + params.name + ' : ' + params.value + 'kg ';
					  }
					}
				  },
				  data: [
					[174.0, 65.6],
					[175.3, 71.8],
					[193.5, 80.7],
					[186.5, 72.6],
					[187.2, 78.8],
					[181.5, 74.8],
					[184.0, 86.4],
					[184.5, 78.4],
					[175.0, 62.0],
					[184.0, 81.6],
					[180.0, 76.6],
					[177.8, 83.6],
					[192.0, 90.0],
					[176.0, 74.6],
					[174.0, 71.0],
					[184.0, 79.6],
					[192.7, 93.8],
					[171.5, 70.0],
					[173.0, 72.4],
					[176.0, 85.9],
					[176.0, 78.8],
					[180.5, 77.8],
					[172.7, 66.2],
					[176.0, 86.4],
					[173.5, 81.8],
					[178.0, 89.6],
					[180.3, 82.8],
					[180.3, 76.4],
					[164.5, 63.2],
					[173.0, 60.9],
					[183.5, 74.8],
					[175.5, 70.0],
					[188.0, 72.4],
					[189.2, 84.1],
					[172.8, 69.1],
					[170.0, 59.5],
					[182.0, 67.2],
					[170.0, 61.3],
					[177.8, 68.6],
					[184.2, 80.1],
					[186.7, 87.8],
					[171.4, 84.7],
					[172.7, 73.4],
					[175.3, 72.1],
					[180.3, 82.6],
					[182.9, 88.7],
					[188.0, 84.1],
					[177.2, 94.1],
					[172.1, 74.9],
					[167.0, 59.1],
					[169.5, 75.6],
					[174.0, 86.2],
					[172.7, 75.3],
					[182.2, 87.1],
					[164.1, 55.2],
					[163.0, 57.0],
					[171.5, 61.4],
					[184.2, 76.8],
					[174.0, 86.8],
					[174.0, 72.2],
					[177.0, 71.6],
					[186.0, 84.8],
					[167.0, 68.2],
					[171.8, 66.1],
					[182.0, 72.0],
					[167.0, 64.6],
					[177.8, 74.8],
					[164.5, 70.0],
					[192.0, 101.6],
					[175.5, 63.2],
					[171.2, 79.1],
					[181.6, 78.9],
					[167.4, 67.7],
					[181.1, 66.0],
					[177.0, 68.2],
					[174.5, 63.9],
					[177.5, 72.0],
					[170.5, 56.8],
					[182.4, 74.5],
					[197.1, 90.9],
					[180.1, 93.0],
					[175.5, 80.9],
					[180.6, 72.7],
					[184.4, 68.0],
					[175.5, 70.9],
					[180.6, 72.5],
					[177.0, 72.5],
					[177.1, 83.4],
					[181.6, 75.5],
					[176.5, 73.0],
					[175.0, 70.2],
					[174.0, 73.4],
					[165.1, 70.5],
					[177.0, 68.9],
					[192.0, 102.3],
					[176.5, 68.4],
					[169.4, 65.9],
					[182.1, 75.7],
					[179.8, 84.5],
					[175.3, 87.7],
					[184.9, 86.4],
					[177.3, 73.2],
					[167.4, 53.9],
					[178.1, 72.0],
					[168.9, 55.5],
					[157.2, 58.4],
					[180.3, 83.2],
					[170.2, 72.7],
					[177.8, 64.1],
					[172.7, 72.3],
					[165.1, 65.0],
					[186.7, 86.4],
					[165.1, 65.0],
					[174.0, 88.6],
					[175.3, 84.1],
					[185.4, 66.8],
					[177.8, 75.5],
					[180.3, 93.2],
					[180.3, 82.7],
					[177.8, 58.0],
					[177.8, 79.5],
					[177.8, 78.6],
					[177.8, 71.8],
					[177.8, 116.4],
					[163.8, 72.2],
					[188.0, 83.6],
					[198.1, 85.5],
					[175.3, 90.9],
					[166.4, 85.9],
					[190.5, 89.1],
					[166.4, 75.0],
					[177.8, 77.7],
					[179.7, 86.4],
					[172.7, 90.9],
					[190.5, 73.6],
					[185.4, 76.4],
					[168.9, 69.1],
					[167.6, 84.5],
					[175.3, 64.5],
					[170.2, 69.1],
					[190.5, 108.6],
					[177.8, 86.4],
					[190.5, 80.9],
					[177.8, 87.7],
					[184.2, 94.5],
					[176.5, 80.2],
					[177.8, 72.0],
					[180.3, 71.4],
					[171.4, 72.7],
					[172.7, 84.1],
					[172.7, 76.8],
					[177.8, 63.6],
					[177.8, 80.9],
					[182.9, 80.9],
					[170.2, 85.5],
					[167.6, 68.6],
					[175.3, 67.7],
					[165.1, 66.4],
					[185.4, 102.3],
					[181.6, 70.5],
					[172.7, 95.9],
					[190.5, 84.1],
					[179.1, 87.3],
					[175.3, 71.8],
					[170.2, 65.9],
					[193.0, 95.9],
					[171.4, 91.4],
					[177.8, 81.8],
					[177.8, 96.8],
					[167.6, 69.1],
					[167.6, 82.7],
					[180.3, 75.5],
					[182.9, 79.5],
					[176.5, 73.6],
					[186.7, 91.8],
					[188.0, 84.1],
					[188.0, 85.9],
					[177.8, 81.8],
					[174.0, 82.5],
					[177.8, 80.5],
					[171.4, 70.0],
					[185.4, 81.8],
					[185.4, 84.1],
					[188.0, 90.5],
					[188.0, 91.4],
					[182.9, 89.1],
					[176.5, 85.0],
					[175.3, 69.1],
					[175.3, 73.6],
					[188.0, 80.5],
					[188.0, 82.7],
					[175.3, 86.4],
					[170.5, 67.7],
					[179.1, 92.7],
					[177.8, 93.6],
					[175.3, 70.9],
					[182.9, 75.0],
					[170.8, 93.2],
					[188.0, 93.2],
					[180.3, 77.7],
					[177.8, 61.4],
					[185.4, 94.1],
					[168.9, 75.0],
					[185.4, 83.6],
					[180.3, 85.5],
					[174.0, 73.9],
					[167.6, 66.8],
					[182.9, 87.3],
					[160.0, 72.3],
					[180.3, 88.6],
					[167.6, 75.5],
					[186.7, 101.4],
					[175.3, 91.1],
					[175.3, 67.3],
					[175.9, 77.7],
					[175.3, 81.8],
					[179.1, 75.5],
					[181.6, 84.5],
					[177.8, 76.6],
					[182.9, 85.0],
					[177.8, 102.5],
					[184.2, 77.3],
					[179.1, 71.8],
					[176.5, 87.9],
					[188.0, 94.3],
					[174.0, 70.9],
					[167.6, 64.5],
					[170.2, 77.3],
					[167.6, 72.3],
					[188.0, 87.3],
					[174.0, 80.0],
					[176.5, 82.3],
					[180.3, 73.6],
					[167.6, 74.1],
					[188.0, 85.9],
					[180.3, 73.2],
					[167.6, 76.3],
					[183.0, 65.9],
					[183.0, 90.9],
					[179.1, 89.1],
					[170.2, 62.3],
					[177.8, 82.7],
					[179.1, 79.1],
					[190.5, 98.2],
					[177.8, 84.1],
					[180.3, 83.2],
					[180.3, 83.2]
				  ],
				  markPoint: {
					data: [{
					  type: 'max',
					  name: 'Max'
					}, {
					  type: 'min',
					  name: 'Min'
					}]
				  },
				  markLine: {
					data: [{
					  type: 'average',
					  name: 'Mean'
					}]
				  }
				}]
			  });

			} 
			  
			   //echart Bar Horizontal
			  
			if ($('#echart_bar_horizontal').length ){ 
			  
			  var echartBar = echarts.init(document.getElementById('echart_bar_horizontal'), theme);

			  echartBar.setOption({
				title: {
				  text: 'Bar Graph',
				  subtext: 'Graph subtitle'
				},
				tooltip: {
				  trigger: 'axis'
				},
				legend: {
				  x: 100,
				  data: ['2015', '2016']
				},
				toolbox: {
				  show: true,
				  feature: {
					saveAsImage: {
					  show: true,
					  title: "Save Image"
					}
				  }
				},
				calculable: true,
				xAxis: [{
				  type: 'value',
				  boundaryGap: [0, 0.01]
				}],
				yAxis: [{
				  type: 'category',
				  data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
				}],
				series: [{
				  name: '2015',
				  type: 'bar',
				  data: [18203, 23489, 29034, 104970, 131744, 630230]
				}, {
				  name: '2016',
				  type: 'bar',
				  data: [19325, 23438, 31000, 121594, 134141, 681807]
				}]
			  });

			} 
			  
			   //echart Pie Collapse
			  
			if ($('#echart_pie2').length ){ 
			  
			  var echartPieCollapse = echarts.init(document.getElementById('echart_pie2'), theme);
			  
			  echartPieCollapse.setOption({
				tooltip: {
				  trigger: 'item',
				  formatter: "{a} <br/>{b} : {c} ({d}%)"
				},
				legend: {
				  x: 'center',
				  y: 'bottom',
				  data: ['New Brunswick','Rutgers']
				},
				toolbox: {
				  show: true,
				  feature: {
					magicType: {
					  show: true,
					  type: ['pie', 'funnel']
					},
					restore: {
					  show: true,
					  title: "Restore"
					},
					saveAsImage: {
					  show: true,
					  title: "Save Image"
					}
				  }
				},
				calculable: true,
				series: [{
				  name: 'Area Mode',
				  type: 'pie',
				  radius: [25, 90],
				  center: ['50%', 170],
				  roseType: 'area',
				  x: '50%',
				  sort: 'ascending',
				  data: [{
					value: nbQuestionItems.length,
					name: 'New Brunswick'
				  },
				  {
					value: ruQuestionItems.length,
					name: 'Rutgers'
				  }]
				}]
			  });

			} 
			  
			   //echart Donut
			  
			if ($('#echart_donut').length ){  
			  
			  var echartDonut = echarts.init(document.getElementById('echart_donut'), theme);
			  
			  echartDonut.setOption({
				tooltip: {
				  trigger: 'item',
				  formatter: "{a} <br/>{b} : {c} ({d}%)"
				},
				calculable: true,
				legend: {
				  x: 'center',
				  y: 'bottom',
				  data: ['Direct Access', 'E-mail Marketing', 'Union Ad', 'Video Ads', 'Search Engine']
				},
				toolbox: {
				  show: true,
				  feature: {
					magicType: {
					  show: true,
					  type: ['pie', 'funnel'],
					  option: {
						funnel: {
						  x: '25%',
						  width: '50%',
						  funnelAlign: 'center',
						  max: 1548
						}
					  }
					},
					restore: {
					  show: true,
					  title: "Restore"
					},
					saveAsImage: {
					  show: true,
					  title: "Save Image"
					}
				  }
				},
				series: [{
				  name: 'Access to the resource',
				  type: 'pie',
				  radius: ['35%', '55%'],
				  itemStyle: {
					normal: {
					  label: {
						show: true
					  },
					  labelLine: {
						show: true
					  }
					},
					emphasis: {
					  label: {
						show: true,
						position: 'center',
						textStyle: {
						  fontSize: '14',
						  fontWeight: 'normal'
						}
					  }
					}
				  },
				  data: [{
					value: 335,
					name: 'Direct Access'
				  }, {
					value: 310,
					name: 'E-mail Marketing'
				  }, {
					value: 234,
					name: 'Union Ad'
				  }, {
					value: 135,
					name: 'Video Ads'
				  }, {
					value: 1548,
					name: 'Search Engine'
				  }]
				}]
			  });

			} 
			  
			   //echart Pie
			  
			if ($('#echart_pie').length ){  
			  
			  var echartPie = echarts.init(document.getElementById('echart_pie'), theme);

			  echartPie.setOption({
				tooltip: {
				  trigger: 'item',
				  formatter: "{a} <br/>{b} : {c} ({d}%)"
				},
				legend: {
				  x: 'center',
				  y: 'bottom',
				  data: ['Direct Access', 'E-mail Marketing', 'Union Ad', 'Video Ads', 'Search Engine']
				},
				toolbox: {
				  show: true,
				  feature: {
					magicType: {
					  show: true,
					  type: ['pie', 'funnel'],
					  option: {
						funnel: {
						  x: '25%',
						  width: '50%',
						  funnelAlign: 'left',
						  max: 1548
						}
					  }
					},
					restore: {
					  show: true,
					  title: "Restore"
					},
					saveAsImage: {
					  show: true,
					  title: "Save Image"
					}
				  }
				},
				calculable: true,
				series: [{
				  name: '访问来源',
				  type: 'pie',
				  radius: '55%',
				  center: ['50%', '48%'],
				  data: [{
					value: 335,
					name: 'Direct Access'
				  }, {
					value: 310,
					name: 'E-mail Marketing'
				  }, {
					value: 234,
					name: 'Union Ad'
				  }, {
					value: 135,
					name: 'Video Ads'
				  }, {
					value: 1548,
					name: 'Search Engine'
				  }]
				}]
			  });

			  var dataStyle = {
				normal: {
				  label: {
					show: false
				  },
				  labelLine: {
					show: false
				  }
				}
			  };

			  var placeHolderStyle = {
				normal: {
				  color: 'rgba(0,0,0,0)',
				  label: {
					show: false
				  },
				  labelLine: {
					show: false
				  }
				},
				emphasis: {
				  color: 'rgba(0,0,0,0)'
				}
			  };

			} 
			  
			   //echart Mini Pie
			  
			if ($('#echart_mini_pie').length ){ 
			  
			  var echartMiniPie = echarts.init(document.getElementById('echart_mini_pie'), theme);

			  echartMiniPie .setOption({
				title: {
				  text: 'Chart #2',
				  subtext: 'From ExcelHome',
				  sublink: 'http://e.weibo.com/1341556070/AhQXtjbqh',
				  x: 'center',
				  y: 'center',
				  itemGap: 20,
				  textStyle: {
					color: 'rgba(30,144,255,0.8)',
					fontFamily: '微软雅黑',
					fontSize: 35,
					fontWeight: 'bolder'
				  }
				},
				tooltip: {
				  show: true,
				  formatter: "{a} <br/>{b} : {c} ({d}%)"
				},
				legend: {
				  orient: 'vertical',
				  x: 170,
				  y: 45,
				  itemGap: 12,
				  data: ['68%Something #1', '29%Something #2', '3%Something #3'],
				},
				toolbox: {
				  show: true,
				  feature: {
					mark: {
					  show: true
					},
					dataView: {
					  show: true,
					  title: "Text View",
					  lang: [
						"Text View",
						"Close",
						"Refresh",
					  ],
					  readOnly: false
					},
					restore: {
					  show: true,
					  title: "Restore"
					},
					saveAsImage: {
					  show: true,
					  title: "Save Image"
					}
				  }
				},
				series: [{
				  name: '1',
				  type: 'pie',
				  clockWise: false,
				  radius: [105, 130],
				  itemStyle: dataStyle,
				  data: [{
					value: 68,
					name: '68%Something #1'
				  }, {
					value: 32,
					name: 'invisible',
					itemStyle: placeHolderStyle
				  }]
				}, {
				  name: '2',
				  type: 'pie',
				  clockWise: false,
				  radius: [80, 105],
				  itemStyle: dataStyle,
				  data: [{
					value: 29,
					name: '29%Something #2'
				  }, {
					value: 71,
					name: 'invisible',
					itemStyle: placeHolderStyle
				  }]
				}, {
				  name: '3',
				  type: 'pie',
				  clockWise: false,
				  radius: [25, 80],
				  itemStyle: dataStyle,
				  data: [{
					value: 3,
					name: '3%Something #3'
				  }, {
					value: 97,
					name: 'invisible',
					itemStyle: placeHolderStyle
				  }]
				}]
			  });

			} 
			  
			   //echart Map
			  
			if ($('#echart_world_map').length ){ 
			  
				  var echartMap = echarts.init(document.getElementById('echart_world_map'), theme);
				  
				   
				  echartMap.setOption({
					title: {
					  text: 'World Population (2010)',
					  subtext: 'from United Nations, Total population, both sexes combined, as of 1 July (thousands)',
					  x: 'center',
					  y: 'top'
					},
					tooltip: {
					  trigger: 'item',
					  formatter: function(params) {
						var value = (params.value + '').split('.');
						value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,') + '.' + value[1];
						return params.seriesName + '<br/>' + params.name + ' : ' + value;
					  }
					},
					toolbox: {
					  show: true,
					  orient: 'vertical',
					  x: 'right',
					  y: 'center',
					  feature: {
						mark: {
						  show: true
						},
						dataView: {
						  show: true,
						  title: "Text View",
						  lang: [
							"Text View",
							"Close",
							"Refresh",
						  ],
						  readOnly: false
						},
						restore: {
						  show: true,
						  title: "Restore"
						},
						saveAsImage: {
						  show: true,
						  title: "Save Image"
						}
					  }
					},
					dataRange: {
					  min: 0,
					  max: 1000000,
					  text: ['High', 'Low'],
					  realtime: false,
					  calculable: true,
					  color: ['#087E65', '#26B99A', '#CBEAE3']
					},
					series: [{
					  name: 'World Population (2010)',
					  type: 'map',
					  mapType: 'world',
					  roam: false,
					  mapLocation: {
						y: 60
					  },
					  itemStyle: {
						emphasis: {
						  label: {
							show: true
						  }
						}
					  },
					  data: [{
						name: 'Afghanistan',
						value: 28397.812
					  }, {
						name: 'Angola',
						value: 19549.124
					  }, {
						name: 'Albania',
						value: 3150.143
					  }, {
						name: 'United Arab Emirates',
						value: 8441.537
					  }, {
						name: 'Argentina',
						value: 40374.224
					  }, {
						name: 'Armenia',
						value: 2963.496
					  }, {
						name: 'French Southern and Antarctic Lands',
						value: 268.065
					  }, {
						name: 'Australia',
						value: 22404.488
					  }, {
						name: 'Austria',
						value: 8401.924
					  }, {
						name: 'Azerbaijan',
						value: 9094.718
					  }, {
						name: 'Burundi',
						value: 9232.753
					  }, {
						name: 'Belgium',
						value: 10941.288
					  }, {
						name: 'Benin',
						value: 9509.798
					  }, {
						name: 'Burkina Faso',
						value: 15540.284
					  }, {
						name: 'Bangladesh',
						value: 151125.475
					  }, {
						name: 'Bulgaria',
						value: 7389.175
					  }, {
						name: 'The Bahamas',
						value: 66402.316
					  }, {
						name: 'Bosnia and Herzegovina',
						value: 3845.929
					  }, {
						name: 'Belarus',
						value: 9491.07
					  }, {
						name: 'Belize',
						value: 308.595
					  }, {
						name: 'Bermuda',
						value: 64.951
					  }, {
						name: 'Bolivia',
						value: 716.939
					  }, {
						name: 'Brazil',
						value: 195210.154
					  }, {
						name: 'Brunei',
						value: 27.223
					  }, {
						name: 'Bhutan',
						value: 716.939
					  }, {
						name: 'Botswana',
						value: 1969.341
					  }, {
						name: 'Central African Republic',
						value: 4349.921
					  }, {
						name: 'Canada',
						value: 34126.24
					  }, {
						name: 'Switzerland',
						value: 7830.534
					  }, {
						name: 'Chile',
						value: 17150.76
					  }, {
						name: 'China',
						value: 1359821.465
					  }, {
						name: 'Ivory Coast',
						value: 60508.978
					  }, {
						name: 'Cameroon',
						value: 20624.343
					  }, {
						name: 'Democratic Republic of the Congo',
						value: 62191.161
					  }, {
						name: 'Republic of the Congo',
						value: 3573.024
					  }, {
						name: 'Colombia',
						value: 46444.798
					  }, {
						name: 'Costa Rica',
						value: 4669.685
					  }, {
						name: 'Cuba',
						value: 11281.768
					  }, {
						name: 'Northern Cyprus',
						value: 1.468
					  }, {
						name: 'Cyprus',
						value: 1103.685
					  }, {
						name: 'Czech Republic',
						value: 10553.701
					  }, {
						name: 'Germany',
						value: 83017.404
					  }, {
						name: 'Djibouti',
						value: 834.036
					  }, {
						name: 'Denmark',
						value: 5550.959
					  }, {
						name: 'Dominican Republic',
						value: 10016.797
					  }, {
						name: 'Algeria',
						value: 37062.82
					  }, {
						name: 'Ecuador',
						value: 15001.072
					  }, {
						name: 'Egypt',
						value: 78075.705
					  }, {
						name: 'Eritrea',
						value: 5741.159
					  }, {
						name: 'Spain',
						value: 46182.038
					  }, {
						name: 'Estonia',
						value: 1298.533
					  }, {
						name: 'Ethiopia',
						value: 87095.281
					  }, {
						name: 'Finland',
						value: 5367.693
					  }, {
						name: 'Fiji',
						value: 860.559
					  }, {
						name: 'Falkland Islands',
						value: 49.581
					  }, {
						name: 'France',
						value: 63230.866
					  }, {
						name: 'Gabon',
						value: 1556.222
					  }, {
						name: 'United Kingdom',
						value: 62066.35
					  }, {
						name: 'Georgia',
						value: 4388.674
					  }, {
						name: 'Ghana',
						value: 24262.901
					  }, {
						name: 'Guinea',
						value: 10876.033
					  }, {
						name: 'Gambia',
						value: 1680.64
					  }, {
						name: 'Guinea Bissau',
						value: 10876.033
					  }, {
						name: 'Equatorial Guinea',
						value: 696.167
					  }, {
						name: 'Greece',
						value: 11109.999
					  }, {
						name: 'Greenland',
						value: 56.546
					  }, {
						name: 'Guatemala',
						value: 14341.576
					  }, {
						name: 'French Guiana',
						value: 231.169
					  }, {
						name: 'Guyana',
						value: 786.126
					  }, {
						name: 'Honduras',
						value: 7621.204
					  }, {
						name: 'Croatia',
						value: 4338.027
					  }, {
						name: 'Haiti',
						value: 9896.4
					  }, {
						name: 'Hungary',
						value: 10014.633
					  }, {
						name: 'Indonesia',
						value: 240676.485
					  }, {
						name: 'India',
						value: 1205624.648
					  }, {
						name: 'Ireland',
						value: 4467.561
					  }, {
						name: 'Iran',
						value: 240676.485
					  }, {
						name: 'Iraq',
						value: 30962.38
					  }, {
						name: 'Iceland',
						value: 318.042
					  }, {
						name: 'Israel',
						value: 7420.368
					  }, {
						name: 'Italy',
						value: 60508.978
					  }, {
						name: 'Jamaica',
						value: 2741.485
					  }, {
						name: 'Jordan',
						value: 6454.554
					  }, {
						name: 'Japan',
						value: 127352.833
					  }, {
						name: 'Kazakhstan',
						value: 15921.127
					  }, {
						name: 'Kenya',
						value: 40909.194
					  }, {
						name: 'Kyrgyzstan',
						value: 5334.223
					  }, {
						name: 'Cambodia',
						value: 14364.931
					  }, {
						name: 'South Korea',
						value: 51452.352
					  }, {
						name: 'Kosovo',
						value: 97.743
					  }, {
						name: 'Kuwait',
						value: 2991.58
					  }, {
						name: 'Laos',
						value: 6395.713
					  }, {
						name: 'Lebanon',
						value: 4341.092
					  }, {
						name: 'Liberia',
						value: 3957.99
					  }, {
						name: 'Libya',
						value: 6040.612
					  }, {
						name: 'Sri Lanka',
						value: 20758.779
					  }, {
						name: 'Lesotho',
						value: 2008.921
					  }, {
						name: 'Lithuania',
						value: 3068.457
					  }, {
						name: 'Luxembourg',
						value: 507.885
					  }, {
						name: 'Latvia',
						value: 2090.519
					  }, {
						name: 'Morocco',
						value: 31642.36
					  }, {
						name: 'Moldova',
						value: 103.619
					  }, {
						name: 'Madagascar',
						value: 21079.532
					  }, {
						name: 'Mexico',
						value: 117886.404
					  }, {
						name: 'Macedonia',
						value: 507.885
					  }, {
						name: 'Mali',
						value: 13985.961
					  }, {
						name: 'Myanmar',
						value: 51931.231
					  }, {
						name: 'Montenegro',
						value: 620.078
					  }, {
						name: 'Mongolia',
						value: 2712.738
					  }, {
						name: 'Mozambique',
						value: 23967.265
					  }, {
						name: 'Mauritania',
						value: 3609.42
					  }, {
						name: 'Malawi',
						value: 15013.694
					  }, {
						name: 'Malaysia',
						value: 28275.835
					  }, {
						name: 'Namibia',
						value: 2178.967
					  }, {
						name: 'New Caledonia',
						value: 246.379
					  }, {
						name: 'Niger',
						value: 15893.746
					  }, {
						name: 'Nigeria',
						value: 159707.78
					  }, {
						name: 'Nicaragua',
						value: 5822.209
					  }, {
						name: 'Netherlands',
						value: 16615.243
					  }, {
						name: 'Norway',
						value: 4891.251
					  }, {
						name: 'Nepal',
						value: 26846.016
					  }, {
						name: 'New Zealand',
						value: 4368.136
					  }, {
						name: 'Oman',
						value: 2802.768
					  }, {
						name: 'Pakistan',
						value: 173149.306
					  }, {
						name: 'Panama',
						value: 3678.128
					  }, {
						name: 'Peru',
						value: 29262.83
					  }, {
						name: 'Philippines',
						value: 93444.322
					  }, {
						name: 'Papua New Guinea',
						value: 6858.945
					  }, {
						name: 'Poland',
						value: 38198.754
					  }, {
						name: 'Puerto Rico',
						value: 3709.671
					  }, {
						name: 'North Korea',
						value: 1.468
					  }, {
						name: 'Portugal',
						value: 10589.792
					  }, {
						name: 'Paraguay',
						value: 6459.721
					  }, {
						name: 'Qatar',
						value: 1749.713
					  }, {
						name: 'Romania',
						value: 21861.476
					  }, {
						name: 'Russia',
						value: 21861.476
					  }, {
						name: 'Rwanda',
						value: 10836.732
					  }, {
						name: 'Western Sahara',
						value: 514.648
					  }, {
						name: 'Saudi Arabia',
						value: 27258.387
					  }, {
						name: 'Sudan',
						value: 35652.002
					  }, {
						name: 'South Sudan',
						value: 9940.929
					  }, {
						name: 'Senegal',
						value: 12950.564
					  }, {
						name: 'Solomon Islands',
						value: 526.447
					  }, {
						name: 'Sierra Leone',
						value: 5751.976
					  }, {
						name: 'El Salvador',
						value: 6218.195
					  }, {
						name: 'Somaliland',
						value: 9636.173
					  }, {
						name: 'Somalia',
						value: 9636.173
					  }, {
						name: 'Republic of Serbia',
						value: 3573.024
					  }, {
						name: 'Suriname',
						value: 524.96
					  }, {
						name: 'Slovakia',
						value: 5433.437
					  }, {
						name: 'Slovenia',
						value: 2054.232
					  }, {
						name: 'Sweden',
						value: 9382.297
					  }, {
						name: 'Swaziland',
						value: 1193.148
					  }, {
						name: 'Syria',
						value: 7830.534
					  }, {
						name: 'Chad',
						value: 11720.781
					  }, {
						name: 'Togo',
						value: 6306.014
					  }, {
						name: 'Thailand',
						value: 66402.316
					  }, {
						name: 'Tajikistan',
						value: 7627.326
					  }, {
						name: 'Turkmenistan',
						value: 5041.995
					  }, {
						name: 'East Timor',
						value: 10016.797
					  }, {
						name: 'Trinidad and Tobago',
						value: 1328.095
					  }, {
						name: 'Tunisia',
						value: 10631.83
					  }, {
						name: 'Turkey',
						value: 72137.546
					  }, {
						name: 'United Republic of Tanzania',
						value: 44973.33
					  }, {
						name: 'Uganda',
						value: 33987.213
					  }, {
						name: 'Ukraine',
						value: 46050.22
					  }, {
						name: 'Uruguay',
						value: 3371.982
					  }, {
						name: 'United States of America',
						value: 312247.116
					  }, {
						name: 'Uzbekistan',
						value: 27769.27
					  }, {
						name: 'Venezuela',
						value: 236.299
					  }, {
						name: 'Vietnam',
						value: 89047.397
					  }, {
						name: 'Vanuatu',
						value: 236.299
					  }, {
						name: 'West Bank',
						value: 13.565
					  }, {
						name: 'Yemen',
						value: 22763.008
					  }, {
						name: 'South Africa',
						value: 51452.352
					  }, {
						name: 'Zambia',
						value: 13216.985
					  }, {
						name: 'Zimbabwe',
						value: 13076.978
					  }]
					}]
				  });
	   
			}
	   
		}  
	   
	   
	$(document).ready(function() {
				
		init_sparklines();
		init_flot_chart();
		init_sidebar();
		init_wysiwyg();
		init_InputMask();
		init_JQVmap();
		init_cropper();
		init_knob();
		init_IonRangeSlider();
		init_ColorPicker();
		init_TagsInput();
		init_parsley();
		init_daterangepicker();
		init_daterangepicker_right();
		init_daterangepicker_single_call();
		init_daterangepicker_reservation();
		init_SmartWizard();
		init_EasyPieChart();
		init_charts();
		init_echarts();
		init_morris_charts();
		init_skycons();
		init_select2();
		init_validator();
		init_DataTables();
		init_chart_doughnut();
		init_gauge();
		init_PNotify();
		init_starrr();
		init_calendar();
		init_compose();
		init_CustomNotification();
		init_autosize();
		init_autocomplete();
				
	});	
	

