import svgPaths from "./svg-dwixiiytpe";
import clsx from "clsx";
import imgRectangle65 from "figma:asset/48f049f834ab317462ef25844d3cc0e4b93fa06b.png";
import imgRectangle66 from "figma:asset/922abc3b70f36c651fcd83e676ae66906a9b69ae.png";
import imgRectangle67 from "figma:asset/31fc434421bcac0daa44b9774a8ac8c8a02451ad.png";
import imgRectangle40 from "figma:asset/ac0620103f66b0ec1facb234de9e874e8057ac0e.png";
import imgRectangle37 from "figma:asset/183d9d9ad9413595396bce93bf669145d62aca27.png";
import imgRectangle38 from "figma:asset/9e24839f07201494ad134c2c9fac751b2027624f.png";
import imgRectangle39 from "figma:asset/85341b6c3df379a7dd55ae35d043778e948450ad.png";
import imgRectangle36 from "figma:asset/5753f46291b137c85e84ff57026b85c48f5a9fb8.png";
import imgRectangle41 from "figma:asset/1eeabd034e1f5edfaf7bc8ae7419e24f47bfeaab.png";

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[19.938px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9384 19.9384">
        {children}
      </svg>
    </div>
  );
}

function Frame7358Helper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[760.894px] pointer-events-none relative shrink-0 w-[1361.197px]">
      <div aria-hidden="true" className="absolute inset-0">
        {children}
      </div>
      <div aria-hidden="true" className="absolute border-[1.529px] border-black border-solid inset-0" />
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[491.349px] relative shrink-0 w-[378.308px]">
      <div className="absolute inset-0 rounded-[9.748px] shadow-[3.899px_6.499px_12.998px_0px_rgba(0,0,0,0.25)]">{children}</div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper1>
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[9.748px]">{children}</div>
    </Wrapper1>
  );
}
type Text3Props = {
  text: string;
  additionalClassNames?: string;
};

function Text3({ text, additionalClassNames = "" }: Text3Props) {
  return (
    <div className={clsx("content-stretch flex items-center justify-center p-[7.552px] relative", additionalClassNames)}>
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555] text-[13.957px] text-nowrap">
        <p className="leading-[normal]">{text}</p>
      </div>
    </div>
  );
}
type Text2Props = {
  text: string;
};

function Text2({ text }: Text2Props) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[7.552px] relative w-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#333] text-[19.364px] text-nowrap">
            <p className="leading-[18.154px]">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555] text-[16.944px] text-nowrap">
        <p className="leading-[18.154px]">{text}</p>
      </div>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#f4f4f4] text-[20px] text-nowrap">{text}</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[31.719px] items-center relative shrink-0">
      <Text text="KO" />
      <Text text="EN" />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex h-[42px] items-center justify-end relative shrink-0 w-[96px]">
      <Frame5 />
    </div>
  );
}

function BugermenuSwap() {
  return (
    <div className="h-[12.143px] relative shrink-0 w-[15px]" data-name="bugermenu_swap">
      <div className="absolute inset-[0_-11%_-22%_-11%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.2993 14.8137">
          <g id="bugermenu_swap">
            <g id="Vector">
              <mask fill="white" id="path-1-inside-1_1_11">
                <path d={svgPaths.p48d8e80} />
              </mask>
              <path d={svgPaths.p48d8e80} fill="var(--fill-0, #F4F4F4)" />
              <path d={svgPaths.pf547b40} fill="var(--stroke-0, #F4F4F4)" mask="url(#path-1-inside-1_1_11)" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[34.74px] items-center relative shrink-0 w-[164px]">
      <Frame25 />
      <BugermenuSwap />
    </div>
  );
}

function Component() {
  return (
    <div className="bg-[#709474] content-stretch flex gap-[1000px] items-center justify-center px-0 py-[14px] relative shrink-0 w-full" data-name="헤더">
      <div aria-hidden="true" className="absolute border-[1.546px_1.546px_0px] border-black border-solid inset-0 pointer-events-none" />
      <p className="font-['Inria_Serif:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f4f4f4] text-[25px] text-nowrap">SANGREEN</p>
      <Frame26 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute content-stretch flex items-center left-0 top-0">
      <Frame7358Helper>
        <div className="absolute bg-[#d9d9d9] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgRectangle65} />
        <div className="absolute bg-[rgba(223,223,223,0.2)] inset-0" />
      </Frame7358Helper>
      <Frame7358Helper>
        <div className="absolute bg-[#d9d9d9] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgRectangle66} />
      </Frame7358Helper>
      <Frame7358Helper>
        <div className="absolute bg-[#d9d9d9] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgRectangle67} />
      </Frame7358Helper>
      <Frame7358Helper>
        <div className="absolute bg-[#d9d9d9] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgRectangle65} />
      </Frame7358Helper>
    </div>
  );
}

