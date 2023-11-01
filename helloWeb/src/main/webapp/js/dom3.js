// dom3.js
// table>(thead>tr>th*5)+(tbody>tr>td*5)*건수.
import table from './domTable.js';

let url = 'https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=284&serviceKey=qCwQYxNXeK%2FaB1Ngf9oNZDttjmjQ6ku1OdR6%2Fd0Jj5EIdqOxMXolplih%2BYjTqB4uxCuK636co3tf9T5%2Fr9OLvw%3D%3D';
let titles = ['센터id', '센터명', '시도', '연락처', '주소'];

fetch(url)
	// function(resolve) {return resolve.json()}
	.then(resolve => resolve.json())
	.then(fetchCallback)
	.catch(err => console.log('error=> ', err));

// fetch 호출되는 함수. callback함수.
function fetchCallback(result) {
	let rawData = result.data; // 원래데이터.
	console.log('hhhh', rawData[0])
	let sidoAry = []; // sidoAry에 sido 정보를 중복된 값제거.
	rawData.forEach(center => {
		if (sidoAry.indexOf(center.sido) == -1) { // 존재하지 않음.
			sidoAry.push(center.sido);
		}
	})

	let sidoSel = document.querySelector('#sidoList')
	sidoAry.forEach(sido => {
		let opt = document.createElement('option');
		opt.innerHTML = sido;
		sidoSel.append(opt);
	})
	// select 태그에 change이벤트 발생.
	sidoSel.addEventListener('change', changeCallback);
	function changeCallback(e) {
		console.log(e.target.value);
		let searchSiso = e.target.value;
		// 선택된 시도 값에 맞는 센터명만 출력.
		let filterAry = rawData.filter(center => center.sido == searchSiso);
		genTable(filterAry);
	}

	genTable(rawData); // 초기데이터로 화면출력.
	//let filterAry = rawData.filter((center, idx) => idx < 10);
	//genTable(filterAry);
}

function genTable(rawData = [], page = 1) {
	// 초기화.
	// document.getElementById('show')
	document.querySelector('#show').innerHTML = '';

	// 첫번째, 마지막 => 계산.
	let startNo = (page - 1) * 5;
	let endNo = page * 5;

	// 첫번째, 마지막 페이지 => 계산.
	let totalCnt = rawData.length;
	let lastPage = Math.ceil(totalCnt / 5);
	let endPage = Math.ceil(page / 10) * 10;
	let beginPage = endPage - 9;
	// 5페이지씩 보여주기.
	endPage = page + 2;
	beginPage = page - 2;
	beginPage = beginPage < 1 ? 1 : beginPage;

	let prevPage = false, nextPage = false;
	if (beginPage > 1) {
		prevPage = true;
	}
	if (endPage < lastPage) {
		nextPage = true;
	}
	if (endPage > lastPage) {
		endPage = lastPage;
	}
	console.log(prevPage)
	document.querySelector('.pagination').innerHTML = '';

	//이전페이지 여부
	if (prevPage) {
		let aTag = document.createElement('a');
		aTag.setAttribute('href', '#');
		aTag.innerHTML = '&laquo;';
		aTag.addEventListener('click', function(e) {
			genTable(rawData, beginPage - 3);
		})
		document.querySelector('.pagination').append(aTag);
	}
	// 전체페이지
	for (let i = beginPage; i <= endPage; i++) {
		let aTag = document.createElement('a');
		aTag.setAttribute('href', '#');
		aTag.innerHTML = i;
		if (i == page) {
			aTag.setAttribute('class', 'active')
		}
		aTag.addEventListener('click', function(e) {
			genTable(rawData, i);
		})
		document.querySelector('.pagination').append(aTag);
	}
	//이전페이지 여부
	if (nextPage) {
		let aTag = document.createElement('a');
		aTag.setAttribute('href', '#');
		aTag.innerHTML = '&raquo;';
		aTag.addEventListener('click', function(e) {
			genTable(rawData, endPage + 3);
		})
		document.querySelector('.pagination').append(aTag);
	}

	// 전체 rawData로 출력.
	let thead = table.makeHead(titles); // 헤더정보.
	let mapData = rawData.reduce((acc, center, idx) => { // 매핑정보 출력.
		if (idx >= startNo && idx < endNo) {
			let newCenter = {
				id: center.id,
				centerName: center.centerName.replace('코로나19 ', ''),
				sido: center.sido,
				phoneNumber: center.phoneNumber,
				lat: center.lat,
				lng: center.lng,
				address: center.address
			}
			acc.push(newCenter); // 새로 생성된 newCenter를 배열에 담는다.
		}
		return acc; // 추가된 배열을 반환해서 다음순번의 처리에 acc로 사용.
	}, []);

	let tbody = table.makeBody(mapData); // [{},{},{}.....{}]
	let tbl = document.createElement('table');
	tbl.setAttribute('border', '1');
	tbl.append(thead, tbody);
	document.querySelector('#show').append(tbl);

	// tr클릭이벤트등록.
	let targetTr = document.querySelectorAll('tbody tr')
	targetTr.forEach(tr => {
		tr.addEventListener('click', function(e) {
			let lat = tr.dataset.lat;//tr.children[4].innerHTML;
			let lng = tr.dataset.lng;//tr.children[5].innerHTML;
			//location.href = 'daumapi.html?x=' + lat + '&y=' + lng;
			window.open('daumapi.html?x=' + lat + '&y=' + lng);
		})
	})
}

