// npx tsx src/lib/sendEmail.ts로 스크립트 실행
export default async function sendEmail() {
  try {
    const response = await fetch("http://localhost:3000/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    console.log("Email sent:", result);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

sendEmail();
