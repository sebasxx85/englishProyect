import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersRankingService {

  users = [
    { "name": "Alice Johnson", "score": 270030, "language": "English", "avatar": "https://robohash.org/alice.png" },
    { "name": "MarcoRossi", "score": 464594, "language": "Italian", "avatar": "https://robohash.org/marco.png" },
    { "name": "PedroOliveira", "score": 745966, "language": "Portuguese", "avatar": "https://robohash.org/pedro.png" },
    { "name": "SophiaCarter", "score": 344567, "language": "English", "avatar": "https://robohash.org/sophia.png" },
    { "name": "GiovanniBianchi", "score": 455867, "language": "Italian", "avatar": "https://robohash.org/giovanni.png" },
    { "name": "Lucas_Silva", "score": 606010, "language": "Portuguese", "avatar": "https://robohash.org/lucas.png" },
    { "name": "EmilyClark", "score": 130647, "language": "English", "avatar": "https://robohash.org/emily.png" },
    { "name": "AntonioLuca", "score": 113337, "language": "Italian", "avatar": "https://robohash.org/antonio.png" },
    { "name": "FernandaSouza", "score": 850765, "language": "Portuguese", "avatar": "https://robohash.org/fernanda.png" },
    { "name": "JohnDoe", "score": 1010765, "language": "English", "avatar": "https://robohash.org/john.png" },
    { "name": "MatteoRicci", "score": 786900, "language": "Italian", "avatar": "https://robohash.org/matteo.png" },
    { "name": "CamilaPereira", "score": 580989, "language": "Portuguese", "avatar": "https://robohash.org/camila.png" },
    { "name": "seba85", "score": 320245, "language": "English", "avatar": "https://robohash.org/seba.png" },
    { "name": "lina_queen", "score": 150976, "language": "Italian", "avatar": "https://robohash.org/lina.png" },
    { "name": "diego2010", "score": 304884, "language": "Portuguese", "avatar": "https://robohash.org/diego.png" },
    { "name": "use43", "score": 406787, "language": "English", "avatar": "https://robohash.org/use43.png" },
    { "name": "karolPrincess", "score": 906775, "language": "Italian", "avatar": "https://robohash.org/karol.png" },
    { "name": "xXShadowXx", "score": 776789, "language": "Portuguese", "avatar": "https://robohash.org/shadow.png" },
    { "name": "sandy_moon", "score": 675890, "language": "English", "avatar": "https://robohash.org/sandy.png" },
    { "name": "fastFury", "score": 650897, "language": "Italian", "avatar": "https://robohash.org/fastfury.png" },
    { "name": "felipeGaming", "score": 500765, "language": "Portuguese", "avatar": "https://robohash.org/felipe.png" },
    { "name": "lucyBright", "score": 728901, "language": "English", "avatar": "https://robohash.org/lucy.png" },
    { "name": "ZeroCool99", "score": 1134555, "language": "English", "avatar": "https://robohash.org/zerocool.png" },
    { "name": "playerOne", "score": 976909, "language": "Portuguese", "avatar": "https://robohash.org/playerone.png" },
    { "name": "xandra99", "score": 345709, "language": "English", "avatar": "https://robohash.org/xandra.png" },
    { "name": "speedySam", "score": 1567888, "language": "English", "avatar": "https://robohash.org/speedysam.png" },
    { "name": "shadowNinja", "score": 840912, "language": "Portuguese", "avatar": "https://robohash.org/shadowninja.png" },
    { "name": "darkSoul", "score": 956075, "language": "English", "avatar": "https://robohash.org/darksoul.png" },
    { "name": "coolCat", "score": 238909, "language": "Italian", "avatar": "https://robohash.org/coolcat.png" },
    { "name": "blazeX", "score": 606789, "language": "Portuguese", "avatar": "https://robohash.org/blazex.png" }
  ]
  
    obtenerUsers(){
      return this.users
    }

}
