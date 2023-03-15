function monthOfYear(monthNumber) {
  switch (monthNumber) {
    case 1:
      console.log(
        `Given a month number is ${monthNumber} then the name of month is January`
      );
      break;
    case 2:
      console.log(
        `Given a month number is ${monthNumber} then the name of month is February`
      );
      break;
    case 3:
      console.log(
        `Given a month number is ${monthNumber} then the name of month is March`
      );
      break;
    case 4:
      console.log(
        `Given a month number is ${monthNumber} then the name of month is April`
      );
      break;

    case 5:
      console.log(
        `Given a month number is ${monthNumber} then the name of month is May`
      );
      break;
    case 6:
      console.log(
        `Given a month number is ${monthNumber} then the name of month is June`
      );
      break;
    case 7:
      console.log(
        `Given a month number is ${monthNumber} then the name of month is July`
      );
      break;
    case 8:
      console.log(
        `Given a month number is ${monthNumber} then the name of month is Augast`
      );
      break;
    case 9:
      console.log(
        `Given a month number is ${monthNumber} then the name of month is September`
      );
      break;
    case 10:
      console.log(
        `Given a month number is ${monthNumber} then the name of month is Octomber`
      );
      break;
    case 11:
      console.log(
        `Given a month number is ${monthNumber} then the name of month is November`
      );
      break;
    case 12:
      console.log(
        `Given a month number is ${monthNumber} then the name of month is December`
      );
      break;

    default:
        console.log(`Invalid Month: ${monthNumber}`);
      break;
  }
}
monthOfYear();
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
monthOfYear(0);
monthOfYear(null);