function Component2() {
  return (
    <div className="h-[755.208px] relative shrink-0 w-[1359.375px]" data-name="메인이미지슬라이드">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Frame11 />
      </div>
      <div aria-hidden="true" className="absolute border-[0px_1.51px_1.51px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Component3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[1359.375px]" data-name="메인메뉴_헤더와이미지">
      <Component />
      <Component2 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute h-[91.559px] left-[-4.53px] top-0 w-[524.602px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 524.602 91.5587">
        <g id="Frame 7355">
          <rect fill="white" height="91.5587" width="524.602" />
          <path d="M185.782 22.9139V68.6448" id="Vector 1" stroke="var(--stroke-0, #555555)" strokeWidth="1.21027" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[9.063px] items-center relative shrink-0 w-[105.729px]">
      <Text1 text="Reservation" />
      <Text2 text="Room 101" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center justify-center p-[7.552px] relative shrink-0">
      <Text1 text="Check In/Out" />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[1.51px] items-start relative shrink-0 w-[268.854px]">
      <Frame6 />
      <Text2 text="2025.01.27 월 - 2025.01.28 화" />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[66.458px] items-end relative shrink-0">
      <Frame7 />
      <Frame8 />
    </div>
  );
}

function Component4() {
  return (
    <div className="content-stretch flex flex-col gap-[7.552px] h-[90.625px] items-center px-[37.76px] py-[15.104px] relative shrink-0 w-[521.094px]" data-name="방,날짜_버튼">
      <Frame9 />
      <Frame10 />
    </div>
  );
}

function Component5() {
  return (
    <div className="absolute bg-white content-stretch flex h-[91.38px] items-center justify-center left-0 p-[7.552px] top-0 w-[157.839px]" data-name="예악하기_컴포넌트">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#333] text-[18.125px] w-[71.745px]">
        <p className="leading-[11.328px]">예약하기</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="h-[91.38px] shrink-0 sticky top-0 w-[157.839px]">
      <Component5 />
    </div>
  );
}

function Component6() {
  return (
    <div className="content-stretch flex h-[90.625px] items-start relative shrink-0 w-[680.443px]" data-name="메인메뉴_예약버튼">
      <Component4 />
      <Frame22 />
    </div>
  );
}

function Component7() {
  return (
    <div className="content-stretch flex flex-col gap-[7.552px] h-[834.505px] items-end justify-end px-0 py-[2.266px] relative shrink-0 w-[1359.375px]" data-name="메인메뉴_프레임">
      <Component3 />
      <Component6 />
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[20.243px] grow items-start min-h-px min-w-px relative shrink-0 text-nowrap">
      <div className="flex flex-col font-['NanumGothic:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32.388px] text-black">
        <p className="leading-[normal] text-nowrap">Room List</p>
      </div>
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[35.087px] relative shrink-0 text-[#555] text-[21.592px]">지친 일상 속 자연을 느낄 수 있는 산그린펜션의 객실입니다.</p>
    </div>
  );
}

function Component8() {
  return (
    <div className="h-[16.075px] relative shrink-0 w-[75.299px]" data-name="디테일버튼_컴포넌트">
      <p className="absolute bottom-[0.47%] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[35.087px] left-0 text-[#555] text-[21.592px] text-nowrap top-0">{`Detail >`}</p>
    </div>
  );
}

function Component9() {
  return (
    <div className="content-stretch flex gap-[53.98px] items-end justify-end relative shrink-0 w-[1349.512px]" data-name="룸리스트">
      <Frame />
      <Component8 />
    </div>
  );
}

function Frame29() {
  return <div className="absolute h-[326.967px] left-[137.97px] top-[116.24px] w-[1048.777px]" />;
}

function Rectangle4() {
  return (
    <Wrapper>
      <img alt="" className="absolute h-full left-[-94.72%] max-w-none top-[-0.03%] w-[194.73%]" src={imgRectangle40} />
    </Wrapper>
  );
}

function Rectangle1() {
  return (
    <Wrapper>
      <img alt="" className="absolute h-full left-[-17.98%] max-w-none top-[-0.05%] w-[173.23%]" src={imgRectangle37} />
    </Wrapper>
  );
}

function Rectangle2() {
  return (
    <div className="h-[491.349px] relative rounded-[11.071px] shrink-0 w-[378.308px]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[11.071px] size-full" src={imgRectangle38} />
    </div>
  );
}

function Rectangle3() {
  return (
    <Wrapper1>
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[9.748px] size-full" src={imgRectangle39} />
    </Wrapper1>
  );
}

function Frame27() {
  return (
    <div className="absolute content-stretch flex gap-[59.046px] items-center left-0 top-0">
      <Rectangle4 />
      <Rectangle1 />
      <Rectangle2 />
      <Rectangle3 />
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute h-[491.559px] left-[calc(50%-0.17px)] top-[22.63px] translate-x-[-50%] w-[1730.052px]" data-name="Component 1">
      <Frame27 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="bg-white h-[537px] overflow-x-auto overflow-y-clip relative shrink-0 w-[1350px]">
      <Frame29 />
      <Component1 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[50px] items-center relative shrink-0">
      <Component9 />
      <Frame28 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="basis-0 flex flex-col font-['NanumGothic:Bold',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[30.912px] text-black">
        <p className="leading-[normal]">Special</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <p className="basis-0 font-['Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[33.488px] min-h-px min-w-px relative shrink-0 text-[#555] text-[20.608px]">산그린 펜션의 부대시설과 특장점을 확인해보세요.</p>
    </div>
  );
}

function Component10() {
  return (
    <div className="content-stretch flex flex-col gap-[19.635px] items-start relative shrink-0 w-full" data-name="스페셜텍스트">
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1169.255px]">
      <Component10 />
    </div>
  );
}

function Component11() {
  return (
    <div className="h-[14.349px] relative shrink-0 w-[67.214px]" data-name="디테일버튼_컴포넌트">
      <p className="absolute bottom-[2.43%] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[31.32px] left-0 text-[#555] text-[19.274px] text-nowrap top-0">{`Detail >`}</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[51.354px] items-end relative shrink-0 w-full">
      <Frame1 />
      <Component11 />
    </div>
  );
}

function Rectangle() {
  return (
    <div className="h-[208.654px] relative shrink-0 w-[1288.578px]" data-name="Rectangle 36/기본">
      <div className="absolute h-[208.654px] left-[calc(50%-0.29px)] pointer-events-none top-[calc(50%-0.22px)] translate-x-[-50%] translate-y-[-50%] w-[1288.578px]">
        <div aria-hidden="true" className="absolute inset-0">
          <div className="absolute bg-[#e4e4e4] inset-0" />
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute h-[462.41%] left-[-0.03%] max-w-none top-[-207.07%] w-full" src={imgRectangle36} />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[#a8a8a8] border-[1.288px] border-solid inset-0" />
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[32.474px] items-start leading-[0] not-italic relative shrink-0 w-[427.612px]">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#463535] text-[25.76px] w-full">
        <p className="leading-[normal]">Main Swimming Pool</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[30.912px] relative shrink-0 text-[#555] text-[20.608px] tracking-[-0.4122px] w-full">
        <p className="mb-0">{`깨끗하고 넓은 수영 공간에서 가족, 친구들과 함께 시원한 물놀이를 즐겨보세요. `}</p>
        <p className="mb-0">{`투명카약을 수영장에서 즐기며 물 위를 떠다니는 특별한 경험을 만끽해보세요. `}</p>
        <p className="mb-0"> </p>
        <p>* 오후 3시~ 오후 8시까지 하절기에만 운영합니다.</p>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[50px] items-start relative shrink-0 w-[1350px]">
      <Frame14 />
      <Rectangle />
      <Frame15 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[1278px]">
      <div className="flex flex-col font-['NanumGothic:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[31.645px] text-black w-full">
        <p className="leading-[normal]">Tour Spot</p>
      </div>
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[34.282px] relative shrink-0 text-[#555] text-[21.097px] w-full">펜션 근처 주요 관광지 정보를 확인해보세요!</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[13.185px] items-start relative shrink-0">
      <div className="h-[14.384px] relative shrink-0 w-[15.822px]" data-name="map">
        <div className="absolute inset-[-4.58%_-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1409 15.7025">
            <path d={svgPaths.p35eea080} id="map" stroke="var(--stroke-0, #555555)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.31853" />
          </svg>
        </div>
      </div>
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[31.645px] not-italic relative shrink-0 text-[#555] text-[21.097px] tracking-[-0.4219px] w-[602.57px]">강원도 춘천시 남산면 남이섬길1</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[13.185px] items-start relative shrink-0">
      <div className="h-[19.675px] relative shrink-0 w-[15.822px]" data-name="Vector">
        <div className="absolute inset-[-3.35%_-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1409 20.993">
            <g id="Vector">
              <path d={svgPaths.p37ad6b00} stroke="var(--stroke-0, #555555)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.31853" />
              <path d={svgPaths.p357d6a80} stroke="var(--stroke-0, #555555)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.31853" />
            </g>
          </svg>
        </div>
      </div>
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[31.645px] not-italic relative shrink-0 text-[#555] text-[21.097px] tracking-[-0.4219px] w-[602.57px]">펜션에서 약 34km, 차량 약 50분 거리</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[19.778px] items-start relative shrink-0">
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[110px] items-start relative shrink-0 w-[1350px]">
      <Frame31 />
      <div className="flex flex-col font-['NanumSquare:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#555] text-[26.371px] w-[1278px]">
        <p className="leading-[42.193px]">남이섬</p>
      </div>
      <Frame4 />
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] not-italic relative shrink-0 text-[#555] text-[21.097px] tracking-[-0.4219px] w-[602.57px]">
        <p className="leading-[31.645px]">#문화예술의섬 #생명의섬 #남이섬 #나미나라공화국</p>
      </div>
      <div className="absolute h-[479px] left-[714px] top-[0.24px] w-[564px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-[0.88] overflow-hidden">
            <img alt="" className="absolute h-full left-[-13.61%] max-w-none top-[-0.02%] w-[127.26%]" src={imgRectangle41} />
          </div>
          <div className="absolute bg-[rgba(24,21,33,0.22)] inset-0" />
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal gap-[12.083px] items-start leading-[0] relative shrink-0 text-[#555] text-[13.957px] w-full">
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[normal]">경기도 가평군 조종면 현등사길 35-9, 산그린펜션</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[normal]">{`대표자 : 이엽  |  E : sidezzz@naver.com`}</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[normal]">{`T : 031-584-5748  |  P : 010-2206-5748`}</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[20.391px] items-start justify-center relative shrink-0 w-[278.672px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[29.908px] text-black text-nowrap">
        <p className="leading-[normal]">SANGREEN</p>
      </div>
      <Frame17 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <Text3 text="Copyright ⓒ 산그린펜션 All rights reserved." additionalClassNames="w-full" />
      </div>
    </div>
  );
}

function Component12() {
  return (
    <div className="content-stretch flex flex-col gap-[42.292px] items-start relative shrink-0 w-[278.672px]" data-name="사업자정보">
      <Frame19 />
      <Frame18 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[26.432px] items-center relative shrink-0 w-full">
      <Text3 text="고객센터" additionalClassNames="shrink-0" />
      <Text3 text="이용약관" additionalClassNames="shrink-0" />
      <Text3 text="개인정보처리방침" additionalClassNames="shrink-0" />
      <Text3 text="Contact Us" additionalClassNames="shrink-0" />
    </div>
  );
}

function LogosInstagramIcon() {
  return (
    <Wrapper2>
      <g clipPath="url(#clip0_1_6)" id="logos:instagram-icon">
        <path d={svgPaths.p2c8c2f60} fill="var(--fill-0, #0A0A08)" id="Vector" />
      </g>
      <defs>
        <clipPath id="clip0_1_6">
          <rect fill="white" height="19.9384" width="19.9384" />
        </clipPath>
      </defs>
    </Wrapper2>
  );
}

function QlementineIconsFacebook() {
  return (
    <Wrapper2>
      <g clipPath="url(#clip0_1_3)" id="qlementine-icons:facebook-16">
        <path clipRule="evenodd" d={svgPaths.p3a742500} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
      </g>
      <defs>
        <clipPath id="clip0_1_3">
          <rect fill="white" height="19.9384" width="19.9384" />
        </clipPath>
      </defs>
    </Wrapper2>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[12.839px] items-center relative shrink-0">
      <LogosInstagramIcon />
      <QlementineIconsFacebook />
    </div>
  );
}

function Sns() {
  return (
    <div className="content-stretch flex flex-col gap-[78.542px] items-end relative shrink-0 w-[418.385px]" data-name="설정 및 sns">
      <Frame20 />
      <Frame21 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-[1350px]">
      <Component12 />
      <Sns />
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute bg-[#585858] content-stretch flex h-[57px] items-center left-[1415px] px-[30px] py-[20px] top-[3085px] w-[181px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#f4f4f4] text-[24px] w-[124px]">
        <p className="leading-[15px]">learn more</p>
      </div>
    </div>
  );
}

export default function SangreenMainpage() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[132px] items-center px-0 py-[87px] relative size-full" data-name="sangreen_mainpage">
      <Component7 />
      <Frame30 />
      <Frame24 />
      <Frame32 />
      <div className="h-0 relative shrink-0 w-[1450px]">
        <div className="absolute inset-[-0.38px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1450 0.755208">
            <path d="M0 0.377604H1450" id="Line 299" stroke="var(--stroke-0, black)" strokeWidth="0.755208" />
          </svg>
        </div>
      </div>
      <Frame23 />
      <Frame16 />
    </div>
  );
}