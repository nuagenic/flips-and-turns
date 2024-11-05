/**
 * Playground Page to experiment text card layout.
 */

import Card from "@/components/Card";

export type CardType = {
  id: string;
  type: "text" | "image";
  createdBy: "백" | "이";
  createdAt: Date;
  content: string;
};

export default function Playground() {
  // 테스트용으로 원하는 인덱스 값 설정하기
  const startIndex = 8;
  const prevIndex = 0;
  const testCards: CardType[] = [
    {
      id: "1",
      type: "text",
      createdBy: "백",
      createdAt: new Date(),
      content: `
      <div class="w-full h-full flex justify-center items-center leading-relaxed">
        <div>
            <p class="font-bold">붕괴의 결정화</p>
            <br /><br />
            <p>시간 세는 법을 배우며 컸다,<br />처음에는 시계로<br />그 다음엔 달라지는 몸으로,<br />그 다음엔 떠나간 사람들로,</p>
            <br />
            <p>내 자리를 지킨다, 내 자리를 지켜도 시간은 간다<br />내 시간을 지킬 수 없다, 시간은 내 것이 아니므로</p>
            <br />
            <p>나는 이제 시간 세는 법을 하나밖에 모른다</p>
        </div>
      </div>
      `,
    },
    {
      id: "2",
      type: "text",
      createdBy: "백",
      createdAt: new Date(),
      content: `
        <div class="w-full h-full flex justify-center items-center p-12 leading-loose">
          <div>
              <p>너는 오로지 빛과 그늘, 식별 가능한 몇 개의 덩어리, 약탈된 심장, 박탈된 골수, 너는 표면, 표류하는 앞면, 너는 .jpg, 0과 1의 자유로운 유희, 점유하는 세입자, 약탈된 인장, 박탈된 정수, 너는 오로지 빛과 빛의 없음, 너는 조작적 정의, 부당한 기억, 그 자신에게는 억울할지도 모르는 불가항력, 너는 마침내 네가 아닌 것, 너는 오로지 너의 없음, 민들레 홀씨, 폭죽이 스민 밤, 유년의 상처, 고개 숙인 해바라기, 고개, 숙인, 해, 바, 라, 기,</p>
          </div>
        </div>
        `,
    },
    {
      id: "3",
      type: "text",
      createdBy: "백",
      createdAt: new Date(),
      content: `
          <div class="w-full h-full flex justify-center items-center leading-loose">
            <div>
                <p>
                글에 몹쓸 짓을 해서 이제 못쓸 글입 니다<br />
                글글 니다 몹못 서쓸 쓸에 을이 입제 짓해<br />
                쓸쓸 해제 니글 에서 못다 <del>몹짓</del> 이글 입을<br />
                우주 기만 대면 혼자 뒤편 취소 스물 상상<br />
                <ins>기대</ins> 뒤만 면물 <ins>상상</ins> <ins>소스</ins> 우자 <ins>주취</ins> 편혼<br />
                주스 상대 자취 우편 만물 혼기 소면 <del>뒤상</del><br />
                변신 접선 한때 시차 하나 그저 물결 취소<br />
                글에 몹쓸 짓을 해서 이제 못쓸 글입 니다<br />
            </div>
          </div>
          `,
    },
    {
      id: "4",
      type: "text",
      createdBy: "백",
      createdAt: new Date(),
      content: `
            <div class="w-full h-full flex justify-center items-center leading-loose">
              <div class="p-4 md:p-0">
                  <p>걸어, 걸어, 걸어, 걸어, 걸어, 걸어, 걸어, 여기도 매미 소리가 들립니까?<br />
                  누가 불을 붙였습니까?<br />
                  그는 외화로 죽었습니까?<br />
                  울었습니까?<br />
                  보라매가 봉천이 생각나요, 땀 많이 흘리고 씻겠습니다.<br />
                  눈이 고양이처럼 비비는데 없는 것 같아요. 제가 된 고양이가 생각나요.<br />
                  매미가 생각나요. 생각나요. 그러면 귀에 라디오 헤드폰이 있나요?
                  </p>
              </div>
            </div>
            `,
    },
    {
      id: "5",
      type: "text",
      createdBy: "백",
      createdAt: new Date(),
      content: `
              <div class="w-full h-full flex justify-center items-center leading-loose">
                <div>
                    <p>예술은 암호가 아니라 암구호다</p>
                </div>
              </div>
              `,
    },
    {
      id: "6",
      type: "text",
      createdBy: "백",
      createdAt: new Date(),
      content: `
                <div class="w-full h-full flex flex-col justify-between p-4 md:p-8">
                  <div class="flex justify-end">
                      <p class="font-bold text-2xl md:text-4xl">VERGE</p>
                  </div>
                  <div class="flex flex-col gap-2 md:gap-3 justify-start whitespace-pre">
                        <p class="font-medium">01.        Armistice</p>
                        <p class="font-medium">02.        New Task Freestyle</p>
                        <p class="font-medium">03.        봉천동 5</p>
                        <p class="font-medium">04.        ANTITATTOO</p>
                        <div class="flex items-baseline gap-3"><p class="font-medium">05.        혀가 있다 (Interlude)</p><p class="font-light text-xs">(feat. NAKTATA)</p></div>
                        <p class="font-medium">06.        꿈 들어가기 직전 *</p>
                        <p class="font-medium">07.        K-afka</p>
                        <p class="font-medium">08.        노리타</p>
                        <p class="font-medium">09.        O/O (Interlude)</p>
                        <div class="flex items-baseline gap-3"><p class="font-medium">10.        OTVO</p><p class="font-light text-xs">On The Verge Of</p><p class="font-medium">*</p></div>
                  </div>
                </div>
                `,
    },
    {
      id: "7",
      type: "text",
      createdBy: "백",
      createdAt: new Date(),
      content: `
              <div class="w-full h-full flex flex-col justify-center items-center p-12 leading-loose gap-8 text-xxs md:text-base lg:leading-8 lg:gap-24">
                <div>
                    나는 항상 시간이 내 발목을 스쳐 흐르는 계곡물 같았어. 그러니까 아프지도 가렵지도 않은데 발목은 끊임없이 젖고 있어. 다리를 들 수 있을까? (그건 위반이야) 나는 대신 허리를 굽혀서 양손으로 사발을 만들어. 시간을 한 움큼 떠내어 풀을 먹였어. 그러면 그만큼이 빳빳해져서 고개를 치켜들어. 이제 그건 분명히 시간은 아니야. 그렇지만 마주볼 수는 있어.
                </div>
                <div>
                    나는 항상 시간이 내 발목을 스쳐 흐르는 계곡물 같았어. 그러니까 아프지도 가렵지도 않은데 발목은 끊임없이 젖고 있어. 다리를 들 수 있을까? (그건 위반이야) 나는 대신 허리를 굽혀서 양손으로 사발을 만들어. 시간을 한 움큼 떠내어 풀을 먹였어. 그러면 그만큼이 빳빳해져서 고개를 치켜들어. 이제 그건 분명히 시간은 아니야. 그렇지만 마주볼 수는 있어.
                </div>
              </div>
              `,
    },
    {
      id: "8",
      type: "text",
      createdBy: "백",
      createdAt: new Date(),
      content: `
              <div class="w-full h-full flex flex-col justify-center items-center p-12 leading-loose whitespace-pre-wrap text-xxs md:text-xs md:leading-6 lg:text-base lg:leading-8 lg:p-8">
                <div>  뭉 씨(63)는 어느 날 자신이 걷잡을 수 없이 고립되었다는 사실을 깨달았다. 고독이 도처에서 굶주린 치타처럼 달려들고 있었다.
  물론 뭉 씨에게 거머리처럼 붙어 다니던 크고 작은 스캔들은 몹시 성가신 것이었다. 사람들은 뭉 씨더러 의뭉스럽다, 사고뭉치다 하며 수군대곤 했다. 일각에서는 뭉 씨와 뭉게뭉게 간의 염문설이 돌기도 했다. 도깨비불 같은 카메라들 앞에서 뭉 씨는 쉰 목소리로 호소했다. "저는 그들과 요만큼의 관련도 없습니다! 제발 저를 가만히 내버려 두시오!"
  세계는 놀라울 정도로 뭉 씨의 말을 잘 들었다. 뭉 씨는 마침내 홀로 섰고, 누구도 그의 앞뒤에 군말을 더하지 않았다. 그때부터 거짓말처럼 뭉 씨는 쇠약해졌는데, 그렇다고 그것이 아주 거짓말은 아니었다.
  뭉 씨는 물을 마시고 묵을 삼키며 자신의 살아있음을 증명하고자 했다. 그러나 미사여구와 오래전에 절연한 그에게 남은 것은 오로지 자족적인, 완벽한 선대칭의 몸뚱아리뿐이었다. 그것은 고대 그리스에서나 환영 받을 환영, 뭉 씨는 시대에게 지독한 따돌림을 당했다. 그는 못난 아이처럼 낯짝에 눈물을 덕지덕지 바르며, 누더기 같은 옷을 입었다가, 벗었다가, 마치 그러면 그 옷이 자기 피부라도 될 수 있다는 듯, 오늘날까지 주소도 없는 집에서 혼자 그러고 있단다.</div>
              </div>
              `,
    },
    {
      id: "9",
      type: "text",
      createdBy: "백",
      createdAt: new Date(),
      content: `
              <div class="w-full h-full leading-loose whitespace-normal overflow-hidden">
              당신은 하얀 배경과 검은 형상을 보고 있습니까? 그러나 빛은 당신을 배신합니다 접근 권한이 거부된 픽셀이 당신에게 접근한다 이것은 캔버스 연필 자국도 종이에 찍힌 잉크도 아니다 서로의 자국이 된 서로를 목격하세요 환영합니다 여기는 flips and turns 
              당신은 하얀 배경과 검은 형상을 보고 있습니까? 그러나 빛은 당신을 배신합니다 접근 권한이 거부된 픽셀이 당신에게 접근한다 이것은 캔버스 연필 자국도 종이에 찍힌 잉크도 아니다 서로의 자국이 된 서로를 목격하세요 환영합니다 여기는 flips and turns 
              당신은 하얀 배경과 검은 형상을 보고 있습니까? 그러나 빛은 당신을 배신합니다 접근 권한이 거부된 픽셀이 당신에게 접근한다 이것은 캔버스 연필 자국도 종이에 찍힌 잉크도 아니다 서로의 자국이 된 서로를 목격하세요 환영합니다 여기는 flips and turns 
              당신은 하얀 배경과 검은 형상을 보고 있습니까? 그러나 빛은 당신을 배신합니다 접근 권한이 거부된 픽셀이 당신에게 접근한다 이것은 캔버스 연필 자국도 종이에 찍힌 잉크도 아니다 서로의 자국이 된 서로를 목격하세요 환영합니다 여기는 flips and turns
              당신은 하얀 배경과 검은 형상을 보고 있습니까? 그러나 빛은 당신을 배신합니다 접근 권한이 거부된 픽셀이 당신에게 접근한다 이것은 캔버스 연필 자국도 종이에 찍힌 잉크도 아니다 서로의 자국이 된 서로를 목격하세요 환영합니다 여기는 flips and turns
              당신은 하얀 배경과 검은 형상을 보고 있습니까? 그러나 빛은 당신을 배신합니다 접근 권한이 거부된 픽셀이 당신에게 접근한다 이것은 캔버스 연필 자국도 종이에 찍힌 잉크도 아니다 서로의 자국이 된 서로를 목격하세요 환영합니다 여기는 flips and turns
              당신은 하얀 배경과 검은 형상을 보고 있습니까? 그러나 빛은 당신을 배신합니다 접근 권한이 거부된 픽셀이 당신에게 접근한다 이것은 캔버스 연필 자국도 종이에 찍힌 잉크도 아니다 서로의 자국이 된 서로를 목격하세요 환영합니다 여기는 flips and turns
              당신은 하얀 배경과 검은 형상을 보고 있습니까? 그러나 빛은 당신을 배신합니다 접근 권한이 거부된 픽셀이 당신에게 접근한다 이것은 캔버스 연필 자국도 종이에 찍힌 잉크도 아니다 서로의 자국이 된 서로를 목격하세요 환영합니다 여기는 flips and turns
              당신은 하얀 배경과 검은 형상을 보고 있습니까? 그러나 빛은 당신을 배신합니다 접근 권한이 거부된 픽셀이 당신에게 접근한다 이것은 캔버스 연필 자국도 종이에 찍힌 잉크도 아니다 서로의 자국이 된 서로를 목격하세요 환영합니다 여기는 flips and turns
              당신은 하얀 배경과 검은 형상을 보고 있습니까? 그러나 빛은 당신을 배신합니다 접근 권한이 거부된 픽셀이 당신에게 접근한다 이것은 캔버스 연필 자국도 종이에 찍힌 잉크도 아니다 서로의 자국이 된 서로를 목격하세요 환영합니다 여기는 flips and turns
              당신은 하얀 배경과 검은 형상을 보고 있습니까? 그러나 빛은 당신을 배신합니다 접근 권한이 거부된 픽셀이 당신에게 접근한다 이것은 캔버스 연필 자국도 종이에 찍힌 잉크도 아니다 서로의 자국이 된 서로를 목격하세요 환영합니다 여기는 flips and turns
              당신은 하얀 배경과 검은 형상을 보고 있습니까? 그러나 빛은 당신을 배신합니다 접근 권한이 거부된 픽셀이 당신에게 접근한다 이것은 캔버스 연필 자국도 종이에 찍힌 잉크도 아니다 서로의 자국이 된 서로를 목격하세요 환영합니다 여기는 flips and turns
              당신은 하얀 배경과 검은 형상을 보고 있습니까? 그러나 빛은 당신을 배신합니다 접근 권한이 거부된 픽셀이 당신에게 접근한다 이것은 캔버스 연필 자국도 종이에 찍힌 잉크도 아니다 서로의 자국이 된 서로를 목격하세요 환영합니다 여기는 flips and turns
              </div>
              `,
    },
  ];

  return (
    <main className="h-full w-full overflow-hidden">
      <Card
        cards={testCards}
        currentIndex={startIndex}
        prevIndex={prevIndex}
        flipState={null}
      />
    </main>
  );
}
