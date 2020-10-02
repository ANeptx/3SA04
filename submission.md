# 3SA04 นายชิษณุพงศ์ จันทร์แท่น 6135512056

เครื่องมือที่จำเป็น

-	Chocolatey (for Windows), Brew (for OSX)
-	Node.js
-	Yarn
-	Git
-	expo CLI
-	Visual Studio Code
-	Android Studio

- หลังจากที่ได้ติดตั้ง Chocolatey ในเครื่องแล้ว สามารถติดตั้ง Node.js, Yarn และ Git ได้ผ่าน Chocolatey ผ่าน Command Prompt (ที่รันด้วยสิทธิ์ Administrator)

>> choco install nodejs
>> choco install yarn
>> choco install git

- ในการติดตั้ง create-react-app CLI สามารถทำผ่านการใช้คำสั่ง yarn ผ่าน Command Prompt (ที่รันด้วยสิทธิ์ Administrator)

>> yarn global add expo-cli

 - สร้างโครงร่างโปรเจ็คสำหรับการพัฒนา React Native ด้วย expo (ให้เลือก template เป็น blank)
 
>> expo init wt-app
>> cd wt-app

- ทำการรันโปรแกรมโปรแกรมขึ้นมา แล้วใช้สมาร์ทโฟนรันโปรแกรม expo แล้วสั่งสแกน QR Code ที่ได้จากคำสั่ง yarn start
>> yarn start


- เปิด Source Code ของโปรเจ็ค wt-app ด้วย Visual Studio Code หรือ Text Editor ที่ต้องการ แก้ไข App.js เหมือนโค้ดข้างล่าง

สังเกตผลลัพธ์ที่ได้บนโปรแกรม Expo ในสมาร์ทโฟน

- สร้างโฟลเดอร์ components ในโปรเจ็ค แล้วสร้างไฟล์ Weather.js

- คอมโพเนนต์ Weather รับ Props ชื่อ zipCode 

- เรียกใช้คอมโพเนนต์ Weather และส่ง Props ที่ชื่อ zipCode เป็นค่า 90110

- สร้างคอมโพเนนต์ Forecast ที่มีการใช้ props ดังต่อไปนี้ main, description และ temp

- กำหนด State โดยใช้ useState hook แล้วใช้เป็น props ส่งผ่านไปยังคอมโพเนนต์ Forecast ที่สร้างขึ้นมาใหม่
>>หมายเหตุ: ให้ดาวน์โหลดรูปภาพพื้นหลังมาไว้ในโฟลเดอร์นอกสุดของโปรเจค โดยตั้งชื่อไฟล์ว่า bg.jpg

-	Flex Box – การจัด Layout บน React Native จะใช้ Flex Box ในการจัดการ แม้ว่า เทคนิคการจัด Flex Box จะรองรับความซับซ้อนสูง (React Native ไม่สนับสนุนทุก features ของ Flex Box)  อย่างไรก็ตามคุณสมบัติที่ถูกใช้บ่อยในการจัด Layout มี 3 คุณสมบัติ คือ 
-	flex – เป็นตัวเลข น้ำหนักในการแบ่งพื้นที่ เช่นถ้าคอมโพเนนต์ A มี flex เท่ากับ 1, คอมโพเนนต์ B มี flex เท่ากับ 2 หมายความว่า B จะใช้พื้นที่มากกว่า A สองเท่า และถ้ามีคอมโพเนนต์ A เพียง คอมโพเนนต์เดียว จะใช้เต็มพื้นที่
-	flexDirection – แกนหลักของ Layout ว่าคอมโพเนนต์ลูกควรจะจัดเรียงแนวนอน (row) และแนวตั้ง (column) โดยค่า default คือ column
-	justifyContent – การกระจายตัวของคอมโพเนนต์ลูกว่าควรจะเป็นแบบแบบใด ในแนวแกนเดียวกับ flexDirection
-	alignItems - – การกระจายตัวของคอมโพเนนต์ลูกว่าควรจะเป็นแบบแบบใด ในคนละแกนกับ flexDirection
 	 	 	
- เพิ่ม useEffect ลงไปในคอมโพเนนต์ Weather (ทำการ sign up แบบฟรีที่ https://home.openweathermap.org/users/sign_up  เพื่อรับ APPID)

- ส่วนของไฟล์ Weather.js (ให้นำ api key ที่ได้จาก url ด้านบน มาแทนที่คำว่า YOUR_API_KEY)

- Application ที่สมบูรณ์มักมีหน้าจอ UI (สกรีน) มากกว่า 1 หน้าจอ ในการสลับหน้าจอไปมา สามารถทำได้ผ่านการใช้ Navigation Library ซึ่งไลบรารีที่ถือเป็น Official จาก React คือ react-navigation

>> expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

>> yarn add @react-navigation/stack @react-navigation/native

- เพิ่มคอมโพเนนต์ ZipCodeScreen ซึ่งเป็นหน้าจอสำหรับเลือกรหัสไปรษณีย์ (zip code) จากรายการที่กำหนดไว้ ทั้งนี้นักศึกษาจะต้องกำหนด Style ให้เหมาะสมด้วยตนเอง

- ปรับ App.js ให้ render ผลลัพธ์จากไลบรารี react-navigation แทนการ render คอมโพเนนต์ Weather โดยตรง

- ในการทำงานร่วมกันของแต่ละหน้าจอ UI เราสามารถส่งผ่านค่าการทำงานได้โดยการใช้ Route Parameter

- เพิ่มคอมโพเนนต์ WeatherScreen สำหรับหน้าจอแสดงคอมโพเนนต์ Weather

- เพิ่ม Screen ลงใน App.js

- ปรับ ZipItem ในไฟล์ ZipCodeScreen.js เพื่อสร้างลิงค์ไปยังหน้า Weather พร้อมส่งผ่าน Route Parameter
