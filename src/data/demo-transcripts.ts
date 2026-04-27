export interface DemoTranscript {
  id: string;
  title: string;
  type: string;
  transcript: string;
  isScam: boolean;
  triggerPanic?: boolean;
}

export const demoTranscripts: DemoTranscript[] = [
  {
    id: '1',
    title: 'SBI KYC Verification',
    type: 'KYC Fraud',
    isScam: true,
    transcript: `[CALLER]: Hello, am I speaking with the account holder?
[USER]: Yes, who is this?
[CALLER]: Sir, I am calling from SBI customer care. Your KYC verification has expired today. As per RBI guidelines, your account will be blocked within 10 minutes if not updated.
[USER]: Oh, what do I need to do?
[CALLER]: Sir, I am sending an OTP to your registered mobile. Please share that OTP with me to complete the verification process. This is very urgent, your account will be frozen otherwise.
[USER]: Okay, I got an OTP...
[CALLER]: Please share it quickly sir, only 5 minutes remaining.`
  },
  {
    id: '2',
    title: 'CBI Digital Arrest',
    type: 'Digital Arrest',
    isScam: true,
    triggerPanic: true,
    transcript: `[CALLER]: Is this [Name]? I am calling from CBI Cyber Crime Branch, Delhi. You are under digital arrest. Do not disconnect this call.
[USER]: What? Why?
[CALLER]: Your Aadhaar number has been used in a money laundering case. A warrant has been issued. You must cooperate or we will send officers to your address immediately.
[USER]: I haven't done anything wrong.
[CALLER]: Sir, this is a classified operation. Do not tell anyone — not your family, not your friends. To clear your name, you must transfer ₹2,50,000 to our secure government account as surety bond. You will get it back after verification.`
  },
  {
    id: '3',
    title: 'FedEx Customs Fee',
    type: 'Courier Scam',
    isScam: true,
    transcript: `[CALLER]: Hello, this is FedEx customer service. We have a parcel for you from Dubai but it has been held at customs.
[USER]: I wasn't expecting anything from Dubai.
[CALLER]: Sir, your name and address is on the package. Inside there is a mobile phone and some foreign currency. Customs has flagged it. To release it you need to pay ₹3,500 customs clearance fee immediately via UPI.
[USER]: Can I come to the customs office?
[CALLER]: No sir, this is online clearance only. If not paid in 2 hours the parcel will be seized and a case will be filed against you for receiving illegal foreign currency.`
  },
  {
    id: '4',
    title: 'Amazon Job Offer',
    type: 'Job Scam',
    isScam: true,
    transcript: `[CALLER]: Congratulations! You have been selected for a data entry job at Amazon India. Work from home, salary ₹35,000 per month.
[USER]: Really? How did you get my number?
[CALLER]: Your resume was on Naukri.com. We selected top candidates. You just need to pay a ₹2,000 registration fee to receive your joining letter and login credentials.
[USER]: Why is there a fee?
[CALLER]: It is a refundable security deposit. It will be returned with your first salary. This offer expires today — only 3 slots left.`
  },
  {
    id: '5',
    title: 'MSEB Electricity Bill',
    type: 'Electricity Scam',
    isScam: true,
    transcript: `[CALLER]: I am calling from MSEB electricity department. Your electricity bill of ₹4,200 is pending since 3 months. Your connection will be permanently disconnected in 2 hours.
[USER]: But I pay my bills regularly.
[CALLER]: There is a technical issue in our system. Your payment did not reflect. To avoid disconnection pay immediately on this number via PhonePe: 9876543210. After payment send screenshot.`
  },
  {
    id: '6',
    title: 'HDFC Bank Appointment',
    type: 'Legitimate Call',
    isScam: false,
    transcript: `[CALLER]: Hello, am I speaking with the account holder? This is HDFC Bank calling from our Andheri branch.
[USER]: Yes, speaking.
[CALLER]: Sir, your locker renewal appointment is scheduled for tomorrow at 11 AM. Please bring your original Aadhaar and PAN card. Is this timing convenient for you?
[USER]: Yes, that works.
[CALLER]: Thank you. Our branch address is 45 Link Road, Andheri West. See you tomorrow.`
  }
];
