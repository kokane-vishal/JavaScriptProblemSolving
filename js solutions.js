// 1. ATM Withdrawal System
function atmWithdrawal(balance, amount, pin, enteredPin) {
    if (enteredPin !== pin) return "Incorrect PIN";
    if (amount > balance) return "Insufficient Funds";
    if (amount % 100 !== 0) return "Enter amount in multiples of 100";
    return `Transaction successful! Remaining balance: $${balance - amount}`;
}
console.log(atmWithdrawal(1000, 300, 1234, 1234));

// 2. Online Shopping Discount & Free Shipping
function calculateFinalAmount(orderAmount) {
    let discount = orderAmount > 1000 ? 0.2 : orderAmount >= 500 ? 0.1 : 0;
    let discountedPrice = orderAmount * (1 - discount);
    let shipping = discountedPrice > 50 ? 0 : 10;
    return discountedPrice + shipping;
}
console.log(calculateFinalAmount(1200));

// 3. Student Grading System
function calculateGrade(marks, attendance) {
    if (attendance > 90) marks += 5;
    return marks >= 90 ? "A" : marks >= 80 ? "B" : marks >= 70 ? "C" : marks >= 60 ? "D" : "F";
}
console.log(calculateGrade(85, 95));

// 4. Smart Traffic Light System
function trafficLightControl(density) {
    return density === "Heavy Traffic" ? 60 : density === "Moderate Traffic" ? 40 : 20;
}
console.log(trafficLightControl("Moderate Traffic"));

// 5. Movie Ticket Pricing
function calculateTicketPrice(age, showTime) {
    let price = 12;
    if (showTime < 17) price *= 0.8;
    if (age > 60) price *= 0.7;
    if (age < 12) price *= 0.6;
    return price;
}
console.log(calculateTicketPrice(65, 16));

// 6. Job Application Filter
function isEligibleForJob(age, experience, qualification) {
    return age >= 21 && age <= 55 && experience >= 2 && qualification === "Bachelor's Degree";
}
console.log(isEligibleForJob(30, 5, "Bachelor's Degree"));

// 7. E-commerce Coupon Redemption
function applyCoupon(orderAmount, couponCode) {
    let discount = couponCode === "DISCOUNT10" && orderAmount > 500 ? 0.1 : 0;
    let freeShipping = couponCode === "FREESHIP" && orderAmount > 200;
    let finalAmount = orderAmount * (1 - discount);
    if (!freeShipping && finalAmount < 50) finalAmount += 10;
    return finalAmount;
}
console.log(applyCoupon(600, "DISCOUNT10"));

// 8. Fitness Membership Plan
function choosePlan(planType, wantsTrainer, wantsDietPlan) {
    return planType === "VIP" ? "VIP Plan ($80)" : (planType === "Premium" || wantsTrainer) ? "Premium Plan ($50)" : "Basic Plan ($20)";
}
console.log(choosePlan("Basic", true, false));

// 9. Electricity Bill Calculation
function calculateElectricityBill(units, timeOfDay) {
    let rate = units <= 100 ? 5 : units <= 300 ? 4 : 3;
    if (timeOfDay >= 20 || timeOfDay < 8) rate *= 1.1;
    return units * rate;
}
console.log(calculateElectricityBill(250, 21));

// 10. Flight Ticket Booking
function calculateFlightFare(classType, luggageWeight, isStudent, isSenior) {
    let price = 300 + (classType === "Business" ? 200 : classType === "First" ? 500 : 0);
    if (luggageWeight > 20) price += Math.ceil((luggageWeight - 20) / 10) * 50;
    if (isStudent) price *= 0.85;
    else if (isSenior) price *= 0.9;
    return price;
}
console.log(calculateFlightFare("Economy", 25, false, true));
