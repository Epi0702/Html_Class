let a = Number(prompt('첫번째 수를 입력하세요'));
let b = Number(prompt('두번째 수를 입력하세요'));

console.log(a > b ? a : a == b ? "같은 숫자입니다." : b);

switch (new Date().getDay()) {
    case 1:
        document.write('월요일입니다.');
        break;
    case 2:
        document.write('화요일입니다.');
        break;
    case 3:
        document.write('수요일입니다.');
        break;
    case 4:
        document.write('목요일입니다.');
        break;
    case 5:
        document.write('금요일입니다.');
        break;
    default:
        document.write('금금요일입니다. 주말이 뭐죠?');
        break;
}