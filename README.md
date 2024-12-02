# <img width="200" alt="image" src="https://github.com/user-attachments/assets/cb614de8-b69b-4e70-b68f-a9be8f2709c6">

로고 디자인 의뢰자가 컨테스트를 개최하거나 디자이너에게 직접 문의할 수 있으며, 누구나 디자이너로 참여해 상금을 받을 수 있는 **로고 네이밍&디자인 아웃소싱 플랫폼**입니다. **의뢰자가 컨테스트를 개최하는 기능&컨테스트 상금 결제 기능을** 구현하였습니다. 

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

![그림01](https://github.com/user-attachments/assets/5bc7264d-2fe3-42c6-b416-dce6d0a3c3f4)


- 사용자는 컨테스트를 개최할때 상금을 설정할 수 있습니다.
- **등수 추가하기** 버튼으로 최대 3등까지 상금액수와 명수를 선택할 수 있습니다.
- **다음** 버튼을 누르면 결제 정보 확인 페이지로 이동합니다.


## 💵 상금 결제 기능

![그림02](https://github.com/user-attachments/assets/d718dad0-c163-4165-a3f2-fc0b0b9a585d)


- 결제하기전 결제자가 입력한 정보를 확인하는 페이지 입니다.
- **결제하기** 버튼을 누르면 결제 페이지로 이동합니다.


![그림03](https://github.com/user-attachments/assets/3bace458-1bd2-4871-9128-69b73fcd3406)


- 포트원 대행사를 통해 카카오 결제 API를 이용했습니다.
- **결제하기** 버튼을 누르면 QR코드가 화면에 나타나고, QR코드를 통해 이미지와 같이 결제 과정이 순차적으로 이루어집니다.


![그림04](https://github.com/user-attachments/assets/307bbeda-87fe-4016-a429-aca1c146aaf5)


- 결제 과정이 끝나면 개최한 컨테스트의 보기 페이지로 이동합니다.
