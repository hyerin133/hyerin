const memberList = () => {
    const memberLists = JSON.parse(localStorage.getItem("memberLists"));
    memberLists.reverse(); //원본배열
    console.log(memberLists);

    const $tbody = $("tb-memberLists");
    $tbody.empty();
    $.each(memberLists, (i, {userName, userId, userPassord, datetime}) => {
        $tbody.append(`<tr>
        <td>${i + 1}</td>
        <td>${username}</td>
        <td>${userId}</td>
        <td>${userPassord}</td>
        <td>${formatDatetime(datetime)}</td>
      </tr>`);
    });
};

const formatDatetime = (millis) => {
    const d = new Date(millis);
    const f = (n) => n >= 10 ? n : "0" + n;
    return `${d.getFullYear()}/${f(d.getMonth() + 1)}/${f(d.getDate())} ${f(d.getHours())}:${f(d.getMinutes())}`;
}

const saveMemberlist = () => {
    const $userName = $(userName);
    const $userId = $(userId);
    const $userPassword = $(userPassord);
    const $dateTime = $(datetime);

    if($userName.val() == "" || $userId.val() == "" || $userPassword.val() == "" || $dateTime.val() == "")
    return;

    // 1. 사용자입력값을 memberList객체생성
    const gb = new memberList($userName.val(), $userId.val(), $userPassword.val(), $dateTime());

    // 2. localStorage에 추가 : 배열로 관리
    const memberLists = JSON.parse(localStorage.getItem("memberLists")) || [];
    memberLists.push(gb);

    console.log(memberLists);

    localStorage.setItem("memberLists", JSON.stringify(memberLists));

    // 3.초기화
    $userName.val('');
    $userId.val('');
    $userPassword.val('');
    $dateTime.val('');

    // 리스트 목록보기
    memberList();
  };

  class memberList {
    constructor(userName, userId, userPassord, datetime){
      this.userName = userName;
      this.userId = userId;
      this.userPassord = userPassord;
      this.datetime = Date.now(); // unix time 밀리초
    }
}