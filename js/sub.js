function showImage() {
  document.getElementById('hoverImage').style.display = 'block';
}

function hideImage() {
  document.getElementById('hoverImage').style.display = 'none';
}

// 리뷰 작성 기능
const reviewsList = document.getElementById('reviews-list');
const averageRatingValue = document.getElementById('average-rating-value');
let ratings = [5, 4]; // 초기 리뷰 평점 데이터 (김영수: 5점, 이민정: 4점)

// 평균 평점 계산 함수
function calculateAverageRating() {
  const total = ratings.reduce((sum, rating) => sum + rating, 0);
  const average = total / ratings.length;
  return average.toFixed(1); // 소수점 첫째 자리까지 표시
}

// 평균 평점 업데이트 함수
function updateAverageRating() {
  const average = calculateAverageRating();
  averageRatingValue.textContent = average;
}

// 페이지 로드 시 초기 평균 평점 표시
updateAverageRating();

// 리뷰 작성 이벤트 처리
document.getElementById('review-form').addEventListener('submit', function (e) {
  e.preventDefault(); // 폼 제출 방지

  // 입력 값 가져오기
  const reviewText = document.getElementById('review-text').value.trim();
  const rating = parseInt(document.getElementById('rating').value, 10);

  // 필수 입력 확인
  if (!reviewText || isNaN(rating)) {
    alert('모든 필드를 입력해주세요.');
    return;
  }

  // 새 리뷰 요소 생성
  const newReview = document.createElement('div');
  newReview.classList.add('review');
  newReview.innerHTML = `<p>${reviewText} (평점: ${rating}점)</p>`;

  // 리뷰 목록에 추가
  reviewsList.appendChild(newReview);

  // 평점 데이터에 추가
  ratings.push(rating);

  // 평균 평점 업데이트
  updateAverageRating();

  // 입력 필드 초기화
  document.getElementById('review-form').reset();

  // 성공 메시지 표시
  alert('리뷰가 성공적으로 등록되었습니다!');
});
