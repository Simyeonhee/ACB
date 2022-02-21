# 잭슨봇 가이드 v2.0

Copyright (c) 2022, Nev_Lin

이 코드는 무료로 배포되는 소프트웨어입니다. 소프트웨어의 양도자는 자유 소프트웨어 재단이 발행하는 GNU 일반 공중 사용 허가서의 2개 이상 버전을 임의로 선택하고 규정에 따라 프로그램을 수정하거나 재배포할 수 있습니다. 이 오픈 소스 코드는 유용하게 사용될 수 있으리라는 희망으로 배포되지만, 특정 목적에 대한 적합성 여부나 판매용 사용 여부의 묵시적 보증 등 어떠한 형태의 보증도 제공하지 않습니다.

## 개요 및 목차
잭슨봇은 동물의 숲 톡방 유저분들에 한해 더 나은 정보검색 및 톡방 관리의 단순화 등을 목적으로 제작한 자동응답 툴입니다. 해당 봇의 명령어는 모두 느낌표(!)로 시작하는 특징이 있습니다. 아래 목차를 참고하면 원하는 커맨드에 대한 방법을 클릭을 통하여 바로 이동할 수 있습니다.

 1. [잭슨봇으로 정보 검색하기](#잭슨봇으로-정보-검색하기)
 2. [잭슨봇으로 미술품 구별하기](#잭슨봇으로-미술품-구별하기)
 3. [잭슨봇으로 뽑기 진행하기](#잭슨봇으로-뽑기-진행하기)
 4. [잭슨봇으로 실시간 포획 가능한 생물 알아보기](#잭슨봇으로-실시간-포획-가능한-생물-알아보기)
 5. [잭슨봇으로 사용자 지정 명령어 만들기](#잭슨봇으로-사용자-지정-명령어-만들기)
 6. [잭슨봇으로 친구코드 등록/확인하기](#잭슨봇으로-친구코드-등록/확인하기)

## 잭슨봇으로 정보 검색하기

잭슨봇은 **도감에 등록되는 생물 정보**와 **주민 정보**에 대한 검색 기능을 제공합니다.  
(도감에 등록되는 생물 종류 : 곤충, 물고기, 해산물)
- 도감에 등록되는 생물 검색 명령어
  ```
  [예시]
  !정보 물고기 농어
  !정보 곤충 황금사슴벌레
  !정보 해산물 갯가재
  ```
  정보 검색을 하기 위해서는 해당 생물의 종류를 같이 입력해야 합니다.  
  도감에 없는 정보인 경우, 잭슨봇은 해당 정보가 없다는 알림을 출력합니다.
- 주민정보 검색 명령어
  ```
  [예시]
  !주민정보 잭슨
  ```
  주민을 검색하면 잭슨봇이 URL을 출력하는데, 해당 페이지를 들어가면 검색한 주민의 외형, 성별, 종, 생일 등의 다양한 정보를 열람할 수 있습니다.  
  도감 및 주민에 대한 정보는 인게임에서 추가 및 삭제되는 대로 수시로 업데이트 할 예정입니다.

## 잭슨봇으로 미술품 구별하기

잭슨봇은 임의의 미술품에 대하여 진품 및 가품 판별법을 알려주는 기능을 제공하고 있습니다.  
여욱이가 파는 미술품, 조각을 모두 검색할 수 있습니다.
- 미술품 검색 명령어
  ```
  [예시]
  !미술품 아카데믹한 명화
  ```
  검색한 미술품이 진품/가품 구분이 있는 경우, 잭슨봇은 가품 구별 방법과 이미지 링크를 출력합니다.  
  검색한 미술품이 진품만 존재할 경우, 잭슨봇은 진품만 있다고 출력합니다.</p>
  미술품 검색은 키워드만 입력하여 빠른 검색이 가능합니다.
  ```
  [예시]
  !미술품 아카데믹
  (키워드인 '아카데믹'만 입력하여 아카데믹한 명화 검색 가능)
  ```
  잭슨봇이 출력한 사이트에서는 해당 미술품의 진품/가품 차이를 시각적으로 확인할 수 있습니다.

## 잭슨봇으로 뽑기 진행하기

잭슨봇은 추첨 및 기타 이벤트의 편리한 진행을 위해 뽑기 시스템을 지원하고 있습니다.  
뽑기 방식은 선택지 나열과 숫자 뽑기로 크게 두 가지로 나눌 수 있습니다.
- 선택지 나열 명령어
  선택지를 나열할 때는 구분자 "/"를 사용하여 나눌 수 있습니다.  
  잭슨봇은 구분자로 나눈 여러 가지 선택지 중 하나를 같은 확률로 랜덤 선발합니다.  
  다음은 짜장면/짬뽕/탕수육/팔보채/유산슬 중 하나를 임의로 선택하는 커맨드입니다.
  ```
  [예시]
  !선택 짜장면/짬뽕/탕수육/팔보채/유산슬
  ```
  </p>
- 숫자 뽑기 명령어
  숫자 뽑기 명령어에 추가되는 물결 표시 "~"는 초기 명령어인 "!선택" 키워드와 붙어있어야 합니다.  
  그리고 입력하는 숫자는 물결 표시와 떨어져 있어야 합니다.  
  다음은 1부터 36까지의 범위 중 임의의 자연수 1개를 선택하는 커맨드입니다.
  ```
  [예시]
  !선택~ 36
  ```
  
## 잭슨봇으로 실시간 포획 가능한 생물 알아보기

잭슨봇은 한국 표준시간 기준 실시간 포획 가능한 생물을 검색하는 기능을 제공하고 있습니다.  
이는 도감정보 검색과 같이 곤충, 물고기, 해산물 세 종류로 분류됩니다.
- 실시간 포획 가능 생물 검색 명령어  
  다음은 한국 시간 기준으로 남반구에서의 물고기 실시간 출현정보를 검색하는 커맨드입니다.
  ```
  [예시]
  !실시간 물고기 남반구
  ```
  "남반구"(또는 북반구) 키워드를 생략할 수 있으나, 생략된 경우에는 기본적으로 북반구 기준으로 출력됩니다.
  
## 잭슨봇으로 사용자 지정 명령어 만들기

잭슨봇은 명령어를 사용자가 직접 지정하고 삭제하는 기능을 제공하고 있습니다.  
- 사용자 지정 명령어 생성  
  기본적으로 !자동응답 명령어 다음 (사용자가 보내는 메시지)=(잭슨봇이 보내는 메시지)의 구조로 이루어집니다.  
  다음은 사용자가 직접 명령어를 만들 때 사용하는 커맨드입니다.
  ```
  [예시]
  !자동응답 안녕안녕=으앙으앙
  (톡방에서 "안녕안녕"이라는 메세지를 인식하면 잭슨봇이 "으앙으앙"을 출력)
  ```
- 사용자 지정 명령어 삭제  
  다음은 사용자가 만든 명령어를 삭제하는 커맨드입니다.  
  ```
  [예시]
  !제거 안녕안녕
  (위의 예시에서 생성핝 "안녕안녕"의 커맨드를 삭제)
  ```
  사용자가 직접 생성하지 않은, 기본 제공되는 커맨드는 삭제되지 않습니다.
  
## 잭슨봇으로 친구코드 등록/확인하기
- 잭슨봇 가이드 pdf 참조
