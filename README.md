# MacStudio v1.0

macstudio를 모티브로 만든 인터렉션 퍼블

## 사용버전

* Node : 20.18.1\
* yarn : 1.22.22 

## 프로젝트 실행방법

1. yarn\
2. yarn start

## 주요기능

### `MainSection1`

ScrollTrigger를 이용한 Text와 이미지 교체 애니메이션

### `MainSection2`

ScrollTrigger와 pin Action을 이용한 도큐먼트 와이드값 변동과 text 흐름 애니메이션

### `MainSection3`

useState를 이용한 탭 버튼에 따른 타이틀 변경 및 그래프 변동 애니메이션

### `MainSection4`

ScrollTrigger를 이용한 이미지 교체 애니메이션

## 폴더구조

MAC-STUDIO\
│\
├─public\
│  ├─css\
│  │  ├─fonts               프로젝트 사용폰트\
│  │  └─icons               프로젝트 웹폰트 아이콘\
│  └─images\
│      ├─hero               히어로섹션 애니용 이미지\
│      └─xrayMac            섹션 애니용 이미지\
│
└─src\
    ├─component             컴포넌트용 폴더 ex.Button\
    ├─fragment              플래그먼트용 폴더 ex.Header\
    ├─media                 동영상 폴더\
    ├─page\
    │  └─mainSectionPage    메인섹션 요소 폴더\
    ├─main.js               메인Wrap JS\    
    └─scss                  각 페이지별 scss정의 폴더\