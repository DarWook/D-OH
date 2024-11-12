# <img width="200" alt="image" src="https://github.com/user-attachments/assets/cb614de8-b69b-4e70-b68f-a9be8f2709c6">

로고 디자인 의뢰자가 컨테스트를 개최하거나 디자이너에게 직접 문의할 수 있으며, 누구나 디자이너로 참여해 상금을 받을 수 있는 로고 네이밍 서비스입니다. **의뢰자가 컨테스트를 개최하는 기능&컨테스트 상금 결제 기능을** 구현하였습니다. 

## 🛠️ 기술 스택

- **백엔드**
  - Spring Boot
  - MyBatis
  - MySQL

- **프론트엔드**
  - JavaScript
  - Thymeleaf

- **인프라 및 배포**
  - Amazon EC2
  - Docker

## 🚀 기능 소개


## 🏆 컨테스트 상금 설정

![KakaoTalk_Photo_2024-11-07-16-35-00 007](https://github.com/user-attachments/assets/d4a8af3a-3f2a-4fbd-98f7-b95d5c2b3cfe)

- 사용자는 컨테스트를 개최할때 상금을 설정할 수 있습니다.
- **등수 추가하기** 버튼으로 최대 3등까지 상금액수와 명수를 선택할 수 있습니다.
- **다음** 버튼을 누르면 결제 정보 확인 페이지로 이동합니다.


## 💵 상금 결제 기능

![KakaoTalk_Photo_2024-11-07-16-34-58 001](https://github.com/user-attachments/assets/f21cd4ba-8e5a-41b7-af92-442166edfa0b)

- 결제하기전 결제자가 입력한 정보를 확인하는 페이지 입니다.
- **결제하기** 버튼을 누르면 결제 페이지로 이동합니다.

![KakaoTalk_Photo_2024-11-07-16-34-58 002](https://github.com/user-attachments/assets/3db9c5c5-b85d-4af4-b513-823dd0a7b527)

- 포트원 대행사를 통해 카카오 결제 API를 이용했습니다.
- **결제하기** 버튼을 누르면 QR코드가 화면에 나타나고, QR코드를 통해 이미지와 같이 결제 과정이 순차적으로 이루어집니다.
- 결제 과정이 끝나면 개최한 컨테스트의 보기 페이지로 이동합니다.
