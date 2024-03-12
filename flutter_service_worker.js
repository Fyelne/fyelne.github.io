'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "2872c9e35ca8de87258a2a45171ae7a0",
".git/config": "704cfa1289bd5a9aaeefe62b6d4fadf7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d18cd016c267543af2bc72e14f24c674",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "568d6a10f3caf0d0ad3aa5ffb5b70d8f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "85d3d5c284b1bac486c8fe1a4ad91d15",
".git/logs/refs/heads/main": "0493cb4280c0ede9b8a10c96ef7f1f32",
".git/logs/refs/remotes/portfolioPage/main": "0b97edff8bb3da4c93679471fd41f4ed",
".git/objects/03/8c9d246be3e8d76cc7164d919b2dcee7af7ce9": "6257b6bce57360535915d2fb498fbd5b",
".git/objects/03/e300719f588b9a83cbae43fa135768ef7d7250": "914a8830d23e54995778c3b25298360a",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/0a/19acc8bb3e5c6106ddefd1d95598607037efb8": "5f62eb08742d260f5e557e70d69ec4ea",
".git/objects/0a/5d5fe830bc2604bf1d8f31ec1a52a5839517f2": "2d98040ff5f2368255d87dd25a859f68",
".git/objects/0f/1979596b903653e065b971270459ab2c5d73b0": "5e021e0b3c2ea40b428d65df6aa85ddf",
".git/objects/10/564f5fbc18054fcb6ed5e408a32bb83b64f318": "3708f15692bd1224f3dd90073b1a86b1",
".git/objects/12/2ac047c89bfd5c4b3e3aa6d379ff935dc49117": "85f440ffb7f4082d1ae9598b8d64d45c",
".git/objects/13/37fcac113f0bee86808de4cba2a4598eeaaf8a": "d14e7a37c9cd1a32907301957a0876ca",
".git/objects/13/6ecf8d31c8f87731e460299e47c85bc54ffe52": "3b016841d2f9dec34b502d7dcb55f952",
".git/objects/15/175d16a956b69384badad96ad6b88921d7d99c": "ee16ff06abf4e30943d711ce5a30810f",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/18/81c19a24ac95af91abded02e8e470b81415cb9": "c7ac117357e623c7abd81bede2138291",
".git/objects/18/89f2cc95955796491e8dfb9259bc564ddbb0c7": "b6fbe9a7d86812004f8b29af5d07bfe3",
".git/objects/1e/bce0c4d87ffa7f18c676e8f6353a8b38481b10": "d0d2769d49d260e8683571d7fdd686ac",
".git/objects/1e/c5cbd4c65252af16f18d39b00dfecb1d4114fd": "ca46a5e561f74d0e4696dc58faf4a384",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/22/db0810f4106bca920366e32b03ad8110138a30": "8d99569714c0a2f7c55455e6234f7c29",
".git/objects/27/0c772500465f8a226e388b390a750babad14b3": "029973ba9998f226daa033f0b2857d2f",
".git/objects/2c/b525bcabae06fa00e1b613f94c5e76451234de": "4f6167a4c89fd924fa909880ac9dd589",
".git/objects/2f/c0267c5ddb5937f0f477b95739947831c72a99": "3be6a09b829f67921d8261f4e12a6654",
".git/objects/30/1b938ef5492baa8a362971085c11f81b7fd0d8": "020c124a44d6a00c419c264e888e021c",
".git/objects/33/1867edd144523dca0d151439a9c8c66e9369f4": "3a91954d035ec959d583f711f0531522",
".git/objects/37/3773b1e987b34a0b92656fdd308d292ad9f806": "a80b71d0749eeccb09cd43eb5b59456e",
".git/objects/3c/6fc275c505e962cb6b9146cd3251a8d388c069": "76e22ebc34f39873f0c82541ec5883f4",
".git/objects/3e/793310bc0d74754d9b62c8083ae7d6797c4b8f": "30556ddfc0182f493e0723dd95f5a6f2",
".git/objects/44/b79d8fe10c686b34f0318afa7bd2811b86a6ec": "8839cc357fdceb7a28a88bcc2994c0b5",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/82b2b2eed9a46d4ac4519c2cbc26cc9b3daa17": "0cd2e8293777c459c7c94ac811cd877e",
".git/objects/48/4ae79599a2f7465a26369a70dab9bf70b8755c": "e4eb18e765cf7db4b53bf06b85c4c2aa",
".git/objects/48/6fef272dbe85398cce44454a89f8d0471aff46": "78b4e310d9ade60f9624a26563855577",
".git/objects/49/75bbeda8993285d6f200ddcbde1eb1b0bdf0e0": "ffe83dd220bdf77701dba469af89a7b2",
".git/objects/49/fd27b197eb4c566c8d6b30045a04765a00c9c2": "2b0f70eb17b2d324ff454a50884ca7cb",
".git/objects/4a/0d8649b3d7a33178c7cb5b77322b624678303c": "ec4cad7dd63d9742dc8334669e138d43",
".git/objects/4a/1136307d15c47afcebaf219530e5af0ed470c6": "1b627febbffeea694c060a003ffd9911",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4c/f019ef1b00749f2352f9c11c36906d1bf2aa25": "b452fbfa09adf1f807636560268c074c",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/58/47a7539ba84dc19304556abb3ba09036499555": "765a1f448c10ed924437d9cb64994d16",
".git/objects/59/134dae718fd3fb4b3fe97754ff26712c819c5c": "2eb182dec80bae34bc572f837f549920",
".git/objects/59/23404495ea66ce6c77977988fcf029f525bed7": "54699895a0a8a27b0d89890d90ebda68",
".git/objects/59/59720989ce0eb607b96d7aa8054013bd46d8f8": "1b730f6a4d7d64e392a84e6d853d564d",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5c/0f45cf38c5796581376b6be03b5fe9409d1903": "0be60df2d2a28ca7597cb7dad65ee970",
".git/objects/5c/339ed6f0de0f4ec4d9348aa32c73ec5c2b2461": "07ae76f9543fa87563c4ceb6b83a5b45",
".git/objects/5e/b731ce9b58563f65e1a2c1836a3ba56a8cf4d1": "724194a9135d76b05ba79c38bd3c4b55",
".git/objects/5f/2ae9dc70f24dce6292a7598cd3136b35c89547": "f0848b2d109ffedb329e21cac1d6503c",
".git/objects/61/c93ee80a9de744499fb5908554bc0a9cc423b6": "df47a57fb24ce4005fd835fafdcc22d0",
".git/objects/62/cd2d56de75edc12a1d370d039f06973394b303": "22d46b727e3d3ab861685f0e1c5be26a",
".git/objects/65/f550e7d7e34f5d9df7b268838256187e2fe6d9": "83d1925e062528fd70d5727da7021214",
".git/objects/69/069c7ebbb293dab39497138f589e430349405f": "53db3384c3aa55660545ca2262c13d32",
".git/objects/6a/3feb45d188fca9ff42afc904d3bf3f83f31875": "e89b11f8403b92bdc1b3f27dd1feb446",
".git/objects/6b/0aa8eb9efbfc39afe21e40de3070ae4aefb806": "73013b8b5b032dc2f42ae8f7924934bd",
".git/objects/6b/41de7a3d9ec9a2213f2ab6e1f8f9e2c6253d50": "9c8520acae76dd78ed9d2f895effad7e",
".git/objects/6b/b40422170586fe84460c9dbd8a7e1bb2fbcdbd": "6fb3ddc8813c2a3b8d5d27fd7b79aa25",
".git/objects/6e/96906be949c18db8ac5c863c33f139a55c8ae2": "5e9afb19752d99c000c4f184c41c32ab",
".git/objects/6e/cd19a5253b6cfe75f540dfdd23e42c59d30ea6": "84cc10fae6f30b5863f6ef8e69f8a75c",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/6f/a2b436f77f67f713f12ccbdc845a760657792d": "73b7f0b76a3e8e415ccb0b31ee5a5c68",
".git/objects/6f/d878ef30dcd482d435093228c5cf2694f7ecd2": "0c1231eb161a6ad1ea24cf92c885d411",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/71/92e386121a8f63cbeb23ecf460eb721e5bb6cd": "ba1b14c3a858c2a3e8267f516adfa957",
".git/objects/75/eb570b61cffb9e1ec9650cf60b10b11c8c0ff1": "c5b4c6463861652e7b0eb3b4800ae66b",
".git/objects/75/f00ba433461259a4f70f0bcd935a0c18d23421": "5183a9c504beb00c2d78e6e83e114b78",
".git/objects/81/0c7ef1f756a62a447ec2ffb5a6f3c34b422612": "f0805e1fee26e2ed3c0ec48ab10f0241",
".git/objects/82/b1e1952229baa818398db34509f4faa045d940": "b3cf1e7d58860e80f5e98604c4669bc8",
".git/objects/83/f7f842b0fdc203bb3700d13b79f4a763af122a": "aa0594cf45d4a77ff5ac3b3d3704a123",
".git/objects/84/0c07c244851dcebaf4c701c2cc945fc2a7570f": "322d3ada372db8c80a49b72465966b63",
".git/objects/84/8a0804d50bc7fc5f9531359459821d2b7dc2b2": "911435db7c10e4a3bec05e5161fe0e5d",
".git/objects/85/c333ed731ed1ea9a1090189113f778cc5f0dc2": "1ce62997ce3fb27bf853bfd33fdd74ea",
".git/objects/87/8dbfdb459165bd6deb483307d54a4a90ab417c": "3ea183080333f3d84895084dd9d32517",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/6881e0650408b0b5df90f035eb35c21e4192f2": "7dd2033a0d1fbf2d787a0d783afdaaf5",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/dbb7b5da7e418bbf9c0404a4e3fa86ace4e36b": "750e071272be895de2c16a4f3b2c2584",
".git/objects/8f/9195496df286964b0f8e1a7bb7b86ac4b72294": "cbf0dbf84c99af6a507e57138489ed5a",
".git/objects/91/5a8747b3de8bb8ae060c1e3a1e7dda84da48ea": "3455904339f635d158ce44a0c3b5f4d6",
".git/objects/91/fb44f1d837646eb329ff58b3ec54b3fd9538f0": "e016422e03441148bdfa8237de628971",
".git/objects/92/40ac0b8ce6d039cd334d40f94953c19b556829": "56f90b31dbcad9943ff63086b01dbc8a",
".git/objects/92/70ce0aaf9a0056d412528d751db2277278dd46": "8e09160ef1f93ca4349c795036091e2d",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/98/094f41d29cc639c2bacc83be45ab68e6a6711d": "feaaab971da0b9ebc54e42555e44933c",
".git/objects/9a/16e5157449a0de602a0a98411a1af45cdee64b": "5ac4155142fe15cca5c612ea7d1cfeae",
".git/objects/9a/18fe8e91fa7afe2b07960a68f32c867373ae35": "0697a5f3fb8b076b12f5a777d8027d53",
".git/objects/9a/fdf70f6b657ea0f6e9d7d6afd5bbefe8c0bb25": "691f8a8b8f4e056617451f430b803be6",
".git/objects/9b/29d13a6e7f7ad2b37686aec6b586c888cd1ba3": "0d5a38b4ac74f22e82cbe983dc14f71a",
".git/objects/9d/5c99c5d60d5da16ca57a1e4b1660e750be6730": "bc5731b140082a5e8b277e3a6c61234c",
".git/objects/9e/b80a1e773e86ce5f20061149f5ba92cf4abfa7": "80ad4912d9457a5c6f8bb33b6d9842fe",
".git/objects/a1/ec8f2ee74d04576e276bdd7b77c2f258f1184b": "05bc89ac3bb8207b32db463d399b92c7",
".git/objects/a3/76ec07d36f0c0c453c641b5cb0f66e9ef721bb": "3925ca65ac3e29385a58616d2f8818f4",
".git/objects/a3/89d63924307ff7313517cd729282baff6277e3": "e1886643e4c03636f708d9742006b32d",
".git/objects/a6/e1963958e7fd98f63e39e6ad7b8bb41f399f74": "5590bd7abfd2b9f3add9937a763389ec",
".git/objects/a8/9242af75847b71418fa2439e9bcab179f1b7c9": "b35cbebddc0c7ca71c6787c12787ff2a",
".git/objects/ad/373a902a9ba3ef69bf38bf375591207538f01d": "97801bc52950937c8f9e30753fc0f9ed",
".git/objects/ae/2ebaafc8f2e0311ded7b06e8ec2e14959f3a84": "34d6ea52f7fb8d056757db216d6f3480",
".git/objects/af/144223c4d1f0bd687b90bb5700b65132581e35": "8f0b5837ca83b8588f9285681b7f3260",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b3/c77026d482043bfc8e601fce86e8cd698c1c35": "2743aa821f7f61fac144527fc508e499",
".git/objects/b4/108659dc86189c99d4fb165609ec835d4587d8": "837fe39e1c43ca3431e51b57b54251da",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/b8bf7e17f4b014f1bd48a3b06b8c37c21148f6": "f1c07e797b25ba65f39f6f96fbc7d5be",
".git/objects/bb/00b4080e193896efeb01561369629657471dc2": "6026bd9ac63574fd8b4f51634d59fc8d",
".git/objects/bb/5db311017b33d25136ca1baeee8cabe3f7a0d3": "97aaa3f5bd002c385f88a98e61eb7152",
".git/objects/bb/78a4d5063a8191c8698c122f809a8319b7c098": "6c006c5aeccb6c8a83c437c1070807b6",
".git/objects/bc/41b7ac1a48ae9baf761360e31c2f404a501291": "02d3d4edd92cdacc13fec28be3b50215",
".git/objects/bc/90136ce70797b4573e7ad073d7370aa7fc0fc0": "4ce38c9b5a68f146a91246d3847bae2e",
".git/objects/bc/b13b3854fbc706527223cc2480816df0c0ee05": "88cf6c48866240368fe308c87d469922",
".git/objects/c1/ea509f033edf541fc3dad2de83b88401c65443": "55e6c170c291efa6c4090ecb5d657cee",
".git/objects/c5/1899f250e70ce62eeb3129e7612efdca227b92": "7dc625db1dff29f6c7cac16c25f8ad58",
".git/objects/c5/19eef8202f6af0f389a7a30bebf2c5ad8ff3fb": "846bc84e4ba574d40f79b72efcc43393",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c9/a6c54bb47d2d4e32dc0694a4ed8defde40d8ba": "b17533b8ef7ab5d4dd498a3bbf106910",
".git/objects/ca/0282f153826ce83db0b1ff492c8c110cbd4ec0": "8be875f055d4eda285508b461d469a64",
".git/objects/cb/22baeaa263fb3519ef60cf715b987dd98563f7": "7ea539638f9302517ca9f1e11c061398",
".git/objects/cc/916506b4ca6b4c1c2e3e32d0be93e2374f4eb5": "ed3f4952db9e5bef38b5ed50b0208b7a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/3bca67d575617375e8c50ac32bf3abbff85782": "30dbcca43e686c68befdaa9e8acb7e9f",
".git/objects/d5/168e8a0acac53c0c25ac900395d062d0543651": "44309d380a03c63094d526727d02c3ce",
".git/objects/d5/865f195f4e93a48075ec5e6639dfa08bb32655": "f77bb992611873a3201c199e90183c57",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/a421c8a5387655d198335936a5e3b7cca8ffba": "7462820b4c7b2799eab2d70ea3dd0aab",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d8/ba1ecad7ed41f62bf2f32bd80ee127df634040": "ae23763464df75a149c10ae0d532d97c",
".git/objects/d8/fcec0f37dd574fd8887b2d89a58ab0e54681a6": "5c8911311c0200c79e37e014d33ee6d1",
".git/objects/d9/e785faf8df2c06c88ab4c8c051c3220db78404": "ecfb98b685ee60148b11a7cd7ac92012",
".git/objects/db/6e20c44b8b7c19e0d8cd29bc46b1dac661d36c": "63da5948c29f0339f50fbe66fc47ed9d",
".git/objects/dc/bff89ced4c5f1fb6394e537ebd3574563d1fa2": "e7c97db65a660d47f73e12ef7782a52a",
".git/objects/dd/4b446a4944d15f2a22b055cf3df9a08089d8ac": "cad6b538a560989464b4d79b1c81ff80",
".git/objects/de/b6a661c2b999fee6de07d9bf657e40b34fecc6": "58d287da8efbf8895b415a09b7e5399f",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e9/1424e04c2fedeab6aa3aa66465f300911dd056": "7db4a8b440b203d0b8d0eed6c54459ec",
".git/objects/e9/23bb1c9811c32a36403cff23c59596ea0acfa7": "2257153e5e2ceb0e6257b1a7aa7e1e89",
".git/objects/ea/9c9b1cbfc3260df55069e0430b39f03e913b4a": "7750effd26936da9180bdef230a617bf",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/c53aa56cf166a34d22f05386b318497367fd5d": "5a278545de8f7c8fd1df13f3125119fc",
".git/objects/ee/5c55dccf06f234748fecc45fc5f7452fbda2bd": "a3457b795f83f189f6fac8985a8183c6",
".git/objects/ef/e90d7285ac6e0cd24d56cb788f01093883f5a4": "4fa2ee15eda92a7fa1d48f38ec8719cf",
".git/objects/f0/4b560fed8b976b5d2fd6a8a2757c19acb7de3e": "f11be2ced39b763cff21d5625cc9c3a1",
".git/objects/f0/cfc410f08adf4507c1aecb2a0e858790cbfab6": "54a9760d60efffb1a18f1698f0d470c3",
".git/objects/f1/edc2f9da6a9bfdf982f7e0b86ca0bd9af362cc": "10c2276bd12adfd19d60f185676dd351",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/bcb3193dc1a69c0195dfeb6597f19264e68341": "2c4dd286ef3911239b8554d25116765a",
".git/objects/f7/da3f5a3497be265c6d4d9e5b46d5ae0b94f0c1": "71b67f75b255c48f8fe4509feec46c25",
".git/objects/fa/a2c0ec2d4b75b76956300b63fd7512057b4dbd": "a02d4ce463b35cfd958aa44fd2e3a390",
".git/objects/fc/1802e23d62f35e889cbe232fd01f7513461a96": "8d1af72664488b7ea07ef60277fd5293",
".git/objects/fc/c8b75af03f2443f415f820c816c81b74814f67": "f6c2a8d98129090e6c1c88f0e06f05c2",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/ff/d4299c2f60f47217950b6199d7b1bb89b19507": "65e067343cbefaea78d234180aea3737",
".git/ORIG_HEAD": "0e61a7e382434935e20dae9e68ec70ee",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/REBASE_HEAD": "d2a1aae9568c9a507deacba89801c063",
".git/refs/heads/main": "0e61a7e382434935e20dae9e68ec70ee",
".git/refs/remotes/portfolioPage/main": "0e61a7e382434935e20dae9e68ec70ee",
"assets/AssetManifest.bin": "2f41776ef4b23ec21bd27e39a59a6dbb",
"assets/AssetManifest.bin.json": "3eff29fa9fbba450ef6bbad8f65ebc07",
"assets/AssetManifest.json": "6b00eab54c683325837a700fb5fc03af",
"assets/assets/images/android_icon.png": "038ea15b40a395099451862327ebcfc1",
"assets/assets/images/css3.png": "b1bd0673d70ccee89e1457bd71554759",
"assets/assets/images/dart.png": "1a089616e2be1ac7c5188c00225772c8",
"assets/assets/images/desktop_icon.png": "e0e90a080a776fd1da23f5a249b5ce3c",
"assets/assets/images/docker.png": "722cafb6c71b44bba6292a603b2e198c",
"assets/assets/images/facebook.png": "fa74fe1619d75d68df1f0db7c654e39a",
"assets/assets/images/favicon.png": "f35e3a6eae1a9fe6c316e7f28dcda0a0",
"assets/assets/images/flutter.png": "abe34b0551ded954f6759cada7807e3e",
"assets/assets/images/github.png": "7aed3646cbea181a3da85620809e992c",
"assets/assets/images/html5.png": "9d5b22bfe74ac513d5cd33563908ae71",
"assets/assets/images/hugo.png": "6c341d7823570ab705c940f1dea993ef",
"assets/assets/images/instagram.png": "02c7721e097a6bb001d00fa61750bc81",
"assets/assets/images/ios_icon.png": "4b8039e8a442657c7b9b379322eb2793",
"assets/assets/images/java.png": "adf31a90f058ab7443d57617e56b6faa",
"assets/assets/images/javascript.png": "ab8e2beca091db2345ff66a5cc432985",
"assets/assets/images/linkedin.png": "e4d142586676a80b3927d899d3584148",
"assets/assets/images/profile_avatar.png": "f4b0f7b141e191f69717662284ea8caa",
"assets/assets/images/profile_avatar_720.png": "0d3af6100ab6854cbaf911d6e85c5e8e",
"assets/assets/images/python.png": "e04382338533c6bb0dcfc7a48bf86502",
"assets/assets/images/telegram.png": "d940cd7b5e7b66510b59785177c6414f",
"assets/assets/images/web_icon.png": "8867144689b70d099377ee3c4ab1baa0",
"assets/assets/projects/placeholder.png": "ea080793846f3e65b4ef4f7104f41866",
"assets/assets/projects/portfolio.png": "5c78d9c9af51639fb163c5d4ccf00302",
"assets/assets/projects/stards.png": "bf4a9e219371680beb0570b43df026f4",
"assets/assets/projects/traffic.png": "34380ef3fa2d1fa81946ab86b79ee0c6",
"assets/assets/projects/weather.png": "a528f20f956c64a80a92b750ad867ff0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "9429359b297c6803061f9a02a931743a",
"assets/NOTICES": "0a8d05c8b1869580511ed2082285c3f6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "c54b7347fb2952815f6a17653f4252b3",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "f35e3a6eae1a9fe6c316e7f28dcda0a0",
"icons/Icon-512.png": "b3363b7baf59e67839535426d09f0328",
"icons/Icon-maskable-192.png": "f35e3a6eae1a9fe6c316e7f28dcda0a0",
"icons/Icon-maskable-512.png": "f35e3a6eae1a9fe6c316e7f28dcda0a0",
"index.html": "923e3ed382b212b5c50ac9509ffff592",
"/": "923e3ed382b212b5c50ac9509ffff592",
"main.dart.js": "c5bc934f026e582ce4e3ed835ea49faf",
"manifest.json": "cbc5e4f8de617bd316c50490c78fb14f",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
