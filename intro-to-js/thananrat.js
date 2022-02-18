function askMyName() {
    const name = prompt("What is your name?"); // เรียกใช้คำสั่ง prompt เพื่อถามชื่อ https://www.w3schools.com/jsref/met_win_prompt.asp

    if (name != null) {
        document.getElementById("name").innerHTML = "My name is " + name;
    }
  }

function helloWorld() {
    const h1message = document.getElementById("name").innerText // ใช้คำสั่ง document.getElementById เหมือนใน askMyName เพื่อเอาข้อความใน h1 มาใส่
       alert(h1message + ' ถึงพี่ไม่หล่อแต่ก็น่าห่อกลับบ้าน');
    }

function calAge() {
    const yearOfBirth = prompt(`คุณเกิดวันปี ค.ศ. อะไร (ตัวอย่าง: 1998)`);
    const yourAge = parseFloat(2022 - yearOfBirth);

    if (yearOfBirth != null) {
      alert(`ยินดีด้วย นายอยู่ในประเทศนี้มา ${yourAge} ปีแล้ว`);
  }
}

function loadProfile() {
    const name = `Thananrat`
    const province = `Bangkok`
    
    if (name != null) {
      document.getElementById("my-name").innerText = name;
  }
    if (province != null) {
      document.getElementById("my-province").innerText = province;
  }
}