# MacStudio v1.0

macstudio를 모티브로 만든 인터렉션 퍼블

## 사용버전

* Node : 20.18.1
* yarn : 1.22.22 

## 프로젝트 실행방법

1. yarn
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
│  │  ├─fonts \
│  │  └─icons \
│  └─images\
│      ├─hero \
│      └─xrayMac \
│
└─src\
    ├─component \
    ├─fragment \
    ├─media \
    ├─page\
    │  └─mainSectionPage \
    ├─main.js \
    └─scss