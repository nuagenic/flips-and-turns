import Header from "@/components/Header";
import { FlippableLink } from "@/components/Link";

export default function About() {
  return (
    <main className="z-0 flex w-full flex-grow flex-col items-center justify-center overflow-hidden bg-basic">
      <Header />
      <div className="z-20 flex flex-col items-start justify-center">
        <div>
          <span>flipsandturns는 200({"  "}</span>
          <FlippableLink char="이" href="https://www.leo-je-eon-lee.com/" />
          <span>{"   "}</span>
          <FlippableLink char="백" href="https://brunch.co.kr/@bbaekcloud" />
          <span>{"  "})이 작업한다</span>
        </div>
        <div>
          flipsandturns는 보드게임 &apos;텔레스트레이션&apos;에서 영감을 받았다
        </div>
        <div>flipsandturns는 제주도에서 시작되었다</div>
        <div>
          <span> flipsandturns는{"  "}</span>
          <FlippableLink char="백" href="https://brunch.co.kr/@bbaekcloud" />
          <span>{"  "}의 졸업논문 주제다</span>
        </div>
        <div>flipsandturns는 어떻게 끝날지 아무도 모른다</div>
        <div>
          <span>flipsandturns는{"  "}</span>
          <FlippableLink char="이" href="https://www.leo-je-eon-lee.com/" />
          <span>{"  와   "}</span>
          <FlippableLink char="백" href="https://brunch.co.kr/@bbaekcloud" />
          <span> 의 대화와 크게 다르지 않다</span>
        </div>
        <div>flipsandturns는 주변 지인에게 큰 호응을 얻지 못했다</div>
        <div>flipsandturns는 정사각형이라는 타협점을 찾았다</div>
        <div>flipsandturns는 웹이다</div>
        <div>more to come...</div>
      </div>
    </main>
  );
}