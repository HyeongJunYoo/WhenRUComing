class Coord {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  distance(nextStop) {
    return Math.sqrt(
      Math.pow(this.x - nextStop.x, 2) + Math.pow(this.y - nextStop.y),
    );
  }
}

const igonggwan = new Coord(37.276682, 127.134465); //이공관
const bongwan = new Coord(37.275715, 127.133373); //본관
const bonToIn_1 = new Coord(37.275204, 127.132472); //본관 ->인문 꺽이는 길 1
const bonToIn_2 = new Coord(37.275651, 127.131907); //본관 ->인문 꺽이는 길 2
const insagwan = new Coord(37.275074, 127.130962); //인문사회관
const inToGi_1 = new Coord(37.274361, 127.129213); //인문- > 입구까지 길 중 꺽이는 길
const frontGate = new Coord(37.273563, 127.129148); //강남대 정문
const inToGi_2 = new Coord(37.270741, 127.12631); //정문 지나고 삼거리
const inToGi_3 = new Coord(37.275616, 127.120009); //기흥역 가는곳 사거리1
const inToGi_4 = new Coord(37.274111, 127.118607); //기흥역 가는곳 꺽이는곳
const inToGi_5 = new Coord(37.273794, 127.116077); //기흥역 가는곳 사거리2
const giheung = new Coord(37.274572, 127.116073); //기흥역 4번 출구
const giToSyal_1 = new Coord(37.275994, 127.116104); //샬룸관 가는 길 사거리
const giToSyal_2 = new Coord(37.275738, 127.119236); //샬룸관 가는 길 꺽이는 곳
const giToSyal_3 = new Coord(37.270481, 127.126427); //샬룸관 가는 길 삼거리
const giToSyal_4 = new Coord(37.273905, 127.130606); //샬룸관 가는 길 꺽이는 곳(학교)
const syallomgwan = new Coord(37.274591, 127.1302398); //샬룸관
const syalToBon = new Coord(37.274757, 127.130196); //샬룸관 -> 본관 길 꺽이는 곳

//목적지
const destination = [
  bongwan,
  bonToIn_1,
  bonToIn_2,
  insagwan,
  inToGi_1,
  frontGate,
  inToGi_2,
  inToGi_3,
  inToGi_4,
  inToGi_5,
  giheung,
  giToSyal_1,
  giToSyal_2,
  giToSyal_3,
  frontGate,
  giToSyal_4,
  syallomgwan,
  syalToBon,
  bonToIn_2,
  bonToIn_1,
  bongwan,
  igonggwan,
];

//본관 -> 인문
const bToInDist =
  bongwan.distance(bonToIn_1) +
  bonToIn_1.distance(bonToIn_2) +
  bonToIn_2.distance(insagwan);
//인문 ->기흥
const inToGiDist =
  insagwan.distance(inToGi_1) +
  inToGi_1.distance(frontGate) +
  frontGate.distance(inToGi_2) +
  inToGi_2.distance(inToGi_3) +
  inToGi_3.distance(inToGi_4) +
  inToGi_4.distance(inToGi_5) +
  inToGi_5.distance(giheung);
//기흥->샬룸
const giToSyalDist =
  giheung.distance(giToSyal_1) +
  giToSyal_1.distance(giToSyal_2) +
  giToSyal_2.distance(giToSyal_3) +
  giToSyal_3.distance(frontGate) +
  frontGate.distance(giToSyal_4) +
  giToSyal_4.distance(syallomgwan);
//샬룸->본관
const syalToBonDist =
  syallomgwan.distance(syalToBon) +
  syalToBon.distance(bonToIn_2) +
  bonToIn_2.distance(bonToIn_1) +
  bonToIn_1.distance(bongwan);
//본관->이공
const bonToi = bongwan.distance(igonggwan);

//전체 노선 길이
const busRouteDist =
  bToInDist + inToGiDist + giToSyalDist + syalToBonDist + bonToi;
