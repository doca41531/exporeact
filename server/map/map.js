document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("map");
    let markers = []
    let text = []
    let setMarkers = null
    fetch("https://openapi.gg.go.kr/KitgdnCouout?KEY=b954ae1995484a4a8bd178d4d9bf739d&Type=json&pIndex=1&pSize=20").then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();  // JSON을 파싱
    })
    .then(data => {
        data["KitgdnCouout"][1]["row"].forEach(el => {
            // console.log(el);
            if (container != null) {
                let options = {
                  center: new kakao.maps.LatLng(37.564214, 127.001699), //지도의 중심좌표.
                  level: 10, //지도의 레벨(확대, 축소 정도)
                };
              // let testData = JSON.parse(JSON.stringify(datas));
              // testData.forEach(el => {
                  // console.log(el);
                  var map = new kakao.maps.Map(container, options);
            
                  var position = new kakao.maps.LatLng(el.REFINE_WGS84_LAT, el.REFINE_WGS84_LOGT);
                  
                  var marker = new kakao.maps.Marker({
                    position: position,
                  });
              
                  marker.setMap(map);

                  markers.push(marker)

                      for (var i = 0; i < markers.length; i++) {
                          markers[i].setMap(map);
                      }            
                    
                      
                var iwContent = `<div style="padding:5px; height:200px;"><p>이름 : ${el.KITGDN_NM} <br> 지번 주소: ${el.REFINE_LOTNO_ADDR} <br> 모집 기간 ${el.RECRUT_PERD} <br> 분양 면적(㎡) ${el.LOTOUT_AR_DESC} <br> 분양 가격 ${el.LOTOUT_PC_CONT} <br> 신청 방법 : ${el.APLCATN_METH_CONT} <br> 홈페이지 : ${el.HMPG_ADDR}</p></div>`, // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
                iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
                text.push(iwContent)

                markers.forEach((el2, idx) => {
                    var infowindow = new kakao.maps.InfoWindow({
                        content : text[idx],
                        removable : true
                    });
                    kakao.maps.event.addListener(el2,"click", function () {
                        console.log(1);
                    infowindow.open(map, el2);  
                    });
                })

                }
                
        });
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
  });