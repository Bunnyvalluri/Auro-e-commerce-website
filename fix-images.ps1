
$json = Get-Content "products.json" -Raw | ConvertFrom-Json

$imageMap = @{
  # LAPTOPS & NOTEBOOKS
  "prod_laptop_1"  = "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop"
  "prod_laptop_2"  = "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&h=500&fit=crop"
  "prod_laptop_3"  = "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500&h=500&fit=crop"
  "prod_laptop_4"  = "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=500&fit=crop"
  "prod_laptop_5"  = "https://images.unsplash.com/photo-1527434096122-ac7bb8f4b8f1?w=500&h=500&fit=crop"
  "prod_laptop_6"  = "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&h=500&fit=crop"
  "prod_laptop_7"  = "https://images.unsplash.com/photo-1588702547919-26089e690ecc?w=500&h=500&fit=crop"
  "prod_laptop_8"  = "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&h=500&fit=crop"
  "prod_laptop_9"  = "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&h=500&fit=crop"
  "prod_laptop_10" = "https://images.unsplash.com/photo-1593642634367-d91a135587b5?w=500&h=500&fit=crop"
  "prod_laptop_11" = "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?w=500&h=500&fit=crop"
  "prod_laptop_12" = "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=500&h=500&fit=crop"
  "prod_laptop_13" = "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=500&h=500&fit=crop"
  "prod_laptop_14" = "https://images.unsplash.com/photo-1705229579946-e5c48c7a640a?w=500&h=500&fit=crop"
  "prod_laptop_15" = "https://images.unsplash.com/photo-1491933382434-500287f9b54b?w=500&h=500&fit=crop"

  # WOMEN'S FASHION
  "prod_womensfashion_1"  = "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&h=500&fit=crop"
  "prod_womensfashion_2"  = "https://images.unsplash.com/photo-1614251056798-0a63eda2bb25?w=500&h=500&fit=crop"
  "prod_womensfashion_3"  = "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=500&fit=crop"
  "prod_womensfashion_4"  = "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&h=500&fit=crop"
  "prod_womensfashion_5"  = "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&h=500&fit=crop"
  "prod_womensfashion_6"  = "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&h=500&fit=crop"
  "prod_womensfashion_7"  = "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&h=500&fit=crop"
  "prod_womensfashion_8"  = "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop"
  "prod_womensfashion_9"  = "https://images.unsplash.com/photo-1583391733956-6c78276477e1?w=500&h=500&fit=crop"
  "prod_womensfashion_10" = "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=500&fit=crop"

  # MEN'S FASHION
  "prod_mensfashion_1"  = "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=500&h=500&fit=crop"
  "prod_mensfashion_2"  = "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop"
  "prod_mensfashion_3"  = "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop"
  "prod_mensfashion_4"  = "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=500&h=500&fit=crop"
  "prod_mensfashion_5"  = "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=500&fit=crop"
  "prod_mensfashion_6"  = "https://images.unsplash.com/photo-1507680434567-5739c80be1ac?w=500&h=500&fit=crop"
  "prod_mensfashion_7"  = "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=500&h=500&fit=crop"
  "prod_mensfashion_8"  = "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&h=500&fit=crop"
  "prod_mensfashion_9"  = "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=500&fit=crop"
  "prod_mensfashion_10" = "https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?w=500&h=500&fit=crop"

  # KIDS' FASHION
  "prod_kidsfashion_1"  = "https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=500&h=500&fit=crop"
  "prod_kidsfashion_2"  = "https://images.unsplash.com/photo-1604671368394-2240d0b1bb6c?w=500&h=500&fit=crop"
  "prod_kidsfashion_3"  = "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=500&h=500&fit=crop"
  "prod_kidsfashion_4"  = "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=500&h=500&fit=crop"
  "prod_kidsfashion_5"  = "https://images.unsplash.com/photo-1543087903-1ac2364a7858?w=500&h=500&fit=crop"
  "prod_kidsfashion_6"  = "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=500&h=500&fit=crop"
  "prod_kidsfashion_7"  = "https://images.unsplash.com/photo-1503944168849-8bf86875bbd8?w=500&h=500&fit=crop"
  "prod_kidsfashion_8"  = "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?w=500&h=500&fit=crop"
  "prod_kidsfashion_9"  = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop"
  "prod_kidsfashion_10" = "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=500&h=500&fit=crop"

  # APPAREL & HOODIES
  "prod_apparelhoodies_1"  = "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=500&h=500&fit=crop"
  "prod_apparelhoodies_2"  = "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?w=500&h=500&fit=crop"
  "prod_apparelhoodies_3"  = "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&h=500&fit=crop"
  "prod_apparelhoodies_4"  = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop"
  "prod_apparelhoodies_5"  = "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=500&h=500&fit=crop"
  "prod_apparelhoodies_6"  = "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&h=500&fit=crop"
  "prod_apparelhoodies_7"  = "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&h=500&fit=crop"
  "prod_apparelhoodies_8"  = "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&h=500&fit=crop"
  "prod_apparelhoodies_9"  = "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=500&h=500&fit=crop"
  "prod_apparelhoodies_10" = "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500&h=500&fit=crop"

  # SHOES & FOOTWEAR
  "prod_shoesfootwear_1"  = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop"
  "prod_shoesfootwear_2"  = "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500&h=500&fit=crop"
  "prod_shoesfootwear_3"  = "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&h=500&fit=crop"
  "prod_shoesfootwear_4"  = "https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?w=500&h=500&fit=crop"
  "prod_shoesfootwear_5"  = "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&h=500&fit=crop"
  "prod_shoesfootwear_6"  = "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=500&h=500&fit=crop"
  "prod_shoesfootwear_7"  = "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=500&h=500&fit=crop"
  "prod_shoesfootwear_8"  = "https://images.unsplash.com/photo-1608231387042-66d1773d3028?w=500&h=500&fit=crop"
  "prod_shoesfootwear_9"  = "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&h=500&fit=crop"
  "prod_shoesfootwear_10" = "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&h=500&fit=crop"

  # CLOTHING ACCESSORIES
  "prod_clothingaccessories_1"  = "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop"
  "prod_clothingaccessories_2"  = "https://images.unsplash.com/photo-1613456187548-44b9c4e4c64b?w=500&h=500&fit=crop"
  "prod_clothingaccessories_3"  = "https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=500&h=500&fit=crop"
  "prod_clothingaccessories_4"  = "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=500&h=500&fit=crop"
  "prod_clothingaccessories_5"  = "https://images.unsplash.com/photo-1607923432780-7a9c30adcb73?w=500&h=500&fit=crop"
  "prod_clothingaccessories_6"  = "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=500&h=500&fit=crop"
  "prod_clothingaccessories_7"  = "https://images.unsplash.com/photo-1591195853828-11db59a44f43?w=500&h=500&fit=crop"
  "prod_clothingaccessories_8"  = "https://images.unsplash.com/photo-1556021580-77a0e939b0b3?w=500&h=500&fit=crop"
  "prod_clothingaccessories_9"  = "https://images.unsplash.com/photo-1589782182703-2aaa69037b5b?w=500&h=500&fit=crop"
  "prod_clothingaccessories_10" = "https://images.unsplash.com/photo-1627123424574-724758594785?w=500&h=500&fit=crop"

  # MOBILES & PHONES
  "prod_mobilesphones_1"  = "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&h=500&fit=crop"
  "prod_mobilesphones_2"  = "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500&h=500&fit=crop"
  "prod_mobilesphones_3"  = "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=500&h=500&fit=crop"
  "prod_mobilesphones_4"  = "https://images.unsplash.com/photo-1621330396173-e41b1cafd17f?w=500&h=500&fit=crop"
  "prod_mobilesphones_5"  = "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=500&h=500&fit=crop"
  "prod_mobilesphones_6"  = "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&h=500&fit=crop"
  "prod_mobilesphones_7"  = "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=500&h=500&fit=crop"
  "prod_mobilesphones_8"  = "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop"
  "prod_mobilesphones_9"  = "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=500&h=500&fit=crop"
  "prod_mobilesphones_10" = "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&h=500&fit=crop"

  # CAMERAS & OPTICS
  "prod_camerasoptics_1"  = "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&h=500&fit=crop"
  "prod_camerasoptics_2"  = "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&h=500&fit=crop"
  "prod_camerasoptics_3"  = "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=500&h=500&fit=crop"
  "prod_camerasoptics_4"  = "https://images.unsplash.com/photo-1502920917128-1aa500764b87?w=500&h=500&fit=crop"
  "prod_camerasoptics_5"  = "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?w=500&h=500&fit=crop"
  "prod_camerasoptics_6"  = "https://images.unsplash.com/photo-1617739080840-3e84c5d7e3e1?w=500&h=500&fit=crop"
  "prod_camerasoptics_7"  = "https://images.unsplash.com/photo-1495707902641-75cac588d2e9?w=500&h=500&fit=crop"
  "prod_camerasoptics_8"  = "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=500&h=500&fit=crop"
  "prod_camerasoptics_9"  = "https://images.unsplash.com/photo-1609881400943-17b4584b95dc?w=500&h=500&fit=crop"
  "prod_camerasoptics_10" = "https://images.unsplash.com/photo-1520390138845-fd2d229dd553?w=500&h=500&fit=crop"

  # COMPUTER ACCESSORIES
  "prod_computeraccessories_1"  = "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&h=500&fit=crop"
  "prod_computeraccessories_2"  = "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop"
  "prod_computeraccessories_3"  = "https://images.unsplash.com/photo-1547082299-de196ea013d6?w=500&h=500&fit=crop"
  "prod_computeraccessories_4"  = "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=500&h=500&fit=crop"
  "prod_computeraccessories_5"  = "https://images.unsplash.com/photo-1593642703055-4b8de8df17ea?w=500&h=500&fit=crop"
  "prod_computeraccessories_6"  = "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=500&fit=crop"
  "prod_computeraccessories_7"  = "https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=500&h=500&fit=crop"
  "prod_computeraccessories_8"  = "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=500&h=500&fit=crop"
  "prod_computeraccessories_9"  = "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500&h=500&fit=crop"
  "prod_computeraccessories_10" = "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&h=500&fit=crop"

  # ELECTRONICS & AUDIO
  "prod_electronicsaudio_1"  = "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop"
  "prod_electronicsaudio_2"  = "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop"
  "prod_electronicsaudio_3"  = "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop"
  "prod_electronicsaudio_4"  = "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500&h=500&fit=crop"
  "prod_electronicsaudio_5"  = "https://images.unsplash.com/photo-1574169208507-84376144848b?w=500&h=500&fit=crop"
  "prod_electronicsaudio_6"  = "https://images.unsplash.com/photo-1560186127-6ed189bf02f4?w=500&h=500&fit=crop"
  "prod_electronicsaudio_7"  = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=500&fit=crop"
  "prod_electronicsaudio_8"  = "https://images.unsplash.com/photo-1593359677879-a4bb92f829e1?w=500&h=500&fit=crop"
  "prod_electronicsaudio_9"  = "https://images.unsplash.com/photo-1625014618427-fbc980b974f5?w=500&h=500&fit=crop"
  "prod_electronicsaudio_10" = "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&h=500&fit=crop"

  # WATCHES & HOROLOGY
  "prod_watcheshorology_1"  = "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop"
  "prod_watcheshorology_2"  = "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&h=500&fit=crop"
  "prod_watcheshorology_3"  = "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=500&h=500&fit=crop"
  "prod_watcheshorology_4"  = "https://images.unsplash.com/photo-1622434641406-a158123450f2?w=500&h=500&fit=crop"
  "prod_watcheshorology_5"  = "https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=500&h=500&fit=crop"
  "prod_watcheshorology_6"  = "https://images.unsplash.com/photo-1615469800369-1d7e5789c7a2?w=500&h=500&fit=crop"
  "prod_watcheshorology_7"  = "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500&h=500&fit=crop"
  "prod_watcheshorology_8"  = "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=500&h=500&fit=crop"
  "prod_watcheshorology_9"  = "https://images.unsplash.com/photo-1619134778706-7015533a6150?w=500&h=500&fit=crop"
  "prod_watcheshorology_10" = "https://images.unsplash.com/photo-1591815302525-756a9bcc3425?w=500&h=500&fit=crop"

  # AMAZON FRESH
  "prod_amazonfresh_1"  = "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=500&h=500&fit=crop"
  "prod_amazonfresh_2"  = "https://images.unsplash.com/photo-1490885578174-acda8905c2c6?w=500&h=500&fit=crop"
  "prod_amazonfresh_3"  = "https://images.unsplash.com/photo-1506459225024-1428097a7e18?w=500&h=500&fit=crop"
  "prod_amazonfresh_4"  = "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500&h=500&fit=crop"
  "prod_amazonfresh_5"  = "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&h=500&fit=crop"
  "prod_amazonfresh_6"  = "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=500&h=500&fit=crop"
  "prod_amazonfresh_7"  = "https://images.unsplash.com/photo-1587740896339-96a76170508d?w=500&h=500&fit=crop"
  "prod_amazonfresh_8"  = "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=500&h=500&fit=crop"
  "prod_amazonfresh_9"  = "https://images.unsplash.com/photo-1574316071802-0d684efa7bf5?w=500&h=500&fit=crop"
  "prod_amazonfresh_10" = "https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&h=500&fit=crop"

  # HEALTH & HOUSEHOLD
  "prod_healthhousehold_1"  = "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&h=500&fit=crop"
  "prod_healthhousehold_2"  = "https://images.unsplash.com/photo-1559181567-c3190468d7a9?w=500&h=500&fit=crop"
  "prod_healthhousehold_3"  = "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=500&h=500&fit=crop"
  "prod_healthhousehold_4"  = "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&h=500&fit=crop"
  "prod_healthhousehold_5"  = "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=500&fit=crop"
  "prod_healthhousehold_6"  = "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=500&h=500&fit=crop"
  "prod_healthhousehold_7"  = "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=500&h=500&fit=crop"
  "prod_healthhousehold_8"  = "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=500&h=500&fit=crop"
  "prod_healthhousehold_9"  = "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&h=500&fit=crop"
  "prod_healthhousehold_10" = "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=500&fit=crop"

  # PERSONAL SAFETY
  "prod_personalsafety_1"  = "https://images.unsplash.com/photo-1614531341773-3bff8b7cb3fc?w=500&h=500&fit=crop"
  "prod_personalsafety_2"  = "https://images.unsplash.com/photo-1583947581924-860bda6a26df?w=500&h=500&fit=crop"
  "prod_personalsafety_3"  = "https://images.unsplash.com/photo-1590534247854-e97d5e3feef6?w=500&h=500&fit=crop"
  "prod_personalsafety_4"  = "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=500&h=500&fit=crop"
  "prod_personalsafety_5"  = "https://images.unsplash.com/photo-1601580600622-ac22c6d08b88?w=500&h=500&fit=crop"
  "prod_personalsafety_6"  = "https://images.unsplash.com/photo-1582582621959-48d27397dc69?w=500&h=500&fit=crop"
  "prod_personalsafety_7"  = "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&h=500&fit=crop"
  "prod_personalsafety_8"  = "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=500&h=500&fit=crop"
  "prod_personalsafety_9"  = "https://images.unsplash.com/photo-1601598851547-4302969d0614?w=500&h=500&fit=crop"
  "prod_personalsafety_10" = "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=500&fit=crop"

  # HOME & KITCHEN
  "prod_homekitchen_1"  = "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=500&fit=crop"
  "prod_homekitchen_2"  = "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&h=500&fit=crop"
  "prod_homekitchen_3"  = "https://images.unsplash.com/photo-1594125311687-3b1b3eafa9f4?w=500&h=500&fit=crop"
  "prod_homekitchen_4"  = "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&h=500&fit=crop"
  "prod_homekitchen_5"  = "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=500&fit=crop"
  "prod_homekitchen_6"  = "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=500&fit=crop"
  "prod_homekitchen_7"  = "https://images.unsplash.com/photo-1518893994560-6b22a47aec82?w=500&h=500&fit=crop"
  "prod_homekitchen_8"  = "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&h=500&fit=crop"
  "prod_homekitchen_9"  = "https://images.unsplash.com/photo-1549638441-b787d2e11f14?w=500&h=500&fit=crop"
  "prod_homekitchen_10" = "https://images.unsplash.com/photo-1583845112203-29329902332e?w=500&h=500&fit=crop"

  # PET SUPPLIES
  "prod_petsupplies_1"  = "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=500&h=500&fit=crop"
  "prod_petsupplies_2"  = "https://images.unsplash.com/photo-1548681528-6a5c45b66063?w=500&h=500&fit=crop"
  "prod_petsupplies_3"  = "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?w=500&h=500&fit=crop"
  "prod_petsupplies_4"  = "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=500&h=500&fit=crop"
  "prod_petsupplies_5"  = "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500&h=500&fit=crop"
  "prod_petsupplies_6"  = "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=500&h=500&fit=crop"
  "prod_petsupplies_7"  = "https://images.unsplash.com/photo-1601758003122-53c40e686a19?w=500&h=500&fit=crop"
  "prod_petsupplies_8"  = "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?w=500&h=500&fit=crop"
  "prod_petsupplies_9"  = "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=500&h=500&fit=crop"
  "prod_petsupplies_10" = "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=500&h=500&fit=crop"

  # SPORTS & FITNESS
  "prod_sportsfitness_1"  = "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=500&h=500&fit=crop"
  "prod_sportsfitness_2"  = "https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?w=500&h=500&fit=crop"
  "prod_sportsfitness_3"  = "https://images.unsplash.com/photo-1561049501-e1f96bdd98fd?w=500&h=500&fit=crop"
  "prod_sportsfitness_4"  = "https://images.unsplash.com/photo-1591311630200-ffa9120a540f?w=500&h=500&fit=crop"
  "prod_sportsfitness_5"  = "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=500&fit=crop"
  "prod_sportsfitness_6"  = "https://images.unsplash.com/photo-1591348278863-a8fb3887e2aa?w=500&h=500&fit=crop"
  "prod_sportsfitness_7"  = "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=500&h=500&fit=crop"
  "prod_sportsfitness_8"  = "https://images.unsplash.com/photo-1511886929837-354d827aae26?w=500&h=500&fit=crop"
  "prod_sportsfitness_9"  = "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=500&h=500&fit=crop"
  "prod_sportsfitness_10" = "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&h=500&fit=crop"

  # BABY & TODDLER
  "prod_babytoddler_1"  = "https://images.unsplash.com/photo-1519689373023-dd07c7988603?w=500&h=500&fit=crop"
  "prod_babytoddler_2"  = "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=500&h=500&fit=crop"
  "prod_babytoddler_3"  = "https://images.unsplash.com/photo-1531986362435-16b427eb9c26?w=500&h=500&fit=crop"
  "prod_babytoddler_4"  = "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?w=500&h=500&fit=crop"
  "prod_babytoddler_5"  = "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=500&h=500&fit=crop"
  "prod_babytoddler_6"  = "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=500&h=500&fit=crop"
  "prod_babytoddler_7"  = "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=500&h=500&fit=crop"
  "prod_babytoddler_8"  = "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=500&h=500&fit=crop"
  "prod_babytoddler_9"  = "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=500&h=500&fit=crop"
  "prod_babytoddler_10" = "https://images.unsplash.com/photo-1519689373023-dd07c7988603?w=500&h=500&fit=crop"

  # BAGS & LUGGAGE
  "prod_bagsluggage_1"  = "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop"
  "prod_bagsluggage_2"  = "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&h=500&fit=crop"
  "prod_bagsluggage_3"  = "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&h=500&fit=crop"
  "prod_bagsluggage_4"  = "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500&h=500&fit=crop"
  "prod_bagsluggage_5"  = "https://images.unsplash.com/photo-1559722727-6901a61c55f0?w=500&h=500&fit=crop"
  "prod_bagsluggage_6"  = "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=500&h=500&fit=crop"
  "prod_bagsluggage_7"  = "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=500&h=500&fit=crop"
  "prod_bagsluggage_8"  = "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?w=500&h=500&fit=crop"
  "prod_bagsluggage_9"  = "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=500&h=500&fit=crop"
  "prod_bagsluggage_10" = "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=500&h=500&fit=crop"

  # BEAUTY & SKINCARE
  "prod_beautyskincare_1"  = "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&h=500&fit=crop"
  "prod_beautyskincare_2"  = "https://images.unsplash.com/photo-1503236823255-94609f598e71?w=500&h=500&fit=crop"
  "prod_beautyskincare_3"  = "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=500&h=500&fit=crop"
  "prod_beautyskincare_4"  = "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500&h=500&fit=crop"
  "prod_beautyskincare_5"  = "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&h=500&fit=crop"
  "prod_beautyskincare_6"  = "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&h=500&fit=crop"
  "prod_beautyskincare_7"  = "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=500&h=500&fit=crop"
  "prod_beautyskincare_8"  = "https://images.unsplash.com/photo-1607748851687-ba9a10438621?w=500&h=500&fit=crop"
  "prod_beautyskincare_9"  = "https://images.unsplash.com/photo-1600428853876-fb7d4f800dc1?w=500&h=500&fit=crop"
  "prod_beautyskincare_10" = "https://images.unsplash.com/photo-1631214503851-25e43d33d57d?w=500&h=500&fit=crop"

  # CAR & MOTORBIKE
  "prod_carmotorbike_1"  = "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=500&h=500&fit=crop"
  "prod_carmotorbike_2"  = "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=500&h=500&fit=crop"
  "prod_carmotorbike_3"  = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop"
  "prod_carmotorbike_4"  = "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=500&h=500&fit=crop"
  "prod_carmotorbike_5"  = "https://images.unsplash.com/photo-1600712242805-5f78671b24da?w=500&h=500&fit=crop"
  "prod_carmotorbike_6"  = "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&h=500&fit=crop"
  "prod_carmotorbike_7"  = "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=500&h=500&fit=crop"
  "prod_carmotorbike_8"  = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop"
  "prod_carmotorbike_9"  = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop"
  "prod_carmotorbike_10" = "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=500&h=500&fit=crop"

  # BOOKS & LITERATURE
  "prod_booksliterature_1"  = "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&h=500&fit=crop"
  "prod_booksliterature_2"  = "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&h=500&fit=crop"
  "prod_booksliterature_3"  = "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=500&fit=crop"
  "prod_booksliterature_4"  = "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=500&h=500&fit=crop"
  "prod_booksliterature_5"  = "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=500&h=500&fit=crop"
  "prod_booksliterature_6"  = "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&h=500&fit=crop"
  "prod_booksliterature_7"  = "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=500&h=500&fit=crop"
  "prod_booksliterature_8"  = "https://images.unsplash.com/photo-1474932430478-367dbb6832c1?w=500&h=500&fit=crop"
  "prod_booksliterature_9"  = "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=500&h=500&fit=crop"
  "prod_booksliterature_10" = "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=500&h=500&fit=crop"
}

$updated = 0
foreach ($product in $json) {
  $id = $product.id
  if ($imageMap.ContainsKey($id)) {
    $product.image = $imageMap[$id]
    $updated++
  }
}

# Save back with compact formatting similar to original
$jsonOutput = $json | ConvertTo-Json -Depth 10
Set-Content "products.json" -Value $jsonOutput -Encoding UTF8

Write-Host "SUCCESS: Updated $updated out of $($json.Count) product images!" -ForegroundColor Green
