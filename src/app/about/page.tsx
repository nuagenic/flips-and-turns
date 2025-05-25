import Header from "@/components/Header";
import IndexController from "@/components/IndexController";
import { FlippableLink } from "@/components/Link";

export default function About() {
  return (
    <main className="z-0 flex w-full flex-grow flex-col items-center justify-center overflow-auto bg-basic p-2">
      <Header />
      <div className="z-20 flex aspect-square w-full transform flex-col justify-between overflow-auto bg-white p-8 text-black md:h-3/4vh md:w-3/4vh md:p-12 md:text-base lg:h-3/4vh lg:w-3/4vh">
        <div className="z-20 flex flex-col items-start justify-center break-keep text-xs leading-5 md:text-sm md:leading-6">
          <div>
            <span>flipsandturns는 200({"  "}</span>
            <FlippableLink char="이" href="https://www.leo-je-eon-lee.com/" />
            <span>{"   "}</span>
            <FlippableLink char="백" href="https://baekchangin.com" />
            <span>{"  "})이 작업한다</span>
          </div>
          <div>
            flipsandturns는 &apos;텔레스트레이션&apos;에서 영감을 받았다
          </div>
          <div>flipsandturns는 제주도에서 시작되었다</div>
          <div>
            <span> flipsandturns는{"  "}</span>
            <FlippableLink char="백" href="https://baekchangin.com" />
            <span>{"  "}의 졸업논문 주제다</span>
          </div>
          <div>flipsandturns는 어떻게 끝날지 아무도 모른다</div>
          <div>
            <span>flipsandturns는{"  "}</span>
            <FlippableLink char="이" href="https://www.leo-je-eon-lee.com/" />
            <span>{"  와   "}</span>
            <FlippableLink char="백" href="https://baekchangin.com" />
            <span> 의 대화와 크게 다르지 않다</span>
          </div>
          <div>flipsandturns는 주변 지인에게 큰 호응을 얻지 못했다</div>
          <div>flipsandturns는 정사각형이라는 교점을 찾았다</div>
          <div>flipsandturns는 웹이다</div>
          <div>more to come...</div>
        </div>
      </div>
    </main>
  );
}
