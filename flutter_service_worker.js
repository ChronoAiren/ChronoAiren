'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "2221e337ff2eea751c30d99f5dde2ffb",
".git/config": "b060ab768ab48f11f92fed4efa7b7343",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "ae056a04be8d17b69d422dcbb2e205e8",
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
".git/index": "a7c5def3f235f6b91e9241888ce45c2e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a7dc9f0a2d9e574a0c75620010498bd1",
".git/logs/refs/heads/main": "eb1d015e926ba324398cd01c2be184ab",
".git/logs/refs/remotes/origin/main": "d7108d5da2a419cc541e9fffbb5a993b",
".git/objects/05/cf4dac182a9e54e2485ec958112cb8ff4b2fb5": "b2861fc8b796d4fbf15d1b3b4a5b9fef",
".git/objects/06/d55d88ea29ac40c1f98188ab210672c1258529": "04ef745855725ebb05d0a69480063ef2",
".git/objects/08/69d1d6431fa71ddbd40fb5a5938d98f1a21a44": "f04878983dfb41ecb4ff8a6e12f1a393",
".git/objects/0b/60f2f02e193ac47134afacf53f2612e2516ae3": "89457c85b2c03f63f5aceb020179bdfd",
".git/objects/0d/e2cb00336166a065667f52a1c9bc7d9cb023d2": "29696a39718535f76db8d9d54a098ecc",
".git/objects/0e/6c13f3e3cabcd7d5de074eda14727adaa908c2": "0829c9765105e0e1882538e6cdd41840",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/14/b4dbb7ea022ec7c3e1ff8e7e39d31d01246f95": "3da74ada806c134f23d3f1f0849ac6e9",
".git/objects/15/367fb9b3cda1236a81abd2fedb9d3e4406cba9": "27199369f6100a18f54c5a4e2bc057f8",
".git/objects/17/de0cdb4fc043c74570ed0ffb0b2baacd5ba030": "da0acac0ce41e5e70ce545418c96834c",
".git/objects/19/edfad06993d17538a86f17f31f0a6a4c2ee7fe": "9da4a210f0b34310a3259e3e877a4ccd",
".git/objects/1d/4cd14ef00fd4ed6835610cb61609994125a0e8": "837194a71b78d10887fcd2c63c258cee",
".git/objects/1e/c989d650784e1e5687e78bac04cf8267fb670d": "2974a778ad334128ce66e19ca2e38118",
".git/objects/1f/d29c7239e25989353ccf0b34872579a1ceee80": "aa15aead7193e2c878cdb60dd8fdb965",
".git/objects/20/433578110354973e79d7b2f236a5dccd646468": "5f751bbc4f05038de4d220f001829904",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/26/97158206a0dae7df4070653ebb29a3dd0a931e": "ebb2e3a03af022f51ab46dcdc6fc6d6f",
".git/objects/29/1e20deb407b69c50b4b836944f1b906db06ce9": "ddfadfad0f90b81bbe87617d5bfdc1c7",
".git/objects/2b/ea559c1e198b12f5c9a4f13ac2d0d61c8e31a0": "3bbda2bf3bcbb8e833c8a066d958c04a",
".git/objects/2d/9e7fae9daedc3543c3bdb47a9ffd7b012c3248": "5c6924d3f43c745c919be89f3f2ef2e3",
".git/objects/32/f973f7bb419dfa75a6a56ce0b6c651b866b6ee": "1dd0198dd91818c5650780e1d2579791",
".git/objects/35/23b593ccfea962f1b6744e40b86701b43412c0": "6f1bfa20609363b37d6d2cb671fd2987",
".git/objects/35/311b926e055df1c61bc68e194f70cbb8b10892": "cd378eb4dbc909b4a887561cc08407f6",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/38/29e0543425ae17f6b27bd4a06f752a8a1db8c4": "eafb212d8007c739e72ca50df1494a15",
".git/objects/38/d56fb31a94ca358913c3705ba18fd4721ce856": "20aaf9c39ed5735443edc7203afca5e4",
".git/objects/3a/3c8a1bb2d00d900b1b70bd2923125be952b88c": "503ffdd7f08e201c67374ea18255a666",
".git/objects/40/44f6e339f7b10d74a1b41ad98fe22c2ff593f3": "fa6dee839247352799e9634beb4e56ce",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/41/88f545dbf0f3907cb0b20d5dc0037278ad722b": "bfe0a48c1b3aceaf58b8dd90ce1adcec",
".git/objects/41/911ca6a76397ef22761b334a55da7672f1ff93": "090fb5fa104bb4572e1d0bb77c4be47a",
".git/objects/42/6861417237b6755020a603d32214762415bcd9": "7e01209966709783566cff0ab2c41baa",
".git/objects/46/2fd856ce9f3f0d6393770cee7d06c88b302c90": "8a17ae291b8aa21f32eb211a02dcb767",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/813d1105633cc56d2b11ef44eb47ff4269fcc6": "ab69ec9657bd98ebc4fa92158d069080",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4b/f71e644677c03b8c3a1542299c215926bfbf4f": "3a7c46618e82ab0134ed391be12b8158",
".git/objects/4c/d52cac0015d8d747177ec02b36dc9bd1fc05e9": "28734a341200cbb920e4a5ccb3c9c11c",
".git/objects/4f/3efc618842effff64981af02a39fa88fc2e5f5": "04029739eb5810e0e7477deb8142eb2a",
".git/objects/50/d7e7d2774c452d757fe95be621b20e637d251d": "f62c72343237521673be65a8d4ce1d24",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/55/4b09f2a787e93456bc4909a5ff160b80c0a83e": "0fffdbf3b9d92f1cef7061ea0cb98032",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/56/240ae8123ce1358a22effda910982584c43d47": "fc469c0429c7e4e24cce8bc19149d1d7",
".git/objects/56/daa4438d1ee80b5656c3e00962404999d531a6": "77206bf78627046147346491e3f07625",
".git/objects/57/bbeacc0aab02c533c249ea051140872b90a820": "5dc2f6c03eb52ad7e1e2ff7f61367746",
".git/objects/59/71224f73542240c5a0b31fd6c962bc78e7ddb6": "cecd86d18b7a4c176bdd92b28045fc96",
".git/objects/5a/44c6b2bc3067cc0095c5ab1fae7f4f35b70e95": "b8bb30c001a96bc6fadc76f9d5e807cc",
".git/objects/5d/5fb44cefaaeeaa50b2686cc987b339de96c30a": "d06c0d124f957f1f8d4f4ffa5b2e1348",
".git/objects/5e/3a1fceed0f3d31a9baf6ed728531a31bd8b8cc": "d7e971db1d90043d64fb6a99d8b054c3",
".git/objects/5f/a65691183195f578bf07697b5651e4a2d038c1": "c1c47c612721c46f149d029f972b4e43",
".git/objects/5f/e423f42b049c51264a72ea9b71301ddf873cfe": "bb11edfe32e8286ec71e1d98deeb4088",
".git/objects/60/4eac88b274f4320cfc1de0d1b7f01f787e2ea2": "80bffedef46a13947f768727fb683fbb",
".git/objects/61/0f6cb3fdf4939e8a92c270c98cd59e8de9bb82": "80980c3d9a6d82a8f04933720254d822",
".git/objects/67/5fd8c7c3ea544b1707d2020740413b808129fd": "98d5dbdfb4be348d562e8716816df644",
".git/objects/68/83fcb4121a777d7694a0f386b70cf5f45949c2": "98de78bfa36c861af490c324263ca2fc",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6b/66d01098c3467dab9240ececf3b0f99a430a67": "7b855659acdc30773f8c5b8ee7c4240b",
".git/objects/70/8aab30351a7287fec534037ba8acea5fb26f76": "c8ef9538c930bce0f805cbf93188552c",
".git/objects/71/61f56b0cff86754a6aa73fa14f76773b9bb134": "0929984779d2dbf79f0e3189226c1e8d",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/74/54d9cf46aca558ad2346529de2389e4ce2596b": "abc1e791417a4805a6824b6341e20bf3",
".git/objects/74/5a5434f5a852796c079647329ea49affb87e8c": "2cabce55dc1c53a2e6b96e1a0e1ace18",
".git/objects/77/ebbe4a1e86e6b99a628549de843b614e71e77b": "00353ea5079b45f4d5236774904c5bf1",
".git/objects/78/42ccc429704556b0088f105115b705d38f2663": "28450f74e2938c7d8b87147ab659e640",
".git/objects/78/ad9f6b1f1f147322cf207403817a1689f26cc1": "5a3f81f67ae416fb82ac62fbda061f12",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/3d1f31d1ba314ed804c3b4867dd1f09f7396cc": "98746555cbd1a1d889b570fa81f019ef",
".git/objects/7c/7df7fa805220c9165353c6cfa89400a17de88b": "cf4feb7a7a4698b22c56a7628b5d64be",
".git/objects/81/07059a5b3ade24f418552c710f6e3071072fc7": "194002984b7a991fdc0633113969b9b0",
".git/objects/82/2294114d6293f70931fcfd3061cf3c7d0a4ca9": "55aedfb4a6f8a9601fe779291799569c",
".git/objects/82/fbf44dbad250a4df20d9130df4d6ab37921916": "f5632e3773567f920f6097fbe71e7006",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/86/8b6fbbc7d2e5a915d48aa6da9cae13c9d2217b": "d8149ff798c64ec5a65227ef5ff2bcb6",
".git/objects/86/fd289b68735222560f4528c3083e2c285b8e4e": "e27c41707c441fa68270568cdd722525",
".git/objects/88/ce5f0e7677974660e2a48847b5f8bd9ba3d353": "724577b13bada5d08bc3fc79c2d74228",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8f/90ff7b2ac2152e235e501ca4316f2d0c35719b": "e4aed5a8ced6c6bdb0b6048d60781601",
".git/objects/91/1775ec21f34f407a02949c201d0e82e947e247": "d0e924203077946058068b82a16c5401",
".git/objects/94/135a209a82ee537eab4cc4f6c62d4879ae3a41": "d681b293d7cf8cf501d6d63511ee3503",
".git/objects/99/c2cff13ac3625d4075bc415d860db5481da531": "99d4bc400476b4cef721dd8706be3241",
".git/objects/9d/a06be49648f1bb057589183f39a874a19d095c": "e3eeb2debf7a83c0d8c0446b2bf39951",
".git/objects/a0/2de3c01fc33a1139b8a11cda6e337aacb11dfc": "4635e1557c5e8d00bb00c41b00aa7d4d",
".git/objects/a0/d66c916b410a3d6ac44257249af0ffdcad0496": "c86290beaf55554f82168ba2a7a66fb5",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/a067ceb1c7e1debda0be9da009dddad0cfc688": "24cadaabe2e8ddf10b9821b17737903e",
".git/objects/a3/163d954ecb0f74f9b9f3a2a6a928f18ec00092": "3fc17fcdabb8cf1c8b0e33705455ce65",
".git/objects/a3/253c62e7b4ef0adc74b9b73dc94dd1377182da": "7b6cfa3b3eef984dfdf6c840c02ff206",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/f4824d65005268da82e0af071e3baad7117ba5": "9eb68dffe5fcad1a6d4a1303524a23b9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bb/eda0fd38beb499b7eecd01c4c18137927195c3": "2d47d28d802b9a95d244e8475df8f8a0",
".git/objects/bc/5d52569f656e7bdbfda9271e8b335a472b3669": "c4a42351b4bc24e3828c21c200d57d81",
".git/objects/bd/54d0475b5725da93dc650c7a994c37b967418c": "4302f2272e7055e7e258c9bde9a4e6fc",
".git/objects/be/35fca5b0ff15ced3673551b9b075423881c1ce": "2c120dcd4b95c900b0df756dcabd99f3",
".git/objects/c1/332a5882467bd65c488380a48245baf8bcc112": "5630e5d2649e1b63e9ff5988739f7bac",
".git/objects/c2/f941a9ec6b9ef5bf6ab70e793414930473307d": "0c996709626036c80e5d8829562ed7ba",
".git/objects/c5/4718d9b88ee37e46563fece04e81e600423aab": "436c2174992171bfe2f6cd34f052da87",
".git/objects/c6/7d59968c267b290fb67c3e6f174bc2fffa4820": "bbb58b4a29b6a54d220fc57c8785598f",
".git/objects/c6/f1a438d211eb185176c2b48626c29c81fd7d79": "6c79c76ebe603932580c502d18c772c1",
".git/objects/c7/735e526a7e82c82e5c00c619f7d304cde9e1b2": "b57932e0aebc296b84cce00a220ac62f",
".git/objects/c9/889e824b6d4f2a81a1a10fb25af255cd97f021": "2e763ba218adda7e80fe54c3e5bbcd07",
".git/objects/cf/71c736c45c62dcf28914e57baa7b005a083af6": "7e0e926c9a1509ee5207777027f136b1",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/661dfca38d8eaa9f97926ac7aef5900fd482a3": "d82ce8646db15bb501a38c0929213445",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/639a7178f81bc52faefcbb649cb0048f4a50e7": "262b014f589ae29c389f947b76a6374e",
".git/objects/d9/056db41fda1589b34bf325ed92dc5bf62f0f73": "cb34e5db203b79f6b8579c30b520644e",
".git/objects/da/2e44c1de2cdc56a5fe4194cc1c0a3f20013372": "2014e06aea3c5b53728e30e86c7f5224",
".git/objects/da/530ecd35e6bf845550d1dee85179fa1ec56d4d": "59293d7b2d1d5f905bb1ec7d360c5523",
".git/objects/db/b38ed8bd014d6fa2b4e2b6a1e2f8adbae2274b": "5753ac358546a7c7c7846ddbce10bedb",
".git/objects/dc/fcbf1fabd3a6cb44975558f914d4e3bc36e18a": "b748e7c7427243c7e0ef8d4e5e67419f",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e0/45cef700fc6d89f561eb199fd743021ba00c68": "4b5642eeecdda78c6553203ce9e5d9a2",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e1/ae9c437fcf9c57ae7c0321d944a8b8c23a0866": "460c245a2b9569e4d887b0bd2b3e0910",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/ea/9ef8b8ab1b0e87d09b3f8846a41659cd698757": "0a99f5e1d90339425addd0a0afddc3ab",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/4280dbc6f4a45996622d8403a2bb5846ee4cdb": "6df1253003100b8fe446c9b2ba75123e",
".git/objects/f0/2f52cf459329d3812b662e5f91dbda6110e6e6": "755f4cea985d11705480cefcdb4cbeed",
".git/objects/f0/6110900ff0bfe1ac1448146e0fdb8d261379e4": "5b2f2a7c2a7645da0d0e9c12dd0ad088",
".git/objects/f8/8c86f43b4f12ed3971a0855421da5f4b943417": "0e1c65f57ab7af260aa57d47bdc012d3",
".git/objects/fc/c8b574a47ff707fa58b88e39d6ce42fbf89fa2": "594c63b834ab0f707da9803ac6c28562",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/ff/7a3fabeea0efb97baf8707bb57b5322549e7da": "59fc314b74b6f31068b438cb6668859b",
".git/ORIG_HEAD": "9cff0a7c86e59b4b814b9fca2f8c3d5c",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "e3ffecf301476c9cf3d48bd8a6073562",
".git/refs/remotes/origin/main": "e3ffecf301476c9cf3d48bd8a6073562",
"assets/AssetManifest.bin": "e22653ede92eaa0b547b48b0c8b2bc0c",
"assets/AssetManifest.json": "e21f0de3e9ae975381dc3c047df17ba2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e5efbc96bff36c67e65c1a643a95f339",
"assets/NOTICES": "996b5c78cc78eed007104fa3118057f3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c68292b4ea9071551d8e4e2f0ba242eb",
"/": "c68292b4ea9071551d8e4e2f0ba242eb",
"main.dart.js": "a0c7347265acb470348cb5f44719f6fe",
"manifest.json": "40ba793a176128587994139cc3bb2098",
"version.json": "3be591150cb073ac51296b5c4345d0fa"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
