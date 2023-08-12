//미완성
async function getdata(){
    const url= 'http://openapi.jeonju.go.kr/rest/parking/getParkingList'
    
    const response = await fetch(url)
    const data = await response.json()
    console.log("data");

}
    getData();
//미완성



    // 참고영상:https://www.youtube.com/watch?v=fBbRFhAGEIE&t=29s
		
		/* 공공데이터포털
		 * http://data.go.kr
		 */
		/* visual studio code  확장자명 html,css,Js,py
		 * 
		 */

